// Generated from src/asn1/ASN.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by ASNParser.
function ASNListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ASNListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ASNListener.prototype.constructor = ASNListener;

// Enter a parse tree produced by ASNParser#modules.
ASNListener.prototype.enterModules = function(ctx) {
};

// Exit a parse tree produced by ASNParser#modules.
ASNListener.prototype.exitModules = function(ctx) {
};


// Enter a parse tree produced by ASNParser#moduleDefinition.
ASNListener.prototype.enterModuleDefinition = function(ctx) {
};

// Exit a parse tree produced by ASNParser#moduleDefinition.
ASNListener.prototype.exitModuleDefinition = function(ctx) {
};


// Enter a parse tree produced by ASNParser#tagDefault.
ASNListener.prototype.enterTagDefault = function(ctx) {
};

// Exit a parse tree produced by ASNParser#tagDefault.
ASNListener.prototype.exitTagDefault = function(ctx) {
};


// Enter a parse tree produced by ASNParser#extensionDefault.
ASNListener.prototype.enterExtensionDefault = function(ctx) {
};

// Exit a parse tree produced by ASNParser#extensionDefault.
ASNListener.prototype.exitExtensionDefault = function(ctx) {
};


// Enter a parse tree produced by ASNParser#moduleBody.
ASNListener.prototype.enterModuleBody = function(ctx) {
};

// Exit a parse tree produced by ASNParser#moduleBody.
ASNListener.prototype.exitModuleBody = function(ctx) {
};


// Enter a parse tree produced by ASNParser#exports.
ASNListener.prototype.enterExports = function(ctx) {
};

// Exit a parse tree produced by ASNParser#exports.
ASNListener.prototype.exitExports = function(ctx) {
};


// Enter a parse tree produced by ASNParser#symbolsExported.
ASNListener.prototype.enterSymbolsExported = function(ctx) {
};

// Exit a parse tree produced by ASNParser#symbolsExported.
ASNListener.prototype.exitSymbolsExported = function(ctx) {
};


// Enter a parse tree produced by ASNParser#imports.
ASNListener.prototype.enterImports = function(ctx) {
};

// Exit a parse tree produced by ASNParser#imports.
ASNListener.prototype.exitImports = function(ctx) {
};


// Enter a parse tree produced by ASNParser#symbolsImported.
ASNListener.prototype.enterSymbolsImported = function(ctx) {
};

// Exit a parse tree produced by ASNParser#symbolsImported.
ASNListener.prototype.exitSymbolsImported = function(ctx) {
};


// Enter a parse tree produced by ASNParser#symbolsFromModuleList.
ASNListener.prototype.enterSymbolsFromModuleList = function(ctx) {
};

// Exit a parse tree produced by ASNParser#symbolsFromModuleList.
ASNListener.prototype.exitSymbolsFromModuleList = function(ctx) {
};


// Enter a parse tree produced by ASNParser#symbolsFromModule.
ASNListener.prototype.enterSymbolsFromModule = function(ctx) {
};

// Exit a parse tree produced by ASNParser#symbolsFromModule.
ASNListener.prototype.exitSymbolsFromModule = function(ctx) {
};


// Enter a parse tree produced by ASNParser#globalModuleReference.
ASNListener.prototype.enterGlobalModuleReference = function(ctx) {
};

// Exit a parse tree produced by ASNParser#globalModuleReference.
ASNListener.prototype.exitGlobalModuleReference = function(ctx) {
};


// Enter a parse tree produced by ASNParser#assignedIdentifier.
ASNListener.prototype.enterAssignedIdentifier = function(ctx) {
};

// Exit a parse tree produced by ASNParser#assignedIdentifier.
ASNListener.prototype.exitAssignedIdentifier = function(ctx) {
};


// Enter a parse tree produced by ASNParser#symbolList.
ASNListener.prototype.enterSymbolList = function(ctx) {
};

// Exit a parse tree produced by ASNParser#symbolList.
ASNListener.prototype.exitSymbolList = function(ctx) {
};


// Enter a parse tree produced by ASNParser#symbol.
ASNListener.prototype.enterSymbol = function(ctx) {
};

// Exit a parse tree produced by ASNParser#symbol.
ASNListener.prototype.exitSymbol = function(ctx) {
};


// Enter a parse tree produced by ASNParser#assignmentList.
ASNListener.prototype.enterAssignmentList = function(ctx) {
};

// Exit a parse tree produced by ASNParser#assignmentList.
ASNListener.prototype.exitAssignmentList = function(ctx) {
};


// Enter a parse tree produced by ASNParser#assignment.
ASNListener.prototype.enterAssignment = function(ctx) {
};

// Exit a parse tree produced by ASNParser#assignment.
ASNListener.prototype.exitAssignment = function(ctx) {
};


// Enter a parse tree produced by ASNParser#sequenceType.
ASNListener.prototype.enterSequenceType = function(ctx) {
};

// Exit a parse tree produced by ASNParser#sequenceType.
ASNListener.prototype.exitSequenceType = function(ctx) {
};


// Enter a parse tree produced by ASNParser#extensionAndException.
ASNListener.prototype.enterExtensionAndException = function(ctx) {
};

