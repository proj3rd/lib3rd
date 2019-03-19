interface IVersion {
  major: number;
  technical: number;
  editorial: number;
}

/*
 * Version Numbering Scheme
 *  http://www.3gpp.org/specifications/specification-numbering/81-version-numbering-scheme
 */
export function versionFromString(str: string): IVersion {
  if (str.length === 3) {
    return {
      major: numberFromAlpha(str[0]),
      technical: numberFromAlpha(str[1]),
      editorial: numberFromAlpha(str[2]),
    };
  } else if (str.length === 6) {
    return {
      major: parseInt(str.substring(0, 2), 10),
      technical: parseInt(str.substring(2, 4), 10),
      editorial: parseInt(str.substring(4, 6), 10),
    };
  }
  throw Error(`Malformed version string (${str})`);
}

function numberFromAlpha(char: string): number {
  if (isNaN(parseInt(char, 10))) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0) + 10;
  } else {
    return parseInt(char, 10);
  }
}
