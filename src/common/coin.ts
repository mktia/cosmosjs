import { Amino } from "@node-a-team/ts-amino";
const { Field, DefineStruct } = Amino;
import { Int } from "./int";
import bigInteger from "big-integer";

@DefineStruct()
export class Coin {
  public static parse(str: string): Coin {
    const re = new RegExp("([0-9]+)[ ]*([a-zA-Z]+)");
    const execed = re.exec(str);
    if (!execed || execed.length !== 3) {
      throw new Error("Invalid coin str");
    }
    const denom = execed[2];
    const amount = execed[1];
    return new Coin(denom, amount);
  }

  @Field.String(0)
  public denom: string;

  @Field.Defined(1)
  public amount: Int;

  constructor(denom: string, amount: Int | bigInteger.BigNumber) {
    this.denom = denom;
    this.amount = amount instanceof Int ? amount : new Int(amount);
  }

  public toString(): string {
    return `${this.amount.toString()}${this.denom}`;
  }
}
