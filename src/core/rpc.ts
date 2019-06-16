import { Context } from "./context";

export class RPC {
  // tslint:disable-next-line: variable-name
  constructor(private _context: Context) {}

  public get context(): Context {
    return this._context;
  }
}