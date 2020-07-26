import { unimpl } from 'unimpl';

export class AtNotation {
  public level: number;
  public componentIdList: string[];

  private atNotationTag: undefined;

  constructor(level: number, componentIdList: string[]) {
    this.level = level;
    this.componentIdList = componentIdList;
  }

  public toString(): string {
    return unimpl();
  }
}
