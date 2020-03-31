import { cloneDeep } from 'lodash';

import { IMsgIe } from './format/common';
import { IModules } from './visitors/modules';

export function expand(msgIe: IMsgIe, asn1Pool: IModules): IMsgIe {
  const msgIeClone = cloneDeep(msgIe);
  const expandedDefinition = msgIeClone.definition.expand(asn1Pool, undefined, msgIeClone.definition.parameterList);
  msgIeClone.definition = expandedDefinition;
  return msgIeClone;
}