// Exit a parse tree produced by ASNParser#extensionAndException.
ASNListener.prototype.exitExtensionAndException = function(ctx) {
};


// Enter a parse tree produced by ASNParser#optionalExtensionMarker.
ASNListener.prototype.enterOptionalExtensionMarker = function(ctx) {
};

// Exit a parse tree produced by ASNParser#optionalExtensionMarker.
ASNListener.prototype.exitOptionalExtensionMarker = function(ctx) {
};


// Enter a parse tree produced by ASNParser#componentTypeLists.
ASNListener.prototype.enterComponentTypeLists = function(ctx) {
};

// Exit a parse tree produced by ASNParser#componentTypeLists.
ASNListener.prototype.exitComponentTypeLists = function(ctx) {
};


// Enter a parse tree produced by ASNParser#rootComponentTypeList.
ASNListener.prototype.enterRootComponentTypeList = function(ctx) {
};

// Exit a parse tree produced by ASNParser#rootComponentTypeList.
ASNListener.prototype.exitRootComponentTypeList = function(ctx) {
};


// Enter a parse tree produced by ASNParser#componentTypeList.
ASNListener.prototype.enterComponentTypeList = function(ctx) {
};

// Exit a parse tree produced by ASNParser#componentTypeList.
ASNListener.prototype.exitComponentTypeList = function(ctx) {
};


// Enter a parse tree produced by ASNParser#componentType.
ASNListener.prototype.enterComponentType = function(ctx) {
};

// Exit a parse tree produced by ASNParser#componentType.
ASNListener.prototype.exitComponentType = function(ctx) {
};


// Enter a parse tree produced by ASNParser#extensionAdditions.
ASNListener.prototype.enterExtensionAdditions = function(ctx) {
};

// Exit a parse tree produced by ASNParser#extensionAdditions.
ASNListener.prototype.exitExtensionAdditions = function(ctx) {
};


// Enter a parse tree produced by ASNParser#extensionAdditionList.
ASNListener.prototype.enterExtensionAdditionList = function(ctx) {
};

// Exit a parse tree produced by ASNParser#extensionAdditionList.
ASNListener.prototype.exitExtensionAdditionList = function(ctx) {
};


// Enter a parse tree produced by ASNParser#extensionAddition.
ASNListener.prototype.enterExtensionAddition = function(ctx) {
};

// Exit a parse tree produced by ASNParser#extensionAddition.
ASNListener.prototype.exitExtensionAddition = function(ctx) {
};


// Enter a parse tree produced by ASNParser#extensionAdditionGroup.
ASNListener.prototype.enterExtensionAdditionGroup = function(ctx) {
};

// Exit a parse tree produced by ASNParser#extensionAdditionGroup.
ASNListener.prototype.exitExtensionAdditionGroup = function(ctx) {
};


// Enter a parse tree produced by ASNParser#versionNumber.
ASNListener.prototype.enterVersionNumber = function(ctx) {
};

// Exit a parse tree produced by ASNParser#versionNumber.
ASNListener.prototype.exitVersionNumber = function(ctx) {
};


// Enter a parse tree produced by ASNParser#sequenceOfType.
ASNListener.prototype.enterSequenceOfType = function(ctx) {
};

// Exit a parse tree produced by ASNParser#sequenceOfType.
ASNListener.prototype.exitSequenceOfType = function(ctx) {
};


// Enter a parse tree produced by ASNParser#sizeConstraint.
ASNListener.prototype.enterSizeConstraint = function(ctx) {
};

// Exit a parse tree produced by ASNParser#sizeConstraint.
ASNListener.prototype.exitSizeConstraint = function(ctx) {
};


// Enter a parse tree produced by ASNParser#parameterizedAssignment.
ASNListener.prototype.enterParameterizedAssignment = function(ctx) {
};

// Exit a parse tree produced by ASNParser#parameterizedAssignment.
ASNListener.prototype.exitParameterizedAssignment = function(ctx) {
};


// Enter a parse tree produced by ASNParser#parameterList.
ASNListener.prototype.enterParameterList = function(ctx) {
};

// Exit a parse tree produced by ASNParser#parameterList.
ASNListener.prototype.exitParameterList = function(ctx) {
};


// Enter a parse tree produced by ASNParser#parameter.
ASNListener.prototype.enterParameter = function(ctx) {
};

// Exit a parse tree produced by ASNParser#parameter.
ASNListener.prototype.exitParameter = function(ctx) {
};


// Enter a parse tree produced by ASNParser#paramGovernor.
ASNListener.prototype.enterParamGovernor = function(ctx) {
};

// Exit a parse tree produced by ASNParser#paramGovernor.
ASNListener.prototype.exitParamGovernor = function(ctx) {
};


// Enter a parse tree produced by ASNParser#governor.
ASNListener.prototype.enterGovernor = function(ctx) {
};

// Exit a parse tree produced by ASNParser#governor.
ASNListener.prototype.exitGovernor = function(ctx) {
};


// Enter a parse tree produced by ASNParser#objectClassAssignment.
ASNListener.prototype.enterObjectClassAssignment = function(ctx) {
};

// Exit a parse tree produced by ASNParser#objectClassAssignment.
ASNListener.prototype.exitObjectClassAssignment = function(ctx) {
};


