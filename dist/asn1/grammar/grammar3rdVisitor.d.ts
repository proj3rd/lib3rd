import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { ModulesContext } from "./grammar3rdParser";
import { ModuleDefinitionContext } from "./grammar3rdParser";
import { TagDefaultContext } from "./grammar3rdParser";
import { ExtensionDefaultContext } from "./grammar3rdParser";
import { ModuleBodyContext } from "./grammar3rdParser";
import { ExportsContext } from "./grammar3rdParser";
import { SymbolsExportedContext } from "./grammar3rdParser";
import { ImportsContext } from "./grammar3rdParser";
import { SymbolsImportedContext } from "./grammar3rdParser";
import { SymbolsFromModuleListContext } from "./grammar3rdParser";
import { SymbolsFromModuleContext } from "./grammar3rdParser";
import { GlobalModuleReferenceContext } from "./grammar3rdParser";
import { AssignedIdentifierContext } from "./grammar3rdParser";
import { SymbolListContext } from "./grammar3rdParser";
import { SymbolContext } from "./grammar3rdParser";
import { AssignmentListContext } from "./grammar3rdParser";
import { AssignmentContext } from "./grammar3rdParser";
import { SequenceTypeContext } from "./grammar3rdParser";
import { ExtensionAndExceptionContext } from "./grammar3rdParser";
import { OptionalExtensionMarkerContext } from "./grammar3rdParser";
import { ComponentTypeListsContext } from "./grammar3rdParser";
import { RootComponentTypeListContext } from "./grammar3rdParser";
import { ComponentTypeListContext } from "./grammar3rdParser";
import { ComponentTypeContext } from "./grammar3rdParser";
import { TagContext } from "./grammar3rdParser";
import { ExtensionAdditionsContext } from "./grammar3rdParser";
import { ExtensionAdditionListContext } from "./grammar3rdParser";
import { ExtensionAdditionContext } from "./grammar3rdParser";
import { ExtensionAdditionGroupContext } from "./grammar3rdParser";
import { VersionNumberContext } from "./grammar3rdParser";
import { SequenceOfTypeContext } from "./grammar3rdParser";
import { SizeConstraintContext } from "./grammar3rdParser";
import { ParameterizedAssignmentContext } from "./grammar3rdParser";
import { ParameterListContext } from "./grammar3rdParser";
import { ParameterContext } from "./grammar3rdParser";
import { ParamGovernorContext } from "./grammar3rdParser";
import { GovernorContext } from "./grammar3rdParser";
import { ObjectClassAssignmentContext } from "./grammar3rdParser";
import { ObjectClassContext } from "./grammar3rdParser";
import { DefinedObjectClassContext } from "./grammar3rdParser";
import { UsefulObjectClassReferenceContext } from "./grammar3rdParser";
import { ExternalObjectClassReferenceContext } from "./grammar3rdParser";
import { ObjectClassDefnContext } from "./grammar3rdParser";
import { WithSyntaxSpecContext } from "./grammar3rdParser";
import { SyntaxListContext } from "./grammar3rdParser";
import { TokenOrGroupSpecContext } from "./grammar3rdParser";
import { OptionalGroupContext } from "./grammar3rdParser";
import { RequiredTokenContext } from "./grammar3rdParser";
import { LiteralContext } from "./grammar3rdParser";
import { PrimitiveFieldNameContext } from "./grammar3rdParser";
import { FieldSpecContext } from "./grammar3rdParser";
import { TypeFieldSpecContext } from "./grammar3rdParser";
import { TypeOptionalitySpecContext } from "./grammar3rdParser";
import { FixedTypeValueFieldSpecContext } from "./grammar3rdParser";
import { ValueOptionalitySpecContext } from "./grammar3rdParser";
import { VariableTypeValueFieldSpecContext } from "./grammar3rdParser";
import { FixedTypeValueSetFieldSpecContext } from "./grammar3rdParser";
import { ValueSetOptionalitySpecContext } from "./grammar3rdParser";
import { ObjectContext } from "./grammar3rdParser";
import { ParameterizedObjectContext } from "./grammar3rdParser";
import { DefinedObjectContext } from "./grammar3rdParser";
import { ObjectSetContext } from "./grammar3rdParser";
import { ObjectSetSpecContext } from "./grammar3rdParser";
import { FieldNameContext } from "./grammar3rdParser";
import { ValueSetContext } from "./grammar3rdParser";
import { ElementSetSpecsContext } from "./grammar3rdParser";
import { RootElementSetSpecContext } from "./grammar3rdParser";
import { AdditionalElementSetSpecContext } from "./grammar3rdParser";
import { ElementSetSpecContext } from "./grammar3rdParser";
import { UnionsContext } from "./grammar3rdParser";
import { ExclusionsContext } from "./grammar3rdParser";
import { IntersectionsContext } from "./grammar3rdParser";
import { UnionMarkContext } from "./grammar3rdParser";
import { IntersectionMarkContext } from "./grammar3rdParser";
import { ElementsContext } from "./grammar3rdParser";
import { ObjectSetElementsContext } from "./grammar3rdParser";
import { IntersectionElementsContext } from "./grammar3rdParser";
import { SubtypeElementsContext } from "./grammar3rdParser";
import { VariableTypeValueSetFieldSpecContext } from "./grammar3rdParser";
import { ObjectFieldSpecContext } from "./grammar3rdParser";
import { ObjectOptionalitySpecContext } from "./grammar3rdParser";
import { ObjectSetFieldSpecContext } from "./grammar3rdParser";
import { ObjectSetOptionalitySpecContext } from "./grammar3rdParser";
import { TypeAssignmentContext } from "./grammar3rdParser";
import { ValueAssignmentContext } from "./grammar3rdParser";
import { AsnTypeContext } from "./grammar3rdParser";
import { BuiltinTypeContext } from "./grammar3rdParser";
import { CharacterStringTypeContext } from "./grammar3rdParser";
import { RestrictedCharacterStringTypeContext } from "./grammar3rdParser";
import { ObjectClassFieldTypeContext } from "./grammar3rdParser";
import { SetTypeContext } from "./grammar3rdParser";
import { SetOfTypeContext } from "./grammar3rdParser";
import { ReferencedTypeContext } from "./grammar3rdParser";
import { DefinedTypeContext } from "./grammar3rdParser";
import { ConstraintContext } from "./grammar3rdParser";
import { ConstraintSpecContext } from "./grammar3rdParser";
import { UserDefinedConstraintContext } from "./grammar3rdParser";
import { GeneralConstraintContext } from "./grammar3rdParser";
import { UserDefinedConstraintParameterContext } from "./grammar3rdParser";
import { TableConstraintContext } from "./grammar3rdParser";
import { SimpleTableConstraintContext } from "./grammar3rdParser";
import { ContentsConstraintContext } from "./grammar3rdParser";
import { ComponentPresenceListsContext } from "./grammar3rdParser";
import { ComponentPresenceListContext } from "./grammar3rdParser";
import { ComponentPresenceContext } from "./grammar3rdParser";
import { SubtypeConstraintContext } from "./grammar3rdParser";
import { ValueContext } from "./grammar3rdParser";
import { BuiltinValueContext } from "./grammar3rdParser";
import { ObjectIdentifierValueContext } from "./grammar3rdParser";
import { ObjIdComponentsListContext } from "./grammar3rdParser";
import { ObjIdComponentsContext } from "./grammar3rdParser";
import { IntegerValueContext } from "./grammar3rdParser";
import { ChoiceValueContext } from "./grammar3rdParser";
import { EnumeratedValueContext } from "./grammar3rdParser";
import { SignedNumberContext } from "./grammar3rdParser";
import { ChoiceTypeContext } from "./grammar3rdParser";
import { AlternativeTypeListsContext } from "./grammar3rdParser";
import { ExtensionAdditionAlternativesContext } from "./grammar3rdParser";
import { ExtensionAdditionAlternativesListContext } from "./grammar3rdParser";
import { ExtensionAdditionAlternativeContext } from "./grammar3rdParser";
import { ExtensionAdditionAlternativesGroupContext } from "./grammar3rdParser";
import { RootAlternativeTypeListContext } from "./grammar3rdParser";
import { AlternativeTypeListContext } from "./grammar3rdParser";
import { NamedTypeContext } from "./grammar3rdParser";
import { EnumeratedTypeContext } from "./grammar3rdParser";
import { EnumerationsContext } from "./grammar3rdParser";
import { RootEnumerationContext } from "./grammar3rdParser";
import { EnumerationContext } from "./grammar3rdParser";
import { EnumerationItemContext } from "./grammar3rdParser";
import { NamedNumberContext } from "./grammar3rdParser";
import { DefinedValueContext } from "./grammar3rdParser";
import { ParameterizedValueContext } from "./grammar3rdParser";
import { SimpleDefinedValueContext } from "./grammar3rdParser";
import { ActualParameterListContext } from "./grammar3rdParser";
import { ActualParameterContext } from "./grammar3rdParser";
import { ExceptionSpecContext } from "./grammar3rdParser";
import { ExceptionIdentificationContext } from "./grammar3rdParser";
import { AdditionalEnumerationContext } from "./grammar3rdParser";
import { IntegerTypeContext } from "./grammar3rdParser";
import { NamedNumberListContext } from "./grammar3rdParser";
import { ObjectidentifiertypeContext } from "./grammar3rdParser";
import { ComponentRelationConstraintContext } from "./grammar3rdParser";
import { AtNotationContext } from "./grammar3rdParser";
import { LevelContext } from "./grammar3rdParser";
import { ComponentIdListContext } from "./grammar3rdParser";
import { OctetStringTypeContext } from "./grammar3rdParser";
import { BitStringTypeContext } from "./grammar3rdParser";
import { NamedBitListContext } from "./grammar3rdParser";
import { NamedBitContext } from "./grammar3rdParser";
import { BooleanValueContext } from "./grammar3rdParser";
/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `grammar3rdParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface grammar3rdVisitor<Result> extends ParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `grammar3rdParser.modules`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModules?: (ctx: ModulesContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.moduleDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModuleDefinition?: (ctx: ModuleDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.tagDefault`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTagDefault?: (ctx: TagDefaultContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.extensionDefault`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtensionDefault?: (ctx: ExtensionDefaultContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.moduleBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModuleBody?: (ctx: ModuleBodyContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.exports`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExports?: (ctx: ExportsContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.symbolsExported`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSymbolsExported?: (ctx: SymbolsExportedContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.imports`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImports?: (ctx: ImportsContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.symbolsImported`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSymbolsImported?: (ctx: SymbolsImportedContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.symbolsFromModuleList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSymbolsFromModuleList?: (ctx: SymbolsFromModuleListContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.symbolsFromModule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSymbolsFromModule?: (ctx: SymbolsFromModuleContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.globalModuleReference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGlobalModuleReference?: (ctx: GlobalModuleReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.assignedIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignedIdentifier?: (ctx: AssignedIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.symbolList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSymbolList?: (ctx: SymbolListContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.symbol`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSymbol?: (ctx: SymbolContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.assignmentList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignmentList?: (ctx: AssignmentListContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.assignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignment?: (ctx: AssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.sequenceType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSequenceType?: (ctx: SequenceTypeContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.extensionAndException`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtensionAndException?: (ctx: ExtensionAndExceptionContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.optionalExtensionMarker`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptionalExtensionMarker?: (ctx: OptionalExtensionMarkerContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.componentTypeLists`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComponentTypeLists?: (ctx: ComponentTypeListsContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.rootComponentTypeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRootComponentTypeList?: (ctx: RootComponentTypeListContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.componentTypeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComponentTypeList?: (ctx: ComponentTypeListContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.componentType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComponentType?: (ctx: ComponentTypeContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.tag`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTag?: (ctx: TagContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.extensionAdditions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtensionAdditions?: (ctx: ExtensionAdditionsContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.extensionAdditionList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtensionAdditionList?: (ctx: ExtensionAdditionListContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.extensionAddition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtensionAddition?: (ctx: ExtensionAdditionContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.extensionAdditionGroup`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtensionAdditionGroup?: (ctx: ExtensionAdditionGroupContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.versionNumber`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVersionNumber?: (ctx: VersionNumberContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.sequenceOfType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSequenceOfType?: (ctx: SequenceOfTypeContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.sizeConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSizeConstraint?: (ctx: SizeConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.parameterizedAssignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameterizedAssignment?: (ctx: ParameterizedAssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.parameterList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameterList?: (ctx: ParameterListContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.parameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameter?: (ctx: ParameterContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.paramGovernor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParamGovernor?: (ctx: ParamGovernorContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.governor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGovernor?: (ctx: GovernorContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.objectClassAssignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectClassAssignment?: (ctx: ObjectClassAssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.objectClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectClass?: (ctx: ObjectClassContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.definedObjectClass`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefinedObjectClass?: (ctx: DefinedObjectClassContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.usefulObjectClassReference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsefulObjectClassReference?: (ctx: UsefulObjectClassReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.externalObjectClassReference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExternalObjectClassReference?: (ctx: ExternalObjectClassReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.objectClassDefn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectClassDefn?: (ctx: ObjectClassDefnContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.withSyntaxSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWithSyntaxSpec?: (ctx: WithSyntaxSpecContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.syntaxList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSyntaxList?: (ctx: SyntaxListContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.tokenOrGroupSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTokenOrGroupSpec?: (ctx: TokenOrGroupSpecContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.optionalGroup`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptionalGroup?: (ctx: OptionalGroupContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.requiredToken`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRequiredToken?: (ctx: RequiredTokenContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteral?: (ctx: LiteralContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.primitiveFieldName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimitiveFieldName?: (ctx: PrimitiveFieldNameContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.fieldSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFieldSpec?: (ctx: FieldSpecContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.typeFieldSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeFieldSpec?: (ctx: TypeFieldSpecContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.typeOptionalitySpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeOptionalitySpec?: (ctx: TypeOptionalitySpecContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.fixedTypeValueFieldSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFixedTypeValueFieldSpec?: (ctx: FixedTypeValueFieldSpecContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.valueOptionalitySpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueOptionalitySpec?: (ctx: ValueOptionalitySpecContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.variableTypeValueFieldSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableTypeValueFieldSpec?: (ctx: VariableTypeValueFieldSpecContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.fixedTypeValueSetFieldSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFixedTypeValueSetFieldSpec?: (ctx: FixedTypeValueSetFieldSpecContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.valueSetOptionalitySpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueSetOptionalitySpec?: (ctx: ValueSetOptionalitySpecContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.object`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject?: (ctx: ObjectContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.parameterizedObject`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameterizedObject?: (ctx: ParameterizedObjectContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.definedObject`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefinedObject?: (ctx: DefinedObjectContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.objectSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectSet?: (ctx: ObjectSetContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.objectSetSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectSetSpec?: (ctx: ObjectSetSpecContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.fieldName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFieldName?: (ctx: FieldNameContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.valueSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueSet?: (ctx: ValueSetContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.elementSetSpecs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementSetSpecs?: (ctx: ElementSetSpecsContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.rootElementSetSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRootElementSetSpec?: (ctx: RootElementSetSpecContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.additionalElementSetSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdditionalElementSetSpec?: (ctx: AdditionalElementSetSpecContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.elementSetSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementSetSpec?: (ctx: ElementSetSpecContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.unions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnions?: (ctx: UnionsContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.exclusions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExclusions?: (ctx: ExclusionsContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.intersections`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntersections?: (ctx: IntersectionsContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.unionMark`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnionMark?: (ctx: UnionMarkContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.intersectionMark`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntersectionMark?: (ctx: IntersectionMarkContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.elements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElements?: (ctx: ElementsContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.objectSetElements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectSetElements?: (ctx: ObjectSetElementsContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.intersectionElements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntersectionElements?: (ctx: IntersectionElementsContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.subtypeElements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubtypeElements?: (ctx: SubtypeElementsContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.variableTypeValueSetFieldSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableTypeValueSetFieldSpec?: (ctx: VariableTypeValueSetFieldSpecContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.objectFieldSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectFieldSpec?: (ctx: ObjectFieldSpecContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.objectOptionalitySpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectOptionalitySpec?: (ctx: ObjectOptionalitySpecContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.objectSetFieldSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectSetFieldSpec?: (ctx: ObjectSetFieldSpecContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.objectSetOptionalitySpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectSetOptionalitySpec?: (ctx: ObjectSetOptionalitySpecContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.typeAssignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeAssignment?: (ctx: TypeAssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.valueAssignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueAssignment?: (ctx: ValueAssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.asnType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAsnType?: (ctx: AsnTypeContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.builtinType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBuiltinType?: (ctx: BuiltinTypeContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.characterStringType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCharacterStringType?: (ctx: CharacterStringTypeContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.restrictedCharacterStringType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRestrictedCharacterStringType?: (ctx: RestrictedCharacterStringTypeContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.objectClassFieldType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectClassFieldType?: (ctx: ObjectClassFieldTypeContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.setType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetType?: (ctx: SetTypeContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.setOfType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetOfType?: (ctx: SetOfTypeContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.referencedType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReferencedType?: (ctx: ReferencedTypeContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.definedType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefinedType?: (ctx: DefinedTypeContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.constraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstraint?: (ctx: ConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.constraintSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstraintSpec?: (ctx: ConstraintSpecContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.userDefinedConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUserDefinedConstraint?: (ctx: UserDefinedConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.generalConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneralConstraint?: (ctx: GeneralConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.userDefinedConstraintParameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUserDefinedConstraintParameter?: (ctx: UserDefinedConstraintParameterContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.tableConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableConstraint?: (ctx: TableConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.simpleTableConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleTableConstraint?: (ctx: SimpleTableConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.contentsConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContentsConstraint?: (ctx: ContentsConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.componentPresenceLists`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComponentPresenceLists?: (ctx: ComponentPresenceListsContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.componentPresenceList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComponentPresenceList?: (ctx: ComponentPresenceListContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.componentPresence`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComponentPresence?: (ctx: ComponentPresenceContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.subtypeConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubtypeConstraint?: (ctx: SubtypeConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValue?: (ctx: ValueContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.builtinValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBuiltinValue?: (ctx: BuiltinValueContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.objectIdentifierValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectIdentifierValue?: (ctx: ObjectIdentifierValueContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.objIdComponentsList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjIdComponentsList?: (ctx: ObjIdComponentsListContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.objIdComponents`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjIdComponents?: (ctx: ObjIdComponentsContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.integerValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntegerValue?: (ctx: IntegerValueContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.choiceValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitChoiceValue?: (ctx: ChoiceValueContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.enumeratedValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumeratedValue?: (ctx: EnumeratedValueContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.signedNumber`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSignedNumber?: (ctx: SignedNumberContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.choiceType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitChoiceType?: (ctx: ChoiceTypeContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.alternativeTypeLists`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlternativeTypeLists?: (ctx: AlternativeTypeListsContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.extensionAdditionAlternatives`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtensionAdditionAlternatives?: (ctx: ExtensionAdditionAlternativesContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.extensionAdditionAlternativesList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtensionAdditionAlternativesList?: (ctx: ExtensionAdditionAlternativesListContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.extensionAdditionAlternative`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtensionAdditionAlternative?: (ctx: ExtensionAdditionAlternativeContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.extensionAdditionAlternativesGroup`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtensionAdditionAlternativesGroup?: (ctx: ExtensionAdditionAlternativesGroupContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.rootAlternativeTypeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRootAlternativeTypeList?: (ctx: RootAlternativeTypeListContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.alternativeTypeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlternativeTypeList?: (ctx: AlternativeTypeListContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.namedType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedType?: (ctx: NamedTypeContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.enumeratedType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumeratedType?: (ctx: EnumeratedTypeContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.enumerations`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumerations?: (ctx: EnumerationsContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.rootEnumeration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRootEnumeration?: (ctx: RootEnumerationContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.enumeration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumeration?: (ctx: EnumerationContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.enumerationItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumerationItem?: (ctx: EnumerationItemContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.namedNumber`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedNumber?: (ctx: NamedNumberContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.definedValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefinedValue?: (ctx: DefinedValueContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.parameterizedValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameterizedValue?: (ctx: ParameterizedValueContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.simpleDefinedValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleDefinedValue?: (ctx: SimpleDefinedValueContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.actualParameterList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitActualParameterList?: (ctx: ActualParameterListContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.actualParameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitActualParameter?: (ctx: ActualParameterContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.exceptionSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExceptionSpec?: (ctx: ExceptionSpecContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.exceptionIdentification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExceptionIdentification?: (ctx: ExceptionIdentificationContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.additionalEnumeration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdditionalEnumeration?: (ctx: AdditionalEnumerationContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.integerType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntegerType?: (ctx: IntegerTypeContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.namedNumberList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedNumberList?: (ctx: NamedNumberListContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.objectidentifiertype`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectidentifiertype?: (ctx: ObjectidentifiertypeContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.componentRelationConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComponentRelationConstraint?: (ctx: ComponentRelationConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.atNotation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAtNotation?: (ctx: AtNotationContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.level`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLevel?: (ctx: LevelContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.componentIdList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComponentIdList?: (ctx: ComponentIdListContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.octetStringType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOctetStringType?: (ctx: OctetStringTypeContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.bitStringType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBitStringType?: (ctx: BitStringTypeContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.namedBitList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedBitList?: (ctx: NamedBitListContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.namedBit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedBit?: (ctx: NamedBitContext) => Result;
    /**
     * Visit a parse tree produced by `grammar3rdParser.booleanValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanValue?: (ctx: BooleanValueContext) => Result;
}
//# sourceMappingURL=grammar3rdVisitor.d.ts.map