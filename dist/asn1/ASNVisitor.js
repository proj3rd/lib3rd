// Generated from src/asn1/ASN.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by ASNParser.

function ASNVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

ASNVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
ASNVisitor.prototype.constructor = ASNVisitor;

// Visit a parse tree produced by ASNParser#modules.
ASNVisitor.prototype.visitModules = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#moduleDefinition.
ASNVisitor.prototype.visitModuleDefinition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#tagDefault.
ASNVisitor.prototype.visitTagDefault = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#extensionDefault.
ASNVisitor.prototype.visitExtensionDefault = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#moduleBody.
ASNVisitor.prototype.visitModuleBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#exports.
ASNVisitor.prototype.visitExports = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#symbolsExported.
ASNVisitor.prototype.visitSymbolsExported = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#imports.
ASNVisitor.prototype.visitImports = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#symbolsImported.
ASNVisitor.prototype.visitSymbolsImported = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#symbolsFromModuleList.
ASNVisitor.prototype.visitSymbolsFromModuleList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#symbolsFromModule.
ASNVisitor.prototype.visitSymbolsFromModule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#globalModuleReference.
ASNVisitor.prototype.visitGlobalModuleReference = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#assignedIdentifier.
ASNVisitor.prototype.visitAssignedIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#symbolList.
ASNVisitor.prototype.visitSymbolList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#symbol.
ASNVisitor.prototype.visitSymbol = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#assignmentList.
ASNVisitor.prototype.visitAssignmentList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#assignment.
ASNVisitor.prototype.visitAssignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#sequenceType.
ASNVisitor.prototype.visitSequenceType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#extensionAndException.
ASNVisitor.prototype.visitExtensionAndException = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#optionalExtensionMarker.
ASNVisitor.prototype.visitOptionalExtensionMarker = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#componentTypeLists.
ASNVisitor.prototype.visitComponentTypeLists = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#rootComponentTypeList.
ASNVisitor.prototype.visitRootComponentTypeList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#componentTypeList.
ASNVisitor.prototype.visitComponentTypeList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#componentType.
ASNVisitor.prototype.visitComponentType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#extensionAdditions.
ASNVisitor.prototype.visitExtensionAdditions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#extensionAdditionList.
ASNVisitor.prototype.visitExtensionAdditionList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#extensionAddition.
ASNVisitor.prototype.visitExtensionAddition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#extensionAdditionGroup.
ASNVisitor.prototype.visitExtensionAdditionGroup = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#versionNumber.
ASNVisitor.prototype.visitVersionNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#sequenceOfType.
ASNVisitor.prototype.visitSequenceOfType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#sizeConstraint.
ASNVisitor.prototype.visitSizeConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#parameterizedAssignment.
ASNVisitor.prototype.visitParameterizedAssignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#parameterList.
ASNVisitor.prototype.visitParameterList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#parameter.
ASNVisitor.prototype.visitParameter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#paramGovernor.
ASNVisitor.prototype.visitParamGovernor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#governor.
ASNVisitor.prototype.visitGovernor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#objectClassAssignment.
ASNVisitor.prototype.visitObjectClassAssignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#objectClass.
ASNVisitor.prototype.visitObjectClass = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#definedObjectClass.
ASNVisitor.prototype.visitDefinedObjectClass = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#usefulObjectClassReference.
ASNVisitor.prototype.visitUsefulObjectClassReference = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#externalObjectClassReference.
ASNVisitor.prototype.visitExternalObjectClassReference = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#objectClassDefn.
ASNVisitor.prototype.visitObjectClassDefn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#withSyntaxSpec.
ASNVisitor.prototype.visitWithSyntaxSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#syntaxList.
ASNVisitor.prototype.visitSyntaxList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#tokenOrGroupSpec.
ASNVisitor.prototype.visitTokenOrGroupSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#optionalGroup.
ASNVisitor.prototype.visitOptionalGroup = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#requiredToken.
ASNVisitor.prototype.visitRequiredToken = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#literal.
ASNVisitor.prototype.visitLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#primitiveFieldName.
ASNVisitor.prototype.visitPrimitiveFieldName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#fieldSpec.
ASNVisitor.prototype.visitFieldSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#typeFieldSpec.
ASNVisitor.prototype.visitTypeFieldSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#typeOptionalitySpec.
ASNVisitor.prototype.visitTypeOptionalitySpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#fixedTypeValueFieldSpec.
ASNVisitor.prototype.visitFixedTypeValueFieldSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#valueOptionalitySpec.
ASNVisitor.prototype.visitValueOptionalitySpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#variableTypeValueFieldSpec.
ASNVisitor.prototype.visitVariableTypeValueFieldSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#fixedTypeValueSetFieldSpec.
ASNVisitor.prototype.visitFixedTypeValueSetFieldSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#valueSetOptionalitySpec.
ASNVisitor.prototype.visitValueSetOptionalitySpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#object.
ASNVisitor.prototype.visitObject = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#parameterizedObject.
ASNVisitor.prototype.visitParameterizedObject = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#definedObject.
ASNVisitor.prototype.visitDefinedObject = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#objectSet.
ASNVisitor.prototype.visitObjectSet = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#objectSetSpec.
ASNVisitor.prototype.visitObjectSetSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#fieldName.
ASNVisitor.prototype.visitFieldName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#valueSet.
ASNVisitor.prototype.visitValueSet = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#elementSetSpecs.
ASNVisitor.prototype.visitElementSetSpecs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#rootElementSetSpec.
ASNVisitor.prototype.visitRootElementSetSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#additionalElementSetSpec.
ASNVisitor.prototype.visitAdditionalElementSetSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#elementSetSpec.
ASNVisitor.prototype.visitElementSetSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#unions.
ASNVisitor.prototype.visitUnions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#exclusions.
ASNVisitor.prototype.visitExclusions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#intersections.
ASNVisitor.prototype.visitIntersections = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#unionMark.
ASNVisitor.prototype.visitUnionMark = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#intersectionMark.
ASNVisitor.prototype.visitIntersectionMark = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#elements.
ASNVisitor.prototype.visitElements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#objectSetElements.
ASNVisitor.prototype.visitObjectSetElements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#intersectionElements.
ASNVisitor.prototype.visitIntersectionElements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#subtypeElements.
ASNVisitor.prototype.visitSubtypeElements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#variableTypeValueSetFieldSpec.
ASNVisitor.prototype.visitVariableTypeValueSetFieldSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#objectFieldSpec.
ASNVisitor.prototype.visitObjectFieldSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#objectOptionalitySpec.
ASNVisitor.prototype.visitObjectOptionalitySpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#objectSetFieldSpec.
ASNVisitor.prototype.visitObjectSetFieldSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#objectSetOptionalitySpec.
ASNVisitor.prototype.visitObjectSetOptionalitySpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#typeAssignment.
ASNVisitor.prototype.visitTypeAssignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#valueAssignment.
ASNVisitor.prototype.visitValueAssignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#asnType.
ASNVisitor.prototype.visitAsnType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#builtinType.
ASNVisitor.prototype.visitBuiltinType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#objectClassFieldType.
ASNVisitor.prototype.visitObjectClassFieldType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#setType.
ASNVisitor.prototype.visitSetType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#setOfType.
ASNVisitor.prototype.visitSetOfType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#referencedType.
ASNVisitor.prototype.visitReferencedType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#definedType.
ASNVisitor.prototype.visitDefinedType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#constraint.
ASNVisitor.prototype.visitConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#constraintSpec.
ASNVisitor.prototype.visitConstraintSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#userDefinedConstraint.
ASNVisitor.prototype.visitUserDefinedConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#generalConstraint.
ASNVisitor.prototype.visitGeneralConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#userDefinedConstraintParameter.
ASNVisitor.prototype.visitUserDefinedConstraintParameter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#tableConstraint.
ASNVisitor.prototype.visitTableConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#simpleTableConstraint.
ASNVisitor.prototype.visitSimpleTableConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#contentsConstraint.
ASNVisitor.prototype.visitContentsConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#componentPresenceLists.
ASNVisitor.prototype.visitComponentPresenceLists = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#componentPresenceList.
ASNVisitor.prototype.visitComponentPresenceList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#componentPresence.
ASNVisitor.prototype.visitComponentPresence = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#subtypeConstraint.
ASNVisitor.prototype.visitSubtypeConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#value.
ASNVisitor.prototype.visitValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#builtinValue.
ASNVisitor.prototype.visitBuiltinValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#objectIdentifierValue.
ASNVisitor.prototype.visitObjectIdentifierValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#objIdComponentsList.
ASNVisitor.prototype.visitObjIdComponentsList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#objIdComponents.
ASNVisitor.prototype.visitObjIdComponents = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#integerValue.
ASNVisitor.prototype.visitIntegerValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#choiceValue.
ASNVisitor.prototype.visitChoiceValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#enumeratedValue.
ASNVisitor.prototype.visitEnumeratedValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#signedNumber.
ASNVisitor.prototype.visitSignedNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#choiceType.
ASNVisitor.prototype.visitChoiceType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#alternativeTypeLists.
ASNVisitor.prototype.visitAlternativeTypeLists = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#extensionAdditionAlternatives.
ASNVisitor.prototype.visitExtensionAdditionAlternatives = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#extensionAdditionAlternativesList.
ASNVisitor.prototype.visitExtensionAdditionAlternativesList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#extensionAdditionAlternative.
ASNVisitor.prototype.visitExtensionAdditionAlternative = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#extensionAdditionAlternativesGroup.
ASNVisitor.prototype.visitExtensionAdditionAlternativesGroup = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#rootAlternativeTypeList.
ASNVisitor.prototype.visitRootAlternativeTypeList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#alternativeTypeList.
ASNVisitor.prototype.visitAlternativeTypeList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#namedType.
ASNVisitor.prototype.visitNamedType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#enumeratedType.
ASNVisitor.prototype.visitEnumeratedType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#enumerations.
ASNVisitor.prototype.visitEnumerations = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#rootEnumeration.
ASNVisitor.prototype.visitRootEnumeration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#enumeration.
ASNVisitor.prototype.visitEnumeration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#enumerationItem.
ASNVisitor.prototype.visitEnumerationItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#namedNumber.
ASNVisitor.prototype.visitNamedNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#definedValue.
ASNVisitor.prototype.visitDefinedValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#parameterizedValue.
ASNVisitor.prototype.visitParameterizedValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#simpleDefinedValue.
ASNVisitor.prototype.visitSimpleDefinedValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#actualParameterList.
ASNVisitor.prototype.visitActualParameterList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#actualParameter.
ASNVisitor.prototype.visitActualParameter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#exceptionSpec.
ASNVisitor.prototype.visitExceptionSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#exceptionIdentification.
ASNVisitor.prototype.visitExceptionIdentification = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#additionalEnumeration.
ASNVisitor.prototype.visitAdditionalEnumeration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#integerType.
ASNVisitor.prototype.visitIntegerType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#namedNumberList.
ASNVisitor.prototype.visitNamedNumberList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#objectidentifiertype.
ASNVisitor.prototype.visitObjectidentifiertype = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#componentRelationConstraint.
ASNVisitor.prototype.visitComponentRelationConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#atNotation.
ASNVisitor.prototype.visitAtNotation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#level.
ASNVisitor.prototype.visitLevel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#componentIdList.
ASNVisitor.prototype.visitComponentIdList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#octetStringType.
ASNVisitor.prototype.visitOctetStringType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#bitStringType.
ASNVisitor.prototype.visitBitStringType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#namedBitList.
ASNVisitor.prototype.visitNamedBitList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#namedBit.
ASNVisitor.prototype.visitNamedBit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ASNParser#booleanValue.
ASNVisitor.prototype.visitBooleanValue = function(ctx) {
  return this.visitChildren(ctx);
};



exports.ASNVisitor = ASNVisitor;