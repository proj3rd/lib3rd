import { readFileSync, writeFileSync } from 'fs';
import { unimpl } from '../_devUtils';
import {
  ExtensionAdditionAlternativeGroup,
  RootChoiceComponents,
} from './classes/choiceType';
import { ExtensionMarker } from './classes/extensionMarker';
import { NamedType } from './classes/namedType';
import {
  ComponentType,
  ExtensionAdditionGroup,
  RootSequenceComponents,
} from './classes/sequenceType';
import { parse } from './parser';

const RE_START_OF_LINE = /^/gm;

export function indent(text: string, tabSize: number = 4): string {
  return text.replace(RE_START_OF_LINE, ' '.repeat(tabSize));
}

export const _COMMA = '_COMMA_';

export function toStringWithComma(
  component: RootSequenceComponents | RootChoiceComponents,
  shouldInsert: boolean
): string {
  const componentString = component.toString();
  const charToInsert = shouldInsert ? ',' : '';
  if (component instanceof ComponentType) {
    return componentString.replace(_COMMA, charToInsert);
  } else if (component instanceof ExtensionAdditionGroup) {
    return `${componentString}${charToInsert}`;
  } else if (component instanceof ExtensionAdditionAlternativeGroup) {
    return `${componentString}${charToInsert}`;
  } else if (component instanceof ExtensionMarker) {
    return `${componentString}${charToInsert}`;
  } else if (component instanceof NamedType) {
    return `${componentString}${charToInsert}`;
  } else {
    return unimpl();
  }
}

describe('Format Modules [format_all]', function () {
  this.timeout(0);

  // tslint:disable-next-line: only-arrow-functions
  it('LTE RRC (36331) [format_36331]', function () {
    const asn1 = readFileSync('resources/36331-g00.asn1', 'utf8');
    const modules = parse(asn1);
    const formatted = modules.toString();
    writeFileSync('36331-g00.asn1', formatted);
  });

  // tslint:disable-next-line: only-arrow-functions
  it('NR RRC (38331) [format_38331]', function () {
    const asn1 = readFileSync('resources/38331-g00.asn1', 'utf8');
    const modules = parse(asn1);
    const formatted = modules.toString();
    writeFileSync('38331-g00.asn1', formatted);
  });
});
