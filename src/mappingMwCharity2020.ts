import { BigInt, Address, log } from '@graphprotocol/graph-ts';
import { Transfer, TokensMinted } from '../generated/MwdaoCharity2020/MwdaoCharity2020';
import { TransferMwc, MintMwc, Charity, CharityDailyDonationMwc, MwDaoMember } from '../generated/schema';

const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
const BIG_INT_ZERO = BigInt.fromI32(0);

export function handleTransfer(event: Transfer): void {
  // event Transfer(indexed address from, indexed address to, uint256 value)
  let from = event.params.from.toHex();
  let to = event.params.to.toHex();
  let timestamp = event.block.timestamp;
  let blockNumber = event.block.number;
  let amountMwc = event.params.value;
  let id = timestamp.toString() + "-" + event.transaction.hash.toHex() + "-" + from + "-" + to;

  if (from != ZERO_ADDRESS) {
    
    let mwDaoMember = MwDaoMember.load(from);
    if (mwDaoMember != null) {
      mwDaoMember.tokensMwc = mwDaoMember.tokensMwc.minus(amountMwc);
      mwDaoMember.save();

      let charity = Charity.load(to);
        if (charity == null) {
          charity = new Charity(to);
          charity.tokensMwc = BIG_INT_ZERO;
        }
      charity.tokensMwc = charity.tokensMwc.plus(amountMwc);
      charity.save();

      let date = fromUnixToDate(timestamp.toI32());
      let charityDailyDonationMwcId = date + "-" + to;
      let charityDailyDonationMwc = CharityDailyDonationMwc.load(charityDailyDonationMwcId);
      if (charityDailyDonationMwc == null) {
        charityDailyDonationMwc = new CharityDailyDonationMwc(charityDailyDonationMwcId);
        charityDailyDonationMwc.tokensMwc = BIG_INT_ZERO;
        charityDailyDonationMwc.charity = charity.id;
      }
      charityDailyDonationMwc.tokensMwc = charityDailyDonationMwc.tokensMwc.plus(amountMwc);
      charityDailyDonationMwc.save();

      let transferMwc = new TransferMwc(id);
      transferMwc.from = mwDaoMember.id;
      transferMwc.to = charity.id;
      transferMwc.tokens = amountMwc;
      transferMwc.timestamp = timestamp;
      transferMwc.blockNumber = blockNumber;
      transferMwc.charityDonation = true;
      transferMwc.charityDailyDonationMwc = charityDailyDonationMwc.id;
      transferMwc.save();
    }
  }
}

export function handleTokensMinted(event: TokensMinted): void {
  // event TokensMinted(address donor, uint256 token)
  let timestamp = event.block.timestamp;
  let minter = event.params.donor.toHex();
  let amountMwc = event.params.token;

  let mintMwcId = timestamp.toString() + "-" + minter;

  let mwDaoMember = MwDaoMember.load(minter);
  if (mwDaoMember != null) {
    let mintMwc = new MintMwc(mintMwcId);

    mintMwc.timestamp = timestamp;
    mintMwc.minter = minter;
    mintMwc.tokens = amountMwc;

    mwDaoMember.mintMwc = mintMwc.id;
    mwDaoMember.tokensMwc = mwDaoMember.tokensMwc.plus(amountMwc);

    mintMwc.save();
    mwDaoMember.save();
  }
}

// https://stackoverflow.com/questions/11188621/how-can-i-convert-seconds-since-the-epoch-to-hours-minutes-seconds-in-java/11197532#11197532
function fromUnixToDate(timestampInSeconds : number) : string {
  let daysSinceJan1stNonLeapYear = new Array<number>(13);
  daysSinceJan1stNonLeapYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
  let daysSinceJan1stLeapYear = new Array<number>(13);
  daysSinceJan1stLeapYear = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];

  let sec = timestampInSeconds + 11644473600;
  let wday = Math.floor((sec / 86400 + 1) % 7); // day of week

  let quadricentennials = Math.floor(sec / 12622780800); // 400*365.2425*24*3600
  sec %= 12622780800;

  let centennials = Math.floor(sec / 3155673600); // 100*(365+24/100)*24*3600
  if (centennials > 3) {
    centennials = 3;
  }
  sec -= centennials * 3155673600;

  let quadrennials = Math.floor(sec / 126230400); // 4*(365+1/4)*24*3600
  if (quadrennials > 24) {
    quadrennials = 24;
  }
  sec -= quadrennials * 126230400;

  let annuals = Math.floor(sec / 31536000); // 365*24*3600
  if (annuals > 3) {
    annuals = 3;
  }
  sec -= annuals * 31536000;

  let year =
    1601 +
    quadricentennials * 400 +
    centennials * 100 +
    quadrennials * 4 +
    annuals;

  let leap = false;
  if ((year % 4 == 0) && (!(year % 100 == 0) || (year % 400 == 0))){
    leap = true;
  }

  let yday = sec / 86400;
  sec %= 86400;
  let hour = sec / 3600;
  sec %= 3600;
  let min = sec / 60;
  sec %= 60;

  let mday = 1.0;
  let month = 1;
  if (leap) {
    for (;month < 13; month++) {
      if (yday < daysSinceJan1stLeapYear[month]) {
        mday += yday - daysSinceJan1stLeapYear[month - 1];
        break;
      }
    }
  } else {
    for (;month < 13; month++) {
      if (yday < daysSinceJan1stNonLeapYear[month]) {
        mday += yday - daysSinceJan1stNonLeapYear[month - 1];
        break;
      }
    }
  }
  
  mday = Math.floor(mday);
  year = Math.floor(year);

  let mdayString: string;
  if(mday > 10) {
    mdayString = mday.toString().slice(0,2);
  } else {
    mdayString = mday.toString().slice(0,1);
  }
  let yearString = year.toString().slice(0,4);
  return yearString + "-" + month.toString() + "-" + mdayString;
}
