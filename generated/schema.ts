// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class MwDaoMember extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save MwDaoMember entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save MwDaoMember entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("MwDaoMember", id.toString(), this);
  }

  static load(id: string): MwDaoMember | null {
    return store.get("MwDaoMember", id) as MwDaoMember | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get mwDaoId(): BigInt {
    let value = this.get("mwDaoId");
    return value.toBigInt();
  }

  set mwDaoId(value: BigInt) {
    this.set("mwDaoId", Value.fromBigInt(value));
  }

  get tokensMwg(): BigInt {
    let value = this.get("tokensMwg");
    return value.toBigInt();
  }

  set tokensMwg(value: BigInt) {
    this.set("tokensMwg", Value.fromBigInt(value));
  }

  get mintMwc(): string | null {
    let value = this.get("mintMwc");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set mintMwc(value: string | null) {
    if (value === null) {
      this.unset("mintMwc");
    } else {
      this.set("mintMwc", Value.fromString(value as string));
    }
  }

  get transfersMwc(): Array<string> | null {
    let value = this.get("transfersMwc");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set transfersMwc(value: Array<string> | null) {
    if (value === null) {
      this.unset("transfersMwc");
    } else {
      this.set("transfersMwc", Value.fromStringArray(value as Array<string>));
    }
  }

  get tokensMwc(): BigInt | null {
    let value = this.get("tokensMwc");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set tokensMwc(value: BigInt | null) {
    if (value === null) {
      this.unset("tokensMwc");
    } else {
      this.set("tokensMwc", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Charity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Charity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Charity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Charity", id.toString(), this);
  }

  static load(id: string): Charity | null {
    return store.get("Charity", id) as Charity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokensMwc(): BigInt {
    let value = this.get("tokensMwc");
    return value.toBigInt();
  }

  set tokensMwc(value: BigInt) {
    this.set("tokensMwc", Value.fromBigInt(value));
  }
}

export class TransferMwc extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TransferMwc entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TransferMwc entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TransferMwc", id.toString(), this);
  }

  static load(id: string): TransferMwc | null {
    return store.get("TransferMwc", id) as TransferMwc | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): string {
    let value = this.get("from");
    return value.toString();
  }

  set from(value: string) {
    this.set("from", Value.fromString(value));
  }

  get to(): string {
    let value = this.get("to");
    return value.toString();
  }

  set to(value: string) {
    this.set("to", Value.fromString(value));
  }

  get tokensMwc(): BigInt {
    let value = this.get("tokensMwc");
    return value.toBigInt();
  }

  set tokensMwc(value: BigInt) {
    this.set("tokensMwc", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }
}

export class MintMwc extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save MintMwc entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save MintMwc entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("MintMwc", id.toString(), this);
  }

  static load(id: string): MintMwc | null {
    return store.get("MintMwc", id) as MintMwc | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(value as BigInt));
    }
  }

  get minter(): string {
    let value = this.get("minter");
    return value.toString();
  }

  set minter(value: string) {
    this.set("minter", Value.fromString(value));
  }

  get minted(): boolean {
    let value = this.get("minted");
    return value.toBoolean();
  }

  set minted(value: boolean) {
    this.set("minted", Value.fromBoolean(value));
  }

  get tokensMwc(): BigInt | null {
    let value = this.get("tokensMwc");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set tokensMwc(value: BigInt | null) {
    if (value === null) {
      this.unset("tokensMwc");
    } else {
      this.set("tokensMwc", Value.fromBigInt(value as BigInt));
    }
  }
}

export class DailyDonation extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save DailyDonation entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DailyDonation entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DailyDonation", id.toString(), this);
  }

  static load(id: string): DailyDonation | null {
    return store.get("DailyDonation", id) as DailyDonation | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transfersMwc(): Array<string | null> {
    let value = this.get("transfersMwc");
    return value.toStringArray();
  }

  set transfersMwc(value: Array<string | null>) {
    this.set("transfersMwc", Value.fromStringArray(value));
  }

  get tokensMwc(): BigInt {
    let value = this.get("tokensMwc");
    return value.toBigInt();
  }

  set tokensMwc(value: BigInt) {
    this.set("tokensMwc", Value.fromBigInt(value));
  }

  get charityDonations(): Array<string | null> {
    let value = this.get("charityDonations");
    return value.toStringArray();
  }

  set charityDonations(value: Array<string | null>) {
    this.set("charityDonations", Value.fromStringArray(value));
  }
}

export class CharityDonation extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save CharityDonation entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save CharityDonation entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("CharityDonation", id.toString(), this);
  }

  static load(id: string): CharityDonation | null {
    return store.get("CharityDonation", id) as CharityDonation | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get charity(): string {
    let value = this.get("charity");
    return value.toString();
  }

  set charity(value: string) {
    this.set("charity", Value.fromString(value));
  }

  get transfersMwc(): Array<string | null> {
    let value = this.get("transfersMwc");
    return value.toStringArray();
  }

  set transfersMwc(value: Array<string | null>) {
    this.set("transfersMwc", Value.fromStringArray(value));
  }

  get tokensMwc(): BigInt {
    let value = this.get("tokensMwc");
    return value.toBigInt();
  }

  set tokensMwc(value: BigInt) {
    this.set("tokensMwc", Value.fromBigInt(value));
  }
}
