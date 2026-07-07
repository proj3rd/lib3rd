// Hand-written AST for the grammar3rd.g4 ASN.1 grammar.
// Every parser rule in the grammar has a corresponding type here.
// Field ordering follows the rule alternatives in the grammar.

use std::rc::Rc;

// ---------------------------------------------------------------------------
// Module-level
// ---------------------------------------------------------------------------

#[derive(Debug, Clone)]
pub struct ModuleDefinition {
    pub name: Ident,
    pub module_id: Option<ModuleIdentifier>,
    pub tag_default: TagDefault,
    pub extension_default: ExtensionDefault,
    pub body: ModuleBody,
}

#[derive(Debug, Clone)]
pub struct ModuleIdentifier {
    pub name: Ident,
    pub oid_components: Vec<(Ident, Number)>,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum TagDefault {
    Explicit,
    Implicit,
    Automatic,
    Unspecified,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ExtensionDefault {
    Implied,
    Unspecified,
}

#[derive(Debug, Clone, Default)]
pub struct ModuleBody {
    pub exports: Exports,
    pub imports: Imports,
    pub assignments: Vec<Assignment>,
}

#[derive(Debug, Clone, Default)]
pub enum Exports {
    #[default]
    None,
    All,
    Symbols(Vec<Symbol>),
}

#[derive(Debug, Clone, Default)]
pub struct Imports {
    pub items: Vec<SymbolsFromModule>,
}

#[derive(Debug, Clone)]
pub struct SymbolsFromModule {
    pub symbols: Vec<Symbol>,
    pub module_ref: GlobalModuleReference,
}

#[derive(Debug, Clone)]
pub struct GlobalModuleReference {
    pub name: Ident,
    pub assigned_identifier: AssignedIdentifier,
}

#[derive(Debug, Clone, Default)]
pub struct AssignedIdentifier; // grammar rule is empty

#[derive(Debug, Clone)]
pub struct Symbol {
    pub name: Ident,
    pub parameterized: bool, // presence of "{ }"
}

pub type Ident = Rc<str>;
pub type Number = i64;

// ---------------------------------------------------------------------------
// Assignment
// ---------------------------------------------------------------------------

#[derive(Debug, Clone)]
pub enum Assignment {
    Value(ValueAssignment),
    Type(TypeAssignment),
    Parameterized(ParameterizedAssignment),
    ObjectClass(ObjectClassAssignment),
}

#[derive(Debug, Clone)]
pub struct ValueAssignment {
    pub name: Ident,
    pub ty: AsnType,
    pub value: Value,
}

#[derive(Debug, Clone)]
pub struct TypeAssignment {
    pub name: Ident,
    pub ty: AsnType,
}

#[derive(Debug, Clone)]
pub struct ObjectClassAssignment {
    pub name: Ident,
    pub object_class: ObjectClass,
}

// ---------------------------------------------------------------------------
// Parameterized assignment
// ---------------------------------------------------------------------------

#[derive(Debug, Clone)]
pub enum ParameterizedAssignment {
    /// parameterList ASSIGN_OP (asnType | value | valueSet)
    Type {
        name: Ident,
        params: ParameterList,
        inner: ParameterizedTypeInner,
    },
    /// definedObjectClass ASSIGN_OP (object | objectClass | objectSet)
    Object {
        name: Ident,
        object_class: DefinedObjectClass,
        inner: ParameterizedObjectInner,
    },
}

#[derive(Debug, Clone)]
pub enum ParameterizedTypeInner {
    Type(AsnType),
    Value(Value),
    ValueSet(ValueSet),
}

#[derive(Debug, Clone)]
pub enum ParameterizedObjectInner {
    Object(Object),
    ObjectClass(ObjectClass),
    ObjectSet(ObjectSet),
}

#[derive(Debug, Clone)]
pub struct ParameterList {
    pub params: Vec<Parameter>,
}

#[derive(Debug, Clone)]
pub struct Parameter {
    pub governor: Option<ParamGovernor>,
    pub name: Ident,
}

#[derive(Debug, Clone)]
pub enum ParamGovernor {
    Governor(Governor),
    Ident(Ident),
}

#[derive(Debug, Clone)]
pub enum Governor {
    Type(AsnType),
    ObjectClass(DefinedObjectClass),
}

// ---------------------------------------------------------------------------
// Type
// ---------------------------------------------------------------------------

#[derive(Debug, Clone)]
pub struct AsnType {
    pub base: Box<TypeBase>,
    pub constraints: Vec<Constraint>,
}

#[derive(Debug, Clone)]
pub enum TypeBase {
    Builtin(Box<BuiltinType>),
    Referenced(ReferencedType),
}

#[derive(Debug, Clone)]
pub enum BuiltinType {
    OctetString,
    BitString(Option<NamedBitList>),
    CharacterString(RestrictedCharacterStringType),
    Choice(ChoiceType),
    Enumerated(Box<EnumeratedType>),
    Integer(Option<NamedNumberList>),
    Sequence(SequenceType),
    SequenceOf(Box<SequenceOfType>),
    Set(SetType),
    SetOf(Box<SetOfType>),
    ObjectIdentifier,
    ObjectClassField(ObjectClassFieldType),
    Boolean,
    Null,
}

#[derive(Debug, Clone)]
pub struct NamedBitList {
    pub bits: Vec<NamedBit>,
}

#[derive(Debug, Clone)]
pub struct NamedBit {
    pub name: Ident,
    pub value: NamedBitValue,
}

#[derive(Debug, Clone)]
pub enum NamedBitValue {
    Number(Number),
    DefinedValue(DefinedValue),
}

#[derive(Debug, Clone)]
pub struct NamedNumberList {
    pub numbers: Vec<NamedNumber>,
}

#[derive(Debug, Clone)]
pub struct NamedNumber {
    pub name: Ident,
    pub value: NamedNumberValue,
}

#[derive(Debug, Clone)]
pub enum NamedNumberValue {
    SignedNumber(SignedNumber),
    DefinedValue(DefinedValue),
}

#[derive(Debug, Clone)]
pub enum RestrictedCharacterStringType {
    Bmp,
    Graphic,
    Ia5,
    Iso646,
    Numeric,
    Printable,
    Teletext,
    T61,
    Universal,
    Utf8,
    Videotex,
    Visible,
}

#[derive(Debug, Clone)]
pub struct ChoiceType {
    pub alternatives: AlternativeTypeLists,
}

#[derive(Debug, Clone)]
pub struct AlternativeTypeLists {
    pub root: Vec<NamedType>,
    pub extension: Option<ExtensionAdditionAlternatives>,
    pub extension_marker: bool,
}

#[derive(Debug, Clone, Default)]
pub struct ExtensionAdditionAlternatives {
    pub additions: Vec<ExtensionAdditionAlternative>,
}

#[derive(Debug, Clone)]
pub enum ExtensionAdditionAlternative {
    Group(ExtensionAdditionAlternativesGroup),
    NamedType(NamedType),
}

#[derive(Debug, Clone)]
pub struct ExtensionAdditionAlternativesGroup {
    pub version: Option<Number>,
    pub list: Vec<NamedType>,
}

#[derive(Debug, Clone)]
pub struct NamedType {
    pub name: Ident,
    pub ty: AsnType,
}

#[derive(Debug, Clone)]
pub struct EnumeratedType {
    pub root: Enumeration,
    pub extension: Option<Box<EnumerationExtension>>,
}

#[derive(Debug, Clone)]
pub struct Enumeration {
    pub items: Vec<EnumerationItem>,
}

#[derive(Debug, Clone)]
pub struct EnumerationExtension {
    pub exception: Option<Box<ExceptionSpec>>,
    pub additional: Enumeration,
}

#[derive(Debug, Clone)]
pub enum EnumerationItem {
    Ident(Ident),
    NamedNumber(NamedNumber),
    Value(Value),
}

// Sequence / Set
#[derive(Debug, Clone)]
pub struct SequenceType {
    pub body: Option<SequenceBody>,
}

#[derive(Debug, Clone)]
pub enum SequenceBody {
    /// extensionAndException optionalExtensionMarker
    ExtensionOnly {
        exception: Option<Box<ExceptionSpec>>,
        optional_marker: bool,
    },
    List(ComponentTypeLists),
}

#[derive(Debug, Clone)]
pub enum ComponentTypeLists {
    Root(ComponentTypeList),
    RootAndExtension {
        root: ComponentTypeList,
        exception: Option<Box<ExceptionSpec>>,
        additions: ExtensionAdditions,
        // optional final ellipsis + final root list
        final_part: Option<ExtensionFinalPart>,
    },
    ExtensionOnly {
        exception: Option<Box<ExceptionSpec>>,
        additions: ExtensionAdditions,
        final_part: Option<ExtensionFinalPart>,
    },
}

#[derive(Debug, Clone)]
pub struct ExtensionFinalPart {
    pub has_ellipsis: bool,
    pub final_list: Option<ComponentTypeList>,
}

#[derive(Debug, Clone)]
pub struct ComponentTypeList {
    pub components: Vec<ComponentType>,
}

#[derive(Debug, Clone)]
pub struct ComponentType {
    pub tag: Option<Tag>,
    pub inner: ComponentTypeInner,
}

#[derive(Debug, Clone)]
pub enum ComponentTypeInner {
    NamedType {
        named: NamedType,
        optional: bool,
        default: Option<Value>,
    },
    ComponentsOf(AsnType),
}

#[derive(Debug, Clone, Default)]
pub struct ExtensionAdditions {
    pub additions: Vec<ExtensionAddition>,
}

#[derive(Debug, Clone)]
pub enum ExtensionAddition {
    ComponentType(ComponentType),
    Group(ExtensionAdditionGroup),
}

#[derive(Debug, Clone)]
pub struct ExtensionAdditionGroup {
    pub version: Option<Number>,
    pub list: ComponentTypeList,
}

#[derive(Debug, Clone)]
pub struct SequenceOfType {
    pub constraint: Option<SeqOfConstraint>,
    pub inner: SeqOfInner,
}

#[derive(Debug, Clone)]
pub enum SeqOfConstraint {
    Constraint(Box<Constraint>),
    Size(SizeConstraint),
}

#[derive(Debug, Clone)]
pub enum SeqOfInner {
    Type(AsnType),
    NamedType(NamedType),
}

#[derive(Debug, Clone)]
pub struct SetType {
    pub body: Option<SequenceBody>, // same shape as SEQUENCE
}

#[derive(Debug, Clone)]
pub struct SetOfType {
    pub constraint: Option<SeqOfConstraint>,
    pub inner: SeqOfInner,
}

#[derive(Debug, Clone)]
pub struct ObjectClassFieldType {
    pub object_class: DefinedObjectClass,
    pub field_name: FieldName,
}

// Referenced types
#[derive(Debug, Clone)]
pub struct ReferencedType {
    pub defined: DefinedType,
}

#[derive(Debug, Clone)]
pub struct DefinedType {
    pub name: Ident,
    pub dot_name: Option<Ident>,
    pub params: Option<ActualParameterList>,
}

// ---------------------------------------------------------------------------
// Constraints
// ---------------------------------------------------------------------------

#[derive(Debug, Clone)]
pub struct Constraint {
    pub spec: ConstraintSpec,
    pub exception: Option<Box<ExceptionSpec>>,
}

#[derive(Debug, Clone)]
pub enum ConstraintSpec {
    General(GeneralConstraint),
    Subtype(SubtypeConstraint),
}

#[derive(Debug, Clone)]
pub enum GeneralConstraint {
    UserDefined(UserDefinedConstraint),
    Table(ComponentRelationConstraint),
    Contents(ContentsConstraint),
}

#[derive(Debug, Clone)]
pub struct UserDefinedConstraint {
    pub params: Vec<UserDefinedConstraintParameter>,
}

#[derive(Debug, Clone)]
pub struct UserDefinedConstraintParameter {
    pub governor: Option<Governor>,
    pub value: Option<UserConstraintParamValue>,
}

#[derive(Debug, Clone)]
pub enum UserConstraintParamValue {
    Value(Value),
    ValueSet(ValueSet),
    Object(Object),
    ObjectSet(ObjectSet),
}

#[derive(Debug, Clone)]
pub struct ComponentRelationConstraint {
    pub first: Ident,
    pub first_dot: Option<Ident>,
    pub at_notations: Vec<AtNotation>,
}

#[derive(Debug, Clone)]
pub struct AtNotation {
    pub kind: AtNotationKind,
    pub components: Vec<Ident>,
}

#[derive(Debug, Clone)]
pub enum AtNotationKind {
    At,
    AtDot(Option<Box<Level>>),
}

#[derive(Debug, Clone)]
pub struct Level {
    pub inner: Option<Box<Level>>,
}

#[derive(Debug, Clone)]
pub enum ContentsConstraint {
    Containing(AsnType),
    EncodedBy(Value),
    ContainingEncodedBy { ty: AsnType, value: Value },
    WithComponents(ComponentPresenceLists),
}

#[derive(Debug, Clone)]
pub struct ComponentPresenceLists {
    pub initial: Option<Vec<ComponentPresence>>,
    pub ellipsis: bool,
    pub after: Option<Vec<ComponentPresence>>,
}

#[derive(Debug, Clone)]
pub struct ComponentPresence {
    pub name: Ident,
    pub presence: Presence,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum Presence {
    Absent,
    Present,
}

#[derive(Debug, Clone)]
pub struct SubtypeConstraint {
    pub specs: ElementSetSpecs,
}

#[derive(Debug, Clone)]
pub struct SizeConstraint {
    pub inner: Box<Constraint>,
}

#[derive(Debug, Clone)]
pub struct ElementSetSpecs {
    pub root: ElementSetSpec,
    pub extension: Option<AdditionalElementSetSpec>,
}

#[derive(Debug, Clone)]
pub struct AdditionalElementSetSpec {
    pub spec: ElementSetSpec,
}

#[derive(Debug, Clone)]
pub enum ElementSetSpec {
    Unions(Unions),
    AllExcept(AllExclusions),
}

#[derive(Debug, Clone)]
pub struct AllExclusions {
    pub exclusions: Elements,
}

#[derive(Debug, Clone)]
pub struct Unions {
    pub first: Intersections,
    pub rest: Vec<UnionMarkIntersections>,
}

#[derive(Debug, Clone)]
pub struct UnionMarkIntersections {
    pub mark: UnionMark,
    pub intersections: Intersections,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum UnionMark {
    Pipe,
    Union,
}

#[derive(Debug, Clone)]
pub struct Intersections {
    pub first: IntersectionElement,
    pub rest: Vec<(IntersectionMark, IntersectionElement)>,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum IntersectionMark {
    Power,
    Intersection,
}

#[derive(Debug, Clone)]
pub struct IntersectionElement {
    pub elements: Elements,
    pub exclusions: Option<Elements>,
}

#[derive(Debug, Clone)]
pub enum Elements {
    Subtype(SubtypeElements),
    // objectSetElements omitted per grammar comments
}

#[derive(Debug, Clone)]
pub enum SubtypeElements {
    Range {
        from: RangeEndpoint,
        from_lt: bool,
        to: RangeEndpoint,
        to_lt: bool,
    },
    Size(SizeConstraint),
    Pattern(Value),
    Value(Value),
}

#[derive(Debug, Clone)]
pub enum RangeEndpoint {
    Value(Value),
    Min,
    Max,
}

// ---------------------------------------------------------------------------
// Value
// ---------------------------------------------------------------------------

#[derive(Debug, Clone)]
pub struct Value {
    pub inner: BuiltinValue,
}

#[derive(Debug, Clone)]
pub enum BuiltinValue {
    Enumerated(Ident),
    Integer(IntegerValue),
    Choice(ChoiceValue),
    ObjectIdentifier(ObjectIdentifierValue),
    Boolean(BooleanValue),
    CString(String),
    BString(String),
    /// SEQUENCE/SET value: { name value, name value, ... }
    /// (Not in grammar3rd.g4; added for practical use.)
    NamedValueList(Vec<NamedFieldValue>),
}

#[derive(Debug, Clone)]
pub struct NamedFieldValue {
    pub name: Ident,
    pub value: Value,
}

#[derive(Debug, Clone)]
pub enum IntegerValue {
    SignedNumber(SignedNumber),
    Ident(Ident),
}

#[derive(Debug, Clone)]
pub struct ChoiceValue {
    pub name: Ident,
    pub value: Box<Value>,
}

#[derive(Debug, Clone)]
pub struct ObjectIdentifierValue {
    pub components: Vec<ObjIdComponent>,
}

#[derive(Debug, Clone)]
pub enum ObjIdComponent {
    Number(Number),
    NamedNumber {
        name: Ident,
        inner: NamedNumberComponent,
    },
    DefinedValue(DefinedValue),
    BuiltinType {
        ty: AsnType,
        constraint: Option<Constraint>,
    },
}

#[derive(Debug, Clone)]
pub enum NamedNumberComponent {
    Number(Number),
    DefinedValue(DefinedValue),
}

#[derive(Debug, Clone)]
pub enum BooleanValue {
    True,
    False,
    TrueSmall,
    FalseSmall,
}

#[derive(Debug, Clone)]
pub struct SignedNumber {
    pub negative: bool,
    pub value: Number,
}

#[derive(Debug, Clone)]
pub struct DefinedValue {
    pub inner: ParameterizedValue,
}

#[derive(Debug, Clone)]
pub struct ParameterizedValue {
    pub simple: SimpleDefinedValue,
    pub params: Option<ActualParameterList>,
}

#[derive(Debug, Clone)]
pub struct SimpleDefinedValue {
    pub name: Ident,
    pub dot_name: Option<Ident>,
}

#[derive(Debug, Clone)]
pub struct ActualParameterList {
    pub params: Vec<ActualParameter>,
}

#[derive(Debug, Clone)]
pub enum ActualParameter {
    Type(AsnType),
    Value(Value),
}

// ---------------------------------------------------------------------------
// Exception
// ---------------------------------------------------------------------------

#[derive(Debug, Clone)]
pub struct ExceptionSpec {
    pub ident: ExceptionIdentification,
}

#[derive(Debug, Clone)]
pub enum ExceptionIdentification {
    SignedNumber(SignedNumber),
    DefinedValue(DefinedValue),
    TypeValue { ty: AsnType, value: Value },
}

// ---------------------------------------------------------------------------
// Object class / object / object set
// ---------------------------------------------------------------------------

#[derive(Debug, Clone)]
pub struct ObjectClass {
    pub inner: ObjectClassInner,
}

#[derive(Debug, Clone)]
pub enum ObjectClassInner {
    Defined(DefinedObjectClass),
    Defn(ObjectClassDefn),
}

#[derive(Debug, Clone)]
pub struct DefinedObjectClass {
    pub module: Option<Ident>,
    pub name: Ident,
    pub kind: DefinedObjectClassKind,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum DefinedObjectClassKind {
    Reference,
    TypeIdentifier,
    AbstractSyntax,
}

#[derive(Debug, Clone)]
pub struct ObjectClassDefn {
    pub fields: Vec<FieldSpec>,
    pub syntax: Option<WithSyntaxSpec>,
}

#[derive(Debug, Clone)]
pub struct WithSyntaxSpec {
    pub list: SyntaxList,
}

#[derive(Debug, Clone)]
pub struct SyntaxList {
    pub tokens: Vec<TokenOrGroupSpec>,
}

#[derive(Debug, Clone)]
pub enum TokenOrGroupSpec {
    RequiredToken(RequiredToken),
    OptionalGroup(Vec<TokenOrGroupSpec>),
}

#[derive(Debug, Clone)]
pub enum RequiredToken {
    Literal(Literal),
    PrimitiveFieldName(Ident),
}

#[derive(Debug, Clone)]
pub enum Literal {
    Ident(Ident),
    Comma,
}

#[derive(Debug, Clone)]
pub struct PrimitiveFieldName {
    pub name: Ident,
}

#[derive(Debug, Clone)]
pub enum FieldSpec {
    /// &IDENT typeOptionalitySpec?
    TypeField {
        name: Ident,
        optionality: Option<TypeOptionalitySpec>,
    },
    /// &IDENT asnType (valueSetOptionalitySpec? | UNIQUE? valueOptionalitySpec?)
    FixedTypeValueField {
        name: Ident,
        ty: AsnType,
        unique: bool,
        optionality: Option<ValueOptionalitySpec>,
        is_value_set: bool,
    },
    /// &IDENT fieldName (OPTIONAL | DEFAULT (valueSet | value))
    VariableTypeValueField {
        name: Ident,
        field_name: FieldName,
        optionality: Option<VariableTypeValueFieldOptionality>,
    },
    /// &IDENT definedObjectClass (OPTIONAL | DEFAULT (objectSet | object))
    ObjectField {
        name: Ident,
        object_class: DefinedObjectClass,
        optionality: Option<ObjectOptionalitySpec>,
    },
}

#[derive(Debug, Clone)]
pub enum TypeOptionalitySpec {
    Optional,
    Default(AsnType),
}

#[derive(Debug, Clone)]
pub enum ValueOptionalitySpec {
    Optional,
    Default(Value),
}

#[derive(Debug, Clone)]
pub enum ValueSetOptionalitySpec {
    Optional,
    Default(ValueSet),
}

#[derive(Debug, Clone)]
pub enum VariableTypeValueFieldOptionality {
    Optional,
    DefaultValueSet(ValueSet),
    DefaultValue(Value),
}

#[derive(Debug, Clone)]
pub enum ObjectOptionalitySpec {
    Optional,
    Default(Object),
}

#[derive(Debug, Clone)]
pub enum ObjectSetOptionalitySpec {
    Optional,
    Default(ObjectSet),
}

#[derive(Debug, Clone)]
pub struct FieldName {
    pub parts: Vec<Ident>, // first is &ident, rest after dots
}

#[derive(Debug, Clone)]
pub struct Object {
    pub inner: ObjectInner,
}

#[derive(Debug, Clone)]
pub enum ObjectInner {
    Defined(DefinedObject),
    Parameterized(ParameterizedObject),
}

#[derive(Debug, Clone)]
pub struct DefinedObject {
    pub name: Ident,
    pub trailing_dot: bool,
}

#[derive(Debug, Clone)]
pub struct ParameterizedObject {
    pub defined: DefinedObject,
    pub params: ActualParameterList,
}

#[derive(Debug, Clone)]
pub struct ObjectSet {
    pub spec: ObjectSetSpec,
}

#[derive(Debug, Clone)]
pub struct ObjectSetSpec {
    pub root: Option<ElementSetSpec>,
    pub extension: Option<AdditionalElementSetSpec>,
}

#[derive(Debug, Clone)]
pub struct ValueSet {
    pub specs: ElementSetSpecs,
}

// ---------------------------------------------------------------------------
// Tag (comment-based, per grammar)
// ---------------------------------------------------------------------------

#[derive(Debug, Clone)]
pub struct Tag {
    pub text: String,
}
