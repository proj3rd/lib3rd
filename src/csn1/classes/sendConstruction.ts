import { Reference } from "./reference";

export class SendConstruction {
  public sendConstruction: string | Reference;

  public csnTypeSendConstruction = true;

  constructor(sendConstruction: string | Reference) {
    this.sendConstruction = sendConstruction;
  }
}
