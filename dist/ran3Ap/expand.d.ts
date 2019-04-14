import { IDefinitions, IMsgIeDefinition } from './common';
/**
 * Expand references in definition of message or IE
 * @param msgIeDefinition Message or IE definition object to be expanded
 * @param definitions Collection of messages and/or IEs to be referenced
 * @param definitionsExpanded Collection of already expanded messages and/or IEs to be merged
 */
export declare function expand(msgIeDefinition: IMsgIeDefinition, definitions: IDefinitions, definitionsExpanded: IDefinitions): IMsgIeDefinition;
