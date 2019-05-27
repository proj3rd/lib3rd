import { cloneDeep } from 'lodash';

import { IMsgIe } from './format/common';

export function expand(msgIe: IMsgIe, asn1Pool: any /* TODO */): any {
  const msgIeClone = cloneDeep(msgIe);
  msgIeClone.definition.expand(asn1Pool, msgIeClone.definition.moduleName);
  return msgIeClone;
}
