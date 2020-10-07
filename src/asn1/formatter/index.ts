import { ExtensionMarker } from '../classes/extensionMarker';
import { IntegerValue } from '../classes/integerValue';
import { ValueRange } from '../classes/valueRange';

const RE_START_OF_LINE = /^/gm;

function getConstraintSeparator(
  constraints: Array<ExtensionMarker | IntegerValue | ValueRange>,
  index: number,
): '|' | ',' {
  if (index === 0) {
    throw RangeError();
  }
  const prevIsExtensionMarker = constraints[index - 1] instanceof ExtensionMarker;
  const currIsExtensionMarker = constraints[index] instanceof ExtensionMarker;
  if (!prevIsExtensionMarker && !currIsExtensionMarker) {
    return '|';
  }
  return ',';
}

/**
 * Use case: `SIZE (...)` and `INTEGER (...)`
 * @param constraints
 */
export function getPermittedIntegerValues(
  constraints: Array<ExtensionMarker | IntegerValue | ValueRange>,
): string {
  if (constraints.length === 0) {
    return '';
  }
  const arrToString = ['('];
  constraints.forEach((c, index) => {
    if (index !== 0) {
      arrToString.push(getConstraintSeparator(constraints, index));
    }
    arrToString.push(c.toString());
  });
  arrToString.push(')');
  return arrToString.join(' ');
}

export function indent(text: string, tabSize: number = 4): string {
  return text.replace(RE_START_OF_LINE, ' '.repeat(tabSize));
}
