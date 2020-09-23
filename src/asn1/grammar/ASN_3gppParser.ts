// Generated from src/asn1/grammar/ASN_3gpp.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ASN_3gppVisitor } from "./ASN_3gppVisitor";


export class ASN_3gppParser extends Parser {
	public static readonly TAG = 1;
	public static readonly A_ROND = 2;
	public static readonly STAR = 3;
	public static readonly ASSIGN_OP = 4;
	public static readonly BOOLEAN_LITERAL = 5;
	public static readonly TRUE_LITERAL = 6;
	public static readonly FALSE_LITERAL = 7;
	public static readonly DOT = 8;
	public static readonly DOUBLE_DOT = 9;
	public static readonly ELLIPSIS = 10;
	public static readonly APOSTROPHE = 11;
	public static readonly AMPERSAND = 12;
	public static readonly LESS_THAN = 13;
	public static readonly GREATER_THAN = 14;
	public static readonly LESS_THAN_SLASH = 15;
	public static readonly SLASH_GREATER_THAN = 16;
	public static readonly TRUE_SMALL_LITERAL = 17;
	public static readonly FALSE_SMALL_LITERAL = 18;
	public static readonly INTEGER_LITERAL = 19;
	public static readonly L_BRACE = 20;
	public static readonly R_BRACE = 21;
	public static readonly COMMA = 22;
	public static readonly L_PARAN = 23;
	public static readonly R_PARAN = 24;
	public static readonly MINUS = 25;
	public static readonly BMP_STRING_LITERAL = 26;
	public static readonly GENREAL_STRING_LITERAL = 27;
	public static readonly GRAPHIC_STRING_LITERAL = 28;
	public static readonly IA5_STRING_LITERAL = 29;
	public static readonly ISO646_STRING_LITERAL = 30;
	public static readonly NUMERIC_STRING_LITERAL = 31;
	public static readonly PRINTABLE_STRING_LITERAL = 32;
	public static readonly TELETEXT_STRING_LITERAL = 33;
	public static readonly T61_STRING_LITERAL = 34;
	public static readonly UNIVERSAL_STRING_LITERAL = 35;
	public static readonly UTF8_STRING_LITERAL = 36;
	public static readonly VIDEOTEX_STRING_LITERAL = 37;
	public static readonly VISIBLE_STRING_LITERAL = 38;
	public static readonly ENUMERATED_LITERAL = 39;
	public static readonly REAL_LITERAL = 40;
	public static readonly PLUS_INFINITY_LITERAL = 41;
	public static readonly MINUS_INFINITY_LITERAL = 42;
	public static readonly BIT_LITERAL = 43;
	public static readonly STRING_LITERAL = 44;
	public static readonly CONTAINING_LITERAL = 45;
	public static readonly OCTET_LITERAL = 46;
	public static readonly NULL_LITERAL = 47;
	public static readonly SEQUENCE_LITERAL = 48;
	public static readonly OPTIONAL_LITERAL = 49;
	public static readonly DEFAULT_LITERAL = 50;
	public static readonly COMPONENTS_LITERAL = 51;
	public static readonly OF_LITERAL = 52;
	public static readonly SET_LITERAL = 53;
	public static readonly EXCLAM = 54;
	public static readonly ALL_LITERAL = 55;
	public static readonly EXCEPT_LITERAL = 56;
	public static readonly POWER = 57;
	public static readonly PIPE = 58;
	public static readonly UNION_LITERAL = 59;
	public static readonly INTERSECTION_LITERAL = 60;
	public static readonly INCLUDES_LITERAL = 61;
	public static readonly MIN_LITERAL = 62;
	public static readonly MAX_LITERAL = 63;
	public static readonly SIZE_LITERAL = 64;
	public static readonly FROM_LITERAL = 65;
	public static readonly WITH_LITERAL = 66;
	public static readonly COMPONENT_LITERAL = 67;
	public static readonly PRESENT_LITERAL = 68;
	public static readonly ABSENT_LITERAL = 69;
	public static readonly PATTERN_LITERAL = 70;
	public static readonly TYPE_IDENTIFIER_LITERAL = 71;
	public static readonly ABSTRACT_SYNTAX_LITERAL = 72;
	public static readonly CLASS_LITERAL = 73;
	public static readonly UNIQUE_LITERAL = 74;
	public static readonly SYNTAX_LITERAL = 75;
	public static readonly L_BRACKET = 76;
	public static readonly R_BRACKET = 77;
	public static readonly INSTANCE_LITERAL = 78;
	public static readonly SEMI_COLON = 79;
	public static readonly IMPORTS_LITERAL = 80;
	public static readonly EXPORTS_LITERAL = 81;
	public static readonly EXTENSIBILITY_LITERAL = 82;
	public static readonly IMPLIED_LITERAL = 83;
	public static readonly EXPLICIT_LITERAL = 84;
	public static readonly TAGS_LITERAL = 85;
	public static readonly IMPLICIT_LITERAL = 86;
	public static readonly AUTOMATIC_LITERAL = 87;
	public static readonly DEFINITIONS_LITERAL = 88;
	public static readonly BEGIN_LITERAL = 89;
	public static readonly END_LITERAL = 90;
	public static readonly DOUBLE_L_BRACKET = 91;
	public static readonly DOUBLE_R_BRACKET = 92;
	public static readonly COLON = 93;
	public static readonly CHOICE_LITERAL = 94;
	public static readonly UNIVERSAL_LITERAL = 95;
	public static readonly APPLICATION_LITERAL = 96;
	public static readonly PRIVATE_LITERAL = 97;
	public static readonly EMBEDDED_LITERAL = 98;
	public static readonly PDV_LITERAL = 99;
	public static readonly EXTERNAL_LITERAL = 100;
	public static readonly OBJECT_LITERAL = 101;
	public static readonly IDENTIFIER_LITERAL = 102;
	public static readonly RELATIVE_OID_LITERAL = 103;
	public static readonly CHARACTER_LITERAL = 104;
	public static readonly CONSTRAINED_LITERAL = 105;
	public static readonly BY_LITERAL = 106;
	public static readonly A_ROND_DOT = 107;
	public static readonly ENCODED_LITERAL = 108;
	public static readonly COMMENT = 109;
	public static readonly UNRESTRICTEDCHARACTERSTRINGTYPE = 110;
	public static readonly EXTENSTIONENDMARKER = 111;
	public static readonly NUMBER = 112;
	public static readonly WS = 113;
	public static readonly LINE_COMMENT = 114;
	public static readonly BSTRING = 115;
	public static readonly HSTRING = 116;
	public static readonly CSTRING = 117;
	public static readonly IDENTIFIER = 118;
	public static readonly RULE_modules = 0;
	public static readonly RULE_moduleDefinition = 1;
	public static readonly RULE_tagDefault = 2;
	public static readonly RULE_extensionDefault = 3;
	public static readonly RULE_moduleBody = 4;
	public static readonly RULE_exports = 5;
	public static readonly RULE_symbolsExported = 6;
	public static readonly RULE_imports = 7;
	public static readonly RULE_symbolsImported = 8;
	public static readonly RULE_symbolsFromModuleList = 9;
	public static readonly RULE_symbolsFromModule = 10;
	public static readonly RULE_globalModuleReference = 11;
	public static readonly RULE_assignedIdentifier = 12;
	public static readonly RULE_symbolList = 13;
	public static readonly RULE_symbol = 14;
	public static readonly RULE_assignmentList = 15;
	public static readonly RULE_assignment = 16;
	public static readonly RULE_sequenceType = 17;
	public static readonly RULE_extensionAndException = 18;
	public static readonly RULE_optionalExtensionMarker = 19;
	public static readonly RULE_componentTypeLists = 20;
	public static readonly RULE_rootComponentTypeList = 21;
	public static readonly RULE_componentTypeList = 22;
	public static readonly RULE_componentType = 23;
	public static readonly RULE_tag = 24;
	public static readonly RULE_extensionAdditions = 25;
	public static readonly RULE_extensionAdditionList = 26;
	public static readonly RULE_extensionAddition = 27;
	public static readonly RULE_extensionAdditionGroup = 28;
	public static readonly RULE_versionNumber = 29;
	public static readonly RULE_sequenceOfType = 30;
	public static readonly RULE_sizeConstraint = 31;
	public static readonly RULE_parameterizedAssignment = 32;
	public static readonly RULE_parameterList = 33;
	public static readonly RULE_parameter = 34;
	public static readonly RULE_paramGovernor = 35;
	public static readonly RULE_governor = 36;
	public static readonly RULE_objectClassAssignment = 37;
	public static readonly RULE_objectClass = 38;
	public static readonly RULE_definedObjectClass = 39;
	public static readonly RULE_usefulObjectClassReference = 40;
	public static readonly RULE_externalObjectClassReference = 41;
	public static readonly RULE_objectClassDefn = 42;
	public static readonly RULE_withSyntaxSpec = 43;
	public static readonly RULE_syntaxList = 44;
	public static readonly RULE_tokenOrGroupSpec = 45;
	public static readonly RULE_optionalGroup = 46;
	public static readonly RULE_requiredToken = 47;
	public static readonly RULE_literal = 48;
	public static readonly RULE_primitiveFieldName = 49;
	public static readonly RULE_fieldSpec = 50;
	public static readonly RULE_typeFieldSpec = 51;
	public static readonly RULE_typeOptionalitySpec = 52;
	public static readonly RULE_fixedTypeValueFieldSpec = 53;
	public static readonly RULE_valueOptionalitySpec = 54;
	public static readonly RULE_variableTypeValueFieldSpec = 55;
	public static readonly RULE_fixedTypeValueSetFieldSpec = 56;
	public static readonly RULE_valueSetOptionalitySpec = 57;
	public static readonly RULE_object = 58;
	public static readonly RULE_parameterizedObject = 59;
	public static readonly RULE_definedObject = 60;
	public static readonly RULE_objectSet = 61;
	public static readonly RULE_objectSetSpec = 62;
	public static readonly RULE_fieldName = 63;
	public static readonly RULE_valueSet = 64;
	public static readonly RULE_elementSetSpecs = 65;
	public static readonly RULE_rootElementSetSpec = 66;
	public static readonly RULE_additionalElementSetSpec = 67;
	public static readonly RULE_elementSetSpec = 68;
	public static readonly RULE_unions = 69;
	public static readonly RULE_exclusions = 70;
	public static readonly RULE_intersections = 71;
	public static readonly RULE_unionMark = 72;
	public static readonly RULE_intersectionMark = 73;
	public static readonly RULE_elements = 74;
	public static readonly RULE_objectSetElements = 75;
	public static readonly RULE_intersectionElements = 76;
	public static readonly RULE_subtypeElements = 77;
	public static readonly RULE_variableTypeValueSetFieldSpec = 78;
	public static readonly RULE_objectFieldSpec = 79;
	public static readonly RULE_objectOptionalitySpec = 80;
	public static readonly RULE_objectSetFieldSpec = 81;
	public static readonly RULE_objectSetOptionalitySpec = 82;
	public static readonly RULE_typeAssignment = 83;
	public static readonly RULE_valueAssignment = 84;
	public static readonly RULE_asnType = 85;
	public static readonly RULE_builtinType = 86;
	public static readonly RULE_characterStringType = 87;
	public static readonly RULE_restrictedCharacterStringType = 88;
	public static readonly RULE_objectClassFieldType = 89;
	public static readonly RULE_setType = 90;
	public static readonly RULE_setOfType = 91;
	public static readonly RULE_referencedType = 92;
	public static readonly RULE_definedType = 93;
	public static readonly RULE_constraint = 94;
	public static readonly RULE_constraintSpec = 95;
	public static readonly RULE_userDefinedConstraint = 96;
	public static readonly RULE_generalConstraint = 97;
	public static readonly RULE_userDefinedConstraintParameter = 98;
	public static readonly RULE_tableConstraint = 99;
	public static readonly RULE_simpleTableConstraint = 100;
	public static readonly RULE_contentsConstraint = 101;
	public static readonly RULE_componentPresenceLists = 102;
	public static readonly RULE_componentPresenceList = 103;
	public static readonly RULE_componentPresence = 104;
	public static readonly RULE_subtypeConstraint = 105;
	public static readonly RULE_value = 106;
	public static readonly RULE_builtinValue = 107;
	public static readonly RULE_objectIdentifierValue = 108;
	public static readonly RULE_objIdComponentsList = 109;
	public static readonly RULE_objIdComponents = 110;
	public static readonly RULE_integerValue = 111;
	public static readonly RULE_choiceValue = 112;
	public static readonly RULE_enumeratedValue = 113;
	public static readonly RULE_signedNumber = 114;
	public static readonly RULE_choiceType = 115;
	public static readonly RULE_alternativeTypeLists = 116;
	public static readonly RULE_extensionAdditionAlternatives = 117;
	public static readonly RULE_extensionAdditionAlternativesList = 118;
	public static readonly RULE_extensionAdditionAlternative = 119;
	public static readonly RULE_extensionAdditionAlternativesGroup = 120;
	public static readonly RULE_rootAlternativeTypeList = 121;
	public static readonly RULE_alternativeTypeList = 122;
	public static readonly RULE_namedType = 123;
	public static readonly RULE_enumeratedType = 124;
	public static readonly RULE_enumerations = 125;
	public static readonly RULE_rootEnumeration = 126;
	public static readonly RULE_enumeration = 127;
	public static readonly RULE_enumerationItem = 128;
	public static readonly RULE_namedNumber = 129;
	public static readonly RULE_definedValue = 130;
	public static readonly RULE_parameterizedValue = 131;
	public static readonly RULE_simpleDefinedValue = 132;
	public static readonly RULE_actualParameterList = 133;
	public static readonly RULE_actualParameter = 134;
	public static readonly RULE_exceptionSpec = 135;
	public static readonly RULE_exceptionIdentification = 136;
	public static readonly RULE_additionalEnumeration = 137;
	public static readonly RULE_integerType = 138;
	public static readonly RULE_namedNumberList = 139;
	public static readonly RULE_objectidentifiertype = 140;
	public static readonly RULE_componentRelationConstraint = 141;
	public static readonly RULE_atNotation = 142;
	public static readonly RULE_level = 143;
	public static readonly RULE_componentIdList = 144;
	public static readonly RULE_octetStringType = 145;
	public static readonly RULE_bitStringType = 146;
	public static readonly RULE_namedBitList = 147;
	public static readonly RULE_namedBit = 148;
	public static readonly RULE_booleanValue = 149;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"modules", "moduleDefinition", "tagDefault", "extensionDefault", "moduleBody", 
		"exports", "symbolsExported", "imports", "symbolsImported", "symbolsFromModuleList", 
		"symbolsFromModule", "globalModuleReference", "assignedIdentifier", "symbolList", 
		"symbol", "assignmentList", "assignment", "sequenceType", "extensionAndException", 
		"optionalExtensionMarker", "componentTypeLists", "rootComponentTypeList", 
		"componentTypeList", "componentType", "tag", "extensionAdditions", "extensionAdditionList", 
		"extensionAddition", "extensionAdditionGroup", "versionNumber", "sequenceOfType", 
		"sizeConstraint", "parameterizedAssignment", "parameterList", "parameter", 
		"paramGovernor", "governor", "objectClassAssignment", "objectClass", "definedObjectClass", 
		"usefulObjectClassReference", "externalObjectClassReference", "objectClassDefn", 
		"withSyntaxSpec", "syntaxList", "tokenOrGroupSpec", "optionalGroup", "requiredToken", 
		"literal", "primitiveFieldName", "fieldSpec", "typeFieldSpec", "typeOptionalitySpec", 
		"fixedTypeValueFieldSpec", "valueOptionalitySpec", "variableTypeValueFieldSpec", 
		"fixedTypeValueSetFieldSpec", "valueSetOptionalitySpec", "object", "parameterizedObject", 
		"definedObject", "objectSet", "objectSetSpec", "fieldName", "valueSet", 
		"elementSetSpecs", "rootElementSetSpec", "additionalElementSetSpec", "elementSetSpec", 
		"unions", "exclusions", "intersections", "unionMark", "intersectionMark", 
		"elements", "objectSetElements", "intersectionElements", "subtypeElements", 
		"variableTypeValueSetFieldSpec", "objectFieldSpec", "objectOptionalitySpec", 
		"objectSetFieldSpec", "objectSetOptionalitySpec", "typeAssignment", "valueAssignment", 
		"asnType", "builtinType", "characterStringType", "restrictedCharacterStringType", 
		"objectClassFieldType", "setType", "setOfType", "referencedType", "definedType", 
		"constraint", "constraintSpec", "userDefinedConstraint", "generalConstraint", 
		"userDefinedConstraintParameter", "tableConstraint", "simpleTableConstraint", 
		"contentsConstraint", "componentPresenceLists", "componentPresenceList", 
		"componentPresence", "subtypeConstraint", "value", "builtinValue", "objectIdentifierValue", 
		"objIdComponentsList", "objIdComponents", "integerValue", "choiceValue", 
		"enumeratedValue", "signedNumber", "choiceType", "alternativeTypeLists", 
		"extensionAdditionAlternatives", "extensionAdditionAlternativesList", 
		"extensionAdditionAlternative", "extensionAdditionAlternativesGroup", 
		"rootAlternativeTypeList", "alternativeTypeList", "namedType", "enumeratedType", 
		"enumerations", "rootEnumeration", "enumeration", "enumerationItem", "namedNumber", 
		"definedValue", "parameterizedValue", "simpleDefinedValue", "actualParameterList", 
		"actualParameter", "exceptionSpec", "exceptionIdentification", "additionalEnumeration", 
		"integerType", "namedNumberList", "objectidentifiertype", "componentRelationConstraint", 
		"atNotation", "level", "componentIdList", "octetStringType", "bitStringType", 
		"namedBitList", "namedBit", "booleanValue",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'@'", "'*'", "'::='", "'BOOLEAN'", "'TRUE'", "'FALSE'", 
		"'.'", "'..'", "'...'", "'''", "'&'", "'<'", "'>'", "'</'", "'/>'", "'true'", 
		"'false'", "'INTEGER'", "'{'", "'}'", "','", "'('", "')'", "'-'", "'BMPString'", 
		"'GeneralString'", "'GraphicString'", "'IA5String'", "'ISO646String'", 
		"'NumericString'", "'PrintableString'", "'TeletexString'", "'T61String'", 
		"'UniversalString'", "'UTF8String'", "'VideotexString'", "'VisibleString'", 
		"'ENUMERATED'", "'REAL'", "'PLUS-INFINITY'", "'MINUS-INFINITY'", "'BIT'", 
		"'STRING'", "'CONTAINING'", "'OCTET'", "'NULL'", "'SEQUENCE'", "'OPTIONAL'", 
		"'DEFAULT'", "'COMPONENTS'", "'OF'", "'SET'", "'!'", "'ALL'", "'EXCEPT'", 
		"'^'", "'|'", "'UNION'", "'INTERSECTION'", "'INCLUDES'", "'MIN'", "'MAX'", 
		"'SIZE'", "'FROM'", "'WITH'", "'COMPONENT'", "'PRESENT'", "'ABSENT'", 
		"'PATTERN'", "'TYPE-Identifier'", "'ABSTRACT-SYNTAX'", "'CLASS'", "'UNIQUE'", 
		"'SYNTAX'", "'['", "']'", "'INSTANCE'", "';'", "'IMPORTS'", "'EXPORTS'", 
		"'EXTENSIBILITY'", "'IMPLIED'", "'EXPLICIT'", "'TAGS'", "'IMPLICIT'", 
		"'AUTOMATIC'", "'DEFINITIONS'", "'BEGIN'", "'END'", "'[['", "']]'", "':'", 
		"'CHOICE'", "'UNIVERSAL'", "'APPLICATION'", "'PRIVATE'", "'EMBEDDED'", 
		"'PDV'", "'EXTERNAL'", "'OBJECT'", "'IDENTIFIER'", "'RELATIVE-OID'", "'CHARACTER'", 
		"'CONSTRAINED'", "'BY'", "'@.'", "'ENCODED'", "'--'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "TAG", "A_ROND", "STAR", "ASSIGN_OP", "BOOLEAN_LITERAL", "TRUE_LITERAL", 
		"FALSE_LITERAL", "DOT", "DOUBLE_DOT", "ELLIPSIS", "APOSTROPHE", "AMPERSAND", 
		"LESS_THAN", "GREATER_THAN", "LESS_THAN_SLASH", "SLASH_GREATER_THAN", 
		"TRUE_SMALL_LITERAL", "FALSE_SMALL_LITERAL", "INTEGER_LITERAL", "L_BRACE", 
		"R_BRACE", "COMMA", "L_PARAN", "R_PARAN", "MINUS", "BMP_STRING_LITERAL", 
		"GENREAL_STRING_LITERAL", "GRAPHIC_STRING_LITERAL", "IA5_STRING_LITERAL", 
		"ISO646_STRING_LITERAL", "NUMERIC_STRING_LITERAL", "PRINTABLE_STRING_LITERAL", 
		"TELETEXT_STRING_LITERAL", "T61_STRING_LITERAL", "UNIVERSAL_STRING_LITERAL", 
		"UTF8_STRING_LITERAL", "VIDEOTEX_STRING_LITERAL", "VISIBLE_STRING_LITERAL", 
		"ENUMERATED_LITERAL", "REAL_LITERAL", "PLUS_INFINITY_LITERAL", "MINUS_INFINITY_LITERAL", 
		"BIT_LITERAL", "STRING_LITERAL", "CONTAINING_LITERAL", "OCTET_LITERAL", 
		"NULL_LITERAL", "SEQUENCE_LITERAL", "OPTIONAL_LITERAL", "DEFAULT_LITERAL", 
		"COMPONENTS_LITERAL", "OF_LITERAL", "SET_LITERAL", "EXCLAM", "ALL_LITERAL", 
		"EXCEPT_LITERAL", "POWER", "PIPE", "UNION_LITERAL", "INTERSECTION_LITERAL", 
		"INCLUDES_LITERAL", "MIN_LITERAL", "MAX_LITERAL", "SIZE_LITERAL", "FROM_LITERAL", 
		"WITH_LITERAL", "COMPONENT_LITERAL", "PRESENT_LITERAL", "ABSENT_LITERAL", 
		"PATTERN_LITERAL", "TYPE_IDENTIFIER_LITERAL", "ABSTRACT_SYNTAX_LITERAL", 
		"CLASS_LITERAL", "UNIQUE_LITERAL", "SYNTAX_LITERAL", "L_BRACKET", "R_BRACKET", 
		"INSTANCE_LITERAL", "SEMI_COLON", "IMPORTS_LITERAL", "EXPORTS_LITERAL", 
		"EXTENSIBILITY_LITERAL", "IMPLIED_LITERAL", "EXPLICIT_LITERAL", "TAGS_LITERAL", 
		"IMPLICIT_LITERAL", "AUTOMATIC_LITERAL", "DEFINITIONS_LITERAL", "BEGIN_LITERAL", 
		"END_LITERAL", "DOUBLE_L_BRACKET", "DOUBLE_R_BRACKET", "COLON", "CHOICE_LITERAL", 
		"UNIVERSAL_LITERAL", "APPLICATION_LITERAL", "PRIVATE_LITERAL", "EMBEDDED_LITERAL", 
		"PDV_LITERAL", "EXTERNAL_LITERAL", "OBJECT_LITERAL", "IDENTIFIER_LITERAL", 
		"RELATIVE_OID_LITERAL", "CHARACTER_LITERAL", "CONSTRAINED_LITERAL", "BY_LITERAL", 
		"A_ROND_DOT", "ENCODED_LITERAL", "COMMENT", "UNRESTRICTEDCHARACTERSTRINGTYPE", 
		"EXTENSTIONENDMARKER", "NUMBER", "WS", "LINE_COMMENT", "BSTRING", "HSTRING", 
		"CSTRING", "IDENTIFIER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ASN_3gppParser._LITERAL_NAMES, ASN_3gppParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ASN_3gppParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ASN_3gpp.g4"; }

	// @Override
	public get ruleNames(): string[] { return ASN_3gppParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ASN_3gppParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ASN_3gppParser._ATN, this);
	}
	// @RuleVersion(0)
	public modules(): ModulesContext {
		let _localctx: ModulesContext = new ModulesContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ASN_3gppParser.RULE_modules);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 300;
				this.moduleDefinition();
				}
				}
				this.state = 303;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ASN_3gppParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleDefinition(): ModuleDefinitionContext {
		let _localctx: ModuleDefinitionContext = new ModuleDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ASN_3gppParser.RULE_moduleDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 305;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 317;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.L_BRACE) {
				{
				this.state = 306;
				this.match(ASN_3gppParser.L_BRACE);
				this.state = 313;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ASN_3gppParser.IDENTIFIER) {
					{
					{
					this.state = 307;
					this.match(ASN_3gppParser.IDENTIFIER);
					this.state = 308;
					this.match(ASN_3gppParser.L_PARAN);
					this.state = 309;
					this.match(ASN_3gppParser.NUMBER);
					this.state = 310;
					this.match(ASN_3gppParser.R_PARAN);
					}
					}
					this.state = 315;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 316;
				this.match(ASN_3gppParser.R_BRACE);
				}
			}

			this.state = 319;
			this.match(ASN_3gppParser.DEFINITIONS_LITERAL);
			this.state = 320;
			this.tagDefault();
			this.state = 321;
			this.extensionDefault();
			this.state = 322;
			this.match(ASN_3gppParser.ASSIGN_OP);
			this.state = 323;
			this.match(ASN_3gppParser.BEGIN_LITERAL);
			this.state = 324;
			this.moduleBody();
			this.state = 325;
			this.match(ASN_3gppParser.END_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tagDefault(): TagDefaultContext {
		let _localctx: TagDefaultContext = new TagDefaultContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ASN_3gppParser.RULE_tagDefault);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 329;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & ((1 << (ASN_3gppParser.EXPLICIT_LITERAL - 84)) | (1 << (ASN_3gppParser.IMPLICIT_LITERAL - 84)) | (1 << (ASN_3gppParser.AUTOMATIC_LITERAL - 84)))) !== 0)) {
				{
				this.state = 327;
				_la = this._input.LA(1);
				if (!(((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & ((1 << (ASN_3gppParser.EXPLICIT_LITERAL - 84)) | (1 << (ASN_3gppParser.IMPLICIT_LITERAL - 84)) | (1 << (ASN_3gppParser.AUTOMATIC_LITERAL - 84)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 328;
				this.match(ASN_3gppParser.TAGS_LITERAL);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extensionDefault(): ExtensionDefaultContext {
		let _localctx: ExtensionDefaultContext = new ExtensionDefaultContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ASN_3gppParser.RULE_extensionDefault);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.EXTENSIBILITY_LITERAL) {
				{
				this.state = 331;
				this.match(ASN_3gppParser.EXTENSIBILITY_LITERAL);
				this.state = 332;
				this.match(ASN_3gppParser.IMPLIED_LITERAL);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleBody(): ModuleBodyContext {
		let _localctx: ModuleBodyContext = new ModuleBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ASN_3gppParser.RULE_moduleBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 339;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.IMPORTS_LITERAL || _la === ASN_3gppParser.EXPORTS_LITERAL || _la === ASN_3gppParser.IDENTIFIER) {
				{
				this.state = 335;
				this.exports();
				this.state = 336;
				this.imports();
				this.state = 337;
				this.assignmentList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exports(): ExportsContext {
		let _localctx: ExportsContext = new ExportsContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ASN_3gppParser.RULE_exports);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 341;
				this.match(ASN_3gppParser.EXPORTS_LITERAL);
				this.state = 342;
				this.symbolsExported();
				this.state = 343;
				this.match(ASN_3gppParser.SEMI_COLON);
				}
				break;

			case 2:
				{
				this.state = 345;
				this.match(ASN_3gppParser.EXPORTS_LITERAL);
				this.state = 346;
				this.match(ASN_3gppParser.ALL_LITERAL);
				this.state = 347;
				this.match(ASN_3gppParser.SEMI_COLON);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public symbolsExported(): SymbolsExportedContext {
		let _localctx: SymbolsExportedContext = new SymbolsExportedContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ASN_3gppParser.RULE_symbolsExported);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.IDENTIFIER) {
				{
				this.state = 350;
				this.symbolList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public imports(): ImportsContext {
		let _localctx: ImportsContext = new ImportsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ASN_3gppParser.RULE_imports);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 357;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.IMPORTS_LITERAL) {
				{
				this.state = 353;
				this.match(ASN_3gppParser.IMPORTS_LITERAL);
				this.state = 354;
				this.symbolsImported();
				this.state = 355;
				this.match(ASN_3gppParser.SEMI_COLON);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public symbolsImported(): SymbolsImportedContext {
		let _localctx: SymbolsImportedContext = new SymbolsImportedContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ASN_3gppParser.RULE_symbolsImported);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.IDENTIFIER) {
				{
				this.state = 359;
				this.symbolsFromModuleList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public symbolsFromModuleList(): SymbolsFromModuleListContext {
		let _localctx: SymbolsFromModuleListContext = new SymbolsFromModuleListContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ASN_3gppParser.RULE_symbolsFromModuleList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 362;
			this.symbolsFromModule();
			}
			this.state = 366;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASN_3gppParser.IDENTIFIER) {
				{
				{
				this.state = 363;
				this.symbolsFromModule();
				}
				}
				this.state = 368;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public symbolsFromModule(): SymbolsFromModuleContext {
		let _localctx: SymbolsFromModuleContext = new SymbolsFromModuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ASN_3gppParser.RULE_symbolsFromModule);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 369;
			this.symbolList();
			this.state = 370;
			this.match(ASN_3gppParser.FROM_LITERAL);
			this.state = 371;
			this.globalModuleReference();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public globalModuleReference(): GlobalModuleReferenceContext {
		let _localctx: GlobalModuleReferenceContext = new GlobalModuleReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ASN_3gppParser.RULE_globalModuleReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 373;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 374;
			this.assignedIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignedIdentifier(): AssignedIdentifierContext {
		let _localctx: AssignedIdentifierContext = new AssignedIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ASN_3gppParser.RULE_assignedIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			// tslint:disable-next-line:no-empty
			{
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public symbolList(): SymbolListContext {
		let _localctx: SymbolListContext = new SymbolListContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ASN_3gppParser.RULE_symbolList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 378;
			this.symbol();
			}
			this.state = 383;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASN_3gppParser.COMMA) {
				{
				{
				this.state = 379;
				this.match(ASN_3gppParser.COMMA);
				this.state = 380;
				this.symbol();
				}
				}
				this.state = 385;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public symbol(): SymbolContext {
		let _localctx: SymbolContext = new SymbolContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ASN_3gppParser.RULE_symbol);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 386;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 389;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.L_BRACE) {
				{
				{
				this.state = 387;
				this.match(ASN_3gppParser.L_BRACE);
				this.state = 388;
				this.match(ASN_3gppParser.R_BRACE);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentList(): AssignmentListContext {
		let _localctx: AssignmentListContext = new AssignmentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ASN_3gppParser.RULE_assignmentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 391;
			this.assignment();
			}
			this.state = 395;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASN_3gppParser.IDENTIFIER) {
				{
				{
				this.state = 392;
				this.assignment();
				}
				}
				this.state = 397;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ASN_3gppParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 398;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 403;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 399;
				this.valueAssignment();
				}
				break;

			case 2:
				{
				this.state = 400;
				this.typeAssignment();
				}
				break;

			case 3:
				{
				this.state = 401;
				this.parameterizedAssignment();
				}
				break;

			case 4:
				{
				this.state = 402;
				this.objectClassAssignment();
				}
				break;
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sequenceType(): SequenceTypeContext {
		let _localctx: SequenceTypeContext = new SequenceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ASN_3gppParser.RULE_sequenceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 405;
			this.match(ASN_3gppParser.SEQUENCE_LITERAL);
			this.state = 406;
			this.match(ASN_3gppParser.L_BRACE);
			this.state = 411;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 407;
				this.extensionAndException();
				this.state = 408;
				this.optionalExtensionMarker();
				}
				break;

			case 2:
				{
				this.state = 410;
				this.componentTypeLists();
				}
				break;
			}
			this.state = 413;
			this.match(ASN_3gppParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extensionAndException(): ExtensionAndExceptionContext {
		let _localctx: ExtensionAndExceptionContext = new ExtensionAndExceptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, ASN_3gppParser.RULE_extensionAndException);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			this.match(ASN_3gppParser.ELLIPSIS);
			this.state = 417;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.EXCLAM) {
				{
				this.state = 416;
				this.exceptionSpec();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionalExtensionMarker(): OptionalExtensionMarkerContext {
		let _localctx: OptionalExtensionMarkerContext = new OptionalExtensionMarkerContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ASN_3gppParser.RULE_optionalExtensionMarker);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 421;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.COMMA) {
				{
				this.state = 419;
				this.match(ASN_3gppParser.COMMA);
				this.state = 420;
				this.match(ASN_3gppParser.ELLIPSIS);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentTypeLists(): ComponentTypeListsContext {
		let _localctx: ComponentTypeListsContext = new ComponentTypeListsContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ASN_3gppParser.RULE_componentTypeLists);
		let _la: number;
		try {
			this.state = 477;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 423;
				this.rootComponentTypeList();
				this.state = 425;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.TAG) {
					{
					this.state = 424;
					this.tag();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 427;
				this.rootComponentTypeList();
				this.state = 428;
				this.match(ASN_3gppParser.COMMA);
				this.state = 430;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.TAG) {
					{
					this.state = 429;
					this.tag();
					}
				}

				this.state = 432;
				this.extensionAndException();
				this.state = 433;
				this.extensionAdditions();
				this.state = 435;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.TAG) {
					{
					this.state = 434;
					this.tag();
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 437;
				this.rootComponentTypeList();
				this.state = 438;
				this.match(ASN_3gppParser.COMMA);
				this.state = 440;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.TAG) {
					{
					this.state = 439;
					this.tag();
					}
				}

				this.state = 442;
				this.extensionAndException();
				this.state = 443;
				this.extensionAdditions();
				this.state = 456;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.COMMA) {
					{
					this.state = 444;
					this.match(ASN_3gppParser.COMMA);
					this.state = 446;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ASN_3gppParser.TAG) {
						{
						this.state = 445;
						this.tag();
						}
					}

					this.state = 448;
					this.match(ASN_3gppParser.ELLIPSIS);
					this.state = 454;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ASN_3gppParser.COMMA) {
						{
						this.state = 449;
						this.match(ASN_3gppParser.COMMA);
						this.state = 450;
						this.rootComponentTypeList();
						this.state = 452;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === ASN_3gppParser.TAG) {
							{
							this.state = 451;
							this.tag();
							}
						}

						}
					}

					}
				}

				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 458;
				this.extensionAndException();
				this.state = 459;
				this.extensionAdditions();
				this.state = 461;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.TAG) {
					{
					this.state = 460;
					this.tag();
					}
				}

				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 463;
				this.extensionAndException();
				this.state = 464;
				this.extensionAdditions();
				this.state = 475;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.COMMA) {
					{
					this.state = 465;
					this.match(ASN_3gppParser.COMMA);
					this.state = 467;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ASN_3gppParser.TAG) {
						{
						this.state = 466;
						this.tag();
						}
					}

					this.state = 469;
					this.match(ASN_3gppParser.ELLIPSIS);
					{
					this.state = 470;
					this.match(ASN_3gppParser.COMMA);
					this.state = 471;
					this.rootComponentTypeList();
					this.state = 473;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ASN_3gppParser.TAG) {
						{
						this.state = 472;
						this.tag();
						}
					}

					}
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rootComponentTypeList(): RootComponentTypeListContext {
		let _localctx: RootComponentTypeListContext = new RootComponentTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ASN_3gppParser.RULE_rootComponentTypeList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 479;
			this.componentTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentTypeList(): ComponentTypeListContext {
		let _localctx: ComponentTypeListContext = new ComponentTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, ASN_3gppParser.RULE_componentTypeList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 481;
			this.componentType();
			}
			this.state = 489;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 482;
					this.match(ASN_3gppParser.COMMA);
					this.state = 484;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ASN_3gppParser.TAG) {
						{
						this.state = 483;
						this.tag();
						}
					}

					this.state = 486;
					this.componentType();
					}
					}
				}
				this.state = 491;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentType(): ComponentTypeContext {
		let _localctx: ComponentTypeContext = new ComponentTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, ASN_3gppParser.RULE_componentType);
		try {
			this.state = 501;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 492;
				this.namedType();
				this.state = 496;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ASN_3gppParser.OPTIONAL_LITERAL:
					{
					this.state = 493;
					this.match(ASN_3gppParser.OPTIONAL_LITERAL);
					}
					break;
				case ASN_3gppParser.DEFAULT_LITERAL:
					{
					this.state = 494;
					this.match(ASN_3gppParser.DEFAULT_LITERAL);
					this.state = 495;
					this.value();
					}
					break;
				case ASN_3gppParser.TAG:
				case ASN_3gppParser.R_BRACE:
				case ASN_3gppParser.COMMA:
				case ASN_3gppParser.DOUBLE_R_BRACKET:
					break;
				default:
					break;
				}
				}
				break;
			case ASN_3gppParser.COMPONENTS_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 498;
				this.match(ASN_3gppParser.COMPONENTS_LITERAL);
				this.state = 499;
				this.match(ASN_3gppParser.OF_LITERAL);
				this.state = 500;
				this.asnType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tag(): TagContext {
		let _localctx: TagContext = new TagContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, ASN_3gppParser.RULE_tag);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 503;
			this.match(ASN_3gppParser.TAG);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extensionAdditions(): ExtensionAdditionsContext {
		let _localctx: ExtensionAdditionsContext = new ExtensionAdditionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, ASN_3gppParser.RULE_extensionAdditions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 507;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 505;
				this.match(ASN_3gppParser.COMMA);
				this.state = 506;
				this.extensionAdditionList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extensionAdditionList(): ExtensionAdditionListContext {
		let _localctx: ExtensionAdditionListContext = new ExtensionAdditionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, ASN_3gppParser.RULE_extensionAdditionList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 509;
			this.extensionAddition();
			}
			this.state = 517;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 510;
					this.match(ASN_3gppParser.COMMA);
					this.state = 512;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ASN_3gppParser.TAG) {
						{
						this.state = 511;
						this.tag();
						}
					}

					this.state = 514;
					this.extensionAddition();
					}
					}
				}
				this.state = 519;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extensionAddition(): ExtensionAdditionContext {
		let _localctx: ExtensionAdditionContext = new ExtensionAdditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, ASN_3gppParser.RULE_extensionAddition);
		try {
			this.state = 522;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.COMPONENTS_LITERAL:
			case ASN_3gppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 520;
				this.componentType();
				}
				break;
			case ASN_3gppParser.DOUBLE_L_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 521;
				this.extensionAdditionGroup();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extensionAdditionGroup(): ExtensionAdditionGroupContext {
		let _localctx: ExtensionAdditionGroupContext = new ExtensionAdditionGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, ASN_3gppParser.RULE_extensionAdditionGroup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 524;
			this.match(ASN_3gppParser.DOUBLE_L_BRACKET);
			this.state = 525;
			this.versionNumber();
			this.state = 526;
			this.componentTypeList();
			this.state = 528;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.TAG) {
				{
				this.state = 527;
				this.tag();
				}
			}

			this.state = 530;
			this.match(ASN_3gppParser.DOUBLE_R_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public versionNumber(): VersionNumberContext {
		let _localctx: VersionNumberContext = new VersionNumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, ASN_3gppParser.RULE_versionNumber);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 534;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.NUMBER) {
				{
				this.state = 532;
				this.match(ASN_3gppParser.NUMBER);
				this.state = 533;
				this.match(ASN_3gppParser.COLON);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sequenceOfType(): SequenceOfTypeContext {
		let _localctx: SequenceOfTypeContext = new SequenceOfTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, ASN_3gppParser.RULE_sequenceOfType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 536;
			this.match(ASN_3gppParser.SEQUENCE_LITERAL);
			this.state = 544;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.L_PARAN) {
				{
				this.state = 537;
				this.match(ASN_3gppParser.L_PARAN);
				this.state = 540;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ASN_3gppParser.L_PARAN:
					{
					this.state = 538;
					this.constraint();
					}
					break;
				case ASN_3gppParser.SIZE_LITERAL:
					{
					this.state = 539;
					this.sizeConstraint();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 542;
				this.match(ASN_3gppParser.R_PARAN);
				}
			}

			this.state = 546;
			this.match(ASN_3gppParser.OF_LITERAL);
			this.state = 549;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				this.state = 547;
				this.asnType();
				}
				break;

			case 2:
				{
				this.state = 548;
				this.namedType();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sizeConstraint(): SizeConstraintContext {
		let _localctx: SizeConstraintContext = new SizeConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, ASN_3gppParser.RULE_sizeConstraint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 551;
			this.match(ASN_3gppParser.SIZE_LITERAL);
			this.state = 552;
			this.constraint();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterizedAssignment(): ParameterizedAssignmentContext {
		let _localctx: ParameterizedAssignmentContext = new ParameterizedAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, ASN_3gppParser.RULE_parameterizedAssignment);
		try {
			this.state = 568;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.L_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 554;
				this.parameterList();
				{
				this.state = 555;
				this.match(ASN_3gppParser.ASSIGN_OP);
				this.state = 559;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
				case 1:
					{
					this.state = 556;
					this.asnType();
					}
					break;

				case 2:
					{
					this.state = 557;
					this.value();
					}
					break;

				case 3:
					{
					this.state = 558;
					this.valueSet();
					}
					break;
				}
				}
				}
				break;
			case ASN_3gppParser.TYPE_IDENTIFIER_LITERAL:
			case ASN_3gppParser.ABSTRACT_SYNTAX_LITERAL:
			case ASN_3gppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 561;
				this.definedObjectClass();
				this.state = 562;
				this.match(ASN_3gppParser.ASSIGN_OP);
				this.state = 566;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
				case 1:
					{
					this.state = 563;
					this.object();
					}
					break;

				case 2:
					{
					this.state = 564;
					this.objectClass();
					}
					break;

				case 3:
					{
					this.state = 565;
					this.objectSet();
					}
					break;
				}
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, ASN_3gppParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 570;
			this.match(ASN_3gppParser.L_BRACE);
			this.state = 571;
			this.parameter();
			this.state = 576;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASN_3gppParser.COMMA) {
				{
				{
				this.state = 572;
				this.match(ASN_3gppParser.COMMA);
				this.state = 573;
				this.parameter();
				}
				}
				this.state = 578;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 579;
			this.match(ASN_3gppParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, ASN_3gppParser.RULE_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 584;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				{
				this.state = 581;
				this.paramGovernor();
				this.state = 582;
				this.match(ASN_3gppParser.COLON);
				}
				break;
			}
			this.state = 586;
			this.match(ASN_3gppParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public paramGovernor(): ParamGovernorContext {
		let _localctx: ParamGovernorContext = new ParamGovernorContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, ASN_3gppParser.RULE_paramGovernor);
		try {
			this.state = 590;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 588;
				this.governor();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 589;
				this.match(ASN_3gppParser.IDENTIFIER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public governor(): GovernorContext {
		let _localctx: GovernorContext = new GovernorContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, ASN_3gppParser.RULE_governor);
		try {
			this.state = 594;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 592;
				this.asnType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 593;
				this.definedObjectClass();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectClassAssignment(): ObjectClassAssignmentContext {
		let _localctx: ObjectClassAssignmentContext = new ObjectClassAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, ASN_3gppParser.RULE_objectClassAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 596;
			this.match(ASN_3gppParser.ASSIGN_OP);
			this.state = 597;
			this.objectClass();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectClass(): ObjectClassContext {
		let _localctx: ObjectClassContext = new ObjectClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, ASN_3gppParser.RULE_objectClass);
		try {
			this.state = 601;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.TYPE_IDENTIFIER_LITERAL:
			case ASN_3gppParser.ABSTRACT_SYNTAX_LITERAL:
			case ASN_3gppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 599;
				this.definedObjectClass();
				}
				break;
			case ASN_3gppParser.CLASS_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 600;
				this.objectClassDefn();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public definedObjectClass(): DefinedObjectClassContext {
		let _localctx: DefinedObjectClassContext = new DefinedObjectClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, ASN_3gppParser.RULE_definedObjectClass);
		try {
			this.state = 610;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 605;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
				case 1:
					{
					this.state = 603;
					this.match(ASN_3gppParser.IDENTIFIER);
					this.state = 604;
					this.match(ASN_3gppParser.DOT);
					}
					break;
				}
				this.state = 607;
				this.match(ASN_3gppParser.IDENTIFIER);
				}
				break;
			case ASN_3gppParser.TYPE_IDENTIFIER_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 608;
				this.match(ASN_3gppParser.TYPE_IDENTIFIER_LITERAL);
				}
				break;
			case ASN_3gppParser.ABSTRACT_SYNTAX_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 609;
				this.match(ASN_3gppParser.ABSTRACT_SYNTAX_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public usefulObjectClassReference(): UsefulObjectClassReferenceContext {
		let _localctx: UsefulObjectClassReferenceContext = new UsefulObjectClassReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, ASN_3gppParser.RULE_usefulObjectClassReference);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 612;
			_la = this._input.LA(1);
			if (!(_la === ASN_3gppParser.TYPE_IDENTIFIER_LITERAL || _la === ASN_3gppParser.ABSTRACT_SYNTAX_LITERAL)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public externalObjectClassReference(): ExternalObjectClassReferenceContext {
		let _localctx: ExternalObjectClassReferenceContext = new ExternalObjectClassReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, ASN_3gppParser.RULE_externalObjectClassReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 614;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 615;
			this.match(ASN_3gppParser.DOT);
			this.state = 616;
			this.match(ASN_3gppParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectClassDefn(): ObjectClassDefnContext {
		let _localctx: ObjectClassDefnContext = new ObjectClassDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, ASN_3gppParser.RULE_objectClassDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 618;
			this.match(ASN_3gppParser.CLASS_LITERAL);
			this.state = 619;
			this.match(ASN_3gppParser.L_BRACE);
			this.state = 620;
			this.fieldSpec();
			this.state = 625;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASN_3gppParser.COMMA) {
				{
				{
				this.state = 621;
				this.match(ASN_3gppParser.COMMA);
				this.state = 622;
				this.fieldSpec();
				}
				}
				this.state = 627;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 628;
			this.match(ASN_3gppParser.R_BRACE);
			this.state = 630;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.WITH_LITERAL) {
				{
				this.state = 629;
				this.withSyntaxSpec();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public withSyntaxSpec(): WithSyntaxSpecContext {
		let _localctx: WithSyntaxSpecContext = new WithSyntaxSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, ASN_3gppParser.RULE_withSyntaxSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 632;
			this.match(ASN_3gppParser.WITH_LITERAL);
			this.state = 633;
			this.match(ASN_3gppParser.SYNTAX_LITERAL);
			this.state = 634;
			this.syntaxList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public syntaxList(): SyntaxListContext {
		let _localctx: SyntaxListContext = new SyntaxListContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, ASN_3gppParser.RULE_syntaxList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 636;
			this.match(ASN_3gppParser.L_BRACE);
			this.state = 638;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 637;
				this.tokenOrGroupSpec();
				}
				}
				this.state = 640;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ASN_3gppParser.AMPERSAND || _la === ASN_3gppParser.COMMA || _la === ASN_3gppParser.L_BRACKET || _la === ASN_3gppParser.IDENTIFIER);
			this.state = 642;
			this.match(ASN_3gppParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tokenOrGroupSpec(): TokenOrGroupSpecContext {
		let _localctx: TokenOrGroupSpecContext = new TokenOrGroupSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, ASN_3gppParser.RULE_tokenOrGroupSpec);
		try {
			this.state = 646;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.AMPERSAND:
			case ASN_3gppParser.COMMA:
			case ASN_3gppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 644;
				this.requiredToken();
				}
				break;
			case ASN_3gppParser.L_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 645;
				this.optionalGroup();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionalGroup(): OptionalGroupContext {
		let _localctx: OptionalGroupContext = new OptionalGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, ASN_3gppParser.RULE_optionalGroup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 648;
			this.match(ASN_3gppParser.L_BRACKET);
			this.state = 650;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 649;
				this.tokenOrGroupSpec();
				}
				}
				this.state = 652;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ASN_3gppParser.AMPERSAND || _la === ASN_3gppParser.COMMA || _la === ASN_3gppParser.L_BRACKET || _la === ASN_3gppParser.IDENTIFIER);
			this.state = 654;
			this.match(ASN_3gppParser.R_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public requiredToken(): RequiredTokenContext {
		let _localctx: RequiredTokenContext = new RequiredTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, ASN_3gppParser.RULE_requiredToken);
		try {
			this.state = 658;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.COMMA:
			case ASN_3gppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 656;
				this.literal();
				}
				break;
			case ASN_3gppParser.AMPERSAND:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 657;
				this.primitiveFieldName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, ASN_3gppParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 660;
			_la = this._input.LA(1);
			if (!(_la === ASN_3gppParser.COMMA || _la === ASN_3gppParser.IDENTIFIER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primitiveFieldName(): PrimitiveFieldNameContext {
		let _localctx: PrimitiveFieldNameContext = new PrimitiveFieldNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, ASN_3gppParser.RULE_primitiveFieldName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 662;
			this.match(ASN_3gppParser.AMPERSAND);
			this.state = 663;
			this.match(ASN_3gppParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldSpec(): FieldSpecContext {
		let _localctx: FieldSpecContext = new FieldSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, ASN_3gppParser.RULE_fieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 665;
			this.match(ASN_3gppParser.AMPERSAND);
			this.state = 666;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 700;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				{
				this.state = 668;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
					{
					this.state = 667;
					this.typeOptionalitySpec();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 670;
				this.asnType();
				this.state = 680;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
				case 1:
					{
					this.state = 672;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
						{
						this.state = 671;
						this.valueSetOptionalitySpec();
						}
					}

					}
					break;

				case 2:
					{
					this.state = 675;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ASN_3gppParser.UNIQUE_LITERAL) {
						{
						this.state = 674;
						this.match(ASN_3gppParser.UNIQUE_LITERAL);
						}
					}

					this.state = 678;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
						{
						this.state = 677;
						this.valueOptionalitySpec();
						}
					}

					}
					break;
				}
				}
				break;

			case 3:
				{
				this.state = 682;
				this.fieldName();
				this.state = 689;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ASN_3gppParser.OPTIONAL_LITERAL:
					{
					this.state = 683;
					this.match(ASN_3gppParser.OPTIONAL_LITERAL);
					}
					break;
				case ASN_3gppParser.DEFAULT_LITERAL:
					{
					{
					this.state = 684;
					this.match(ASN_3gppParser.DEFAULT_LITERAL);
					this.state = 687;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
					case 1:
						{
						this.state = 685;
						this.valueSet();
						}
						break;

					case 2:
						{
						this.state = 686;
						this.value();
						}
						break;
					}
					}
					}
					break;
				case ASN_3gppParser.R_BRACE:
				case ASN_3gppParser.COMMA:
					break;
				default:
					break;
				}
				}
				break;

			case 4:
				{
				this.state = 691;
				this.definedObjectClass();
				this.state = 698;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ASN_3gppParser.OPTIONAL_LITERAL:
					{
					this.state = 692;
					this.match(ASN_3gppParser.OPTIONAL_LITERAL);
					}
					break;
				case ASN_3gppParser.DEFAULT_LITERAL:
					{
					{
					this.state = 693;
					this.match(ASN_3gppParser.DEFAULT_LITERAL);
					this.state = 696;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case ASN_3gppParser.L_BRACE:
						{
						this.state = 694;
						this.objectSet();
						}
						break;
					case ASN_3gppParser.IDENTIFIER:
						{
						this.state = 695;
						this.object();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
					break;
				case ASN_3gppParser.R_BRACE:
				case ASN_3gppParser.COMMA:
					break;
				default:
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeFieldSpec(): TypeFieldSpecContext {
		let _localctx: TypeFieldSpecContext = new TypeFieldSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, ASN_3gppParser.RULE_typeFieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 702;
			this.match(ASN_3gppParser.AMPERSAND);
			this.state = 703;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 705;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
				{
				this.state = 704;
				this.typeOptionalitySpec();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeOptionalitySpec(): TypeOptionalitySpecContext {
		let _localctx: TypeOptionalitySpecContext = new TypeOptionalitySpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, ASN_3gppParser.RULE_typeOptionalitySpec);
		try {
			this.state = 710;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.OPTIONAL_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 707;
				this.match(ASN_3gppParser.OPTIONAL_LITERAL);
				}
				break;
			case ASN_3gppParser.DEFAULT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 708;
				this.match(ASN_3gppParser.DEFAULT_LITERAL);
				this.state = 709;
				this.asnType();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fixedTypeValueFieldSpec(): FixedTypeValueFieldSpecContext {
		let _localctx: FixedTypeValueFieldSpecContext = new FixedTypeValueFieldSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, ASN_3gppParser.RULE_fixedTypeValueFieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 712;
			this.match(ASN_3gppParser.AMPERSAND);
			this.state = 713;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 714;
			this.asnType();
			this.state = 716;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.UNIQUE_LITERAL) {
				{
				this.state = 715;
				this.match(ASN_3gppParser.UNIQUE_LITERAL);
				}
			}

			this.state = 719;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
				{
				this.state = 718;
				this.valueOptionalitySpec();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valueOptionalitySpec(): ValueOptionalitySpecContext {
		let _localctx: ValueOptionalitySpecContext = new ValueOptionalitySpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, ASN_3gppParser.RULE_valueOptionalitySpec);
		try {
			this.state = 724;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.OPTIONAL_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 721;
				this.match(ASN_3gppParser.OPTIONAL_LITERAL);
				}
				break;
			case ASN_3gppParser.DEFAULT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 722;
				this.match(ASN_3gppParser.DEFAULT_LITERAL);
				this.state = 723;
				this.value();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableTypeValueFieldSpec(): VariableTypeValueFieldSpecContext {
		let _localctx: VariableTypeValueFieldSpecContext = new VariableTypeValueFieldSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, ASN_3gppParser.RULE_variableTypeValueFieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 726;
			this.match(ASN_3gppParser.AMPERSAND);
			this.state = 727;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 728;
			this.fieldName();
			this.state = 730;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
				{
				this.state = 729;
				this.valueOptionalitySpec();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fixedTypeValueSetFieldSpec(): FixedTypeValueSetFieldSpecContext {
		let _localctx: FixedTypeValueSetFieldSpecContext = new FixedTypeValueSetFieldSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, ASN_3gppParser.RULE_fixedTypeValueSetFieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 732;
			this.match(ASN_3gppParser.AMPERSAND);
			this.state = 733;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 734;
			this.asnType();
			this.state = 736;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
				{
				this.state = 735;
				this.valueSetOptionalitySpec();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valueSetOptionalitySpec(): ValueSetOptionalitySpecContext {
		let _localctx: ValueSetOptionalitySpecContext = new ValueSetOptionalitySpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, ASN_3gppParser.RULE_valueSetOptionalitySpec);
		try {
			this.state = 741;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.OPTIONAL_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 738;
				this.match(ASN_3gppParser.OPTIONAL_LITERAL);
				}
				break;
			case ASN_3gppParser.DEFAULT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 739;
				this.match(ASN_3gppParser.DEFAULT_LITERAL);
				this.state = 740;
				this.valueSet();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public object(): ObjectContext {
		let _localctx: ObjectContext = new ObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, ASN_3gppParser.RULE_object);
		try {
			this.state = 745;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 743;
				this.definedObject();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 744;
				this.parameterizedObject();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterizedObject(): ParameterizedObjectContext {
		let _localctx: ParameterizedObjectContext = new ParameterizedObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, ASN_3gppParser.RULE_parameterizedObject);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 747;
			this.definedObject();
			this.state = 748;
			this.actualParameterList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public definedObject(): DefinedObjectContext {
		let _localctx: DefinedObjectContext = new DefinedObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, ASN_3gppParser.RULE_definedObject);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 750;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 752;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.DOT) {
				{
				this.state = 751;
				this.match(ASN_3gppParser.DOT);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectSet(): ObjectSetContext {
		let _localctx: ObjectSetContext = new ObjectSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, ASN_3gppParser.RULE_objectSet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 754;
			this.match(ASN_3gppParser.L_BRACE);
			this.state = 755;
			this.objectSetSpec();
			this.state = 756;
			this.match(ASN_3gppParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectSetSpec(): ObjectSetSpecContext {
		let _localctx: ObjectSetSpecContext = new ObjectSetSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, ASN_3gppParser.RULE_objectSetSpec);
		let _la: number;
		try {
			this.state = 772;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.TRUE_LITERAL:
			case ASN_3gppParser.FALSE_LITERAL:
			case ASN_3gppParser.TRUE_SMALL_LITERAL:
			case ASN_3gppParser.FALSE_SMALL_LITERAL:
			case ASN_3gppParser.L_BRACE:
			case ASN_3gppParser.MINUS:
			case ASN_3gppParser.ALL_LITERAL:
			case ASN_3gppParser.MIN_LITERAL:
			case ASN_3gppParser.SIZE_LITERAL:
			case ASN_3gppParser.PATTERN_LITERAL:
			case ASN_3gppParser.NUMBER:
			case ASN_3gppParser.BSTRING:
			case ASN_3gppParser.CSTRING:
			case ASN_3gppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 758;
				this.rootElementSetSpec();
				this.state = 765;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.COMMA) {
					{
					this.state = 759;
					this.match(ASN_3gppParser.COMMA);
					this.state = 760;
					this.match(ASN_3gppParser.ELLIPSIS);
					this.state = 763;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ASN_3gppParser.COMMA) {
						{
						this.state = 761;
						this.match(ASN_3gppParser.COMMA);
						this.state = 762;
						this.additionalElementSetSpec();
						}
					}

					}
				}

				}
				break;
			case ASN_3gppParser.ELLIPSIS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 767;
				this.match(ASN_3gppParser.ELLIPSIS);
				this.state = 770;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.COMMA) {
					{
					this.state = 768;
					this.match(ASN_3gppParser.COMMA);
					this.state = 769;
					this.additionalElementSetSpec();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldName(): FieldNameContext {
		let _localctx: FieldNameContext = new FieldNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, ASN_3gppParser.RULE_fieldName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 774;
			this.match(ASN_3gppParser.AMPERSAND);
			this.state = 775;
			this.match(ASN_3gppParser.IDENTIFIER);
			}
			this.state = 782;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASN_3gppParser.DOT) {
				{
				{
				this.state = 777;
				this.match(ASN_3gppParser.DOT);
				this.state = 778;
				this.match(ASN_3gppParser.AMPERSAND);
				this.state = 779;
				this.match(ASN_3gppParser.IDENTIFIER);
				}
				}
				this.state = 784;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valueSet(): ValueSetContext {
		let _localctx: ValueSetContext = new ValueSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, ASN_3gppParser.RULE_valueSet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 785;
			this.match(ASN_3gppParser.L_BRACE);
			this.state = 786;
			this.elementSetSpecs();
			this.state = 787;
			this.match(ASN_3gppParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementSetSpecs(): ElementSetSpecsContext {
		let _localctx: ElementSetSpecsContext = new ElementSetSpecsContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, ASN_3gppParser.RULE_elementSetSpecs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 789;
			this.rootElementSetSpec();
			this.state = 796;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.COMMA) {
				{
				this.state = 790;
				this.match(ASN_3gppParser.COMMA);
				this.state = 791;
				this.match(ASN_3gppParser.ELLIPSIS);
				this.state = 794;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.COMMA) {
					{
					this.state = 792;
					this.match(ASN_3gppParser.COMMA);
					this.state = 793;
					this.additionalElementSetSpec();
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rootElementSetSpec(): RootElementSetSpecContext {
		let _localctx: RootElementSetSpecContext = new RootElementSetSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, ASN_3gppParser.RULE_rootElementSetSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 798;
			this.elementSetSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public additionalElementSetSpec(): AdditionalElementSetSpecContext {
		let _localctx: AdditionalElementSetSpecContext = new AdditionalElementSetSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, ASN_3gppParser.RULE_additionalElementSetSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 800;
			this.elementSetSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementSetSpec(): ElementSetSpecContext {
		let _localctx: ElementSetSpecContext = new ElementSetSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, ASN_3gppParser.RULE_elementSetSpec);
		try {
			this.state = 805;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.TRUE_LITERAL:
			case ASN_3gppParser.FALSE_LITERAL:
			case ASN_3gppParser.TRUE_SMALL_LITERAL:
			case ASN_3gppParser.FALSE_SMALL_LITERAL:
			case ASN_3gppParser.L_BRACE:
			case ASN_3gppParser.MINUS:
			case ASN_3gppParser.MIN_LITERAL:
			case ASN_3gppParser.SIZE_LITERAL:
			case ASN_3gppParser.PATTERN_LITERAL:
			case ASN_3gppParser.NUMBER:
			case ASN_3gppParser.BSTRING:
			case ASN_3gppParser.CSTRING:
			case ASN_3gppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 802;
				this.unions();
				}
				break;
			case ASN_3gppParser.ALL_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 803;
				this.match(ASN_3gppParser.ALL_LITERAL);
				this.state = 804;
				this.exclusions();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unions(): UnionsContext {
		let _localctx: UnionsContext = new UnionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, ASN_3gppParser.RULE_unions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 807;
			this.intersections();
			}
			this.state = 813;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASN_3gppParser.PIPE || _la === ASN_3gppParser.UNION_LITERAL) {
				{
				{
				this.state = 808;
				this.unionMark();
				this.state = 809;
				this.intersections();
				}
				}
				this.state = 815;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exclusions(): ExclusionsContext {
		let _localctx: ExclusionsContext = new ExclusionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, ASN_3gppParser.RULE_exclusions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 816;
			this.match(ASN_3gppParser.EXCEPT_LITERAL);
			this.state = 817;
			this.elements();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intersections(): IntersectionsContext {
		let _localctx: IntersectionsContext = new IntersectionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, ASN_3gppParser.RULE_intersections);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 819;
			this.intersectionElements();
			}
			this.state = 825;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASN_3gppParser.POWER || _la === ASN_3gppParser.INTERSECTION_LITERAL) {
				{
				{
				this.state = 820;
				this.intersectionMark();
				this.state = 821;
				this.intersectionElements();
				}
				}
				this.state = 827;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unionMark(): UnionMarkContext {
		let _localctx: UnionMarkContext = new UnionMarkContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, ASN_3gppParser.RULE_unionMark);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 828;
			_la = this._input.LA(1);
			if (!(_la === ASN_3gppParser.PIPE || _la === ASN_3gppParser.UNION_LITERAL)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intersectionMark(): IntersectionMarkContext {
		let _localctx: IntersectionMarkContext = new IntersectionMarkContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, ASN_3gppParser.RULE_intersectionMark);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 830;
			_la = this._input.LA(1);
			if (!(_la === ASN_3gppParser.POWER || _la === ASN_3gppParser.INTERSECTION_LITERAL)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elements(): ElementsContext {
		let _localctx: ElementsContext = new ElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, ASN_3gppParser.RULE_elements);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 832;
			this.subtypeElements();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectSetElements(): ObjectSetElementsContext {
		let _localctx: ObjectSetElementsContext = new ObjectSetElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, ASN_3gppParser.RULE_objectSetElements);
		try {
			this.state = 836;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 834;
				this.object();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 835;
				this.definedObject();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intersectionElements(): IntersectionElementsContext {
		let _localctx: IntersectionElementsContext = new IntersectionElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, ASN_3gppParser.RULE_intersectionElements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 838;
			this.elements();
			this.state = 840;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.EXCEPT_LITERAL) {
				{
				this.state = 839;
				this.exclusions();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subtypeElements(): SubtypeElementsContext {
		let _localctx: SubtypeElementsContext = new SubtypeElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, ASN_3gppParser.RULE_subtypeElements);
		let _la: number;
		try {
			this.state = 861;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 844;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ASN_3gppParser.TRUE_LITERAL:
				case ASN_3gppParser.FALSE_LITERAL:
				case ASN_3gppParser.TRUE_SMALL_LITERAL:
				case ASN_3gppParser.FALSE_SMALL_LITERAL:
				case ASN_3gppParser.L_BRACE:
				case ASN_3gppParser.MINUS:
				case ASN_3gppParser.NUMBER:
				case ASN_3gppParser.BSTRING:
				case ASN_3gppParser.CSTRING:
				case ASN_3gppParser.IDENTIFIER:
					{
					this.state = 842;
					this.value();
					}
					break;
				case ASN_3gppParser.MIN_LITERAL:
					{
					this.state = 843;
					this.match(ASN_3gppParser.MIN_LITERAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 847;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.LESS_THAN) {
					{
					this.state = 846;
					this.match(ASN_3gppParser.LESS_THAN);
					}
				}

				this.state = 849;
				this.match(ASN_3gppParser.DOUBLE_DOT);
				this.state = 851;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.LESS_THAN) {
					{
					this.state = 850;
					this.match(ASN_3gppParser.LESS_THAN);
					}
				}

				this.state = 855;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ASN_3gppParser.TRUE_LITERAL:
				case ASN_3gppParser.FALSE_LITERAL:
				case ASN_3gppParser.TRUE_SMALL_LITERAL:
				case ASN_3gppParser.FALSE_SMALL_LITERAL:
				case ASN_3gppParser.L_BRACE:
				case ASN_3gppParser.MINUS:
				case ASN_3gppParser.NUMBER:
				case ASN_3gppParser.BSTRING:
				case ASN_3gppParser.CSTRING:
				case ASN_3gppParser.IDENTIFIER:
					{
					this.state = 853;
					this.value();
					}
					break;
				case ASN_3gppParser.MAX_LITERAL:
					{
					this.state = 854;
					this.match(ASN_3gppParser.MAX_LITERAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 857;
				this.sizeConstraint();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 858;
				this.match(ASN_3gppParser.PATTERN_LITERAL);
				this.state = 859;
				this.value();
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 860;
				this.value();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableTypeValueSetFieldSpec(): VariableTypeValueSetFieldSpecContext {
		let _localctx: VariableTypeValueSetFieldSpecContext = new VariableTypeValueSetFieldSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, ASN_3gppParser.RULE_variableTypeValueSetFieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 863;
			this.match(ASN_3gppParser.AMPERSAND);
			this.state = 864;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 865;
			this.fieldName();
			this.state = 867;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
				{
				this.state = 866;
				this.valueSetOptionalitySpec();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectFieldSpec(): ObjectFieldSpecContext {
		let _localctx: ObjectFieldSpecContext = new ObjectFieldSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, ASN_3gppParser.RULE_objectFieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 869;
			this.match(ASN_3gppParser.AMPERSAND);
			this.state = 870;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 871;
			this.definedObjectClass();
			this.state = 873;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
				{
				this.state = 872;
				this.objectOptionalitySpec();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectOptionalitySpec(): ObjectOptionalitySpecContext {
		let _localctx: ObjectOptionalitySpecContext = new ObjectOptionalitySpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, ASN_3gppParser.RULE_objectOptionalitySpec);
		try {
			this.state = 878;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.OPTIONAL_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 875;
				this.match(ASN_3gppParser.OPTIONAL_LITERAL);
				}
				break;
			case ASN_3gppParser.DEFAULT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 876;
				this.match(ASN_3gppParser.DEFAULT_LITERAL);
				this.state = 877;
				this.object();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectSetFieldSpec(): ObjectSetFieldSpecContext {
		let _localctx: ObjectSetFieldSpecContext = new ObjectSetFieldSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, ASN_3gppParser.RULE_objectSetFieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 880;
			this.match(ASN_3gppParser.AMPERSAND);
			this.state = 881;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 882;
			this.definedObjectClass();
			this.state = 884;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
				{
				this.state = 883;
				this.objectSetOptionalitySpec();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectSetOptionalitySpec(): ObjectSetOptionalitySpecContext {
		let _localctx: ObjectSetOptionalitySpecContext = new ObjectSetOptionalitySpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, ASN_3gppParser.RULE_objectSetOptionalitySpec);
		try {
			this.state = 889;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.OPTIONAL_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 886;
				this.match(ASN_3gppParser.OPTIONAL_LITERAL);
				}
				break;
			case ASN_3gppParser.DEFAULT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 887;
				this.match(ASN_3gppParser.DEFAULT_LITERAL);
				this.state = 888;
				this.objectSet();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeAssignment(): TypeAssignmentContext {
		let _localctx: TypeAssignmentContext = new TypeAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, ASN_3gppParser.RULE_typeAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 891;
			this.match(ASN_3gppParser.ASSIGN_OP);
			this.state = 892;
			this.asnType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valueAssignment(): ValueAssignmentContext {
		let _localctx: ValueAssignmentContext = new ValueAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, ASN_3gppParser.RULE_valueAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 894;
			this.asnType();
			this.state = 895;
			this.match(ASN_3gppParser.ASSIGN_OP);
			this.state = 896;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public asnType(): AsnTypeContext {
		let _localctx: AsnTypeContext = new AsnTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, ASN_3gppParser.RULE_asnType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 900;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				{
				this.state = 898;
				this.builtinType();
				}
				break;

			case 2:
				{
				this.state = 899;
				this.referencedType();
				}
				break;
			}
			this.state = 905;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 902;
					this.constraint();
					}
					}
				}
				this.state = 907;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public builtinType(): BuiltinTypeContext {
		let _localctx: BuiltinTypeContext = new BuiltinTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, ASN_3gppParser.RULE_builtinType);
		try {
			this.state = 922;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 908;
				this.octetStringType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 909;
				this.bitStringType();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 910;
				this.characterStringType();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 911;
				this.choiceType();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 912;
				this.enumeratedType();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 913;
				this.integerType();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 914;
				this.sequenceType();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 915;
				this.sequenceOfType();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 916;
				this.setType();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 917;
				this.setOfType();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 918;
				this.objectidentifiertype();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 919;
				this.objectClassFieldType();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 920;
				this.match(ASN_3gppParser.BOOLEAN_LITERAL);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 921;
				this.match(ASN_3gppParser.NULL_LITERAL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public characterStringType(): CharacterStringTypeContext {
		let _localctx: CharacterStringTypeContext = new CharacterStringTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, ASN_3gppParser.RULE_characterStringType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 924;
			this.restrictedCharacterStringType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public restrictedCharacterStringType(): RestrictedCharacterStringTypeContext {
		let _localctx: RestrictedCharacterStringTypeContext = new RestrictedCharacterStringTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, ASN_3gppParser.RULE_restrictedCharacterStringType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 926;
			_la = this._input.LA(1);
			if (!(((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (ASN_3gppParser.BMP_STRING_LITERAL - 26)) | (1 << (ASN_3gppParser.GRAPHIC_STRING_LITERAL - 26)) | (1 << (ASN_3gppParser.IA5_STRING_LITERAL - 26)) | (1 << (ASN_3gppParser.ISO646_STRING_LITERAL - 26)) | (1 << (ASN_3gppParser.NUMERIC_STRING_LITERAL - 26)) | (1 << (ASN_3gppParser.PRINTABLE_STRING_LITERAL - 26)) | (1 << (ASN_3gppParser.TELETEXT_STRING_LITERAL - 26)) | (1 << (ASN_3gppParser.T61_STRING_LITERAL - 26)) | (1 << (ASN_3gppParser.UNIVERSAL_STRING_LITERAL - 26)) | (1 << (ASN_3gppParser.UTF8_STRING_LITERAL - 26)) | (1 << (ASN_3gppParser.VIDEOTEX_STRING_LITERAL - 26)) | (1 << (ASN_3gppParser.VISIBLE_STRING_LITERAL - 26)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectClassFieldType(): ObjectClassFieldTypeContext {
		let _localctx: ObjectClassFieldTypeContext = new ObjectClassFieldTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, ASN_3gppParser.RULE_objectClassFieldType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 928;
			this.definedObjectClass();
			this.state = 929;
			this.match(ASN_3gppParser.DOT);
			this.state = 930;
			this.fieldName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setType(): SetTypeContext {
		let _localctx: SetTypeContext = new SetTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, ASN_3gppParser.RULE_setType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 932;
			this.match(ASN_3gppParser.SET_LITERAL);
			this.state = 933;
			this.match(ASN_3gppParser.L_BRACE);
			this.state = 938;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				{
				this.state = 934;
				this.extensionAndException();
				this.state = 935;
				this.optionalExtensionMarker();
				}
				break;

			case 2:
				{
				this.state = 937;
				this.componentTypeLists();
				}
				break;
			}
			this.state = 940;
			this.match(ASN_3gppParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setOfType(): SetOfTypeContext {
		let _localctx: SetOfTypeContext = new SetOfTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, ASN_3gppParser.RULE_setOfType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 942;
			this.match(ASN_3gppParser.SET_LITERAL);
			this.state = 945;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.L_PARAN:
				{
				this.state = 943;
				this.constraint();
				}
				break;
			case ASN_3gppParser.SIZE_LITERAL:
				{
				this.state = 944;
				this.sizeConstraint();
				}
				break;
			case ASN_3gppParser.OF_LITERAL:
				break;
			default:
				break;
			}
			this.state = 947;
			this.match(ASN_3gppParser.OF_LITERAL);
			this.state = 950;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				{
				this.state = 948;
				this.asnType();
				}
				break;

			case 2:
				{
				this.state = 949;
				this.namedType();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public referencedType(): ReferencedTypeContext {
		let _localctx: ReferencedTypeContext = new ReferencedTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, ASN_3gppParser.RULE_referencedType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 952;
			this.definedType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public definedType(): DefinedTypeContext {
		let _localctx: DefinedTypeContext = new DefinedTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, ASN_3gppParser.RULE_definedType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 954;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 957;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.DOT) {
				{
				this.state = 955;
				this.match(ASN_3gppParser.DOT);
				this.state = 956;
				this.match(ASN_3gppParser.IDENTIFIER);
				}
			}

			this.state = 960;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
			case 1:
				{
				this.state = 959;
				this.actualParameterList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constraint(): ConstraintContext {
		let _localctx: ConstraintContext = new ConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, ASN_3gppParser.RULE_constraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 962;
			this.match(ASN_3gppParser.L_PARAN);
			this.state = 963;
			this.constraintSpec();
			this.state = 965;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.EXCLAM) {
				{
				this.state = 964;
				this.exceptionSpec();
				}
			}

			this.state = 967;
			this.match(ASN_3gppParser.R_PARAN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constraintSpec(): ConstraintSpecContext {
		let _localctx: ConstraintSpecContext = new ConstraintSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, ASN_3gppParser.RULE_constraintSpec);
		try {
			this.state = 971;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 969;
				this.generalConstraint();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 970;
				this.subtypeConstraint();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public userDefinedConstraint(): UserDefinedConstraintContext {
		let _localctx: UserDefinedConstraintContext = new UserDefinedConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, ASN_3gppParser.RULE_userDefinedConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 973;
			this.match(ASN_3gppParser.CONSTRAINED_LITERAL);
			this.state = 974;
			this.match(ASN_3gppParser.BY_LITERAL);
			this.state = 975;
			this.match(ASN_3gppParser.L_BRACE);
			this.state = 976;
			this.userDefinedConstraintParameter();
			this.state = 981;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASN_3gppParser.COMMA) {
				{
				{
				this.state = 977;
				this.match(ASN_3gppParser.COMMA);
				this.state = 978;
				this.userDefinedConstraintParameter();
				}
				}
				this.state = 983;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 984;
			this.match(ASN_3gppParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public generalConstraint(): GeneralConstraintContext {
		let _localctx: GeneralConstraintContext = new GeneralConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, ASN_3gppParser.RULE_generalConstraint);
		try {
			this.state = 989;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.CONSTRAINED_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 986;
				this.userDefinedConstraint();
				}
				break;
			case ASN_3gppParser.L_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 987;
				this.tableConstraint();
				}
				break;
			case ASN_3gppParser.CONTAINING_LITERAL:
			case ASN_3gppParser.WITH_LITERAL:
			case ASN_3gppParser.ENCODED_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 988;
				this.contentsConstraint();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public userDefinedConstraintParameter(): UserDefinedConstraintParameterContext {
		let _localctx: UserDefinedConstraintParameterContext = new UserDefinedConstraintParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, ASN_3gppParser.RULE_userDefinedConstraintParameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 991;
			this.governor();
			this.state = 997;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				{
				this.state = 992;
				this.match(ASN_3gppParser.COLON);
				this.state = 993;
				this.value();
				}
				break;

			case 2:
				{
				this.state = 994;
				this.valueSet();
				}
				break;

			case 3:
				{
				this.state = 995;
				this.object();
				}
				break;

			case 4:
				{
				this.state = 996;
				this.objectSet();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableConstraint(): TableConstraintContext {
		let _localctx: TableConstraintContext = new TableConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, ASN_3gppParser.RULE_tableConstraint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 999;
			this.componentRelationConstraint();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleTableConstraint(): SimpleTableConstraintContext {
		let _localctx: SimpleTableConstraintContext = new SimpleTableConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, ASN_3gppParser.RULE_simpleTableConstraint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1001;
			this.objectSet();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contentsConstraint(): ContentsConstraintContext {
		let _localctx: ContentsConstraintContext = new ContentsConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, ASN_3gppParser.RULE_contentsConstraint);
		try {
			this.state = 1020;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1003;
				this.match(ASN_3gppParser.CONTAINING_LITERAL);
				this.state = 1004;
				this.asnType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1005;
				this.match(ASN_3gppParser.ENCODED_LITERAL);
				this.state = 1006;
				this.match(ASN_3gppParser.BY_LITERAL);
				this.state = 1007;
				this.value();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1008;
				this.match(ASN_3gppParser.CONTAINING_LITERAL);
				this.state = 1009;
				this.asnType();
				this.state = 1010;
				this.match(ASN_3gppParser.ENCODED_LITERAL);
				this.state = 1011;
				this.match(ASN_3gppParser.BY_LITERAL);
				this.state = 1012;
				this.value();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1014;
				this.match(ASN_3gppParser.WITH_LITERAL);
				this.state = 1015;
				this.match(ASN_3gppParser.COMPONENTS_LITERAL);
				this.state = 1016;
				this.match(ASN_3gppParser.L_BRACE);
				this.state = 1017;
				this.componentPresenceLists();
				this.state = 1018;
				this.match(ASN_3gppParser.R_BRACE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentPresenceLists(): ComponentPresenceListsContext {
		let _localctx: ComponentPresenceListsContext = new ComponentPresenceListsContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, ASN_3gppParser.RULE_componentPresenceLists);
		let _la: number;
		try {
			this.state = 1038;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.R_BRACE:
			case ASN_3gppParser.COMMA:
			case ASN_3gppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1023;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.IDENTIFIER) {
					{
					this.state = 1022;
					this.componentPresenceList();
					}
				}

				this.state = 1031;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.COMMA) {
					{
					this.state = 1025;
					this.match(ASN_3gppParser.COMMA);
					this.state = 1026;
					this.match(ASN_3gppParser.ELLIPSIS);
					this.state = 1029;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ASN_3gppParser.COMMA) {
						{
						this.state = 1027;
						this.match(ASN_3gppParser.COMMA);
						this.state = 1028;
						this.componentPresenceList();
						}
					}

					}
				}

				}
				break;
			case ASN_3gppParser.ELLIPSIS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1033;
				this.match(ASN_3gppParser.ELLIPSIS);
				this.state = 1036;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.COMMA) {
					{
					this.state = 1034;
					this.match(ASN_3gppParser.COMMA);
					this.state = 1035;
					this.componentPresenceList();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentPresenceList(): ComponentPresenceListContext {
		let _localctx: ComponentPresenceListContext = new ComponentPresenceListContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, ASN_3gppParser.RULE_componentPresenceList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1040;
			this.componentPresence();
			}
			this.state = 1045;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1041;
					this.match(ASN_3gppParser.COMMA);
					this.state = 1042;
					this.componentPresence();
					}
					}
				}
				this.state = 1047;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentPresence(): ComponentPresenceContext {
		let _localctx: ComponentPresenceContext = new ComponentPresenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, ASN_3gppParser.RULE_componentPresence);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1048;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 1049;
			_la = this._input.LA(1);
			if (!(_la === ASN_3gppParser.PRESENT_LITERAL || _la === ASN_3gppParser.ABSENT_LITERAL)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subtypeConstraint(): SubtypeConstraintContext {
		let _localctx: SubtypeConstraintContext = new SubtypeConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, ASN_3gppParser.RULE_subtypeConstraint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1051;
			this.elementSetSpecs();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, ASN_3gppParser.RULE_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1053;
			this.builtinValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public builtinValue(): BuiltinValueContext {
		let _localctx: BuiltinValueContext = new BuiltinValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, ASN_3gppParser.RULE_builtinValue);
		try {
			this.state = 1062;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1055;
				this.enumeratedValue();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1056;
				this.integerValue();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1057;
				this.choiceValue();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1058;
				this.objectIdentifierValue();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1059;
				this.booleanValue();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1060;
				this.match(ASN_3gppParser.CSTRING);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1061;
				this.match(ASN_3gppParser.BSTRING);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectIdentifierValue(): ObjectIdentifierValueContext {
		let _localctx: ObjectIdentifierValueContext = new ObjectIdentifierValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, ASN_3gppParser.RULE_objectIdentifierValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1064;
			this.match(ASN_3gppParser.L_BRACE);
			this.state = 1065;
			this.objIdComponentsList();
			this.state = 1066;
			this.match(ASN_3gppParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objIdComponentsList(): ObjIdComponentsListContext {
		let _localctx: ObjIdComponentsListContext = new ObjIdComponentsListContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, ASN_3gppParser.RULE_objIdComponentsList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1068;
			this.objIdComponents();
			}
			this.state = 1072;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ASN_3gppParser.BOOLEAN_LITERAL) | (1 << ASN_3gppParser.INTEGER_LITERAL) | (1 << ASN_3gppParser.BMP_STRING_LITERAL) | (1 << ASN_3gppParser.GRAPHIC_STRING_LITERAL) | (1 << ASN_3gppParser.IA5_STRING_LITERAL) | (1 << ASN_3gppParser.ISO646_STRING_LITERAL) | (1 << ASN_3gppParser.NUMERIC_STRING_LITERAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ASN_3gppParser.PRINTABLE_STRING_LITERAL - 32)) | (1 << (ASN_3gppParser.TELETEXT_STRING_LITERAL - 32)) | (1 << (ASN_3gppParser.T61_STRING_LITERAL - 32)) | (1 << (ASN_3gppParser.UNIVERSAL_STRING_LITERAL - 32)) | (1 << (ASN_3gppParser.UTF8_STRING_LITERAL - 32)) | (1 << (ASN_3gppParser.VIDEOTEX_STRING_LITERAL - 32)) | (1 << (ASN_3gppParser.VISIBLE_STRING_LITERAL - 32)) | (1 << (ASN_3gppParser.ENUMERATED_LITERAL - 32)) | (1 << (ASN_3gppParser.BIT_LITERAL - 32)) | (1 << (ASN_3gppParser.OCTET_LITERAL - 32)) | (1 << (ASN_3gppParser.NULL_LITERAL - 32)) | (1 << (ASN_3gppParser.SEQUENCE_LITERAL - 32)) | (1 << (ASN_3gppParser.SET_LITERAL - 32)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (ASN_3gppParser.TYPE_IDENTIFIER_LITERAL - 71)) | (1 << (ASN_3gppParser.ABSTRACT_SYNTAX_LITERAL - 71)) | (1 << (ASN_3gppParser.CHOICE_LITERAL - 71)) | (1 << (ASN_3gppParser.OBJECT_LITERAL - 71)))) !== 0) || _la === ASN_3gppParser.NUMBER || _la === ASN_3gppParser.IDENTIFIER) {
				{
				{
				this.state = 1069;
				this.objIdComponents();
				}
				}
				this.state = 1074;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objIdComponents(): ObjIdComponentsContext {
		let _localctx: ObjIdComponentsContext = new ObjIdComponentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, ASN_3gppParser.RULE_objIdComponents);
		let _la: number;
		try {
			this.state = 1090;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 127, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1075;
				this.match(ASN_3gppParser.NUMBER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1076;
				this.match(ASN_3gppParser.IDENTIFIER);
				this.state = 1083;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.L_PARAN) {
					{
					this.state = 1077;
					this.match(ASN_3gppParser.L_PARAN);
					this.state = 1080;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case ASN_3gppParser.NUMBER:
						{
						this.state = 1078;
						this.match(ASN_3gppParser.NUMBER);
						}
						break;
					case ASN_3gppParser.IDENTIFIER:
						{
						this.state = 1079;
						this.definedValue();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1082;
					this.match(ASN_3gppParser.R_PARAN);
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1085;
				this.definedValue();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1086;
				this.builtinType();
				this.state = 1088;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.L_PARAN) {
					{
					this.state = 1087;
					this.constraint();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integerValue(): IntegerValueContext {
		let _localctx: IntegerValueContext = new IntegerValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, ASN_3gppParser.RULE_integerValue);
		try {
			this.state = 1094;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.MINUS:
			case ASN_3gppParser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1092;
				this.signedNumber();
				}
				break;
			case ASN_3gppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1093;
				this.match(ASN_3gppParser.IDENTIFIER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public choiceValue(): ChoiceValueContext {
		let _localctx: ChoiceValueContext = new ChoiceValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, ASN_3gppParser.RULE_choiceValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1096;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 1097;
			this.match(ASN_3gppParser.COLON);
			this.state = 1098;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumeratedValue(): EnumeratedValueContext {
		let _localctx: EnumeratedValueContext = new EnumeratedValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, ASN_3gppParser.RULE_enumeratedValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1100;
			this.match(ASN_3gppParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public signedNumber(): SignedNumberContext {
		let _localctx: SignedNumberContext = new SignedNumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, ASN_3gppParser.RULE_signedNumber);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.MINUS) {
				{
				this.state = 1102;
				this.match(ASN_3gppParser.MINUS);
				}
			}

			this.state = 1105;
			this.match(ASN_3gppParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public choiceType(): ChoiceTypeContext {
		let _localctx: ChoiceTypeContext = new ChoiceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, ASN_3gppParser.RULE_choiceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1107;
			this.match(ASN_3gppParser.CHOICE_LITERAL);
			this.state = 1108;
			this.match(ASN_3gppParser.L_BRACE);
			this.state = 1109;
			this.alternativeTypeLists();
			this.state = 1110;
			this.match(ASN_3gppParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alternativeTypeLists(): AlternativeTypeListsContext {
		let _localctx: AlternativeTypeListsContext = new AlternativeTypeListsContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, ASN_3gppParser.RULE_alternativeTypeLists);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1112;
			this.rootAlternativeTypeList();
			this.state = 1118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.COMMA) {
				{
				this.state = 1113;
				this.match(ASN_3gppParser.COMMA);
				this.state = 1114;
				this.extensionAndException();
				this.state = 1115;
				this.extensionAdditionAlternatives();
				this.state = 1116;
				this.optionalExtensionMarker();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extensionAdditionAlternatives(): ExtensionAdditionAlternativesContext {
		let _localctx: ExtensionAdditionAlternativesContext = new ExtensionAdditionAlternativesContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, ASN_3gppParser.RULE_extensionAdditionAlternatives);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1122;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				{
				this.state = 1120;
				this.match(ASN_3gppParser.COMMA);
				this.state = 1121;
				this.extensionAdditionAlternativesList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extensionAdditionAlternativesList(): ExtensionAdditionAlternativesListContext {
		let _localctx: ExtensionAdditionAlternativesListContext = new ExtensionAdditionAlternativesListContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, ASN_3gppParser.RULE_extensionAdditionAlternativesList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1124;
			this.extensionAdditionAlternative();
			}
			this.state = 1129;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1125;
					this.match(ASN_3gppParser.COMMA);
					this.state = 1126;
					this.extensionAdditionAlternative();
					}
					}
				}
				this.state = 1131;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extensionAdditionAlternative(): ExtensionAdditionAlternativeContext {
		let _localctx: ExtensionAdditionAlternativeContext = new ExtensionAdditionAlternativeContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, ASN_3gppParser.RULE_extensionAdditionAlternative);
		try {
			this.state = 1134;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.DOUBLE_L_BRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1132;
				this.extensionAdditionAlternativesGroup();
				}
				break;
			case ASN_3gppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1133;
				this.namedType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extensionAdditionAlternativesGroup(): ExtensionAdditionAlternativesGroupContext {
		let _localctx: ExtensionAdditionAlternativesGroupContext = new ExtensionAdditionAlternativesGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, ASN_3gppParser.RULE_extensionAdditionAlternativesGroup);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1136;
			this.match(ASN_3gppParser.DOUBLE_L_BRACKET);
			this.state = 1137;
			this.versionNumber();
			this.state = 1138;
			this.alternativeTypeList();
			this.state = 1139;
			this.match(ASN_3gppParser.DOUBLE_R_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rootAlternativeTypeList(): RootAlternativeTypeListContext {
		let _localctx: RootAlternativeTypeListContext = new RootAlternativeTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, ASN_3gppParser.RULE_rootAlternativeTypeList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1141;
			this.alternativeTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alternativeTypeList(): AlternativeTypeListContext {
		let _localctx: AlternativeTypeListContext = new AlternativeTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, ASN_3gppParser.RULE_alternativeTypeList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1143;
			this.namedType();
			}
			this.state = 1148;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1144;
					this.match(ASN_3gppParser.COMMA);
					this.state = 1145;
					this.namedType();
					}
					}
				}
				this.state = 1150;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedType(): NamedTypeContext {
		let _localctx: NamedTypeContext = new NamedTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, ASN_3gppParser.RULE_namedType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1151;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 1152;
			this.asnType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumeratedType(): EnumeratedTypeContext {
		let _localctx: EnumeratedTypeContext = new EnumeratedTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, ASN_3gppParser.RULE_enumeratedType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1154;
			this.match(ASN_3gppParser.ENUMERATED_LITERAL);
			this.state = 1155;
			this.match(ASN_3gppParser.L_BRACE);
			this.state = 1156;
			this.enumerations();
			this.state = 1157;
			this.match(ASN_3gppParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumerations(): EnumerationsContext {
		let _localctx: EnumerationsContext = new EnumerationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, ASN_3gppParser.RULE_enumerations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1159;
			this.rootEnumeration();
			this.state = 1169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.COMMA) {
				{
				this.state = 1160;
				this.match(ASN_3gppParser.COMMA);
				this.state = 1161;
				this.match(ASN_3gppParser.ELLIPSIS);
				this.state = 1163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.EXCLAM) {
					{
					this.state = 1162;
					this.exceptionSpec();
					}
				}

				this.state = 1167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.COMMA) {
					{
					this.state = 1165;
					this.match(ASN_3gppParser.COMMA);
					this.state = 1166;
					this.additionalEnumeration();
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rootEnumeration(): RootEnumerationContext {
		let _localctx: RootEnumerationContext = new RootEnumerationContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, ASN_3gppParser.RULE_rootEnumeration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1171;
			this.enumeration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumeration(): EnumerationContext {
		let _localctx: EnumerationContext = new EnumerationContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, ASN_3gppParser.RULE_enumeration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1173;
			this.enumerationItem();
			this.state = 1178;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1174;
					this.match(ASN_3gppParser.COMMA);
					this.state = 1175;
					this.enumerationItem();
					}
					}
				}
				this.state = 1180;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumerationItem(): EnumerationItemContext {
		let _localctx: EnumerationItemContext = new EnumerationItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, ASN_3gppParser.RULE_enumerationItem);
		try {
			this.state = 1184;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 139, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1181;
				this.match(ASN_3gppParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1182;
				this.namedNumber();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1183;
				this.value();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedNumber(): NamedNumberContext {
		let _localctx: NamedNumberContext = new NamedNumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, ASN_3gppParser.RULE_namedNumber);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1186;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 1187;
			this.match(ASN_3gppParser.L_PARAN);
			this.state = 1190;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.MINUS:
			case ASN_3gppParser.NUMBER:
				{
				this.state = 1188;
				this.signedNumber();
				}
				break;
			case ASN_3gppParser.IDENTIFIER:
				{
				this.state = 1189;
				this.definedValue();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1192;
			this.match(ASN_3gppParser.R_PARAN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public definedValue(): DefinedValueContext {
		let _localctx: DefinedValueContext = new DefinedValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, ASN_3gppParser.RULE_definedValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1194;
			this.parameterizedValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterizedValue(): ParameterizedValueContext {
		let _localctx: ParameterizedValueContext = new ParameterizedValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, ASN_3gppParser.RULE_parameterizedValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1196;
			this.simpleDefinedValue();
			this.state = 1198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.L_BRACE) {
				{
				this.state = 1197;
				this.actualParameterList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleDefinedValue(): SimpleDefinedValueContext {
		let _localctx: SimpleDefinedValueContext = new SimpleDefinedValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, ASN_3gppParser.RULE_simpleDefinedValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1200;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 1203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.DOT) {
				{
				this.state = 1201;
				this.match(ASN_3gppParser.DOT);
				this.state = 1202;
				this.match(ASN_3gppParser.IDENTIFIER);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public actualParameterList(): ActualParameterListContext {
		let _localctx: ActualParameterListContext = new ActualParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, ASN_3gppParser.RULE_actualParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1205;
			this.match(ASN_3gppParser.L_BRACE);
			this.state = 1206;
			this.actualParameter();
			this.state = 1211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASN_3gppParser.COMMA) {
				{
				{
				this.state = 1207;
				this.match(ASN_3gppParser.COMMA);
				this.state = 1208;
				this.actualParameter();
				}
				}
				this.state = 1213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1214;
			this.match(ASN_3gppParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public actualParameter(): ActualParameterContext {
		let _localctx: ActualParameterContext = new ActualParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, ASN_3gppParser.RULE_actualParameter);
		try {
			this.state = 1218;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 144, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1216;
				this.asnType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1217;
				this.value();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exceptionSpec(): ExceptionSpecContext {
		let _localctx: ExceptionSpecContext = new ExceptionSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, ASN_3gppParser.RULE_exceptionSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1220;
			this.match(ASN_3gppParser.EXCLAM);
			this.state = 1221;
			this.exceptionIdentification();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exceptionIdentification(): ExceptionIdentificationContext {
		let _localctx: ExceptionIdentificationContext = new ExceptionIdentificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, ASN_3gppParser.RULE_exceptionIdentification);
		try {
			this.state = 1229;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1223;
				this.signedNumber();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1224;
				this.definedValue();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1225;
				this.asnType();
				this.state = 1226;
				this.match(ASN_3gppParser.COLON);
				this.state = 1227;
				this.value();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public additionalEnumeration(): AdditionalEnumerationContext {
		let _localctx: AdditionalEnumerationContext = new AdditionalEnumerationContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, ASN_3gppParser.RULE_additionalEnumeration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1231;
			this.enumeration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integerType(): IntegerTypeContext {
		let _localctx: IntegerTypeContext = new IntegerTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, ASN_3gppParser.RULE_integerType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1233;
			this.match(ASN_3gppParser.INTEGER_LITERAL);
			this.state = 1238;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				{
				this.state = 1234;
				this.match(ASN_3gppParser.L_BRACE);
				this.state = 1235;
				this.namedNumberList();
				this.state = 1236;
				this.match(ASN_3gppParser.R_BRACE);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedNumberList(): NamedNumberListContext {
		let _localctx: NamedNumberListContext = new NamedNumberListContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, ASN_3gppParser.RULE_namedNumberList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1240;
			this.namedNumber();
			}
			this.state = 1245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASN_3gppParser.COMMA) {
				{
				{
				this.state = 1241;
				this.match(ASN_3gppParser.COMMA);
				this.state = 1242;
				this.namedNumber();
				}
				}
				this.state = 1247;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectidentifiertype(): ObjectidentifiertypeContext {
		let _localctx: ObjectidentifiertypeContext = new ObjectidentifiertypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, ASN_3gppParser.RULE_objectidentifiertype);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1248;
			this.match(ASN_3gppParser.OBJECT_LITERAL);
			this.state = 1249;
			this.match(ASN_3gppParser.IDENTIFIER_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentRelationConstraint(): ComponentRelationConstraintContext {
		let _localctx: ComponentRelationConstraintContext = new ComponentRelationConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, ASN_3gppParser.RULE_componentRelationConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1251;
			this.match(ASN_3gppParser.L_BRACE);
			{
			this.state = 1252;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 1255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.DOT) {
				{
				this.state = 1253;
				this.match(ASN_3gppParser.DOT);
				this.state = 1254;
				this.match(ASN_3gppParser.IDENTIFIER);
				}
			}

			}
			this.state = 1257;
			this.match(ASN_3gppParser.R_BRACE);
			this.state = 1269;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.L_BRACE) {
				{
				this.state = 1258;
				this.match(ASN_3gppParser.L_BRACE);
				this.state = 1259;
				this.atNotation();
				this.state = 1264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ASN_3gppParser.COMMA) {
					{
					{
					this.state = 1260;
					this.match(ASN_3gppParser.COMMA);
					this.state = 1261;
					this.atNotation();
					}
					}
					this.state = 1266;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1267;
				this.match(ASN_3gppParser.R_BRACE);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atNotation(): AtNotationContext {
		let _localctx: AtNotationContext = new AtNotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, ASN_3gppParser.RULE_atNotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1274;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.A_ROND:
				{
				this.state = 1271;
				this.match(ASN_3gppParser.A_ROND);
				}
				break;
			case ASN_3gppParser.A_ROND_DOT:
				{
				{
				this.state = 1272;
				this.match(ASN_3gppParser.A_ROND_DOT);
				this.state = 1273;
				this.level();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1276;
			this.componentIdList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public level(): LevelContext {
		let _localctx: LevelContext = new LevelContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, ASN_3gppParser.RULE_level);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1280;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.DOT) {
				{
				this.state = 1278;
				this.match(ASN_3gppParser.DOT);
				this.state = 1279;
				this.level();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentIdList(): ComponentIdListContext {
		let _localctx: ComponentIdListContext = new ComponentIdListContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, ASN_3gppParser.RULE_componentIdList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1282;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 1287;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASN_3gppParser.DOT) {
				{
				{
				this.state = 1283;
				this.match(ASN_3gppParser.DOT);
				this.state = 1284;
				this.match(ASN_3gppParser.IDENTIFIER);
				}
				}
				this.state = 1289;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public octetStringType(): OctetStringTypeContext {
		let _localctx: OctetStringTypeContext = new OctetStringTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, ASN_3gppParser.RULE_octetStringType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1290;
			this.match(ASN_3gppParser.OCTET_LITERAL);
			this.state = 1291;
			this.match(ASN_3gppParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitStringType(): BitStringTypeContext {
		let _localctx: BitStringTypeContext = new BitStringTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, ASN_3gppParser.RULE_bitStringType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1293;
			this.match(ASN_3gppParser.BIT_LITERAL);
			this.state = 1294;
			this.match(ASN_3gppParser.STRING_LITERAL);
			}
			this.state = 1300;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 154, this._ctx) ) {
			case 1:
				{
				this.state = 1296;
				this.match(ASN_3gppParser.L_BRACE);
				this.state = 1297;
				this.namedBitList();
				this.state = 1298;
				this.match(ASN_3gppParser.R_BRACE);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedBitList(): NamedBitListContext {
		let _localctx: NamedBitListContext = new NamedBitListContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, ASN_3gppParser.RULE_namedBitList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1302;
			this.namedBit();
			}
			this.state = 1307;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASN_3gppParser.COMMA) {
				{
				{
				this.state = 1303;
				this.match(ASN_3gppParser.COMMA);
				this.state = 1304;
				this.namedBit();
				}
				}
				this.state = 1309;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedBit(): NamedBitContext {
		let _localctx: NamedBitContext = new NamedBitContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, ASN_3gppParser.RULE_namedBit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1310;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 1311;
			this.match(ASN_3gppParser.L_PARAN);
			this.state = 1314;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.NUMBER:
				{
				this.state = 1312;
				this.match(ASN_3gppParser.NUMBER);
				}
				break;
			case ASN_3gppParser.IDENTIFIER:
				{
				this.state = 1313;
				this.definedValue();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1316;
			this.match(ASN_3gppParser.R_PARAN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booleanValue(): BooleanValueContext {
		let _localctx: BooleanValueContext = new BooleanValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, ASN_3gppParser.RULE_booleanValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1318;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ASN_3gppParser.TRUE_LITERAL) | (1 << ASN_3gppParser.FALSE_LITERAL) | (1 << ASN_3gppParser.TRUE_SMALL_LITERAL) | (1 << ASN_3gppParser.FALSE_SMALL_LITERAL))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03x\u052B\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
		"\x04\x96\t\x96\x04\x97\t\x97\x03\x02\x06\x02\u0130\n\x02\r\x02\x0E\x02" +
		"\u0131\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\u013A\n" +
		"\x03\f\x03\x0E\x03\u013D\v\x03\x03\x03\x05\x03\u0140\n\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x05" +
		"\x04\u014C\n\x04\x03\x05\x03\x05\x05\x05\u0150\n\x05\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x05\x06\u0156\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x05\x07\u015F\n\x07\x03\b\x05\b\u0162\n\b\x03\t\x03\t" +
		"\x03\t\x03\t\x05\t\u0168\n\t\x03\n\x05\n\u016B\n\n\x03\v\x03\v\x07\v\u016F" +
		"\n\v\f\v\x0E\v\u0172\v\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u0180\n\x0F\f\x0F\x0E\x0F" +
		"\u0183\v\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u0188\n\x10\x03\x11\x03\x11" +
		"\x07\x11\u018C\n\x11\f\x11\x0E\x11\u018F\v\x11\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x05\x12\u0196\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x05\x13\u019E\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x05\x14" +
		"\u01A4\n\x14\x03\x15\x03\x15\x05\x15\u01A8\n\x15\x03\x16\x03\x16\x05\x16" +
		"\u01AC\n\x16\x03\x16\x03\x16\x03\x16\x05\x16\u01B1\n\x16\x03\x16\x03\x16" +
		"\x03\x16\x05\x16\u01B6\n\x16\x03\x16\x03\x16\x03\x16\x05\x16\u01BB\n\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u01C1\n\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x05\x16\u01C7\n\x16\x05\x16\u01C9\n\x16\x05\x16\u01CB\n\x16" +
		"\x03\x16\x03\x16\x03\x16\x05\x16\u01D0\n\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x05\x16\u01D6\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u01DC" +
		"\n\x16\x05\x16\u01DE\n\x16\x05\x16\u01E0\n\x16\x03\x17\x03\x17\x03\x18" +
		"\x03\x18\x03\x18\x05\x18\u01E7\n\x18\x03\x18\x07\x18\u01EA\n\x18\f\x18" +
		"\x0E\x18\u01ED\v\x18\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u01F3\n\x19" +
		"\x03\x19\x03\x19\x03\x19\x05\x19\u01F8\n\x19\x03\x1A\x03\x1A\x03\x1B\x03" +
		"\x1B\x05\x1B\u01FE\n\x1B\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0203\n\x1C\x03" +
		"\x1C\x07\x1C\u0206\n\x1C\f\x1C\x0E\x1C\u0209\v\x1C\x03\x1D\x03\x1D\x05" +
		"\x1D\u020D\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0213\n\x1E\x03" +
		"\x1E\x03\x1E\x03\x1F\x03\x1F\x05\x1F\u0219\n\x1F\x03 \x03 \x03 \x03 \x05" +
		" \u021F\n \x03 \x03 \x05 \u0223\n \x03 \x03 \x03 \x05 \u0228\n \x03!\x03" +
		"!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u0232\n\"\x03\"\x03\"\x03\"" +
		"\x03\"\x03\"\x05\"\u0239\n\"\x05\"\u023B\n\"\x03#\x03#\x03#\x03#\x07#" +
		"\u0241\n#\f#\x0E#\u0244\v#\x03#\x03#\x03$\x03$\x03$\x05$\u024B\n$\x03" +
		"$\x03$\x03%\x03%\x05%\u0251\n%\x03&\x03&\x05&\u0255\n&\x03\'\x03\'\x03" +
		"\'\x03(\x03(\x05(\u025C\n(\x03)\x03)\x05)\u0260\n)\x03)\x03)\x03)\x05" +
		")\u0265\n)\x03*\x03*\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x07" +
		",\u0272\n,\f,\x0E,\u0275\v,\x03,\x03,\x05,\u0279\n,\x03-\x03-\x03-\x03" +
		"-\x03.\x03.\x06.\u0281\n.\r.\x0E.\u0282\x03.\x03.\x03/\x03/\x05/\u0289" +
		"\n/\x030\x030\x060\u028D\n0\r0\x0E0\u028E\x030\x030\x031\x031\x051\u0295" +
		"\n1\x032\x032\x033\x033\x033\x034\x034\x034\x054\u029F\n4\x034\x034\x05" +
		"4\u02A3\n4\x034\x054\u02A6\n4\x034\x054\u02A9\n4\x054\u02AB\n4\x034\x03" +
		"4\x034\x034\x034\x054\u02B2\n4\x054\u02B4\n4\x034\x034\x034\x034\x034" +
		"\x054\u02BB\n4\x054\u02BD\n4\x054\u02BF\n4\x035\x035\x035\x055\u02C4\n" +
		"5\x036\x036\x036\x056\u02C9\n6\x037\x037\x037\x037\x057\u02CF\n7\x037" +
		"\x057\u02D2\n7\x038\x038\x038\x058\u02D7\n8\x039\x039\x039\x039\x059\u02DD" +
		"\n9\x03:\x03:\x03:\x03:\x05:\u02E3\n:\x03;\x03;\x03;\x05;\u02E8\n;\x03" +
		"<\x03<\x05<\u02EC\n<\x03=\x03=\x03=\x03>\x03>\x05>\u02F3\n>\x03?\x03?" +
		"\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x05@\u02FE\n@\x05@\u0300\n@\x03@\x03" +
		"@\x03@\x05@\u0305\n@\x05@\u0307\n@\x03A\x03A\x03A\x03A\x03A\x03A\x07A" +
		"\u030F\nA\fA\x0EA\u0312\vA\x03B\x03B\x03B\x03B\x03C\x03C\x03C\x03C\x03" +
		"C\x05C\u031D\nC\x05C\u031F\nC\x03D\x03D\x03E\x03E\x03F\x03F\x03F\x05F" +
		"\u0328\nF\x03G\x03G\x03G\x03G\x07G\u032E\nG\fG\x0EG\u0331\vG\x03H\x03" +
		"H\x03H\x03I\x03I\x03I\x03I\x07I\u033A\nI\fI\x0EI\u033D\vI\x03J\x03J\x03" +
		"K\x03K\x03L\x03L\x03M\x03M\x05M\u0347\nM\x03N\x03N\x05N\u034B\nN\x03O" +
		"\x03O\x05O\u034F\nO\x03O\x05O\u0352\nO\x03O\x03O\x05O\u0356\nO\x03O\x03" +
		"O\x05O\u035A\nO\x03O\x03O\x03O\x03O\x05O\u0360\nO\x03P\x03P\x03P\x03P" +
		"\x05P\u0366\nP\x03Q\x03Q\x03Q\x03Q\x05Q\u036C\nQ\x03R\x03R\x03R\x05R\u0371" +
		"\nR\x03S\x03S\x03S\x03S\x05S\u0377\nS\x03T\x03T\x03T\x05T\u037C\nT\x03" +
		"U\x03U\x03U\x03V\x03V\x03V\x03V\x03W\x03W\x05W\u0387\nW\x03W\x07W\u038A" +
		"\nW\fW\x0EW\u038D\vW\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03" +
		"X\x03X\x03X\x03X\x03X\x05X\u039D\nX\x03Y\x03Y\x03Z\x03Z\x03[\x03[\x03" +
		"[\x03[\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x05\\\u03AD\n\\\x03\\\x03\\" +
		"\x03]\x03]\x03]\x05]\u03B4\n]\x03]\x03]\x03]\x05]\u03B9\n]\x03^\x03^\x03" +
		"_\x03_\x03_\x05_\u03C0\n_\x03_\x05_\u03C3\n_\x03`\x03`\x03`\x05`\u03C8" +
		"\n`\x03`\x03`\x03a\x03a\x05a\u03CE\na\x03b\x03b\x03b\x03b\x03b\x03b\x07" +
		"b\u03D6\nb\fb\x0Eb\u03D9\vb\x03b\x03b\x03c\x03c\x03c\x05c\u03E0\nc\x03" +
		"d\x03d\x03d\x03d\x03d\x03d\x05d\u03E8\nd\x03e\x03e\x03f\x03f\x03g\x03" +
		"g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03" +
		"g\x03g\x05g\u03FF\ng\x03h\x05h\u0402\nh\x03h\x03h\x03h\x03h\x05h\u0408" +
		"\nh\x05h\u040A\nh\x03h\x03h\x03h\x05h\u040F\nh\x05h\u0411\nh\x03i\x03" +
		"i\x03i\x07i\u0416\ni\fi\x0Ei\u0419\vi\x03j\x03j\x03j\x03k\x03k\x03l\x03" +
		"l\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x05m\u0429\nm\x03n\x03n\x03n\x03" +
		"n\x03o\x03o\x07o\u0431\no\fo\x0Eo\u0434\vo\x03p\x03p\x03p\x03p\x03p\x05" +
		"p\u043B\np\x03p\x05p\u043E\np\x03p\x03p\x03p\x05p\u0443\np\x05p\u0445" +
		"\np\x03q\x03q\x05q\u0449\nq\x03r\x03r\x03r\x03r\x03s\x03s\x03t\x05t\u0452" +
		"\nt\x03t\x03t\x03u\x03u\x03u\x03u\x03u\x03v\x03v\x03v\x03v\x03v\x03v\x05" +
		"v\u0461\nv\x03w\x03w\x05w\u0465\nw\x03x\x03x\x03x\x07x\u046A\nx\fx\x0E" +
		"x\u046D\vx\x03y\x03y\x05y\u0471\ny\x03z\x03z\x03z\x03z\x03z\x03{\x03{" +
		"\x03|\x03|\x03|\x07|\u047D\n|\f|\x0E|\u0480\v|\x03}\x03}\x03}\x03~\x03" +
		"~\x03~\x03~\x03~\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x05\x7F\u048E\n\x7F\x03" +
		"\x7F\x03\x7F\x05\x7F\u0492\n\x7F\x05\x7F\u0494\n\x7F\x03\x80\x03\x80\x03" +
		"\x81\x03\x81\x03\x81\x07\x81\u049B\n\x81\f\x81\x0E\x81\u049E\v\x81\x03" +
		"\x82\x03\x82\x03\x82\x05\x82\u04A3\n\x82\x03\x83\x03\x83\x03\x83\x03\x83" +
		"\x05\x83\u04A9\n\x83\x03\x83\x03\x83\x03\x84\x03\x84\x03\x85\x03\x85\x05" +
		"\x85\u04B1\n\x85\x03\x86\x03\x86\x03\x86\x05\x86\u04B6\n\x86\x03\x87\x03" +
		"\x87\x03\x87\x03\x87\x07\x87\u04BC\n\x87\f\x87\x0E\x87\u04BF\v\x87\x03" +
		"\x87\x03\x87\x03\x88\x03\x88\x05\x88\u04C5\n\x88\x03\x89\x03\x89\x03\x89" +
		"\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x05\x8A\u04D0\n\x8A\x03" +
		"\x8B\x03\x8B\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x05\x8C\u04D9\n\x8C" +
		"\x03\x8D\x03\x8D\x03\x8D\x07\x8D\u04DE\n\x8D\f\x8D\x0E\x8D\u04E1\v\x8D" +
		"\x03\x8E\x03\x8E\x03\x8E\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x05\x8F\u04EA" +
		"\n\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x07\x8F\u04F1\n\x8F\f\x8F" +
		"\x0E\x8F\u04F4\v\x8F\x03\x8F\x03\x8F\x05\x8F\u04F8\n\x8F\x03\x90\x03\x90" +
		"\x03\x90\x05\x90\u04FD\n\x90\x03\x90\x03\x90\x03\x91\x03\x91\x05\x91\u0503" +
		"\n\x91\x03\x92\x03\x92\x03\x92\x07\x92\u0508\n\x92\f\x92\x0E\x92\u050B" +
		"\v\x92\x03\x93\x03\x93\x03\x93\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94" +
		"\x03\x94\x03\x94\x05\x94\u0517\n\x94\x03\x95\x03\x95\x03\x95\x07\x95\u051C" +
		"\n\x95\f\x95\x0E\x95\u051F\v\x95\x03\x96\x03\x96\x03\x96\x03\x96\x05\x96" +
		"\u0525\n\x96\x03\x96\x03\x96\x03\x97\x03\x97\x03\x97\x02\x02\x02\x98\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02" +
		",\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02" +
		"H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02" +
		"d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02" +
		"\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02" +
		"\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02" +
		"\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02" +
		"\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02" +
		"\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02" +
		"\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02" +
		"\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02" +
		"\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108\x02\u010A\x02\u010C" +
		"\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116\x02\u0118\x02\u011A" +
		"\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124\x02\u0126\x02\u0128" +
		"\x02\u012A\x02\u012C\x02\x02\n\x04\x02VVXY\x03\x02IJ\x04\x02\x18\x18x" +
		"x\x03\x02<=\x04\x02;;>>\x04\x02\x1C\x1C\x1E(\x03\x02FG\x04\x02\b\t\x13" +
		"\x14\x02\u055F\x02\u012F\x03\x02\x02\x02\x04\u0133\x03\x02\x02\x02\x06" +
		"\u014B\x03\x02\x02\x02\b\u014F\x03\x02\x02\x02\n\u0155\x03\x02\x02\x02" +
		"\f\u015E\x03\x02\x02\x02\x0E\u0161\x03\x02\x02\x02\x10\u0167\x03\x02\x02" +
		"\x02\x12\u016A\x03\x02\x02\x02\x14\u016C\x03\x02\x02\x02\x16\u0173\x03" +
		"\x02\x02\x02\x18\u0177\x03\x02\x02\x02\x1A\u017A\x03\x02\x02\x02\x1C\u017C" +
		"\x03\x02\x02\x02\x1E\u0184\x03\x02\x02\x02 \u0189\x03\x02\x02\x02\"\u0190" +
		"\x03\x02\x02\x02$\u0197\x03\x02\x02\x02&\u01A1\x03\x02\x02\x02(\u01A7" +
		"\x03\x02\x02\x02*\u01DF\x03\x02\x02\x02,\u01E1\x03\x02\x02\x02.\u01E3" +
		"\x03\x02\x02\x020\u01F7\x03\x02\x02\x022\u01F9\x03\x02\x02\x024\u01FD" +
		"\x03\x02\x02\x026\u01FF\x03\x02\x02\x028\u020C\x03\x02\x02\x02:\u020E" +
		"\x03\x02\x02\x02<\u0218\x03\x02\x02\x02>\u021A\x03\x02\x02\x02@\u0229" +
		"\x03\x02\x02\x02B\u023A\x03\x02\x02\x02D\u023C\x03\x02\x02\x02F\u024A" +
		"\x03\x02\x02\x02H\u0250\x03\x02\x02\x02J\u0254\x03\x02\x02\x02L\u0256" +
		"\x03\x02\x02\x02N\u025B\x03\x02\x02\x02P\u0264\x03\x02\x02\x02R\u0266" +
		"\x03\x02\x02\x02T\u0268\x03\x02\x02\x02V\u026C\x03\x02\x02\x02X\u027A" +
		"\x03\x02\x02\x02Z\u027E\x03\x02\x02\x02\\\u0288\x03\x02\x02\x02^\u028A" +
		"\x03\x02\x02\x02`\u0294\x03\x02\x02\x02b\u0296\x03\x02\x02\x02d\u0298" +
		"\x03\x02\x02\x02f\u029B\x03\x02\x02\x02h\u02C0\x03\x02\x02\x02j\u02C8" +
		"\x03\x02\x02\x02l\u02CA\x03\x02\x02\x02n\u02D6\x03\x02\x02\x02p\u02D8" +
		"\x03\x02\x02\x02r\u02DE\x03\x02\x02\x02t\u02E7\x03\x02\x02\x02v\u02EB" +
		"\x03\x02\x02\x02x\u02ED\x03\x02\x02\x02z\u02F0\x03\x02\x02\x02|\u02F4" +
		"\x03\x02\x02\x02~\u0306\x03\x02\x02\x02\x80\u0308\x03\x02\x02\x02\x82" +
		"\u0313\x03\x02\x02\x02\x84\u0317\x03\x02\x02\x02\x86\u0320\x03\x02\x02" +
		"\x02\x88\u0322\x03\x02\x02\x02\x8A\u0327\x03\x02\x02\x02\x8C\u0329\x03" +
		"\x02\x02\x02\x8E\u0332\x03\x02\x02\x02\x90\u0335\x03\x02\x02\x02\x92\u033E" +
		"\x03\x02\x02\x02\x94\u0340\x03\x02\x02\x02\x96\u0342\x03\x02\x02\x02\x98" +
		"\u0346\x03\x02\x02\x02\x9A\u0348\x03\x02\x02\x02\x9C\u035F\x03\x02\x02" +
		"\x02\x9E\u0361\x03\x02\x02\x02\xA0\u0367\x03\x02\x02\x02\xA2\u0370\x03" +
		"\x02\x02\x02\xA4\u0372\x03\x02\x02\x02\xA6\u037B\x03\x02\x02\x02\xA8\u037D" +
		"\x03\x02\x02\x02\xAA\u0380\x03\x02\x02\x02\xAC\u0386\x03\x02\x02\x02\xAE" +
		"\u039C\x03\x02\x02\x02\xB0\u039E\x03\x02\x02\x02\xB2\u03A0\x03\x02\x02" +
		"\x02\xB4\u03A2\x03\x02\x02\x02\xB6\u03A6\x03\x02\x02\x02\xB8\u03B0\x03" +
		"\x02\x02\x02\xBA\u03BA\x03\x02\x02\x02\xBC\u03BC\x03\x02\x02\x02\xBE\u03C4" +
		"\x03\x02\x02\x02\xC0\u03CD\x03\x02\x02\x02\xC2\u03CF\x03\x02\x02\x02\xC4" +
		"\u03DF\x03\x02\x02\x02\xC6\u03E1\x03\x02\x02\x02\xC8\u03E9\x03\x02\x02" +
		"\x02\xCA\u03EB\x03\x02\x02\x02\xCC\u03FE\x03\x02\x02\x02\xCE\u0410\x03" +
		"\x02\x02\x02\xD0\u0412\x03\x02\x02\x02\xD2\u041A\x03\x02\x02\x02\xD4\u041D" +
		"\x03\x02\x02\x02\xD6\u041F\x03\x02\x02\x02\xD8\u0428\x03\x02\x02\x02\xDA" +
		"\u042A\x03\x02\x02\x02\xDC\u042E\x03\x02\x02\x02\xDE\u0444\x03\x02\x02" +
		"\x02\xE0\u0448\x03\x02\x02\x02\xE2\u044A\x03\x02\x02\x02\xE4\u044E\x03" +
		"\x02\x02\x02\xE6\u0451\x03\x02\x02\x02\xE8\u0455\x03\x02\x02\x02\xEA\u045A" +
		"\x03\x02\x02\x02\xEC\u0464\x03\x02\x02\x02\xEE\u0466\x03\x02\x02\x02\xF0" +
		"\u0470\x03\x02\x02\x02\xF2\u0472\x03\x02\x02\x02\xF4\u0477\x03\x02\x02" +
		"\x02\xF6\u0479\x03\x02\x02\x02\xF8\u0481\x03\x02\x02\x02\xFA\u0484\x03" +
		"\x02\x02\x02\xFC\u0489\x03\x02\x02\x02\xFE\u0495\x03\x02\x02\x02\u0100" +
		"\u0497\x03\x02\x02\x02\u0102\u04A2\x03\x02\x02\x02\u0104\u04A4\x03\x02" +
		"\x02\x02\u0106\u04AC\x03\x02\x02\x02\u0108\u04AE\x03\x02\x02\x02\u010A" +
		"\u04B2\x03\x02\x02\x02\u010C\u04B7\x03\x02\x02\x02\u010E\u04C4\x03\x02" +
		"\x02\x02\u0110\u04C6\x03\x02\x02\x02\u0112\u04CF\x03\x02\x02\x02\u0114" +
		"\u04D1\x03\x02\x02\x02\u0116\u04D3\x03\x02\x02\x02\u0118\u04DA\x03\x02" +
		"\x02\x02\u011A\u04E2\x03\x02\x02\x02\u011C\u04E5\x03\x02\x02\x02\u011E" +
		"\u04FC\x03\x02\x02\x02\u0120\u0502\x03\x02\x02\x02\u0122\u0504\x03\x02" +
		"\x02\x02\u0124\u050C\x03\x02\x02\x02\u0126\u050F\x03\x02\x02\x02\u0128" +
		"\u0518\x03\x02\x02\x02\u012A\u0520\x03\x02\x02\x02\u012C\u0528\x03\x02" +
		"\x02\x02\u012E\u0130\x05\x04\x03\x02\u012F\u012E\x03\x02\x02\x02\u0130" +
		"\u0131\x03\x02\x02\x02\u0131\u012F\x03\x02\x02\x02\u0131\u0132\x03\x02" +
		"\x02\x02\u0132\x03\x03\x02\x02\x02\u0133\u013F\x07x\x02\x02\u0134\u013B" +
		"\x07\x16\x02\x02\u0135\u0136\x07x\x02\x02\u0136\u0137\x07\x19\x02\x02" +
		"\u0137\u0138\x07r\x02\x02\u0138\u013A\x07\x1A\x02\x02\u0139\u0135\x03" +
		"\x02\x02\x02\u013A\u013D\x03\x02\x02\x02\u013B\u0139\x03\x02\x02\x02\u013B" +
		"\u013C\x03\x02\x02\x02\u013C\u013E\x03\x02\x02\x02\u013D\u013B\x03\x02" +
		"\x02\x02\u013E\u0140\x07\x17\x02\x02\u013F\u0134\x03\x02\x02\x02\u013F" +
		"\u0140\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u0142\x07Z\x02" +
		"\x02\u0142\u0143\x05\x06\x04\x02\u0143\u0144\x05\b\x05\x02\u0144\u0145" +
		"\x07\x06\x02\x02\u0145\u0146\x07[\x02\x02\u0146\u0147\x05\n\x06\x02\u0147" +
		"\u0148\x07\\\x02\x02\u0148\x05\x03\x02\x02\x02\u0149\u014A\t\x02\x02\x02" +
		"\u014A\u014C\x07W\x02\x02\u014B\u0149\x03\x02\x02\x02\u014B\u014C\x03" +
		"\x02\x02\x02\u014C\x07\x03\x02\x02\x02\u014D\u014E\x07T\x02\x02\u014E" +
		"\u0150\x07U\x02\x02\u014F\u014D\x03\x02\x02\x02\u014F\u0150\x03\x02\x02" +
		"\x02\u0150\t\x03\x02\x02\x02\u0151\u0152\x05\f\x07\x02\u0152\u0153\x05" +
		"\x10\t\x02\u0153\u0154\x05 \x11\x02\u0154\u0156\x03\x02\x02\x02\u0155" +
		"\u0151\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\v\x03\x02\x02" +
		"\x02\u0157\u0158\x07S\x02\x02\u0158\u0159\x05\x0E\b\x02\u0159\u015A\x07" +
		"Q\x02\x02\u015A\u015F\x03\x02\x02\x02\u015B\u015C\x07S\x02\x02\u015C\u015D" +
		"\x079\x02\x02\u015D\u015F\x07Q\x02\x02\u015E\u0157\x03\x02\x02\x02\u015E" +
		"\u015B\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\r\x03\x02\x02" +
		"\x02\u0160\u0162\x05\x1C\x0F\x02\u0161\u0160\x03\x02\x02\x02\u0161\u0162" +
		"\x03\x02\x02\x02\u0162\x0F\x03\x02\x02\x02\u0163\u0164\x07R\x02\x02\u0164" +
		"\u0165\x05\x12\n\x02\u0165\u0166\x07Q\x02\x02\u0166\u0168\x03\x02\x02" +
		"\x02\u0167\u0163\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02\u0168\x11" +
		"\x03\x02\x02\x02\u0169\u016B\x05\x14\v\x02\u016A\u0169\x03\x02\x02\x02" +
		"\u016A\u016B\x03\x02\x02\x02\u016B\x13\x03\x02\x02\x02\u016C\u0170\x05" +
		"\x16\f\x02\u016D\u016F\x05\x16\f\x02\u016E\u016D\x03\x02\x02\x02\u016F" +
		"\u0172\x03\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0170\u0171\x03\x02" +
		"\x02\x02\u0171\x15\x03\x02\x02\x02\u0172\u0170\x03\x02\x02\x02\u0173\u0174" +
		"\x05\x1C\x0F\x02\u0174\u0175\x07C\x02\x02\u0175\u0176\x05\x18\r\x02\u0176" +
		"\x17\x03\x02\x02\x02\u0177\u0178\x07x\x02\x02\u0178\u0179\x05\x1A\x0E" +
		"\x02\u0179\x19\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B\x1B\x03" +
		"\x02\x02\x02\u017C\u0181\x05\x1E\x10\x02\u017D\u017E\x07\x18\x02\x02\u017E" +
		"\u0180\x05\x1E\x10\x02\u017F\u017D\x03\x02\x02\x02\u0180\u0183\x03\x02" +
		"\x02\x02\u0181\u017F\x03\x02\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182" +
		"\x1D\x03\x02\x02\x02\u0183\u0181\x03\x02\x02\x02\u0184\u0187\x07x\x02" +
		"\x02\u0185\u0186\x07\x16\x02\x02\u0186\u0188\x07\x17\x02\x02\u0187\u0185" +
		"\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188\x1F\x03\x02\x02\x02" +
		"\u0189\u018D\x05\"\x12\x02\u018A\u018C\x05\"\x12\x02\u018B\u018A\x03\x02" +
		"\x02\x02\u018C\u018F\x03\x02\x02\x02\u018D\u018B\x03\x02\x02\x02\u018D" +
		"\u018E\x03\x02\x02\x02\u018E!\x03\x02\x02\x02\u018F\u018D\x03\x02\x02" +
		"\x02\u0190\u0195\x07x\x02\x02\u0191\u0196\x05\xAAV\x02\u0192\u0196\x05" +
		"\xA8U\x02\u0193\u0196\x05B\"\x02\u0194\u0196\x05L\'\x02\u0195\u0191\x03" +
		"\x02\x02\x02\u0195\u0192\x03\x02\x02\x02\u0195\u0193\x03\x02\x02\x02\u0195" +
		"\u0194\x03\x02\x02\x02\u0196#\x03\x02\x02\x02\u0197\u0198\x072\x02\x02" +
		"\u0198\u019D\x07\x16\x02\x02\u0199\u019A\x05&\x14\x02\u019A\u019B\x05" +
		"(\x15\x02\u019B\u019E\x03\x02\x02\x02\u019C\u019E\x05*\x16\x02\u019D\u0199" +
		"\x03\x02\x02\x02\u019D\u019C\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02" +
		"\u019E\u019F\x03\x02\x02\x02\u019F\u01A0\x07\x17\x02\x02\u01A0%\x03\x02" +
		"\x02\x02\u01A1\u01A3\x07\f\x02\x02\u01A2\u01A4\x05\u0110\x89\x02\u01A3" +
		"\u01A2\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4\'\x03\x02\x02" +
		"\x02\u01A5\u01A6\x07\x18\x02\x02\u01A6\u01A8\x07\f\x02\x02\u01A7\u01A5" +
		"\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8)\x03\x02\x02\x02\u01A9" +
		"\u01AB\x05,\x17\x02\u01AA\u01AC\x052\x1A\x02\u01AB\u01AA\x03\x02\x02\x02" +
		"\u01AB\u01AC\x03\x02\x02\x02\u01AC\u01E0\x03\x02\x02\x02\u01AD\u01AE\x05" +
		",\x17\x02\u01AE\u01B0\x07\x18\x02\x02\u01AF";
	private static readonly _serializedATNSegment1: string =
		"\u01B1\x052\x1A\x02\u01B0\u01AF\x03\x02\x02\x02\u01B0\u01B1\x03\x02\x02" +
		"\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2\u01B3\x05&\x14\x02\u01B3\u01B5" +
		"\x054\x1B\x02\u01B4\u01B6\x052\x1A\x02\u01B5\u01B4\x03\x02\x02\x02\u01B5" +
		"\u01B6\x03\x02\x02\x02\u01B6\u01E0\x03\x02\x02\x02\u01B7\u01B8\x05,\x17" +
		"\x02\u01B8\u01BA\x07\x18\x02\x02\u01B9\u01BB\x052\x1A\x02\u01BA\u01B9" +
		"\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02" +
		"\u01BC\u01BD\x05&\x14\x02\u01BD\u01CA\x054\x1B\x02\u01BE\u01C0\x07\x18" +
		"\x02\x02\u01BF\u01C1\x052\x1A\x02\u01C0\u01BF\x03\x02\x02\x02\u01C0\u01C1" +
		"\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2\u01C8\x07\f\x02\x02" +
		"\u01C3\u01C4\x07\x18\x02\x02\u01C4\u01C6\x05,\x17\x02\u01C5\u01C7\x05" +
		"2\x1A\x02\u01C6\u01C5\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7" +
		"\u01C9\x03\x02\x02\x02\u01C8\u01C3\x03\x02\x02\x02\u01C8\u01C9\x03\x02" +
		"\x02\x02\u01C9\u01CB\x03\x02\x02\x02\u01CA\u01BE\x03\x02\x02\x02\u01CA" +
		"\u01CB\x03\x02\x02\x02\u01CB\u01E0\x03\x02\x02\x02\u01CC\u01CD\x05&\x14" +
		"\x02\u01CD\u01CF\x054\x1B\x02\u01CE\u01D0\x052\x1A\x02\u01CF\u01CE\x03" +
		"\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01E0\x03\x02\x02\x02\u01D1" +
		"\u01D2\x05&\x14\x02\u01D2\u01DD\x054\x1B\x02\u01D3\u01D5\x07\x18\x02\x02" +
		"\u01D4\u01D6\x052\x1A\x02\u01D5\u01D4\x03\x02\x02\x02\u01D5\u01D6\x03" +
		"\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7\u01D8\x07\f\x02\x02\u01D8" +
		"\u01D9\x07\x18\x02\x02\u01D9\u01DB\x05,\x17\x02\u01DA\u01DC\x052\x1A\x02" +
		"\u01DB\u01DA\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC\u01DE\x03" +
		"\x02\x02\x02\u01DD\u01D3\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE" +
		"\u01E0\x03\x02\x02\x02\u01DF\u01A9\x03\x02\x02\x02\u01DF\u01AD\x03\x02" +
		"\x02\x02\u01DF\u01B7\x03\x02\x02\x02\u01DF\u01CC\x03\x02\x02\x02\u01DF" +
		"\u01D1\x03\x02\x02\x02\u01E0+\x03\x02\x02\x02\u01E1\u01E2\x05.\x18\x02" +
		"\u01E2-\x03\x02\x02\x02\u01E3\u01EB\x050\x19\x02\u01E4\u01E6\x07\x18\x02" +
		"\x02\u01E5\u01E7\x052\x1A\x02\u01E6\u01E5\x03\x02\x02\x02\u01E6\u01E7" +
		"\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8\u01EA\x050\x19\x02" +
		"\u01E9\u01E4\x03\x02\x02\x02\u01EA\u01ED\x03\x02\x02\x02\u01EB\u01E9\x03" +
		"\x02\x02\x02\u01EB\u01EC\x03\x02\x02\x02\u01EC/\x03\x02\x02\x02\u01ED" +
		"\u01EB\x03\x02\x02\x02\u01EE\u01F2\x05\xF8}\x02\u01EF\u01F3\x073\x02\x02" +
		"\u01F0\u01F1\x074\x02\x02\u01F1\u01F3\x05\xD6l\x02\u01F2\u01EF\x03\x02" +
		"\x02\x02\u01F2\u01F0\x03\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3" +
		"\u01F8\x03\x02\x02\x02\u01F4\u01F5\x075\x02\x02\u01F5\u01F6\x076\x02\x02" +
		"\u01F6\u01F8\x05\xACW\x02\u01F7\u01EE\x03\x02\x02\x02\u01F7\u01F4\x03" +
		"\x02\x02\x02\u01F81\x03\x02\x02\x02\u01F9\u01FA\x07\x03\x02\x02\u01FA" +
		"3\x03\x02\x02\x02\u01FB\u01FC\x07\x18\x02\x02\u01FC\u01FE\x056\x1C\x02" +
		"\u01FD\u01FB\x03\x02\x02\x02\u01FD\u01FE\x03\x02\x02\x02\u01FE5\x03\x02" +
		"\x02\x02\u01FF\u0207\x058\x1D\x02\u0200\u0202\x07\x18\x02\x02\u0201\u0203" +
		"\x052\x1A\x02\u0202\u0201\x03\x02\x02\x02\u0202\u0203\x03\x02\x02\x02" +
		"\u0203\u0204\x03\x02\x02\x02\u0204\u0206\x058\x1D\x02\u0205\u0200\x03" +
		"\x02\x02\x02\u0206\u0209\x03\x02\x02\x02\u0207\u0205\x03\x02\x02\x02\u0207" +
		"\u0208\x03\x02\x02\x02\u02087\x03\x02\x02\x02\u0209\u0207\x03\x02\x02" +
		"\x02\u020A\u020D\x050\x19\x02\u020B\u020D\x05:\x1E\x02\u020C\u020A\x03" +
		"\x02\x02\x02\u020C\u020B\x03\x02\x02\x02\u020D9\x03\x02\x02\x02\u020E" +
		"\u020F\x07]\x02\x02\u020F\u0210\x05<\x1F\x02\u0210\u0212\x05.\x18\x02" +
		"\u0211\u0213\x052\x1A\x02\u0212\u0211\x03\x02\x02\x02\u0212\u0213\x03" +
		"\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214\u0215\x07^\x02\x02\u0215" +
		";\x03\x02\x02\x02\u0216\u0217\x07r\x02\x02\u0217\u0219\x07_\x02\x02\u0218" +
		"\u0216\x03\x02\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219=\x03\x02\x02" +
		"\x02\u021A\u0222\x072\x02\x02\u021B\u021E\x07\x19\x02\x02\u021C\u021F" +
		"\x05\xBE`\x02\u021D\u021F\x05@!\x02\u021E\u021C\x03\x02\x02\x02\u021E" +
		"\u021D\x03\x02\x02\x02\u021F\u0220\x03\x02\x02\x02\u0220\u0221\x07\x1A" +
		"\x02\x02\u0221\u0223\x03\x02\x02\x02\u0222\u021B\x03\x02\x02\x02\u0222" +
		"\u0223\x03\x02\x02\x02\u0223\u0224\x03\x02\x02\x02\u0224\u0227\x076\x02" +
		"\x02\u0225\u0228\x05\xACW\x02\u0226\u0228\x05\xF8}\x02\u0227\u0225\x03" +
		"\x02\x02\x02\u0227\u0226\x03\x02\x02\x02\u0228?\x03\x02\x02\x02\u0229" +
		"\u022A\x07B\x02\x02\u022A\u022B\x05\xBE`\x02\u022BA\x03\x02\x02\x02\u022C" +
		"\u022D\x05D#\x02\u022D\u0231\x07\x06\x02\x02\u022E\u0232\x05\xACW\x02" +
		"\u022F\u0232\x05\xD6l\x02\u0230\u0232\x05\x82B\x02\u0231\u022E\x03\x02" +
		"\x02\x02\u0231\u022F\x03\x02\x02\x02\u0231\u0230\x03\x02\x02\x02\u0232" +
		"\u023B\x03\x02\x02\x02\u0233\u0234\x05P)\x02\u0234\u0238\x07\x06\x02\x02" +
		"\u0235\u0239\x05v<\x02\u0236\u0239\x05N(\x02\u0237\u0239\x05|?\x02\u0238" +
		"\u0235\x03\x02\x02\x02\u0238\u0236\x03\x02\x02\x02\u0238\u0237\x03\x02" +
		"\x02\x02\u0239\u023B\x03\x02\x02\x02\u023A\u022C\x03\x02\x02\x02\u023A" +
		"\u0233\x03\x02\x02\x02\u023BC\x03\x02\x02\x02\u023C\u023D\x07\x16\x02" +
		"\x02\u023D\u0242\x05F$\x02\u023E\u023F\x07\x18\x02\x02\u023F\u0241\x05" +
		"F$\x02\u0240\u023E\x03\x02\x02\x02\u0241\u0244\x03\x02\x02\x02\u0242\u0240" +
		"\x03\x02\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243\u0245\x03\x02\x02\x02" +
		"\u0244\u0242\x03\x02\x02\x02\u0245\u0246\x07\x17\x02\x02\u0246E\x03\x02" +
		"\x02\x02\u0247\u0248\x05H%\x02\u0248\u0249\x07_\x02\x02\u0249\u024B\x03" +
		"\x02\x02\x02\u024A\u0247\x03\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B" +
		"\u024C\x03\x02\x02\x02\u024C\u024D\x07x\x02\x02\u024DG\x03\x02\x02\x02" +
		"\u024E\u0251\x05J&\x02\u024F\u0251\x07x\x02\x02\u0250\u024E\x03\x02\x02" +
		"\x02\u0250\u024F\x03\x02\x02\x02\u0251I\x03\x02\x02\x02\u0252\u0255\x05" +
		"\xACW\x02\u0253\u0255\x05P)\x02\u0254\u0252\x03\x02\x02\x02\u0254\u0253" +
		"\x03\x02\x02\x02\u0255K\x03\x02\x02\x02\u0256\u0257\x07\x06\x02\x02\u0257" +
		"\u0258\x05N(\x02\u0258M\x03\x02\x02\x02\u0259\u025C\x05P)\x02\u025A\u025C" +
		"\x05V,\x02\u025B\u0259\x03\x02\x02\x02\u025B\u025A\x03\x02\x02\x02\u025C" +
		"O\x03\x02\x02\x02\u025D\u025E\x07x\x02\x02\u025E\u0260\x07\n\x02\x02\u025F" +
		"\u025D\x03\x02\x02\x02\u025F\u0260\x03\x02\x02\x02\u0260\u0261\x03\x02" +
		"\x02\x02\u0261\u0265\x07x\x02\x02\u0262\u0265\x07I\x02\x02\u0263\u0265" +
		"\x07J\x02\x02\u0264\u025F\x03\x02\x02\x02\u0264\u0262\x03\x02\x02\x02" +
		"\u0264\u0263\x03\x02\x02\x02\u0265Q\x03\x02\x02\x02\u0266\u0267\t\x03" +
		"\x02\x02\u0267S\x03\x02\x02\x02\u0268\u0269\x07x\x02\x02\u0269\u026A\x07" +
		"\n\x02\x02\u026A\u026B\x07x\x02\x02\u026BU\x03\x02\x02\x02\u026C\u026D" +
		"\x07K\x02\x02\u026D\u026E\x07\x16\x02\x02\u026E\u0273\x05f4\x02\u026F" +
		"\u0270\x07\x18\x02\x02\u0270\u0272\x05f4\x02\u0271\u026F\x03\x02\x02\x02" +
		"\u0272\u0275\x03\x02\x02\x02\u0273\u0271\x03\x02\x02\x02\u0273\u0274\x03" +
		"\x02\x02\x02\u0274\u0276\x03\x02\x02\x02\u0275\u0273\x03\x02\x02\x02\u0276" +
		"\u0278\x07\x17\x02\x02\u0277\u0279\x05X-\x02\u0278\u0277\x03\x02\x02\x02" +
		"\u0278\u0279\x03\x02\x02\x02\u0279W\x03\x02\x02\x02\u027A\u027B\x07D\x02" +
		"\x02\u027B\u027C\x07M\x02\x02\u027C\u027D\x05Z.\x02\u027DY\x03\x02\x02" +
		"\x02\u027E\u0280\x07\x16\x02\x02\u027F\u0281\x05\\/\x02\u0280\u027F\x03" +
		"\x02\x02\x02\u0281\u0282\x03\x02\x02\x02\u0282\u0280\x03\x02\x02\x02\u0282" +
		"\u0283\x03\x02\x02\x02\u0283\u0284\x03\x02\x02\x02\u0284\u0285\x07\x17" +
		"\x02\x02\u0285[\x03\x02\x02\x02\u0286\u0289\x05`1\x02\u0287\u0289\x05" +
		"^0\x02\u0288\u0286\x03\x02\x02\x02\u0288\u0287\x03\x02\x02\x02\u0289]" +
		"\x03\x02\x02\x02\u028A\u028C\x07N\x02\x02\u028B\u028D\x05\\/\x02\u028C" +
		"\u028B\x03\x02\x02\x02\u028D\u028E\x03\x02\x02\x02\u028E\u028C\x03\x02" +
		"\x02\x02\u028E\u028F\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290" +
		"\u0291\x07O\x02\x02\u0291_\x03\x02\x02\x02\u0292\u0295\x05b2\x02\u0293" +
		"\u0295\x05d3\x02\u0294\u0292\x03\x02\x02\x02\u0294\u0293\x03\x02\x02\x02" +
		"\u0295a\x03\x02\x02\x02\u0296\u0297\t\x04\x02\x02\u0297c\x03\x02\x02\x02" +
		"\u0298\u0299\x07\x0E\x02\x02\u0299\u029A\x07x\x02\x02\u029Ae\x03\x02\x02" +
		"\x02\u029B\u029C\x07\x0E\x02\x02\u029C\u02BE\x07x\x02\x02\u029D\u029F" +
		"\x05j6\x02\u029E\u029D\x03\x02\x02\x02\u029E\u029F\x03\x02\x02\x02\u029F" +
		"\u02BF\x03\x02\x02\x02\u02A0\u02AA\x05\xACW\x02\u02A1\u02A3\x05t;\x02" +
		"\u02A2\u02A1\x03\x02\x02\x02\u02A2\u02A3\x03\x02\x02\x02\u02A3\u02AB\x03" +
		"\x02\x02\x02\u02A4\u02A6\x07L\x02\x02\u02A5\u02A4\x03\x02\x02\x02\u02A5" +
		"\u02A6\x03\x02\x02\x02\u02A6\u02A8\x03\x02\x02\x02\u02A7\u02A9\x05n8\x02" +
		"\u02A8\u02A7\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A9\u02AB\x03" +
		"\x02\x02\x02\u02AA\u02A2\x03\x02\x02\x02\u02AA\u02A5\x03\x02\x02\x02\u02AB" +
		"\u02BF\x03\x02\x02\x02\u02AC\u02B3\x05\x80A\x02\u02AD\u02B4\x073\x02\x02" +
		"\u02AE\u02B1\x074\x02\x02\u02AF\u02B2\x05\x82B\x02\u02B0\u02B2\x05\xD6" +
		"l\x02\u02B1\u02AF\x03\x02\x02\x02\u02B1\u02B0\x03\x02\x02\x02\u02B2\u02B4" +
		"\x03\x02\x02\x02\u02B3\u02AD\x03\x02\x02\x02\u02B3\u02AE\x03\x02\x02\x02" +
		"\u02B3\u02B4\x03\x02\x02\x02\u02B4\u02BF\x03\x02\x02\x02\u02B5\u02BC\x05" +
		"P)\x02\u02B6\u02BD\x073\x02\x02\u02B7\u02BA\x074\x02\x02\u02B8\u02BB\x05" +
		"|?\x02\u02B9\u02BB\x05v<\x02\u02BA\u02B8\x03\x02\x02\x02\u02BA\u02B9\x03" +
		"\x02\x02\x02\u02BB\u02BD\x03\x02\x02\x02\u02BC\u02B6\x03\x02\x02\x02\u02BC" +
		"\u02B7\x03\x02\x02\x02\u02BC\u02BD\x03\x02\x02\x02\u02BD\u02BF\x03\x02" +
		"\x02\x02\u02BE\u029E\x03\x02\x02\x02\u02BE\u02A0\x03\x02\x02\x02\u02BE" +
		"\u02AC\x03\x02\x02\x02\u02BE\u02B5\x03\x02\x02\x02\u02BFg\x03\x02\x02" +
		"\x02\u02C0\u02C1\x07\x0E\x02\x02\u02C1\u02C3\x07x\x02\x02\u02C2\u02C4" +
		"\x05j6\x02\u02C3\u02C2\x03\x02\x02\x02\u02C3\u02C4\x03\x02\x02\x02\u02C4" +
		"i\x03\x02\x02\x02\u02C5\u02C9\x073\x02\x02\u02C6\u02C7\x074\x02\x02\u02C7" +
		"\u02C9\x05\xACW\x02\u02C8\u02C5\x03\x02\x02\x02\u02C8\u02C6\x03\x02\x02" +
		"\x02\u02C9k\x03\x02\x02\x02\u02CA\u02CB\x07\x0E\x02\x02\u02CB\u02CC\x07" +
		"x\x02\x02\u02CC\u02CE\x05\xACW\x02\u02CD\u02CF\x07L\x02\x02\u02CE\u02CD" +
		"\x03\x02\x02\x02\u02CE\u02CF\x03\x02\x02\x02\u02CF\u02D1\x03\x02\x02\x02" +
		"\u02D0\u02D2\x05n8\x02\u02D1\u02D0\x03\x02\x02\x02\u02D1\u02D2\x03\x02" +
		"\x02\x02\u02D2m\x03\x02\x02\x02\u02D3\u02D7\x073\x02\x02\u02D4\u02D5\x07" +
		"4\x02\x02\u02D5\u02D7\x05\xD6l\x02\u02D6\u02D3\x03\x02\x02\x02\u02D6\u02D4" +
		"\x03\x02\x02\x02\u02D7o\x03\x02\x02\x02\u02D8\u02D9\x07\x0E\x02\x02\u02D9" +
		"\u02DA\x07x\x02\x02\u02DA\u02DC\x05\x80A\x02\u02DB\u02DD\x05n8\x02\u02DC" +
		"\u02DB\x03\x02\x02\x02\u02DC\u02DD\x03\x02\x02\x02\u02DDq\x03\x02\x02" +
		"\x02\u02DE\u02DF\x07\x0E\x02\x02\u02DF\u02E0\x07x\x02\x02\u02E0\u02E2" +
		"\x05\xACW\x02\u02E1\u02E3\x05t;\x02\u02E2\u02E1\x03\x02\x02\x02\u02E2" +
		"\u02E3\x03\x02\x02\x02\u02E3s\x03\x02\x02\x02\u02E4\u02E8\x073\x02\x02" +
		"\u02E5\u02E6\x074\x02\x02\u02E6\u02E8\x05\x82B\x02\u02E7\u02E4\x03\x02" +
		"\x02\x02\u02E7\u02E5\x03\x02\x02\x02\u02E8u\x03\x02\x02\x02\u02E9\u02EC" +
		"\x05z>\x02\u02EA\u02EC\x05x=\x02\u02EB\u02E9\x03\x02\x02\x02\u02EB\u02EA" +
		"\x03\x02\x02\x02\u02ECw\x03\x02\x02\x02\u02ED\u02EE\x05z>\x02\u02EE\u02EF" +
		"\x05\u010C\x87\x02\u02EFy\x03\x02\x02\x02\u02F0\u02F2\x07x\x02\x02\u02F1" +
		"\u02F3\x07\n\x02\x02\u02F2\u02F1\x03\x02\x02\x02\u02F2\u02F3\x03\x02\x02" +
		"\x02\u02F3{\x03\x02\x02\x02\u02F4\u02F5\x07\x16\x02\x02\u02F5\u02F6\x05" +
		"~@\x02\u02F6\u02F7\x07\x17\x02\x02\u02F7}\x03\x02\x02\x02\u02F8\u02FF" +
		"\x05\x86D\x02\u02F9\u02FA\x07\x18\x02\x02\u02FA\u02FD\x07\f\x02\x02\u02FB" +
		"\u02FC\x07\x18\x02\x02\u02FC\u02FE\x05\x88E\x02\u02FD\u02FB\x03\x02\x02" +
		"\x02\u02FD\u02FE\x03\x02\x02\x02\u02FE\u0300\x03\x02\x02\x02\u02FF\u02F9" +
		"\x03\x02\x02\x02\u02FF\u0300\x03\x02\x02\x02\u0300\u0307\x03\x02\x02\x02" +
		"\u0301\u0304\x07\f\x02\x02\u0302\u0303\x07\x18\x02\x02\u0303\u0305\x05" +
		"\x88E\x02\u0304\u0302\x03\x02\x02\x02\u0304\u0305\x03\x02\x02\x02\u0305" +
		"\u0307\x03\x02\x02\x02\u0306\u02F8\x03\x02\x02\x02\u0306\u0301\x03\x02" +
		"\x02\x02\u0307\x7F\x03\x02\x02\x02\u0308\u0309\x07\x0E\x02\x02\u0309\u030A" +
		"\x07x\x02\x02\u030A\u0310\x03\x02\x02\x02\u030B\u030C\x07\n\x02\x02\u030C" +
		"\u030D\x07\x0E\x02\x02\u030D\u030F\x07x\x02\x02\u030E\u030B\x03\x02\x02" +
		"\x02\u030F\u0312\x03\x02\x02\x02\u0310\u030E\x03\x02\x02\x02\u0310\u0311" +
		"\x03\x02\x02\x02\u0311\x81\x03\x02\x02\x02\u0312\u0310\x03\x02\x02\x02" +
		"\u0313\u0314\x07\x16\x02\x02\u0314\u0315\x05\x84C\x02\u0315\u0316\x07" +
		"\x17\x02\x02\u0316\x83\x03\x02\x02\x02\u0317\u031E\x05\x86D\x02\u0318" +
		"\u0319\x07\x18\x02\x02\u0319\u031C\x07\f\x02\x02\u031A\u031B\x07\x18\x02" +
		"\x02\u031B\u031D\x05\x88E\x02\u031C\u031A\x03\x02\x02\x02\u031C\u031D" +
		"\x03\x02\x02\x02\u031D\u031F\x03\x02\x02\x02\u031E\u0318\x03\x02\x02\x02" +
		"\u031E\u031F\x03\x02\x02\x02\u031F\x85\x03\x02\x02\x02\u0320\u0321\x05" +
		"\x8AF\x02\u0321\x87\x03\x02\x02\x02\u0322\u0323\x05\x8AF\x02\u0323\x89" +
		"\x03\x02\x02\x02\u0324\u0328\x05\x8CG\x02\u0325\u0326\x079\x02\x02\u0326" +
		"\u0328\x05\x8EH\x02\u0327\u0324\x03\x02\x02\x02\u0327\u0325\x03\x02\x02" +
		"\x02\u0328\x8B\x03\x02\x02\x02\u0329\u032F\x05\x90I\x02\u032A\u032B\x05" +
		"\x92J\x02\u032B\u032C\x05\x90I\x02\u032C\u032E\x03\x02\x02\x02\u032D\u032A" +
		"\x03\x02\x02\x02\u032E\u0331\x03\x02\x02\x02\u032F\u032D\x03\x02\x02\x02" +
		"\u032F\u0330\x03\x02\x02\x02\u0330\x8D\x03\x02\x02\x02\u0331\u032F\x03" +
		"\x02\x02\x02\u0332\u0333\x07:\x02\x02\u0333\u0334\x05\x96L\x02\u0334\x8F" +
		"\x03\x02\x02\x02\u0335\u033B\x05\x9AN\x02\u0336\u0337\x05\x94K\x02\u0337" +
		"\u0338\x05\x9AN\x02\u0338\u033A\x03\x02\x02\x02\u0339\u0336\x03\x02\x02" +
		"\x02\u033A\u033D\x03\x02\x02\x02\u033B\u0339\x03\x02\x02\x02\u033B\u033C" +
		"\x03\x02\x02\x02\u033C\x91\x03\x02\x02\x02\u033D\u033B\x03\x02\x02\x02" +
		"\u033E\u033F\t\x05\x02\x02\u033F\x93\x03\x02\x02\x02\u0340\u0341\t\x06" +
		"\x02\x02\u0341\x95\x03\x02\x02\x02\u0342\u0343\x05\x9CO\x02\u0343\x97" +
		"\x03\x02\x02\x02\u0344\u0347\x05v<\x02\u0345\u0347\x05z>\x02\u0346\u0344" +
		"\x03\x02\x02\x02\u0346\u0345\x03\x02\x02\x02\u0347\x99\x03\x02\x02\x02" +
		"\u0348\u034A\x05\x96L\x02\u0349\u034B\x05\x8EH\x02\u034A\u0349\x03\x02" +
		"\x02\x02\u034A\u034B\x03\x02\x02\x02\u034B\x9B\x03\x02\x02\x02\u034C\u034F" +
		"\x05\xD6l\x02\u034D\u034F\x07@\x02\x02\u034E\u034C\x03\x02\x02\x02\u034E" +
		"\u034D\x03\x02\x02\x02\u034F\u0351\x03\x02\x02\x02\u0350\u0352\x07\x0F" +
		"\x02\x02\u0351\u0350\x03\x02\x02\x02\u0351\u0352\x03\x02\x02\x02\u0352" +
		"\u0353\x03\x02\x02\x02\u0353\u0355\x07\v\x02\x02\u0354\u0356\x07\x0F\x02" +
		"\x02\u0355\u0354\x03\x02\x02\x02\u0355\u0356\x03\x02\x02\x02\u0356\u0359" +
		"\x03\x02\x02\x02\u0357\u035A\x05\xD6l\x02\u0358\u035A\x07A\x02\x02\u0359" +
		"\u0357\x03\x02\x02\x02\u0359\u0358\x03\x02\x02\x02\u035A\u0360\x03\x02" +
		"\x02\x02\u035B\u0360\x05@!\x02\u035C\u035D\x07H\x02\x02\u035D\u0360\x05" +
		"\xD6l\x02\u035E\u0360\x05\xD6l\x02\u035F\u034E\x03\x02\x02\x02\u035F\u035B" +
		"\x03\x02\x02\x02\u035F\u035C\x03\x02\x02\x02\u035F\u035E\x03\x02\x02\x02" +
		"\u0360\x9D\x03\x02\x02\x02\u0361\u0362\x07\x0E\x02\x02\u0362\u0363\x07" +
		"x\x02\x02\u0363\u0365\x05\x80A\x02\u0364\u0366\x05t;\x02\u0365\u0364\x03" +
		"\x02\x02\x02\u0365\u0366\x03\x02\x02\x02\u0366\x9F\x03\x02\x02\x02\u0367" +
		"\u0368\x07\x0E\x02\x02\u0368\u0369\x07x\x02\x02\u0369\u036B\x05P)\x02" +
		"\u036A\u036C\x05\xA2R\x02\u036B\u036A\x03\x02\x02\x02\u036B\u036C\x03" +
		"\x02\x02\x02\u036C\xA1\x03\x02\x02\x02\u036D\u0371\x073\x02\x02\u036E" +
		"\u036F\x074\x02\x02\u036F\u0371\x05v<\x02\u0370\u036D\x03\x02\x02\x02" +
		"\u0370\u036E\x03\x02\x02\x02\u0371\xA3\x03\x02\x02\x02\u0372\u0373\x07" +
		"\x0E\x02\x02\u0373\u0374\x07x\x02\x02\u0374\u0376\x05P)\x02\u0375\u0377" +
		"\x05\xA6T\x02\u0376\u0375\x03\x02\x02\x02\u0376\u0377\x03\x02\x02\x02" +
		"\u0377\xA5\x03\x02\x02\x02\u0378\u037C\x073\x02\x02\u0379\u037A\x074\x02" +
		"\x02\u037A\u037C\x05|?\x02\u037B\u0378\x03\x02\x02\x02\u037B\u0379\x03" +
		"\x02\x02\x02\u037C\xA7\x03\x02\x02\x02\u037D\u037E\x07\x06\x02\x02\u037E" +
		"\u037F\x05\xACW\x02\u037F\xA9\x03\x02\x02\x02\u0380\u0381\x05\xACW\x02" +
		"\u0381\u0382\x07\x06\x02\x02\u0382\u0383\x05\xD6l\x02\u0383\xAB\x03\x02" +
		"\x02\x02\u0384\u0387\x05\xAEX\x02\u0385\u0387\x05\xBA^\x02\u0386\u0384" +
		"\x03\x02\x02\x02\u0386\u0385\x03\x02\x02\x02\u0387\u038B\x03\x02\x02\x02" +
		"\u0388\u038A\x05\xBE`\x02\u0389\u0388\x03\x02\x02\x02\u038A\u038D\x03" +
		"\x02\x02\x02\u038B\u0389\x03\x02\x02\x02\u038B\u038C\x03\x02\x02\x02\u038C" +
		"\xAD\x03\x02\x02\x02\u038D\u038B\x03\x02\x02\x02\u038E\u039D\x05\u0124" +
		"\x93\x02\u038F\u039D\x05\u0126\x94\x02\u0390\u039D\x05\xB0Y\x02\u0391" +
		"\u039D\x05\xE8u\x02\u0392\u039D\x05\xFA~\x02\u0393\u039D\x05\u0116\x8C" +
		"\x02\u0394\u039D\x05$\x13\x02\u0395\u039D\x05> \x02\u0396\u039D\x05\xB6" +
		"\\\x02\u0397\u039D\x05\xB8]\x02\u0398\u039D\x05\u011A\x8E\x02\u0399\u039D" +
		"\x05\xB4[\x02\u039A\u039D\x07\x07\x02\x02\u039B\u039D\x071\x02\x02\u039C" +
		"\u038E\x03\x02\x02\x02\u039C\u038F\x03\x02\x02\x02\u039C\u0390\x03\x02" +
		"\x02\x02\u039C\u0391\x03\x02\x02\x02\u039C\u0392\x03\x02\x02\x02\u039C" +
		"\u0393\x03\x02\x02\x02\u039C\u0394\x03\x02\x02\x02\u039C\u0395\x03\x02" +
		"\x02\x02\u039C\u0396\x03\x02\x02\x02\u039C\u0397\x03\x02\x02\x02\u039C" +
		"\u0398\x03\x02\x02\x02\u039C\u0399\x03\x02\x02\x02\u039C\u039A\x03\x02" +
		"\x02\x02\u039C\u039B\x03\x02\x02\x02\u039D\xAF\x03\x02\x02\x02\u039E\u039F" +
		"\x05\xB2Z\x02\u039F\xB1\x03\x02\x02\x02\u03A0\u03A1\t\x07\x02\x02\u03A1" +
		"\xB3\x03\x02\x02\x02\u03A2\u03A3\x05P)\x02\u03A3\u03A4\x07\n\x02\x02\u03A4" +
		"\u03A5\x05\x80A\x02\u03A5\xB5\x03\x02\x02\x02\u03A6\u03A7\x077\x02\x02" +
		"\u03A7\u03AC\x07\x16\x02\x02\u03A8\u03A9\x05&\x14\x02\u03A9\u03AA\x05" +
		"(\x15\x02\u03AA\u03AD\x03\x02\x02\x02\u03AB\u03AD\x05*\x16\x02\u03AC\u03A8" +
		"\x03\x02\x02\x02\u03AC\u03AB\x03\x02\x02\x02\u03AC\u03AD\x03\x02\x02\x02" +
		"\u03AD\u03AE\x03\x02\x02\x02\u03AE\u03AF\x07\x17\x02\x02\u03AF\xB7\x03" +
		"\x02\x02\x02\u03B0\u03B3\x077\x02\x02\u03B1\u03B4\x05\xBE`\x02\u03B2\u03B4" +
		"\x05@!\x02\u03B3\u03B1\x03\x02\x02\x02\u03B3\u03B2\x03\x02\x02\x02\u03B3" +
		"\u03B4\x03\x02\x02\x02\u03B4\u03B5\x03\x02\x02\x02\u03B5\u03B8\x076\x02" +
		"\x02\u03B6\u03B9\x05\xACW\x02\u03B7\u03B9\x05\xF8}\x02\u03B8\u03B6\x03" +
		"\x02\x02\x02\u03B8\u03B7\x03\x02\x02\x02\u03B9\xB9\x03\x02\x02\x02\u03BA" +
		"\u03BB\x05\xBC_\x02\u03BB\xBB\x03\x02\x02\x02\u03BC\u03BF\x07x\x02\x02" +
		"\u03BD\u03BE\x07\n\x02\x02\u03BE\u03C0\x07x\x02\x02\u03BF\u03BD\x03\x02" +
		"\x02\x02\u03BF\u03C0\x03\x02\x02\x02\u03C0\u03C2\x03\x02\x02\x02\u03C1" +
		"\u03C3\x05\u010C\x87\x02\u03C2\u03C1\x03\x02\x02\x02\u03C2\u03C3\x03\x02" +
		"\x02\x02\u03C3\xBD\x03\x02\x02\x02\u03C4\u03C5\x07\x19\x02\x02\u03C5\u03C7" +
		"\x05\xC0a\x02\u03C6\u03C8\x05\u0110\x89\x02\u03C7\u03C6\x03\x02\x02\x02" +
		"\u03C7\u03C8\x03\x02\x02\x02\u03C8\u03C9\x03\x02\x02\x02\u03C9\u03CA\x07" +
		"\x1A\x02\x02\u03CA\xBF\x03\x02\x02\x02\u03CB\u03CE\x05\xC4c\x02\u03CC" +
		"\u03CE\x05\xD4k\x02\u03CD\u03CB\x03\x02\x02\x02\u03CD\u03CC\x03\x02\x02" +
		"\x02\u03CE\xC1\x03\x02\x02\x02\u03CF\u03D0\x07k\x02\x02\u03D0\u03D1\x07" +
		"l\x02\x02\u03D1\u03D2\x07\x16\x02\x02\u03D2\u03D7\x05\xC6d\x02\u03D3\u03D4" +
		"\x07\x18\x02\x02\u03D4\u03D6\x05\xC6d\x02\u03D5\u03D3\x03\x02\x02\x02" +
		"\u03D6\u03D9\x03\x02\x02\x02\u03D7\u03D5\x03\x02\x02\x02\u03D7\u03D8\x03" +
		"\x02\x02\x02\u03D8\u03DA\x03\x02\x02\x02\u03D9\u03D7\x03\x02\x02\x02\u03DA" +
		"\u03DB\x07\x17\x02\x02\u03DB\xC3\x03\x02\x02\x02\u03DC\u03E0\x05\xC2b" +
		"\x02\u03DD\u03E0\x05\xC8e\x02\u03DE\u03E0\x05\xCCg\x02\u03DF\u03DC\x03" +
		"\x02\x02\x02\u03DF\u03DD\x03\x02\x02\x02\u03DF\u03DE\x03\x02\x02\x02\u03E0" +
		"\xC5\x03\x02\x02\x02\u03E1\u03E7\x05J&\x02\u03E2\u03E3\x07_\x02\x02\u03E3" +
		"\u03E8\x05\xD6l\x02\u03E4\u03E8\x05\x82B\x02\u03E5\u03E8\x05v<\x02\u03E6" +
		"\u03E8\x05|?\x02\u03E7\u03E2\x03\x02\x02\x02\u03E7\u03E4\x03\x02\x02\x02" +
		"\u03E7\u03E5\x03\x02\x02\x02\u03E7\u03E6\x03\x02\x02\x02\u03E7\u03E8\x03" +
		"\x02\x02\x02\u03E8\xC7\x03\x02\x02\x02\u03E9\u03EA\x05\u011C\x8F\x02\u03EA" +
		"\xC9\x03\x02\x02\x02\u03EB\u03EC\x05|?\x02\u03EC\xCB\x03\x02\x02\x02\u03ED" +
		"\u03EE\x07/\x02\x02\u03EE\u03FF\x05\xACW\x02\u03EF\u03F0\x07n\x02\x02" +
		"\u03F0\u03F1\x07l\x02\x02\u03F1\u03FF\x05\xD6l\x02\u03F2\u03F3\x07/\x02" +
		"\x02\u03F3\u03F4\x05\xACW\x02\u03F4\u03F5\x07n\x02\x02\u03F5\u03F6\x07" +
		"l\x02\x02\u03F6\u03F7\x05\xD6l\x02\u03F7\u03FF\x03\x02\x02\x02\u03F8\u03F9" +
		"\x07D\x02\x02\u03F9\u03FA\x075\x02\x02\u03FA\u03FB\x07\x16\x02\x02\u03FB" +
		"\u03FC\x05\xCEh\x02\u03FC\u03FD\x07\x17\x02\x02\u03FD\u03FF\x03\x02\x02" +
		"\x02\u03FE\u03ED\x03\x02\x02\x02\u03FE\u03EF\x03\x02\x02\x02\u03FE\u03F2" +
		"\x03\x02\x02\x02\u03FE\u03F8\x03\x02\x02\x02\u03FF\xCD\x03\x02\x02\x02" +
		"\u0400\u0402\x05\xD0i\x02\u0401\u0400\x03\x02\x02\x02\u0401\u0402\x03" +
		"\x02\x02\x02\u0402\u0409\x03\x02\x02\x02\u0403\u0404\x07\x18\x02\x02\u0404" +
		"\u0407\x07\f\x02\x02\u0405\u0406\x07\x18\x02\x02\u0406\u0408\x05\xD0i" +
		"\x02\u0407\u0405\x03\x02\x02\x02\u0407\u0408\x03\x02\x02\x02\u0408\u040A" +
		"\x03\x02\x02\x02\u0409\u0403\x03\x02\x02\x02\u0409\u040A\x03\x02\x02\x02" +
		"\u040A\u0411\x03\x02\x02\x02\u040B\u040E\x07\f\x02\x02\u040C\u040D\x07" +
		"\x18\x02\x02\u040D\u040F\x05\xD0i\x02\u040E\u040C\x03\x02\x02\x02\u040E" +
		"\u040F\x03\x02\x02\x02\u040F\u0411\x03\x02\x02\x02\u0410\u0401\x03\x02" +
		"\x02\x02\u0410\u040B\x03\x02\x02\x02\u0411\xCF\x03\x02\x02\x02\u0412\u0417" +
		"\x05\xD2j\x02\u0413\u0414\x07\x18\x02\x02\u0414\u0416\x05\xD2j\x02\u0415" +
		"\u0413\x03\x02\x02\x02\u0416\u0419\x03\x02\x02\x02\u0417\u0415\x03\x02" +
		"\x02\x02\u0417\u0418\x03\x02\x02\x02\u0418\xD1\x03\x02\x02\x02\u0419\u0417" +
		"\x03\x02\x02\x02\u041A\u041B\x07x\x02\x02\u041B\u041C\t\b\x02\x02\u041C" +
		"\xD3\x03\x02\x02\x02\u041D\u041E\x05\x84C\x02\u041E\xD5\x03\x02\x02\x02" +
		"\u041F\u0420\x05\xD8m\x02\u0420\xD7\x03\x02\x02\x02\u0421\u0429\x05\xE4" +
		"s\x02\u0422\u0429\x05\xE0q\x02\u0423\u0429\x05\xE2r\x02\u0424\u0429\x05" +
		"\xDAn\x02\u0425\u0429\x05\u012C\x97\x02\u0426\u0429\x07w\x02\x02\u0427" +
		"\u0429\x07u\x02\x02\u0428\u0421\x03\x02\x02\x02\u0428\u0422\x03\x02\x02" +
		"\x02\u0428\u0423\x03\x02\x02\x02\u0428\u0424\x03\x02\x02\x02\u0428\u0425" +
		"\x03\x02\x02\x02\u0428\u0426\x03\x02\x02\x02\u0428\u0427\x03\x02\x02\x02" +
		"\u0429\xD9\x03\x02\x02\x02\u042A\u042B\x07\x16\x02\x02\u042B\u042C\x05" +
		"\xDCo\x02\u042C\u042D\x07\x17\x02\x02\u042D\xDB\x03\x02\x02\x02\u042E" +
		"\u0432\x05\xDEp\x02\u042F\u0431\x05\xDEp\x02\u0430\u042F\x03\x02\x02\x02" +
		"\u0431\u0434\x03\x02\x02\x02\u0432\u0430\x03\x02\x02\x02\u0432\u0433\x03" +
		"\x02\x02\x02\u0433\xDD\x03\x02\x02\x02\u0434\u0432\x03\x02\x02\x02\u0435" +
		"\u0445\x07r\x02\x02\u0436\u043D\x07x\x02\x02\u0437\u043A\x07\x19\x02\x02" +
		"\u0438\u043B\x07r\x02\x02\u0439\u043B\x05\u0106\x84\x02\u043A\u0438\x03" +
		"\x02\x02\x02\u043A\u0439\x03\x02\x02\x02\u043B\u043C\x03\x02\x02\x02\u043C" +
		"\u043E\x07\x1A\x02\x02\u043D\u0437\x03\x02\x02\x02\u043D\u043E\x03\x02" +
		"\x02\x02\u043E\u0445\x03\x02\x02\x02\u043F\u0445\x05\u0106\x84\x02\u0440" +
		"\u0442\x05\xAEX\x02\u0441\u0443\x05\xBE`\x02\u0442\u0441\x03\x02\x02\x02" +
		"\u0442\u0443\x03\x02\x02\x02\u0443\u0445\x03\x02\x02\x02\u0444\u0435\x03" +
		"\x02\x02\x02\u0444\u0436\x03\x02\x02\x02\u0444\u043F\x03\x02\x02\x02\u0444" +
		"\u0440\x03\x02\x02\x02\u0445\xDF\x03\x02\x02\x02\u0446\u0449\x05\xE6t" +
		"\x02\u0447\u0449\x07x\x02\x02\u0448\u0446\x03\x02\x02\x02\u0448\u0447" +
		"\x03\x02\x02\x02\u0449\xE1\x03\x02\x02\x02\u044A\u044B\x07x\x02\x02\u044B" +
		"\u044C\x07_\x02\x02\u044C\u044D\x05\xD6l\x02\u044D\xE3\x03\x02\x02\x02" +
		"\u044E\u044F\x07x\x02\x02\u044F\xE5\x03\x02\x02\x02\u0450\u0452\x07\x1B" +
		"\x02\x02\u0451\u0450\x03\x02\x02\x02\u0451\u0452\x03\x02\x02\x02\u0452" +
		"\u0453\x03\x02\x02\x02\u0453\u0454\x07r\x02\x02\u0454\xE7\x03\x02\x02" +
		"\x02\u0455\u0456\x07`\x02\x02\u0456\u0457\x07\x16\x02\x02\u0457\u0458" +
		"\x05\xEAv\x02\u0458\u0459\x07\x17\x02\x02\u0459\xE9\x03";
	private static readonly _serializedATNSegment2: string =
		"\x02\x02\x02\u045A\u0460\x05\xF4{\x02\u045B\u045C\x07\x18\x02\x02\u045C" +
		"\u045D\x05&\x14\x02\u045D\u045E\x05\xECw\x02\u045E\u045F\x05(\x15\x02" +
		"\u045F\u0461\x03\x02\x02\x02\u0460\u045B\x03\x02\x02\x02\u0460\u0461\x03" +
		"\x02\x02\x02\u0461\xEB\x03\x02\x02\x02\u0462\u0463\x07\x18\x02\x02\u0463" +
		"\u0465\x05\xEEx\x02\u0464\u0462\x03\x02\x02\x02\u0464\u0465\x03\x02\x02" +
		"\x02\u0465\xED\x03\x02\x02\x02\u0466\u046B\x05\xF0y\x02\u0467\u0468\x07" +
		"\x18\x02\x02\u0468\u046A\x05\xF0y\x02\u0469\u0467\x03\x02\x02\x02\u046A" +
		"\u046D\x03\x02\x02\x02\u046B\u0469\x03\x02\x02\x02\u046B\u046C\x03\x02" +
		"\x02\x02\u046C\xEF\x03\x02\x02\x02\u046D\u046B\x03\x02\x02\x02\u046E\u0471" +
		"\x05\xF2z\x02\u046F\u0471\x05\xF8}\x02\u0470\u046E\x03\x02\x02\x02\u0470" +
		"\u046F\x03\x02\x02\x02\u0471\xF1\x03\x02\x02\x02\u0472\u0473\x07]\x02" +
		"\x02\u0473\u0474\x05<\x1F\x02\u0474\u0475\x05\xF6|\x02\u0475\u0476\x07" +
		"^\x02\x02\u0476\xF3\x03\x02\x02\x02\u0477\u0478\x05\xF6|\x02\u0478\xF5" +
		"\x03\x02\x02\x02\u0479\u047E\x05\xF8}\x02\u047A\u047B\x07\x18\x02\x02" +
		"\u047B\u047D\x05\xF8}\x02\u047C\u047A\x03\x02\x02\x02\u047D\u0480\x03" +
		"\x02\x02\x02\u047E\u047C\x03\x02\x02\x02\u047E\u047F\x03\x02\x02\x02\u047F" +
		"\xF7\x03\x02\x02\x02\u0480\u047E\x03\x02\x02\x02\u0481\u0482\x07x\x02" +
		"\x02\u0482\u0483\x05\xACW\x02\u0483\xF9\x03\x02\x02\x02\u0484\u0485\x07" +
		")\x02\x02\u0485\u0486\x07\x16\x02\x02\u0486\u0487\x05\xFC\x7F\x02\u0487" +
		"\u0488\x07\x17\x02\x02\u0488\xFB\x03\x02\x02\x02\u0489\u0493\x05\xFE\x80" +
		"\x02\u048A\u048B\x07\x18\x02\x02\u048B\u048D\x07\f\x02\x02\u048C\u048E" +
		"\x05\u0110\x89\x02\u048D\u048C\x03\x02\x02\x02\u048D\u048E\x03\x02\x02" +
		"\x02\u048E\u0491\x03\x02\x02\x02\u048F\u0490\x07\x18\x02\x02\u0490\u0492" +
		"\x05\u0114\x8B\x02\u0491\u048F\x03\x02\x02\x02\u0491\u0492\x03\x02\x02" +
		"\x02\u0492\u0494\x03\x02\x02\x02\u0493\u048A\x03\x02\x02\x02\u0493\u0494" +
		"\x03\x02\x02\x02\u0494\xFD\x03\x02\x02\x02\u0495\u0496\x05\u0100\x81\x02" +
		"\u0496\xFF\x03\x02\x02\x02\u0497\u049C\x05\u0102\x82\x02\u0498\u0499\x07" +
		"\x18\x02\x02\u0499\u049B\x05\u0102\x82\x02\u049A\u0498\x03\x02\x02\x02" +
		"\u049B\u049E\x03\x02\x02\x02\u049C\u049A\x03\x02\x02\x02\u049C\u049D\x03" +
		"\x02\x02\x02\u049D\u0101\x03\x02\x02\x02\u049E\u049C\x03\x02\x02\x02\u049F" +
		"\u04A3\x07x\x02\x02\u04A0\u04A3\x05\u0104\x83\x02\u04A1\u04A3\x05\xD6" +
		"l\x02\u04A2\u049F\x03\x02\x02\x02\u04A2\u04A0\x03\x02\x02\x02\u04A2\u04A1" +
		"\x03\x02\x02\x02\u04A3\u0103\x03\x02\x02\x02\u04A4\u04A5\x07x\x02\x02" +
		"\u04A5\u04A8\x07\x19\x02\x02\u04A6\u04A9\x05\xE6t\x02\u04A7\u04A9\x05" +
		"\u0106\x84\x02\u04A8\u04A6\x03\x02\x02\x02\u04A8\u04A7\x03\x02\x02\x02" +
		"\u04A9\u04AA\x03\x02\x02\x02\u04AA\u04AB\x07\x1A\x02\x02\u04AB\u0105\x03" +
		"\x02\x02\x02\u04AC\u04AD\x05\u0108\x85\x02\u04AD\u0107\x03\x02\x02\x02" +
		"\u04AE\u04B0\x05\u010A\x86\x02\u04AF\u04B1\x05\u010C\x87\x02\u04B0\u04AF" +
		"\x03\x02\x02\x02\u04B0\u04B1\x03\x02\x02\x02\u04B1\u0109\x03\x02\x02\x02" +
		"\u04B2\u04B5\x07x\x02\x02\u04B3\u04B4\x07\n\x02\x02\u04B4\u04B6\x07x\x02" +
		"\x02\u04B5\u04B3\x03\x02\x02\x02\u04B5\u04B6\x03\x02\x02\x02\u04B6\u010B" +
		"\x03\x02\x02\x02\u04B7\u04B8\x07\x16\x02\x02\u04B8\u04BD\x05\u010E\x88" +
		"\x02\u04B9\u04BA\x07\x18\x02\x02\u04BA\u04BC\x05\u010E\x88\x02\u04BB\u04B9" +
		"\x03\x02\x02\x02\u04BC\u04BF\x03\x02\x02\x02\u04BD\u04BB\x03\x02\x02\x02" +
		"\u04BD\u04BE\x03\x02\x02\x02\u04BE\u04C0\x03\x02\x02\x02\u04BF\u04BD\x03" +
		"\x02\x02\x02\u04C0\u04C1\x07\x17\x02\x02\u04C1\u010D\x03\x02\x02\x02\u04C2" +
		"\u04C5\x05\xACW\x02\u04C3\u04C5\x05\xD6l\x02\u04C4\u04C2\x03\x02\x02\x02" +
		"\u04C4\u04C3\x03\x02\x02\x02\u04C5\u010F\x03\x02\x02\x02\u04C6\u04C7\x07" +
		"8\x02\x02\u04C7\u04C8\x05\u0112\x8A\x02\u04C8\u0111\x03\x02\x02\x02\u04C9" +
		"\u04D0\x05\xE6t\x02\u04CA\u04D0\x05\u0106\x84\x02\u04CB\u04CC\x05\xAC" +
		"W\x02\u04CC\u04CD\x07_\x02\x02\u04CD\u04CE\x05\xD6l\x02\u04CE\u04D0\x03" +
		"\x02\x02\x02\u04CF\u04C9\x03\x02\x02\x02\u04CF\u04CA\x03\x02\x02\x02\u04CF" +
		"\u04CB\x03\x02\x02\x02\u04D0\u0113\x03\x02\x02\x02\u04D1\u04D2\x05\u0100" +
		"\x81\x02\u04D2\u0115\x03\x02\x02\x02\u04D3\u04D8\x07\x15\x02\x02\u04D4" +
		"\u04D5\x07\x16\x02\x02\u04D5\u04D6\x05\u0118\x8D\x02\u04D6\u04D7\x07\x17" +
		"\x02\x02\u04D7\u04D9\x03\x02\x02\x02\u04D8\u04D4\x03\x02\x02\x02\u04D8" +
		"\u04D9\x03\x02\x02\x02\u04D9\u0117\x03\x02\x02\x02\u04DA\u04DF\x05\u0104" +
		"\x83\x02\u04DB\u04DC\x07\x18\x02\x02\u04DC\u04DE\x05\u0104\x83\x02\u04DD" +
		"\u04DB\x03\x02\x02\x02\u04DE\u04E1\x03\x02\x02\x02\u04DF\u04DD\x03\x02" +
		"\x02\x02\u04DF\u04E0\x03\x02\x02\x02\u04E0\u0119\x03\x02\x02\x02\u04E1" +
		"\u04DF\x03\x02\x02\x02\u04E2\u04E3\x07g\x02\x02\u04E3\u04E4\x07h\x02\x02" +
		"\u04E4\u011B\x03\x02\x02\x02\u04E5\u04E6\x07\x16\x02\x02\u04E6\u04E9\x07" +
		"x\x02\x02\u04E7\u04E8\x07\n\x02\x02\u04E8\u04EA\x07x\x02\x02\u04E9\u04E7" +
		"\x03\x02\x02\x02\u04E9\u04EA\x03\x02\x02\x02\u04EA\u04EB\x03\x02\x02\x02" +
		"\u04EB\u04F7\x07\x17\x02\x02\u04EC\u04ED\x07\x16\x02\x02\u04ED\u04F2\x05" +
		"\u011E\x90\x02\u04EE\u04EF\x07\x18\x02\x02\u04EF\u04F1\x05\u011E\x90\x02" +
		"\u04F0\u04EE\x03\x02\x02\x02\u04F1\u04F4\x03\x02\x02\x02\u04F2\u04F0\x03" +
		"\x02\x02\x02\u04F2\u04F3\x03\x02\x02\x02\u04F3\u04F5\x03\x02\x02\x02\u04F4" +
		"\u04F2\x03\x02\x02\x02\u04F5\u04F6\x07\x17\x02\x02\u04F6\u04F8\x03\x02" +
		"\x02\x02\u04F7\u04EC\x03\x02\x02\x02\u04F7\u04F8\x03\x02\x02\x02\u04F8" +
		"\u011D\x03\x02\x02\x02\u04F9\u04FD\x07\x04\x02\x02\u04FA\u04FB\x07m\x02" +
		"\x02\u04FB\u04FD\x05\u0120\x91\x02\u04FC\u04F9\x03\x02\x02\x02\u04FC\u04FA" +
		"\x03\x02\x02\x02\u04FD\u04FE\x03\x02\x02\x02\u04FE\u04FF\x05\u0122\x92" +
		"\x02\u04FF\u011F\x03\x02\x02\x02\u0500\u0501\x07\n\x02\x02\u0501\u0503" +
		"\x05\u0120\x91\x02\u0502\u0500\x03\x02\x02\x02\u0502\u0503\x03\x02\x02" +
		"\x02\u0503\u0121\x03\x02\x02\x02\u0504\u0509\x07x\x02\x02\u0505\u0506" +
		"\x07\n\x02\x02\u0506\u0508\x07x\x02\x02\u0507\u0505\x03\x02\x02\x02\u0508" +
		"\u050B\x03\x02\x02\x02\u0509\u0507\x03\x02\x02\x02\u0509\u050A\x03\x02" +
		"\x02\x02\u050A\u0123\x03\x02\x02\x02\u050B\u0509\x03\x02\x02\x02\u050C" +
		"\u050D\x070\x02\x02\u050D\u050E\x07.\x02\x02\u050E\u0125\x03\x02\x02\x02" +
		"\u050F\u0510\x07-\x02\x02\u0510\u0511\x07.\x02\x02\u0511\u0516\x03\x02" +
		"\x02\x02\u0512\u0513\x07\x16\x02\x02\u0513\u0514\x05\u0128\x95\x02\u0514" +
		"\u0515\x07\x17\x02\x02\u0515\u0517\x03\x02\x02\x02\u0516\u0512\x03\x02" +
		"\x02\x02\u0516\u0517\x03\x02\x02\x02\u0517\u0127\x03\x02\x02\x02\u0518" +
		"\u051D\x05\u012A\x96\x02\u0519\u051A\x07\x18\x02\x02\u051A\u051C\x05\u012A" +
		"\x96\x02\u051B\u0519\x03\x02\x02\x02\u051C\u051F\x03\x02\x02\x02\u051D" +
		"\u051B\x03\x02\x02\x02\u051D\u051E\x03\x02\x02\x02\u051E\u0129\x03\x02" +
		"\x02\x02\u051F\u051D\x03\x02\x02\x02\u0520\u0521\x07x\x02\x02\u0521\u0524" +
		"\x07\x19\x02\x02\u0522\u0525\x07r\x02\x02\u0523\u0525\x05\u0106\x84\x02" +
		"\u0524\u0522\x03\x02\x02\x02\u0524\u0523\x03\x02\x02\x02\u0525\u0526\x03" +
		"\x02\x02\x02\u0526\u0527\x07\x1A\x02\x02\u0527\u012B\x03\x02\x02\x02\u0528" +
		"\u0529\t\t\x02\x02\u0529\u012D\x03\x02\x02\x02\x9F\u0131\u013B\u013F\u014B" +
		"\u014F\u0155\u015E\u0161\u0167\u016A\u0170\u0181\u0187\u018D\u0195\u019D" +
		"\u01A3\u01A7\u01AB\u01B0\u01B5\u01BA\u01C0\u01C6\u01C8\u01CA\u01CF\u01D5" +
		"\u01DB\u01DD\u01DF\u01E6\u01EB\u01F2\u01F7\u01FD\u0202\u0207\u020C\u0212" +
		"\u0218\u021E\u0222\u0227\u0231\u0238\u023A\u0242\u024A\u0250\u0254\u025B" +
		"\u025F\u0264\u0273\u0278\u0282\u0288\u028E\u0294\u029E\u02A2\u02A5\u02A8" +
		"\u02AA\u02B1\u02B3\u02BA\u02BC\u02BE\u02C3\u02C8\u02CE\u02D1\u02D6\u02DC" +
		"\u02E2\u02E7\u02EB\u02F2\u02FD\u02FF\u0304\u0306\u0310\u031C\u031E\u0327" +
		"\u032F\u033B\u0346\u034A\u034E\u0351\u0355\u0359\u035F\u0365\u036B\u0370" +
		"\u0376\u037B\u0386\u038B\u039C\u03AC\u03B3\u03B8\u03BF\u03C2\u03C7\u03CD" +
		"\u03D7\u03DF\u03E7\u03FE\u0401\u0407\u0409\u040E\u0410\u0417\u0428\u0432" +
		"\u043A\u043D\u0442\u0444\u0448\u0451\u0460\u0464\u046B\u0470\u047E\u048D" +
		"\u0491\u0493\u049C\u04A2\u04A8\u04B0\u04B5\u04BD\u04C4\u04CF\u04D8\u04DF" +
		"\u04E9\u04F2\u04F7\u04FC\u0502\u0509\u0516\u051D\u0524";
	public static readonly _serializedATN: string = Utils.join(
		[
			ASN_3gppParser._serializedATNSegment0,
			ASN_3gppParser._serializedATNSegment1,
			ASN_3gppParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ASN_3gppParser.__ATN) {
			ASN_3gppParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ASN_3gppParser._serializedATN));
		}

		return ASN_3gppParser.__ATN;
	}

}

export class ModulesContext extends ParserRuleContext {
	public moduleDefinition(): ModuleDefinitionContext[];
	public moduleDefinition(i: number): ModuleDefinitionContext;
	public moduleDefinition(i?: number): ModuleDefinitionContext | ModuleDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleDefinitionContext);
		} else {
			return this.getRuleContext(i, ModuleDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_modules; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitModules) {
			return visitor.visitModules(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleDefinitionContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.IDENTIFIER);
		} else {
			return this.getToken(ASN_3gppParser.IDENTIFIER, i);
		}
	}
	public DEFINITIONS_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.DEFINITIONS_LITERAL, 0); }
	public tagDefault(): TagDefaultContext {
		return this.getRuleContext(0, TagDefaultContext);
	}
	public extensionDefault(): ExtensionDefaultContext {
		return this.getRuleContext(0, ExtensionDefaultContext);
	}
	public ASSIGN_OP(): TerminalNode { return this.getToken(ASN_3gppParser.ASSIGN_OP, 0); }
	public BEGIN_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.BEGIN_LITERAL, 0); }
	public moduleBody(): ModuleBodyContext {
		return this.getRuleContext(0, ModuleBodyContext);
	}
	public END_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.END_LITERAL, 0); }
	public L_BRACE(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.L_BRACE, 0); }
	public R_BRACE(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.R_BRACE, 0); }
	public L_PARAN(): TerminalNode[];
	public L_PARAN(i: number): TerminalNode;
	public L_PARAN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.L_PARAN);
		} else {
			return this.getToken(ASN_3gppParser.L_PARAN, i);
		}
	}
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.NUMBER);
		} else {
			return this.getToken(ASN_3gppParser.NUMBER, i);
		}
	}
	public R_PARAN(): TerminalNode[];
	public R_PARAN(i: number): TerminalNode;
	public R_PARAN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.R_PARAN);
		} else {
			return this.getToken(ASN_3gppParser.R_PARAN, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_moduleDefinition; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitModuleDefinition) {
			return visitor.visitModuleDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagDefaultContext extends ParserRuleContext {
	public TAGS_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.TAGS_LITERAL, 0); }
	public EXPLICIT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.EXPLICIT_LITERAL, 0); }
	public IMPLICIT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.IMPLICIT_LITERAL, 0); }
	public AUTOMATIC_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.AUTOMATIC_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_tagDefault; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitTagDefault) {
			return visitor.visitTagDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtensionDefaultContext extends ParserRuleContext {
	public EXTENSIBILITY_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.EXTENSIBILITY_LITERAL, 0); }
	public IMPLIED_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.IMPLIED_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_extensionDefault; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitExtensionDefault) {
			return visitor.visitExtensionDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleBodyContext extends ParserRuleContext {
	public exports(): ExportsContext | undefined {
		return this.tryGetRuleContext(0, ExportsContext);
	}
	public imports(): ImportsContext | undefined {
		return this.tryGetRuleContext(0, ImportsContext);
	}
	public assignmentList(): AssignmentListContext | undefined {
		return this.tryGetRuleContext(0, AssignmentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_moduleBody; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitModuleBody) {
			return visitor.visitModuleBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExportsContext extends ParserRuleContext {
	public EXPORTS_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.EXPORTS_LITERAL, 0); }
	public symbolsExported(): SymbolsExportedContext | undefined {
		return this.tryGetRuleContext(0, SymbolsExportedContext);
	}
	public SEMI_COLON(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.SEMI_COLON, 0); }
	public ALL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.ALL_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_exports; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitExports) {
			return visitor.visitExports(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SymbolsExportedContext extends ParserRuleContext {
	public symbolList(): SymbolListContext | undefined {
		return this.tryGetRuleContext(0, SymbolListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_symbolsExported; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitSymbolsExported) {
			return visitor.visitSymbolsExported(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportsContext extends ParserRuleContext {
	public IMPORTS_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.IMPORTS_LITERAL, 0); }
	public symbolsImported(): SymbolsImportedContext | undefined {
		return this.tryGetRuleContext(0, SymbolsImportedContext);
	}
	public SEMI_COLON(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.SEMI_COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_imports; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitImports) {
			return visitor.visitImports(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SymbolsImportedContext extends ParserRuleContext {
	public symbolsFromModuleList(): SymbolsFromModuleListContext | undefined {
		return this.tryGetRuleContext(0, SymbolsFromModuleListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_symbolsImported; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitSymbolsImported) {
			return visitor.visitSymbolsImported(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SymbolsFromModuleListContext extends ParserRuleContext {
	public symbolsFromModule(): SymbolsFromModuleContext[];
	public symbolsFromModule(i: number): SymbolsFromModuleContext;
	public symbolsFromModule(i?: number): SymbolsFromModuleContext | SymbolsFromModuleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SymbolsFromModuleContext);
		} else {
			return this.getRuleContext(i, SymbolsFromModuleContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_symbolsFromModuleList; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitSymbolsFromModuleList) {
			return visitor.visitSymbolsFromModuleList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SymbolsFromModuleContext extends ParserRuleContext {
	public symbolList(): SymbolListContext {
		return this.getRuleContext(0, SymbolListContext);
	}
	public FROM_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.FROM_LITERAL, 0); }
	public globalModuleReference(): GlobalModuleReferenceContext {
		return this.getRuleContext(0, GlobalModuleReferenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_symbolsFromModule; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitSymbolsFromModule) {
			return visitor.visitSymbolsFromModule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GlobalModuleReferenceContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public assignedIdentifier(): AssignedIdentifierContext {
		return this.getRuleContext(0, AssignedIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_globalModuleReference; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitGlobalModuleReference) {
			return visitor.visitGlobalModuleReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignedIdentifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_assignedIdentifier; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitAssignedIdentifier) {
			return visitor.visitAssignedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SymbolListContext extends ParserRuleContext {
	public symbol(): SymbolContext[];
	public symbol(i: number): SymbolContext;
	public symbol(i?: number): SymbolContext | SymbolContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SymbolContext);
		} else {
			return this.getRuleContext(i, SymbolContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_symbolList; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitSymbolList) {
			return visitor.visitSymbolList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SymbolContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public L_BRACE(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.L_BRACE, 0); }
	public R_BRACE(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.R_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_symbol; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitSymbol) {
			return visitor.visitSymbol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentListContext extends ParserRuleContext {
	public assignment(): AssignmentContext[];
	public assignment(i: number): AssignmentContext;
	public assignment(i?: number): AssignmentContext | AssignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentContext);
		} else {
			return this.getRuleContext(i, AssignmentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_assignmentList; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitAssignmentList) {
			return visitor.visitAssignmentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.IDENTIFIER, 0); }
	public valueAssignment(): ValueAssignmentContext | undefined {
		return this.tryGetRuleContext(0, ValueAssignmentContext);
	}
	public typeAssignment(): TypeAssignmentContext | undefined {
		return this.tryGetRuleContext(0, TypeAssignmentContext);
	}
	public parameterizedAssignment(): ParameterizedAssignmentContext | undefined {
		return this.tryGetRuleContext(0, ParameterizedAssignmentContext);
	}
	public objectClassAssignment(): ObjectClassAssignmentContext | undefined {
		return this.tryGetRuleContext(0, ObjectClassAssignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_assignment; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SequenceTypeContext extends ParserRuleContext {
	public SEQUENCE_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.SEQUENCE_LITERAL, 0); }
	public L_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
	public R_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
	public extensionAndException(): ExtensionAndExceptionContext | undefined {
		return this.tryGetRuleContext(0, ExtensionAndExceptionContext);
	}
	public optionalExtensionMarker(): OptionalExtensionMarkerContext | undefined {
		return this.tryGetRuleContext(0, OptionalExtensionMarkerContext);
	}
	public componentTypeLists(): ComponentTypeListsContext | undefined {
		return this.tryGetRuleContext(0, ComponentTypeListsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_sequenceType; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitSequenceType) {
			return visitor.visitSequenceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtensionAndExceptionContext extends ParserRuleContext {
	public ELLIPSIS(): TerminalNode { return this.getToken(ASN_3gppParser.ELLIPSIS, 0); }
	public exceptionSpec(): ExceptionSpecContext | undefined {
		return this.tryGetRuleContext(0, ExceptionSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_extensionAndException; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitExtensionAndException) {
			return visitor.visitExtensionAndException(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionalExtensionMarkerContext extends ParserRuleContext {
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.COMMA, 0); }
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.ELLIPSIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_optionalExtensionMarker; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitOptionalExtensionMarker) {
			return visitor.visitOptionalExtensionMarker(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentTypeListsContext extends ParserRuleContext {
	public rootComponentTypeList(): RootComponentTypeListContext[];
	public rootComponentTypeList(i: number): RootComponentTypeListContext;
	public rootComponentTypeList(i?: number): RootComponentTypeListContext | RootComponentTypeListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RootComponentTypeListContext);
		} else {
			return this.getRuleContext(i, RootComponentTypeListContext);
		}
	}
	public tag(): TagContext[];
	public tag(i: number): TagContext;
	public tag(i?: number): TagContext | TagContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagContext);
		} else {
			return this.getRuleContext(i, TagContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	public extensionAndException(): ExtensionAndExceptionContext | undefined {
		return this.tryGetRuleContext(0, ExtensionAndExceptionContext);
	}
	public extensionAdditions(): ExtensionAdditionsContext | undefined {
		return this.tryGetRuleContext(0, ExtensionAdditionsContext);
	}
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.ELLIPSIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_componentTypeLists; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitComponentTypeLists) {
			return visitor.visitComponentTypeLists(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RootComponentTypeListContext extends ParserRuleContext {
	public componentTypeList(): ComponentTypeListContext {
		return this.getRuleContext(0, ComponentTypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_rootComponentTypeList; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitRootComponentTypeList) {
			return visitor.visitRootComponentTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentTypeListContext extends ParserRuleContext {
	public componentType(): ComponentTypeContext[];
	public componentType(i: number): ComponentTypeContext;
	public componentType(i?: number): ComponentTypeContext | ComponentTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentTypeContext);
		} else {
			return this.getRuleContext(i, ComponentTypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	public tag(): TagContext[];
	public tag(i: number): TagContext;
	public tag(i?: number): TagContext | TagContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagContext);
		} else {
			return this.getRuleContext(i, TagContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_componentTypeList; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitComponentTypeList) {
			return visitor.visitComponentTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentTypeContext extends ParserRuleContext {
	public namedType(): NamedTypeContext | undefined {
		return this.tryGetRuleContext(0, NamedTypeContext);
	}
	public OPTIONAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.OPTIONAL_LITERAL, 0); }
	public DEFAULT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.DEFAULT_LITERAL, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public COMPONENTS_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.COMPONENTS_LITERAL, 0); }
	public OF_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.OF_LITERAL, 0); }
	public asnType(): AsnTypeContext | undefined {
		return this.tryGetRuleContext(0, AsnTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_componentType; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitComponentType) {
			return visitor.visitComponentType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagContext extends ParserRuleContext {
	public TAG(): TerminalNode { return this.getToken(ASN_3gppParser.TAG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_tag; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitTag) {
			return visitor.visitTag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtensionAdditionsContext extends ParserRuleContext {
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.COMMA, 0); }
	public extensionAdditionList(): ExtensionAdditionListContext | undefined {
		return this.tryGetRuleContext(0, ExtensionAdditionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_extensionAdditions; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitExtensionAdditions) {
			return visitor.visitExtensionAdditions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtensionAdditionListContext extends ParserRuleContext {
	public extensionAddition(): ExtensionAdditionContext[];
	public extensionAddition(i: number): ExtensionAdditionContext;
	public extensionAddition(i?: number): ExtensionAdditionContext | ExtensionAdditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExtensionAdditionContext);
		} else {
			return this.getRuleContext(i, ExtensionAdditionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	public tag(): TagContext[];
	public tag(i: number): TagContext;
	public tag(i?: number): TagContext | TagContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagContext);
		} else {
			return this.getRuleContext(i, TagContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_extensionAdditionList; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitExtensionAdditionList) {
			return visitor.visitExtensionAdditionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtensionAdditionContext extends ParserRuleContext {
	public componentType(): ComponentTypeContext | undefined {
		return this.tryGetRuleContext(0, ComponentTypeContext);
	}
	public extensionAdditionGroup(): ExtensionAdditionGroupContext | undefined {
		return this.tryGetRuleContext(0, ExtensionAdditionGroupContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_extensionAddition; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitExtensionAddition) {
			return visitor.visitExtensionAddition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtensionAdditionGroupContext extends ParserRuleContext {
	public DOUBLE_L_BRACKET(): TerminalNode { return this.getToken(ASN_3gppParser.DOUBLE_L_BRACKET, 0); }
	public versionNumber(): VersionNumberContext {
		return this.getRuleContext(0, VersionNumberContext);
	}
	public componentTypeList(): ComponentTypeListContext {
		return this.getRuleContext(0, ComponentTypeListContext);
	}
	public DOUBLE_R_BRACKET(): TerminalNode { return this.getToken(ASN_3gppParser.DOUBLE_R_BRACKET, 0); }
	public tag(): TagContext | undefined {
		return this.tryGetRuleContext(0, TagContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_extensionAdditionGroup; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitExtensionAdditionGroup) {
			return visitor.visitExtensionAdditionGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VersionNumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.NUMBER, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_versionNumber; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitVersionNumber) {
			return visitor.visitVersionNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SequenceOfTypeContext extends ParserRuleContext {
	public SEQUENCE_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.SEQUENCE_LITERAL, 0); }
	public OF_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.OF_LITERAL, 0); }
	public asnType(): AsnTypeContext | undefined {
		return this.tryGetRuleContext(0, AsnTypeContext);
	}
	public namedType(): NamedTypeContext | undefined {
		return this.tryGetRuleContext(0, NamedTypeContext);
	}
	public L_PARAN(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.L_PARAN, 0); }
	public R_PARAN(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.R_PARAN, 0); }
	public constraint(): ConstraintContext | undefined {
		return this.tryGetRuleContext(0, ConstraintContext);
	}
	public sizeConstraint(): SizeConstraintContext | undefined {
		return this.tryGetRuleContext(0, SizeConstraintContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_sequenceOfType; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitSequenceOfType) {
			return visitor.visitSequenceOfType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SizeConstraintContext extends ParserRuleContext {
	public SIZE_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.SIZE_LITERAL, 0); }
	public constraint(): ConstraintContext {
		return this.getRuleContext(0, ConstraintContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_sizeConstraint; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitSizeConstraint) {
			return visitor.visitSizeConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterizedAssignmentContext extends ParserRuleContext {
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	public ASSIGN_OP(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.ASSIGN_OP, 0); }
	public asnType(): AsnTypeContext | undefined {
		return this.tryGetRuleContext(0, AsnTypeContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public valueSet(): ValueSetContext | undefined {
		return this.tryGetRuleContext(0, ValueSetContext);
	}
	public definedObjectClass(): DefinedObjectClassContext | undefined {
		return this.tryGetRuleContext(0, DefinedObjectClassContext);
	}
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public objectClass(): ObjectClassContext | undefined {
		return this.tryGetRuleContext(0, ObjectClassContext);
	}
	public objectSet(): ObjectSetContext | undefined {
		return this.tryGetRuleContext(0, ObjectSetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_parameterizedAssignment; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitParameterizedAssignment) {
			return visitor.visitParameterizedAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public L_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public R_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_parameterList; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public paramGovernor(): ParamGovernorContext | undefined {
		return this.tryGetRuleContext(0, ParamGovernorContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_parameter; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamGovernorContext extends ParserRuleContext {
	public governor(): GovernorContext | undefined {
		return this.tryGetRuleContext(0, GovernorContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_paramGovernor; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitParamGovernor) {
			return visitor.visitParamGovernor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GovernorContext extends ParserRuleContext {
	public asnType(): AsnTypeContext | undefined {
		return this.tryGetRuleContext(0, AsnTypeContext);
	}
	public definedObjectClass(): DefinedObjectClassContext | undefined {
		return this.tryGetRuleContext(0, DefinedObjectClassContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_governor; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitGovernor) {
			return visitor.visitGovernor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectClassAssignmentContext extends ParserRuleContext {
	public ASSIGN_OP(): TerminalNode { return this.getToken(ASN_3gppParser.ASSIGN_OP, 0); }
	public objectClass(): ObjectClassContext {
		return this.getRuleContext(0, ObjectClassContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_objectClassAssignment; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitObjectClassAssignment) {
			return visitor.visitObjectClassAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectClassContext extends ParserRuleContext {
	public definedObjectClass(): DefinedObjectClassContext | undefined {
		return this.tryGetRuleContext(0, DefinedObjectClassContext);
	}
	public objectClassDefn(): ObjectClassDefnContext | undefined {
		return this.tryGetRuleContext(0, ObjectClassDefnContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_objectClass; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitObjectClass) {
			return visitor.visitObjectClass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefinedObjectClassContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.IDENTIFIER);
		} else {
			return this.getToken(ASN_3gppParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.DOT, 0); }
	public TYPE_IDENTIFIER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.TYPE_IDENTIFIER_LITERAL, 0); }
	public ABSTRACT_SYNTAX_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.ABSTRACT_SYNTAX_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_definedObjectClass; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitDefinedObjectClass) {
			return visitor.visitDefinedObjectClass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsefulObjectClassReferenceContext extends ParserRuleContext {
	public TYPE_IDENTIFIER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.TYPE_IDENTIFIER_LITERAL, 0); }
	public ABSTRACT_SYNTAX_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.ABSTRACT_SYNTAX_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_usefulObjectClassReference; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitUsefulObjectClassReference) {
			return visitor.visitUsefulObjectClassReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExternalObjectClassReferenceContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.IDENTIFIER);
		} else {
			return this.getToken(ASN_3gppParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode { return this.getToken(ASN_3gppParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_externalObjectClassReference; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitExternalObjectClassReference) {
			return visitor.visitExternalObjectClassReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectClassDefnContext extends ParserRuleContext {
	public CLASS_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.CLASS_LITERAL, 0); }
	public L_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
	public fieldSpec(): FieldSpecContext[];
	public fieldSpec(i: number): FieldSpecContext;
	public fieldSpec(i?: number): FieldSpecContext | FieldSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldSpecContext);
		} else {
			return this.getRuleContext(i, FieldSpecContext);
		}
	}
	public R_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	public withSyntaxSpec(): WithSyntaxSpecContext | undefined {
		return this.tryGetRuleContext(0, WithSyntaxSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_objectClassDefn; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitObjectClassDefn) {
			return visitor.visitObjectClassDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithSyntaxSpecContext extends ParserRuleContext {
	public WITH_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.WITH_LITERAL, 0); }
	public SYNTAX_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.SYNTAX_LITERAL, 0); }
	public syntaxList(): SyntaxListContext {
		return this.getRuleContext(0, SyntaxListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_withSyntaxSpec; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitWithSyntaxSpec) {
			return visitor.visitWithSyntaxSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SyntaxListContext extends ParserRuleContext {
	public L_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
	public R_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
	public tokenOrGroupSpec(): TokenOrGroupSpecContext[];
	public tokenOrGroupSpec(i: number): TokenOrGroupSpecContext;
	public tokenOrGroupSpec(i?: number): TokenOrGroupSpecContext | TokenOrGroupSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TokenOrGroupSpecContext);
		} else {
			return this.getRuleContext(i, TokenOrGroupSpecContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_syntaxList; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitSyntaxList) {
			return visitor.visitSyntaxList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TokenOrGroupSpecContext extends ParserRuleContext {
	public requiredToken(): RequiredTokenContext | undefined {
		return this.tryGetRuleContext(0, RequiredTokenContext);
	}
	public optionalGroup(): OptionalGroupContext | undefined {
		return this.tryGetRuleContext(0, OptionalGroupContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_tokenOrGroupSpec; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitTokenOrGroupSpec) {
			return visitor.visitTokenOrGroupSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionalGroupContext extends ParserRuleContext {
	public L_BRACKET(): TerminalNode { return this.getToken(ASN_3gppParser.L_BRACKET, 0); }
	public R_BRACKET(): TerminalNode { return this.getToken(ASN_3gppParser.R_BRACKET, 0); }
	public tokenOrGroupSpec(): TokenOrGroupSpecContext[];
	public tokenOrGroupSpec(i: number): TokenOrGroupSpecContext;
	public tokenOrGroupSpec(i?: number): TokenOrGroupSpecContext | TokenOrGroupSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TokenOrGroupSpecContext);
		} else {
			return this.getRuleContext(i, TokenOrGroupSpecContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_optionalGroup; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitOptionalGroup) {
			return visitor.visitOptionalGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RequiredTokenContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public primitiveFieldName(): PrimitiveFieldNameContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveFieldNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_requiredToken; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitRequiredToken) {
			return visitor.visitRequiredToken(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.IDENTIFIER, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_literal; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveFieldNameContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(ASN_3gppParser.AMPERSAND, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_primitiveFieldName; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitPrimitiveFieldName) {
			return visitor.visitPrimitiveFieldName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldSpecContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(ASN_3gppParser.AMPERSAND, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public asnType(): AsnTypeContext | undefined {
		return this.tryGetRuleContext(0, AsnTypeContext);
	}
	public fieldName(): FieldNameContext | undefined {
		return this.tryGetRuleContext(0, FieldNameContext);
	}
	public definedObjectClass(): DefinedObjectClassContext | undefined {
		return this.tryGetRuleContext(0, DefinedObjectClassContext);
	}
	public typeOptionalitySpec(): TypeOptionalitySpecContext | undefined {
		return this.tryGetRuleContext(0, TypeOptionalitySpecContext);
	}
	public OPTIONAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.OPTIONAL_LITERAL, 0); }
	public valueSetOptionalitySpec(): ValueSetOptionalitySpecContext | undefined {
		return this.tryGetRuleContext(0, ValueSetOptionalitySpecContext);
	}
	public UNIQUE_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.UNIQUE_LITERAL, 0); }
	public valueOptionalitySpec(): ValueOptionalitySpecContext | undefined {
		return this.tryGetRuleContext(0, ValueOptionalitySpecContext);
	}
	public DEFAULT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.DEFAULT_LITERAL, 0); }
	public valueSet(): ValueSetContext | undefined {
		return this.tryGetRuleContext(0, ValueSetContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public objectSet(): ObjectSetContext | undefined {
		return this.tryGetRuleContext(0, ObjectSetContext);
	}
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_fieldSpec; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitFieldSpec) {
			return visitor.visitFieldSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeFieldSpecContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(ASN_3gppParser.AMPERSAND, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public typeOptionalitySpec(): TypeOptionalitySpecContext | undefined {
		return this.tryGetRuleContext(0, TypeOptionalitySpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_typeFieldSpec; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitTypeFieldSpec) {
			return visitor.visitTypeFieldSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeOptionalitySpecContext extends ParserRuleContext {
	public OPTIONAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.OPTIONAL_LITERAL, 0); }
	public DEFAULT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.DEFAULT_LITERAL, 0); }
	public asnType(): AsnTypeContext | undefined {
		return this.tryGetRuleContext(0, AsnTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_typeOptionalitySpec; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitTypeOptionalitySpec) {
			return visitor.visitTypeOptionalitySpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FixedTypeValueFieldSpecContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(ASN_3gppParser.AMPERSAND, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public asnType(): AsnTypeContext {
		return this.getRuleContext(0, AsnTypeContext);
	}
	public UNIQUE_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.UNIQUE_LITERAL, 0); }
	public valueOptionalitySpec(): ValueOptionalitySpecContext | undefined {
		return this.tryGetRuleContext(0, ValueOptionalitySpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_fixedTypeValueFieldSpec; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitFixedTypeValueFieldSpec) {
			return visitor.visitFixedTypeValueFieldSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueOptionalitySpecContext extends ParserRuleContext {
	public OPTIONAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.OPTIONAL_LITERAL, 0); }
	public DEFAULT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.DEFAULT_LITERAL, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_valueOptionalitySpec; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitValueOptionalitySpec) {
			return visitor.visitValueOptionalitySpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableTypeValueFieldSpecContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(ASN_3gppParser.AMPERSAND, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public fieldName(): FieldNameContext {
		return this.getRuleContext(0, FieldNameContext);
	}
	public valueOptionalitySpec(): ValueOptionalitySpecContext | undefined {
		return this.tryGetRuleContext(0, ValueOptionalitySpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_variableTypeValueFieldSpec; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitVariableTypeValueFieldSpec) {
			return visitor.visitVariableTypeValueFieldSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FixedTypeValueSetFieldSpecContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(ASN_3gppParser.AMPERSAND, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public asnType(): AsnTypeContext {
		return this.getRuleContext(0, AsnTypeContext);
	}
	public valueSetOptionalitySpec(): ValueSetOptionalitySpecContext | undefined {
		return this.tryGetRuleContext(0, ValueSetOptionalitySpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_fixedTypeValueSetFieldSpec; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitFixedTypeValueSetFieldSpec) {
			return visitor.visitFixedTypeValueSetFieldSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueSetOptionalitySpecContext extends ParserRuleContext {
	public OPTIONAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.OPTIONAL_LITERAL, 0); }
	public DEFAULT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.DEFAULT_LITERAL, 0); }
	public valueSet(): ValueSetContext | undefined {
		return this.tryGetRuleContext(0, ValueSetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_valueSetOptionalitySpec; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitValueSetOptionalitySpec) {
			return visitor.visitValueSetOptionalitySpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectContext extends ParserRuleContext {
	public definedObject(): DefinedObjectContext | undefined {
		return this.tryGetRuleContext(0, DefinedObjectContext);
	}
	public parameterizedObject(): ParameterizedObjectContext | undefined {
		return this.tryGetRuleContext(0, ParameterizedObjectContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_object; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitObject) {
			return visitor.visitObject(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterizedObjectContext extends ParserRuleContext {
	public definedObject(): DefinedObjectContext {
		return this.getRuleContext(0, DefinedObjectContext);
	}
	public actualParameterList(): ActualParameterListContext {
		return this.getRuleContext(0, ActualParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_parameterizedObject; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitParameterizedObject) {
			return visitor.visitParameterizedObject(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefinedObjectContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_definedObject; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitDefinedObject) {
			return visitor.visitDefinedObject(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectSetContext extends ParserRuleContext {
	public L_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
	public objectSetSpec(): ObjectSetSpecContext {
		return this.getRuleContext(0, ObjectSetSpecContext);
	}
	public R_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_objectSet; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitObjectSet) {
			return visitor.visitObjectSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectSetSpecContext extends ParserRuleContext {
	public rootElementSetSpec(): RootElementSetSpecContext | undefined {
		return this.tryGetRuleContext(0, RootElementSetSpecContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.ELLIPSIS, 0); }
	public additionalElementSetSpec(): AdditionalElementSetSpecContext | undefined {
		return this.tryGetRuleContext(0, AdditionalElementSetSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_objectSetSpec; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitObjectSetSpec) {
			return visitor.visitObjectSetSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldNameContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode[];
	public AMPERSAND(i: number): TerminalNode;
	public AMPERSAND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.AMPERSAND);
		} else {
			return this.getToken(ASN_3gppParser.AMPERSAND, i);
		}
	}
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.IDENTIFIER);
		} else {
			return this.getToken(ASN_3gppParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.DOT);
		} else {
			return this.getToken(ASN_3gppParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_fieldName; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitFieldName) {
			return visitor.visitFieldName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueSetContext extends ParserRuleContext {
	public L_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
	public elementSetSpecs(): ElementSetSpecsContext {
		return this.getRuleContext(0, ElementSetSpecsContext);
	}
	public R_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_valueSet; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitValueSet) {
			return visitor.visitValueSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementSetSpecsContext extends ParserRuleContext {
	public rootElementSetSpec(): RootElementSetSpecContext {
		return this.getRuleContext(0, RootElementSetSpecContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.ELLIPSIS, 0); }
	public additionalElementSetSpec(): AdditionalElementSetSpecContext | undefined {
		return this.tryGetRuleContext(0, AdditionalElementSetSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_elementSetSpecs; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitElementSetSpecs) {
			return visitor.visitElementSetSpecs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RootElementSetSpecContext extends ParserRuleContext {
	public elementSetSpec(): ElementSetSpecContext {
		return this.getRuleContext(0, ElementSetSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_rootElementSetSpec; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitRootElementSetSpec) {
			return visitor.visitRootElementSetSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditionalElementSetSpecContext extends ParserRuleContext {
	public elementSetSpec(): ElementSetSpecContext {
		return this.getRuleContext(0, ElementSetSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_additionalElementSetSpec; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitAdditionalElementSetSpec) {
			return visitor.visitAdditionalElementSetSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementSetSpecContext extends ParserRuleContext {
	public unions(): UnionsContext | undefined {
		return this.tryGetRuleContext(0, UnionsContext);
	}
	public ALL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.ALL_LITERAL, 0); }
	public exclusions(): ExclusionsContext | undefined {
		return this.tryGetRuleContext(0, ExclusionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_elementSetSpec; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitElementSetSpec) {
			return visitor.visitElementSetSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnionsContext extends ParserRuleContext {
	public intersections(): IntersectionsContext[];
	public intersections(i: number): IntersectionsContext;
	public intersections(i?: number): IntersectionsContext | IntersectionsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntersectionsContext);
		} else {
			return this.getRuleContext(i, IntersectionsContext);
		}
	}
	public unionMark(): UnionMarkContext[];
	public unionMark(i: number): UnionMarkContext;
	public unionMark(i?: number): UnionMarkContext | UnionMarkContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnionMarkContext);
		} else {
			return this.getRuleContext(i, UnionMarkContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_unions; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitUnions) {
			return visitor.visitUnions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExclusionsContext extends ParserRuleContext {
	public EXCEPT_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.EXCEPT_LITERAL, 0); }
	public elements(): ElementsContext {
		return this.getRuleContext(0, ElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_exclusions; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitExclusions) {
			return visitor.visitExclusions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntersectionsContext extends ParserRuleContext {
	public intersectionElements(): IntersectionElementsContext[];
	public intersectionElements(i: number): IntersectionElementsContext;
	public intersectionElements(i?: number): IntersectionElementsContext | IntersectionElementsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntersectionElementsContext);
		} else {
			return this.getRuleContext(i, IntersectionElementsContext);
		}
	}
	public intersectionMark(): IntersectionMarkContext[];
	public intersectionMark(i: number): IntersectionMarkContext;
	public intersectionMark(i?: number): IntersectionMarkContext | IntersectionMarkContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntersectionMarkContext);
		} else {
			return this.getRuleContext(i, IntersectionMarkContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_intersections; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitIntersections) {
			return visitor.visitIntersections(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnionMarkContext extends ParserRuleContext {
	public PIPE(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.PIPE, 0); }
	public UNION_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.UNION_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_unionMark; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitUnionMark) {
			return visitor.visitUnionMark(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntersectionMarkContext extends ParserRuleContext {
	public POWER(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.POWER, 0); }
	public INTERSECTION_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.INTERSECTION_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_intersectionMark; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitIntersectionMark) {
			return visitor.visitIntersectionMark(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementsContext extends ParserRuleContext {
	public subtypeElements(): SubtypeElementsContext {
		return this.getRuleContext(0, SubtypeElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_elements; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitElements) {
			return visitor.visitElements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectSetElementsContext extends ParserRuleContext {
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public definedObject(): DefinedObjectContext | undefined {
		return this.tryGetRuleContext(0, DefinedObjectContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_objectSetElements; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitObjectSetElements) {
			return visitor.visitObjectSetElements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntersectionElementsContext extends ParserRuleContext {
	public elements(): ElementsContext {
		return this.getRuleContext(0, ElementsContext);
	}
	public exclusions(): ExclusionsContext | undefined {
		return this.tryGetRuleContext(0, ExclusionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_intersectionElements; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitIntersectionElements) {
			return visitor.visitIntersectionElements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubtypeElementsContext extends ParserRuleContext {
	public DOUBLE_DOT(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.DOUBLE_DOT, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public MIN_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.MIN_LITERAL, 0); }
	public MAX_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.MAX_LITERAL, 0); }
	public LESS_THAN(): TerminalNode[];
	public LESS_THAN(i: number): TerminalNode;
	public LESS_THAN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.LESS_THAN);
		} else {
			return this.getToken(ASN_3gppParser.LESS_THAN, i);
		}
	}
	public sizeConstraint(): SizeConstraintContext | undefined {
		return this.tryGetRuleContext(0, SizeConstraintContext);
	}
	public PATTERN_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.PATTERN_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_subtypeElements; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitSubtypeElements) {
			return visitor.visitSubtypeElements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableTypeValueSetFieldSpecContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(ASN_3gppParser.AMPERSAND, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public fieldName(): FieldNameContext {
		return this.getRuleContext(0, FieldNameContext);
	}
	public valueSetOptionalitySpec(): ValueSetOptionalitySpecContext | undefined {
		return this.tryGetRuleContext(0, ValueSetOptionalitySpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_variableTypeValueSetFieldSpec; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitVariableTypeValueSetFieldSpec) {
			return visitor.visitVariableTypeValueSetFieldSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectFieldSpecContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(ASN_3gppParser.AMPERSAND, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public definedObjectClass(): DefinedObjectClassContext {
		return this.getRuleContext(0, DefinedObjectClassContext);
	}
	public objectOptionalitySpec(): ObjectOptionalitySpecContext | undefined {
		return this.tryGetRuleContext(0, ObjectOptionalitySpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_objectFieldSpec; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitObjectFieldSpec) {
			return visitor.visitObjectFieldSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectOptionalitySpecContext extends ParserRuleContext {
	public OPTIONAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.OPTIONAL_LITERAL, 0); }
	public DEFAULT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.DEFAULT_LITERAL, 0); }
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_objectOptionalitySpec; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitObjectOptionalitySpec) {
			return visitor.visitObjectOptionalitySpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectSetFieldSpecContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(ASN_3gppParser.AMPERSAND, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public definedObjectClass(): DefinedObjectClassContext {
		return this.getRuleContext(0, DefinedObjectClassContext);
	}
	public objectSetOptionalitySpec(): ObjectSetOptionalitySpecContext | undefined {
		return this.tryGetRuleContext(0, ObjectSetOptionalitySpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_objectSetFieldSpec; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitObjectSetFieldSpec) {
			return visitor.visitObjectSetFieldSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectSetOptionalitySpecContext extends ParserRuleContext {
	public OPTIONAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.OPTIONAL_LITERAL, 0); }
	public DEFAULT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.DEFAULT_LITERAL, 0); }
	public objectSet(): ObjectSetContext | undefined {
		return this.tryGetRuleContext(0, ObjectSetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_objectSetOptionalitySpec; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitObjectSetOptionalitySpec) {
			return visitor.visitObjectSetOptionalitySpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeAssignmentContext extends ParserRuleContext {
	public ASSIGN_OP(): TerminalNode { return this.getToken(ASN_3gppParser.ASSIGN_OP, 0); }
	public asnType(): AsnTypeContext {
		return this.getRuleContext(0, AsnTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_typeAssignment; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitTypeAssignment) {
			return visitor.visitTypeAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueAssignmentContext extends ParserRuleContext {
	public asnType(): AsnTypeContext {
		return this.getRuleContext(0, AsnTypeContext);
	}
	public ASSIGN_OP(): TerminalNode { return this.getToken(ASN_3gppParser.ASSIGN_OP, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_valueAssignment; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitValueAssignment) {
			return visitor.visitValueAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AsnTypeContext extends ParserRuleContext {
	public builtinType(): BuiltinTypeContext | undefined {
		return this.tryGetRuleContext(0, BuiltinTypeContext);
	}
	public referencedType(): ReferencedTypeContext | undefined {
		return this.tryGetRuleContext(0, ReferencedTypeContext);
	}
	public constraint(): ConstraintContext[];
	public constraint(i: number): ConstraintContext;
	public constraint(i?: number): ConstraintContext | ConstraintContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstraintContext);
		} else {
			return this.getRuleContext(i, ConstraintContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_asnType; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitAsnType) {
			return visitor.visitAsnType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BuiltinTypeContext extends ParserRuleContext {
	public octetStringType(): OctetStringTypeContext | undefined {
		return this.tryGetRuleContext(0, OctetStringTypeContext);
	}
	public bitStringType(): BitStringTypeContext | undefined {
		return this.tryGetRuleContext(0, BitStringTypeContext);
	}
	public characterStringType(): CharacterStringTypeContext | undefined {
		return this.tryGetRuleContext(0, CharacterStringTypeContext);
	}
	public choiceType(): ChoiceTypeContext | undefined {
		return this.tryGetRuleContext(0, ChoiceTypeContext);
	}
	public enumeratedType(): EnumeratedTypeContext | undefined {
		return this.tryGetRuleContext(0, EnumeratedTypeContext);
	}
	public integerType(): IntegerTypeContext | undefined {
		return this.tryGetRuleContext(0, IntegerTypeContext);
	}
	public sequenceType(): SequenceTypeContext | undefined {
		return this.tryGetRuleContext(0, SequenceTypeContext);
	}
	public sequenceOfType(): SequenceOfTypeContext | undefined {
		return this.tryGetRuleContext(0, SequenceOfTypeContext);
	}
	public setType(): SetTypeContext | undefined {
		return this.tryGetRuleContext(0, SetTypeContext);
	}
	public setOfType(): SetOfTypeContext | undefined {
		return this.tryGetRuleContext(0, SetOfTypeContext);
	}
	public objectidentifiertype(): ObjectidentifiertypeContext | undefined {
		return this.tryGetRuleContext(0, ObjectidentifiertypeContext);
	}
	public objectClassFieldType(): ObjectClassFieldTypeContext | undefined {
		return this.tryGetRuleContext(0, ObjectClassFieldTypeContext);
	}
	public BOOLEAN_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.BOOLEAN_LITERAL, 0); }
	public NULL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.NULL_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_builtinType; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitBuiltinType) {
			return visitor.visitBuiltinType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CharacterStringTypeContext extends ParserRuleContext {
	public restrictedCharacterStringType(): RestrictedCharacterStringTypeContext {
		return this.getRuleContext(0, RestrictedCharacterStringTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_characterStringType; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitCharacterStringType) {
			return visitor.visitCharacterStringType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RestrictedCharacterStringTypeContext extends ParserRuleContext {
	public BMP_STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.BMP_STRING_LITERAL, 0); }
	public GRAPHIC_STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.GRAPHIC_STRING_LITERAL, 0); }
	public IA5_STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.IA5_STRING_LITERAL, 0); }
	public ISO646_STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.ISO646_STRING_LITERAL, 0); }
	public NUMERIC_STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.NUMERIC_STRING_LITERAL, 0); }
	public PRINTABLE_STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.PRINTABLE_STRING_LITERAL, 0); }
	public TELETEXT_STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.TELETEXT_STRING_LITERAL, 0); }
	public T61_STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.T61_STRING_LITERAL, 0); }
	public UNIVERSAL_STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.UNIVERSAL_STRING_LITERAL, 0); }
	public UTF8_STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.UTF8_STRING_LITERAL, 0); }
	public VIDEOTEX_STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.VIDEOTEX_STRING_LITERAL, 0); }
	public VISIBLE_STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.VISIBLE_STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_restrictedCharacterStringType; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitRestrictedCharacterStringType) {
			return visitor.visitRestrictedCharacterStringType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectClassFieldTypeContext extends ParserRuleContext {
	public definedObjectClass(): DefinedObjectClassContext {
		return this.getRuleContext(0, DefinedObjectClassContext);
	}
	public DOT(): TerminalNode { return this.getToken(ASN_3gppParser.DOT, 0); }
	public fieldName(): FieldNameContext {
		return this.getRuleContext(0, FieldNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_objectClassFieldType; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitObjectClassFieldType) {
			return visitor.visitObjectClassFieldType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetTypeContext extends ParserRuleContext {
	public SET_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.SET_LITERAL, 0); }
	public L_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
	public R_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
	public extensionAndException(): ExtensionAndExceptionContext | undefined {
		return this.tryGetRuleContext(0, ExtensionAndExceptionContext);
	}
	public optionalExtensionMarker(): OptionalExtensionMarkerContext | undefined {
		return this.tryGetRuleContext(0, OptionalExtensionMarkerContext);
	}
	public componentTypeLists(): ComponentTypeListsContext | undefined {
		return this.tryGetRuleContext(0, ComponentTypeListsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_setType; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitSetType) {
			return visitor.visitSetType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetOfTypeContext extends ParserRuleContext {
	public SET_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.SET_LITERAL, 0); }
	public OF_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.OF_LITERAL, 0); }
	public asnType(): AsnTypeContext | undefined {
		return this.tryGetRuleContext(0, AsnTypeContext);
	}
	public namedType(): NamedTypeContext | undefined {
		return this.tryGetRuleContext(0, NamedTypeContext);
	}
	public constraint(): ConstraintContext | undefined {
		return this.tryGetRuleContext(0, ConstraintContext);
	}
	public sizeConstraint(): SizeConstraintContext | undefined {
		return this.tryGetRuleContext(0, SizeConstraintContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_setOfType; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitSetOfType) {
			return visitor.visitSetOfType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReferencedTypeContext extends ParserRuleContext {
	public definedType(): DefinedTypeContext {
		return this.getRuleContext(0, DefinedTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_referencedType; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitReferencedType) {
			return visitor.visitReferencedType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefinedTypeContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.IDENTIFIER);
		} else {
			return this.getToken(ASN_3gppParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.DOT, 0); }
	public actualParameterList(): ActualParameterListContext | undefined {
		return this.tryGetRuleContext(0, ActualParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_definedType; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitDefinedType) {
			return visitor.visitDefinedType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstraintContext extends ParserRuleContext {
	public L_PARAN(): TerminalNode { return this.getToken(ASN_3gppParser.L_PARAN, 0); }
	public constraintSpec(): ConstraintSpecContext {
		return this.getRuleContext(0, ConstraintSpecContext);
	}
	public R_PARAN(): TerminalNode { return this.getToken(ASN_3gppParser.R_PARAN, 0); }
	public exceptionSpec(): ExceptionSpecContext | undefined {
		return this.tryGetRuleContext(0, ExceptionSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_constraint; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitConstraint) {
			return visitor.visitConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstraintSpecContext extends ParserRuleContext {
	public generalConstraint(): GeneralConstraintContext | undefined {
		return this.tryGetRuleContext(0, GeneralConstraintContext);
	}
	public subtypeConstraint(): SubtypeConstraintContext | undefined {
		return this.tryGetRuleContext(0, SubtypeConstraintContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_constraintSpec; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitConstraintSpec) {
			return visitor.visitConstraintSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UserDefinedConstraintContext extends ParserRuleContext {
	public CONSTRAINED_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.CONSTRAINED_LITERAL, 0); }
	public BY_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.BY_LITERAL, 0); }
	public L_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
	public userDefinedConstraintParameter(): UserDefinedConstraintParameterContext[];
	public userDefinedConstraintParameter(i: number): UserDefinedConstraintParameterContext;
	public userDefinedConstraintParameter(i?: number): UserDefinedConstraintParameterContext | UserDefinedConstraintParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UserDefinedConstraintParameterContext);
		} else {
			return this.getRuleContext(i, UserDefinedConstraintParameterContext);
		}
	}
	public R_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_userDefinedConstraint; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitUserDefinedConstraint) {
			return visitor.visitUserDefinedConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GeneralConstraintContext extends ParserRuleContext {
	public userDefinedConstraint(): UserDefinedConstraintContext | undefined {
		return this.tryGetRuleContext(0, UserDefinedConstraintContext);
	}
	public tableConstraint(): TableConstraintContext | undefined {
		return this.tryGetRuleContext(0, TableConstraintContext);
	}
	public contentsConstraint(): ContentsConstraintContext | undefined {
		return this.tryGetRuleContext(0, ContentsConstraintContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_generalConstraint; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitGeneralConstraint) {
			return visitor.visitGeneralConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UserDefinedConstraintParameterContext extends ParserRuleContext {
	public governor(): GovernorContext {
		return this.getRuleContext(0, GovernorContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.COLON, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public valueSet(): ValueSetContext | undefined {
		return this.tryGetRuleContext(0, ValueSetContext);
	}
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public objectSet(): ObjectSetContext | undefined {
		return this.tryGetRuleContext(0, ObjectSetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_userDefinedConstraintParameter; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitUserDefinedConstraintParameter) {
			return visitor.visitUserDefinedConstraintParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableConstraintContext extends ParserRuleContext {
	public componentRelationConstraint(): ComponentRelationConstraintContext {
		return this.getRuleContext(0, ComponentRelationConstraintContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_tableConstraint; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitTableConstraint) {
			return visitor.visitTableConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleTableConstraintContext extends ParserRuleContext {
	public objectSet(): ObjectSetContext {
		return this.getRuleContext(0, ObjectSetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_simpleTableConstraint; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitSimpleTableConstraint) {
			return visitor.visitSimpleTableConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContentsConstraintContext extends ParserRuleContext {
	public CONTAINING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.CONTAINING_LITERAL, 0); }
	public asnType(): AsnTypeContext | undefined {
		return this.tryGetRuleContext(0, AsnTypeContext);
	}
	public ENCODED_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.ENCODED_LITERAL, 0); }
	public BY_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.BY_LITERAL, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public WITH_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.WITH_LITERAL, 0); }
	public COMPONENTS_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.COMPONENTS_LITERAL, 0); }
	public L_BRACE(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.L_BRACE, 0); }
	public componentPresenceLists(): ComponentPresenceListsContext | undefined {
		return this.tryGetRuleContext(0, ComponentPresenceListsContext);
	}
	public R_BRACE(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.R_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_contentsConstraint; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitContentsConstraint) {
			return visitor.visitContentsConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentPresenceListsContext extends ParserRuleContext {
	public componentPresenceList(): ComponentPresenceListContext[];
	public componentPresenceList(i: number): ComponentPresenceListContext;
	public componentPresenceList(i?: number): ComponentPresenceListContext | ComponentPresenceListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentPresenceListContext);
		} else {
			return this.getRuleContext(i, ComponentPresenceListContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.ELLIPSIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_componentPresenceLists; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitComponentPresenceLists) {
			return visitor.visitComponentPresenceLists(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentPresenceListContext extends ParserRuleContext {
	public componentPresence(): ComponentPresenceContext[];
	public componentPresence(i: number): ComponentPresenceContext;
	public componentPresence(i?: number): ComponentPresenceContext | ComponentPresenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentPresenceContext);
		} else {
			return this.getRuleContext(i, ComponentPresenceContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_componentPresenceList; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitComponentPresenceList) {
			return visitor.visitComponentPresenceList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentPresenceContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public ABSENT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.ABSENT_LITERAL, 0); }
	public PRESENT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.PRESENT_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_componentPresence; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitComponentPresence) {
			return visitor.visitComponentPresence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubtypeConstraintContext extends ParserRuleContext {
	public elementSetSpecs(): ElementSetSpecsContext {
		return this.getRuleContext(0, ElementSetSpecsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_subtypeConstraint; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitSubtypeConstraint) {
			return visitor.visitSubtypeConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public builtinValue(): BuiltinValueContext {
		return this.getRuleContext(0, BuiltinValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_value; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BuiltinValueContext extends ParserRuleContext {
	public enumeratedValue(): EnumeratedValueContext | undefined {
		return this.tryGetRuleContext(0, EnumeratedValueContext);
	}
	public integerValue(): IntegerValueContext | undefined {
		return this.tryGetRuleContext(0, IntegerValueContext);
	}
	public choiceValue(): ChoiceValueContext | undefined {
		return this.tryGetRuleContext(0, ChoiceValueContext);
	}
	public objectIdentifierValue(): ObjectIdentifierValueContext | undefined {
		return this.tryGetRuleContext(0, ObjectIdentifierValueContext);
	}
	public booleanValue(): BooleanValueContext | undefined {
		return this.tryGetRuleContext(0, BooleanValueContext);
	}
	public CSTRING(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.CSTRING, 0); }
	public BSTRING(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.BSTRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_builtinValue; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitBuiltinValue) {
			return visitor.visitBuiltinValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectIdentifierValueContext extends ParserRuleContext {
	public L_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
	public objIdComponentsList(): ObjIdComponentsListContext {
		return this.getRuleContext(0, ObjIdComponentsListContext);
	}
	public R_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_objectIdentifierValue; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitObjectIdentifierValue) {
			return visitor.visitObjectIdentifierValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjIdComponentsListContext extends ParserRuleContext {
	public objIdComponents(): ObjIdComponentsContext[];
	public objIdComponents(i: number): ObjIdComponentsContext;
	public objIdComponents(i?: number): ObjIdComponentsContext | ObjIdComponentsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjIdComponentsContext);
		} else {
			return this.getRuleContext(i, ObjIdComponentsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_objIdComponentsList; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitObjIdComponentsList) {
			return visitor.visitObjIdComponentsList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjIdComponentsContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.NUMBER, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.IDENTIFIER, 0); }
	public L_PARAN(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.L_PARAN, 0); }
	public R_PARAN(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.R_PARAN, 0); }
	public definedValue(): DefinedValueContext | undefined {
		return this.tryGetRuleContext(0, DefinedValueContext);
	}
	public builtinType(): BuiltinTypeContext | undefined {
		return this.tryGetRuleContext(0, BuiltinTypeContext);
	}
	public constraint(): ConstraintContext | undefined {
		return this.tryGetRuleContext(0, ConstraintContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_objIdComponents; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitObjIdComponents) {
			return visitor.visitObjIdComponents(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegerValueContext extends ParserRuleContext {
	public signedNumber(): SignedNumberContext | undefined {
		return this.tryGetRuleContext(0, SignedNumberContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_integerValue; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitIntegerValue) {
			return visitor.visitIntegerValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChoiceValueContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public COLON(): TerminalNode { return this.getToken(ASN_3gppParser.COLON, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_choiceValue; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitChoiceValue) {
			return visitor.visitChoiceValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumeratedValueContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_enumeratedValue; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitEnumeratedValue) {
			return visitor.visitEnumeratedValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SignedNumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(ASN_3gppParser.NUMBER, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_signedNumber; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitSignedNumber) {
			return visitor.visitSignedNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChoiceTypeContext extends ParserRuleContext {
	public CHOICE_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.CHOICE_LITERAL, 0); }
	public L_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
	public alternativeTypeLists(): AlternativeTypeListsContext {
		return this.getRuleContext(0, AlternativeTypeListsContext);
	}
	public R_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_choiceType; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitChoiceType) {
			return visitor.visitChoiceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlternativeTypeListsContext extends ParserRuleContext {
	public rootAlternativeTypeList(): RootAlternativeTypeListContext {
		return this.getRuleContext(0, RootAlternativeTypeListContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.COMMA, 0); }
	public extensionAndException(): ExtensionAndExceptionContext | undefined {
		return this.tryGetRuleContext(0, ExtensionAndExceptionContext);
	}
	public extensionAdditionAlternatives(): ExtensionAdditionAlternativesContext | undefined {
		return this.tryGetRuleContext(0, ExtensionAdditionAlternativesContext);
	}
	public optionalExtensionMarker(): OptionalExtensionMarkerContext | undefined {
		return this.tryGetRuleContext(0, OptionalExtensionMarkerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_alternativeTypeLists; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitAlternativeTypeLists) {
			return visitor.visitAlternativeTypeLists(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtensionAdditionAlternativesContext extends ParserRuleContext {
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.COMMA, 0); }
	public extensionAdditionAlternativesList(): ExtensionAdditionAlternativesListContext | undefined {
		return this.tryGetRuleContext(0, ExtensionAdditionAlternativesListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_extensionAdditionAlternatives; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitExtensionAdditionAlternatives) {
			return visitor.visitExtensionAdditionAlternatives(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtensionAdditionAlternativesListContext extends ParserRuleContext {
	public extensionAdditionAlternative(): ExtensionAdditionAlternativeContext[];
	public extensionAdditionAlternative(i: number): ExtensionAdditionAlternativeContext;
	public extensionAdditionAlternative(i?: number): ExtensionAdditionAlternativeContext | ExtensionAdditionAlternativeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExtensionAdditionAlternativeContext);
		} else {
			return this.getRuleContext(i, ExtensionAdditionAlternativeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_extensionAdditionAlternativesList; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitExtensionAdditionAlternativesList) {
			return visitor.visitExtensionAdditionAlternativesList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtensionAdditionAlternativeContext extends ParserRuleContext {
	public extensionAdditionAlternativesGroup(): ExtensionAdditionAlternativesGroupContext | undefined {
		return this.tryGetRuleContext(0, ExtensionAdditionAlternativesGroupContext);
	}
	public namedType(): NamedTypeContext | undefined {
		return this.tryGetRuleContext(0, NamedTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_extensionAdditionAlternative; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitExtensionAdditionAlternative) {
			return visitor.visitExtensionAdditionAlternative(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtensionAdditionAlternativesGroupContext extends ParserRuleContext {
	public DOUBLE_L_BRACKET(): TerminalNode { return this.getToken(ASN_3gppParser.DOUBLE_L_BRACKET, 0); }
	public versionNumber(): VersionNumberContext {
		return this.getRuleContext(0, VersionNumberContext);
	}
	public alternativeTypeList(): AlternativeTypeListContext {
		return this.getRuleContext(0, AlternativeTypeListContext);
	}
	public DOUBLE_R_BRACKET(): TerminalNode { return this.getToken(ASN_3gppParser.DOUBLE_R_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_extensionAdditionAlternativesGroup; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitExtensionAdditionAlternativesGroup) {
			return visitor.visitExtensionAdditionAlternativesGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RootAlternativeTypeListContext extends ParserRuleContext {
	public alternativeTypeList(): AlternativeTypeListContext {
		return this.getRuleContext(0, AlternativeTypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_rootAlternativeTypeList; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitRootAlternativeTypeList) {
			return visitor.visitRootAlternativeTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlternativeTypeListContext extends ParserRuleContext {
	public namedType(): NamedTypeContext[];
	public namedType(i: number): NamedTypeContext;
	public namedType(i?: number): NamedTypeContext | NamedTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedTypeContext);
		} else {
			return this.getRuleContext(i, NamedTypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_alternativeTypeList; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitAlternativeTypeList) {
			return visitor.visitAlternativeTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedTypeContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public asnType(): AsnTypeContext {
		return this.getRuleContext(0, AsnTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_namedType; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitNamedType) {
			return visitor.visitNamedType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumeratedTypeContext extends ParserRuleContext {
	public ENUMERATED_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.ENUMERATED_LITERAL, 0); }
	public L_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
	public enumerations(): EnumerationsContext {
		return this.getRuleContext(0, EnumerationsContext);
	}
	public R_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_enumeratedType; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitEnumeratedType) {
			return visitor.visitEnumeratedType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumerationsContext extends ParserRuleContext {
	public rootEnumeration(): RootEnumerationContext {
		return this.getRuleContext(0, RootEnumerationContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.ELLIPSIS, 0); }
	public exceptionSpec(): ExceptionSpecContext | undefined {
		return this.tryGetRuleContext(0, ExceptionSpecContext);
	}
	public additionalEnumeration(): AdditionalEnumerationContext | undefined {
		return this.tryGetRuleContext(0, AdditionalEnumerationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_enumerations; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitEnumerations) {
			return visitor.visitEnumerations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RootEnumerationContext extends ParserRuleContext {
	public enumeration(): EnumerationContext {
		return this.getRuleContext(0, EnumerationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_rootEnumeration; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitRootEnumeration) {
			return visitor.visitRootEnumeration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumerationContext extends ParserRuleContext {
	public enumerationItem(): EnumerationItemContext[];
	public enumerationItem(i: number): EnumerationItemContext;
	public enumerationItem(i?: number): EnumerationItemContext | EnumerationItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumerationItemContext);
		} else {
			return this.getRuleContext(i, EnumerationItemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_enumeration; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitEnumeration) {
			return visitor.visitEnumeration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumerationItemContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.IDENTIFIER, 0); }
	public namedNumber(): NamedNumberContext | undefined {
		return this.tryGetRuleContext(0, NamedNumberContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_enumerationItem; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitEnumerationItem) {
			return visitor.visitEnumerationItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedNumberContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public L_PARAN(): TerminalNode { return this.getToken(ASN_3gppParser.L_PARAN, 0); }
	public R_PARAN(): TerminalNode { return this.getToken(ASN_3gppParser.R_PARAN, 0); }
	public signedNumber(): SignedNumberContext | undefined {
		return this.tryGetRuleContext(0, SignedNumberContext);
	}
	public definedValue(): DefinedValueContext | undefined {
		return this.tryGetRuleContext(0, DefinedValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_namedNumber; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitNamedNumber) {
			return visitor.visitNamedNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefinedValueContext extends ParserRuleContext {
	public parameterizedValue(): ParameterizedValueContext {
		return this.getRuleContext(0, ParameterizedValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_definedValue; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitDefinedValue) {
			return visitor.visitDefinedValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterizedValueContext extends ParserRuleContext {
	public simpleDefinedValue(): SimpleDefinedValueContext {
		return this.getRuleContext(0, SimpleDefinedValueContext);
	}
	public actualParameterList(): ActualParameterListContext | undefined {
		return this.tryGetRuleContext(0, ActualParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_parameterizedValue; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitParameterizedValue) {
			return visitor.visitParameterizedValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleDefinedValueContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.IDENTIFIER);
		} else {
			return this.getToken(ASN_3gppParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_simpleDefinedValue; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitSimpleDefinedValue) {
			return visitor.visitSimpleDefinedValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ActualParameterListContext extends ParserRuleContext {
	public L_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
	public actualParameter(): ActualParameterContext[];
	public actualParameter(i: number): ActualParameterContext;
	public actualParameter(i?: number): ActualParameterContext | ActualParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ActualParameterContext);
		} else {
			return this.getRuleContext(i, ActualParameterContext);
		}
	}
	public R_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_actualParameterList; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitActualParameterList) {
			return visitor.visitActualParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ActualParameterContext extends ParserRuleContext {
	public asnType(): AsnTypeContext | undefined {
		return this.tryGetRuleContext(0, AsnTypeContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_actualParameter; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitActualParameter) {
			return visitor.visitActualParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExceptionSpecContext extends ParserRuleContext {
	public EXCLAM(): TerminalNode { return this.getToken(ASN_3gppParser.EXCLAM, 0); }
	public exceptionIdentification(): ExceptionIdentificationContext {
		return this.getRuleContext(0, ExceptionIdentificationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_exceptionSpec; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitExceptionSpec) {
			return visitor.visitExceptionSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExceptionIdentificationContext extends ParserRuleContext {
	public signedNumber(): SignedNumberContext | undefined {
		return this.tryGetRuleContext(0, SignedNumberContext);
	}
	public definedValue(): DefinedValueContext | undefined {
		return this.tryGetRuleContext(0, DefinedValueContext);
	}
	public asnType(): AsnTypeContext | undefined {
		return this.tryGetRuleContext(0, AsnTypeContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.COLON, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_exceptionIdentification; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitExceptionIdentification) {
			return visitor.visitExceptionIdentification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditionalEnumerationContext extends ParserRuleContext {
	public enumeration(): EnumerationContext {
		return this.getRuleContext(0, EnumerationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_additionalEnumeration; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitAdditionalEnumeration) {
			return visitor.visitAdditionalEnumeration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegerTypeContext extends ParserRuleContext {
	public INTEGER_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.INTEGER_LITERAL, 0); }
	public L_BRACE(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.L_BRACE, 0); }
	public namedNumberList(): NamedNumberListContext | undefined {
		return this.tryGetRuleContext(0, NamedNumberListContext);
	}
	public R_BRACE(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.R_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_integerType; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitIntegerType) {
			return visitor.visitIntegerType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedNumberListContext extends ParserRuleContext {
	public namedNumber(): NamedNumberContext[];
	public namedNumber(i: number): NamedNumberContext;
	public namedNumber(i?: number): NamedNumberContext | NamedNumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedNumberContext);
		} else {
			return this.getRuleContext(i, NamedNumberContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_namedNumberList; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitNamedNumberList) {
			return visitor.visitNamedNumberList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectidentifiertypeContext extends ParserRuleContext {
	public OBJECT_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.OBJECT_LITERAL, 0); }
	public IDENTIFIER_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_objectidentifiertype; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitObjectidentifiertype) {
			return visitor.visitObjectidentifiertype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentRelationConstraintContext extends ParserRuleContext {
	public L_BRACE(): TerminalNode[];
	public L_BRACE(i: number): TerminalNode;
	public L_BRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.L_BRACE);
		} else {
			return this.getToken(ASN_3gppParser.L_BRACE, i);
		}
	}
	public R_BRACE(): TerminalNode[];
	public R_BRACE(i: number): TerminalNode;
	public R_BRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.R_BRACE);
		} else {
			return this.getToken(ASN_3gppParser.R_BRACE, i);
		}
	}
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.IDENTIFIER);
		} else {
			return this.getToken(ASN_3gppParser.IDENTIFIER, i);
		}
	}
	public atNotation(): AtNotationContext[];
	public atNotation(i: number): AtNotationContext;
	public atNotation(i?: number): AtNotationContext | AtNotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AtNotationContext);
		} else {
			return this.getRuleContext(i, AtNotationContext);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.DOT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_componentRelationConstraint; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitComponentRelationConstraint) {
			return visitor.visitComponentRelationConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtNotationContext extends ParserRuleContext {
	public componentIdList(): ComponentIdListContext {
		return this.getRuleContext(0, ComponentIdListContext);
	}
	public A_ROND(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.A_ROND, 0); }
	public A_ROND_DOT(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.A_ROND_DOT, 0); }
	public level(): LevelContext | undefined {
		return this.tryGetRuleContext(0, LevelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_atNotation; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitAtNotation) {
			return visitor.visitAtNotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LevelContext extends ParserRuleContext {
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.DOT, 0); }
	public level(): LevelContext | undefined {
		return this.tryGetRuleContext(0, LevelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_level; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitLevel) {
			return visitor.visitLevel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentIdListContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.IDENTIFIER);
		} else {
			return this.getToken(ASN_3gppParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.DOT);
		} else {
			return this.getToken(ASN_3gppParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_componentIdList; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitComponentIdList) {
			return visitor.visitComponentIdList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OctetStringTypeContext extends ParserRuleContext {
	public OCTET_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.OCTET_LITERAL, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_octetStringType; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitOctetStringType) {
			return visitor.visitOctetStringType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitStringTypeContext extends ParserRuleContext {
	public BIT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.BIT_LITERAL, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.STRING_LITERAL, 0); }
	public L_BRACE(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.L_BRACE, 0); }
	public namedBitList(): NamedBitListContext | undefined {
		return this.tryGetRuleContext(0, NamedBitListContext);
	}
	public R_BRACE(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.R_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_bitStringType; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitBitStringType) {
			return visitor.visitBitStringType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedBitListContext extends ParserRuleContext {
	public namedBit(): NamedBitContext[];
	public namedBit(i: number): NamedBitContext;
	public namedBit(i?: number): NamedBitContext | NamedBitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedBitContext);
		} else {
			return this.getRuleContext(i, NamedBitContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_namedBitList; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitNamedBitList) {
			return visitor.visitNamedBitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedBitContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public L_PARAN(): TerminalNode { return this.getToken(ASN_3gppParser.L_PARAN, 0); }
	public R_PARAN(): TerminalNode { return this.getToken(ASN_3gppParser.R_PARAN, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.NUMBER, 0); }
	public definedValue(): DefinedValueContext | undefined {
		return this.tryGetRuleContext(0, DefinedValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_namedBit; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitNamedBit) {
			return visitor.visitNamedBit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanValueContext extends ParserRuleContext {
	public TRUE_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.TRUE_LITERAL, 0); }
	public FALSE_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.FALSE_LITERAL, 0); }
	public TRUE_SMALL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.TRUE_SMALL_LITERAL, 0); }
	public FALSE_SMALL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.FALSE_SMALL_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_booleanValue; }
	// @Override
	public accept<Result>(visitor: ASN_3gppVisitor<Result>): Result {
		if (visitor.visitBooleanValue) {
			return visitor.visitBooleanValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


