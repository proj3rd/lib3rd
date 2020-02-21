import { Syntax } from './syntax';

export class WithSyntaxSpec {
  public syntaxList: Syntax[];

  constructor(syntaxList: Syntax[]) {
    this.syntaxList = syntaxList;
  }
}
