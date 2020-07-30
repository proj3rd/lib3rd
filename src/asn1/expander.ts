import { readFileSync } from 'fs';
import { Parameter } from './classes/parameter';
import { ActualParameter } from './classes/parameterizedType';
import { parse } from './parser';

export interface IParameterMapping {
  parameter: Parameter;
  actualParameter: ActualParameter | undefined;
}