// Enter a parse tree produced by ASNParser#objectClass.
ASNListener.prototype.enterObjectClass = function(ctx) {
};

// Exit a parse tree produced by ASNParser#objectClass.
ASNListener.prototype.exitObjectClass = function(ctx) {
};


// Enter a parse tree produced by ASNParser#definedObjectClass.
ASNListener.prototype.enterDefinedObjectClass = function(ctx) {
};

// Exit a parse tree produced by ASNParser#definedObjectClass.
ASNListener.prototype.exitDefinedObjectClass = function(ctx) {
};


// Enter a parse tree produced by ASNParser#usefulObjectClassReference.
ASNListener.prototype.enterUsefulObjectClassReference = function(ctx) {
};

// Exit a parse tree produced by ASNParser#usefulObjectClassReference.
ASNListener.prototype.exitUsefulObjectClassReference = function(ctx) {
};


// Enter a parse tree produced by ASNParser#externalObjectClassReference.
ASNListener.prototype.enterExternalObjectClassReference = function(ctx) {
};

// Exit a parse tree produced by ASNParser#externalObjectClassReference.
ASNListener.prototype.exitExternalObjectClassReference = function(ctx) {
};


// Enter a parse tree produced by ASNParser#objectClassDefn.
ASNListener.prototype.enterObjectClassDefn = function(ctx) {
};

// Exit a parse tree produced by ASNParser#objectClassDefn.
ASNListener.prototype.exitObjectClassDefn = function(ctx) {
};


// Enter a parse tree produced by ASNParser#withSyntaxSpec.
ASNListener.prototype.enterWithSyntaxSpec = function(ctx) {
};

// Exit a parse tree produced by ASNParser#withSyntaxSpec.
ASNListener.prototype.exitWithSyntaxSpec = function(ctx) {
};


// Enter a parse tree produced by ASNParser#syntaxList.
ASNListener.prototype.enterSyntaxList = function(ctx) {
};

// Exit a parse tree produced by ASNParser#syntaxList.
ASNListener.prototype.exitSyntaxList = function(ctx) {
};


// Enter a parse tree produced by ASNParser#tokenOrGroupSpec.
ASNListener.prototype.enterTokenOrGroupSpec = function(ctx) {
};

// Exit a parse tree produced by ASNParser#tokenOrGroupSpec.
ASNListener.prototype.exitTokenOrGroupSpec = function(ctx) {
};


// Enter a parse tree produced by ASNParser#optionalGroup.
ASNListener.prototype.enterOptionalGroup = function(ctx) {
};

// Exit a parse tree produced by ASNParser#optionalGroup.
ASNListener.prototype.exitOptionalGroup = function(ctx) {
};


// Enter a parse tree produced by ASNParser#requiredToken.
ASNListener.prototype.enterRequiredToken = function(ctx) {
};

// Exit a parse tree produced by ASNParser#requiredToken.
ASNListener.prototype.exitRequiredToken = function(ctx) {
};


// Enter a parse tree produced by ASNParser#literal.
ASNListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by ASNParser#literal.
ASNListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by ASNParser#primitiveFieldName.
ASNListener.prototype.enterPrimitiveFieldName = function(ctx) {
};

// Exit a parse tree produced by ASNParser#primitiveFieldName.
ASNListener.prototype.exitPrimitiveFieldName = function(ctx) {
};


// Enter a parse tree produced by ASNParser#fieldSpec.
ASNListener.prototype.enterFieldSpec = function(ctx) {
};

// Exit a parse tree produced by ASNParser#fieldSpec.
ASNListener.prototype.exitFieldSpec = function(ctx) {
};


// Enter a parse tree produced by ASNParser#typeFieldSpec.
ASNListener.prototype.enterTypeFieldSpec = function(ctx) {
};

// Exit a parse tree produced by ASNParser#typeFieldSpec.
ASNListener.prototype.exitTypeFieldSpec = function(ctx) {
};


// Enter a parse tree produced by ASNParser#typeOptionalitySpec.
ASNListener.prototype.enterTypeOptionalitySpec = function(ctx) {
};

// Exit a parse tree produced by ASNParser#typeOptionalitySpec.
ASNListener.prototype.exitTypeOptionalitySpec = function(ctx) {
};


// Enter a parse tree produced by ASNParser#fixedTypeValueFieldSpec.
ASNListener.prototype.enterFixedTypeValueFieldSpec = function(ctx) {
};

// Exit a parse tree produced by ASNParser#fixedTypeValueFieldSpec.
ASNListener.prototype.exitFixedTypeValueFieldSpec = function(ctx) {
};


// Enter a parse tree produced by ASNParser#valueOptionalitySpec.
ASNListener.prototype.enterValueOptionalitySpec = function(ctx) {
};

// Exit a parse tree produced by ASNParser#valueOptionalitySpec.
ASNListener.prototype.exitValueOptionalitySpec = function(ctx) {
};


// Enter a parse tree produced by ASNParser#variableTypeValueFieldSpec.
ASNListener.prototype.enterVariableTypeValueFieldSpec = function(ctx) {
};

// Exit a parse tree produced by ASNParser#variableTypeValueFieldSpec.
ASNListener.prototype.exitVariableTypeValueFieldSpec = function(ctx) {
};


