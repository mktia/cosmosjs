import { Codec } from "@node-a-team/ts-amino";
import { MsgSetName, MsgBuyName, MsgDeleteName } from "./msgs";

export function registerCodec(codec: Codec) {
  codec.registerConcrete("nameservice/SetName", MsgSetName.prototype);
  codec.registerConcrete("nameservice/BuyName", MsgBuyName.prototype);
  codec.registerConcrete("nameservice/DeleteName", MsgDeleteName.prototype);
}
