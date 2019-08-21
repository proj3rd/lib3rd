import { ATN } from "antlr4ts/atn/ATN";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { ASN_3gppVisitor } from "./ASN_3gppVisitor";
export declare class ASN_3gppParser extends Parser {
    static readonly TAG = 1;
    static readonly A_ROND = 2;
    static readonly STAR = 3;
    static readonly ASSIGN_OP = 4;
    static readonly BOOLEAN_LITERAL = 5;
    static readonly TRUE_LITERAL = 6;
    static readonly FALSE_LITERAL = 7;
    static readonly DOT = 8;
    static readonly DOUBLE_DOT = 9;
    static readonly ELLIPSIS = 10;
    static readonly APOSTROPHE = 11;
    static readonly AMPERSAND = 12;
    static readonly LESS_THAN = 13;
    static readonly GREATER_THAN = 14;
    static readonly LESS_THAN_SLASH = 15;
    static readonly SLASH_GREATER_THAN = 16;
    static readonly TRUE_SMALL_LITERAL = 17;
    static readonly FALSE_SMALL_LITERAL = 18;
    static readonly INTEGER_LITERAL = 19;
    static readonly L_BRACE = 20;
    static readonly R_BRACE = 21;
    static readonly COMMA = 22;
    static readonly L_PARAN = 23;
    static readonly R_PARAN = 24;
    static readonly MINUS = 25;
    static readonly ENUMERATED_LITERAL = 26;
    static readonly REAL_LITERAL = 27;
    static readonly PLUS_INFINITY_LITERAL = 28;
    static readonly MINUS_INFINITY_LITERAL = 29;
    static readonly BIT_LITERAL = 30;
    static readonly STRING_LITERAL = 31;
    static readonly CONTAINING_LITERAL = 32;
    static readonly OCTET_LITERAL = 33;
    static readonly NULL_LITERAL = 34;
    static readonly SEQUENCE_LITERAL = 35;
    static readonly OPTIONAL_LITERAL = 36;
    static readonly DEFAULT_LITERAL = 37;
    static readonly COMPONENTS_LITERAL = 38;
    static readonly OF_LITERAL = 39;
    static readonly SET_LITERAL = 40;
    static readonly EXCLAM = 41;
    static readonly ALL_LITERAL = 42;
    static readonly EXCEPT_LITERAL = 43;
    static readonly POWER = 44;
    static readonly PIPE = 45;
    static readonly UNION_LITERAL = 46;
    static readonly INTERSECTION_LITERAL = 47;
    static readonly INCLUDES_LITERAL = 48;
    static readonly MIN_LITERAL = 49;
    static readonly MAX_LITERAL = 50;
    static readonly SIZE_LITERAL = 51;
    static readonly FROM_LITERAL = 52;
    static readonly WITH_LITERAL = 53;
    static readonly COMPONENT_LITERAL = 54;
    static readonly PRESENT_LITERAL = 55;
    static readonly ABSENT_LITERAL = 56;
    static readonly PATTERN_LITERAL = 57;
    static readonly TYPE_IDENTIFIER_LITERAL = 58;
    static readonly ABSTRACT_SYNTAX_LITERAL = 59;
    static readonly CLASS_LITERAL = 60;
    static readonly UNIQUE_LITERAL = 61;
    static readonly SYNTAX_LITERAL = 62;
    static readonly L_BRACKET = 63;
    static readonly R_BRACKET = 64;
    static readonly INSTANCE_LITERAL = 65;
    static readonly SEMI_COLON = 66;
    static readonly IMPORTS_LITERAL = 67;
    static readonly EXPORTS_LITERAL = 68;
    static readonly EXTENSIBILITY_LITERAL = 69;
    static readonly IMPLIED_LITERAL = 70;
    static readonly EXPLICIT_LITERAL = 71;
    static readonly TAGS_LITERAL = 72;
    static readonly IMPLICIT_LITERAL = 73;
    static readonly AUTOMATIC_LITERAL = 74;
    static readonly DEFINITIONS_LITERAL = 75;
    static readonly BEGIN_LITERAL = 76;
    static readonly END_LITERAL = 77;
    static readonly DOUBLE_L_BRACKET = 78;
    static readonly DOUBLE_R_BRACKET = 79;
    static readonly COLON = 80;
    static readonly CHOICE_LITERAL = 81;
    static readonly UNIVERSAL_LITERAL = 82;
    static readonly APPLICATION_LITERAL = 83;
    static readonly PRIVATE_LITERAL = 84;
    static readonly EMBEDDED_LITERAL = 85;
    static readonly PDV_LITERAL = 86;
    static readonly EXTERNAL_LITERAL = 87;
    static readonly OBJECT_LITERAL = 88;
    static readonly IDENTIFIER_LITERAL = 89;
    static readonly RELATIVE_OID_LITERAL = 90;
    static readonly CHARACTER_LITERAL = 91;
    static readonly CONSTRAINED_LITERAL = 92;
    static readonly BY_LITERAL = 93;
    static readonly A_ROND_DOT = 94;
    static readonly ENCODED_LITERAL = 95;
    static readonly COMMENT = 96;
    static readonly UNRESTRICTEDCHARACTERSTRINGTYPE = 97;
    static readonly EXTENSTIONENDMARKER = 98;
    static readonly NUMBER = 99;
    static readonly WS = 100;
    static readonly LINE_COMMENT = 101;
    static readonly BSTRING = 102;
    static readonly HSTRING = 103;
    static readonly CSTRING = 104;
    static readonly IDENTIFIER = 105;
    static readonly RULE_modules = 0;
    static readonly RULE_moduleDefinition = 1;
    static readonly RULE_tagDefault = 2;
    static readonly RULE_extensionDefault = 3;
    static readonly RULE_moduleBody = 4;
    static readonly RULE_exports = 5;
    static readonly RULE_symbolsExported = 6;
    static readonly RULE_imports = 7;
    static readonly RULE_symbolsImported = 8;
    static readonly RULE_symbolsFromModuleList = 9;
    static readonly RULE_symbolsFromModule = 10;
    static readonly RULE_globalModuleReference = 11;
    static readonly RULE_assignedIdentifier = 12;
    static readonly RULE_symbolList = 13;
    static readonly RULE_symbol = 14;
    static readonly RULE_assignmentList = 15;
    static readonly RULE_assignment = 16;
    static readonly RULE_sequenceType = 17;
    static readonly RULE_extensionAndException = 18;
    static readonly RULE_optionalExtensionMarker = 19;
    static readonly RULE_componentTypeLists = 20;
    static readonly RULE_rootComponentTypeList = 21;
    static readonly RULE_componentTypeList = 22;
    static readonly RULE_componentType = 23;
    static readonly RULE_tag = 24;
    static readonly RULE_extensionAdditions = 25;
    static readonly RULE_extensionAdditionList = 26;
    static readonly RULE_extensionAddition = 27;
    static readonly RULE_extensionAdditionGroup = 28;
    static readonly RULE_versionNumber = 29;
    static readonly RULE_sequenceOfType = 30;
    static readonly RULE_sizeConstraint = 31;
    static readonly RULE_parameterizedAssignment = 32;
    static readonly RULE_parameterList = 33;
    static readonly RULE_parameter = 34;
    static readonly RULE_paramGovernor = 35;
    static readonly RULE_governor = 36;
    static readonly RULE_objectClassAssignment = 37;
    static readonly RULE_objectClass = 38;
    static readonly RULE_definedObjectClass = 39;
    static readonly RULE_usefulObjectClassReference = 40;
    static readonly RULE_externalObjectClassReference = 41;
    static readonly RULE_objectClassDefn = 42;
    static readonly RULE_withSyntaxSpec = 43;
    static readonly RULE_syntaxList = 44;
    static readonly RULE_tokenOrGroupSpec = 45;
    static readonly RULE_optionalGroup = 46;
    static readonly RULE_requiredToken = 47;
    static readonly RULE_literal = 48;
    static readonly RULE_primitiveFieldName = 49;
    static readonly RULE_fieldSpec = 50;
    static readonly RULE_typeFieldSpec = 51;
    static readonly RULE_typeOptionalitySpec = 52;
    static readonly RULE_fixedTypeValueFieldSpec = 53;
    static readonly RULE_valueOptionalitySpec = 54;
    static readonly RULE_variableTypeValueFieldSpec = 55;
    static readonly RULE_fixedTypeValueSetFieldSpec = 56;
    static readonly RULE_valueSetOptionalitySpec = 57;
    static readonly RULE_object = 58;
    static readonly RULE_parameterizedObject = 59;
    static readonly RULE_definedObject = 60;
    static readonly RULE_objectSet = 61;
    static readonly RULE_objectSetSpec = 62;
    static readonly RULE_fieldName = 63;
    static readonly RULE_valueSet = 64;
    static readonly RULE_elementSetSpecs = 65;
    static readonly RULE_rootElementSetSpec = 66;
    static readonly RULE_additionalElementSetSpec = 67;
    static readonly RULE_elementSetSpec = 68;
    static readonly RULE_unions = 69;
    static readonly RULE_exclusions = 70;
    static readonly RULE_intersections = 71;
    static readonly RULE_unionMark = 72;
    static readonly RULE_intersectionMark = 73;
    static readonly RULE_elements = 74;
    static readonly RULE_objectSetElements = 75;
    static readonly RULE_intersectionElements = 76;
    static readonly RULE_subtypeElements = 77;
    static readonly RULE_variableTypeValueSetFieldSpec = 78;
    static readonly RULE_objectFieldSpec = 79;
    static readonly RULE_objectOptionalitySpec = 80;
    static readonly RULE_objectSetFieldSpec = 81;
    static readonly RULE_objectSetOptionalitySpec = 82;
    static readonly RULE_typeAssignment = 83;
    static readonly RULE_valueAssignment = 84;
    static readonly RULE_asnType = 85;
    static readonly RULE_builtinType = 86;
    static readonly RULE_objectClassFieldType = 87;
    static readonly RULE_setType = 88;
    static readonly RULE_setOfType = 89;
    static readonly RULE_referencedType = 90;
    static readonly RULE_definedType = 91;
    static readonly RULE_constraint = 92;
    static readonly RULE_constraintSpec = 93;
    static readonly RULE_userDefinedConstraint = 94;
    static readonly RULE_generalConstraint = 95;
    static readonly RULE_userDefinedConstraintParameter = 96;
    static readonly RULE_tableConstraint = 97;
    static readonly RULE_simpleTableConstraint = 98;
    static readonly RULE_contentsConstraint = 99;
    static readonly RULE_componentPresenceLists = 100;
    static readonly RULE_componentPresenceList = 101;
    static readonly RULE_componentPresence = 102;
    static readonly RULE_subtypeConstraint = 103;
    static readonly RULE_value = 104;
    static readonly RULE_builtinValue = 105;
    static readonly RULE_objectIdentifierValue = 106;
    static readonly RULE_objIdComponentsList = 107;
    static readonly RULE_objIdComponents = 108;
    static readonly RULE_integerValue = 109;
    static readonly RULE_choiceValue = 110;
    static readonly RULE_enumeratedValue = 111;
    static readonly RULE_signedNumber = 112;
    static readonly RULE_choiceType = 113;
    static readonly RULE_alternativeTypeLists = 114;
    static readonly RULE_extensionAdditionAlternatives = 115;
    static readonly RULE_extensionAdditionAlternativesList = 116;
    static readonly RULE_extensionAdditionAlternative = 117;
    static readonly RULE_extensionAdditionAlternativesGroup = 118;
    static readonly RULE_rootAlternativeTypeList = 119;
    static readonly RULE_alternativeTypeList = 120;
    static readonly RULE_namedType = 121;
    static readonly RULE_enumeratedType = 122;
    static readonly RULE_enumerations = 123;
    static readonly RULE_rootEnumeration = 124;
    static readonly RULE_enumeration = 125;
    static readonly RULE_enumerationItem = 126;
    static readonly RULE_namedNumber = 127;
    static readonly RULE_definedValue = 128;
    static readonly RULE_parameterizedValue = 129;
    static readonly RULE_simpleDefinedValue = 130;
    static readonly RULE_actualParameterList = 131;
    static readonly RULE_actualParameter = 132;
    static readonly RULE_exceptionSpec = 133;
    static readonly RULE_exceptionIdentification = 134;
    static readonly RULE_additionalEnumeration = 135;
    static readonly RULE_integerType = 136;
    static readonly RULE_namedNumberList = 137;
    static readonly RULE_objectidentifiertype = 138;
    static readonly RULE_componentRelationConstraint = 139;
    static readonly RULE_atNotation = 140;
    static readonly RULE_level = 141;
    static readonly RULE_componentIdList = 142;
    static readonly RULE_octetStringType = 143;
    static readonly RULE_bitStringType = 144;
    static readonly RULE_namedBitList = 145;
    static readonly RULE_namedBit = 146;
    static readonly RULE_booleanValue = 147;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    readonly vocabulary: Vocabulary;
    readonly grammarFileName: string;
    readonly ruleNames: string[];
    readonly serializedATN: string;
    constructor(input: TokenStream);
    modules(): ModulesContext;
    moduleDefinition(): ModuleDefinitionContext;
    tagDefault(): TagDefaultContext;
    extensionDefault(): ExtensionDefaultContext;
    moduleBody(): ModuleBodyContext;
    exports(): ExportsContext;
    symbolsExported(): SymbolsExportedContext;
    imports(): ImportsContext;
    symbolsImported(): SymbolsImportedContext;
    symbolsFromModuleList(): SymbolsFromModuleListContext;
    symbolsFromModule(): SymbolsFromModuleContext;
    globalModuleReference(): GlobalModuleReferenceContext;
    assignedIdentifier(): AssignedIdentifierContext;
    symbolList(): SymbolListContext;
    symbol(): SymbolContext;
    assignmentList(): AssignmentListContext;
    assignment(): AssignmentContext;
    sequenceType(): SequenceTypeContext;
    extensionAndException(): ExtensionAndExceptionContext;
    optionalExtensionMarker(): OptionalExtensionMarkerContext;
    componentTypeLists(): ComponentTypeListsContext;
    rootComponentTypeList(): RootComponentTypeListContext;
    componentTypeList(): ComponentTypeListContext;
    componentType(): ComponentTypeContext;
    tag(): TagContext;
    extensionAdditions(): ExtensionAdditionsContext;
    extensionAdditionList(): ExtensionAdditionListContext;
    extensionAddition(): ExtensionAdditionContext;
    extensionAdditionGroup(): ExtensionAdditionGroupContext;
    versionNumber(): VersionNumberContext;
    sequenceOfType(): SequenceOfTypeContext;
    sizeConstraint(): SizeConstraintContext;
    parameterizedAssignment(): ParameterizedAssignmentContext;
    parameterList(): ParameterListContext;
    parameter(): ParameterContext;
    paramGovernor(): ParamGovernorContext;
    governor(): GovernorContext;
    objectClassAssignment(): ObjectClassAssignmentContext;
    objectClass(): ObjectClassContext;
    definedObjectClass(): DefinedObjectClassContext;
    usefulObjectClassReference(): UsefulObjectClassReferenceContext;
    externalObjectClassReference(): ExternalObjectClassReferenceContext;
    objectClassDefn(): ObjectClassDefnContext;
    withSyntaxSpec(): WithSyntaxSpecContext;
    syntaxList(): SyntaxListContext;
    tokenOrGroupSpec(): TokenOrGroupSpecContext;
    optionalGroup(): OptionalGroupContext;
    requiredToken(): RequiredTokenContext;
    literal(): LiteralContext;
    primitiveFieldName(): PrimitiveFieldNameContext;
    fieldSpec(): FieldSpecContext;
    typeFieldSpec(): TypeFieldSpecContext;
    typeOptionalitySpec(): TypeOptionalitySpecContext;
    fixedTypeValueFieldSpec(): FixedTypeValueFieldSpecContext;
    valueOptionalitySpec(): ValueOptionalitySpecContext;
    variableTypeValueFieldSpec(): VariableTypeValueFieldSpecContext;
    fixedTypeValueSetFieldSpec(): FixedTypeValueSetFieldSpecContext;
    valueSetOptionalitySpec(): ValueSetOptionalitySpecContext;
    object(): ObjectContext;
    parameterizedObject(): ParameterizedObjectContext;
    definedObject(): DefinedObjectContext;
    objectSet(): ObjectSetContext;
    objectSetSpec(): ObjectSetSpecContext;
    fieldName(): FieldNameContext;
    valueSet(): ValueSetContext;
    elementSetSpecs(): ElementSetSpecsContext;
    rootElementSetSpec(): RootElementSetSpecContext;
    additionalElementSetSpec(): AdditionalElementSetSpecContext;
    elementSetSpec(): ElementSetSpecContext;
    unions(): UnionsContext;
    exclusions(): ExclusionsContext;
    intersections(): IntersectionsContext;
    unionMark(): UnionMarkContext;
    intersectionMark(): IntersectionMarkContext;
    elements(): ElementsContext;
    objectSetElements(): ObjectSetElementsContext;
    intersectionElements(): IntersectionElementsContext;
    subtypeElements(): SubtypeElementsContext;
    variableTypeValueSetFieldSpec(): VariableTypeValueSetFieldSpecContext;
    objectFieldSpec(): ObjectFieldSpecContext;
    objectOptionalitySpec(): ObjectOptionalitySpecContext;
    objectSetFieldSpec(): ObjectSetFieldSpecContext;
    objectSetOptionalitySpec(): ObjectSetOptionalitySpecContext;
    typeAssignment(): TypeAssignmentContext;
    valueAssignment(): ValueAssignmentContext;
    asnType(): AsnTypeContext;
    builtinType(): BuiltinTypeContext;
    objectClassFieldType(): ObjectClassFieldTypeContext;
    setType(): SetTypeContext;
    setOfType(): SetOfTypeContext;
    referencedType(): ReferencedTypeContext;
    definedType(): DefinedTypeContext;
    constraint(): ConstraintContext;
    constraintSpec(): ConstraintSpecContext;
    userDefinedConstraint(): UserDefinedConstraintContext;
    generalConstraint(): GeneralConstraintContext;
    userDefinedConstraintParameter(): UserDefinedConstraintParameterContext;
    tableConstraint(): TableConstraintContext;
    simpleTableConstraint(): SimpleTableConstraintContext;
    contentsConstraint(): ContentsConstraintContext;
    componentPresenceLists(): ComponentPresenceListsContext;
    componentPresenceList(): ComponentPresenceListContext;
    componentPresence(): ComponentPresenceContext;
    subtypeConstraint(): SubtypeConstraintContext;
    value(): ValueContext;
    builtinValue(): BuiltinValueContext;
    objectIdentifierValue(): ObjectIdentifierValueContext;
    objIdComponentsList(): ObjIdComponentsListContext;
    objIdComponents(): ObjIdComponentsContext;
    integerValue(): IntegerValueContext;
    choiceValue(): ChoiceValueContext;
    enumeratedValue(): EnumeratedValueContext;
    signedNumber(): SignedNumberContext;
    choiceType(): ChoiceTypeContext;
    alternativeTypeLists(): AlternativeTypeListsContext;
    extensionAdditionAlternatives(): ExtensionAdditionAlternativesContext;
    extensionAdditionAlternativesList(): ExtensionAdditionAlternativesListContext;
    extensionAdditionAlternative(): ExtensionAdditionAlternativeContext;
    extensionAdditionAlternativesGroup(): ExtensionAdditionAlternativesGroupContext;
    rootAlternativeTypeList(): RootAlternativeTypeListContext;
    alternativeTypeList(): AlternativeTypeListContext;
    namedType(): NamedTypeContext;
    enumeratedType(): EnumeratedTypeContext;
    enumerations(): EnumerationsContext;
    rootEnumeration(): RootEnumerationContext;
    enumeration(): EnumerationContext;
    enumerationItem(): EnumerationItemContext;
    namedNumber(): NamedNumberContext;
    definedValue(): DefinedValueContext;
    parameterizedValue(): ParameterizedValueContext;
    simpleDefinedValue(): SimpleDefinedValueContext;
    actualParameterList(): ActualParameterListContext;
    actualParameter(): ActualParameterContext;
    exceptionSpec(): ExceptionSpecContext;
    exceptionIdentification(): ExceptionIdentificationContext;
    additionalEnumeration(): AdditionalEnumerationContext;
    integerType(): IntegerTypeContext;
    namedNumberList(): NamedNumberListContext;
    objectidentifiertype(): ObjectidentifiertypeContext;
    componentRelationConstraint(): ComponentRelationConstraintContext;
    atNotation(): AtNotationContext;
    level(): LevelContext;
    componentIdList(): ComponentIdListContext;
    octetStringType(): OctetStringTypeContext;
    bitStringType(): BitStringTypeContext;
    namedBitList(): NamedBitListContext;
    namedBit(): NamedBitContext;
    booleanValue(): BooleanValueContext;
    private static readonly _serializedATNSegments;
    private static readonly _serializedATNSegment0;
    private static readonly _serializedATNSegment1;
    private static readonly _serializedATNSegment2;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static readonly _ATN: ATN;
}
export declare class ModulesContext extends ParserRuleContext {
    moduleDefinition(): ModuleDefinitionContext[];
    moduleDefinition(i: number): ModuleDefinitionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ModuleDefinitionContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode[];
    IDENTIFIER(i: number): TerminalNode;
    DEFINITIONS_LITERAL(): TerminalNode;
    tagDefault(): TagDefaultContext;
    extensionDefault(): ExtensionDefaultContext;
    ASSIGN_OP(): TerminalNode;
    BEGIN_LITERAL(): TerminalNode;
    moduleBody(): ModuleBodyContext;
    END_LITERAL(): TerminalNode;
    L_BRACE(): TerminalNode | undefined;
    R_BRACE(): TerminalNode | undefined;
    L_PARAN(): TerminalNode[];
    L_PARAN(i: number): TerminalNode;
    NUMBER(): TerminalNode[];
    NUMBER(i: number): TerminalNode;
    R_PARAN(): TerminalNode[];
    R_PARAN(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class TagDefaultContext extends ParserRuleContext {
    TAGS_LITERAL(): TerminalNode | undefined;
    EXPLICIT_LITERAL(): TerminalNode | undefined;
    IMPLICIT_LITERAL(): TerminalNode | undefined;
    AUTOMATIC_LITERAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ExtensionDefaultContext extends ParserRuleContext {
    EXTENSIBILITY_LITERAL(): TerminalNode | undefined;
    IMPLIED_LITERAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ModuleBodyContext extends ParserRuleContext {
    exports(): ExportsContext | undefined;
    imports(): ImportsContext | undefined;
    assignmentList(): AssignmentListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ExportsContext extends ParserRuleContext {
    EXPORTS_LITERAL(): TerminalNode | undefined;
    symbolsExported(): SymbolsExportedContext | undefined;
    SEMI_COLON(): TerminalNode | undefined;
    ALL_LITERAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class SymbolsExportedContext extends ParserRuleContext {
    symbolList(): SymbolListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ImportsContext extends ParserRuleContext {
    IMPORTS_LITERAL(): TerminalNode | undefined;
    symbolsImported(): SymbolsImportedContext | undefined;
    SEMI_COLON(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class SymbolsImportedContext extends ParserRuleContext {
    symbolsFromModuleList(): SymbolsFromModuleListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class SymbolsFromModuleListContext extends ParserRuleContext {
    symbolsFromModule(): SymbolsFromModuleContext[];
    symbolsFromModule(i: number): SymbolsFromModuleContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class SymbolsFromModuleContext extends ParserRuleContext {
    symbolList(): SymbolListContext;
    FROM_LITERAL(): TerminalNode;
    globalModuleReference(): GlobalModuleReferenceContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class GlobalModuleReferenceContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode;
    assignedIdentifier(): AssignedIdentifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class AssignedIdentifierContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class SymbolListContext extends ParserRuleContext {
    symbol(): SymbolContext[];
    symbol(i: number): SymbolContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class SymbolContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode;
    L_BRACE(): TerminalNode | undefined;
    R_BRACE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class AssignmentListContext extends ParserRuleContext {
    assignment(): AssignmentContext[];
    assignment(i: number): AssignmentContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class AssignmentContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode | undefined;
    valueAssignment(): ValueAssignmentContext | undefined;
    typeAssignment(): TypeAssignmentContext | undefined;
    parameterizedAssignment(): ParameterizedAssignmentContext | undefined;
    objectClassAssignment(): ObjectClassAssignmentContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class SequenceTypeContext extends ParserRuleContext {
    SEQUENCE_LITERAL(): TerminalNode;
    L_BRACE(): TerminalNode;
    R_BRACE(): TerminalNode;
    extensionAndException(): ExtensionAndExceptionContext | undefined;
    optionalExtensionMarker(): OptionalExtensionMarkerContext | undefined;
    componentTypeLists(): ComponentTypeListsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ExtensionAndExceptionContext extends ParserRuleContext {
    ELLIPSIS(): TerminalNode;
    exceptionSpec(): ExceptionSpecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class OptionalExtensionMarkerContext extends ParserRuleContext {
    COMMA(): TerminalNode | undefined;
    ELLIPSIS(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ComponentTypeListsContext extends ParserRuleContext {
    rootComponentTypeList(): RootComponentTypeListContext[];
    rootComponentTypeList(i: number): RootComponentTypeListContext;
    tag(): TagContext[];
    tag(i: number): TagContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    extensionAndException(): ExtensionAndExceptionContext | undefined;
    extensionAdditions(): ExtensionAdditionsContext | undefined;
    ELLIPSIS(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class RootComponentTypeListContext extends ParserRuleContext {
    componentTypeList(): ComponentTypeListContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ComponentTypeListContext extends ParserRuleContext {
    componentType(): ComponentTypeContext[];
    componentType(i: number): ComponentTypeContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    tag(): TagContext[];
    tag(i: number): TagContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ComponentTypeContext extends ParserRuleContext {
    namedType(): NamedTypeContext | undefined;
    OPTIONAL_LITERAL(): TerminalNode | undefined;
    DEFAULT_LITERAL(): TerminalNode | undefined;
    value(): ValueContext | undefined;
    COMPONENTS_LITERAL(): TerminalNode | undefined;
    OF_LITERAL(): TerminalNode | undefined;
    asnType(): AsnTypeContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class TagContext extends ParserRuleContext {
    TAG(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ExtensionAdditionsContext extends ParserRuleContext {
    COMMA(): TerminalNode | undefined;
    extensionAdditionList(): ExtensionAdditionListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ExtensionAdditionListContext extends ParserRuleContext {
    extensionAddition(): ExtensionAdditionContext[];
    extensionAddition(i: number): ExtensionAdditionContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    tag(): TagContext[];
    tag(i: number): TagContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ExtensionAdditionContext extends ParserRuleContext {
    componentType(): ComponentTypeContext | undefined;
    extensionAdditionGroup(): ExtensionAdditionGroupContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ExtensionAdditionGroupContext extends ParserRuleContext {
    DOUBLE_L_BRACKET(): TerminalNode;
    versionNumber(): VersionNumberContext;
    componentTypeList(): ComponentTypeListContext;
    DOUBLE_R_BRACKET(): TerminalNode;
    tag(): TagContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class VersionNumberContext extends ParserRuleContext {
    NUMBER(): TerminalNode | undefined;
    COLON(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class SequenceOfTypeContext extends ParserRuleContext {
    SEQUENCE_LITERAL(): TerminalNode;
    OF_LITERAL(): TerminalNode;
    asnType(): AsnTypeContext | undefined;
    namedType(): NamedTypeContext | undefined;
    L_PARAN(): TerminalNode | undefined;
    R_PARAN(): TerminalNode | undefined;
    constraint(): ConstraintContext | undefined;
    sizeConstraint(): SizeConstraintContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class SizeConstraintContext extends ParserRuleContext {
    SIZE_LITERAL(): TerminalNode;
    constraint(): ConstraintContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ParameterizedAssignmentContext extends ParserRuleContext {
    parameterList(): ParameterListContext | undefined;
    ASSIGN_OP(): TerminalNode | undefined;
    asnType(): AsnTypeContext | undefined;
    value(): ValueContext | undefined;
    valueSet(): ValueSetContext | undefined;
    definedObjectClass(): DefinedObjectClassContext | undefined;
    object(): ObjectContext | undefined;
    objectClass(): ObjectClassContext | undefined;
    objectSet(): ObjectSetContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ParameterListContext extends ParserRuleContext {
    L_BRACE(): TerminalNode;
    parameter(): ParameterContext[];
    parameter(i: number): ParameterContext;
    R_BRACE(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ParameterContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode;
    paramGovernor(): ParamGovernorContext | undefined;
    COLON(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ParamGovernorContext extends ParserRuleContext {
    governor(): GovernorContext | undefined;
    IDENTIFIER(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class GovernorContext extends ParserRuleContext {
    asnType(): AsnTypeContext | undefined;
    definedObjectClass(): DefinedObjectClassContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ObjectClassAssignmentContext extends ParserRuleContext {
    ASSIGN_OP(): TerminalNode;
    objectClass(): ObjectClassContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ObjectClassContext extends ParserRuleContext {
    definedObjectClass(): DefinedObjectClassContext | undefined;
    objectClassDefn(): ObjectClassDefnContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class DefinedObjectClassContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode[];
    IDENTIFIER(i: number): TerminalNode;
    DOT(): TerminalNode | undefined;
    TYPE_IDENTIFIER_LITERAL(): TerminalNode | undefined;
    ABSTRACT_SYNTAX_LITERAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class UsefulObjectClassReferenceContext extends ParserRuleContext {
    TYPE_IDENTIFIER_LITERAL(): TerminalNode | undefined;
    ABSTRACT_SYNTAX_LITERAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ExternalObjectClassReferenceContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode[];
    IDENTIFIER(i: number): TerminalNode;
    DOT(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ObjectClassDefnContext extends ParserRuleContext {
    CLASS_LITERAL(): TerminalNode;
    L_BRACE(): TerminalNode;
    fieldSpec(): FieldSpecContext[];
    fieldSpec(i: number): FieldSpecContext;
    R_BRACE(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    withSyntaxSpec(): WithSyntaxSpecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class WithSyntaxSpecContext extends ParserRuleContext {
    WITH_LITERAL(): TerminalNode;
    SYNTAX_LITERAL(): TerminalNode;
    syntaxList(): SyntaxListContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class SyntaxListContext extends ParserRuleContext {
    L_BRACE(): TerminalNode;
    R_BRACE(): TerminalNode;
    tokenOrGroupSpec(): TokenOrGroupSpecContext[];
    tokenOrGroupSpec(i: number): TokenOrGroupSpecContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class TokenOrGroupSpecContext extends ParserRuleContext {
    requiredToken(): RequiredTokenContext | undefined;
    optionalGroup(): OptionalGroupContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class OptionalGroupContext extends ParserRuleContext {
    L_BRACKET(): TerminalNode;
    R_BRACKET(): TerminalNode;
    tokenOrGroupSpec(): TokenOrGroupSpecContext[];
    tokenOrGroupSpec(i: number): TokenOrGroupSpecContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class RequiredTokenContext extends ParserRuleContext {
    literal(): LiteralContext | undefined;
    primitiveFieldName(): PrimitiveFieldNameContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class LiteralContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode | undefined;
    COMMA(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class PrimitiveFieldNameContext extends ParserRuleContext {
    AMPERSAND(): TerminalNode;
    IDENTIFIER(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class FieldSpecContext extends ParserRuleContext {
    AMPERSAND(): TerminalNode;
    IDENTIFIER(): TerminalNode;
    asnType(): AsnTypeContext | undefined;
    fieldName(): FieldNameContext | undefined;
    definedObjectClass(): DefinedObjectClassContext | undefined;
    typeOptionalitySpec(): TypeOptionalitySpecContext | undefined;
    OPTIONAL_LITERAL(): TerminalNode | undefined;
    valueSetOptionalitySpec(): ValueSetOptionalitySpecContext | undefined;
    UNIQUE_LITERAL(): TerminalNode | undefined;
    valueOptionalitySpec(): ValueOptionalitySpecContext | undefined;
    DEFAULT_LITERAL(): TerminalNode | undefined;
    valueSet(): ValueSetContext | undefined;
    value(): ValueContext | undefined;
    objectSet(): ObjectSetContext | undefined;
    object(): ObjectContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class TypeFieldSpecContext extends ParserRuleContext {
    AMPERSAND(): TerminalNode;
    IDENTIFIER(): TerminalNode;
    typeOptionalitySpec(): TypeOptionalitySpecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class TypeOptionalitySpecContext extends ParserRuleContext {
    OPTIONAL_LITERAL(): TerminalNode | undefined;
    DEFAULT_LITERAL(): TerminalNode | undefined;
    asnType(): AsnTypeContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class FixedTypeValueFieldSpecContext extends ParserRuleContext {
    AMPERSAND(): TerminalNode;
    IDENTIFIER(): TerminalNode;
    asnType(): AsnTypeContext;
    UNIQUE_LITERAL(): TerminalNode | undefined;
    valueOptionalitySpec(): ValueOptionalitySpecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ValueOptionalitySpecContext extends ParserRuleContext {
    OPTIONAL_LITERAL(): TerminalNode | undefined;
    DEFAULT_LITERAL(): TerminalNode | undefined;
    value(): ValueContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class VariableTypeValueFieldSpecContext extends ParserRuleContext {
    AMPERSAND(): TerminalNode;
    IDENTIFIER(): TerminalNode;
    fieldName(): FieldNameContext;
    valueOptionalitySpec(): ValueOptionalitySpecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class FixedTypeValueSetFieldSpecContext extends ParserRuleContext {
    AMPERSAND(): TerminalNode;
    IDENTIFIER(): TerminalNode;
    asnType(): AsnTypeContext;
    valueSetOptionalitySpec(): ValueSetOptionalitySpecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ValueSetOptionalitySpecContext extends ParserRuleContext {
    OPTIONAL_LITERAL(): TerminalNode | undefined;
    DEFAULT_LITERAL(): TerminalNode | undefined;
    valueSet(): ValueSetContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ObjectContext extends ParserRuleContext {
    definedObject(): DefinedObjectContext | undefined;
    parameterizedObject(): ParameterizedObjectContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ParameterizedObjectContext extends ParserRuleContext {
    definedObject(): DefinedObjectContext;
    actualParameterList(): ActualParameterListContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class DefinedObjectContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode;
    DOT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ObjectSetContext extends ParserRuleContext {
    L_BRACE(): TerminalNode;
    objectSetSpec(): ObjectSetSpecContext;
    R_BRACE(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ObjectSetSpecContext extends ParserRuleContext {
    rootElementSetSpec(): RootElementSetSpecContext | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    ELLIPSIS(): TerminalNode | undefined;
    additionalElementSetSpec(): AdditionalElementSetSpecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class FieldNameContext extends ParserRuleContext {
    AMPERSAND(): TerminalNode[];
    AMPERSAND(i: number): TerminalNode;
    IDENTIFIER(): TerminalNode[];
    IDENTIFIER(i: number): TerminalNode;
    DOT(): TerminalNode[];
    DOT(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ValueSetContext extends ParserRuleContext {
    L_BRACE(): TerminalNode;
    elementSetSpecs(): ElementSetSpecsContext;
    R_BRACE(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ElementSetSpecsContext extends ParserRuleContext {
    rootElementSetSpec(): RootElementSetSpecContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    ELLIPSIS(): TerminalNode | undefined;
    additionalElementSetSpec(): AdditionalElementSetSpecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class RootElementSetSpecContext extends ParserRuleContext {
    elementSetSpec(): ElementSetSpecContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class AdditionalElementSetSpecContext extends ParserRuleContext {
    elementSetSpec(): ElementSetSpecContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ElementSetSpecContext extends ParserRuleContext {
    unions(): UnionsContext | undefined;
    ALL_LITERAL(): TerminalNode | undefined;
    exclusions(): ExclusionsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class UnionsContext extends ParserRuleContext {
    intersections(): IntersectionsContext[];
    intersections(i: number): IntersectionsContext;
    unionMark(): UnionMarkContext[];
    unionMark(i: number): UnionMarkContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ExclusionsContext extends ParserRuleContext {
    EXCEPT_LITERAL(): TerminalNode;
    elements(): ElementsContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class IntersectionsContext extends ParserRuleContext {
    intersectionElements(): IntersectionElementsContext[];
    intersectionElements(i: number): IntersectionElementsContext;
    intersectionMark(): IntersectionMarkContext[];
    intersectionMark(i: number): IntersectionMarkContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class UnionMarkContext extends ParserRuleContext {
    PIPE(): TerminalNode | undefined;
    UNION_LITERAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class IntersectionMarkContext extends ParserRuleContext {
    POWER(): TerminalNode | undefined;
    INTERSECTION_LITERAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ElementsContext extends ParserRuleContext {
    subtypeElements(): SubtypeElementsContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ObjectSetElementsContext extends ParserRuleContext {
    object(): ObjectContext | undefined;
    definedObject(): DefinedObjectContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class IntersectionElementsContext extends ParserRuleContext {
    elements(): ElementsContext;
    exclusions(): ExclusionsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class SubtypeElementsContext extends ParserRuleContext {
    DOUBLE_DOT(): TerminalNode | undefined;
    value(): ValueContext[];
    value(i: number): ValueContext;
    MIN_LITERAL(): TerminalNode | undefined;
    MAX_LITERAL(): TerminalNode | undefined;
    LESS_THAN(): TerminalNode[];
    LESS_THAN(i: number): TerminalNode;
    sizeConstraint(): SizeConstraintContext | undefined;
    PATTERN_LITERAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class VariableTypeValueSetFieldSpecContext extends ParserRuleContext {
    AMPERSAND(): TerminalNode;
    IDENTIFIER(): TerminalNode;
    fieldName(): FieldNameContext;
    valueSetOptionalitySpec(): ValueSetOptionalitySpecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ObjectFieldSpecContext extends ParserRuleContext {
    AMPERSAND(): TerminalNode;
    IDENTIFIER(): TerminalNode;
    definedObjectClass(): DefinedObjectClassContext;
    objectOptionalitySpec(): ObjectOptionalitySpecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ObjectOptionalitySpecContext extends ParserRuleContext {
    OPTIONAL_LITERAL(): TerminalNode | undefined;
    DEFAULT_LITERAL(): TerminalNode | undefined;
    object(): ObjectContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ObjectSetFieldSpecContext extends ParserRuleContext {
    AMPERSAND(): TerminalNode;
    IDENTIFIER(): TerminalNode;
    definedObjectClass(): DefinedObjectClassContext;
    objectSetOptionalitySpec(): ObjectSetOptionalitySpecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ObjectSetOptionalitySpecContext extends ParserRuleContext {
    OPTIONAL_LITERAL(): TerminalNode | undefined;
    DEFAULT_LITERAL(): TerminalNode | undefined;
    objectSet(): ObjectSetContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class TypeAssignmentContext extends ParserRuleContext {
    ASSIGN_OP(): TerminalNode;
    asnType(): AsnTypeContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ValueAssignmentContext extends ParserRuleContext {
    asnType(): AsnTypeContext;
    ASSIGN_OP(): TerminalNode;
    value(): ValueContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class AsnTypeContext extends ParserRuleContext {
    builtinType(): BuiltinTypeContext | undefined;
    referencedType(): ReferencedTypeContext | undefined;
    constraint(): ConstraintContext[];
    constraint(i: number): ConstraintContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class BuiltinTypeContext extends ParserRuleContext {
    octetStringType(): OctetStringTypeContext | undefined;
    bitStringType(): BitStringTypeContext | undefined;
    choiceType(): ChoiceTypeContext | undefined;
    enumeratedType(): EnumeratedTypeContext | undefined;
    integerType(): IntegerTypeContext | undefined;
    sequenceType(): SequenceTypeContext | undefined;
    sequenceOfType(): SequenceOfTypeContext | undefined;
    setType(): SetTypeContext | undefined;
    setOfType(): SetOfTypeContext | undefined;
    objectidentifiertype(): ObjectidentifiertypeContext | undefined;
    objectClassFieldType(): ObjectClassFieldTypeContext | undefined;
    BOOLEAN_LITERAL(): TerminalNode | undefined;
    NULL_LITERAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ObjectClassFieldTypeContext extends ParserRuleContext {
    definedObjectClass(): DefinedObjectClassContext;
    DOT(): TerminalNode;
    fieldName(): FieldNameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class SetTypeContext extends ParserRuleContext {
    SET_LITERAL(): TerminalNode;
    L_BRACE(): TerminalNode;
    R_BRACE(): TerminalNode;
    extensionAndException(): ExtensionAndExceptionContext | undefined;
    optionalExtensionMarker(): OptionalExtensionMarkerContext | undefined;
    componentTypeLists(): ComponentTypeListsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class SetOfTypeContext extends ParserRuleContext {
    SET_LITERAL(): TerminalNode;
    OF_LITERAL(): TerminalNode;
    asnType(): AsnTypeContext | undefined;
    namedType(): NamedTypeContext | undefined;
    constraint(): ConstraintContext | undefined;
    sizeConstraint(): SizeConstraintContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ReferencedTypeContext extends ParserRuleContext {
    definedType(): DefinedTypeContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class DefinedTypeContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode[];
    IDENTIFIER(i: number): TerminalNode;
    DOT(): TerminalNode | undefined;
    actualParameterList(): ActualParameterListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ConstraintContext extends ParserRuleContext {
    L_PARAN(): TerminalNode;
    constraintSpec(): ConstraintSpecContext;
    R_PARAN(): TerminalNode;
    exceptionSpec(): ExceptionSpecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ConstraintSpecContext extends ParserRuleContext {
    generalConstraint(): GeneralConstraintContext | undefined;
    subtypeConstraint(): SubtypeConstraintContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class UserDefinedConstraintContext extends ParserRuleContext {
    CONSTRAINED_LITERAL(): TerminalNode;
    BY_LITERAL(): TerminalNode;
    L_BRACE(): TerminalNode;
    userDefinedConstraintParameter(): UserDefinedConstraintParameterContext[];
    userDefinedConstraintParameter(i: number): UserDefinedConstraintParameterContext;
    R_BRACE(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class GeneralConstraintContext extends ParserRuleContext {
    userDefinedConstraint(): UserDefinedConstraintContext | undefined;
    tableConstraint(): TableConstraintContext | undefined;
    contentsConstraint(): ContentsConstraintContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class UserDefinedConstraintParameterContext extends ParserRuleContext {
    governor(): GovernorContext;
    COLON(): TerminalNode | undefined;
    value(): ValueContext | undefined;
    valueSet(): ValueSetContext | undefined;
    object(): ObjectContext | undefined;
    objectSet(): ObjectSetContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class TableConstraintContext extends ParserRuleContext {
    componentRelationConstraint(): ComponentRelationConstraintContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class SimpleTableConstraintContext extends ParserRuleContext {
    objectSet(): ObjectSetContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ContentsConstraintContext extends ParserRuleContext {
    CONTAINING_LITERAL(): TerminalNode | undefined;
    asnType(): AsnTypeContext | undefined;
    ENCODED_LITERAL(): TerminalNode | undefined;
    BY_LITERAL(): TerminalNode | undefined;
    value(): ValueContext | undefined;
    WITH_LITERAL(): TerminalNode | undefined;
    COMPONENTS_LITERAL(): TerminalNode | undefined;
    L_BRACE(): TerminalNode | undefined;
    componentPresenceLists(): ComponentPresenceListsContext | undefined;
    R_BRACE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ComponentPresenceListsContext extends ParserRuleContext {
    componentPresenceList(): ComponentPresenceListContext[];
    componentPresenceList(i: number): ComponentPresenceListContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    ELLIPSIS(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ComponentPresenceListContext extends ParserRuleContext {
    componentPresence(): ComponentPresenceContext[];
    componentPresence(i: number): ComponentPresenceContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ComponentPresenceContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode;
    ABSENT_LITERAL(): TerminalNode | undefined;
    PRESENT_LITERAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class SubtypeConstraintContext extends ParserRuleContext {
    elementSetSpecs(): ElementSetSpecsContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ValueContext extends ParserRuleContext {
    builtinValue(): BuiltinValueContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class BuiltinValueContext extends ParserRuleContext {
    enumeratedValue(): EnumeratedValueContext | undefined;
    integerValue(): IntegerValueContext | undefined;
    choiceValue(): ChoiceValueContext | undefined;
    objectIdentifierValue(): ObjectIdentifierValueContext | undefined;
    booleanValue(): BooleanValueContext | undefined;
    CSTRING(): TerminalNode | undefined;
    BSTRING(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ObjectIdentifierValueContext extends ParserRuleContext {
    L_BRACE(): TerminalNode;
    objIdComponentsList(): ObjIdComponentsListContext;
    R_BRACE(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ObjIdComponentsListContext extends ParserRuleContext {
    objIdComponents(): ObjIdComponentsContext[];
    objIdComponents(i: number): ObjIdComponentsContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ObjIdComponentsContext extends ParserRuleContext {
    NUMBER(): TerminalNode | undefined;
    IDENTIFIER(): TerminalNode | undefined;
    L_PARAN(): TerminalNode | undefined;
    R_PARAN(): TerminalNode | undefined;
    definedValue(): DefinedValueContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class IntegerValueContext extends ParserRuleContext {
    signedNumber(): SignedNumberContext | undefined;
    IDENTIFIER(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ChoiceValueContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode;
    COLON(): TerminalNode;
    value(): ValueContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class EnumeratedValueContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class SignedNumberContext extends ParserRuleContext {
    NUMBER(): TerminalNode;
    MINUS(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ChoiceTypeContext extends ParserRuleContext {
    CHOICE_LITERAL(): TerminalNode;
    L_BRACE(): TerminalNode;
    alternativeTypeLists(): AlternativeTypeListsContext;
    R_BRACE(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class AlternativeTypeListsContext extends ParserRuleContext {
    rootAlternativeTypeList(): RootAlternativeTypeListContext;
    COMMA(): TerminalNode | undefined;
    extensionAndException(): ExtensionAndExceptionContext | undefined;
    extensionAdditionAlternatives(): ExtensionAdditionAlternativesContext | undefined;
    optionalExtensionMarker(): OptionalExtensionMarkerContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ExtensionAdditionAlternativesContext extends ParserRuleContext {
    COMMA(): TerminalNode | undefined;
    extensionAdditionAlternativesList(): ExtensionAdditionAlternativesListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ExtensionAdditionAlternativesListContext extends ParserRuleContext {
    extensionAdditionAlternative(): ExtensionAdditionAlternativeContext[];
    extensionAdditionAlternative(i: number): ExtensionAdditionAlternativeContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ExtensionAdditionAlternativeContext extends ParserRuleContext {
    extensionAdditionAlternativesGroup(): ExtensionAdditionAlternativesGroupContext | undefined;
    namedType(): NamedTypeContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ExtensionAdditionAlternativesGroupContext extends ParserRuleContext {
    DOUBLE_L_BRACKET(): TerminalNode;
    versionNumber(): VersionNumberContext;
    alternativeTypeList(): AlternativeTypeListContext;
    DOUBLE_R_BRACKET(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class RootAlternativeTypeListContext extends ParserRuleContext {
    alternativeTypeList(): AlternativeTypeListContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class AlternativeTypeListContext extends ParserRuleContext {
    namedType(): NamedTypeContext[];
    namedType(i: number): NamedTypeContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class NamedTypeContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode;
    asnType(): AsnTypeContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class EnumeratedTypeContext extends ParserRuleContext {
    ENUMERATED_LITERAL(): TerminalNode;
    L_BRACE(): TerminalNode;
    enumerations(): EnumerationsContext;
    R_BRACE(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class EnumerationsContext extends ParserRuleContext {
    rootEnumeration(): RootEnumerationContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    ELLIPSIS(): TerminalNode | undefined;
    exceptionSpec(): ExceptionSpecContext | undefined;
    additionalEnumeration(): AdditionalEnumerationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class RootEnumerationContext extends ParserRuleContext {
    enumeration(): EnumerationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class EnumerationContext extends ParserRuleContext {
    enumerationItem(): EnumerationItemContext[];
    enumerationItem(i: number): EnumerationItemContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class EnumerationItemContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode | undefined;
    namedNumber(): NamedNumberContext | undefined;
    value(): ValueContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class NamedNumberContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode;
    L_PARAN(): TerminalNode;
    R_PARAN(): TerminalNode;
    signedNumber(): SignedNumberContext | undefined;
    definedValue(): DefinedValueContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class DefinedValueContext extends ParserRuleContext {
    parameterizedValue(): ParameterizedValueContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ParameterizedValueContext extends ParserRuleContext {
    simpleDefinedValue(): SimpleDefinedValueContext;
    actualParameterList(): ActualParameterListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class SimpleDefinedValueContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode[];
    IDENTIFIER(i: number): TerminalNode;
    DOT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ActualParameterListContext extends ParserRuleContext {
    L_BRACE(): TerminalNode;
    actualParameter(): ActualParameterContext[];
    actualParameter(i: number): ActualParameterContext;
    R_BRACE(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ActualParameterContext extends ParserRuleContext {
    asnType(): AsnTypeContext | undefined;
    value(): ValueContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ExceptionSpecContext extends ParserRuleContext {
    EXCLAM(): TerminalNode;
    exceptionIdentification(): ExceptionIdentificationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ExceptionIdentificationContext extends ParserRuleContext {
    signedNumber(): SignedNumberContext | undefined;
    definedValue(): DefinedValueContext | undefined;
    asnType(): AsnTypeContext | undefined;
    COLON(): TerminalNode | undefined;
    value(): ValueContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class AdditionalEnumerationContext extends ParserRuleContext {
    enumeration(): EnumerationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class IntegerTypeContext extends ParserRuleContext {
    INTEGER_LITERAL(): TerminalNode;
    L_BRACE(): TerminalNode | undefined;
    namedNumberList(): NamedNumberListContext | undefined;
    R_BRACE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class NamedNumberListContext extends ParserRuleContext {
    namedNumber(): NamedNumberContext[];
    namedNumber(i: number): NamedNumberContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ObjectidentifiertypeContext extends ParserRuleContext {
    OBJECT_LITERAL(): TerminalNode;
    IDENTIFIER_LITERAL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ComponentRelationConstraintContext extends ParserRuleContext {
    L_BRACE(): TerminalNode[];
    L_BRACE(i: number): TerminalNode;
    R_BRACE(): TerminalNode[];
    R_BRACE(i: number): TerminalNode;
    IDENTIFIER(): TerminalNode[];
    IDENTIFIER(i: number): TerminalNode;
    atNotation(): AtNotationContext[];
    atNotation(i: number): AtNotationContext;
    DOT(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class AtNotationContext extends ParserRuleContext {
    componentIdList(): ComponentIdListContext;
    A_ROND(): TerminalNode | undefined;
    A_ROND_DOT(): TerminalNode | undefined;
    level(): LevelContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class LevelContext extends ParserRuleContext {
    DOT(): TerminalNode | undefined;
    level(): LevelContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class ComponentIdListContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode[];
    IDENTIFIER(i: number): TerminalNode;
    DOT(): TerminalNode[];
    DOT(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class OctetStringTypeContext extends ParserRuleContext {
    OCTET_LITERAL(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class BitStringTypeContext extends ParserRuleContext {
    BIT_LITERAL(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    L_BRACE(): TerminalNode | undefined;
    namedBitList(): NamedBitListContext | undefined;
    R_BRACE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class NamedBitListContext extends ParserRuleContext {
    namedBit(): NamedBitContext[];
    namedBit(i: number): NamedBitContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class NamedBitContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode;
    L_PARAN(): TerminalNode;
    R_PARAN(): TerminalNode;
    NUMBER(): TerminalNode | undefined;
    definedValue(): DefinedValueContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
export declare class BooleanValueContext extends ParserRuleContext {
    TRUE_LITERAL(): TerminalNode | undefined;
    FALSE_LITERAL(): TerminalNode | undefined;
    TRUE_SMALL_LITERAL(): TerminalNode | undefined;
    FALSE_SMALL_LITERAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    accept<Result>(visitor: ASN_3gppVisitor<Result>): Result;
}