// Enter a parse tree produced by ASNParser#fixedTypeValueSetFieldSpec.
ASNListener.prototype.enterFixedTypeValueSetFieldSpec = function(ctx) {
};

// Exit a parse tree produced by ASNParser#fixedTypeValueSetFieldSpec.
ASNListener.prototype.exitFixedTypeValueSetFieldSpec = function(ctx) {
};


// Enter a parse tree produced by ASNParser#valueSetOptionalitySpec.
ASNListener.prototype.enterValueSetOptionalitySpec = function(ctx) {
};

// Exit a parse tree produced by ASNParser#valueSetOptionalitySpec.
ASNListener.prototype.exitValueSetOptionalitySpec = function(ctx) {
};


// Enter a parse tree produced by ASNParser#object.
ASNListener.prototype.enterObject = function(ctx) {
};

// Exit a parse tree produced by ASNParser#object.
ASNListener.prototype.exitObject = function(ctx) {
};


// Enter a parse tree produced by ASNParser#parameterizedObject.
ASNListener.prototype.enterParameterizedObject = function(ctx) {
};

// Exit a parse tree produced by ASNParser#parameterizedObject.
ASNListener.prototype.exitParameterizedObject = function(ctx) {
};


// Enter a parse tree produced by ASNParser#definedObject.
ASNListener.prototype.enterDefinedObject = function(ctx) {
};

// Exit a parse tree produced by ASNParser#definedObject.
ASNListener.prototype.exitDefinedObject = function(ctx) {
};


// Enter a parse tree produced by ASNParser#objectSet.
ASNListener.prototype.enterObjectSet = function(ctx) {
};

// Exit a parse tree produced by ASNParser#objectSet.
ASNListener.prototype.exitObjectSet = function(ctx) {
};


// Enter a parse tree produced by ASNParser#objectSetSpec.
ASNListener.prototype.enterObjectSetSpec = function(ctx) {
};

// Exit a parse tree produced by ASNParser#objectSetSpec.
ASNListener.prototype.exitObjectSetSpec = function(ctx) {
};


// Enter a parse tree produced by ASNParser#fieldName.
ASNListener.prototype.enterFieldName = function(ctx) {
};

// Exit a parse tree produced by ASNParser#fieldName.
ASNListener.prototype.exitFieldName = function(ctx) {
};


// Enter a parse tree produced by ASNParser#valueSet.
ASNListener.prototype.enterValueSet = function(ctx) {
};

// Exit a parse tree produced by ASNParser#valueSet.
ASNListener.prototype.exitValueSet = function(ctx) {
};


// Enter a parse tree produced by ASNParser#elementSetSpecs.
ASNListener.prototype.enterElementSetSpecs = function(ctx) {
};

// Exit a parse tree produced by ASNParser#elementSetSpecs.
ASNListener.prototype.exitElementSetSpecs = function(ctx) {
};


// Enter a parse tree produced by ASNParser#rootElementSetSpec.
ASNListener.prototype.enterRootElementSetSpec = function(ctx) {
};

// Exit a parse tree produced by ASNParser#rootElementSetSpec.
ASNListener.prototype.exitRootElementSetSpec = function(ctx) {
};


// Enter a parse tree produced by ASNParser#additionalElementSetSpec.
ASNListener.prototype.enterAdditionalElementSetSpec = function(ctx) {
};

// Exit a parse tree produced by ASNParser#additionalElementSetSpec.
ASNListener.prototype.exitAdditionalElementSetSpec = function(ctx) {
};


// Enter a parse tree produced by ASNParser#elementSetSpec.
ASNListener.prototype.enterElementSetSpec = function(ctx) {
};

// Exit a parse tree produced by ASNParser#elementSetSpec.
ASNListener.prototype.exitElementSetSpec = function(ctx) {
};


// Enter a parse tree produced by ASNParser#unions.
ASNListener.prototype.enterUnions = function(ctx) {
};

// Exit a parse tree produced by ASNParser#unions.
ASNListener.prototype.exitUnions = function(ctx) {
};


// Enter a parse tree produced by ASNParser#exclusions.
ASNListener.prototype.enterExclusions = function(ctx) {
};

// Exit a parse tree produced by ASNParser#exclusions.
ASNListener.prototype.exitExclusions = function(ctx) {
};


// Enter a parse tree produced by ASNParser#intersections.
ASNListener.prototype.enterIntersections = function(ctx) {
};

// Exit a parse tree produced by ASNParser#intersections.
ASNListener.prototype.exitIntersections = function(ctx) {
};


// Enter a parse tree produced by ASNParser#unionMark.
ASNListener.prototype.enterUnionMark = function(ctx) {
};

// Exit a parse tree produced by ASNParser#unionMark.
ASNListener.prototype.exitUnionMark = function(ctx) {
};


// Enter a parse tree produced by ASNParser#intersectionMark.
ASNListener.prototype.enterIntersectionMark = function(ctx) {
};

// Exit a parse tree produced by ASNParser#intersectionMark.
ASNListener.prototype.exitIntersectionMark = function(ctx) {
};


// Enter a parse tree produced by ASNParser#elements.
ASNListener.prototype.enterElements = function(ctx) {
};

// Exit a parse tree produced by ASNParser#elements.
ASNListener.prototype.exitElements = function(ctx) {
};


