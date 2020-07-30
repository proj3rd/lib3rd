/**
 * X.682 clause 10.7
 * ```
 * @....componentId[0]...componentId[n-1]
 * ```
 */
export class AtNotation {
  public level: number;
  public componentIdList: string[];

  private atNotationTag: undefined;

  constructor(level: number, componentIdList: string[]) {
    this.level = level;
    this.componentIdList = componentIdList;
  }

  public toString(): string {
    const repeat = this.level > 0 ? this.level + 1 : 0;
    const arrToString: string[] = [
      '@',
      '.'.repeat(repeat),
      this.componentIdList.join('.'),
    ];
    return arrToString.join('');
  }
}
