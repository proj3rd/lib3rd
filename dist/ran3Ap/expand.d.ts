import { IDefinitions, IMsgIeDefinition } from './common';
/**
 * Expand references in definition of message or IE
 * @param msgIeDefinition Message or IE definition object to be expanded
 * @param definitions Collection of messages and/or IEs to be referenced
 * @param definitionsExpanded Collection of already expanded messages and/or IEs to be merged
 * @returns Returns expanded definition and collection of expanded definitions
 * `{msgIeDefinition: IMsgIeDefinition, definitionsExpanded: IDefinitions}`
 */
export declare function expand(msgIeDefinition: IMsgIeDefinition, definitions: IDefinitions, definitionsExpanded: IDefinitions): {
    msgIeDefinition: IMsgIeDefinition;
    definitionsExpanded: IDefinitions;
};