// Enter a parse tree produced by ASNParser#objectSetElements.
ASNListener.prototype.enterObjectSetElements = function(ctx) {
};

// Exit a parse tree produced by ASNParser#objectSetElements.
ASNListener.prototype.exitObjectSetElements = function(ctx) {
};


// Enter a parse tree produced by ASNParser#intersectionElements.
ASNListener.prototype.enterIntersectionElements = function(ctx) {
};

// Exit a parse tree produced by ASNParser#intersectionElements.
ASNListener.prototype.exitIntersectionElements = function(ctx) {
};


// Enter a parse tree produced by ASNParser#subtypeElements.
ASNListener.prototype.enterSubtypeElements = function(ctx) {
};

// Exit a parse tree produced by ASNParser#subtypeElements.
ASNListener.prototype.exitSubtypeElements = function(ctx) {
};


// Enter a parse tree produced by ASNParser#variableTypeValueSetFieldSpec.
ASNListener.prototype.enterVariableTypeValueSetFieldSpec = function(ctx) {
};

// Exit a parse tree produced by ASNParser#variableTypeValueSetFieldSpec.
ASNListener.prototype.exitVariableTypeValueSetFieldSpec = function(ctx) {
};


// Enter a parse tree produced by ASNParser#objectFieldSpec.
ASNListener.prototype.enterObjectFieldSpec = function(ctx) {
};

// Exit a parse tree produced by ASNParser#objectFieldSpec.
ASNListener.prototype.exitObjectFieldSpec = function(ctx) {
};


// Enter a parse tree produced by ASNParser#objectOptionalitySpec.
ASNListener.prototype.enterObjectOptionalitySpec = function(ctx) {
};

// Exit a parse tree produced by ASNParser#objectOptionalitySpec.
ASNListener.prototype.exitObjectOptionalitySpec = function(ctx) {
};


// Enter a parse tree produced by ASNParser#objectSetFieldSpec.
ASNListener.prototype.enterObjectSetFieldSpec = function(ctx) {
};

// Exit a parse tree produced by ASNParser#objectSetFieldSpec.
ASNListener.prototype.exitObjectSetFieldSpec = function(ctx) {
};


// Enter a parse tree produced by ASNParser#objectSetOptionalitySpec.
ASNListener.prototype.enterObjectSetOptionalitySpec = function(ctx) {
};

// Exit a parse tree produced by ASNParser#objectSetOptionalitySpec.
ASNListener.prototype.exitObjectSetOptionalitySpec = function(ctx) {
};


// Enter a parse tree produced by ASNParser#typeAssignment.
ASNListener.prototype.enterTypeAssignment = function(ctx) {
};

// Exit a parse tree produced by ASNParser#typeAssignment.
ASNListener.prototype.exitTypeAssignment = function(ctx) {
};


// Enter a parse tree produced by ASNParser#valueAssignment.
ASNListener.prototype.enterValueAssignment = function(ctx) {
};

// Exit a parse tree produced by ASNParser#valueAssignment.
ASNListener.prototype.exitValueAssignment = function(ctx) {
};


// Enter a parse tree produced by ASNParser#asnType.
ASNListener.prototype.enterAsnType = function(ctx) {
};

// Exit a parse tree produced by ASNParser#asnType.
ASNListener.prototype.exitAsnType = function(ctx) {
};


// Enter a parse tree produced by ASNParser#builtinType.
ASNListener.prototype.enterBuiltinType = function(ctx) {
};

// Exit a parse tree produced by ASNParser#builtinType.
ASNListener.prototype.exitBuiltinType = function(ctx) {
};


// Enter a parse tree produced by ASNParser#objectClassFieldType.
ASNListener.prototype.enterObjectClassFieldType = function(ctx) {
};

// Exit a parse tree produced by ASNParser#objectClassFieldType.
ASNListener.prototype.exitObjectClassFieldType = function(ctx) {
};


// Enter a parse tree produced by ASNParser#setType.
ASNListener.prototype.enterSetType = function(ctx) {
};

// Exit a parse tree produced by ASNParser#setType.
ASNListener.prototype.exitSetType = function(ctx) {
};


// Enter a parse tree produced by ASNParser#setOfType.
ASNListener.prototype.enterSetOfType = function(ctx) {
};

// Exit a parse tree produced by ASNParser#setOfType.
ASNListener.prototype.exitSetOfType = function(ctx) {
};


// Enter a parse tree produced by ASNParser#referencedType.
ASNListener.prototype.enterReferencedType = function(ctx) {
};

// Exit a parse tree produced by ASNParser#referencedType.
ASNListener.prototype.exitReferencedType = function(ctx) {
};


// Enter a parse tree produced by ASNParser#definedType.
ASNListener.prototype.enterDefinedType = function(ctx) {
};

// Exit a parse tree produced by ASNParser#definedType.
ASNListener.prototype.exitDefinedType = function(ctx) {
};


// Enter a parse tree produced by ASNParser#constraint.
ASNListener.prototype.enterConstraint = function(ctx) {
};

// Exit a parse tree produced by ASNParser#constraint.
ASNListener.prototype.exitConstraint = function(ctx) {
};


