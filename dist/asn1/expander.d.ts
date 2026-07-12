import { Parameter } from './classes/parameter';
import { ActualParameter } from './types/actualParamter';
/**
 * Indicates mapping between a {@link Parameter | parameter} and
 * an {@link ActualParameter | actual type or value }.
 *
 * - If only `parameter` exists,
 * the corresponding reference shall not be substituted with others.
 *
 * - If `actualParameter` is associated with `parameter`,
 * the corresponding reference shall be substituted with the given `actualParameter`.
 */
export interface IParameterMapping {
    /**
     * @property If only `parameter` exists,
     * the corresponding reference shall not be substituted with others.
     */
    parameter: Parameter;
    /**
     * @propertyIf If `actualParameter` is associated with `parameter`,
     * the corresponding reference shall be substituted with the given `actualParameter`.
     */
    actualParameter: ActualParameter | undefined;
}
//# sourceMappingURL=expander.d.ts.map