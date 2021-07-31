import { MSG_ERR_ASN1_MALFORMED_SERIALIZATION } from "../constants";

/**
 * X.682 clause 10.7
 * ```
 * @....componentId[0]...componentId[n-1]
 * ```
 */
export class AtNotation {
  public level: number;
  public componentIdList: string[];

  public atNotationTag = true;

  constructor(level: number, componentIdList: string[]) {
    this.level = level;
    this.componentIdList = componentIdList;
  }

  public static fromObject(obj: unknown): AtNotation {
    const { level, componentIdList, atNotationTag } = obj as AtNotation;
    if (!atNotationTag) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    // TODO: Need to check if it is non-zero integer or not
    if (typeof level !== 'number') {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (!(componentIdList instanceof Array)) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const isStringList = componentIdList.every((item) => typeof item === 'string');
    if (!isStringList) {
      throw Error(MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    return new AtNotation(level, componentIdList);
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