// Enter a parse tree produced by ASNParser#constraintSpec.
ASNListener.prototype.enterConstraintSpec = function(ctx) {
};

// Exit a parse tree produced by ASNParser#constraintSpec.
ASNListener.prototype.exitConstraintSpec = function(ctx) {
};


// Enter a parse tree produced by ASNParser#userDefinedConstraint.
ASNListener.prototype.enterUserDefinedConstraint = function(ctx) {
};

// Exit a parse tree produced by ASNParser#userDefinedConstraint.
ASNListener.prototype.exitUserDefinedConstraint = function(ctx) {
};


// Enter a parse tree produced by ASNParser#generalConstraint.
ASNListener.prototype.enterGeneralConstraint = function(ctx) {
};

// Exit a parse tree produced by ASNParser#generalConstraint.
ASNListener.prototype.exitGeneralConstraint = function(ctx) {
};


// Enter a parse tree produced by ASNParser#userDefinedConstraintParameter.
ASNListener.prototype.enterUserDefinedConstraintParameter = function(ctx) {
};

// Exit a parse tree produced by ASNParser#userDefinedConstraintParameter.
ASNListener.prototype.exitUserDefinedConstraintParameter = function(ctx) {
};


// Enter a parse tree produced by ASNParser#tableConstraint.
ASNListener.prototype.enterTableConstraint = function(ctx) {
};

// Exit a parse tree produced by ASNParser#tableConstraint.
ASNListener.prototype.exitTableConstraint = function(ctx) {
};


// Enter a parse tree produced by ASNParser#simpleTableConstraint.
ASNListener.prototype.enterSimpleTableConstraint = function(ctx) {
};

// Exit a parse tree produced by ASNParser#simpleTableConstraint.
ASNListener.prototype.exitSimpleTableConstraint = function(ctx) {
};


// Enter a parse tree produced by ASNParser#contentsConstraint.
ASNListener.prototype.enterContentsConstraint = function(ctx) {
};

// Exit a parse tree produced by ASNParser#contentsConstraint.
ASNListener.prototype.exitContentsConstraint = function(ctx) {
};


// Enter a parse tree produced by ASNParser#componentPresenceLists.
ASNListener.prototype.enterComponentPresenceLists = function(ctx) {
};

// Exit a parse tree produced by ASNParser#componentPresenceLists.
ASNListener.prototype.exitComponentPresenceLists = function(ctx) {
};


// Enter a parse tree produced by ASNParser#componentPresenceList.
ASNListener.prototype.enterComponentPresenceList = function(ctx) {
};

// Exit a parse tree produced by ASNParser#componentPresenceList.
ASNListener.prototype.exitComponentPresenceList = function(ctx) {
};


// Enter a parse tree produced by ASNParser#componentPresence.
ASNListener.prototype.enterComponentPresence = function(ctx) {
};

// Exit a parse tree produced by ASNParser#componentPresence.
ASNListener.prototype.exitComponentPresence = function(ctx) {
};


// Enter a parse tree produced by ASNParser#subtypeConstraint.
ASNListener.prototype.enterSubtypeConstraint = function(ctx) {
};

// Exit a parse tree produced by ASNParser#subtypeConstraint.
ASNListener.prototype.exitSubtypeConstraint = function(ctx) {
};


// Enter a parse tree produced by ASNParser#value.
ASNListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by ASNParser#value.
ASNListener.prototype.exitValue = function(ctx) {
};


// Enter a parse tree produced by ASNParser#builtinValue.
ASNListener.prototype.enterBuiltinValue = function(ctx) {
};

// Exit a parse tree produced by ASNParser#builtinValue.
ASNListener.prototype.exitBuiltinValue = function(ctx) {
};


// Enter a parse tree produced by ASNParser#objectIdentifierValue.
ASNListener.prototype.enterObjectIdentifierValue = function(ctx) {
};

// Exit a parse tree produced by ASNParser#objectIdentifierValue.
ASNListener.prototype.exitObjectIdentifierValue = function(ctx) {
};


// Enter a parse tree produced by ASNParser#objIdComponentsList.
ASNListener.prototype.enterObjIdComponentsList = function(ctx) {
};

// Exit a parse tree produced by ASNParser#objIdComponentsList.
ASNListener.prototype.exitObjIdComponentsList = function(ctx) {
};


// Enter a parse tree produced by ASNParser#objIdComponents.
ASNListener.prototype.enterObjIdComponents = function(ctx) {
};

// Exit a parse tree produced by ASNParser#objIdComponents.
ASNListener.prototype.exitObjIdComponents = function(ctx) {
};


// Enter a parse tree produced by ASNParser#integerValue.
ASNListener.prototype.enterIntegerValue = function(ctx) {
};

// Exit a parse tree produced by ASNParser#integerValue.
ASNListener.prototype.exitIntegerValue = function(ctx) {
};


// Enter a parse tree produced by ASNParser#choiceValue.
ASNListener.prototype.enterChoiceValue = function(ctx) {
};

// Exit a parse tree produced by ASNParser#choiceValue.
ASNListener.prototype.exitChoiceValue = function(ctx) {
};


// Enter a parse tree produced by ASNParser#enumeratedValue.
ASNListener.prototype.enterEnumeratedValue = function(ctx) {
};

