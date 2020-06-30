import { Parameter } from './classes/parameter';

/**
 * This object contains options in expanding IEs and is passed via `expand()` methods.
 */
export interface IExpandOption {
  /**
   * These parameters indicate `expand()` method not to expand parameters and leave as-is.
   */
  parameters: Parameter[];
}
