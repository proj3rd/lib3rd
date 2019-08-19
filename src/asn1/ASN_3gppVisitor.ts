// Generated from src/asn1/ASN_3gpp.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ModulesContext } from "./ASN_3gppParser";
import { ModuleDefinitionContext } from "./ASN_3gppParser";
import { TagDefaultContext } from "./ASN_3gppParser";
import { ExtensionDefaultContext } from "./ASN_3gppParser";
import { ModuleBodyContext } from "./ASN_3gppParser";
import { ExportsContext } from "./ASN_3gppParser";
import { SymbolsExportedContext } from "./ASN_3gppParser";
import { ImportsContext } from "./ASN_3gppParser";
import { SymbolsImportedContext } from "./ASN_3gppParser";
import { SymbolsFromModuleListContext } from "./ASN_3gppParser";
import { SymbolsFromModuleContext } from "./ASN_3gppParser";
import { GlobalModuleReferenceContext } from "./ASN_3gppParser";
import { AssignedIdentifierContext } from "./ASN_3gppParser";
import { SymbolListContext } from "./ASN_3gppParser";
import { SymbolContext } from "./ASN_3gppParser";
import { AssignmentListContext } from "./ASN_3gppParser";
import { AssignmentContext } from "./ASN_3gppParser";
import { SequenceTypeContext } from "./ASN_3gppParser";
import { ExtensionAndExceptionContext } from "./ASN_3gppParser";
import { OptionalExtensionMarkerContext } from "./ASN_3gppParser";
import { ComponentTypeListsContext } from "./ASN_3gppParser";
import { RootComponentTypeListContext } from "./ASN_3gppParser";
import { ComponentTypeListContext } from "./ASN_3gppParser";
import { ComponentTypeContext } from "./ASN_3gppParser";
import { TagContext } from "./ASN_3gppParser";
import { ExtensionAdditionsContext } from "./ASN_3gppParser";
import { ExtensionAdditionListContext } from "./ASN_3gppParser";
import { ExtensionAdditionContext } from "./ASN_3gppParser";
import { ExtensionAdditionGroupContext } from "./ASN_3gppParser";
import { VersionNumberContext } from "./ASN_3gppParser";
import { SequenceOfTypeContext } from "./ASN_3gppParser";
import { SizeConstraintContext } from "./ASN_3gppParser";
import { ParameterizedAssignmentContext } from "./ASN_3gppParser";
import { ParameterListContext } from "./ASN_3gppParser";
import { ParameterContext } from "./ASN_3gppParser";
import { ParamGovernorContext } from "./ASN_3gppParser";
import { GovernorContext } from "./ASN_3gppParser";
import { ObjectClassAssignmentContext } from "./ASN_3gppParser";
import { ObjectClassContext } from "./ASN_3gppParser";
import { DefinedObjectClassContext } from "./ASN_3gppParser";
import { UsefulObjectClassReferenceContext } from "./ASN_3gppParser";
import { ExternalObjectClassReferenceContext } from "./ASN_3gppParser";
import { ObjectClassDefnContext } from "./ASN_3gppParser";
import { WithSyntaxSpecContext } from "./ASN_3gppParser";
import { SyntaxListContext } from "./ASN_3gppParser";
import { TokenOrGroupSpecContext } from "./ASN_3gppParser";
import { OptionalGroupContext } from "./ASN_3gppParser";
import { RequiredTokenContext } from "./ASN_3gppParser";
import { LiteralContext } from "./ASN_3gppParser";
import { PrimitiveFieldNameContext } from "./ASN_3gppParser";
import { FieldSpecContext } from "./ASN_3gppParser";
import { TypeFieldSpecContext } from "./ASN_3gppParser";
import { TypeOptionalitySpecContext } from "./ASN_3gppParser";
import { FixedTypeValueFieldSpecContext } from "./ASN_3gppParser";
import { ValueOptionalitySpecContext } from "./ASN_3gppParser";
import { VariableTypeValueFieldSpecContext } from "./ASN_3gppParser";
import { FixedTypeValueSetFieldSpecContext } from "./ASN_3gppParser";
import { ValueSetOptionalitySpecContext } from "./ASN_3gppParser";
import { ObjectContext } from "./ASN_3gppParser";
import { ParameterizedObjectContext } from "./ASN_3gppParser";
import { DefinedObjectContext } from "./ASN_3gppParser";
import { ObjectSetContext } from "./ASN_3gppParser";
import { ObjectSetSpecContext } from "./ASN_3gppParser";
import { FieldNameContext } from "./ASN_3gppParser";
import { ValueSetContext } from "./ASN_3gppParser";
import { ElementSetSpecsContext } from "./ASN_3gppParser";
import { RootElementSetSpecContext } from "./ASN_3gppParser";
import { AdditionalElementSetSpecContext } from "./ASN_3gppParser";
import { ElementSetSpecContext } from "./ASN_3gppParser";
import { UnionsContext } from "./ASN_3gppParser";
import { ExclusionsContext } from "./ASN_3gppParser";
import { IntersectionsContext } from "./ASN_3gppParser";
import { UnionMarkContext } from "./ASN_3gppParser";
import { IntersectionMarkContext } from "./ASN_3gppParser";
import { ElementsContext } from "./ASN_3gppParser";
import { ObjectSetElementsContext } from "./ASN_3gppParser";
import { IntersectionElementsContext } from "./ASN_3gppParser";
import { SubtypeElementsContext } from "./ASN_3gppParser";
import { VariableTypeValueSetFieldSpecContext } from "./ASN_3gppParser";
import { ObjectFieldSpecContext } from "./ASN_3gppParser";
import { ObjectOptionalitySpecContext } from "./ASN_3gppParser";
import { ObjectSetFieldSpecContext } from "./ASN_3gppParser";
import { ObjectSetOptionalitySpecContext } from "./ASN_3gppParser";
import { TypeAssignmentContext } from "./ASN_3gppParser";
import { ValueAssignmentContext } from "./ASN_3gppParser";
import { AsnTypeContext } from "./ASN_3gppParser";
import { BuiltinTypeContext } from "./ASN_3gppParser";
import { ObjectClassFieldTypeContext } from "./ASN_3gppParser";
import { SetTypeContext } from "./ASN_3gppParser";
import { SetOfTypeContext } from "./ASN_3gppParser";
import { ReferencedTypeContext } from "./ASN_3gppParser";
import { DefinedTypeContext } from "./ASN_3gppParser";
import { ConstraintContext } from "./ASN_3gppParser";
import { ConstraintSpecContext } from "./ASN_3gppParser";
import { UserDefinedConstraintContext } from "./ASN_3gppParser";
import { GeneralConstraintContext } from "./ASN_3gppParser";
import { UserDefinedConstraintParameterContext } from "./ASN_3gppParser";
import { TableConstraintContext } from "./ASN_3gppParser";
import { SimpleTableConstraintContext } from "./ASN_3gppParser";
import { ContentsConstraintContext } from "./ASN_3gppParser";
import { ComponentPresenceListsContext } from "./ASN_3gppParser";
import { ComponentPresenceListContext } from "./ASN_3gppParser";
import { ComponentPresenceContext } from "./ASN_3gppParser";
import { SubtypeConstraintContext } from "./ASN_3gppParser";
import { ValueContext } from "./ASN_3gppParser";
import { BuiltinValueContext } from "./ASN_3gppParser";
import { ObjectIdentifierValueContext } from "./ASN_3gppParser";
import { ObjIdComponentsListContext } from "./ASN_3gppParser";
import { ObjIdComponentsContext } from "./ASN_3gppParser";
import { IntegerValueContext } from "./ASN_3gppParser";
import { ChoiceValueContext } from "./ASN_3gppParser";
import { EnumeratedValueContext } from "./ASN_3gppParser";
import { SignedNumberContext } from "./ASN_3gppParser";
import { ChoiceTypeContext } from "./ASN_3gppParser";
import { AlternativeTypeListsContext } from "./ASN_3gppParser";
import { ExtensionAdditionAlternativesContext } from "./ASN_3gppParser";
import { ExtensionAdditionAlternativesListContext } from "./ASN_3gppParser";
import { ExtensionAdditionAlternativeContext } from "./ASN_3gppParser";
import { ExtensionAdditionAlternativesGroupContext } from "./ASN_3gppParser";
import { RootAlternativeTypeListContext } from "./ASN_3gppParser";
import { AlternativeTypeListContext } from "./ASN_3gppParser";
import { NamedTypeContext } from "./ASN_3gppParser";
import { EnumeratedTypeContext } from "./ASN_3gppParser";
import { EnumerationsContext } from "./ASN_3gppParser";
import { RootEnumerationContext } from "./ASN_3gppParser";
import { EnumerationContext } from "./ASN_3gppParser";
import { EnumerationItemContext } from "./ASN_3gppParser";
import { NamedNumberContext } from "./ASN_3gppParser";
import { DefinedValueContext } from "./ASN_3gppParser";
import { ParameterizedValueContext } from "./ASN_3gppParser";
import { SimpleDefinedValueContext } from "./ASN_3gppParser";
import { ActualParameterListContext } from "./ASN_3gppParser";
import { ActualParameterContext } from "./ASN_3gppParser";
import { ExceptionSpecContext } from "./ASN_3gppParser";
import { ExceptionIdentificationContext } from "./ASN_3gppParser";
import { AdditionalEnumerationContext } from "./ASN_3gppParser";
import { IntegerTypeContext } from "./ASN_3gppParser";
import { NamedNumberListContext } from "./ASN_3gppParser";
import { ObjectidentifiertypeContext } from "./ASN_3gppParser";
import { ComponentRelationConstraintContext } from "./ASN_3gppParser";
import { AtNotationContext } from "./ASN_3gppParser";
import { LevelContext } from "./ASN_3gppParser";
import { ComponentIdListContext } from "./ASN_3gppParser";
import { OctetStringTypeContext } from "./ASN_3gppParser";
import { BitStringTypeContext } from "./ASN_3gppParser";
import { NamedBitListContext } from "./ASN_3gppParser";
import { NamedBitContext } from "./ASN_3gppParser";
import { BooleanValueContext } from "./ASN_3gppParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ASN_3gppParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ASN_3gppVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ASN_3gppParser.modules`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModules?: (ctx: ModulesContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.moduleDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleDefinition?: (ctx: ModuleDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.tagDefault`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagDefault?: (ctx: TagDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.extensionDefault`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensionDefault?: (ctx: ExtensionDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.moduleBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleBody?: (ctx: ModuleBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.exports`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExports?: (ctx: ExportsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.symbolsExported`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbolsExported?: (ctx: SymbolsExportedContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.imports`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImports?: (ctx: ImportsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.symbolsImported`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbolsImported?: (ctx: SymbolsImportedContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.symbolsFromModuleList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbolsFromModuleList?: (ctx: SymbolsFromModuleListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.symbolsFromModule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbolsFromModule?: (ctx: SymbolsFromModuleContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.globalModuleReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalModuleReference?: (ctx: GlobalModuleReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.assignedIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignedIdentifier?: (ctx: AssignedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.symbolList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbolList?: (ctx: SymbolListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.symbol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbol?: (ctx: SymbolContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.assignmentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentList?: (ctx: AssignmentListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.sequenceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSequenceType?: (ctx: SequenceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.extensionAndException`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensionAndException?: (ctx: ExtensionAndExceptionContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.optionalExtensionMarker`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalExtensionMarker?: (ctx: OptionalExtensionMarkerContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.componentTypeLists`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentTypeLists?: (ctx: ComponentTypeListsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.rootComponentTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRootComponentTypeList?: (ctx: RootComponentTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.componentTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentTypeList?: (ctx: ComponentTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.componentType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentType?: (ctx: ComponentTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.tag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTag?: (ctx: TagContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.extensionAdditions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensionAdditions?: (ctx: ExtensionAdditionsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.extensionAdditionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensionAdditionList?: (ctx: ExtensionAdditionListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.extensionAddition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensionAddition?: (ctx: ExtensionAdditionContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.extensionAdditionGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensionAdditionGroup?: (ctx: ExtensionAdditionGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.versionNumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVersionNumber?: (ctx: VersionNumberContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.sequenceOfType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSequenceOfType?: (ctx: SequenceOfTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.sizeConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSizeConstraint?: (ctx: SizeConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.parameterizedAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterizedAssignment?: (ctx: ParameterizedAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.parameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterList?: (ctx: ParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.paramGovernor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamGovernor?: (ctx: ParamGovernorContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.governor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGovernor?: (ctx: GovernorContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.objectClassAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectClassAssignment?: (ctx: ObjectClassAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.objectClass`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectClass?: (ctx: ObjectClassContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.definedObjectClass`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinedObjectClass?: (ctx: DefinedObjectClassContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.usefulObjectClassReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsefulObjectClassReference?: (ctx: UsefulObjectClassReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.externalObjectClassReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternalObjectClassReference?: (ctx: ExternalObjectClassReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.objectClassDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectClassDefn?: (ctx: ObjectClassDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.withSyntaxSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithSyntaxSpec?: (ctx: WithSyntaxSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.syntaxList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSyntaxList?: (ctx: SyntaxListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.tokenOrGroupSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTokenOrGroupSpec?: (ctx: TokenOrGroupSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.optionalGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalGroup?: (ctx: OptionalGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.requiredToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRequiredToken?: (ctx: RequiredTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.primitiveFieldName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveFieldName?: (ctx: PrimitiveFieldNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.fieldSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldSpec?: (ctx: FieldSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.typeFieldSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeFieldSpec?: (ctx: TypeFieldSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.typeOptionalitySpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeOptionalitySpec?: (ctx: TypeOptionalitySpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.fixedTypeValueFieldSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFixedTypeValueFieldSpec?: (ctx: FixedTypeValueFieldSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.valueOptionalitySpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueOptionalitySpec?: (ctx: ValueOptionalitySpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.variableTypeValueFieldSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableTypeValueFieldSpec?: (ctx: VariableTypeValueFieldSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.fixedTypeValueSetFieldSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFixedTypeValueSetFieldSpec?: (ctx: FixedTypeValueSetFieldSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.valueSetOptionalitySpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueSetOptionalitySpec?: (ctx: ValueSetOptionalitySpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.object`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject?: (ctx: ObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.parameterizedObject`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterizedObject?: (ctx: ParameterizedObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.definedObject`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinedObject?: (ctx: DefinedObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.objectSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectSet?: (ctx: ObjectSetContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.objectSetSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectSetSpec?: (ctx: ObjectSetSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.fieldName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldName?: (ctx: FieldNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.valueSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueSet?: (ctx: ValueSetContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.elementSetSpecs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementSetSpecs?: (ctx: ElementSetSpecsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.rootElementSetSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRootElementSetSpec?: (ctx: RootElementSetSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.additionalElementSetSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditionalElementSetSpec?: (ctx: AdditionalElementSetSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.elementSetSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementSetSpec?: (ctx: ElementSetSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.unions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnions?: (ctx: UnionsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.exclusions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExclusions?: (ctx: ExclusionsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.intersections`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntersections?: (ctx: IntersectionsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.unionMark`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionMark?: (ctx: UnionMarkContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.intersectionMark`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntersectionMark?: (ctx: IntersectionMarkContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.elements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElements?: (ctx: ElementsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.objectSetElements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectSetElements?: (ctx: ObjectSetElementsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.intersectionElements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntersectionElements?: (ctx: IntersectionElementsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.subtypeElements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubtypeElements?: (ctx: SubtypeElementsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.variableTypeValueSetFieldSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableTypeValueSetFieldSpec?: (ctx: VariableTypeValueSetFieldSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.objectFieldSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectFieldSpec?: (ctx: ObjectFieldSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.objectOptionalitySpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectOptionalitySpec?: (ctx: ObjectOptionalitySpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.objectSetFieldSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectSetFieldSpec?: (ctx: ObjectSetFieldSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.objectSetOptionalitySpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectSetOptionalitySpec?: (ctx: ObjectSetOptionalitySpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.typeAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeAssignment?: (ctx: TypeAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.valueAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueAssignment?: (ctx: ValueAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.asnType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAsnType?: (ctx: AsnTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.builtinType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuiltinType?: (ctx: BuiltinTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.objectClassFieldType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectClassFieldType?: (ctx: ObjectClassFieldTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.setType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetType?: (ctx: SetTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.setOfType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetOfType?: (ctx: SetOfTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.referencedType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReferencedType?: (ctx: ReferencedTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.definedType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinedType?: (ctx: DefinedTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.constraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraint?: (ctx: ConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.constraintSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraintSpec?: (ctx: ConstraintSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.userDefinedConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUserDefinedConstraint?: (ctx: UserDefinedConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.generalConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeneralConstraint?: (ctx: GeneralConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.userDefinedConstraintParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUserDefinedConstraintParameter?: (ctx: UserDefinedConstraintParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.tableConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableConstraint?: (ctx: TableConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.simpleTableConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleTableConstraint?: (ctx: SimpleTableConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.contentsConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContentsConstraint?: (ctx: ContentsConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.componentPresenceLists`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentPresenceLists?: (ctx: ComponentPresenceListsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.componentPresenceList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentPresenceList?: (ctx: ComponentPresenceListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.componentPresence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentPresence?: (ctx: ComponentPresenceContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.subtypeConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubtypeConstraint?: (ctx: SubtypeConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.builtinValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuiltinValue?: (ctx: BuiltinValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.objectIdentifierValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectIdentifierValue?: (ctx: ObjectIdentifierValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.objIdComponentsList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjIdComponentsList?: (ctx: ObjIdComponentsListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.objIdComponents`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjIdComponents?: (ctx: ObjIdComponentsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.integerValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerValue?: (ctx: IntegerValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.choiceValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChoiceValue?: (ctx: ChoiceValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.enumeratedValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumeratedValue?: (ctx: EnumeratedValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.signedNumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignedNumber?: (ctx: SignedNumberContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.choiceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChoiceType?: (ctx: ChoiceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.alternativeTypeLists`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlternativeTypeLists?: (ctx: AlternativeTypeListsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.extensionAdditionAlternatives`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensionAdditionAlternatives?: (ctx: ExtensionAdditionAlternativesContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.extensionAdditionAlternativesList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensionAdditionAlternativesList?: (ctx: ExtensionAdditionAlternativesListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.extensionAdditionAlternative`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensionAdditionAlternative?: (ctx: ExtensionAdditionAlternativeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.extensionAdditionAlternativesGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensionAdditionAlternativesGroup?: (ctx: ExtensionAdditionAlternativesGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.rootAlternativeTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRootAlternativeTypeList?: (ctx: RootAlternativeTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.alternativeTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlternativeTypeList?: (ctx: AlternativeTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.namedType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedType?: (ctx: NamedTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.enumeratedType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumeratedType?: (ctx: EnumeratedTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.enumerations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumerations?: (ctx: EnumerationsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.rootEnumeration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRootEnumeration?: (ctx: RootEnumerationContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.enumeration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumeration?: (ctx: EnumerationContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.enumerationItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumerationItem?: (ctx: EnumerationItemContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.namedNumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedNumber?: (ctx: NamedNumberContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.definedValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinedValue?: (ctx: DefinedValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.parameterizedValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterizedValue?: (ctx: ParameterizedValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.simpleDefinedValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleDefinedValue?: (ctx: SimpleDefinedValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.actualParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActualParameterList?: (ctx: ActualParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.actualParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActualParameter?: (ctx: ActualParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.exceptionSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExceptionSpec?: (ctx: ExceptionSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.exceptionIdentification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExceptionIdentification?: (ctx: ExceptionIdentificationContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.additionalEnumeration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditionalEnumeration?: (ctx: AdditionalEnumerationContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.integerType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerType?: (ctx: IntegerTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.namedNumberList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedNumberList?: (ctx: NamedNumberListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.objectidentifiertype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectidentifiertype?: (ctx: ObjectidentifiertypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.componentRelationConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentRelationConstraint?: (ctx: ComponentRelationConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.atNotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtNotation?: (ctx: AtNotationContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.level`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLevel?: (ctx: LevelContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.componentIdList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentIdList?: (ctx: ComponentIdListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.octetStringType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOctetStringType?: (ctx: OctetStringTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.bitStringType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitStringType?: (ctx: BitStringTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.namedBitList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedBitList?: (ctx: NamedBitListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.namedBit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedBit?: (ctx: NamedBitContext) => Result;

	/**
	 * Visit a parse tree produced by `ASN_3gppParser.booleanValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanValue?: (ctx: BooleanValueContext) => Result;
}