// Exit a parse tree produced by ASNParser#enumeratedValue.
ASNListener.prototype.exitEnumeratedValue = function(ctx) {
};


// Enter a parse tree produced by ASNParser#signedNumber.
ASNListener.prototype.enterSignedNumber = function(ctx) {
};

// Exit a parse tree produced by ASNParser#signedNumber.
ASNListener.prototype.exitSignedNumber = function(ctx) {
};


// Enter a parse tree produced by ASNParser#choiceType.
ASNListener.prototype.enterChoiceType = function(ctx) {
};

// Exit a parse tree produced by ASNParser#choiceType.
ASNListener.prototype.exitChoiceType = function(ctx) {
};


// Enter a parse tree produced by ASNParser#alternativeTypeLists.
ASNListener.prototype.enterAlternativeTypeLists = function(ctx) {
};

// Exit a parse tree produced by ASNParser#alternativeTypeLists.
ASNListener.prototype.exitAlternativeTypeLists = function(ctx) {
};


// Enter a parse tree produced by ASNParser#extensionAdditionAlternatives.
ASNListener.prototype.enterExtensionAdditionAlternatives = function(ctx) {
};

// Exit a parse tree produced by ASNParser#extensionAdditionAlternatives.
ASNListener.prototype.exitExtensionAdditionAlternatives = function(ctx) {
};


// Enter a parse tree produced by ASNParser#extensionAdditionAlternativesList.
ASNListener.prototype.enterExtensionAdditionAlternativesList = function(ctx) {
};

// Exit a parse tree produced by ASNParser#extensionAdditionAlternativesList.
ASNListener.prototype.exitExtensionAdditionAlternativesList = function(ctx) {
};


// Enter a parse tree produced by ASNParser#extensionAdditionAlternative.
ASNListener.prototype.enterExtensionAdditionAlternative = function(ctx) {
};

// Exit a parse tree produced by ASNParser#extensionAdditionAlternative.
ASNListener.prototype.exitExtensionAdditionAlternative = function(ctx) {
};


// Enter a parse tree produced by ASNParser#extensionAdditionAlternativesGroup.
ASNListener.prototype.enterExtensionAdditionAlternativesGroup = function(ctx) {
};

// Exit a parse tree produced by ASNParser#extensionAdditionAlternativesGroup.
ASNListener.prototype.exitExtensionAdditionAlternativesGroup = function(ctx) {
};


// Enter a parse tree produced by ASNParser#rootAlternativeTypeList.
ASNListener.prototype.enterRootAlternativeTypeList = function(ctx) {
};

// Exit a parse tree produced by ASNParser#rootAlternativeTypeList.
ASNListener.prototype.exitRootAlternativeTypeList = function(ctx) {
};


// Enter a parse tree produced by ASNParser#alternativeTypeList.
ASNListener.prototype.enterAlternativeTypeList = function(ctx) {
};

// Exit a parse tree produced by ASNParser#alternativeTypeList.
ASNListener.prototype.exitAlternativeTypeList = function(ctx) {
};


// Enter a parse tree produced by ASNParser#namedType.
ASNListener.prototype.enterNamedType = function(ctx) {
};

// Exit a parse tree produced by ASNParser#namedType.
ASNListener.prototype.exitNamedType = function(ctx) {
};


// Enter a parse tree produced by ASNParser#enumeratedType.
ASNListener.prototype.enterEnumeratedType = function(ctx) {
};

// Exit a parse tree produced by ASNParser#enumeratedType.
ASNListener.prototype.exitEnumeratedType = function(ctx) {
};


// Enter a parse tree produced by ASNParser#enumerations.
ASNListener.prototype.enterEnumerations = function(ctx) {
};

// Exit a parse tree produced by ASNParser#enumerations.
ASNListener.prototype.exitEnumerations = function(ctx) {
};


// Enter a parse tree produced by ASNParser#rootEnumeration.
ASNListener.prototype.enterRootEnumeration = function(ctx) {
};

// Exit a parse tree produced by ASNParser#rootEnumeration.
ASNListener.prototype.exitRootEnumeration = function(ctx) {
};


// Enter a parse tree produced by ASNParser#enumeration.
ASNListener.prototype.enterEnumeration = function(ctx) {
};

// Exit a parse tree produced by ASNParser#enumeration.
ASNListener.prototype.exitEnumeration = function(ctx) {
};


// Enter a parse tree produced by ASNParser#enumerationItem.
ASNListener.prototype.enterEnumerationItem = function(ctx) {
};

// Exit a parse tree produced by ASNParser#enumerationItem.
ASNListener.prototype.exitEnumerationItem = function(ctx) {
};


// Enter a parse tree produced by ASNParser#namedNumber.
ASNListener.prototype.enterNamedNumber = function(ctx) {
};

// Exit a parse tree produced by ASNParser#namedNumber.
ASNListener.prototype.exitNamedNumber = function(ctx) {
};


// Enter a parse tree produced by ASNParser#definedValue.
ASNListener.prototype.enterDefinedValue = function(ctx) {
};

// Exit a parse tree produced by ASNParser#definedValue.
ASNListener.prototype.exitDefinedValue = function(ctx) {
};


// Enter a parse tree produced by ASNParser#parameterizedValue.
ASNListener.prototype.enterParameterizedValue = function(ctx) {
};

// Exit a parse tree produced by ASNParser#parameterizedValue.
ASNListener.prototype.exitParameterizedValue = function(ctx) {
};


// Enter a parse tree produced by ASNParser#simpleDefinedValue.
ASNListener.prototype.enterSimpleDefinedValue = function(ctx) {
};

// Exit a parse tree produced by ASNParser#simpleDefinedValue.
ASNListener.prototype.exitSimpleDefinedValue = function(ctx) {
};


// Enter a parse tree produced by ASNParser#actualParameterList.
ASNListener.prototype.enterActualParameterList = function(ctx) {
};

// Exit a parse tree produced by ASNParser#actualParameterList.
ASNListener.prototype.exitActualParameterList = function(ctx) {
};


// Enter a parse tree produced by ASNParser#actualParameter.
ASNListener.prototype.enterActualParameter = function(ctx) {
};

// Exit a parse tree produced by ASNParser#actualParameter.
ASNListener.prototype.exitActualParameter = function(ctx) {
};


// Enter a parse tree produced by ASNParser#exceptionSpec.
ASNListener.prototype.enterExceptionSpec = function(ctx) {
};

// Exit a parse tree produced by ASNParser#exceptionSpec.
ASNListener.prototype.exitExceptionSpec = function(ctx) {
};


// Enter a parse tree produced by ASNParser#exceptionIdentification.
ASNListener.prototype.enterExceptionIdentification = function(ctx) {
};

// Exit a parse tree produced by ASNParser#exceptionIdentification.
ASNListener.prototype.exitExceptionIdentification = function(ctx) {
};


// Enter a parse tree produced by ASNParser#additionalEnumeration.
ASNListener.prototype.enterAdditionalEnumeration = function(ctx) {
};

// Exit a parse tree produced by ASNParser#additionalEnumeration.
ASNListener.prototype.exitAdditionalEnumeration = function(ctx) {
};


// Enter a parse tree produced by ASNParser#integerType.
ASNListener.prototype.enterIntegerType = function(ctx) {
};

// Exit a parse tree produced by ASNParser#integerType.
ASNListener.prototype.exitIntegerType = function(ctx) {
};


// Enter a parse tree produced by ASNParser#namedNumberList.
ASNListener.prototype.enterNamedNumberList = function(ctx) {
};

// Exit a parse tree produced by ASNParser#namedNumberList.
ASNListener.prototype.exitNamedNumberList = function(ctx) {
};


// Enter a parse tree produced by ASNParser#objectidentifiertype.
ASNListener.prototype.enterObjectidentifiertype = function(ctx) {
};

// Exit a parse tree produced by ASNParser#objectidentifiertype.
ASNListener.prototype.exitObjectidentifiertype = function(ctx) {
};


// Enter a parse tree produced by ASNParser#componentRelationConstraint.
ASNListener.prototype.enterComponentRelationConstraint = function(ctx) {
};

// Exit a parse tree produced by ASNParser#componentRelationConstraint.
ASNListener.prototype.exitComponentRelationConstraint = function(ctx) {
};


// Enter a parse tree produced by ASNParser#atNotation.
ASNListener.prototype.enterAtNotation = function(ctx) {
};

// Exit a parse tree produced by ASNParser#atNotation.
ASNListener.prototype.exitAtNotation = function(ctx) {
};


// Enter a parse tree produced by ASNParser#level.
ASNListener.prototype.enterLevel = function(ctx) {
};

// Exit a parse tree produced by ASNParser#level.
ASNListener.prototype.exitLevel = function(ctx) {
};


// Enter a parse tree produced by ASNParser#componentIdList.
ASNListener.prototype.enterComponentIdList = function(ctx) {
};

// Exit a parse tree produced by ASNParser#componentIdList.
ASNListener.prototype.exitComponentIdList = function(ctx) {
};


// Enter a parse tree produced by ASNParser#octetStringType.
ASNListener.prototype.enterOctetStringType = function(ctx) {
};

// Exit a parse tree produced by ASNParser#octetStringType.
ASNListener.prototype.exitOctetStringType = function(ctx) {
};


// Enter a parse tree produced by ASNParser#bitStringType.
ASNListener.prototype.enterBitStringType = function(ctx) {
};

// Exit a parse tree produced by ASNParser#bitStringType.
ASNListener.prototype.exitBitStringType = function(ctx) {
};


// Enter a parse tree produced by ASNParser#namedBitList.
ASNListener.prototype.enterNamedBitList = function(ctx) {
};

// Exit a parse tree produced by ASNParser#namedBitList.
ASNListener.prototype.exitNamedBitList = function(ctx) {
};


// Enter a parse tree produced by ASNParser#namedBit.
ASNListener.prototype.enterNamedBit = function(ctx) {
};

// Exit a parse tree produced by ASNParser#namedBit.
ASNListener.prototype.exitNamedBit = function(ctx) {
};


// Enter a parse tree produced by ASNParser#booleanValue.
ASNListener.prototype.enterBooleanValue = function(ctx) {
};

// Exit a parse tree produced by ASNParser#booleanValue.
ASNListener.prototype.exitBooleanValue = function(ctx) {
};



exports.ASNListener = ASNListener;