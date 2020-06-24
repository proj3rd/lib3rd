"use strict";
// Generated from src/asn1/ASN_3gpp.g4 by ANTLR 4.7.3-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class ASN_3gppParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(ASN_3gppParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return ASN_3gppParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "ASN_3gpp.g4"; }
    // @Override
    get ruleNames() { return ASN_3gppParser.ruleNames; }
    // @Override
    get serializedATN() { return ASN_3gppParser._serializedATN; }
    // @RuleVersion(0)
    modules() {
        let _localctx = new ModulesContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, ASN_3gppParser.RULE_modules);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 297;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 296;
                            this.moduleDefinition();
                        }
                    }
                    this.state = 299;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === ASN_3gppParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    moduleDefinition() {
        let _localctx = new ModuleDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, ASN_3gppParser.RULE_moduleDefinition);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 301;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 313;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.L_BRACE) {
                    {
                        this.state = 302;
                        this.match(ASN_3gppParser.L_BRACE);
                        this.state = 309;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ASN_3gppParser.IDENTIFIER) {
                            {
                                {
                                    this.state = 303;
                                    this.match(ASN_3gppParser.IDENTIFIER);
                                    this.state = 304;
                                    this.match(ASN_3gppParser.L_PARAN);
                                    this.state = 305;
                                    this.match(ASN_3gppParser.NUMBER);
                                    this.state = 306;
                                    this.match(ASN_3gppParser.R_PARAN);
                                }
                            }
                            this.state = 311;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 312;
                        this.match(ASN_3gppParser.R_BRACE);
                    }
                }
                this.state = 315;
                this.match(ASN_3gppParser.DEFINITIONS_LITERAL);
                this.state = 316;
                this.tagDefault();
                this.state = 317;
                this.extensionDefault();
                this.state = 318;
                this.match(ASN_3gppParser.ASSIGN_OP);
                this.state = 319;
                this.match(ASN_3gppParser.BEGIN_LITERAL);
                this.state = 320;
                this.moduleBody();
                this.state = 321;
                this.match(ASN_3gppParser.END_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    tagDefault() {
        let _localctx = new TagDefaultContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, ASN_3gppParser.RULE_tagDefault);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 325;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (ASN_3gppParser.EXPLICIT_LITERAL - 71)) | (1 << (ASN_3gppParser.IMPLICIT_LITERAL - 71)) | (1 << (ASN_3gppParser.AUTOMATIC_LITERAL - 71)))) !== 0)) {
                    {
                        this.state = 323;
                        _la = this._input.LA(1);
                        if (!(((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (ASN_3gppParser.EXPLICIT_LITERAL - 71)) | (1 << (ASN_3gppParser.IMPLICIT_LITERAL - 71)) | (1 << (ASN_3gppParser.AUTOMATIC_LITERAL - 71)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 324;
                        this.match(ASN_3gppParser.TAGS_LITERAL);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    extensionDefault() {
        let _localctx = new ExtensionDefaultContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, ASN_3gppParser.RULE_extensionDefault);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 329;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.EXTENSIBILITY_LITERAL) {
                    {
                        this.state = 327;
                        this.match(ASN_3gppParser.EXTENSIBILITY_LITERAL);
                        this.state = 328;
                        this.match(ASN_3gppParser.IMPLIED_LITERAL);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    moduleBody() {
        let _localctx = new ModuleBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, ASN_3gppParser.RULE_moduleBody);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 335;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.IMPORTS_LITERAL || _la === ASN_3gppParser.EXPORTS_LITERAL || _la === ASN_3gppParser.IDENTIFIER) {
                    {
                        this.state = 331;
                        this.exports();
                        this.state = 332;
                        this.imports();
                        this.state = 333;
                        this.assignmentList();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    exports() {
        let _localctx = new ExportsContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, ASN_3gppParser.RULE_exports);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 344;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                    case 1:
                        {
                            this.state = 337;
                            this.match(ASN_3gppParser.EXPORTS_LITERAL);
                            this.state = 338;
                            this.symbolsExported();
                            this.state = 339;
                            this.match(ASN_3gppParser.SEMI_COLON);
                        }
                        break;
                    case 2:
                        {
                            this.state = 341;
                            this.match(ASN_3gppParser.EXPORTS_LITERAL);
                            this.state = 342;
                            this.match(ASN_3gppParser.ALL_LITERAL);
                            this.state = 343;
                            this.match(ASN_3gppParser.SEMI_COLON);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    symbolsExported() {
        let _localctx = new SymbolsExportedContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, ASN_3gppParser.RULE_symbolsExported);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 347;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.IDENTIFIER) {
                    {
                        this.state = 346;
                        this.symbolList();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    imports() {
        let _localctx = new ImportsContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, ASN_3gppParser.RULE_imports);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 353;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.IMPORTS_LITERAL) {
                    {
                        this.state = 349;
                        this.match(ASN_3gppParser.IMPORTS_LITERAL);
                        this.state = 350;
                        this.symbolsImported();
                        this.state = 351;
                        this.match(ASN_3gppParser.SEMI_COLON);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    symbolsImported() {
        let _localctx = new SymbolsImportedContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, ASN_3gppParser.RULE_symbolsImported);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 356;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.IDENTIFIER) {
                    {
                        this.state = 355;
                        this.symbolsFromModuleList();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    symbolsFromModuleList() {
        let _localctx = new SymbolsFromModuleListContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, ASN_3gppParser.RULE_symbolsFromModuleList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 358;
                    this.symbolsFromModule();
                }
                this.state = 362;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ASN_3gppParser.IDENTIFIER) {
                    {
                        {
                            this.state = 359;
                            this.symbolsFromModule();
                        }
                    }
                    this.state = 364;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    symbolsFromModule() {
        let _localctx = new SymbolsFromModuleContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, ASN_3gppParser.RULE_symbolsFromModule);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 365;
                this.symbolList();
                this.state = 366;
                this.match(ASN_3gppParser.FROM_LITERAL);
                this.state = 367;
                this.globalModuleReference();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    globalModuleReference() {
        let _localctx = new GlobalModuleReferenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, ASN_3gppParser.RULE_globalModuleReference);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 369;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 370;
                this.assignedIdentifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    assignedIdentifier() {
        let _localctx = new AssignedIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, ASN_3gppParser.RULE_assignedIdentifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            // tslint:disable-next-line:no-empty
            {
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    symbolList() {
        let _localctx = new SymbolListContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, ASN_3gppParser.RULE_symbolList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 374;
                    this.symbol();
                }
                this.state = 379;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ASN_3gppParser.COMMA) {
                    {
                        {
                            this.state = 375;
                            this.match(ASN_3gppParser.COMMA);
                            this.state = 376;
                            this.symbol();
                        }
                    }
                    this.state = 381;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    symbol() {
        let _localctx = new SymbolContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, ASN_3gppParser.RULE_symbol);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 382;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 385;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.L_BRACE) {
                    {
                        {
                            this.state = 383;
                            this.match(ASN_3gppParser.L_BRACE);
                            this.state = 384;
                            this.match(ASN_3gppParser.R_BRACE);
                        }
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    assignmentList() {
        let _localctx = new AssignmentListContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, ASN_3gppParser.RULE_assignmentList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 387;
                    this.assignment();
                }
                this.state = 391;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ASN_3gppParser.IDENTIFIER) {
                    {
                        {
                            this.state = 388;
                            this.assignment();
                        }
                    }
                    this.state = 393;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    assignment() {
        let _localctx = new AssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, ASN_3gppParser.RULE_assignment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 394;
                    this.match(ASN_3gppParser.IDENTIFIER);
                    this.state = 399;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                        case 1:
                            {
                                this.state = 395;
                                this.valueAssignment();
                            }
                            break;
                        case 2:
                            {
                                this.state = 396;
                                this.typeAssignment();
                            }
                            break;
                        case 3:
                            {
                                this.state = 397;
                                this.parameterizedAssignment();
                            }
                            break;
                        case 4:
                            {
                                this.state = 398;
                                this.objectClassAssignment();
                            }
                            break;
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    sequenceType() {
        let _localctx = new SequenceTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, ASN_3gppParser.RULE_sequenceType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 401;
                this.match(ASN_3gppParser.SEQUENCE_LITERAL);
                this.state = 402;
                this.match(ASN_3gppParser.L_BRACE);
                this.state = 407;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
                    case 1:
                        {
                            this.state = 403;
                            this.extensionAndException();
                            this.state = 404;
                            this.optionalExtensionMarker();
                        }
                        break;
                    case 2:
                        {
                            this.state = 406;
                            this.componentTypeLists();
                        }
                        break;
                }
                this.state = 409;
                this.match(ASN_3gppParser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    extensionAndException() {
        let _localctx = new ExtensionAndExceptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, ASN_3gppParser.RULE_extensionAndException);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 411;
                this.match(ASN_3gppParser.ELLIPSIS);
                this.state = 413;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.EXCLAM) {
                    {
                        this.state = 412;
                        this.exceptionSpec();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    optionalExtensionMarker() {
        let _localctx = new OptionalExtensionMarkerContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, ASN_3gppParser.RULE_optionalExtensionMarker);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 417;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.COMMA) {
                    {
                        this.state = 415;
                        this.match(ASN_3gppParser.COMMA);
                        this.state = 416;
                        this.match(ASN_3gppParser.ELLIPSIS);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    componentTypeLists() {
        let _localctx = new ComponentTypeListsContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, ASN_3gppParser.RULE_componentTypeLists);
        let _la;
        try {
            this.state = 449;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.COMPONENTS_LITERAL:
                case ASN_3gppParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 419;
                        this.rootComponentTypeList();
                        this.state = 436;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case ASN_3gppParser.TAG:
                                {
                                    this.state = 420;
                                    this.tag();
                                }
                                break;
                            case ASN_3gppParser.COMMA:
                                {
                                    {
                                        this.state = 421;
                                        this.match(ASN_3gppParser.COMMA);
                                        this.state = 423;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === ASN_3gppParser.TAG) {
                                            {
                                                this.state = 422;
                                                this.tag();
                                            }
                                        }
                                        this.state = 425;
                                        this.extensionAndException();
                                        this.state = 426;
                                        this.extensionAdditions();
                                        this.state = 434;
                                        this._errHandler.sync(this);
                                        switch (this._input.LA(1)) {
                                            case ASN_3gppParser.R_BRACE:
                                            case ASN_3gppParser.COMMA:
                                                {
                                                    this.state = 427;
                                                    this.optionalExtensionMarker();
                                                }
                                                break;
                                            case ASN_3gppParser.EXTENSTIONENDMARKER:
                                                {
                                                    {
                                                        this.state = 428;
                                                        this.match(ASN_3gppParser.EXTENSTIONENDMARKER);
                                                        this.state = 429;
                                                        this.match(ASN_3gppParser.COMMA);
                                                        this.state = 430;
                                                        this.rootComponentTypeList();
                                                        this.state = 432;
                                                        this._errHandler.sync(this);
                                                        _la = this._input.LA(1);
                                                        if (_la === ASN_3gppParser.TAG) {
                                                            {
                                                                this.state = 431;
                                                                this.tag();
                                                            }
                                                        }
                                                    }
                                                }
                                                break;
                                            default:
                                                throw new NoViableAltException_1.NoViableAltException(this);
                                        }
                                    }
                                }
                                break;
                            case ASN_3gppParser.R_BRACE:
                                break;
                            default:
                                break;
                        }
                    }
                    break;
                case ASN_3gppParser.ELLIPSIS:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 438;
                        this.extensionAndException();
                        this.state = 439;
                        this.extensionAdditions();
                        this.state = 447;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case ASN_3gppParser.R_BRACE:
                            case ASN_3gppParser.COMMA:
                                {
                                    this.state = 440;
                                    this.optionalExtensionMarker();
                                }
                                break;
                            case ASN_3gppParser.EXTENSTIONENDMARKER:
                                {
                                    {
                                        this.state = 441;
                                        this.match(ASN_3gppParser.EXTENSTIONENDMARKER);
                                        this.state = 442;
                                        this.match(ASN_3gppParser.COMMA);
                                        this.state = 443;
                                        this.rootComponentTypeList();
                                        this.state = 445;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === ASN_3gppParser.TAG) {
                                            {
                                                this.state = 444;
                                                this.tag();
                                            }
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    rootComponentTypeList() {
        let _localctx = new RootComponentTypeListContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, ASN_3gppParser.RULE_rootComponentTypeList);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 451;
                this.componentTypeList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    componentTypeList() {
        let _localctx = new ComponentTypeListContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, ASN_3gppParser.RULE_componentTypeList);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 453;
                    this.componentType();
                }
                this.state = 461;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 454;
                                this.match(ASN_3gppParser.COMMA);
                                this.state = 456;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === ASN_3gppParser.TAG) {
                                    {
                                        this.state = 455;
                                        this.tag();
                                    }
                                }
                                this.state = 458;
                                this.componentType();
                            }
                        }
                    }
                    this.state = 463;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    componentType() {
        let _localctx = new ComponentTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, ASN_3gppParser.RULE_componentType);
        try {
            this.state = 473;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 464;
                        this.namedType();
                        this.state = 468;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case ASN_3gppParser.OPTIONAL_LITERAL:
                                {
                                    this.state = 465;
                                    this.match(ASN_3gppParser.OPTIONAL_LITERAL);
                                }
                                break;
                            case ASN_3gppParser.DEFAULT_LITERAL:
                                {
                                    this.state = 466;
                                    this.match(ASN_3gppParser.DEFAULT_LITERAL);
                                    this.state = 467;
                                    this.value();
                                }
                                break;
                            case ASN_3gppParser.TAG:
                            case ASN_3gppParser.R_BRACE:
                            case ASN_3gppParser.COMMA:
                            case ASN_3gppParser.DOUBLE_R_BRACKET:
                            case ASN_3gppParser.EXTENSTIONENDMARKER:
                                break;
                            default:
                                break;
                        }
                    }
                    break;
                case ASN_3gppParser.COMPONENTS_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 470;
                        this.match(ASN_3gppParser.COMPONENTS_LITERAL);
                        this.state = 471;
                        this.match(ASN_3gppParser.OF_LITERAL);
                        this.state = 472;
                        this.asnType();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    tag() {
        let _localctx = new TagContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, ASN_3gppParser.RULE_tag);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 475;
                this.match(ASN_3gppParser.TAG);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    extensionAdditions() {
        let _localctx = new ExtensionAdditionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, ASN_3gppParser.RULE_extensionAdditions);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 479;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
                    case 1:
                        {
                            this.state = 477;
                            this.match(ASN_3gppParser.COMMA);
                            this.state = 478;
                            this.extensionAdditionList();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    extensionAdditionList() {
        let _localctx = new ExtensionAdditionListContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, ASN_3gppParser.RULE_extensionAdditionList);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 481;
                    this.extensionAddition();
                }
                this.state = 489;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
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
                                this.extensionAddition();
                            }
                        }
                    }
                    this.state = 491;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    extensionAddition() {
        let _localctx = new ExtensionAdditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, ASN_3gppParser.RULE_extensionAddition);
        try {
            this.state = 494;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.COMPONENTS_LITERAL:
                case ASN_3gppParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 492;
                        this.componentType();
                    }
                    break;
                case ASN_3gppParser.DOUBLE_L_BRACKET:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 493;
                        this.extensionAdditionGroup();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    extensionAdditionGroup() {
        let _localctx = new ExtensionAdditionGroupContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, ASN_3gppParser.RULE_extensionAdditionGroup);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 496;
                this.match(ASN_3gppParser.DOUBLE_L_BRACKET);
                this.state = 497;
                this.versionNumber();
                this.state = 498;
                this.componentTypeList();
                this.state = 500;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.TAG) {
                    {
                        this.state = 499;
                        this.tag();
                    }
                }
                this.state = 502;
                this.match(ASN_3gppParser.DOUBLE_R_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    versionNumber() {
        let _localctx = new VersionNumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, ASN_3gppParser.RULE_versionNumber);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 506;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.NUMBER) {
                    {
                        this.state = 504;
                        this.match(ASN_3gppParser.NUMBER);
                        this.state = 505;
                        this.match(ASN_3gppParser.COLON);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    sequenceOfType() {
        let _localctx = new SequenceOfTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, ASN_3gppParser.RULE_sequenceOfType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 508;
                this.match(ASN_3gppParser.SEQUENCE_LITERAL);
                this.state = 516;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.L_PARAN) {
                    {
                        this.state = 509;
                        this.match(ASN_3gppParser.L_PARAN);
                        this.state = 512;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case ASN_3gppParser.L_PARAN:
                                {
                                    this.state = 510;
                                    this.constraint();
                                }
                                break;
                            case ASN_3gppParser.SIZE_LITERAL:
                                {
                                    this.state = 511;
                                    this.sizeConstraint();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 514;
                        this.match(ASN_3gppParser.R_PARAN);
                    }
                }
                this.state = 518;
                this.match(ASN_3gppParser.OF_LITERAL);
                this.state = 521;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 37, this._ctx)) {
                    case 1:
                        {
                            this.state = 519;
                            this.asnType();
                        }
                        break;
                    case 2:
                        {
                            this.state = 520;
                            this.namedType();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    sizeConstraint() {
        let _localctx = new SizeConstraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, ASN_3gppParser.RULE_sizeConstraint);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 523;
                this.match(ASN_3gppParser.SIZE_LITERAL);
                this.state = 524;
                this.constraint();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    parameterizedAssignment() {
        let _localctx = new ParameterizedAssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, ASN_3gppParser.RULE_parameterizedAssignment);
        try {
            this.state = 540;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.L_BRACE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 526;
                        this.parameterList();
                        {
                            this.state = 527;
                            this.match(ASN_3gppParser.ASSIGN_OP);
                            this.state = 531;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 528;
                                        this.asnType();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 529;
                                        this.value();
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 530;
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
                            this.state = 533;
                            this.definedObjectClass();
                            this.state = 534;
                            this.match(ASN_3gppParser.ASSIGN_OP);
                            this.state = 538;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 535;
                                        this.object();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 536;
                                        this.objectClass();
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 537;
                                        this.objectSet();
                                    }
                                    break;
                            }
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    parameterList() {
        let _localctx = new ParameterListContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, ASN_3gppParser.RULE_parameterList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 542;
                this.match(ASN_3gppParser.L_BRACE);
                this.state = 543;
                this.parameter();
                this.state = 548;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ASN_3gppParser.COMMA) {
                    {
                        {
                            this.state = 544;
                            this.match(ASN_3gppParser.COMMA);
                            this.state = 545;
                            this.parameter();
                        }
                    }
                    this.state = 550;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 551;
                this.match(ASN_3gppParser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    parameter() {
        let _localctx = new ParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, ASN_3gppParser.RULE_parameter);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 556;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
                    case 1:
                        {
                            this.state = 553;
                            this.paramGovernor();
                            this.state = 554;
                            this.match(ASN_3gppParser.COLON);
                        }
                        break;
                }
                this.state = 558;
                this.match(ASN_3gppParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    paramGovernor() {
        let _localctx = new ParamGovernorContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, ASN_3gppParser.RULE_paramGovernor);
        try {
            this.state = 562;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 43, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 560;
                        this.governor();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 561;
                        this.match(ASN_3gppParser.IDENTIFIER);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    governor() {
        let _localctx = new GovernorContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, ASN_3gppParser.RULE_governor);
        try {
            this.state = 566;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 44, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 564;
                        this.asnType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 565;
                        this.definedObjectClass();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    objectClassAssignment() {
        let _localctx = new ObjectClassAssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, ASN_3gppParser.RULE_objectClassAssignment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 568;
                this.match(ASN_3gppParser.ASSIGN_OP);
                this.state = 569;
                this.objectClass();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    objectClass() {
        let _localctx = new ObjectClassContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, ASN_3gppParser.RULE_objectClass);
        try {
            this.state = 573;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.TYPE_IDENTIFIER_LITERAL:
                case ASN_3gppParser.ABSTRACT_SYNTAX_LITERAL:
                case ASN_3gppParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 571;
                        this.definedObjectClass();
                    }
                    break;
                case ASN_3gppParser.CLASS_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 572;
                        this.objectClassDefn();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    definedObjectClass() {
        let _localctx = new DefinedObjectClassContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, ASN_3gppParser.RULE_definedObjectClass);
        try {
            this.state = 582;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 577;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 46, this._ctx)) {
                            case 1:
                                {
                                    this.state = 575;
                                    this.match(ASN_3gppParser.IDENTIFIER);
                                    this.state = 576;
                                    this.match(ASN_3gppParser.DOT);
                                }
                                break;
                        }
                        this.state = 579;
                        this.match(ASN_3gppParser.IDENTIFIER);
                    }
                    break;
                case ASN_3gppParser.TYPE_IDENTIFIER_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 580;
                        this.match(ASN_3gppParser.TYPE_IDENTIFIER_LITERAL);
                    }
                    break;
                case ASN_3gppParser.ABSTRACT_SYNTAX_LITERAL:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 581;
                        this.match(ASN_3gppParser.ABSTRACT_SYNTAX_LITERAL);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    usefulObjectClassReference() {
        let _localctx = new UsefulObjectClassReferenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, ASN_3gppParser.RULE_usefulObjectClassReference);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 584;
                _la = this._input.LA(1);
                if (!(_la === ASN_3gppParser.TYPE_IDENTIFIER_LITERAL || _la === ASN_3gppParser.ABSTRACT_SYNTAX_LITERAL)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    externalObjectClassReference() {
        let _localctx = new ExternalObjectClassReferenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, ASN_3gppParser.RULE_externalObjectClassReference);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 586;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 587;
                this.match(ASN_3gppParser.DOT);
                this.state = 588;
                this.match(ASN_3gppParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    objectClassDefn() {
        let _localctx = new ObjectClassDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, ASN_3gppParser.RULE_objectClassDefn);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 590;
                this.match(ASN_3gppParser.CLASS_LITERAL);
                this.state = 591;
                this.match(ASN_3gppParser.L_BRACE);
                this.state = 592;
                this.fieldSpec();
                this.state = 597;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ASN_3gppParser.COMMA) {
                    {
                        {
                            this.state = 593;
                            this.match(ASN_3gppParser.COMMA);
                            this.state = 594;
                            this.fieldSpec();
                        }
                    }
                    this.state = 599;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 600;
                this.match(ASN_3gppParser.R_BRACE);
                this.state = 602;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.WITH_LITERAL) {
                    {
                        this.state = 601;
                        this.withSyntaxSpec();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    withSyntaxSpec() {
        let _localctx = new WithSyntaxSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, ASN_3gppParser.RULE_withSyntaxSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 604;
                this.match(ASN_3gppParser.WITH_LITERAL);
                this.state = 605;
                this.match(ASN_3gppParser.SYNTAX_LITERAL);
                this.state = 606;
                this.syntaxList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    syntaxList() {
        let _localctx = new SyntaxListContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, ASN_3gppParser.RULE_syntaxList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 608;
                this.match(ASN_3gppParser.L_BRACE);
                this.state = 610;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 609;
                            this.tokenOrGroupSpec();
                        }
                    }
                    this.state = 612;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === ASN_3gppParser.AMPERSAND || _la === ASN_3gppParser.COMMA || _la === ASN_3gppParser.L_BRACKET || _la === ASN_3gppParser.IDENTIFIER);
                this.state = 614;
                this.match(ASN_3gppParser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    tokenOrGroupSpec() {
        let _localctx = new TokenOrGroupSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, ASN_3gppParser.RULE_tokenOrGroupSpec);
        try {
            this.state = 618;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.AMPERSAND:
                case ASN_3gppParser.COMMA:
                case ASN_3gppParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 616;
                        this.requiredToken();
                    }
                    break;
                case ASN_3gppParser.L_BRACKET:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 617;
                        this.optionalGroup();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    optionalGroup() {
        let _localctx = new OptionalGroupContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, ASN_3gppParser.RULE_optionalGroup);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 620;
                this.match(ASN_3gppParser.L_BRACKET);
                this.state = 622;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 621;
                            this.tokenOrGroupSpec();
                        }
                    }
                    this.state = 624;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === ASN_3gppParser.AMPERSAND || _la === ASN_3gppParser.COMMA || _la === ASN_3gppParser.L_BRACKET || _la === ASN_3gppParser.IDENTIFIER);
                this.state = 626;
                this.match(ASN_3gppParser.R_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    requiredToken() {
        let _localctx = new RequiredTokenContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, ASN_3gppParser.RULE_requiredToken);
        try {
            this.state = 630;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.COMMA:
                case ASN_3gppParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 628;
                        this.literal();
                    }
                    break;
                case ASN_3gppParser.AMPERSAND:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 629;
                        this.primitiveFieldName();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    literal() {
        let _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, ASN_3gppParser.RULE_literal);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 632;
                _la = this._input.LA(1);
                if (!(_la === ASN_3gppParser.COMMA || _la === ASN_3gppParser.IDENTIFIER)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    primitiveFieldName() {
        let _localctx = new PrimitiveFieldNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, ASN_3gppParser.RULE_primitiveFieldName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 634;
                this.match(ASN_3gppParser.AMPERSAND);
                this.state = 635;
                this.match(ASN_3gppParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    fieldSpec() {
        let _localctx = new FieldSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, ASN_3gppParser.RULE_fieldSpec);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 637;
                this.match(ASN_3gppParser.AMPERSAND);
                this.state = 638;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 672;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
                    case 1:
                        {
                            this.state = 640;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
                                {
                                    this.state = 639;
                                    this.typeOptionalitySpec();
                                }
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 642;
                            this.asnType();
                            this.state = 652;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 58, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 644;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
                                            {
                                                this.state = 643;
                                                this.valueSetOptionalitySpec();
                                            }
                                        }
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 647;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === ASN_3gppParser.UNIQUE_LITERAL) {
                                            {
                                                this.state = 646;
                                                this.match(ASN_3gppParser.UNIQUE_LITERAL);
                                            }
                                        }
                                        this.state = 650;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
                                            {
                                                this.state = 649;
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
                            this.state = 654;
                            this.fieldName();
                            this.state = 661;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case ASN_3gppParser.OPTIONAL_LITERAL:
                                    {
                                        this.state = 655;
                                        this.match(ASN_3gppParser.OPTIONAL_LITERAL);
                                    }
                                    break;
                                case ASN_3gppParser.DEFAULT_LITERAL:
                                    {
                                        {
                                            this.state = 656;
                                            this.match(ASN_3gppParser.DEFAULT_LITERAL);
                                            this.state = 659;
                                            this._errHandler.sync(this);
                                            switch (this.interpreter.adaptivePredict(this._input, 59, this._ctx)) {
                                                case 1:
                                                    {
                                                        this.state = 657;
                                                        this.valueSet();
                                                    }
                                                    break;
                                                case 2:
                                                    {
                                                        this.state = 658;
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
                            this.state = 663;
                            this.definedObjectClass();
                            this.state = 670;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case ASN_3gppParser.OPTIONAL_LITERAL:
                                    {
                                        this.state = 664;
                                        this.match(ASN_3gppParser.OPTIONAL_LITERAL);
                                    }
                                    break;
                                case ASN_3gppParser.DEFAULT_LITERAL:
                                    {
                                        {
                                            this.state = 665;
                                            this.match(ASN_3gppParser.DEFAULT_LITERAL);
                                            this.state = 668;
                                            this._errHandler.sync(this);
                                            switch (this._input.LA(1)) {
                                                case ASN_3gppParser.L_BRACE:
                                                    {
                                                        this.state = 666;
                                                        this.objectSet();
                                                    }
                                                    break;
                                                case ASN_3gppParser.IDENTIFIER:
                                                    {
                                                        this.state = 667;
                                                        this.object();
                                                    }
                                                    break;
                                                default:
                                                    throw new NoViableAltException_1.NoViableAltException(this);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeFieldSpec() {
        let _localctx = new TypeFieldSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, ASN_3gppParser.RULE_typeFieldSpec);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 674;
                this.match(ASN_3gppParser.AMPERSAND);
                this.state = 675;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 677;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
                    {
                        this.state = 676;
                        this.typeOptionalitySpec();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeOptionalitySpec() {
        let _localctx = new TypeOptionalitySpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, ASN_3gppParser.RULE_typeOptionalitySpec);
        try {
            this.state = 682;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.OPTIONAL_LITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 679;
                        this.match(ASN_3gppParser.OPTIONAL_LITERAL);
                    }
                    break;
                case ASN_3gppParser.DEFAULT_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 680;
                            this.match(ASN_3gppParser.DEFAULT_LITERAL);
                            this.state = 681;
                            this.asnType();
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    fixedTypeValueFieldSpec() {
        let _localctx = new FixedTypeValueFieldSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, ASN_3gppParser.RULE_fixedTypeValueFieldSpec);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 684;
                this.match(ASN_3gppParser.AMPERSAND);
                this.state = 685;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 686;
                this.asnType();
                this.state = 688;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.UNIQUE_LITERAL) {
                    {
                        this.state = 687;
                        this.match(ASN_3gppParser.UNIQUE_LITERAL);
                    }
                }
                this.state = 691;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
                    {
                        this.state = 690;
                        this.valueOptionalitySpec();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    valueOptionalitySpec() {
        let _localctx = new ValueOptionalitySpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, ASN_3gppParser.RULE_valueOptionalitySpec);
        try {
            this.state = 696;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.OPTIONAL_LITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 693;
                        this.match(ASN_3gppParser.OPTIONAL_LITERAL);
                    }
                    break;
                case ASN_3gppParser.DEFAULT_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 694;
                            this.match(ASN_3gppParser.DEFAULT_LITERAL);
                            this.state = 695;
                            this.value();
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variableTypeValueFieldSpec() {
        let _localctx = new VariableTypeValueFieldSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, ASN_3gppParser.RULE_variableTypeValueFieldSpec);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 698;
                this.match(ASN_3gppParser.AMPERSAND);
                this.state = 699;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 700;
                this.fieldName();
                this.state = 702;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
                    {
                        this.state = 701;
                        this.valueOptionalitySpec();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    fixedTypeValueSetFieldSpec() {
        let _localctx = new FixedTypeValueSetFieldSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, ASN_3gppParser.RULE_fixedTypeValueSetFieldSpec);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 704;
                this.match(ASN_3gppParser.AMPERSAND);
                this.state = 705;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 706;
                this.asnType();
                this.state = 708;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
                    {
                        this.state = 707;
                        this.valueSetOptionalitySpec();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    valueSetOptionalitySpec() {
        let _localctx = new ValueSetOptionalitySpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, ASN_3gppParser.RULE_valueSetOptionalitySpec);
        try {
            this.state = 713;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.OPTIONAL_LITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 710;
                        this.match(ASN_3gppParser.OPTIONAL_LITERAL);
                    }
                    break;
                case ASN_3gppParser.DEFAULT_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 711;
                        this.match(ASN_3gppParser.DEFAULT_LITERAL);
                        this.state = 712;
                        this.valueSet();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    object() {
        let _localctx = new ObjectContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, ASN_3gppParser.RULE_object);
        try {
            this.state = 717;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 72, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 715;
                        this.definedObject();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 716;
                        this.parameterizedObject();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    parameterizedObject() {
        let _localctx = new ParameterizedObjectContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, ASN_3gppParser.RULE_parameterizedObject);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 719;
                this.definedObject();
                this.state = 720;
                this.actualParameterList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    definedObject() {
        let _localctx = new DefinedObjectContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, ASN_3gppParser.RULE_definedObject);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 722;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 724;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.DOT) {
                    {
                        this.state = 723;
                        this.match(ASN_3gppParser.DOT);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    objectSet() {
        let _localctx = new ObjectSetContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, ASN_3gppParser.RULE_objectSet);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 726;
                this.match(ASN_3gppParser.L_BRACE);
                this.state = 727;
                this.objectSetSpec();
                this.state = 728;
                this.match(ASN_3gppParser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    objectSetSpec() {
        let _localctx = new ObjectSetSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, ASN_3gppParser.RULE_objectSetSpec);
        let _la;
        try {
            this.state = 744;
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
                        this.state = 730;
                        this.rootElementSetSpec();
                        this.state = 737;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ASN_3gppParser.COMMA) {
                            {
                                this.state = 731;
                                this.match(ASN_3gppParser.COMMA);
                                this.state = 732;
                                this.match(ASN_3gppParser.ELLIPSIS);
                                this.state = 735;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === ASN_3gppParser.COMMA) {
                                    {
                                        this.state = 733;
                                        this.match(ASN_3gppParser.COMMA);
                                        this.state = 734;
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
                        this.state = 739;
                        this.match(ASN_3gppParser.ELLIPSIS);
                        this.state = 742;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ASN_3gppParser.COMMA) {
                            {
                                this.state = 740;
                                this.match(ASN_3gppParser.COMMA);
                                this.state = 741;
                                this.additionalElementSetSpec();
                            }
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    fieldName() {
        let _localctx = new FieldNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, ASN_3gppParser.RULE_fieldName);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 746;
                    this.match(ASN_3gppParser.AMPERSAND);
                    this.state = 747;
                    this.match(ASN_3gppParser.IDENTIFIER);
                }
                this.state = 754;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ASN_3gppParser.AMPERSAND) {
                    {
                        {
                            this.state = 749;
                            this.match(ASN_3gppParser.AMPERSAND);
                            this.state = 750;
                            this.match(ASN_3gppParser.IDENTIFIER);
                            this.state = 751;
                            this.match(ASN_3gppParser.DOT);
                        }
                    }
                    this.state = 756;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    valueSet() {
        let _localctx = new ValueSetContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, ASN_3gppParser.RULE_valueSet);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 757;
                this.match(ASN_3gppParser.L_BRACE);
                this.state = 758;
                this.elementSetSpecs();
                this.state = 759;
                this.match(ASN_3gppParser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    elementSetSpecs() {
        let _localctx = new ElementSetSpecsContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, ASN_3gppParser.RULE_elementSetSpecs);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 761;
                this.rootElementSetSpec();
                this.state = 768;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.COMMA) {
                    {
                        this.state = 762;
                        this.match(ASN_3gppParser.COMMA);
                        this.state = 763;
                        this.match(ASN_3gppParser.ELLIPSIS);
                        this.state = 766;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ASN_3gppParser.COMMA) {
                            {
                                this.state = 764;
                                this.match(ASN_3gppParser.COMMA);
                                this.state = 765;
                                this.additionalElementSetSpec();
                            }
                        }
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    rootElementSetSpec() {
        let _localctx = new RootElementSetSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, ASN_3gppParser.RULE_rootElementSetSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 770;
                this.elementSetSpec();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    additionalElementSetSpec() {
        let _localctx = new AdditionalElementSetSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, ASN_3gppParser.RULE_additionalElementSetSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 772;
                this.elementSetSpec();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    elementSetSpec() {
        let _localctx = new ElementSetSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, ASN_3gppParser.RULE_elementSetSpec);
        try {
            this.state = 777;
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
                        this.state = 774;
                        this.unions();
                    }
                    break;
                case ASN_3gppParser.ALL_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 775;
                        this.match(ASN_3gppParser.ALL_LITERAL);
                        this.state = 776;
                        this.exclusions();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    unions() {
        let _localctx = new UnionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, ASN_3gppParser.RULE_unions);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 779;
                    this.intersections();
                }
                this.state = 785;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ASN_3gppParser.PIPE || _la === ASN_3gppParser.UNION_LITERAL) {
                    {
                        {
                            this.state = 780;
                            this.unionMark();
                            this.state = 781;
                            this.intersections();
                        }
                    }
                    this.state = 787;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    exclusions() {
        let _localctx = new ExclusionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, ASN_3gppParser.RULE_exclusions);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 788;
                this.match(ASN_3gppParser.EXCEPT_LITERAL);
                this.state = 789;
                this.elements();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    intersections() {
        let _localctx = new IntersectionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, ASN_3gppParser.RULE_intersections);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 791;
                    this.intersectionElements();
                }
                this.state = 797;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ASN_3gppParser.POWER || _la === ASN_3gppParser.INTERSECTION_LITERAL) {
                    {
                        {
                            this.state = 792;
                            this.intersectionMark();
                            this.state = 793;
                            this.intersectionElements();
                        }
                    }
                    this.state = 799;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    unionMark() {
        let _localctx = new UnionMarkContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, ASN_3gppParser.RULE_unionMark);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 800;
                _la = this._input.LA(1);
                if (!(_la === ASN_3gppParser.PIPE || _la === ASN_3gppParser.UNION_LITERAL)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    intersectionMark() {
        let _localctx = new IntersectionMarkContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, ASN_3gppParser.RULE_intersectionMark);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 802;
                _la = this._input.LA(1);
                if (!(_la === ASN_3gppParser.POWER || _la === ASN_3gppParser.INTERSECTION_LITERAL)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    elements() {
        let _localctx = new ElementsContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, ASN_3gppParser.RULE_elements);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 804;
                this.subtypeElements();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    objectSetElements() {
        let _localctx = new ObjectSetElementsContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, ASN_3gppParser.RULE_objectSetElements);
        try {
            this.state = 808;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 84, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 806;
                        this.object();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 807;
                        this.definedObject();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    intersectionElements() {
        let _localctx = new IntersectionElementsContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, ASN_3gppParser.RULE_intersectionElements);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 810;
                this.elements();
                this.state = 812;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.EXCEPT_LITERAL) {
                    {
                        this.state = 811;
                        this.exclusions();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    subtypeElements() {
        let _localctx = new SubtypeElementsContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, ASN_3gppParser.RULE_subtypeElements);
        let _la;
        try {
            this.state = 833;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 90, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 816;
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
                                        this.state = 814;
                                        this.value();
                                    }
                                    break;
                                case ASN_3gppParser.MIN_LITERAL:
                                    {
                                        this.state = 815;
                                        this.match(ASN_3gppParser.MIN_LITERAL);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 819;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === ASN_3gppParser.LESS_THAN) {
                                {
                                    this.state = 818;
                                    this.match(ASN_3gppParser.LESS_THAN);
                                }
                            }
                            this.state = 821;
                            this.match(ASN_3gppParser.DOUBLE_DOT);
                            this.state = 823;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === ASN_3gppParser.LESS_THAN) {
                                {
                                    this.state = 822;
                                    this.match(ASN_3gppParser.LESS_THAN);
                                }
                            }
                            this.state = 827;
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
                                        this.state = 825;
                                        this.value();
                                    }
                                    break;
                                case ASN_3gppParser.MAX_LITERAL:
                                    {
                                        this.state = 826;
                                        this.match(ASN_3gppParser.MAX_LITERAL);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 829;
                        this.sizeConstraint();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        {
                            this.state = 830;
                            this.match(ASN_3gppParser.PATTERN_LITERAL);
                            this.state = 831;
                            this.value();
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 832;
                        this.value();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variableTypeValueSetFieldSpec() {
        let _localctx = new VariableTypeValueSetFieldSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, ASN_3gppParser.RULE_variableTypeValueSetFieldSpec);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 835;
                this.match(ASN_3gppParser.AMPERSAND);
                this.state = 836;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 837;
                this.fieldName();
                this.state = 839;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
                    {
                        this.state = 838;
                        this.valueSetOptionalitySpec();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    objectFieldSpec() {
        let _localctx = new ObjectFieldSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, ASN_3gppParser.RULE_objectFieldSpec);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 841;
                this.match(ASN_3gppParser.AMPERSAND);
                this.state = 842;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 843;
                this.definedObjectClass();
                this.state = 845;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
                    {
                        this.state = 844;
                        this.objectOptionalitySpec();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    objectOptionalitySpec() {
        let _localctx = new ObjectOptionalitySpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, ASN_3gppParser.RULE_objectOptionalitySpec);
        try {
            this.state = 850;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.OPTIONAL_LITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 847;
                        this.match(ASN_3gppParser.OPTIONAL_LITERAL);
                    }
                    break;
                case ASN_3gppParser.DEFAULT_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 848;
                        this.match(ASN_3gppParser.DEFAULT_LITERAL);
                        this.state = 849;
                        this.object();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    objectSetFieldSpec() {
        let _localctx = new ObjectSetFieldSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, ASN_3gppParser.RULE_objectSetFieldSpec);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 852;
                this.match(ASN_3gppParser.AMPERSAND);
                this.state = 853;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 854;
                this.definedObjectClass();
                this.state = 856;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
                    {
                        this.state = 855;
                        this.objectSetOptionalitySpec();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    objectSetOptionalitySpec() {
        let _localctx = new ObjectSetOptionalitySpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, ASN_3gppParser.RULE_objectSetOptionalitySpec);
        try {
            this.state = 861;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.OPTIONAL_LITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 858;
                        this.match(ASN_3gppParser.OPTIONAL_LITERAL);
                    }
                    break;
                case ASN_3gppParser.DEFAULT_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 859;
                        this.match(ASN_3gppParser.DEFAULT_LITERAL);
                        this.state = 860;
                        this.objectSet();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeAssignment() {
        let _localctx = new TypeAssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, ASN_3gppParser.RULE_typeAssignment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 863;
                this.match(ASN_3gppParser.ASSIGN_OP);
                this.state = 864;
                this.asnType();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    valueAssignment() {
        let _localctx = new ValueAssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, ASN_3gppParser.RULE_valueAssignment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 866;
                this.asnType();
                this.state = 867;
                this.match(ASN_3gppParser.ASSIGN_OP);
                this.state = 868;
                this.value();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    asnType() {
        let _localctx = new AsnTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, ASN_3gppParser.RULE_asnType);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 872;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 96, this._ctx)) {
                    case 1:
                        {
                            this.state = 870;
                            this.builtinType();
                        }
                        break;
                    case 2:
                        {
                            this.state = 871;
                            this.referencedType();
                        }
                        break;
                }
                this.state = 877;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 874;
                                this.constraint();
                            }
                        }
                    }
                    this.state = 879;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    builtinType() {
        let _localctx = new BuiltinTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, ASN_3gppParser.RULE_builtinType);
        try {
            this.state = 893;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 98, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 880;
                        this.octetStringType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 881;
                        this.bitStringType();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 882;
                        this.choiceType();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 883;
                        this.enumeratedType();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 884;
                        this.integerType();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 885;
                        this.sequenceType();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 886;
                        this.sequenceOfType();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 887;
                        this.setType();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 888;
                        this.setOfType();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 889;
                        this.objectidentifiertype();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 890;
                        this.objectClassFieldType();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 891;
                        this.match(ASN_3gppParser.BOOLEAN_LITERAL);
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 892;
                        this.match(ASN_3gppParser.NULL_LITERAL);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    objectClassFieldType() {
        let _localctx = new ObjectClassFieldTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, ASN_3gppParser.RULE_objectClassFieldType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 895;
                this.definedObjectClass();
                this.state = 896;
                this.match(ASN_3gppParser.DOT);
                this.state = 897;
                this.fieldName();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    setType() {
        let _localctx = new SetTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, ASN_3gppParser.RULE_setType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 899;
                this.match(ASN_3gppParser.SET_LITERAL);
                this.state = 900;
                this.match(ASN_3gppParser.L_BRACE);
                this.state = 905;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 99, this._ctx)) {
                    case 1:
                        {
                            this.state = 901;
                            this.extensionAndException();
                            this.state = 902;
                            this.optionalExtensionMarker();
                        }
                        break;
                    case 2:
                        {
                            this.state = 904;
                            this.componentTypeLists();
                        }
                        break;
                }
                this.state = 907;
                this.match(ASN_3gppParser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    setOfType() {
        let _localctx = new SetOfTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, ASN_3gppParser.RULE_setOfType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 909;
                this.match(ASN_3gppParser.SET_LITERAL);
                this.state = 912;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case ASN_3gppParser.L_PARAN:
                        {
                            this.state = 910;
                            this.constraint();
                        }
                        break;
                    case ASN_3gppParser.SIZE_LITERAL:
                        {
                            this.state = 911;
                            this.sizeConstraint();
                        }
                        break;
                    case ASN_3gppParser.OF_LITERAL:
                        break;
                    default:
                        break;
                }
                this.state = 914;
                this.match(ASN_3gppParser.OF_LITERAL);
                this.state = 917;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 101, this._ctx)) {
                    case 1:
                        {
                            this.state = 915;
                            this.asnType();
                        }
                        break;
                    case 2:
                        {
                            this.state = 916;
                            this.namedType();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    referencedType() {
        let _localctx = new ReferencedTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 180, ASN_3gppParser.RULE_referencedType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 919;
                this.definedType();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    definedType() {
        let _localctx = new DefinedTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 182, ASN_3gppParser.RULE_definedType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 921;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 924;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.DOT) {
                    {
                        this.state = 922;
                        this.match(ASN_3gppParser.DOT);
                        this.state = 923;
                        this.match(ASN_3gppParser.IDENTIFIER);
                    }
                }
                this.state = 927;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 103, this._ctx)) {
                    case 1:
                        {
                            this.state = 926;
                            this.actualParameterList();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    constraint() {
        let _localctx = new ConstraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 184, ASN_3gppParser.RULE_constraint);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 929;
                this.match(ASN_3gppParser.L_PARAN);
                this.state = 930;
                this.constraintSpec();
                this.state = 932;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.EXCLAM) {
                    {
                        this.state = 931;
                        this.exceptionSpec();
                    }
                }
                this.state = 934;
                this.match(ASN_3gppParser.R_PARAN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    constraintSpec() {
        let _localctx = new ConstraintSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 186, ASN_3gppParser.RULE_constraintSpec);
        try {
            this.state = 938;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 105, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 936;
                        this.generalConstraint();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 937;
                        this.subtypeConstraint();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    userDefinedConstraint() {
        let _localctx = new UserDefinedConstraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 188, ASN_3gppParser.RULE_userDefinedConstraint);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 940;
                this.match(ASN_3gppParser.CONSTRAINED_LITERAL);
                this.state = 941;
                this.match(ASN_3gppParser.BY_LITERAL);
                this.state = 942;
                this.match(ASN_3gppParser.L_BRACE);
                this.state = 943;
                this.userDefinedConstraintParameter();
                this.state = 948;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ASN_3gppParser.COMMA) {
                    {
                        {
                            this.state = 944;
                            this.match(ASN_3gppParser.COMMA);
                            this.state = 945;
                            this.userDefinedConstraintParameter();
                        }
                    }
                    this.state = 950;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 951;
                this.match(ASN_3gppParser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    generalConstraint() {
        let _localctx = new GeneralConstraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 190, ASN_3gppParser.RULE_generalConstraint);
        try {
            this.state = 956;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.CONSTRAINED_LITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 953;
                        this.userDefinedConstraint();
                    }
                    break;
                case ASN_3gppParser.L_BRACE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 954;
                        this.tableConstraint();
                    }
                    break;
                case ASN_3gppParser.CONTAINING_LITERAL:
                case ASN_3gppParser.WITH_LITERAL:
                case ASN_3gppParser.ENCODED_LITERAL:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 955;
                        this.contentsConstraint();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    userDefinedConstraintParameter() {
        let _localctx = new UserDefinedConstraintParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 192, ASN_3gppParser.RULE_userDefinedConstraintParameter);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 958;
                this.governor();
                this.state = 964;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 108, this._ctx)) {
                    case 1:
                        {
                            this.state = 959;
                            this.match(ASN_3gppParser.COLON);
                            this.state = 960;
                            this.value();
                        }
                        break;
                    case 2:
                        {
                            this.state = 961;
                            this.valueSet();
                        }
                        break;
                    case 3:
                        {
                            this.state = 962;
                            this.object();
                        }
                        break;
                    case 4:
                        {
                            this.state = 963;
                            this.objectSet();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    tableConstraint() {
        let _localctx = new TableConstraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 194, ASN_3gppParser.RULE_tableConstraint);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 966;
                this.componentRelationConstraint();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    simpleTableConstraint() {
        let _localctx = new SimpleTableConstraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 196, ASN_3gppParser.RULE_simpleTableConstraint);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 968;
                this.objectSet();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    contentsConstraint() {
        let _localctx = new ContentsConstraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 198, ASN_3gppParser.RULE_contentsConstraint);
        try {
            this.state = 987;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 109, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 970;
                        this.match(ASN_3gppParser.CONTAINING_LITERAL);
                        this.state = 971;
                        this.asnType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 972;
                        this.match(ASN_3gppParser.ENCODED_LITERAL);
                        this.state = 973;
                        this.match(ASN_3gppParser.BY_LITERAL);
                        this.state = 974;
                        this.value();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 975;
                        this.match(ASN_3gppParser.CONTAINING_LITERAL);
                        this.state = 976;
                        this.asnType();
                        this.state = 977;
                        this.match(ASN_3gppParser.ENCODED_LITERAL);
                        this.state = 978;
                        this.match(ASN_3gppParser.BY_LITERAL);
                        this.state = 979;
                        this.value();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 981;
                        this.match(ASN_3gppParser.WITH_LITERAL);
                        this.state = 982;
                        this.match(ASN_3gppParser.COMPONENTS_LITERAL);
                        this.state = 983;
                        this.match(ASN_3gppParser.L_BRACE);
                        this.state = 984;
                        this.componentPresenceLists();
                        this.state = 985;
                        this.match(ASN_3gppParser.R_BRACE);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    componentPresenceLists() {
        let _localctx = new ComponentPresenceListsContext(this._ctx, this.state);
        this.enterRule(_localctx, 200, ASN_3gppParser.RULE_componentPresenceLists);
        let _la;
        try {
            this.state = 1005;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.R_BRACE:
                case ASN_3gppParser.COMMA:
                case ASN_3gppParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 990;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ASN_3gppParser.IDENTIFIER) {
                            {
                                this.state = 989;
                                this.componentPresenceList();
                            }
                        }
                        this.state = 998;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ASN_3gppParser.COMMA) {
                            {
                                this.state = 992;
                                this.match(ASN_3gppParser.COMMA);
                                this.state = 993;
                                this.match(ASN_3gppParser.ELLIPSIS);
                                this.state = 996;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === ASN_3gppParser.COMMA) {
                                    {
                                        this.state = 994;
                                        this.match(ASN_3gppParser.COMMA);
                                        this.state = 995;
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
                        this.state = 1000;
                        this.match(ASN_3gppParser.ELLIPSIS);
                        this.state = 1003;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ASN_3gppParser.COMMA) {
                            {
                                this.state = 1001;
                                this.match(ASN_3gppParser.COMMA);
                                this.state = 1002;
                                this.componentPresenceList();
                            }
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    componentPresenceList() {
        let _localctx = new ComponentPresenceListContext(this._ctx, this.state);
        this.enterRule(_localctx, 202, ASN_3gppParser.RULE_componentPresenceList);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1007;
                    this.componentPresence();
                }
                this.state = 1012;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1008;
                                this.match(ASN_3gppParser.COMMA);
                                this.state = 1009;
                                this.componentPresence();
                            }
                        }
                    }
                    this.state = 1014;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    componentPresence() {
        let _localctx = new ComponentPresenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 204, ASN_3gppParser.RULE_componentPresence);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1015;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 1016;
                _la = this._input.LA(1);
                if (!(_la === ASN_3gppParser.PRESENT_LITERAL || _la === ASN_3gppParser.ABSENT_LITERAL)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    subtypeConstraint() {
        let _localctx = new SubtypeConstraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 206, ASN_3gppParser.RULE_subtypeConstraint);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1018;
                this.elementSetSpecs();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    value() {
        let _localctx = new ValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 208, ASN_3gppParser.RULE_value);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1020;
                this.builtinValue();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    builtinValue() {
        let _localctx = new BuiltinValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 210, ASN_3gppParser.RULE_builtinValue);
        try {
            this.state = 1029;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 116, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1022;
                        this.enumeratedValue();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1023;
                        this.integerValue();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1024;
                        this.choiceValue();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1025;
                        this.objectIdentifierValue();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1026;
                        this.booleanValue();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1027;
                        this.match(ASN_3gppParser.CSTRING);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1028;
                        this.match(ASN_3gppParser.BSTRING);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    objectIdentifierValue() {
        let _localctx = new ObjectIdentifierValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 212, ASN_3gppParser.RULE_objectIdentifierValue);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1031;
                this.match(ASN_3gppParser.L_BRACE);
                this.state = 1032;
                this.objIdComponentsList();
                this.state = 1033;
                this.match(ASN_3gppParser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    objIdComponentsList() {
        let _localctx = new ObjIdComponentsListContext(this._ctx, this.state);
        this.enterRule(_localctx, 214, ASN_3gppParser.RULE_objIdComponentsList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1035;
                    this.objIdComponents();
                }
                this.state = 1039;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ASN_3gppParser.NUMBER || _la === ASN_3gppParser.IDENTIFIER) {
                    {
                        {
                            this.state = 1036;
                            this.objIdComponents();
                        }
                    }
                    this.state = 1041;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    objIdComponents() {
        let _localctx = new ObjIdComponentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 216, ASN_3gppParser.RULE_objIdComponents);
        let _la;
        try {
            this.state = 1053;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 120, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1042;
                        this.match(ASN_3gppParser.NUMBER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1043;
                        this.match(ASN_3gppParser.IDENTIFIER);
                        this.state = 1050;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ASN_3gppParser.L_PARAN) {
                            {
                                this.state = 1044;
                                this.match(ASN_3gppParser.L_PARAN);
                                this.state = 1047;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case ASN_3gppParser.NUMBER:
                                        {
                                            this.state = 1045;
                                            this.match(ASN_3gppParser.NUMBER);
                                        }
                                        break;
                                    case ASN_3gppParser.IDENTIFIER:
                                        {
                                            this.state = 1046;
                                            this.definedValue();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                                this.state = 1049;
                                this.match(ASN_3gppParser.R_PARAN);
                            }
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1052;
                        this.definedValue();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    integerValue() {
        let _localctx = new IntegerValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 218, ASN_3gppParser.RULE_integerValue);
        try {
            this.state = 1057;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.MINUS:
                case ASN_3gppParser.NUMBER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1055;
                        this.signedNumber();
                    }
                    break;
                case ASN_3gppParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1056;
                        this.match(ASN_3gppParser.IDENTIFIER);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    choiceValue() {
        let _localctx = new ChoiceValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 220, ASN_3gppParser.RULE_choiceValue);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1059;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 1060;
                this.match(ASN_3gppParser.COLON);
                this.state = 1061;
                this.value();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    enumeratedValue() {
        let _localctx = new EnumeratedValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 222, ASN_3gppParser.RULE_enumeratedValue);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1063;
                this.match(ASN_3gppParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    signedNumber() {
        let _localctx = new SignedNumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 224, ASN_3gppParser.RULE_signedNumber);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1066;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.MINUS) {
                    {
                        this.state = 1065;
                        this.match(ASN_3gppParser.MINUS);
                    }
                }
                this.state = 1068;
                this.match(ASN_3gppParser.NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    choiceType() {
        let _localctx = new ChoiceTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 226, ASN_3gppParser.RULE_choiceType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1070;
                this.match(ASN_3gppParser.CHOICE_LITERAL);
                this.state = 1071;
                this.match(ASN_3gppParser.L_BRACE);
                this.state = 1072;
                this.alternativeTypeLists();
                this.state = 1073;
                this.match(ASN_3gppParser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    alternativeTypeLists() {
        let _localctx = new AlternativeTypeListsContext(this._ctx, this.state);
        this.enterRule(_localctx, 228, ASN_3gppParser.RULE_alternativeTypeLists);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1075;
                this.rootAlternativeTypeList();
                this.state = 1081;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.COMMA) {
                    {
                        this.state = 1076;
                        this.match(ASN_3gppParser.COMMA);
                        this.state = 1077;
                        this.extensionAndException();
                        this.state = 1078;
                        this.extensionAdditionAlternatives();
                        this.state = 1079;
                        this.optionalExtensionMarker();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    extensionAdditionAlternatives() {
        let _localctx = new ExtensionAdditionAlternativesContext(this._ctx, this.state);
        this.enterRule(_localctx, 230, ASN_3gppParser.RULE_extensionAdditionAlternatives);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1085;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 124, this._ctx)) {
                    case 1:
                        {
                            this.state = 1083;
                            this.match(ASN_3gppParser.COMMA);
                            this.state = 1084;
                            this.extensionAdditionAlternativesList();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    extensionAdditionAlternativesList() {
        let _localctx = new ExtensionAdditionAlternativesListContext(this._ctx, this.state);
        this.enterRule(_localctx, 232, ASN_3gppParser.RULE_extensionAdditionAlternativesList);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1087;
                    this.extensionAdditionAlternative();
                }
                this.state = 1092;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1088;
                                this.match(ASN_3gppParser.COMMA);
                                this.state = 1089;
                                this.extensionAdditionAlternative();
                            }
                        }
                    }
                    this.state = 1094;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    extensionAdditionAlternative() {
        let _localctx = new ExtensionAdditionAlternativeContext(this._ctx, this.state);
        this.enterRule(_localctx, 234, ASN_3gppParser.RULE_extensionAdditionAlternative);
        try {
            this.state = 1097;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASN_3gppParser.DOUBLE_L_BRACKET:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1095;
                        this.extensionAdditionAlternativesGroup();
                    }
                    break;
                case ASN_3gppParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1096;
                        this.namedType();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    extensionAdditionAlternativesGroup() {
        let _localctx = new ExtensionAdditionAlternativesGroupContext(this._ctx, this.state);
        this.enterRule(_localctx, 236, ASN_3gppParser.RULE_extensionAdditionAlternativesGroup);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1099;
                this.match(ASN_3gppParser.DOUBLE_L_BRACKET);
                this.state = 1100;
                this.versionNumber();
                this.state = 1101;
                this.alternativeTypeList();
                this.state = 1102;
                this.match(ASN_3gppParser.DOUBLE_R_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    rootAlternativeTypeList() {
        let _localctx = new RootAlternativeTypeListContext(this._ctx, this.state);
        this.enterRule(_localctx, 238, ASN_3gppParser.RULE_rootAlternativeTypeList);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1104;
                this.alternativeTypeList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    alternativeTypeList() {
        let _localctx = new AlternativeTypeListContext(this._ctx, this.state);
        this.enterRule(_localctx, 240, ASN_3gppParser.RULE_alternativeTypeList);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1106;
                    this.namedType();
                }
                this.state = 1111;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1107;
                                this.match(ASN_3gppParser.COMMA);
                                this.state = 1108;
                                this.namedType();
                            }
                        }
                    }
                    this.state = 1113;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    namedType() {
        let _localctx = new NamedTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 242, ASN_3gppParser.RULE_namedType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1114;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 1115;
                this.asnType();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    enumeratedType() {
        let _localctx = new EnumeratedTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 244, ASN_3gppParser.RULE_enumeratedType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1117;
                this.match(ASN_3gppParser.ENUMERATED_LITERAL);
                this.state = 1118;
                this.match(ASN_3gppParser.L_BRACE);
                this.state = 1119;
                this.enumerations();
                this.state = 1120;
                this.match(ASN_3gppParser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    enumerations() {
        let _localctx = new EnumerationsContext(this._ctx, this.state);
        this.enterRule(_localctx, 246, ASN_3gppParser.RULE_enumerations);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1122;
                this.rootEnumeration();
                this.state = 1132;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.COMMA) {
                    {
                        this.state = 1123;
                        this.match(ASN_3gppParser.COMMA);
                        this.state = 1124;
                        this.match(ASN_3gppParser.ELLIPSIS);
                        this.state = 1126;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ASN_3gppParser.EXCLAM) {
                            {
                                this.state = 1125;
                                this.exceptionSpec();
                            }
                        }
                        this.state = 1130;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === ASN_3gppParser.COMMA) {
                            {
                                this.state = 1128;
                                this.match(ASN_3gppParser.COMMA);
                                this.state = 1129;
                                this.additionalEnumeration();
                            }
                        }
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    rootEnumeration() {
        let _localctx = new RootEnumerationContext(this._ctx, this.state);
        this.enterRule(_localctx, 248, ASN_3gppParser.RULE_rootEnumeration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1134;
                this.enumeration();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    enumeration() {
        let _localctx = new EnumerationContext(this._ctx, this.state);
        this.enterRule(_localctx, 250, ASN_3gppParser.RULE_enumeration);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1136;
                this.enumerationItem();
                this.state = 1141;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1137;
                                this.match(ASN_3gppParser.COMMA);
                                this.state = 1138;
                                this.enumerationItem();
                            }
                        }
                    }
                    this.state = 1143;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    enumerationItem() {
        let _localctx = new EnumerationItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 252, ASN_3gppParser.RULE_enumerationItem);
        try {
            this.state = 1147;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 132, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1144;
                        this.match(ASN_3gppParser.IDENTIFIER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1145;
                        this.namedNumber();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1146;
                        this.value();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    namedNumber() {
        let _localctx = new NamedNumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 254, ASN_3gppParser.RULE_namedNumber);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1149;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 1150;
                this.match(ASN_3gppParser.L_PARAN);
                this.state = 1153;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case ASN_3gppParser.MINUS:
                    case ASN_3gppParser.NUMBER:
                        {
                            this.state = 1151;
                            this.signedNumber();
                        }
                        break;
                    case ASN_3gppParser.IDENTIFIER:
                        {
                            this.state = 1152;
                            this.definedValue();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1155;
                this.match(ASN_3gppParser.R_PARAN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    definedValue() {
        let _localctx = new DefinedValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 256, ASN_3gppParser.RULE_definedValue);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1157;
                this.parameterizedValue();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    parameterizedValue() {
        let _localctx = new ParameterizedValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 258, ASN_3gppParser.RULE_parameterizedValue);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1159;
                this.simpleDefinedValue();
                this.state = 1161;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.L_BRACE) {
                    {
                        this.state = 1160;
                        this.actualParameterList();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    simpleDefinedValue() {
        let _localctx = new SimpleDefinedValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 260, ASN_3gppParser.RULE_simpleDefinedValue);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1163;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 1166;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.DOT) {
                    {
                        this.state = 1164;
                        this.match(ASN_3gppParser.DOT);
                        this.state = 1165;
                        this.match(ASN_3gppParser.IDENTIFIER);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    actualParameterList() {
        let _localctx = new ActualParameterListContext(this._ctx, this.state);
        this.enterRule(_localctx, 262, ASN_3gppParser.RULE_actualParameterList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1168;
                this.match(ASN_3gppParser.L_BRACE);
                this.state = 1169;
                this.actualParameter();
                this.state = 1174;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ASN_3gppParser.COMMA) {
                    {
                        {
                            this.state = 1170;
                            this.match(ASN_3gppParser.COMMA);
                            this.state = 1171;
                            this.actualParameter();
                        }
                    }
                    this.state = 1176;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1177;
                this.match(ASN_3gppParser.R_BRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    actualParameter() {
        let _localctx = new ActualParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 264, ASN_3gppParser.RULE_actualParameter);
        try {
            this.state = 1181;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 137, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1179;
                        this.asnType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1180;
                        this.value();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    exceptionSpec() {
        let _localctx = new ExceptionSpecContext(this._ctx, this.state);
        this.enterRule(_localctx, 266, ASN_3gppParser.RULE_exceptionSpec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1183;
                this.match(ASN_3gppParser.EXCLAM);
                this.state = 1184;
                this.exceptionIdentification();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    exceptionIdentification() {
        let _localctx = new ExceptionIdentificationContext(this._ctx, this.state);
        this.enterRule(_localctx, 268, ASN_3gppParser.RULE_exceptionIdentification);
        try {
            this.state = 1192;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 138, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1186;
                        this.signedNumber();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1187;
                        this.definedValue();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1188;
                        this.asnType();
                        this.state = 1189;
                        this.match(ASN_3gppParser.COLON);
                        this.state = 1190;
                        this.value();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    additionalEnumeration() {
        let _localctx = new AdditionalEnumerationContext(this._ctx, this.state);
        this.enterRule(_localctx, 270, ASN_3gppParser.RULE_additionalEnumeration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1194;
                this.enumeration();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    integerType() {
        let _localctx = new IntegerTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 272, ASN_3gppParser.RULE_integerType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1196;
                this.match(ASN_3gppParser.INTEGER_LITERAL);
                this.state = 1201;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 139, this._ctx)) {
                    case 1:
                        {
                            this.state = 1197;
                            this.match(ASN_3gppParser.L_BRACE);
                            this.state = 1198;
                            this.namedNumberList();
                            this.state = 1199;
                            this.match(ASN_3gppParser.R_BRACE);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    namedNumberList() {
        let _localctx = new NamedNumberListContext(this._ctx, this.state);
        this.enterRule(_localctx, 274, ASN_3gppParser.RULE_namedNumberList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1203;
                    this.namedNumber();
                }
                this.state = 1208;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ASN_3gppParser.COMMA) {
                    {
                        {
                            this.state = 1204;
                            this.match(ASN_3gppParser.COMMA);
                            this.state = 1205;
                            this.namedNumber();
                        }
                    }
                    this.state = 1210;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    objectidentifiertype() {
        let _localctx = new ObjectidentifiertypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 276, ASN_3gppParser.RULE_objectidentifiertype);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1211;
                this.match(ASN_3gppParser.OBJECT_LITERAL);
                this.state = 1212;
                this.match(ASN_3gppParser.IDENTIFIER_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    componentRelationConstraint() {
        let _localctx = new ComponentRelationConstraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 278, ASN_3gppParser.RULE_componentRelationConstraint);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1214;
                this.match(ASN_3gppParser.L_BRACE);
                {
                    this.state = 1215;
                    this.match(ASN_3gppParser.IDENTIFIER);
                    this.state = 1218;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === ASN_3gppParser.DOT) {
                        {
                            this.state = 1216;
                            this.match(ASN_3gppParser.DOT);
                            this.state = 1217;
                            this.match(ASN_3gppParser.IDENTIFIER);
                        }
                    }
                }
                this.state = 1220;
                this.match(ASN_3gppParser.R_BRACE);
                this.state = 1232;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.L_BRACE) {
                    {
                        this.state = 1221;
                        this.match(ASN_3gppParser.L_BRACE);
                        this.state = 1222;
                        this.atNotation();
                        this.state = 1227;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === ASN_3gppParser.COMMA) {
                            {
                                {
                                    this.state = 1223;
                                    this.match(ASN_3gppParser.COMMA);
                                    this.state = 1224;
                                    this.atNotation();
                                }
                            }
                            this.state = 1229;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1230;
                        this.match(ASN_3gppParser.R_BRACE);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    atNotation() {
        let _localctx = new AtNotationContext(this._ctx, this.state);
        this.enterRule(_localctx, 280, ASN_3gppParser.RULE_atNotation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1237;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case ASN_3gppParser.A_ROND:
                        {
                            this.state = 1234;
                            this.match(ASN_3gppParser.A_ROND);
                        }
                        break;
                    case ASN_3gppParser.A_ROND_DOT:
                        {
                            {
                                this.state = 1235;
                                this.match(ASN_3gppParser.A_ROND_DOT);
                                this.state = 1236;
                                this.level();
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1239;
                this.componentIdList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    level() {
        let _localctx = new LevelContext(this._ctx, this.state);
        this.enterRule(_localctx, 282, ASN_3gppParser.RULE_level);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1243;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === ASN_3gppParser.DOT) {
                    {
                        this.state = 1241;
                        this.match(ASN_3gppParser.DOT);
                        this.state = 1242;
                        this.level();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    componentIdList() {
        let _localctx = new ComponentIdListContext(this._ctx, this.state);
        this.enterRule(_localctx, 284, ASN_3gppParser.RULE_componentIdList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1245;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 1250;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ASN_3gppParser.DOT) {
                    {
                        {
                            this.state = 1246;
                            this.match(ASN_3gppParser.DOT);
                            this.state = 1247;
                            this.match(ASN_3gppParser.IDENTIFIER);
                        }
                    }
                    this.state = 1252;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    octetStringType() {
        let _localctx = new OctetStringTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 286, ASN_3gppParser.RULE_octetStringType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1253;
                this.match(ASN_3gppParser.OCTET_LITERAL);
                this.state = 1254;
                this.match(ASN_3gppParser.STRING_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    bitStringType() {
        let _localctx = new BitStringTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 288, ASN_3gppParser.RULE_bitStringType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1256;
                    this.match(ASN_3gppParser.BIT_LITERAL);
                    this.state = 1257;
                    this.match(ASN_3gppParser.STRING_LITERAL);
                }
                this.state = 1263;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 147, this._ctx)) {
                    case 1:
                        {
                            this.state = 1259;
                            this.match(ASN_3gppParser.L_BRACE);
                            this.state = 1260;
                            this.namedBitList();
                            this.state = 1261;
                            this.match(ASN_3gppParser.R_BRACE);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    namedBitList() {
        let _localctx = new NamedBitListContext(this._ctx, this.state);
        this.enterRule(_localctx, 290, ASN_3gppParser.RULE_namedBitList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1265;
                    this.namedBit();
                }
                this.state = 1270;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === ASN_3gppParser.COMMA) {
                    {
                        {
                            this.state = 1266;
                            this.match(ASN_3gppParser.COMMA);
                            this.state = 1267;
                            this.namedBit();
                        }
                    }
                    this.state = 1272;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    namedBit() {
        let _localctx = new NamedBitContext(this._ctx, this.state);
        this.enterRule(_localctx, 292, ASN_3gppParser.RULE_namedBit);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1273;
                this.match(ASN_3gppParser.IDENTIFIER);
                this.state = 1274;
                this.match(ASN_3gppParser.L_PARAN);
                this.state = 1277;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case ASN_3gppParser.NUMBER:
                        {
                            this.state = 1275;
                            this.match(ASN_3gppParser.NUMBER);
                        }
                        break;
                    case ASN_3gppParser.IDENTIFIER:
                        {
                            this.state = 1276;
                            this.definedValue();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1279;
                this.match(ASN_3gppParser.R_PARAN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    booleanValue() {
        let _localctx = new BooleanValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 294, ASN_3gppParser.RULE_booleanValue);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1281;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ASN_3gppParser.TRUE_LITERAL) | (1 << ASN_3gppParser.FALSE_LITERAL) | (1 << ASN_3gppParser.TRUE_SMALL_LITERAL) | (1 << ASN_3gppParser.FALSE_SMALL_LITERAL))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    static get _ATN() {
        if (!ASN_3gppParser.__ATN) {
            ASN_3gppParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(ASN_3gppParser._serializedATN));
        }
        return ASN_3gppParser.__ATN;
    }
}
exports.ASN_3gppParser = ASN_3gppParser;
ASN_3gppParser.TAG = 1;
ASN_3gppParser.A_ROND = 2;
ASN_3gppParser.STAR = 3;
ASN_3gppParser.ASSIGN_OP = 4;
ASN_3gppParser.BOOLEAN_LITERAL = 5;
ASN_3gppParser.TRUE_LITERAL = 6;
ASN_3gppParser.FALSE_LITERAL = 7;
ASN_3gppParser.DOT = 8;
ASN_3gppParser.DOUBLE_DOT = 9;
ASN_3gppParser.ELLIPSIS = 10;
ASN_3gppParser.APOSTROPHE = 11;
ASN_3gppParser.AMPERSAND = 12;
ASN_3gppParser.LESS_THAN = 13;
ASN_3gppParser.GREATER_THAN = 14;
ASN_3gppParser.LESS_THAN_SLASH = 15;
ASN_3gppParser.SLASH_GREATER_THAN = 16;
ASN_3gppParser.TRUE_SMALL_LITERAL = 17;
ASN_3gppParser.FALSE_SMALL_LITERAL = 18;
ASN_3gppParser.INTEGER_LITERAL = 19;
ASN_3gppParser.L_BRACE = 20;
ASN_3gppParser.R_BRACE = 21;
ASN_3gppParser.COMMA = 22;
ASN_3gppParser.L_PARAN = 23;
ASN_3gppParser.R_PARAN = 24;
ASN_3gppParser.MINUS = 25;
ASN_3gppParser.ENUMERATED_LITERAL = 26;
ASN_3gppParser.REAL_LITERAL = 27;
ASN_3gppParser.PLUS_INFINITY_LITERAL = 28;
ASN_3gppParser.MINUS_INFINITY_LITERAL = 29;
ASN_3gppParser.BIT_LITERAL = 30;
ASN_3gppParser.STRING_LITERAL = 31;
ASN_3gppParser.CONTAINING_LITERAL = 32;
ASN_3gppParser.OCTET_LITERAL = 33;
ASN_3gppParser.NULL_LITERAL = 34;
ASN_3gppParser.SEQUENCE_LITERAL = 35;
ASN_3gppParser.OPTIONAL_LITERAL = 36;
ASN_3gppParser.DEFAULT_LITERAL = 37;
ASN_3gppParser.COMPONENTS_LITERAL = 38;
ASN_3gppParser.OF_LITERAL = 39;
ASN_3gppParser.SET_LITERAL = 40;
ASN_3gppParser.EXCLAM = 41;
ASN_3gppParser.ALL_LITERAL = 42;
ASN_3gppParser.EXCEPT_LITERAL = 43;
ASN_3gppParser.POWER = 44;
ASN_3gppParser.PIPE = 45;
ASN_3gppParser.UNION_LITERAL = 46;
ASN_3gppParser.INTERSECTION_LITERAL = 47;
ASN_3gppParser.INCLUDES_LITERAL = 48;
ASN_3gppParser.MIN_LITERAL = 49;
ASN_3gppParser.MAX_LITERAL = 50;
ASN_3gppParser.SIZE_LITERAL = 51;
ASN_3gppParser.FROM_LITERAL = 52;
ASN_3gppParser.WITH_LITERAL = 53;
ASN_3gppParser.COMPONENT_LITERAL = 54;
ASN_3gppParser.PRESENT_LITERAL = 55;
ASN_3gppParser.ABSENT_LITERAL = 56;
ASN_3gppParser.PATTERN_LITERAL = 57;
ASN_3gppParser.TYPE_IDENTIFIER_LITERAL = 58;
ASN_3gppParser.ABSTRACT_SYNTAX_LITERAL = 59;
ASN_3gppParser.CLASS_LITERAL = 60;
ASN_3gppParser.UNIQUE_LITERAL = 61;
ASN_3gppParser.SYNTAX_LITERAL = 62;
ASN_3gppParser.L_BRACKET = 63;
ASN_3gppParser.R_BRACKET = 64;
ASN_3gppParser.INSTANCE_LITERAL = 65;
ASN_3gppParser.SEMI_COLON = 66;
ASN_3gppParser.IMPORTS_LITERAL = 67;
ASN_3gppParser.EXPORTS_LITERAL = 68;
ASN_3gppParser.EXTENSIBILITY_LITERAL = 69;
ASN_3gppParser.IMPLIED_LITERAL = 70;
ASN_3gppParser.EXPLICIT_LITERAL = 71;
ASN_3gppParser.TAGS_LITERAL = 72;
ASN_3gppParser.IMPLICIT_LITERAL = 73;
ASN_3gppParser.AUTOMATIC_LITERAL = 74;
ASN_3gppParser.DEFINITIONS_LITERAL = 75;
ASN_3gppParser.BEGIN_LITERAL = 76;
ASN_3gppParser.END_LITERAL = 77;
ASN_3gppParser.DOUBLE_L_BRACKET = 78;
ASN_3gppParser.DOUBLE_R_BRACKET = 79;
ASN_3gppParser.COLON = 80;
ASN_3gppParser.CHOICE_LITERAL = 81;
ASN_3gppParser.UNIVERSAL_LITERAL = 82;
ASN_3gppParser.APPLICATION_LITERAL = 83;
ASN_3gppParser.PRIVATE_LITERAL = 84;
ASN_3gppParser.EMBEDDED_LITERAL = 85;
ASN_3gppParser.PDV_LITERAL = 86;
ASN_3gppParser.EXTERNAL_LITERAL = 87;
ASN_3gppParser.OBJECT_LITERAL = 88;
ASN_3gppParser.IDENTIFIER_LITERAL = 89;
ASN_3gppParser.RELATIVE_OID_LITERAL = 90;
ASN_3gppParser.CHARACTER_LITERAL = 91;
ASN_3gppParser.CONSTRAINED_LITERAL = 92;
ASN_3gppParser.BY_LITERAL = 93;
ASN_3gppParser.A_ROND_DOT = 94;
ASN_3gppParser.ENCODED_LITERAL = 95;
ASN_3gppParser.COMMENT = 96;
ASN_3gppParser.UNRESTRICTEDCHARACTERSTRINGTYPE = 97;
ASN_3gppParser.EXTENSTIONENDMARKER = 98;
ASN_3gppParser.NUMBER = 99;
ASN_3gppParser.WS = 100;
ASN_3gppParser.LINE_COMMENT = 101;
ASN_3gppParser.BSTRING = 102;
ASN_3gppParser.HSTRING = 103;
ASN_3gppParser.CSTRING = 104;
ASN_3gppParser.IDENTIFIER = 105;
ASN_3gppParser.RULE_modules = 0;
ASN_3gppParser.RULE_moduleDefinition = 1;
ASN_3gppParser.RULE_tagDefault = 2;
ASN_3gppParser.RULE_extensionDefault = 3;
ASN_3gppParser.RULE_moduleBody = 4;
ASN_3gppParser.RULE_exports = 5;
ASN_3gppParser.RULE_symbolsExported = 6;
ASN_3gppParser.RULE_imports = 7;
ASN_3gppParser.RULE_symbolsImported = 8;
ASN_3gppParser.RULE_symbolsFromModuleList = 9;
ASN_3gppParser.RULE_symbolsFromModule = 10;
ASN_3gppParser.RULE_globalModuleReference = 11;
ASN_3gppParser.RULE_assignedIdentifier = 12;
ASN_3gppParser.RULE_symbolList = 13;
ASN_3gppParser.RULE_symbol = 14;
ASN_3gppParser.RULE_assignmentList = 15;
ASN_3gppParser.RULE_assignment = 16;
ASN_3gppParser.RULE_sequenceType = 17;
ASN_3gppParser.RULE_extensionAndException = 18;
ASN_3gppParser.RULE_optionalExtensionMarker = 19;
ASN_3gppParser.RULE_componentTypeLists = 20;
ASN_3gppParser.RULE_rootComponentTypeList = 21;
ASN_3gppParser.RULE_componentTypeList = 22;
ASN_3gppParser.RULE_componentType = 23;
ASN_3gppParser.RULE_tag = 24;
ASN_3gppParser.RULE_extensionAdditions = 25;
ASN_3gppParser.RULE_extensionAdditionList = 26;
ASN_3gppParser.RULE_extensionAddition = 27;
ASN_3gppParser.RULE_extensionAdditionGroup = 28;
ASN_3gppParser.RULE_versionNumber = 29;
ASN_3gppParser.RULE_sequenceOfType = 30;
ASN_3gppParser.RULE_sizeConstraint = 31;
ASN_3gppParser.RULE_parameterizedAssignment = 32;
ASN_3gppParser.RULE_parameterList = 33;
ASN_3gppParser.RULE_parameter = 34;
ASN_3gppParser.RULE_paramGovernor = 35;
ASN_3gppParser.RULE_governor = 36;
ASN_3gppParser.RULE_objectClassAssignment = 37;
ASN_3gppParser.RULE_objectClass = 38;
ASN_3gppParser.RULE_definedObjectClass = 39;
ASN_3gppParser.RULE_usefulObjectClassReference = 40;
ASN_3gppParser.RULE_externalObjectClassReference = 41;
ASN_3gppParser.RULE_objectClassDefn = 42;
ASN_3gppParser.RULE_withSyntaxSpec = 43;
ASN_3gppParser.RULE_syntaxList = 44;
ASN_3gppParser.RULE_tokenOrGroupSpec = 45;
ASN_3gppParser.RULE_optionalGroup = 46;
ASN_3gppParser.RULE_requiredToken = 47;
ASN_3gppParser.RULE_literal = 48;
ASN_3gppParser.RULE_primitiveFieldName = 49;
ASN_3gppParser.RULE_fieldSpec = 50;
ASN_3gppParser.RULE_typeFieldSpec = 51;
ASN_3gppParser.RULE_typeOptionalitySpec = 52;
ASN_3gppParser.RULE_fixedTypeValueFieldSpec = 53;
ASN_3gppParser.RULE_valueOptionalitySpec = 54;
ASN_3gppParser.RULE_variableTypeValueFieldSpec = 55;
ASN_3gppParser.RULE_fixedTypeValueSetFieldSpec = 56;
ASN_3gppParser.RULE_valueSetOptionalitySpec = 57;
ASN_3gppParser.RULE_object = 58;
ASN_3gppParser.RULE_parameterizedObject = 59;
ASN_3gppParser.RULE_definedObject = 60;
ASN_3gppParser.RULE_objectSet = 61;
ASN_3gppParser.RULE_objectSetSpec = 62;
ASN_3gppParser.RULE_fieldName = 63;
ASN_3gppParser.RULE_valueSet = 64;
ASN_3gppParser.RULE_elementSetSpecs = 65;
ASN_3gppParser.RULE_rootElementSetSpec = 66;
ASN_3gppParser.RULE_additionalElementSetSpec = 67;
ASN_3gppParser.RULE_elementSetSpec = 68;
ASN_3gppParser.RULE_unions = 69;
ASN_3gppParser.RULE_exclusions = 70;
ASN_3gppParser.RULE_intersections = 71;
ASN_3gppParser.RULE_unionMark = 72;
ASN_3gppParser.RULE_intersectionMark = 73;
ASN_3gppParser.RULE_elements = 74;
ASN_3gppParser.RULE_objectSetElements = 75;
ASN_3gppParser.RULE_intersectionElements = 76;
ASN_3gppParser.RULE_subtypeElements = 77;
ASN_3gppParser.RULE_variableTypeValueSetFieldSpec = 78;
ASN_3gppParser.RULE_objectFieldSpec = 79;
ASN_3gppParser.RULE_objectOptionalitySpec = 80;
ASN_3gppParser.RULE_objectSetFieldSpec = 81;
ASN_3gppParser.RULE_objectSetOptionalitySpec = 82;
ASN_3gppParser.RULE_typeAssignment = 83;
ASN_3gppParser.RULE_valueAssignment = 84;
ASN_3gppParser.RULE_asnType = 85;
ASN_3gppParser.RULE_builtinType = 86;
ASN_3gppParser.RULE_objectClassFieldType = 87;
ASN_3gppParser.RULE_setType = 88;
ASN_3gppParser.RULE_setOfType = 89;
ASN_3gppParser.RULE_referencedType = 90;
ASN_3gppParser.RULE_definedType = 91;
ASN_3gppParser.RULE_constraint = 92;
ASN_3gppParser.RULE_constraintSpec = 93;
ASN_3gppParser.RULE_userDefinedConstraint = 94;
ASN_3gppParser.RULE_generalConstraint = 95;
ASN_3gppParser.RULE_userDefinedConstraintParameter = 96;
ASN_3gppParser.RULE_tableConstraint = 97;
ASN_3gppParser.RULE_simpleTableConstraint = 98;
ASN_3gppParser.RULE_contentsConstraint = 99;
ASN_3gppParser.RULE_componentPresenceLists = 100;
ASN_3gppParser.RULE_componentPresenceList = 101;
ASN_3gppParser.RULE_componentPresence = 102;
ASN_3gppParser.RULE_subtypeConstraint = 103;
ASN_3gppParser.RULE_value = 104;
ASN_3gppParser.RULE_builtinValue = 105;
ASN_3gppParser.RULE_objectIdentifierValue = 106;
ASN_3gppParser.RULE_objIdComponentsList = 107;
ASN_3gppParser.RULE_objIdComponents = 108;
ASN_3gppParser.RULE_integerValue = 109;
ASN_3gppParser.RULE_choiceValue = 110;
ASN_3gppParser.RULE_enumeratedValue = 111;
ASN_3gppParser.RULE_signedNumber = 112;
ASN_3gppParser.RULE_choiceType = 113;
ASN_3gppParser.RULE_alternativeTypeLists = 114;
ASN_3gppParser.RULE_extensionAdditionAlternatives = 115;
ASN_3gppParser.RULE_extensionAdditionAlternativesList = 116;
ASN_3gppParser.RULE_extensionAdditionAlternative = 117;
ASN_3gppParser.RULE_extensionAdditionAlternativesGroup = 118;
ASN_3gppParser.RULE_rootAlternativeTypeList = 119;
ASN_3gppParser.RULE_alternativeTypeList = 120;
ASN_3gppParser.RULE_namedType = 121;
ASN_3gppParser.RULE_enumeratedType = 122;
ASN_3gppParser.RULE_enumerations = 123;
ASN_3gppParser.RULE_rootEnumeration = 124;
ASN_3gppParser.RULE_enumeration = 125;
ASN_3gppParser.RULE_enumerationItem = 126;
ASN_3gppParser.RULE_namedNumber = 127;
ASN_3gppParser.RULE_definedValue = 128;
ASN_3gppParser.RULE_parameterizedValue = 129;
ASN_3gppParser.RULE_simpleDefinedValue = 130;
ASN_3gppParser.RULE_actualParameterList = 131;
ASN_3gppParser.RULE_actualParameter = 132;
ASN_3gppParser.RULE_exceptionSpec = 133;
ASN_3gppParser.RULE_exceptionIdentification = 134;
ASN_3gppParser.RULE_additionalEnumeration = 135;
ASN_3gppParser.RULE_integerType = 136;
ASN_3gppParser.RULE_namedNumberList = 137;
ASN_3gppParser.RULE_objectidentifiertype = 138;
ASN_3gppParser.RULE_componentRelationConstraint = 139;
ASN_3gppParser.RULE_atNotation = 140;
ASN_3gppParser.RULE_level = 141;
ASN_3gppParser.RULE_componentIdList = 142;
ASN_3gppParser.RULE_octetStringType = 143;
ASN_3gppParser.RULE_bitStringType = 144;
ASN_3gppParser.RULE_namedBitList = 145;
ASN_3gppParser.RULE_namedBit = 146;
ASN_3gppParser.RULE_booleanValue = 147;
// tslint:disable:no-trailing-whitespace
ASN_3gppParser.ruleNames = [
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
    "asnType", "builtinType", "objectClassFieldType", "setType", "setOfType",
    "referencedType", "definedType", "constraint", "constraintSpec", "userDefinedConstraint",
    "generalConstraint", "userDefinedConstraintParameter", "tableConstraint",
    "simpleTableConstraint", "contentsConstraint", "componentPresenceLists",
    "componentPresenceList", "componentPresence", "subtypeConstraint", "value",
    "builtinValue", "objectIdentifierValue", "objIdComponentsList", "objIdComponents",
    "integerValue", "choiceValue", "enumeratedValue", "signedNumber", "choiceType",
    "alternativeTypeLists", "extensionAdditionAlternatives", "extensionAdditionAlternativesList",
    "extensionAdditionAlternative", "extensionAdditionAlternativesGroup",
    "rootAlternativeTypeList", "alternativeTypeList", "namedType", "enumeratedType",
    "enumerations", "rootEnumeration", "enumeration", "enumerationItem", "namedNumber",
    "definedValue", "parameterizedValue", "simpleDefinedValue", "actualParameterList",
    "actualParameter", "exceptionSpec", "exceptionIdentification", "additionalEnumeration",
    "integerType", "namedNumberList", "objectidentifiertype", "componentRelationConstraint",
    "atNotation", "level", "componentIdList", "octetStringType", "bitStringType",
    "namedBitList", "namedBit", "booleanValue",
];
ASN_3gppParser._LITERAL_NAMES = [
    undefined, undefined, "'@'", "'*'", "'::='", "'BOOLEAN'", "'TRUE'", "'FALSE'",
    "'.'", "'..'", "'...'", "'''", "'&'", "'<'", "'>'", "'</'", "'/>'", "'true'",
    "'false'", "'INTEGER'", "'{'", "'}'", "','", "'('", "')'", "'-'", "'ENUMERATED'",
    "'REAL'", "'PLUS-INFINITY'", "'MINUS-INFINITY'", "'BIT'", "'STRING'",
    "'CONTAINING'", "'OCTET'", "'NULL'", "'SEQUENCE'", "'OPTIONAL'", "'DEFAULT'",
    "'COMPONENTS'", "'OF'", "'SET'", "'!'", "'ALL'", "'EXCEPT'", "'^'", "'|'",
    "'UNION'", "'INTERSECTION'", "'INCLUDES'", "'MIN'", "'MAX'", "'SIZE'",
    "'FROM'", "'WITH'", "'COMPONENT'", "'PRESENT'", "'ABSENT'", "'PATTERN'",
    "'TYPE-Identifier'", "'ABSTRACT-SYNTAX'", "'CLASS'", "'UNIQUE'", "'SYNTAX'",
    "'['", "']'", "'INSTANCE'", "';'", "'IMPORTS'", "'EXPORTS'", "'EXTENSIBILITY'",
    "'IMPLIED'", "'EXPLICIT'", "'TAGS'", "'IMPLICIT'", "'AUTOMATIC'", "'DEFINITIONS'",
    "'BEGIN'", "'END'", "'[['", "']]'", "':'", "'CHOICE'", "'UNIVERSAL'",
    "'APPLICATION'", "'PRIVATE'", "'EMBEDDED'", "'PDV'", "'EXTERNAL'", "'OBJECT'",
    "'IDENTIFIER'", "'RELATIVE-OID'", "'CHARACTER'", "'CONSTRAINED'", "'BY'",
    "'@.'", "'ENCODED'", "'--'",
];
ASN_3gppParser._SYMBOLIC_NAMES = [
    undefined, "TAG", "A_ROND", "STAR", "ASSIGN_OP", "BOOLEAN_LITERAL", "TRUE_LITERAL",
    "FALSE_LITERAL", "DOT", "DOUBLE_DOT", "ELLIPSIS", "APOSTROPHE", "AMPERSAND",
    "LESS_THAN", "GREATER_THAN", "LESS_THAN_SLASH", "SLASH_GREATER_THAN",
    "TRUE_SMALL_LITERAL", "FALSE_SMALL_LITERAL", "INTEGER_LITERAL", "L_BRACE",
    "R_BRACE", "COMMA", "L_PARAN", "R_PARAN", "MINUS", "ENUMERATED_LITERAL",
    "REAL_LITERAL", "PLUS_INFINITY_LITERAL", "MINUS_INFINITY_LITERAL", "BIT_LITERAL",
    "STRING_LITERAL", "CONTAINING_LITERAL", "OCTET_LITERAL", "NULL_LITERAL",
    "SEQUENCE_LITERAL", "OPTIONAL_LITERAL", "DEFAULT_LITERAL", "COMPONENTS_LITERAL",
    "OF_LITERAL", "SET_LITERAL", "EXCLAM", "ALL_LITERAL", "EXCEPT_LITERAL",
    "POWER", "PIPE", "UNION_LITERAL", "INTERSECTION_LITERAL", "INCLUDES_LITERAL",
    "MIN_LITERAL", "MAX_LITERAL", "SIZE_LITERAL", "FROM_LITERAL", "WITH_LITERAL",
    "COMPONENT_LITERAL", "PRESENT_LITERAL", "ABSENT_LITERAL", "PATTERN_LITERAL",
    "TYPE_IDENTIFIER_LITERAL", "ABSTRACT_SYNTAX_LITERAL", "CLASS_LITERAL",
    "UNIQUE_LITERAL", "SYNTAX_LITERAL", "L_BRACKET", "R_BRACKET", "INSTANCE_LITERAL",
    "SEMI_COLON", "IMPORTS_LITERAL", "EXPORTS_LITERAL", "EXTENSIBILITY_LITERAL",
    "IMPLIED_LITERAL", "EXPLICIT_LITERAL", "TAGS_LITERAL", "IMPLICIT_LITERAL",
    "AUTOMATIC_LITERAL", "DEFINITIONS_LITERAL", "BEGIN_LITERAL", "END_LITERAL",
    "DOUBLE_L_BRACKET", "DOUBLE_R_BRACKET", "COLON", "CHOICE_LITERAL", "UNIVERSAL_LITERAL",
    "APPLICATION_LITERAL", "PRIVATE_LITERAL", "EMBEDDED_LITERAL", "PDV_LITERAL",
    "EXTERNAL_LITERAL", "OBJECT_LITERAL", "IDENTIFIER_LITERAL", "RELATIVE_OID_LITERAL",
    "CHARACTER_LITERAL", "CONSTRAINED_LITERAL", "BY_LITERAL", "A_ROND_DOT",
    "ENCODED_LITERAL", "COMMENT", "UNRESTRICTEDCHARACTERSTRINGTYPE", "EXTENSTIONENDMARKER",
    "NUMBER", "WS", "LINE_COMMENT", "BSTRING", "HSTRING", "CSTRING", "IDENTIFIER",
];
ASN_3gppParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(ASN_3gppParser._LITERAL_NAMES, ASN_3gppParser._SYMBOLIC_NAMES, []);
ASN_3gppParser._serializedATNSegments = 3;
ASN_3gppParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03k\u0506\x04\x02" +
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
    "\x03\x02\x06\x02\u012C\n\x02\r\x02\x0E\x02\u012D\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x07\x03\u0136\n\x03\f\x03\x0E\x03\u0139\v\x03" +
    "\x03\x03\x05\x03\u013C\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x04\x03\x04\x05\x04\u0148\n\x04\x03\x05\x03\x05" +
    "\x05\x05\u014C\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u0152\n\x06" +
    "\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u015B" +
    "\n\x07\x03\b\x05\b\u015E\n\b\x03\t\x03\t\x03\t\x03\t\x05\t\u0164\n\t\x03" +
    "\n\x05\n\u0167\n\n\x03\v\x03\v\x07\v\u016B\n\v\f\v\x0E\v\u016E\v\v\x03" +
    "\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
    "\x03\x0F\x07\x0F\u017C\n\x0F\f\x0F\x0E\x0F\u017F\v\x0F\x03\x10\x03\x10" +
    "\x03\x10\x05\x10\u0184\n\x10\x03\x11\x03\x11\x07\x11\u0188\n\x11\f\x11" +
    "\x0E\x11\u018B\v\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0192" +
    "\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u019A\n" +
    "\x13\x03\x13\x03\x13\x03\x14\x03\x14\x05\x14\u01A0\n\x14\x03\x15\x03\x15" +
    "\x05\x15\u01A4\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u01AA\n\x16" +
    "\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u01B3" +
    "\n\x16\x05\x16\u01B5\n\x16\x05\x16\u01B7\n\x16\x03\x16\x03\x16\x03\x16" +
    "\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u01C0\n\x16\x05\x16\u01C2\n\x16" +
    "\x05\x16\u01C4\n\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x05\x18\u01CB" +
    "\n\x18\x03\x18\x07\x18\u01CE\n\x18\f\x18\x0E\x18\u01D1\v\x18\x03\x19\x03" +
    "\x19\x03\x19\x03\x19\x05\x19\u01D7\n\x19\x03\x19\x03\x19\x03\x19\x05\x19" +
    "\u01DC\n\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x05\x1B\u01E2\n\x1B\x03\x1C" +
    "\x03\x1C\x03\x1C\x05\x1C\u01E7\n\x1C\x03\x1C\x07\x1C\u01EA\n\x1C\f\x1C" +
    "\x0E\x1C\u01ED\v\x1C\x03\x1D\x03\x1D\x05\x1D\u01F1\n\x1D\x03\x1E\x03\x1E" +
    "\x03\x1E\x03\x1E\x05\x1E\u01F7\n\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x05" +
    "\x1F\u01FD\n\x1F\x03 \x03 \x03 \x03 \x05 \u0203\n \x03 \x03 \x05 \u0207" +
    "\n \x03 \x03 \x03 \x05 \u020C\n \x03!\x03!\x03!\x03\"\x03\"\x03\"\x03" +
    "\"\x03\"\x05\"\u0216\n\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u021D\n\"" +
    "\x05\"\u021F\n\"\x03#\x03#\x03#\x03#\x07#\u0225\n#\f#\x0E#\u0228\v#\x03" +
    "#\x03#\x03$\x03$\x03$\x05$\u022F\n$\x03$\x03$\x03%\x03%\x05%\u0235\n%" +
    "\x03&\x03&\x05&\u0239\n&\x03\'\x03\'\x03\'\x03(\x03(\x05(\u0240\n(\x03" +
    ")\x03)\x05)\u0244\n)\x03)\x03)\x03)\x05)\u0249\n)\x03*\x03*\x03+\x03+" +
    "\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x07,\u0256\n,\f,\x0E,\u0259\v,\x03" +
    ",\x03,\x05,\u025D\n,\x03-\x03-\x03-\x03-\x03.\x03.\x06.\u0265\n.\r.\x0E" +
    ".\u0266\x03.\x03.\x03/\x03/\x05/\u026D\n/\x030\x030\x060\u0271\n0\r0\x0E" +
    "0\u0272\x030\x030\x031\x031\x051\u0279\n1\x032\x032\x033\x033\x033\x03" +
    "4\x034\x034\x054\u0283\n4\x034\x034\x054\u0287\n4\x034\x054\u028A\n4\x03" +
    "4\x054\u028D\n4\x054\u028F\n4\x034\x034\x034\x034\x034\x054\u0296\n4\x05" +
    "4\u0298\n4\x034\x034\x034\x034\x034\x054\u029F\n4\x054\u02A1\n4\x054\u02A3" +
    "\n4\x035\x035\x035\x055\u02A8\n5\x036\x036\x036\x056\u02AD\n6\x037\x03" +
    "7\x037\x037\x057\u02B3\n7\x037\x057\u02B6\n7\x038\x038\x038\x058\u02BB" +
    "\n8\x039\x039\x039\x039\x059\u02C1\n9\x03:\x03:\x03:\x03:\x05:\u02C7\n" +
    ":\x03;\x03;\x03;\x05;\u02CC\n;\x03<\x03<\x05<\u02D0\n<\x03=\x03=\x03=" +
    "\x03>\x03>\x05>\u02D7\n>\x03?\x03?\x03?\x03?\x03@\x03@\x03@\x03@\x03@" +
    "\x05@\u02E2\n@\x05@\u02E4\n@\x03@\x03@\x03@\x05@\u02E9\n@\x05@\u02EB\n" +
    "@\x03A\x03A\x03A\x03A\x03A\x03A\x07A\u02F3\nA\fA\x0EA\u02F6\vA\x03B\x03" +
    "B\x03B\x03B\x03C\x03C\x03C\x03C\x03C\x05C\u0301\nC\x05C\u0303\nC\x03D" +
    "\x03D\x03E\x03E\x03F\x03F\x03F\x05F\u030C\nF\x03G\x03G\x03G\x03G\x07G" +
    "\u0312\nG\fG\x0EG\u0315\vG\x03H\x03H\x03H\x03I\x03I\x03I\x03I\x07I\u031E" +
    "\nI\fI\x0EI\u0321\vI\x03J\x03J\x03K\x03K\x03L\x03L\x03M\x03M\x05M\u032B" +
    "\nM\x03N\x03N\x05N\u032F\nN\x03O\x03O\x05O\u0333\nO\x03O\x05O\u0336\n" +
    "O\x03O\x03O\x05O\u033A\nO\x03O\x03O\x05O\u033E\nO\x03O\x03O\x03O\x03O" +
    "\x05O\u0344\nO\x03P\x03P\x03P\x03P\x05P\u034A\nP\x03Q\x03Q\x03Q\x03Q\x05" +
    "Q\u0350\nQ\x03R\x03R\x03R\x05R\u0355\nR\x03S\x03S\x03S\x03S\x05S\u035B" +
    "\nS\x03T\x03T\x03T\x05T\u0360\nT\x03U\x03U\x03U\x03V\x03V\x03V\x03V\x03" +
    "W\x03W\x05W\u036B\nW\x03W\x07W\u036E\nW\fW\x0EW\u0371\vW\x03X\x03X\x03" +
    "X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x05X\u0380\nX\x03" +
    "Y\x03Y\x03Y\x03Y\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x05Z\u038C\nZ\x03Z\x03" +
    "Z\x03[\x03[\x03[\x05[\u0393\n[\x03[\x03[\x03[\x05[\u0398\n[\x03\\\x03" +
    "\\\x03]\x03]\x03]\x05]\u039F\n]\x03]\x05]\u03A2\n]\x03^\x03^\x03^\x05" +
    "^\u03A7\n^\x03^\x03^\x03_\x03_\x05_\u03AD\n_\x03`\x03`\x03`\x03`\x03`" +
    "\x03`\x07`\u03B5\n`\f`\x0E`\u03B8\v`\x03`\x03`\x03a\x03a\x03a\x05a\u03BF" +
    "\na\x03b\x03b\x03b\x03b\x03b\x03b\x05b\u03C7\nb\x03c\x03c\x03d\x03d\x03" +
    "e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03" +
    "e\x03e\x03e\x05e\u03DE\ne\x03f\x05f\u03E1\nf\x03f\x03f\x03f\x03f\x05f" +
    "\u03E7\nf\x05f\u03E9\nf\x03f\x03f\x03f\x05f\u03EE\nf\x05f\u03F0\nf\x03" +
    "g\x03g\x03g\x07g\u03F5\ng\fg\x0Eg\u03F8\vg\x03h\x03h\x03h\x03i\x03i\x03" +
    "j\x03j\x03k\x03k\x03k\x03k\x03k\x03k\x03k\x05k\u0408\nk\x03l\x03l\x03" +
    "l\x03l\x03m\x03m\x07m\u0410\nm\fm\x0Em\u0413\vm\x03n\x03n\x03n\x03n\x03" +
    "n\x05n\u041A\nn\x03n\x05n\u041D\nn\x03n\x05n\u0420\nn\x03o\x03o\x05o\u0424" +
    "\no\x03p\x03p\x03p\x03p\x03q\x03q\x03r\x05r\u042D\nr\x03r\x03r\x03s\x03" +
    "s\x03s\x03s\x03s\x03t\x03t\x03t\x03t\x03t\x03t\x05t\u043C\nt\x03u\x03" +
    "u\x05u\u0440\nu\x03v\x03v\x03v\x07v\u0445\nv\fv\x0Ev\u0448\vv\x03w\x03" +
    "w\x05w\u044C\nw\x03x\x03x\x03x\x03x\x03x\x03y\x03y\x03z\x03z\x03z\x07" +
    "z\u0458\nz\fz\x0Ez\u045B\vz\x03{\x03{\x03{\x03|\x03|\x03|\x03|\x03|\x03" +
    "}\x03}\x03}\x03}\x05}\u0469\n}\x03}\x03}\x05}\u046D\n}\x05}\u046F\n}\x03" +
    "~\x03~\x03\x7F\x03\x7F\x03\x7F\x07\x7F\u0476\n\x7F\f\x7F\x0E\x7F\u0479" +
    "\v\x7F\x03\x80\x03\x80\x03\x80\x05\x80\u047E\n\x80\x03\x81\x03\x81\x03" +
    "\x81\x03\x81\x05\x81\u0484\n\x81\x03\x81\x03\x81\x03\x82\x03\x82\x03\x83" +
    "\x03\x83\x05\x83\u048C\n\x83\x03\x84\x03\x84\x03\x84\x05\x84\u0491\n\x84" +
    "\x03\x85\x03\x85\x03\x85\x03\x85\x07\x85\u0497\n\x85\f\x85\x0E\x85\u049A" +
    "\v\x85\x03\x85\x03\x85\x03\x86\x03\x86\x05\x86\u04A0\n\x86\x03\x87\x03" +
    "\x87\x03\x87\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x05\x88\u04AB" +
    "\n\x88\x03\x89\x03\x89\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x05\x8A" +
    "\u04B4\n\x8A\x03\x8B\x03\x8B\x03\x8B\x07\x8B\u04B9\n\x8B\f\x8B\x0E\x8B" +
    "\u04BC\v\x8B\x03\x8C\x03\x8C\x03\x8C\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x05" +
    "\x8D\u04C5\n\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x07\x8D\u04CC" +
    "\n\x8D\f\x8D\x0E\x8D\u04CF\v\x8D\x03\x8D\x03\x8D\x05\x8D\u04D3\n\x8D\x03" +
    "\x8E\x03\x8E\x03\x8E\x05\x8E\u04D8\n\x8E\x03\x8E\x03\x8E\x03\x8F\x03\x8F" +
    "\x05\x8F\u04DE\n\x8F\x03\x90\x03\x90\x03\x90\x07\x90\u04E3\n\x90\f\x90" +
    "\x0E\x90\u04E6\v\x90\x03\x91\x03\x91\x03\x91\x03\x92\x03\x92\x03\x92\x03" +
    "\x92\x03\x92\x03\x92\x03\x92\x05\x92\u04F2\n\x92\x03\x93\x03\x93\x03\x93" +
    "\x07\x93\u04F7\n\x93\f\x93\x0E\x93\u04FA\v\x93\x03\x94\x03\x94\x03\x94" +
    "\x03\x94\x05\x94\u0500\n\x94\x03\x94\x03\x94\x03\x95\x03\x95\x03\x95\x02" +
    "\x02\x02\x96\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
    "\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
    "&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
    "B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
    "^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
    "z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02" +
    "\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02" +
    "\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02" +
    "\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02" +
    "\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02" +
    "\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02" +
    "\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02" +
    "\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108" +
    "\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116" +
    "\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124" +
    "\x02\u0126\x02\u0128\x02\x02\t\x04\x02IIKL\x03\x02<=\x04\x02\x18\x18k" +
    "k\x03\x02/0\x04\x02..11\x03\x029:\x04\x02\b\t\x13\x14\x02\u0531\x02\u012B" +
    "\x03\x02\x02\x02\x04\u012F\x03\x02\x02\x02\x06\u0147\x03\x02\x02\x02\b" +
    "\u014B\x03\x02\x02\x02\n\u0151\x03\x02\x02\x02\f\u015A\x03\x02\x02\x02" +
    "\x0E\u015D\x03\x02\x02\x02\x10\u0163\x03\x02\x02\x02\x12\u0166\x03\x02" +
    "\x02\x02\x14\u0168\x03\x02\x02\x02\x16\u016F\x03\x02\x02\x02\x18\u0173" +
    "\x03\x02\x02\x02\x1A\u0176\x03\x02\x02\x02\x1C\u0178\x03\x02\x02\x02\x1E" +
    "\u0180\x03\x02\x02\x02 \u0185\x03\x02\x02\x02\"\u018C\x03\x02\x02\x02" +
    "$\u0193\x03\x02\x02\x02&\u019D\x03\x02\x02\x02(\u01A3\x03\x02\x02\x02" +
    "*\u01C3\x03\x02\x02\x02,\u01C5\x03\x02\x02\x02.\u01C7\x03\x02\x02\x02" +
    "0\u01DB\x03\x02\x02\x022\u01DD\x03\x02\x02\x024\u01E1\x03\x02\x02\x02" +
    "6\u01E3\x03\x02\x02\x028\u01F0\x03\x02\x02\x02:\u01F2\x03\x02\x02\x02" +
    "<\u01FC\x03\x02\x02\x02>\u01FE\x03\x02\x02\x02@\u020D\x03\x02\x02\x02" +
    "B\u021E\x03\x02\x02\x02D\u0220\x03\x02\x02\x02F\u022E\x03\x02\x02\x02" +
    "H\u0234\x03\x02\x02\x02J\u0238\x03\x02\x02\x02L\u023A\x03\x02\x02\x02" +
    "N\u023F\x03\x02\x02\x02P\u0248\x03\x02\x02\x02R\u024A\x03\x02\x02\x02" +
    "T\u024C\x03\x02\x02\x02V\u0250\x03\x02\x02\x02X\u025E\x03\x02\x02\x02" +
    "Z\u0262\x03\x02\x02\x02\\\u026C\x03\x02\x02\x02^\u026E\x03\x02\x02\x02" +
    "`\u0278\x03\x02\x02\x02b\u027A\x03\x02\x02\x02d\u027C\x03\x02\x02\x02" +
    "f\u027F\x03\x02\x02\x02h\u02A4\x03\x02\x02\x02j\u02AC\x03\x02\x02\x02" +
    "l\u02AE\x03\x02\x02\x02n\u02BA\x03\x02\x02\x02p\u02BC\x03\x02\x02\x02" +
    "r\u02C2\x03\x02\x02\x02t\u02CB\x03\x02\x02\x02v\u02CF\x03\x02\x02\x02" +
    "x\u02D1\x03\x02\x02\x02z\u02D4\x03\x02\x02\x02|\u02D8\x03\x02\x02\x02" +
    "~\u02EA\x03\x02\x02\x02\x80\u02EC\x03\x02\x02\x02\x82\u02F7\x03\x02\x02" +
    "\x02\x84\u02FB\x03\x02\x02\x02\x86\u0304\x03\x02\x02\x02\x88\u0306\x03" +
    "\x02\x02\x02\x8A\u030B\x03\x02\x02\x02\x8C\u030D\x03\x02\x02\x02\x8E\u0316" +
    "\x03\x02\x02\x02\x90\u0319\x03\x02\x02\x02\x92\u0322\x03\x02\x02\x02\x94" +
    "\u0324\x03\x02\x02\x02\x96\u0326\x03\x02\x02\x02\x98\u032A\x03\x02\x02" +
    "\x02\x9A\u032C\x03\x02\x02\x02\x9C\u0343\x03\x02\x02\x02\x9E\u0345\x03" +
    "\x02\x02\x02\xA0\u034B\x03\x02\x02\x02\xA2\u0354\x03\x02\x02\x02\xA4\u0356" +
    "\x03\x02\x02\x02\xA6\u035F\x03\x02\x02\x02\xA8\u0361\x03\x02\x02\x02\xAA" +
    "\u0364\x03\x02\x02\x02\xAC\u036A\x03\x02\x02\x02\xAE\u037F\x03\x02\x02" +
    "\x02\xB0\u0381\x03\x02\x02\x02\xB2\u0385\x03\x02\x02\x02\xB4\u038F\x03" +
    "\x02\x02\x02\xB6\u0399\x03\x02\x02\x02\xB8\u039B\x03\x02\x02\x02\xBA\u03A3" +
    "\x03\x02\x02\x02\xBC\u03AC\x03\x02\x02\x02\xBE\u03AE\x03\x02\x02\x02\xC0" +
    "\u03BE\x03\x02\x02\x02\xC2\u03C0\x03\x02\x02\x02\xC4\u03C8\x03\x02\x02" +
    "\x02\xC6\u03CA\x03\x02\x02\x02\xC8\u03DD\x03\x02\x02\x02\xCA\u03EF\x03" +
    "\x02\x02\x02\xCC\u03F1\x03\x02\x02\x02\xCE\u03F9\x03\x02\x02\x02\xD0\u03FC" +
    "\x03\x02\x02\x02\xD2\u03FE\x03\x02\x02\x02\xD4\u0407\x03\x02\x02\x02\xD6" +
    "\u0409\x03\x02\x02\x02\xD8\u040D\x03\x02\x02\x02\xDA\u041F\x03\x02\x02" +
    "\x02\xDC\u0423\x03\x02\x02\x02\xDE\u0425\x03\x02\x02\x02\xE0\u0429\x03" +
    "\x02\x02\x02\xE2\u042C\x03\x02\x02\x02\xE4\u0430\x03\x02\x02\x02\xE6\u0435" +
    "\x03\x02\x02\x02\xE8\u043F\x03\x02\x02\x02\xEA\u0441\x03\x02\x02\x02\xEC" +
    "\u044B\x03\x02\x02\x02\xEE\u044D\x03\x02\x02\x02\xF0\u0452\x03\x02\x02" +
    "\x02\xF2\u0454\x03\x02\x02\x02\xF4\u045C\x03\x02\x02\x02\xF6\u045F\x03" +
    "\x02\x02\x02\xF8\u0464\x03\x02\x02\x02\xFA\u0470\x03\x02\x02\x02\xFC\u0472" +
    "\x03\x02\x02\x02\xFE\u047D\x03\x02\x02\x02\u0100\u047F\x03\x02\x02\x02" +
    "\u0102\u0487\x03\x02\x02\x02\u0104\u0489\x03\x02\x02\x02\u0106\u048D\x03" +
    "\x02\x02\x02\u0108\u0492\x03\x02\x02\x02\u010A\u049F\x03\x02\x02\x02\u010C" +
    "\u04A1\x03\x02\x02\x02\u010E\u04AA\x03\x02\x02\x02\u0110\u04AC\x03\x02" +
    "\x02\x02\u0112\u04AE\x03\x02\x02\x02\u0114\u04B5\x03\x02\x02\x02\u0116" +
    "\u04BD\x03\x02\x02\x02\u0118\u04C0\x03\x02\x02\x02\u011A\u04D7\x03\x02" +
    "\x02\x02\u011C\u04DD\x03\x02\x02\x02\u011E\u04DF\x03\x02\x02\x02\u0120" +
    "\u04E7\x03\x02\x02\x02\u0122\u04EA\x03\x02\x02\x02\u0124\u04F3\x03\x02" +
    "\x02\x02\u0126\u04FB\x03\x02\x02\x02\u0128\u0503\x03\x02\x02\x02\u012A" +
    "\u012C\x05\x04\x03\x02\u012B\u012A\x03\x02\x02\x02\u012C\u012D\x03\x02" +
    "\x02\x02\u012D\u012B\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E" +
    "\x03\x03\x02\x02\x02\u012F\u013B\x07k\x02\x02\u0130\u0137\x07\x16\x02" +
    "\x02\u0131\u0132\x07k\x02\x02\u0132\u0133\x07\x19\x02\x02\u0133\u0134" +
    "\x07e\x02\x02\u0134\u0136\x07\x1A\x02\x02\u0135\u0131\x03\x02\x02\x02" +
    "\u0136\u0139\x03\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0137\u0138\x03" +
    "\x02\x02\x02\u0138\u013A\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u013A" +
    "\u013C\x07\x17\x02\x02\u013B\u0130\x03\x02\x02\x02\u013B\u013C\x03\x02" +
    "\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D\u013E\x07M\x02\x02\u013E\u013F" +
    "\x05\x06\x04\x02\u013F\u0140\x05\b\x05\x02\u0140\u0141\x07\x06\x02\x02" +
    "\u0141\u0142\x07N\x02\x02\u0142\u0143\x05\n\x06\x02\u0143\u0144\x07O\x02" +
    "\x02\u0144\x05\x03\x02\x02\x02\u0145\u0146\t\x02\x02\x02\u0146\u0148\x07" +
    "J\x02\x02\u0147\u0145\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148" +
    "\x07\x03\x02\x02\x02\u0149\u014A\x07G\x02\x02\u014A\u014C\x07H\x02\x02" +
    "\u014B\u0149\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\t\x03\x02" +
    "\x02\x02\u014D\u014E\x05\f\x07\x02\u014E\u014F\x05\x10\t\x02\u014F\u0150" +
    "\x05 \x11\x02\u0150\u0152\x03\x02\x02\x02\u0151\u014D\x03\x02\x02\x02" +
    "\u0151\u0152\x03\x02\x02\x02\u0152\v\x03\x02\x02\x02\u0153\u0154\x07F" +
    "\x02\x02\u0154\u0155\x05\x0E\b\x02\u0155\u0156\x07D\x02\x02\u0156\u015B" +
    "\x03\x02\x02\x02\u0157\u0158\x07F\x02\x02\u0158\u0159\x07,\x02\x02\u0159" +
    "\u015B\x07D\x02\x02\u015A\u0153\x03\x02\x02\x02\u015A\u0157\x03\x02\x02" +
    "\x02\u015A\u015B\x03\x02\x02\x02\u015B\r\x03\x02\x02\x02\u015C\u015E\x05" +
    "\x1C\x0F\x02\u015D\u015C\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E" +
    "\x0F\x03\x02\x02\x02\u015F\u0160\x07E\x02\x02\u0160\u0161\x05\x12\n\x02" +
    "\u0161\u0162\x07D\x02\x02\u0162\u0164\x03\x02\x02\x02\u0163\u015F\x03" +
    "\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\x11\x03\x02\x02\x02\u0165" +
    "\u0167\x05\x14\v\x02\u0166\u0165\x03\x02\x02\x02\u0166\u0167\x03\x02\x02" +
    "\x02\u0167\x13\x03\x02\x02\x02\u0168\u016C\x05\x16\f\x02\u0169\u016B\x05" +
    "\x16\f\x02\u016A\u0169\x03\x02\x02\x02\u016B\u016E\x03\x02\x02\x02\u016C" +
    "\u016A\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\x15\x03\x02\x02" +
    "\x02\u016E\u016C\x03\x02\x02\x02\u016F\u0170\x05\x1C\x0F\x02\u0170\u0171" +
    "\x076\x02\x02\u0171\u0172\x05\x18\r\x02\u0172\x17\x03\x02\x02\x02\u0173" +
    "\u0174\x07k\x02\x02\u0174\u0175\x05\x1A\x0E\x02\u0175\x19\x03\x02\x02" +
    "\x02\u0176\u0177\x03\x02\x02\x02\u0177\x1B\x03\x02\x02\x02\u0178\u017D" +
    "\x05\x1E\x10\x02\u0179\u017A\x07\x18\x02\x02\u017A\u017C\x05\x1E\x10\x02" +
    "\u017B\u0179\x03\x02\x02\x02\u017C\u017F\x03\x02\x02\x02\u017D\u017B\x03" +
    "\x02\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E\x1D\x03\x02\x02\x02\u017F" +
    "\u017D\x03\x02\x02\x02\u0180\u0183\x07k\x02\x02\u0181\u0182\x07\x16\x02" +
    "\x02\u0182\u0184\x07\x17\x02\x02\u0183\u0181\x03\x02\x02\x02\u0183\u0184" +
    "\x03\x02\x02\x02\u0184\x1F\x03\x02\x02\x02\u0185\u0189\x05\"\x12\x02\u0186" +
    "\u0188\x05\"\x12\x02\u0187\u0186\x03\x02\x02\x02\u0188\u018B\x03\x02\x02" +
    "\x02\u0189\u0187\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A!\x03" +
    "\x02\x02\x02\u018B\u0189\x03\x02\x02\x02\u018C\u0191\x07k\x02\x02\u018D" +
    "\u0192\x05\xAAV\x02\u018E\u0192\x05\xA8U\x02\u018F\u0192\x05B\"\x02\u0190" +
    "\u0192\x05L\'\x02\u0191\u018D\x03\x02\x02\x02\u0191\u018E\x03\x02\x02" +
    "\x02\u0191\u018F\x03\x02\x02\x02\u0191\u0190\x03\x02\x02\x02\u0192#\x03" +
    "\x02\x02\x02\u0193\u0194\x07%\x02\x02\u0194\u0199\x07\x16\x02\x02\u0195" +
    "\u0196\x05&\x14\x02\u0196\u0197\x05(\x15\x02\u0197\u019A\x03\x02\x02\x02" +
    "\u0198\u019A\x05*\x16\x02\u0199\u0195\x03\x02\x02\x02\u0199\u0198\x03" +
    "\x02\x02\x02\u0199\u019A\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B" +
    "\u019C\x07\x17\x02\x02\u019C%\x03\x02\x02\x02\u019D\u019F\x07\f\x02\x02" +
    "\u019E\u01A0\x05\u010C\x87\x02\u019F\u019E\x03\x02\x02\x02\u019F\u01A0" +
    "\x03\x02\x02\x02\u01A0\'\x03\x02\x02\x02\u01A1\u01A2\x07\x18\x02\x02\u01A2" +
    "\u01A4\x07\f\x02\x02\u01A3\u01A1\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02" +
    "\x02\u01A4)\x03\x02\x02\x02\u01A5\u01B6\x05,\x17\x02\u01A6\u01B7\x052" +
    "\x1A\x02\u01A7\u01A9\x07\x18\x02\x02\u01A8\u01AA\x052\x1A\x02\u01A9\u01A8" +
    "\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02" +
    "\u01AB\u01AC\x05&\x14\x02\u01AC\u01B4\x054\x1B\x02\u01AD\u01B5\x05(\x15" +
    "\x02\u01AE\u01AF\x07d\x02\x02\u01AF\u01B0\x07\x18\x02\x02\u01B0\u01B2" +
    "\x05,\x17\x02\u01B1\u01B3\x052\x1A\x02\u01B2\u01B1\x03\x02\x02\x02\u01B2" +
    "\u01B3\x03\x02\x02\x02\u01B3\u01B5\x03\x02\x02\x02\u01B4\u01AD\x03\x02" +
    "\x02\x02\u01B4\u01AE\x03\x02\x02\x02\u01B5\u01B7\x03\x02\x02\x02\u01B6" +
    "\u01A6\x03\x02\x02\x02\u01B6\u01A7\x03\x02\x02\x02\u01B6\u01B7\x03\x02" +
    "\x02\x02\u01B7\u01C4\x03\x02\x02\x02\u01B8\u01B9";
ASN_3gppParser._serializedATNSegment1 = "\x05&\x14\x02\u01B9\u01C1\x054\x1B\x02\u01BA\u01C2\x05(\x15\x02\u01BB" +
    "\u01BC\x07d\x02\x02\u01BC\u01BD\x07\x18\x02\x02\u01BD\u01BF\x05,\x17\x02" +
    "\u01BE\u01C0\x052\x1A\x02\u01BF\u01BE\x03\x02\x02\x02\u01BF\u01C0\x03" +
    "\x02\x02\x02\u01C0\u01C2\x03\x02\x02\x02\u01C1\u01BA\x03\x02\x02\x02\u01C1" +
    "\u01BB\x03\x02\x02\x02\u01C2\u01C4\x03\x02\x02\x02\u01C3\u01A5\x03\x02" +
    "\x02\x02\u01C3\u01B8\x03\x02\x02\x02\u01C4+\x03\x02\x02\x02\u01C5\u01C6" +
    "\x05.\x18\x02\u01C6-\x03\x02\x02\x02\u01C7\u01CF\x050\x19\x02\u01C8\u01CA" +
    "\x07\x18\x02\x02\u01C9\u01CB\x052\x1A\x02\u01CA\u01C9\x03\x02\x02\x02" +
    "\u01CA\u01CB\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC\u01CE\x05" +
    "0\x19\x02\u01CD\u01C8\x03\x02\x02\x02\u01CE\u01D1\x03\x02\x02\x02\u01CF" +
    "\u01CD\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0/\x03\x02\x02" +
    "\x02\u01D1\u01CF\x03\x02\x02\x02\u01D2\u01D6\x05\xF4{\x02\u01D3\u01D7" +
    "\x07&\x02\x02\u01D4\u01D5\x07\'\x02\x02\u01D5\u01D7\x05\xD2j\x02\u01D6" +
    "\u01D3\x03\x02\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D6\u01D7\x03\x02" +
    "\x02\x02\u01D7\u01DC\x03\x02\x02\x02\u01D8\u01D9\x07(\x02\x02\u01D9\u01DA" +
    "\x07)\x02\x02\u01DA\u01DC\x05\xACW\x02\u01DB\u01D2\x03\x02\x02\x02\u01DB" +
    "\u01D8\x03\x02\x02\x02\u01DC1\x03\x02\x02\x02\u01DD\u01DE\x07\x03\x02" +
    "\x02\u01DE3\x03\x02\x02\x02\u01DF\u01E0\x07\x18\x02\x02\u01E0\u01E2\x05" +
    "6\x1C\x02\u01E1\u01DF\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2" +
    "5\x03\x02\x02\x02\u01E3\u01EB\x058\x1D\x02\u01E4\u01E6\x07\x18\x02\x02" +
    "\u01E5\u01E7\x052\x1A\x02\u01E6\u01E5\x03\x02\x02\x02\u01E6\u01E7\x03" +
    "\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8\u01EA\x058\x1D\x02\u01E9" +
    "\u01E4\x03\x02\x02\x02\u01EA\u01ED\x03\x02\x02\x02\u01EB\u01E9\x03\x02" +
    "\x02\x02\u01EB\u01EC\x03\x02\x02\x02\u01EC7\x03\x02\x02\x02\u01ED\u01EB" +
    "\x03\x02\x02\x02\u01EE\u01F1\x050\x19\x02\u01EF\u01F1\x05:\x1E\x02\u01F0" +
    "\u01EE\x03\x02\x02\x02\u01F0\u01EF\x03\x02\x02\x02\u01F19\x03\x02\x02" +
    "\x02\u01F2\u01F3\x07P\x02\x02\u01F3\u01F4\x05<\x1F\x02\u01F4\u01F6\x05" +
    ".\x18\x02\u01F5\u01F7\x052\x1A\x02\u01F6\u01F5\x03\x02\x02\x02\u01F6\u01F7" +
    "\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8\u01F9\x07Q\x02\x02" +
    "\u01F9;\x03\x02\x02\x02\u01FA\u01FB\x07e\x02\x02\u01FB\u01FD\x07R\x02" +
    "\x02\u01FC\u01FA\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02\u01FD=\x03" +
    "\x02\x02\x02\u01FE\u0206\x07%\x02\x02\u01FF\u0202\x07\x19\x02\x02\u0200" +
    "\u0203\x05\xBA^\x02\u0201\u0203\x05@!\x02\u0202\u0200\x03\x02\x02\x02" +
    "\u0202\u0201\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204\u0205\x07" +
    "\x1A\x02\x02\u0205\u0207\x03\x02\x02\x02\u0206\u01FF\x03\x02\x02\x02\u0206" +
    "\u0207\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208\u020B\x07)\x02" +
    "\x02\u0209\u020C\x05\xACW\x02\u020A\u020C\x05\xF4{\x02\u020B\u0209\x03" +
    "\x02\x02\x02\u020B\u020A\x03\x02\x02\x02\u020C?\x03\x02\x02\x02\u020D" +
    "\u020E\x075\x02\x02\u020E\u020F\x05\xBA^\x02\u020FA\x03\x02\x02\x02\u0210" +
    "\u0211\x05D#\x02\u0211\u0215\x07\x06\x02\x02\u0212\u0216\x05\xACW\x02" +
    "\u0213\u0216\x05\xD2j\x02\u0214\u0216\x05\x82B\x02\u0215\u0212\x03\x02" +
    "\x02\x02\u0215\u0213\x03\x02\x02\x02\u0215\u0214\x03\x02\x02\x02\u0216" +
    "\u021F\x03\x02\x02\x02\u0217\u0218\x05P)\x02\u0218\u021C\x07\x06\x02\x02" +
    "\u0219\u021D\x05v<\x02\u021A\u021D\x05N(\x02\u021B\u021D\x05|?\x02\u021C" +
    "\u0219\x03\x02\x02\x02\u021C\u021A\x03\x02\x02\x02\u021C\u021B\x03\x02" +
    "\x02\x02\u021D\u021F\x03\x02\x02\x02\u021E\u0210\x03\x02\x02\x02\u021E" +
    "\u0217\x03\x02\x02\x02\u021FC\x03\x02\x02\x02\u0220\u0221\x07\x16\x02" +
    "\x02\u0221\u0226\x05F$\x02\u0222\u0223\x07\x18\x02\x02\u0223\u0225\x05" +
    "F$\x02\u0224\u0222\x03\x02\x02\x02\u0225\u0228\x03\x02\x02\x02\u0226\u0224" +
    "\x03\x02\x02\x02\u0226\u0227\x03\x02\x02\x02\u0227\u0229\x03\x02\x02\x02" +
    "\u0228\u0226\x03\x02\x02\x02\u0229\u022A\x07\x17\x02\x02\u022AE\x03\x02" +
    "\x02\x02\u022B\u022C\x05H%\x02\u022C\u022D\x07R\x02\x02\u022D\u022F\x03" +
    "\x02\x02\x02\u022E\u022B\x03\x02\x02\x02\u022E\u022F\x03\x02\x02\x02\u022F" +
    "\u0230\x03\x02\x02\x02\u0230\u0231\x07k\x02\x02\u0231G\x03\x02\x02\x02" +
    "\u0232\u0235\x05J&\x02\u0233\u0235\x07k\x02\x02\u0234\u0232\x03\x02\x02" +
    "\x02\u0234\u0233\x03\x02\x02\x02\u0235I\x03\x02\x02\x02\u0236\u0239\x05" +
    "\xACW\x02\u0237\u0239\x05P)\x02\u0238\u0236\x03\x02\x02\x02\u0238\u0237" +
    "\x03\x02\x02\x02\u0239K\x03\x02\x02\x02\u023A\u023B\x07\x06\x02\x02\u023B" +
    "\u023C\x05N(\x02\u023CM\x03\x02\x02\x02\u023D\u0240\x05P)\x02\u023E\u0240" +
    "\x05V,\x02\u023F\u023D\x03\x02\x02\x02\u023F\u023E\x03\x02\x02\x02\u0240" +
    "O\x03\x02\x02\x02\u0241\u0242\x07k\x02\x02\u0242\u0244\x07\n\x02\x02\u0243" +
    "\u0241\x03\x02\x02\x02\u0243\u0244\x03\x02\x02\x02\u0244\u0245\x03\x02" +
    "\x02\x02\u0245\u0249\x07k\x02\x02\u0246\u0249\x07<\x02\x02\u0247\u0249" +
    "\x07=\x02\x02\u0248\u0243\x03\x02\x02\x02\u0248\u0246\x03\x02\x02\x02" +
    "\u0248\u0247\x03\x02\x02\x02\u0249Q\x03\x02\x02\x02\u024A\u024B\t\x03" +
    "\x02\x02\u024BS\x03\x02\x02\x02\u024C\u024D\x07k\x02\x02\u024D\u024E\x07" +
    "\n\x02\x02\u024E\u024F\x07k\x02\x02\u024FU\x03\x02\x02\x02\u0250\u0251" +
    "\x07>\x02\x02\u0251\u0252\x07\x16\x02\x02\u0252\u0257\x05f4\x02\u0253" +
    "\u0254\x07\x18\x02\x02\u0254\u0256\x05f4\x02\u0255\u0253\x03\x02\x02\x02" +
    "\u0256\u0259\x03\x02\x02\x02\u0257\u0255\x03\x02\x02\x02\u0257\u0258\x03" +
    "\x02\x02\x02\u0258\u025A\x03\x02\x02\x02\u0259\u0257\x03\x02\x02\x02\u025A" +
    "\u025C\x07\x17\x02\x02\u025B\u025D\x05X-\x02\u025C\u025B\x03\x02\x02\x02" +
    "\u025C\u025D\x03\x02\x02\x02\u025DW\x03\x02\x02\x02\u025E\u025F\x077\x02" +
    "\x02\u025F\u0260\x07@\x02\x02\u0260\u0261\x05Z.\x02\u0261Y\x03\x02\x02" +
    "\x02\u0262\u0264\x07\x16\x02\x02\u0263\u0265\x05\\/\x02\u0264\u0263\x03" +
    "\x02\x02\x02\u0265\u0266\x03\x02\x02\x02\u0266\u0264\x03\x02\x02\x02\u0266" +
    "\u0267\x03\x02\x02\x02\u0267\u0268\x03\x02\x02\x02\u0268\u0269\x07\x17" +
    "\x02\x02\u0269[\x03\x02\x02\x02\u026A\u026D\x05`1\x02\u026B\u026D\x05" +
    "^0\x02\u026C\u026A\x03\x02\x02\x02\u026C\u026B\x03\x02\x02\x02\u026D]" +
    "\x03\x02\x02\x02\u026E\u0270\x07A\x02\x02\u026F\u0271\x05\\/\x02\u0270" +
    "\u026F\x03\x02\x02\x02\u0271\u0272\x03\x02\x02\x02\u0272\u0270\x03\x02" +
    "\x02\x02\u0272\u0273\x03\x02\x02\x02\u0273\u0274\x03\x02\x02\x02\u0274" +
    "\u0275\x07B\x02\x02\u0275_\x03\x02\x02\x02\u0276\u0279\x05b2\x02\u0277" +
    "\u0279\x05d3\x02\u0278\u0276\x03\x02\x02\x02\u0278\u0277\x03\x02\x02\x02" +
    "\u0279a\x03\x02\x02\x02\u027A\u027B\t\x04\x02\x02\u027Bc\x03\x02\x02\x02" +
    "\u027C\u027D\x07\x0E\x02\x02\u027D\u027E\x07k\x02\x02\u027Ee\x03\x02\x02" +
    "\x02\u027F\u0280\x07\x0E\x02\x02\u0280\u02A2\x07k\x02\x02\u0281\u0283" +
    "\x05j6\x02\u0282\u0281\x03\x02\x02\x02\u0282\u0283\x03\x02\x02\x02\u0283" +
    "\u02A3\x03\x02\x02\x02\u0284\u028E\x05\xACW\x02\u0285\u0287\x05t;\x02" +
    "\u0286\u0285\x03\x02\x02\x02\u0286\u0287\x03\x02\x02\x02\u0287\u028F\x03" +
    "\x02\x02\x02\u0288\u028A\x07?\x02\x02\u0289\u0288\x03\x02\x02\x02\u0289" +
    "\u028A\x03\x02\x02\x02\u028A\u028C\x03\x02\x02\x02\u028B\u028D\x05n8\x02" +
    "\u028C\u028B\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028D\u028F\x03" +
    "\x02\x02\x02\u028E\u0286\x03\x02\x02\x02\u028E\u0289\x03\x02\x02\x02\u028F" +
    "\u02A3\x03\x02\x02\x02\u0290\u0297\x05\x80A\x02\u0291\u0298\x07&\x02\x02" +
    "\u0292\u0295\x07\'\x02\x02\u0293\u0296\x05\x82B\x02\u0294\u0296\x05\xD2" +
    "j\x02\u0295\u0293\x03\x02\x02\x02\u0295\u0294\x03\x02\x02\x02\u0296\u0298" +
    "\x03\x02\x02\x02\u0297\u0291\x03\x02\x02\x02\u0297\u0292\x03\x02\x02\x02" +
    "\u0297\u0298\x03\x02\x02\x02\u0298\u02A3\x03\x02\x02\x02\u0299\u02A0\x05" +
    "P)\x02\u029A\u02A1\x07&\x02\x02\u029B\u029E\x07\'\x02\x02\u029C\u029F" +
    "\x05|?\x02\u029D\u029F\x05v<\x02\u029E\u029C\x03\x02\x02\x02\u029E\u029D" +
    "\x03\x02\x02\x02\u029F\u02A1\x03\x02\x02\x02\u02A0\u029A\x03\x02\x02\x02" +
    "\u02A0\u029B\x03\x02\x02\x02\u02A0\u02A1\x03\x02\x02\x02\u02A1\u02A3\x03" +
    "\x02\x02\x02\u02A2\u0282\x03\x02\x02\x02\u02A2\u0284\x03\x02\x02\x02\u02A2" +
    "\u0290\x03\x02\x02\x02\u02A2\u0299\x03\x02\x02\x02\u02A3g\x03\x02\x02" +
    "\x02\u02A4\u02A5\x07\x0E\x02\x02\u02A5\u02A7\x07k\x02\x02\u02A6\u02A8" +
    "\x05j6\x02\u02A7\u02A6\x03\x02\x02\x02\u02A7\u02A8\x03\x02\x02\x02\u02A8" +
    "i\x03\x02\x02\x02\u02A9\u02AD\x07&\x02\x02\u02AA\u02AB\x07\'\x02\x02\u02AB" +
    "\u02AD\x05\xACW\x02\u02AC\u02A9\x03\x02\x02\x02\u02AC\u02AA\x03\x02\x02" +
    "\x02\u02ADk\x03\x02\x02\x02\u02AE\u02AF\x07\x0E\x02\x02\u02AF\u02B0\x07" +
    "k\x02\x02\u02B0\u02B2\x05\xACW\x02\u02B1\u02B3\x07?\x02\x02\u02B2\u02B1" +
    "\x03\x02\x02\x02\u02B2\u02B3\x03\x02\x02\x02\u02B3\u02B5\x03\x02\x02\x02" +
    "\u02B4\u02B6\x05n8\x02\u02B5\u02B4\x03\x02\x02\x02\u02B5\u02B6\x03\x02" +
    "\x02\x02\u02B6m\x03\x02\x02\x02\u02B7\u02BB\x07&\x02\x02\u02B8\u02B9\x07" +
    "\'\x02\x02\u02B9\u02BB\x05\xD2j\x02\u02BA\u02B7\x03\x02\x02\x02\u02BA" +
    "\u02B8\x03\x02\x02\x02\u02BBo\x03\x02\x02\x02\u02BC\u02BD\x07\x0E\x02" +
    "\x02\u02BD\u02BE\x07k\x02\x02\u02BE\u02C0\x05\x80A\x02\u02BF\u02C1\x05" +
    "n8\x02\u02C0\u02BF\x03\x02\x02\x02\u02C0\u02C1\x03\x02\x02\x02\u02C1q" +
    "\x03\x02\x02\x02\u02C2\u02C3\x07\x0E\x02\x02\u02C3\u02C4\x07k\x02\x02" +
    "\u02C4\u02C6\x05\xACW\x02\u02C5\u02C7\x05t;\x02\u02C6\u02C5\x03\x02\x02" +
    "\x02\u02C6\u02C7\x03\x02\x02\x02\u02C7s\x03\x02\x02\x02\u02C8\u02CC\x07" +
    "&\x02\x02\u02C9\u02CA\x07\'\x02\x02\u02CA\u02CC\x05\x82B\x02\u02CB\u02C8" +
    "\x03\x02\x02\x02\u02CB\u02C9\x03\x02\x02\x02\u02CCu\x03\x02\x02\x02\u02CD" +
    "\u02D0\x05z>\x02\u02CE\u02D0\x05x=\x02\u02CF\u02CD\x03\x02\x02\x02\u02CF" +
    "\u02CE\x03\x02\x02\x02\u02D0w\x03\x02\x02\x02\u02D1\u02D2\x05z>\x02\u02D2" +
    "\u02D3\x05\u0108\x85\x02\u02D3y\x03\x02\x02\x02\u02D4\u02D6\x07k\x02\x02" +
    "\u02D5\u02D7\x07\n\x02\x02\u02D6\u02D5\x03\x02\x02\x02\u02D6\u02D7\x03" +
    "\x02\x02\x02\u02D7{\x03\x02\x02\x02\u02D8\u02D9\x07\x16\x02\x02\u02D9" +
    "\u02DA\x05~@\x02\u02DA\u02DB\x07\x17\x02\x02\u02DB}\x03\x02\x02\x02\u02DC" +
    "\u02E3\x05\x86D\x02\u02DD\u02DE\x07\x18\x02\x02\u02DE\u02E1\x07\f\x02" +
    "\x02\u02DF\u02E0\x07\x18\x02\x02\u02E0\u02E2\x05\x88E\x02\u02E1\u02DF" +
    "\x03\x02\x02\x02\u02E1\u02E2\x03\x02\x02\x02\u02E2\u02E4\x03\x02\x02\x02" +
    "\u02E3\u02DD\x03\x02\x02\x02\u02E3\u02E4\x03\x02\x02\x02\u02E4\u02EB\x03" +
    "\x02\x02\x02\u02E5\u02E8\x07\f\x02\x02\u02E6\u02E7\x07\x18\x02\x02\u02E7" +
    "\u02E9\x05\x88E\x02\u02E8\u02E6\x03\x02\x02\x02\u02E8\u02E9\x03\x02\x02" +
    "\x02\u02E9\u02EB\x03\x02\x02\x02\u02EA\u02DC\x03\x02\x02\x02\u02EA\u02E5" +
    "\x03\x02\x02\x02\u02EB\x7F\x03\x02\x02\x02\u02EC\u02ED\x07\x0E\x02\x02" +
    "\u02ED\u02EE\x07k\x02\x02\u02EE\u02F4\x03\x02\x02\x02\u02EF\u02F0\x07" +
    "\x0E\x02\x02\u02F0\u02F1\x07k\x02\x02\u02F1\u02F3\x07\n\x02\x02\u02F2" +
    "\u02EF\x03\x02\x02\x02\u02F3\u02F6\x03\x02\x02\x02\u02F4\u02F2\x03\x02" +
    "\x02\x02\u02F4\u02F5\x03\x02\x02\x02\u02F5\x81\x03\x02\x02\x02\u02F6\u02F4" +
    "\x03\x02\x02\x02\u02F7\u02F8\x07\x16\x02\x02\u02F8\u02F9\x05\x84C\x02" +
    "\u02F9\u02FA\x07\x17\x02\x02\u02FA\x83\x03\x02\x02\x02\u02FB\u0302\x05" +
    "\x86D\x02\u02FC\u02FD\x07\x18\x02\x02\u02FD\u0300\x07\f\x02\x02\u02FE" +
    "\u02FF\x07\x18\x02\x02\u02FF\u0301\x05\x88E\x02\u0300\u02FE\x03\x02\x02" +
    "\x02\u0300\u0301\x03\x02\x02\x02\u0301\u0303\x03\x02\x02\x02\u0302\u02FC" +
    "\x03\x02\x02\x02\u0302\u0303\x03\x02\x02\x02\u0303\x85\x03\x02\x02\x02" +
    "\u0304\u0305\x05\x8AF\x02\u0305\x87\x03\x02\x02\x02\u0306\u0307\x05\x8A" +
    "F\x02\u0307\x89\x03\x02\x02\x02\u0308\u030C\x05\x8CG\x02\u0309\u030A\x07" +
    ",\x02\x02\u030A\u030C\x05\x8EH\x02\u030B\u0308\x03\x02\x02\x02\u030B\u0309" +
    "\x03\x02\x02\x02\u030C\x8B\x03\x02\x02\x02\u030D\u0313\x05\x90I\x02\u030E" +
    "\u030F\x05\x92J\x02\u030F\u0310\x05\x90I\x02\u0310\u0312\x03\x02\x02\x02" +
    "\u0311\u030E\x03\x02\x02\x02\u0312\u0315\x03\x02\x02\x02\u0313\u0311\x03" +
    "\x02\x02\x02\u0313\u0314\x03\x02\x02\x02\u0314\x8D\x03\x02\x02\x02\u0315" +
    "\u0313\x03\x02\x02\x02\u0316\u0317\x07-\x02\x02\u0317\u0318\x05\x96L\x02" +
    "\u0318\x8F\x03\x02\x02\x02\u0319\u031F\x05\x9AN\x02\u031A\u031B\x05\x94" +
    "K\x02\u031B\u031C\x05\x9AN\x02\u031C\u031E\x03\x02\x02\x02\u031D\u031A" +
    "\x03\x02\x02\x02\u031E\u0321\x03\x02\x02\x02\u031F\u031D\x03\x02\x02\x02" +
    "\u031F\u0320\x03\x02\x02\x02\u0320\x91\x03\x02\x02\x02\u0321\u031F\x03" +
    "\x02\x02\x02\u0322\u0323\t\x05\x02\x02\u0323\x93\x03\x02\x02\x02\u0324" +
    "\u0325\t\x06\x02\x02\u0325\x95\x03\x02\x02\x02\u0326\u0327\x05\x9CO\x02" +
    "\u0327\x97\x03\x02\x02\x02\u0328\u032B\x05v<\x02\u0329\u032B\x05z>\x02" +
    "\u032A\u0328\x03\x02\x02\x02\u032A\u0329\x03\x02\x02\x02\u032B\x99\x03" +
    "\x02\x02\x02\u032C\u032E\x05\x96L\x02\u032D\u032F\x05\x8EH\x02\u032E\u032D" +
    "\x03\x02\x02\x02\u032E\u032F\x03\x02\x02\x02\u032F\x9B\x03\x02\x02\x02" +
    "\u0330\u0333\x05\xD2j\x02\u0331\u0333\x073\x02\x02\u0332\u0330\x03\x02" +
    "\x02\x02\u0332\u0331\x03\x02\x02\x02\u0333\u0335\x03\x02\x02\x02\u0334" +
    "\u0336\x07\x0F\x02\x02\u0335\u0334\x03\x02\x02\x02\u0335\u0336\x03\x02" +
    "\x02\x02\u0336\u0337\x03\x02\x02\x02\u0337\u0339\x07\v\x02\x02\u0338\u033A" +
    "\x07\x0F\x02\x02\u0339\u0338\x03\x02\x02\x02\u0339\u033A\x03\x02\x02\x02" +
    "\u033A\u033D\x03\x02\x02\x02\u033B\u033E\x05\xD2j\x02\u033C\u033E\x07" +
    "4\x02\x02\u033D\u033B\x03\x02\x02\x02\u033D\u033C\x03\x02\x02\x02\u033E" +
    "\u0344\x03\x02\x02\x02\u033F\u0344\x05@!\x02\u0340\u0341\x07;\x02\x02" +
    "\u0341\u0344\x05\xD2j\x02\u0342\u0344\x05\xD2j\x02\u0343\u0332\x03\x02" +
    "\x02\x02\u0343\u033F\x03\x02\x02\x02\u0343\u0340\x03\x02\x02\x02\u0343" +
    "\u0342\x03\x02\x02\x02\u0344\x9D\x03\x02\x02\x02\u0345\u0346\x07\x0E\x02" +
    "\x02\u0346\u0347\x07k\x02\x02\u0347\u0349\x05\x80A\x02\u0348\u034A\x05" +
    "t;\x02\u0349\u0348\x03\x02\x02\x02\u0349\u034A\x03\x02\x02\x02\u034A\x9F" +
    "\x03\x02\x02\x02\u034B\u034C\x07\x0E\x02\x02\u034C\u034D\x07k\x02\x02" +
    "\u034D\u034F\x05P)\x02\u034E\u0350\x05\xA2R\x02\u034F\u034E\x03\x02\x02" +
    "\x02\u034F\u0350\x03\x02\x02\x02\u0350\xA1\x03\x02\x02\x02\u0351\u0355" +
    "\x07&\x02\x02\u0352\u0353\x07\'\x02\x02\u0353\u0355\x05v<\x02\u0354\u0351" +
    "\x03\x02\x02\x02\u0354\u0352\x03\x02\x02\x02\u0355\xA3\x03\x02\x02\x02" +
    "\u0356\u0357\x07\x0E\x02\x02\u0357\u0358\x07k\x02\x02\u0358\u035A\x05" +
    "P)\x02\u0359\u035B\x05\xA6T\x02\u035A\u0359\x03\x02\x02\x02\u035A\u035B" +
    "\x03\x02\x02\x02\u035B\xA5\x03\x02\x02\x02\u035C\u0360\x07&\x02\x02\u035D" +
    "\u035E\x07\'\x02\x02\u035E\u0360\x05|?\x02\u035F\u035C\x03\x02\x02\x02" +
    "\u035F\u035D\x03\x02\x02\x02\u0360\xA7\x03\x02\x02\x02\u0361\u0362\x07" +
    "\x06\x02\x02\u0362\u0363\x05\xACW\x02\u0363\xA9\x03\x02\x02\x02\u0364" +
    "\u0365\x05\xACW\x02\u0365\u0366\x07\x06\x02\x02\u0366\u0367\x05\xD2j\x02" +
    "\u0367\xAB\x03\x02\x02\x02\u0368\u036B\x05\xAEX\x02\u0369\u036B\x05\xB6" +
    "\\\x02\u036A\u0368\x03\x02\x02\x02\u036A\u0369\x03\x02\x02\x02\u036B\u036F" +
    "\x03\x02\x02\x02\u036C\u036E\x05\xBA^\x02\u036D\u036C\x03\x02\x02\x02" +
    "\u036E\u0371\x03\x02\x02\x02\u036F\u036D\x03\x02\x02\x02\u036F\u0370\x03" +
    "\x02\x02\x02\u0370\xAD\x03\x02\x02\x02\u0371\u036F\x03\x02\x02\x02\u0372" +
    "\u0380\x05\u0120\x91\x02\u0373\u0380\x05\u0122\x92\x02\u0374\u0380\x05" +
    "\xE4s\x02\u0375\u0380\x05\xF6|\x02\u0376\u0380\x05\u0112\x8A\x02\u0377" +
    "\u0380\x05$\x13\x02\u0378\u0380\x05> \x02\u0379\u0380\x05\xB2Z\x02\u037A" +
    "\u0380\x05\xB4[\x02\u037B\u0380\x05\u0116\x8C\x02\u037C\u0380\x05\xB0" +
    "Y\x02\u037D\u0380\x07\x07\x02\x02\u037E\u0380\x07$\x02\x02\u037F\u0372" +
    "\x03\x02\x02\x02\u037F\u0373\x03\x02\x02\x02\u037F\u0374\x03\x02\x02\x02" +
    "\u037F\u0375\x03\x02\x02\x02\u037F\u0376\x03\x02\x02\x02\u037F\u0377\x03" +
    "\x02\x02\x02\u037F\u0378\x03\x02\x02\x02\u037F\u0379\x03\x02\x02\x02\u037F" +
    "\u037A\x03\x02\x02\x02\u037F\u037B\x03\x02\x02\x02\u037F\u037C\x03\x02" +
    "\x02\x02\u037F\u037D\x03\x02\x02\x02\u037F\u037E\x03\x02\x02\x02\u0380" +
    "\xAF\x03\x02\x02\x02\u0381\u0382\x05P)\x02\u0382\u0383\x07\n\x02\x02\u0383" +
    "\u0384\x05\x80A\x02\u0384\xB1\x03\x02\x02\x02\u0385\u0386\x07*\x02\x02" +
    "\u0386\u038B\x07\x16\x02\x02\u0387\u0388\x05&\x14\x02\u0388\u0389\x05" +
    "(\x15\x02\u0389\u038C\x03\x02\x02\x02\u038A\u038C\x05*\x16\x02\u038B\u0387" +
    "\x03\x02\x02\x02\u038B\u038A\x03\x02\x02\x02\u038B\u038C\x03\x02\x02\x02" +
    "\u038C\u038D\x03\x02\x02\x02\u038D\u038E\x07\x17\x02\x02\u038E\xB3\x03" +
    "\x02\x02\x02\u038F\u0392\x07*\x02\x02\u0390\u0393\x05\xBA^\x02\u0391\u0393" +
    "\x05@!\x02\u0392\u0390\x03\x02\x02\x02\u0392\u0391\x03\x02\x02\x02\u0392" +
    "\u0393\x03\x02\x02\x02\u0393\u0394\x03\x02\x02\x02\u0394\u0397\x07)\x02" +
    "\x02\u0395\u0398\x05\xACW\x02\u0396\u0398\x05\xF4{\x02\u0397\u0395\x03" +
    "\x02\x02\x02\u0397\u0396\x03\x02\x02\x02\u0398\xB5\x03\x02\x02\x02\u0399" +
    "\u039A\x05\xB8]\x02\u039A\xB7\x03\x02\x02\x02\u039B\u039E\x07k\x02\x02" +
    "\u039C\u039D\x07\n\x02\x02\u039D\u039F\x07k\x02\x02\u039E\u039C\x03\x02" +
    "\x02\x02\u039E\u039F\x03\x02\x02\x02\u039F\u03A1\x03\x02\x02\x02\u03A0" +
    "\u03A2\x05\u0108\x85\x02\u03A1\u03A0\x03\x02\x02\x02\u03A1\u03A2\x03\x02" +
    "\x02\x02\u03A2\xB9\x03\x02\x02\x02\u03A3\u03A4\x07\x19\x02\x02\u03A4\u03A6" +
    "\x05\xBC_\x02\u03A5\u03A7\x05\u010C\x87\x02\u03A6\u03A5\x03\x02\x02\x02" +
    "\u03A6\u03A7\x03\x02\x02\x02\u03A7\u03A8\x03\x02\x02\x02\u03A8\u03A9\x07" +
    "\x1A\x02\x02\u03A9\xBB\x03\x02\x02\x02\u03AA\u03AD\x05\xC0a\x02\u03AB" +
    "\u03AD\x05\xD0i\x02\u03AC\u03AA\x03\x02\x02\x02\u03AC\u03AB\x03\x02\x02" +
    "\x02\u03AD\xBD\x03\x02\x02\x02\u03AE\u03AF\x07^\x02\x02\u03AF\u03B0\x07" +
    "_\x02\x02\u03B0\u03B1\x07\x16\x02\x02\u03B1\u03B6\x05\xC2b\x02\u03B2\u03B3" +
    "\x07\x18\x02\x02\u03B3\u03B5\x05\xC2b\x02\u03B4\u03B2\x03\x02\x02\x02" +
    "\u03B5\u03B8\x03\x02\x02\x02\u03B6\u03B4\x03\x02\x02\x02\u03B6\u03B7\x03" +
    "\x02\x02\x02\u03B7\u03B9\x03\x02\x02\x02\u03B8\u03B6\x03\x02\x02\x02\u03B9" +
    "\u03BA\x07\x17\x02\x02\u03BA\xBF\x03\x02\x02\x02\u03BB\u03BF\x05\xBE`" +
    "\x02\u03BC\u03BF\x05\xC4c\x02\u03BD\u03BF\x05\xC8e\x02\u03BE\u03BB\x03" +
    "\x02\x02\x02\u03BE\u03BC\x03\x02\x02\x02\u03BE\u03BD\x03\x02\x02\x02\u03BF" +
    "\xC1\x03\x02\x02\x02\u03C0\u03C6\x05J&\x02\u03C1\u03C2\x07R\x02\x02\u03C2" +
    "\u03C7\x05\xD2j\x02\u03C3\u03C7\x05\x82B\x02\u03C4\u03C7\x05v<\x02\u03C5" +
    "\u03C7\x05|?\x02\u03C6\u03C1\x03\x02\x02\x02\u03C6\u03C3\x03\x02\x02\x02" +
    "\u03C6\u03C4\x03\x02\x02\x02\u03C6\u03C5\x03\x02\x02\x02\u03C6\u03C7\x03" +
    "\x02\x02\x02\u03C7\xC3\x03\x02\x02\x02\u03C8\u03C9\x05\u0118\x8D\x02\u03C9" +
    "\xC5\x03\x02\x02\x02\u03CA\u03CB\x05|?\x02\u03CB\xC7\x03\x02\x02\x02\u03CC" +
    "\u03CD\x07\"\x02\x02\u03CD\u03DE\x05\xACW\x02\u03CE\u03CF\x07a\x02\x02" +
    "\u03CF\u03D0\x07_\x02\x02\u03D0\u03DE\x05\xD2j\x02\u03D1\u03D2\x07\"\x02" +
    "\x02\u03D2\u03D3\x05\xACW\x02\u03D3\u03D4\x07a\x02\x02\u03D4\u03D5\x07" +
    "_\x02\x02\u03D5\u03D6\x05\xD2j\x02\u03D6\u03DE\x03\x02\x02\x02\u03D7\u03D8" +
    "\x077\x02\x02\u03D8\u03D9\x07(\x02\x02\u03D9\u03DA\x07\x16\x02\x02\u03DA" +
    "\u03DB\x05\xCAf\x02\u03DB\u03DC\x07\x17\x02\x02\u03DC\u03DE\x03\x02\x02" +
    "\x02\u03DD\u03CC\x03\x02\x02\x02\u03DD\u03CE\x03\x02\x02\x02\u03DD\u03D1" +
    "\x03\x02\x02\x02\u03DD\u03D7\x03\x02\x02\x02\u03DE\xC9\x03\x02\x02\x02" +
    "\u03DF\u03E1\x05\xCCg\x02\u03E0\u03DF\x03\x02\x02\x02\u03E0\u03E1\x03" +
    "\x02\x02\x02\u03E1\u03E8\x03\x02\x02\x02\u03E2\u03E3\x07\x18\x02\x02\u03E3" +
    "\u03E6\x07\f\x02\x02\u03E4\u03E5\x07\x18\x02\x02\u03E5\u03E7\x05\xCCg" +
    "\x02\u03E6\u03E4\x03\x02\x02\x02\u03E6\u03E7\x03\x02\x02\x02\u03E7\u03E9" +
    "\x03\x02\x02\x02\u03E8\u03E2\x03\x02\x02\x02\u03E8\u03E9\x03\x02\x02\x02" +
    "\u03E9\u03F0\x03\x02\x02\x02\u03EA\u03ED\x07\f\x02\x02\u03EB\u03EC\x07" +
    "\x18\x02\x02\u03EC\u03EE\x05\xCCg\x02\u03ED\u03EB\x03\x02\x02\x02\u03ED" +
    "\u03EE\x03\x02\x02\x02\u03EE\u03F0\x03\x02\x02\x02\u03EF\u03E0\x03\x02" +
    "\x02\x02\u03EF\u03EA\x03\x02\x02\x02\u03F0\xCB\x03\x02\x02\x02\u03F1\u03F6" +
    "\x05\xCEh\x02\u03F2\u03F3\x07\x18\x02\x02\u03F3\u03F5\x05\xCEh\x02\u03F4" +
    "\u03F2\x03\x02\x02\x02\u03F5\u03F8\x03\x02\x02\x02\u03F6\u03F4\x03\x02" +
    "\x02\x02\u03F6\u03F7\x03\x02\x02\x02\u03F7\xCD\x03\x02\x02\x02\u03F8\u03F6" +
    "\x03\x02\x02\x02\u03F9\u03FA\x07k\x02\x02\u03FA\u03FB\t\x07\x02\x02\u03FB" +
    "\xCF\x03\x02\x02\x02\u03FC\u03FD\x05\x84C\x02\u03FD\xD1\x03\x02\x02\x02" +
    "\u03FE\u03FF\x05\xD4k\x02\u03FF\xD3\x03\x02\x02\x02\u0400\u0408\x05\xE0" +
    "q\x02\u0401\u0408\x05\xDCo\x02\u0402\u0408\x05\xDEp\x02\u0403\u0408\x05" +
    "\xD6l\x02\u0404\u0408\x05\u0128\x95\x02\u0405\u0408\x07j\x02\x02\u0406" +
    "\u0408\x07h\x02\x02\u0407\u0400\x03\x02\x02\x02\u0407\u0401\x03\x02\x02" +
    "\x02\u0407\u0402\x03\x02\x02\x02\u0407\u0403\x03\x02\x02\x02\u0407\u0404" +
    "\x03\x02\x02\x02\u0407\u0405\x03\x02\x02\x02\u0407\u0406\x03\x02\x02\x02" +
    "\u0408\xD5\x03\x02\x02\x02\u0409\u040A\x07\x16\x02\x02\u040A\u040B\x05" +
    "\xD8m\x02\u040B\u040C\x07\x17\x02\x02\u040C\xD7\x03\x02\x02\x02\u040D" +
    "\u0411\x05\xDAn\x02\u040E\u0410\x05\xDAn\x02\u040F\u040E\x03\x02\x02\x02" +
    "\u0410\u0413\x03\x02\x02\x02\u0411\u040F\x03\x02\x02\x02\u0411\u0412\x03" +
    "\x02\x02\x02\u0412\xD9\x03\x02\x02\x02\u0413\u0411\x03\x02\x02\x02\u0414" +
    "\u0420\x07e\x02\x02\u0415\u041C\x07k\x02\x02\u0416\u0419\x07\x19\x02\x02" +
    "\u0417\u041A\x07e\x02\x02\u0418\u041A\x05\u0102\x82\x02\u0419\u0417\x03" +
    "\x02\x02\x02\u0419\u0418\x03\x02\x02\x02\u041A\u041B\x03\x02\x02\x02\u041B" +
    "\u041D\x07\x1A\x02\x02\u041C\u0416\x03\x02\x02\x02\u041C\u041D\x03\x02" +
    "\x02\x02\u041D\u0420\x03\x02\x02\x02\u041E\u0420\x05\u0102\x82\x02\u041F" +
    "\u0414\x03\x02\x02\x02\u041F\u0415\x03\x02\x02\x02\u041F\u041E\x03\x02" +
    "\x02\x02\u0420\xDB\x03\x02\x02\x02\u0421\u0424\x05\xE2r\x02\u0422\u0424" +
    "\x07k\x02\x02\u0423\u0421\x03\x02\x02\x02\u0423\u0422\x03\x02\x02\x02" +
    "\u0424\xDD\x03\x02\x02\x02\u0425\u0426\x07k\x02\x02\u0426\u0427\x07R\x02" +
    "\x02\u0427\u0428\x05\xD2j\x02\u0428\xDF\x03\x02\x02\x02\u0429\u042A\x07" +
    "k\x02\x02\u042A\xE1\x03\x02\x02\x02\u042B\u042D\x07\x1B\x02\x02\u042C" +
    "\u042B\x03\x02\x02\x02\u042C\u042D\x03\x02\x02\x02\u042D\u042E\x03\x02" +
    "\x02\x02\u042E\u042F\x07e\x02\x02\u042F\xE3\x03\x02\x02\x02\u0430\u0431" +
    "\x07S\x02\x02\u0431\u0432\x07\x16\x02\x02\u0432\u0433\x05\xE6t\x02\u0433" +
    "\u0434\x07\x17\x02\x02\u0434\xE5\x03\x02\x02\x02\u0435\u043B\x05\xF0y" +
    "\x02\u0436\u0437\x07\x18\x02\x02\u0437\u0438\x05&\x14\x02\u0438\u0439" +
    "\x05\xE8u\x02\u0439\u043A\x05(\x15\x02\u043A\u043C\x03\x02\x02\x02\u043B" +
    "\u0436\x03\x02\x02\x02\u043B\u043C\x03\x02\x02\x02\u043C\xE7\x03\x02\x02" +
    "\x02\u043D\u043E\x07\x18\x02\x02\u043E\u0440\x05\xEAv\x02\u043F\u043D" +
    "\x03\x02\x02\x02\u043F\u0440\x03\x02\x02\x02\u0440\xE9\x03\x02\x02\x02" +
    "\u0441\u0446\x05\xECw\x02\u0442\u0443\x07\x18\x02\x02\u0443\u0445\x05" +
    "\xECw\x02\u0444\u0442\x03\x02\x02\x02\u0445\u0448\x03\x02\x02\x02\u0446" +
    "\u0444\x03\x02\x02\x02\u0446\u0447\x03\x02\x02\x02\u0447\xEB\x03\x02\x02" +
    "\x02\u0448\u0446\x03\x02\x02\x02\u0449\u044C\x05\xEEx\x02\u044A\u044C" +
    "\x05\xF4{\x02\u044B\u0449\x03\x02\x02\x02\u044B\u044A\x03\x02\x02\x02" +
    "\u044C\xED\x03\x02\x02\x02\u044D\u044E\x07P\x02\x02\u044E\u044F\x05<\x1F" +
    "\x02\u044F\u0450\x05\xF2z\x02\u0450\u0451\x07Q\x02\x02\u0451\xEF\x03\x02" +
    "\x02\x02\u0452\u0453\x05\xF2z\x02\u0453\xF1\x03\x02\x02\x02\u0454\u0459" +
    "\x05\xF4{\x02\u0455\u0456\x07\x18\x02\x02\u0456\u0458\x05\xF4{\x02\u0457" +
    "\u0455\x03\x02\x02\x02\u0458\u045B\x03\x02\x02\x02\u0459\u0457\x03\x02" +
    "\x02\x02\u0459\u045A\x03\x02\x02\x02\u045A\xF3\x03\x02\x02\x02\u045B\u0459" +
    "\x03\x02\x02\x02\u045C\u045D\x07k\x02\x02\u045D\u045E\x05\xACW\x02\u045E" +
    "\xF5\x03\x02\x02\x02\u045F\u0460\x07\x1C\x02\x02\u0460\u0461\x07\x16\x02" +
    "\x02\u0461\u0462\x05\xF8}\x02\u0462\u0463\x07\x17\x02\x02\u0463\xF7\x03" +
    "\x02\x02\x02\u0464\u046E\x05\xFA~\x02\u0465\u0466\x07\x18\x02\x02\u0466" +
    "\u0468\x07\f\x02\x02\u0467\u0469\x05\u010C\x87\x02\u0468\u0467\x03\x02" +
    "\x02\x02\u0468\u0469\x03\x02\x02\x02\u0469\u046C\x03\x02\x02\x02\u046A" +
    "\u046B\x07\x18\x02\x02\u046B\u046D\x05\u0110";
ASN_3gppParser._serializedATNSegment2 = "\x89\x02\u046C\u046A\x03\x02\x02\x02\u046C\u046D\x03\x02\x02\x02\u046D" +
    "\u046F\x03\x02\x02\x02\u046E\u0465\x03\x02\x02\x02\u046E\u046F\x03\x02" +
    "\x02\x02\u046F\xF9\x03\x02\x02\x02\u0470\u0471\x05\xFC\x7F\x02\u0471\xFB" +
    "\x03\x02\x02\x02\u0472\u0477\x05\xFE\x80\x02\u0473\u0474\x07\x18\x02\x02" +
    "\u0474\u0476\x05\xFE\x80\x02\u0475\u0473\x03\x02\x02\x02\u0476\u0479\x03" +
    "\x02\x02\x02\u0477\u0475\x03\x02\x02\x02\u0477\u0478\x03\x02\x02\x02\u0478" +
    "\xFD\x03\x02\x02\x02\u0479\u0477\x03\x02\x02\x02\u047A\u047E\x07k\x02" +
    "\x02\u047B\u047E\x05\u0100\x81\x02\u047C\u047E\x05\xD2j\x02\u047D\u047A" +
    "\x03\x02\x02\x02\u047D\u047B\x03\x02\x02\x02\u047D\u047C\x03\x02\x02\x02" +
    "\u047E\xFF\x03\x02\x02\x02\u047F\u0480\x07k\x02\x02\u0480\u0483\x07\x19" +
    "\x02\x02\u0481\u0484\x05\xE2r\x02\u0482\u0484\x05\u0102\x82\x02\u0483" +
    "\u0481\x03\x02\x02\x02\u0483\u0482\x03\x02\x02\x02\u0484\u0485\x03\x02" +
    "\x02\x02\u0485\u0486\x07\x1A\x02\x02\u0486\u0101\x03\x02\x02\x02\u0487" +
    "\u0488\x05\u0104\x83\x02\u0488\u0103\x03\x02\x02\x02\u0489\u048B\x05\u0106" +
    "\x84\x02\u048A\u048C\x05\u0108\x85\x02\u048B\u048A\x03\x02\x02\x02\u048B" +
    "\u048C\x03\x02\x02\x02\u048C\u0105\x03\x02\x02\x02\u048D\u0490\x07k\x02" +
    "\x02\u048E\u048F\x07\n\x02\x02\u048F\u0491\x07k\x02\x02\u0490\u048E\x03" +
    "\x02\x02\x02\u0490\u0491\x03\x02\x02\x02\u0491\u0107\x03\x02\x02\x02\u0492" +
    "\u0493\x07\x16\x02\x02\u0493\u0498\x05\u010A\x86\x02\u0494\u0495\x07\x18" +
    "\x02\x02\u0495\u0497\x05\u010A\x86\x02\u0496\u0494\x03\x02\x02\x02\u0497" +
    "\u049A\x03\x02\x02\x02\u0498\u0496\x03\x02\x02\x02\u0498\u0499\x03\x02" +
    "\x02\x02\u0499\u049B\x03\x02\x02\x02\u049A\u0498\x03\x02\x02\x02\u049B" +
    "\u049C\x07\x17\x02\x02\u049C\u0109\x03\x02\x02\x02\u049D\u04A0\x05\xAC" +
    "W\x02\u049E\u04A0\x05\xD2j\x02\u049F\u049D\x03\x02\x02\x02\u049F\u049E" +
    "\x03\x02\x02\x02\u04A0\u010B\x03\x02\x02\x02\u04A1\u04A2\x07+\x02\x02" +
    "\u04A2\u04A3\x05\u010E\x88\x02\u04A3\u010D\x03\x02\x02\x02\u04A4\u04AB" +
    "\x05\xE2r\x02\u04A5\u04AB\x05\u0102\x82\x02\u04A6\u04A7\x05\xACW\x02\u04A7" +
    "\u04A8\x07R\x02\x02\u04A8\u04A9\x05\xD2j\x02\u04A9\u04AB\x03\x02\x02\x02" +
    "\u04AA\u04A4\x03\x02\x02\x02\u04AA\u04A5\x03\x02\x02\x02\u04AA\u04A6\x03" +
    "\x02\x02\x02\u04AB\u010F\x03\x02\x02\x02\u04AC\u04AD\x05\xFC\x7F\x02\u04AD" +
    "\u0111\x03\x02\x02\x02\u04AE\u04B3\x07\x15\x02\x02\u04AF\u04B0\x07\x16" +
    "\x02\x02\u04B0\u04B1\x05\u0114\x8B\x02\u04B1\u04B2\x07\x17\x02\x02\u04B2" +
    "\u04B4\x03\x02\x02\x02\u04B3\u04AF\x03\x02\x02\x02\u04B3\u04B4\x03\x02" +
    "\x02\x02\u04B4\u0113\x03\x02\x02\x02\u04B5\u04BA\x05\u0100\x81\x02\u04B6" +
    "\u04B7\x07\x18\x02\x02\u04B7\u04B9\x05\u0100\x81\x02\u04B8\u04B6\x03\x02" +
    "\x02\x02\u04B9\u04BC\x03\x02\x02\x02\u04BA\u04B8\x03\x02\x02\x02\u04BA" +
    "\u04BB\x03\x02\x02\x02\u04BB\u0115\x03\x02\x02\x02\u04BC\u04BA\x03\x02" +
    "\x02\x02\u04BD\u04BE\x07Z\x02\x02\u04BE\u04BF\x07[\x02\x02\u04BF\u0117" +
    "\x03\x02\x02\x02\u04C0\u04C1\x07\x16\x02\x02\u04C1\u04C4\x07k\x02\x02" +
    "\u04C2\u04C3\x07\n\x02\x02\u04C3\u04C5\x07k\x02\x02\u04C4\u04C2\x03\x02" +
    "\x02\x02\u04C4\u04C5\x03\x02\x02\x02\u04C5\u04C6\x03\x02\x02\x02\u04C6" +
    "\u04D2\x07\x17\x02\x02\u04C7\u04C8\x07\x16\x02\x02\u04C8\u04CD\x05\u011A" +
    "\x8E\x02\u04C9\u04CA\x07\x18\x02\x02\u04CA\u04CC\x05\u011A\x8E\x02\u04CB" +
    "\u04C9\x03\x02\x02\x02\u04CC\u04CF\x03\x02\x02\x02\u04CD\u04CB\x03\x02" +
    "\x02\x02\u04CD\u04CE\x03\x02\x02\x02\u04CE\u04D0\x03\x02\x02\x02\u04CF" +
    "\u04CD\x03\x02\x02\x02\u04D0\u04D1\x07\x17\x02\x02\u04D1\u04D3\x03\x02" +
    "\x02\x02\u04D2\u04C7\x03\x02\x02\x02\u04D2\u04D3\x03\x02\x02\x02\u04D3" +
    "\u0119\x03\x02\x02\x02\u04D4\u04D8\x07\x04\x02\x02\u04D5\u04D6\x07`\x02" +
    "\x02\u04D6\u04D8\x05\u011C\x8F\x02\u04D7\u04D4\x03\x02\x02\x02\u04D7\u04D5" +
    "\x03\x02\x02\x02\u04D8\u04D9\x03\x02\x02\x02\u04D9\u04DA\x05\u011E\x90" +
    "\x02\u04DA\u011B\x03\x02\x02\x02\u04DB\u04DC\x07\n\x02\x02\u04DC\u04DE" +
    "\x05\u011C\x8F\x02\u04DD\u04DB\x03\x02\x02\x02\u04DD\u04DE\x03\x02\x02" +
    "\x02\u04DE\u011D\x03\x02\x02\x02\u04DF\u04E4\x07k\x02\x02\u04E0\u04E1" +
    "\x07\n\x02\x02\u04E1\u04E3\x07k\x02\x02\u04E2\u04E0\x03\x02\x02\x02\u04E3" +
    "\u04E6\x03\x02\x02\x02\u04E4\u04E2\x03\x02\x02\x02\u04E4\u04E5\x03\x02" +
    "\x02\x02\u04E5\u011F\x03\x02\x02\x02\u04E6\u04E4\x03\x02\x02\x02\u04E7" +
    "\u04E8\x07#\x02\x02\u04E8\u04E9\x07!\x02\x02\u04E9\u0121\x03\x02\x02\x02" +
    "\u04EA\u04EB\x07 \x02\x02\u04EB\u04EC\x07!\x02\x02\u04EC\u04F1\x03\x02" +
    "\x02\x02\u04ED\u04EE\x07\x16\x02\x02\u04EE\u04EF\x05\u0124\x93\x02\u04EF" +
    "\u04F0\x07\x17\x02\x02\u04F0\u04F2\x03\x02\x02\x02\u04F1\u04ED\x03\x02" +
    "\x02\x02\u04F1\u04F2\x03\x02\x02\x02\u04F2\u0123\x03\x02\x02\x02\u04F3" +
    "\u04F8\x05\u0126\x94\x02\u04F4\u04F5\x07\x18\x02\x02\u04F5\u04F7\x05\u0126" +
    "\x94\x02\u04F6\u04F4\x03\x02\x02\x02\u04F7\u04FA\x03\x02\x02\x02\u04F8" +
    "\u04F6\x03\x02\x02\x02\u04F8\u04F9\x03\x02\x02\x02\u04F9\u0125\x03\x02" +
    "\x02\x02\u04FA\u04F8\x03\x02\x02\x02\u04FB\u04FC\x07k\x02\x02\u04FC\u04FF" +
    "\x07\x19\x02\x02\u04FD\u0500\x07e\x02\x02\u04FE\u0500\x05\u0102\x82\x02" +
    "\u04FF\u04FD\x03\x02\x02\x02\u04FF\u04FE\x03\x02\x02\x02\u0500\u0501\x03" +
    "\x02\x02\x02\u0501\u0502\x07\x1A\x02\x02\u0502\u0127\x03\x02\x02\x02\u0503" +
    "\u0504\t\b\x02\x02\u0504\u0129\x03\x02\x02\x02\x98\u012D\u0137\u013B\u0147" +
    "\u014B\u0151\u015A\u015D\u0163\u0166\u016C\u017D\u0183\u0189\u0191\u0199" +
    "\u019F\u01A3\u01A9\u01B2\u01B4\u01B6\u01BF\u01C1\u01C3\u01CA\u01CF\u01D6" +
    "\u01DB\u01E1\u01E6\u01EB\u01F0\u01F6\u01FC\u0202\u0206\u020B\u0215\u021C" +
    "\u021E\u0226\u022E\u0234\u0238\u023F\u0243\u0248\u0257\u025C\u0266\u026C" +
    "\u0272\u0278\u0282\u0286\u0289\u028C\u028E\u0295\u0297\u029E\u02A0\u02A2" +
    "\u02A7\u02AC\u02B2\u02B5\u02BA\u02C0\u02C6\u02CB\u02CF\u02D6\u02E1\u02E3" +
    "\u02E8\u02EA\u02F4\u0300\u0302\u030B\u0313\u031F\u032A\u032E\u0332\u0335" +
    "\u0339\u033D\u0343\u0349\u034F\u0354\u035A\u035F\u036A\u036F\u037F\u038B" +
    "\u0392\u0397\u039E\u03A1\u03A6\u03AC\u03B6\u03BE\u03C6\u03DD\u03E0\u03E6" +
    "\u03E8\u03ED\u03EF\u03F6\u0407\u0411\u0419\u041C\u041F\u0423\u042C\u043B" +
    "\u043F\u0446\u044B\u0459\u0468\u046C\u046E\u0477\u047D\u0483\u048B\u0490" +
    "\u0498\u049F\u04AA\u04B3\u04BA\u04C4\u04CD\u04D2\u04D7\u04DD\u04E4\u04F1" +
    "\u04F8\u04FF";
ASN_3gppParser._serializedATN = Utils.join([
    ASN_3gppParser._serializedATNSegment0,
    ASN_3gppParser._serializedATNSegment1,
    ASN_3gppParser._serializedATNSegment2,
], "");
class ModulesContext extends ParserRuleContext_1.ParserRuleContext {
    moduleDefinition(i) {
        if (i === undefined) {
            return this.getRuleContexts(ModuleDefinitionContext);
        }
        else {
            return this.getRuleContext(i, ModuleDefinitionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_modules; }
    // @Override
    accept(visitor) {
        if (visitor.visitModules) {
            return visitor.visitModules(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ModulesContext = ModulesContext;
class ModuleDefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.IDENTIFIER);
        }
        else {
            return this.getToken(ASN_3gppParser.IDENTIFIER, i);
        }
    }
    DEFINITIONS_LITERAL() { return this.getToken(ASN_3gppParser.DEFINITIONS_LITERAL, 0); }
    tagDefault() {
        return this.getRuleContext(0, TagDefaultContext);
    }
    extensionDefault() {
        return this.getRuleContext(0, ExtensionDefaultContext);
    }
    ASSIGN_OP() { return this.getToken(ASN_3gppParser.ASSIGN_OP, 0); }
    BEGIN_LITERAL() { return this.getToken(ASN_3gppParser.BEGIN_LITERAL, 0); }
    moduleBody() {
        return this.getRuleContext(0, ModuleBodyContext);
    }
    END_LITERAL() { return this.getToken(ASN_3gppParser.END_LITERAL, 0); }
    L_BRACE() { return this.tryGetToken(ASN_3gppParser.L_BRACE, 0); }
    R_BRACE() { return this.tryGetToken(ASN_3gppParser.R_BRACE, 0); }
    L_PARAN(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.L_PARAN);
        }
        else {
            return this.getToken(ASN_3gppParser.L_PARAN, i);
        }
    }
    NUMBER(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.NUMBER);
        }
        else {
            return this.getToken(ASN_3gppParser.NUMBER, i);
        }
    }
    R_PARAN(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.R_PARAN);
        }
        else {
            return this.getToken(ASN_3gppParser.R_PARAN, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_moduleDefinition; }
    // @Override
    accept(visitor) {
        if (visitor.visitModuleDefinition) {
            return visitor.visitModuleDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ModuleDefinitionContext = ModuleDefinitionContext;
class TagDefaultContext extends ParserRuleContext_1.ParserRuleContext {
    TAGS_LITERAL() { return this.tryGetToken(ASN_3gppParser.TAGS_LITERAL, 0); }
    EXPLICIT_LITERAL() { return this.tryGetToken(ASN_3gppParser.EXPLICIT_LITERAL, 0); }
    IMPLICIT_LITERAL() { return this.tryGetToken(ASN_3gppParser.IMPLICIT_LITERAL, 0); }
    AUTOMATIC_LITERAL() { return this.tryGetToken(ASN_3gppParser.AUTOMATIC_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_tagDefault; }
    // @Override
    accept(visitor) {
        if (visitor.visitTagDefault) {
            return visitor.visitTagDefault(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TagDefaultContext = TagDefaultContext;
class ExtensionDefaultContext extends ParserRuleContext_1.ParserRuleContext {
    EXTENSIBILITY_LITERAL() { return this.tryGetToken(ASN_3gppParser.EXTENSIBILITY_LITERAL, 0); }
    IMPLIED_LITERAL() { return this.tryGetToken(ASN_3gppParser.IMPLIED_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_extensionDefault; }
    // @Override
    accept(visitor) {
        if (visitor.visitExtensionDefault) {
            return visitor.visitExtensionDefault(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExtensionDefaultContext = ExtensionDefaultContext;
class ModuleBodyContext extends ParserRuleContext_1.ParserRuleContext {
    exports() {
        return this.tryGetRuleContext(0, ExportsContext);
    }
    imports() {
        return this.tryGetRuleContext(0, ImportsContext);
    }
    assignmentList() {
        return this.tryGetRuleContext(0, AssignmentListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_moduleBody; }
    // @Override
    accept(visitor) {
        if (visitor.visitModuleBody) {
            return visitor.visitModuleBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ModuleBodyContext = ModuleBodyContext;
class ExportsContext extends ParserRuleContext_1.ParserRuleContext {
    EXPORTS_LITERAL() { return this.tryGetToken(ASN_3gppParser.EXPORTS_LITERAL, 0); }
    symbolsExported() {
        return this.tryGetRuleContext(0, SymbolsExportedContext);
    }
    SEMI_COLON() { return this.tryGetToken(ASN_3gppParser.SEMI_COLON, 0); }
    ALL_LITERAL() { return this.tryGetToken(ASN_3gppParser.ALL_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_exports; }
    // @Override
    accept(visitor) {
        if (visitor.visitExports) {
            return visitor.visitExports(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExportsContext = ExportsContext;
class SymbolsExportedContext extends ParserRuleContext_1.ParserRuleContext {
    symbolList() {
        return this.tryGetRuleContext(0, SymbolListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_symbolsExported; }
    // @Override
    accept(visitor) {
        if (visitor.visitSymbolsExported) {
            return visitor.visitSymbolsExported(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SymbolsExportedContext = SymbolsExportedContext;
class ImportsContext extends ParserRuleContext_1.ParserRuleContext {
    IMPORTS_LITERAL() { return this.tryGetToken(ASN_3gppParser.IMPORTS_LITERAL, 0); }
    symbolsImported() {
        return this.tryGetRuleContext(0, SymbolsImportedContext);
    }
    SEMI_COLON() { return this.tryGetToken(ASN_3gppParser.SEMI_COLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_imports; }
    // @Override
    accept(visitor) {
        if (visitor.visitImports) {
            return visitor.visitImports(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ImportsContext = ImportsContext;
class SymbolsImportedContext extends ParserRuleContext_1.ParserRuleContext {
    symbolsFromModuleList() {
        return this.tryGetRuleContext(0, SymbolsFromModuleListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_symbolsImported; }
    // @Override
    accept(visitor) {
        if (visitor.visitSymbolsImported) {
            return visitor.visitSymbolsImported(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SymbolsImportedContext = SymbolsImportedContext;
class SymbolsFromModuleListContext extends ParserRuleContext_1.ParserRuleContext {
    symbolsFromModule(i) {
        if (i === undefined) {
            return this.getRuleContexts(SymbolsFromModuleContext);
        }
        else {
            return this.getRuleContext(i, SymbolsFromModuleContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_symbolsFromModuleList; }
    // @Override
    accept(visitor) {
        if (visitor.visitSymbolsFromModuleList) {
            return visitor.visitSymbolsFromModuleList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SymbolsFromModuleListContext = SymbolsFromModuleListContext;
class SymbolsFromModuleContext extends ParserRuleContext_1.ParserRuleContext {
    symbolList() {
        return this.getRuleContext(0, SymbolListContext);
    }
    FROM_LITERAL() { return this.getToken(ASN_3gppParser.FROM_LITERAL, 0); }
    globalModuleReference() {
        return this.getRuleContext(0, GlobalModuleReferenceContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_symbolsFromModule; }
    // @Override
    accept(visitor) {
        if (visitor.visitSymbolsFromModule) {
            return visitor.visitSymbolsFromModule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SymbolsFromModuleContext = SymbolsFromModuleContext;
class GlobalModuleReferenceContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
    assignedIdentifier() {
        return this.getRuleContext(0, AssignedIdentifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_globalModuleReference; }
    // @Override
    accept(visitor) {
        if (visitor.visitGlobalModuleReference) {
            return visitor.visitGlobalModuleReference(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GlobalModuleReferenceContext = GlobalModuleReferenceContext;
class AssignedIdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_assignedIdentifier; }
    // @Override
    accept(visitor) {
        if (visitor.visitAssignedIdentifier) {
            return visitor.visitAssignedIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AssignedIdentifierContext = AssignedIdentifierContext;
class SymbolListContext extends ParserRuleContext_1.ParserRuleContext {
    symbol(i) {
        if (i === undefined) {
            return this.getRuleContexts(SymbolContext);
        }
        else {
            return this.getRuleContext(i, SymbolContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_symbolList; }
    // @Override
    accept(visitor) {
        if (visitor.visitSymbolList) {
            return visitor.visitSymbolList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SymbolListContext = SymbolListContext;
class SymbolContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
    L_BRACE() { return this.tryGetToken(ASN_3gppParser.L_BRACE, 0); }
    R_BRACE() { return this.tryGetToken(ASN_3gppParser.R_BRACE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_symbol; }
    // @Override
    accept(visitor) {
        if (visitor.visitSymbol) {
            return visitor.visitSymbol(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SymbolContext = SymbolContext;
class AssignmentListContext extends ParserRuleContext_1.ParserRuleContext {
    assignment(i) {
        if (i === undefined) {
            return this.getRuleContexts(AssignmentContext);
        }
        else {
            return this.getRuleContext(i, AssignmentContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_assignmentList; }
    // @Override
    accept(visitor) {
        if (visitor.visitAssignmentList) {
            return visitor.visitAssignmentList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AssignmentListContext = AssignmentListContext;
class AssignmentContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.tryGetToken(ASN_3gppParser.IDENTIFIER, 0); }
    valueAssignment() {
        return this.tryGetRuleContext(0, ValueAssignmentContext);
    }
    typeAssignment() {
        return this.tryGetRuleContext(0, TypeAssignmentContext);
    }
    parameterizedAssignment() {
        return this.tryGetRuleContext(0, ParameterizedAssignmentContext);
    }
    objectClassAssignment() {
        return this.tryGetRuleContext(0, ObjectClassAssignmentContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_assignment; }
    // @Override
    accept(visitor) {
        if (visitor.visitAssignment) {
            return visitor.visitAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AssignmentContext = AssignmentContext;
class SequenceTypeContext extends ParserRuleContext_1.ParserRuleContext {
    SEQUENCE_LITERAL() { return this.getToken(ASN_3gppParser.SEQUENCE_LITERAL, 0); }
    L_BRACE() { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
    R_BRACE() { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
    extensionAndException() {
        return this.tryGetRuleContext(0, ExtensionAndExceptionContext);
    }
    optionalExtensionMarker() {
        return this.tryGetRuleContext(0, OptionalExtensionMarkerContext);
    }
    componentTypeLists() {
        return this.tryGetRuleContext(0, ComponentTypeListsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_sequenceType; }
    // @Override
    accept(visitor) {
        if (visitor.visitSequenceType) {
            return visitor.visitSequenceType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SequenceTypeContext = SequenceTypeContext;
class ExtensionAndExceptionContext extends ParserRuleContext_1.ParserRuleContext {
    ELLIPSIS() { return this.getToken(ASN_3gppParser.ELLIPSIS, 0); }
    exceptionSpec() {
        return this.tryGetRuleContext(0, ExceptionSpecContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_extensionAndException; }
    // @Override
    accept(visitor) {
        if (visitor.visitExtensionAndException) {
            return visitor.visitExtensionAndException(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExtensionAndExceptionContext = ExtensionAndExceptionContext;
class OptionalExtensionMarkerContext extends ParserRuleContext_1.ParserRuleContext {
    COMMA() { return this.tryGetToken(ASN_3gppParser.COMMA, 0); }
    ELLIPSIS() { return this.tryGetToken(ASN_3gppParser.ELLIPSIS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_optionalExtensionMarker; }
    // @Override
    accept(visitor) {
        if (visitor.visitOptionalExtensionMarker) {
            return visitor.visitOptionalExtensionMarker(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OptionalExtensionMarkerContext = OptionalExtensionMarkerContext;
class ComponentTypeListsContext extends ParserRuleContext_1.ParserRuleContext {
    rootComponentTypeList(i) {
        if (i === undefined) {
            return this.getRuleContexts(RootComponentTypeListContext);
        }
        else {
            return this.getRuleContext(i, RootComponentTypeListContext);
        }
    }
    tag(i) {
        if (i === undefined) {
            return this.getRuleContexts(TagContext);
        }
        else {
            return this.getRuleContext(i, TagContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    }
    extensionAndException() {
        return this.tryGetRuleContext(0, ExtensionAndExceptionContext);
    }
    extensionAdditions() {
        return this.tryGetRuleContext(0, ExtensionAdditionsContext);
    }
    optionalExtensionMarker() {
        return this.tryGetRuleContext(0, OptionalExtensionMarkerContext);
    }
    EXTENSTIONENDMARKER() { return this.tryGetToken(ASN_3gppParser.EXTENSTIONENDMARKER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_componentTypeLists; }
    // @Override
    accept(visitor) {
        if (visitor.visitComponentTypeLists) {
            return visitor.visitComponentTypeLists(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ComponentTypeListsContext = ComponentTypeListsContext;
class RootComponentTypeListContext extends ParserRuleContext_1.ParserRuleContext {
    componentTypeList() {
        return this.getRuleContext(0, ComponentTypeListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_rootComponentTypeList; }
    // @Override
    accept(visitor) {
        if (visitor.visitRootComponentTypeList) {
            return visitor.visitRootComponentTypeList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RootComponentTypeListContext = RootComponentTypeListContext;
class ComponentTypeListContext extends ParserRuleContext_1.ParserRuleContext {
    componentType(i) {
        if (i === undefined) {
            return this.getRuleContexts(ComponentTypeContext);
        }
        else {
            return this.getRuleContext(i, ComponentTypeContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    }
    tag(i) {
        if (i === undefined) {
            return this.getRuleContexts(TagContext);
        }
        else {
            return this.getRuleContext(i, TagContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_componentTypeList; }
    // @Override
    accept(visitor) {
        if (visitor.visitComponentTypeList) {
            return visitor.visitComponentTypeList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ComponentTypeListContext = ComponentTypeListContext;
class ComponentTypeContext extends ParserRuleContext_1.ParserRuleContext {
    namedType() {
        return this.tryGetRuleContext(0, NamedTypeContext);
    }
    OPTIONAL_LITERAL() { return this.tryGetToken(ASN_3gppParser.OPTIONAL_LITERAL, 0); }
    DEFAULT_LITERAL() { return this.tryGetToken(ASN_3gppParser.DEFAULT_LITERAL, 0); }
    value() {
        return this.tryGetRuleContext(0, ValueContext);
    }
    COMPONENTS_LITERAL() { return this.tryGetToken(ASN_3gppParser.COMPONENTS_LITERAL, 0); }
    OF_LITERAL() { return this.tryGetToken(ASN_3gppParser.OF_LITERAL, 0); }
    asnType() {
        return this.tryGetRuleContext(0, AsnTypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_componentType; }
    // @Override
    accept(visitor) {
        if (visitor.visitComponentType) {
            return visitor.visitComponentType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ComponentTypeContext = ComponentTypeContext;
class TagContext extends ParserRuleContext_1.ParserRuleContext {
    TAG() { return this.getToken(ASN_3gppParser.TAG, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_tag; }
    // @Override
    accept(visitor) {
        if (visitor.visitTag) {
            return visitor.visitTag(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TagContext = TagContext;
class ExtensionAdditionsContext extends ParserRuleContext_1.ParserRuleContext {
    COMMA() { return this.tryGetToken(ASN_3gppParser.COMMA, 0); }
    extensionAdditionList() {
        return this.tryGetRuleContext(0, ExtensionAdditionListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_extensionAdditions; }
    // @Override
    accept(visitor) {
        if (visitor.visitExtensionAdditions) {
            return visitor.visitExtensionAdditions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExtensionAdditionsContext = ExtensionAdditionsContext;
class ExtensionAdditionListContext extends ParserRuleContext_1.ParserRuleContext {
    extensionAddition(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExtensionAdditionContext);
        }
        else {
            return this.getRuleContext(i, ExtensionAdditionContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    }
    tag(i) {
        if (i === undefined) {
            return this.getRuleContexts(TagContext);
        }
        else {
            return this.getRuleContext(i, TagContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_extensionAdditionList; }
    // @Override
    accept(visitor) {
        if (visitor.visitExtensionAdditionList) {
            return visitor.visitExtensionAdditionList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExtensionAdditionListContext = ExtensionAdditionListContext;
class ExtensionAdditionContext extends ParserRuleContext_1.ParserRuleContext {
    componentType() {
        return this.tryGetRuleContext(0, ComponentTypeContext);
    }
    extensionAdditionGroup() {
        return this.tryGetRuleContext(0, ExtensionAdditionGroupContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_extensionAddition; }
    // @Override
    accept(visitor) {
        if (visitor.visitExtensionAddition) {
            return visitor.visitExtensionAddition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExtensionAdditionContext = ExtensionAdditionContext;
class ExtensionAdditionGroupContext extends ParserRuleContext_1.ParserRuleContext {
    DOUBLE_L_BRACKET() { return this.getToken(ASN_3gppParser.DOUBLE_L_BRACKET, 0); }
    versionNumber() {
        return this.getRuleContext(0, VersionNumberContext);
    }
    componentTypeList() {
        return this.getRuleContext(0, ComponentTypeListContext);
    }
    DOUBLE_R_BRACKET() { return this.getToken(ASN_3gppParser.DOUBLE_R_BRACKET, 0); }
    tag() {
        return this.tryGetRuleContext(0, TagContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_extensionAdditionGroup; }
    // @Override
    accept(visitor) {
        if (visitor.visitExtensionAdditionGroup) {
            return visitor.visitExtensionAdditionGroup(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExtensionAdditionGroupContext = ExtensionAdditionGroupContext;
class VersionNumberContext extends ParserRuleContext_1.ParserRuleContext {
    NUMBER() { return this.tryGetToken(ASN_3gppParser.NUMBER, 0); }
    COLON() { return this.tryGetToken(ASN_3gppParser.COLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_versionNumber; }
    // @Override
    accept(visitor) {
        if (visitor.visitVersionNumber) {
            return visitor.visitVersionNumber(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VersionNumberContext = VersionNumberContext;
class SequenceOfTypeContext extends ParserRuleContext_1.ParserRuleContext {
    SEQUENCE_LITERAL() { return this.getToken(ASN_3gppParser.SEQUENCE_LITERAL, 0); }
    OF_LITERAL() { return this.getToken(ASN_3gppParser.OF_LITERAL, 0); }
    asnType() {
        return this.tryGetRuleContext(0, AsnTypeContext);
    }
    namedType() {
        return this.tryGetRuleContext(0, NamedTypeContext);
    }
    L_PARAN() { return this.tryGetToken(ASN_3gppParser.L_PARAN, 0); }
    R_PARAN() { return this.tryGetToken(ASN_3gppParser.R_PARAN, 0); }
    constraint() {
        return this.tryGetRuleContext(0, ConstraintContext);
    }
    sizeConstraint() {
        return this.tryGetRuleContext(0, SizeConstraintContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_sequenceOfType; }
    // @Override
    accept(visitor) {
        if (visitor.visitSequenceOfType) {
            return visitor.visitSequenceOfType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SequenceOfTypeContext = SequenceOfTypeContext;
class SizeConstraintContext extends ParserRuleContext_1.ParserRuleContext {
    SIZE_LITERAL() { return this.getToken(ASN_3gppParser.SIZE_LITERAL, 0); }
    constraint() {
        return this.getRuleContext(0, ConstraintContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_sizeConstraint; }
    // @Override
    accept(visitor) {
        if (visitor.visitSizeConstraint) {
            return visitor.visitSizeConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SizeConstraintContext = SizeConstraintContext;
class ParameterizedAssignmentContext extends ParserRuleContext_1.ParserRuleContext {
    parameterList() {
        return this.tryGetRuleContext(0, ParameterListContext);
    }
    ASSIGN_OP() { return this.tryGetToken(ASN_3gppParser.ASSIGN_OP, 0); }
    asnType() {
        return this.tryGetRuleContext(0, AsnTypeContext);
    }
    value() {
        return this.tryGetRuleContext(0, ValueContext);
    }
    valueSet() {
        return this.tryGetRuleContext(0, ValueSetContext);
    }
    definedObjectClass() {
        return this.tryGetRuleContext(0, DefinedObjectClassContext);
    }
    object() {
        return this.tryGetRuleContext(0, ObjectContext);
    }
    objectClass() {
        return this.tryGetRuleContext(0, ObjectClassContext);
    }
    objectSet() {
        return this.tryGetRuleContext(0, ObjectSetContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_parameterizedAssignment; }
    // @Override
    accept(visitor) {
        if (visitor.visitParameterizedAssignment) {
            return visitor.visitParameterizedAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParameterizedAssignmentContext = ParameterizedAssignmentContext;
class ParameterListContext extends ParserRuleContext_1.ParserRuleContext {
    L_BRACE() { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
    parameter(i) {
        if (i === undefined) {
            return this.getRuleContexts(ParameterContext);
        }
        else {
            return this.getRuleContext(i, ParameterContext);
        }
    }
    R_BRACE() { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_parameterList; }
    // @Override
    accept(visitor) {
        if (visitor.visitParameterList) {
            return visitor.visitParameterList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParameterListContext = ParameterListContext;
class ParameterContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
    paramGovernor() {
        return this.tryGetRuleContext(0, ParamGovernorContext);
    }
    COLON() { return this.tryGetToken(ASN_3gppParser.COLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_parameter; }
    // @Override
    accept(visitor) {
        if (visitor.visitParameter) {
            return visitor.visitParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParameterContext = ParameterContext;
class ParamGovernorContext extends ParserRuleContext_1.ParserRuleContext {
    governor() {
        return this.tryGetRuleContext(0, GovernorContext);
    }
    IDENTIFIER() { return this.tryGetToken(ASN_3gppParser.IDENTIFIER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_paramGovernor; }
    // @Override
    accept(visitor) {
        if (visitor.visitParamGovernor) {
            return visitor.visitParamGovernor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParamGovernorContext = ParamGovernorContext;
class GovernorContext extends ParserRuleContext_1.ParserRuleContext {
    asnType() {
        return this.tryGetRuleContext(0, AsnTypeContext);
    }
    definedObjectClass() {
        return this.tryGetRuleContext(0, DefinedObjectClassContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_governor; }
    // @Override
    accept(visitor) {
        if (visitor.visitGovernor) {
            return visitor.visitGovernor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GovernorContext = GovernorContext;
class ObjectClassAssignmentContext extends ParserRuleContext_1.ParserRuleContext {
    ASSIGN_OP() { return this.getToken(ASN_3gppParser.ASSIGN_OP, 0); }
    objectClass() {
        return this.getRuleContext(0, ObjectClassContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_objectClassAssignment; }
    // @Override
    accept(visitor) {
        if (visitor.visitObjectClassAssignment) {
            return visitor.visitObjectClassAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ObjectClassAssignmentContext = ObjectClassAssignmentContext;
class ObjectClassContext extends ParserRuleContext_1.ParserRuleContext {
    definedObjectClass() {
        return this.tryGetRuleContext(0, DefinedObjectClassContext);
    }
    objectClassDefn() {
        return this.tryGetRuleContext(0, ObjectClassDefnContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_objectClass; }
    // @Override
    accept(visitor) {
        if (visitor.visitObjectClass) {
            return visitor.visitObjectClass(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ObjectClassContext = ObjectClassContext;
class DefinedObjectClassContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.IDENTIFIER);
        }
        else {
            return this.getToken(ASN_3gppParser.IDENTIFIER, i);
        }
    }
    DOT() { return this.tryGetToken(ASN_3gppParser.DOT, 0); }
    TYPE_IDENTIFIER_LITERAL() { return this.tryGetToken(ASN_3gppParser.TYPE_IDENTIFIER_LITERAL, 0); }
    ABSTRACT_SYNTAX_LITERAL() { return this.tryGetToken(ASN_3gppParser.ABSTRACT_SYNTAX_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_definedObjectClass; }
    // @Override
    accept(visitor) {
        if (visitor.visitDefinedObjectClass) {
            return visitor.visitDefinedObjectClass(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DefinedObjectClassContext = DefinedObjectClassContext;
class UsefulObjectClassReferenceContext extends ParserRuleContext_1.ParserRuleContext {
    TYPE_IDENTIFIER_LITERAL() { return this.tryGetToken(ASN_3gppParser.TYPE_IDENTIFIER_LITERAL, 0); }
    ABSTRACT_SYNTAX_LITERAL() { return this.tryGetToken(ASN_3gppParser.ABSTRACT_SYNTAX_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_usefulObjectClassReference; }
    // @Override
    accept(visitor) {
        if (visitor.visitUsefulObjectClassReference) {
            return visitor.visitUsefulObjectClassReference(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UsefulObjectClassReferenceContext = UsefulObjectClassReferenceContext;
class ExternalObjectClassReferenceContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.IDENTIFIER);
        }
        else {
            return this.getToken(ASN_3gppParser.IDENTIFIER, i);
        }
    }
    DOT() { return this.getToken(ASN_3gppParser.DOT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_externalObjectClassReference; }
    // @Override
    accept(visitor) {
        if (visitor.visitExternalObjectClassReference) {
            return visitor.visitExternalObjectClassReference(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExternalObjectClassReferenceContext = ExternalObjectClassReferenceContext;
class ObjectClassDefnContext extends ParserRuleContext_1.ParserRuleContext {
    CLASS_LITERAL() { return this.getToken(ASN_3gppParser.CLASS_LITERAL, 0); }
    L_BRACE() { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
    fieldSpec(i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldSpecContext);
        }
        else {
            return this.getRuleContext(i, FieldSpecContext);
        }
    }
    R_BRACE() { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    }
    withSyntaxSpec() {
        return this.tryGetRuleContext(0, WithSyntaxSpecContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_objectClassDefn; }
    // @Override
    accept(visitor) {
        if (visitor.visitObjectClassDefn) {
            return visitor.visitObjectClassDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ObjectClassDefnContext = ObjectClassDefnContext;
class WithSyntaxSpecContext extends ParserRuleContext_1.ParserRuleContext {
    WITH_LITERAL() { return this.getToken(ASN_3gppParser.WITH_LITERAL, 0); }
    SYNTAX_LITERAL() { return this.getToken(ASN_3gppParser.SYNTAX_LITERAL, 0); }
    syntaxList() {
        return this.getRuleContext(0, SyntaxListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_withSyntaxSpec; }
    // @Override
    accept(visitor) {
        if (visitor.visitWithSyntaxSpec) {
            return visitor.visitWithSyntaxSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.WithSyntaxSpecContext = WithSyntaxSpecContext;
class SyntaxListContext extends ParserRuleContext_1.ParserRuleContext {
    L_BRACE() { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
    R_BRACE() { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
    tokenOrGroupSpec(i) {
        if (i === undefined) {
            return this.getRuleContexts(TokenOrGroupSpecContext);
        }
        else {
            return this.getRuleContext(i, TokenOrGroupSpecContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_syntaxList; }
    // @Override
    accept(visitor) {
        if (visitor.visitSyntaxList) {
            return visitor.visitSyntaxList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SyntaxListContext = SyntaxListContext;
class TokenOrGroupSpecContext extends ParserRuleContext_1.ParserRuleContext {
    requiredToken() {
        return this.tryGetRuleContext(0, RequiredTokenContext);
    }
    optionalGroup() {
        return this.tryGetRuleContext(0, OptionalGroupContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_tokenOrGroupSpec; }
    // @Override
    accept(visitor) {
        if (visitor.visitTokenOrGroupSpec) {
            return visitor.visitTokenOrGroupSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TokenOrGroupSpecContext = TokenOrGroupSpecContext;
class OptionalGroupContext extends ParserRuleContext_1.ParserRuleContext {
    L_BRACKET() { return this.getToken(ASN_3gppParser.L_BRACKET, 0); }
    R_BRACKET() { return this.getToken(ASN_3gppParser.R_BRACKET, 0); }
    tokenOrGroupSpec(i) {
        if (i === undefined) {
            return this.getRuleContexts(TokenOrGroupSpecContext);
        }
        else {
            return this.getRuleContext(i, TokenOrGroupSpecContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_optionalGroup; }
    // @Override
    accept(visitor) {
        if (visitor.visitOptionalGroup) {
            return visitor.visitOptionalGroup(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OptionalGroupContext = OptionalGroupContext;
class RequiredTokenContext extends ParserRuleContext_1.ParserRuleContext {
    literal() {
        return this.tryGetRuleContext(0, LiteralContext);
    }
    primitiveFieldName() {
        return this.tryGetRuleContext(0, PrimitiveFieldNameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_requiredToken; }
    // @Override
    accept(visitor) {
        if (visitor.visitRequiredToken) {
            return visitor.visitRequiredToken(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RequiredTokenContext = RequiredTokenContext;
class LiteralContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.tryGetToken(ASN_3gppParser.IDENTIFIER, 0); }
    COMMA() { return this.tryGetToken(ASN_3gppParser.COMMA, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_literal; }
    // @Override
    accept(visitor) {
        if (visitor.visitLiteral) {
            return visitor.visitLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LiteralContext = LiteralContext;
class PrimitiveFieldNameContext extends ParserRuleContext_1.ParserRuleContext {
    AMPERSAND() { return this.getToken(ASN_3gppParser.AMPERSAND, 0); }
    IDENTIFIER() { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_primitiveFieldName; }
    // @Override
    accept(visitor) {
        if (visitor.visitPrimitiveFieldName) {
            return visitor.visitPrimitiveFieldName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PrimitiveFieldNameContext = PrimitiveFieldNameContext;
class FieldSpecContext extends ParserRuleContext_1.ParserRuleContext {
    AMPERSAND() { return this.getToken(ASN_3gppParser.AMPERSAND, 0); }
    IDENTIFIER() { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
    asnType() {
        return this.tryGetRuleContext(0, AsnTypeContext);
    }
    fieldName() {
        return this.tryGetRuleContext(0, FieldNameContext);
    }
    definedObjectClass() {
        return this.tryGetRuleContext(0, DefinedObjectClassContext);
    }
    typeOptionalitySpec() {
        return this.tryGetRuleContext(0, TypeOptionalitySpecContext);
    }
    OPTIONAL_LITERAL() { return this.tryGetToken(ASN_3gppParser.OPTIONAL_LITERAL, 0); }
    valueSetOptionalitySpec() {
        return this.tryGetRuleContext(0, ValueSetOptionalitySpecContext);
    }
    UNIQUE_LITERAL() { return this.tryGetToken(ASN_3gppParser.UNIQUE_LITERAL, 0); }
    valueOptionalitySpec() {
        return this.tryGetRuleContext(0, ValueOptionalitySpecContext);
    }
    DEFAULT_LITERAL() { return this.tryGetToken(ASN_3gppParser.DEFAULT_LITERAL, 0); }
    valueSet() {
        return this.tryGetRuleContext(0, ValueSetContext);
    }
    value() {
        return this.tryGetRuleContext(0, ValueContext);
    }
    objectSet() {
        return this.tryGetRuleContext(0, ObjectSetContext);
    }
    object() {
        return this.tryGetRuleContext(0, ObjectContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_fieldSpec; }
    // @Override
    accept(visitor) {
        if (visitor.visitFieldSpec) {
            return visitor.visitFieldSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FieldSpecContext = FieldSpecContext;
class TypeFieldSpecContext extends ParserRuleContext_1.ParserRuleContext {
    AMPERSAND() { return this.getToken(ASN_3gppParser.AMPERSAND, 0); }
    IDENTIFIER() { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
    typeOptionalitySpec() {
        return this.tryGetRuleContext(0, TypeOptionalitySpecContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_typeFieldSpec; }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeFieldSpec) {
            return visitor.visitTypeFieldSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeFieldSpecContext = TypeFieldSpecContext;
class TypeOptionalitySpecContext extends ParserRuleContext_1.ParserRuleContext {
    OPTIONAL_LITERAL() { return this.tryGetToken(ASN_3gppParser.OPTIONAL_LITERAL, 0); }
    DEFAULT_LITERAL() { return this.tryGetToken(ASN_3gppParser.DEFAULT_LITERAL, 0); }
    asnType() {
        return this.tryGetRuleContext(0, AsnTypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_typeOptionalitySpec; }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeOptionalitySpec) {
            return visitor.visitTypeOptionalitySpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeOptionalitySpecContext = TypeOptionalitySpecContext;
class FixedTypeValueFieldSpecContext extends ParserRuleContext_1.ParserRuleContext {
    AMPERSAND() { return this.getToken(ASN_3gppParser.AMPERSAND, 0); }
    IDENTIFIER() { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
    asnType() {
        return this.getRuleContext(0, AsnTypeContext);
    }
    UNIQUE_LITERAL() { return this.tryGetToken(ASN_3gppParser.UNIQUE_LITERAL, 0); }
    valueOptionalitySpec() {
        return this.tryGetRuleContext(0, ValueOptionalitySpecContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_fixedTypeValueFieldSpec; }
    // @Override
    accept(visitor) {
        if (visitor.visitFixedTypeValueFieldSpec) {
            return visitor.visitFixedTypeValueFieldSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FixedTypeValueFieldSpecContext = FixedTypeValueFieldSpecContext;
class ValueOptionalitySpecContext extends ParserRuleContext_1.ParserRuleContext {
    OPTIONAL_LITERAL() { return this.tryGetToken(ASN_3gppParser.OPTIONAL_LITERAL, 0); }
    DEFAULT_LITERAL() { return this.tryGetToken(ASN_3gppParser.DEFAULT_LITERAL, 0); }
    value() {
        return this.tryGetRuleContext(0, ValueContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_valueOptionalitySpec; }
    // @Override
    accept(visitor) {
        if (visitor.visitValueOptionalitySpec) {
            return visitor.visitValueOptionalitySpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ValueOptionalitySpecContext = ValueOptionalitySpecContext;
class VariableTypeValueFieldSpecContext extends ParserRuleContext_1.ParserRuleContext {
    AMPERSAND() { return this.getToken(ASN_3gppParser.AMPERSAND, 0); }
    IDENTIFIER() { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
    fieldName() {
        return this.getRuleContext(0, FieldNameContext);
    }
    valueOptionalitySpec() {
        return this.tryGetRuleContext(0, ValueOptionalitySpecContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_variableTypeValueFieldSpec; }
    // @Override
    accept(visitor) {
        if (visitor.visitVariableTypeValueFieldSpec) {
            return visitor.visitVariableTypeValueFieldSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VariableTypeValueFieldSpecContext = VariableTypeValueFieldSpecContext;
class FixedTypeValueSetFieldSpecContext extends ParserRuleContext_1.ParserRuleContext {
    AMPERSAND() { return this.getToken(ASN_3gppParser.AMPERSAND, 0); }
    IDENTIFIER() { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
    asnType() {
        return this.getRuleContext(0, AsnTypeContext);
    }
    valueSetOptionalitySpec() {
        return this.tryGetRuleContext(0, ValueSetOptionalitySpecContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_fixedTypeValueSetFieldSpec; }
    // @Override
    accept(visitor) {
        if (visitor.visitFixedTypeValueSetFieldSpec) {
            return visitor.visitFixedTypeValueSetFieldSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FixedTypeValueSetFieldSpecContext = FixedTypeValueSetFieldSpecContext;
class ValueSetOptionalitySpecContext extends ParserRuleContext_1.ParserRuleContext {
    OPTIONAL_LITERAL() { return this.tryGetToken(ASN_3gppParser.OPTIONAL_LITERAL, 0); }
    DEFAULT_LITERAL() { return this.tryGetToken(ASN_3gppParser.DEFAULT_LITERAL, 0); }
    valueSet() {
        return this.tryGetRuleContext(0, ValueSetContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_valueSetOptionalitySpec; }
    // @Override
    accept(visitor) {
        if (visitor.visitValueSetOptionalitySpec) {
            return visitor.visitValueSetOptionalitySpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ValueSetOptionalitySpecContext = ValueSetOptionalitySpecContext;
class ObjectContext extends ParserRuleContext_1.ParserRuleContext {
    definedObject() {
        return this.tryGetRuleContext(0, DefinedObjectContext);
    }
    parameterizedObject() {
        return this.tryGetRuleContext(0, ParameterizedObjectContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_object; }
    // @Override
    accept(visitor) {
        if (visitor.visitObject) {
            return visitor.visitObject(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ObjectContext = ObjectContext;
class ParameterizedObjectContext extends ParserRuleContext_1.ParserRuleContext {
    definedObject() {
        return this.getRuleContext(0, DefinedObjectContext);
    }
    actualParameterList() {
        return this.getRuleContext(0, ActualParameterListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_parameterizedObject; }
    // @Override
    accept(visitor) {
        if (visitor.visitParameterizedObject) {
            return visitor.visitParameterizedObject(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParameterizedObjectContext = ParameterizedObjectContext;
class DefinedObjectContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
    DOT() { return this.tryGetToken(ASN_3gppParser.DOT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_definedObject; }
    // @Override
    accept(visitor) {
        if (visitor.visitDefinedObject) {
            return visitor.visitDefinedObject(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DefinedObjectContext = DefinedObjectContext;
class ObjectSetContext extends ParserRuleContext_1.ParserRuleContext {
    L_BRACE() { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
    objectSetSpec() {
        return this.getRuleContext(0, ObjectSetSpecContext);
    }
    R_BRACE() { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_objectSet; }
    // @Override
    accept(visitor) {
        if (visitor.visitObjectSet) {
            return visitor.visitObjectSet(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ObjectSetContext = ObjectSetContext;
class ObjectSetSpecContext extends ParserRuleContext_1.ParserRuleContext {
    rootElementSetSpec() {
        return this.tryGetRuleContext(0, RootElementSetSpecContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    }
    ELLIPSIS() { return this.tryGetToken(ASN_3gppParser.ELLIPSIS, 0); }
    additionalElementSetSpec() {
        return this.tryGetRuleContext(0, AdditionalElementSetSpecContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_objectSetSpec; }
    // @Override
    accept(visitor) {
        if (visitor.visitObjectSetSpec) {
            return visitor.visitObjectSetSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ObjectSetSpecContext = ObjectSetSpecContext;
class FieldNameContext extends ParserRuleContext_1.ParserRuleContext {
    AMPERSAND(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.AMPERSAND);
        }
        else {
            return this.getToken(ASN_3gppParser.AMPERSAND, i);
        }
    }
    IDENTIFIER(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.IDENTIFIER);
        }
        else {
            return this.getToken(ASN_3gppParser.IDENTIFIER, i);
        }
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.DOT);
        }
        else {
            return this.getToken(ASN_3gppParser.DOT, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_fieldName; }
    // @Override
    accept(visitor) {
        if (visitor.visitFieldName) {
            return visitor.visitFieldName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FieldNameContext = FieldNameContext;
class ValueSetContext extends ParserRuleContext_1.ParserRuleContext {
    L_BRACE() { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
    elementSetSpecs() {
        return this.getRuleContext(0, ElementSetSpecsContext);
    }
    R_BRACE() { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_valueSet; }
    // @Override
    accept(visitor) {
        if (visitor.visitValueSet) {
            return visitor.visitValueSet(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ValueSetContext = ValueSetContext;
class ElementSetSpecsContext extends ParserRuleContext_1.ParserRuleContext {
    rootElementSetSpec() {
        return this.getRuleContext(0, RootElementSetSpecContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    }
    ELLIPSIS() { return this.tryGetToken(ASN_3gppParser.ELLIPSIS, 0); }
    additionalElementSetSpec() {
        return this.tryGetRuleContext(0, AdditionalElementSetSpecContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_elementSetSpecs; }
    // @Override
    accept(visitor) {
        if (visitor.visitElementSetSpecs) {
            return visitor.visitElementSetSpecs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ElementSetSpecsContext = ElementSetSpecsContext;
class RootElementSetSpecContext extends ParserRuleContext_1.ParserRuleContext {
    elementSetSpec() {
        return this.getRuleContext(0, ElementSetSpecContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_rootElementSetSpec; }
    // @Override
    accept(visitor) {
        if (visitor.visitRootElementSetSpec) {
            return visitor.visitRootElementSetSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RootElementSetSpecContext = RootElementSetSpecContext;
class AdditionalElementSetSpecContext extends ParserRuleContext_1.ParserRuleContext {
    elementSetSpec() {
        return this.getRuleContext(0, ElementSetSpecContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_additionalElementSetSpec; }
    // @Override
    accept(visitor) {
        if (visitor.visitAdditionalElementSetSpec) {
            return visitor.visitAdditionalElementSetSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AdditionalElementSetSpecContext = AdditionalElementSetSpecContext;
class ElementSetSpecContext extends ParserRuleContext_1.ParserRuleContext {
    unions() {
        return this.tryGetRuleContext(0, UnionsContext);
    }
    ALL_LITERAL() { return this.tryGetToken(ASN_3gppParser.ALL_LITERAL, 0); }
    exclusions() {
        return this.tryGetRuleContext(0, ExclusionsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_elementSetSpec; }
    // @Override
    accept(visitor) {
        if (visitor.visitElementSetSpec) {
            return visitor.visitElementSetSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ElementSetSpecContext = ElementSetSpecContext;
class UnionsContext extends ParserRuleContext_1.ParserRuleContext {
    intersections(i) {
        if (i === undefined) {
            return this.getRuleContexts(IntersectionsContext);
        }
        else {
            return this.getRuleContext(i, IntersectionsContext);
        }
    }
    unionMark(i) {
        if (i === undefined) {
            return this.getRuleContexts(UnionMarkContext);
        }
        else {
            return this.getRuleContext(i, UnionMarkContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_unions; }
    // @Override
    accept(visitor) {
        if (visitor.visitUnions) {
            return visitor.visitUnions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnionsContext = UnionsContext;
class ExclusionsContext extends ParserRuleContext_1.ParserRuleContext {
    EXCEPT_LITERAL() { return this.getToken(ASN_3gppParser.EXCEPT_LITERAL, 0); }
    elements() {
        return this.getRuleContext(0, ElementsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_exclusions; }
    // @Override
    accept(visitor) {
        if (visitor.visitExclusions) {
            return visitor.visitExclusions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExclusionsContext = ExclusionsContext;
class IntersectionsContext extends ParserRuleContext_1.ParserRuleContext {
    intersectionElements(i) {
        if (i === undefined) {
            return this.getRuleContexts(IntersectionElementsContext);
        }
        else {
            return this.getRuleContext(i, IntersectionElementsContext);
        }
    }
    intersectionMark(i) {
        if (i === undefined) {
            return this.getRuleContexts(IntersectionMarkContext);
        }
        else {
            return this.getRuleContext(i, IntersectionMarkContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_intersections; }
    // @Override
    accept(visitor) {
        if (visitor.visitIntersections) {
            return visitor.visitIntersections(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IntersectionsContext = IntersectionsContext;
class UnionMarkContext extends ParserRuleContext_1.ParserRuleContext {
    PIPE() { return this.tryGetToken(ASN_3gppParser.PIPE, 0); }
    UNION_LITERAL() { return this.tryGetToken(ASN_3gppParser.UNION_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_unionMark; }
    // @Override
    accept(visitor) {
        if (visitor.visitUnionMark) {
            return visitor.visitUnionMark(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnionMarkContext = UnionMarkContext;
class IntersectionMarkContext extends ParserRuleContext_1.ParserRuleContext {
    POWER() { return this.tryGetToken(ASN_3gppParser.POWER, 0); }
    INTERSECTION_LITERAL() { return this.tryGetToken(ASN_3gppParser.INTERSECTION_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_intersectionMark; }
    // @Override
    accept(visitor) {
        if (visitor.visitIntersectionMark) {
            return visitor.visitIntersectionMark(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IntersectionMarkContext = IntersectionMarkContext;
class ElementsContext extends ParserRuleContext_1.ParserRuleContext {
    subtypeElements() {
        return this.getRuleContext(0, SubtypeElementsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_elements; }
    // @Override
    accept(visitor) {
        if (visitor.visitElements) {
            return visitor.visitElements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ElementsContext = ElementsContext;
class ObjectSetElementsContext extends ParserRuleContext_1.ParserRuleContext {
    object() {
        return this.tryGetRuleContext(0, ObjectContext);
    }
    definedObject() {
        return this.tryGetRuleContext(0, DefinedObjectContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_objectSetElements; }
    // @Override
    accept(visitor) {
        if (visitor.visitObjectSetElements) {
            return visitor.visitObjectSetElements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ObjectSetElementsContext = ObjectSetElementsContext;
class IntersectionElementsContext extends ParserRuleContext_1.ParserRuleContext {
    elements() {
        return this.getRuleContext(0, ElementsContext);
    }
    exclusions() {
        return this.tryGetRuleContext(0, ExclusionsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_intersectionElements; }
    // @Override
    accept(visitor) {
        if (visitor.visitIntersectionElements) {
            return visitor.visitIntersectionElements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IntersectionElementsContext = IntersectionElementsContext;
class SubtypeElementsContext extends ParserRuleContext_1.ParserRuleContext {
    DOUBLE_DOT() { return this.tryGetToken(ASN_3gppParser.DOUBLE_DOT, 0); }
    value(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }
        else {
            return this.getRuleContext(i, ValueContext);
        }
    }
    MIN_LITERAL() { return this.tryGetToken(ASN_3gppParser.MIN_LITERAL, 0); }
    MAX_LITERAL() { return this.tryGetToken(ASN_3gppParser.MAX_LITERAL, 0); }
    LESS_THAN(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.LESS_THAN);
        }
        else {
            return this.getToken(ASN_3gppParser.LESS_THAN, i);
        }
    }
    sizeConstraint() {
        return this.tryGetRuleContext(0, SizeConstraintContext);
    }
    PATTERN_LITERAL() { return this.tryGetToken(ASN_3gppParser.PATTERN_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_subtypeElements; }
    // @Override
    accept(visitor) {
        if (visitor.visitSubtypeElements) {
            return visitor.visitSubtypeElements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SubtypeElementsContext = SubtypeElementsContext;
class VariableTypeValueSetFieldSpecContext extends ParserRuleContext_1.ParserRuleContext {
    AMPERSAND() { return this.getToken(ASN_3gppParser.AMPERSAND, 0); }
    IDENTIFIER() { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
    fieldName() {
        return this.getRuleContext(0, FieldNameContext);
    }
    valueSetOptionalitySpec() {
        return this.tryGetRuleContext(0, ValueSetOptionalitySpecContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_variableTypeValueSetFieldSpec; }
    // @Override
    accept(visitor) {
        if (visitor.visitVariableTypeValueSetFieldSpec) {
            return visitor.visitVariableTypeValueSetFieldSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VariableTypeValueSetFieldSpecContext = VariableTypeValueSetFieldSpecContext;
class ObjectFieldSpecContext extends ParserRuleContext_1.ParserRuleContext {
    AMPERSAND() { return this.getToken(ASN_3gppParser.AMPERSAND, 0); }
    IDENTIFIER() { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
    definedObjectClass() {
        return this.getRuleContext(0, DefinedObjectClassContext);
    }
    objectOptionalitySpec() {
        return this.tryGetRuleContext(0, ObjectOptionalitySpecContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_objectFieldSpec; }
    // @Override
    accept(visitor) {
        if (visitor.visitObjectFieldSpec) {
            return visitor.visitObjectFieldSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ObjectFieldSpecContext = ObjectFieldSpecContext;
class ObjectOptionalitySpecContext extends ParserRuleContext_1.ParserRuleContext {
    OPTIONAL_LITERAL() { return this.tryGetToken(ASN_3gppParser.OPTIONAL_LITERAL, 0); }
    DEFAULT_LITERAL() { return this.tryGetToken(ASN_3gppParser.DEFAULT_LITERAL, 0); }
    object() {
        return this.tryGetRuleContext(0, ObjectContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_objectOptionalitySpec; }
    // @Override
    accept(visitor) {
        if (visitor.visitObjectOptionalitySpec) {
            return visitor.visitObjectOptionalitySpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ObjectOptionalitySpecContext = ObjectOptionalitySpecContext;
class ObjectSetFieldSpecContext extends ParserRuleContext_1.ParserRuleContext {
    AMPERSAND() { return this.getToken(ASN_3gppParser.AMPERSAND, 0); }
    IDENTIFIER() { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
    definedObjectClass() {
        return this.getRuleContext(0, DefinedObjectClassContext);
    }
    objectSetOptionalitySpec() {
        return this.tryGetRuleContext(0, ObjectSetOptionalitySpecContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_objectSetFieldSpec; }
    // @Override
    accept(visitor) {
        if (visitor.visitObjectSetFieldSpec) {
            return visitor.visitObjectSetFieldSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ObjectSetFieldSpecContext = ObjectSetFieldSpecContext;
class ObjectSetOptionalitySpecContext extends ParserRuleContext_1.ParserRuleContext {
    OPTIONAL_LITERAL() { return this.tryGetToken(ASN_3gppParser.OPTIONAL_LITERAL, 0); }
    DEFAULT_LITERAL() { return this.tryGetToken(ASN_3gppParser.DEFAULT_LITERAL, 0); }
    objectSet() {
        return this.tryGetRuleContext(0, ObjectSetContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_objectSetOptionalitySpec; }
    // @Override
    accept(visitor) {
        if (visitor.visitObjectSetOptionalitySpec) {
            return visitor.visitObjectSetOptionalitySpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ObjectSetOptionalitySpecContext = ObjectSetOptionalitySpecContext;
class TypeAssignmentContext extends ParserRuleContext_1.ParserRuleContext {
    ASSIGN_OP() { return this.getToken(ASN_3gppParser.ASSIGN_OP, 0); }
    asnType() {
        return this.getRuleContext(0, AsnTypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_typeAssignment; }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeAssignment) {
            return visitor.visitTypeAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeAssignmentContext = TypeAssignmentContext;
class ValueAssignmentContext extends ParserRuleContext_1.ParserRuleContext {
    asnType() {
        return this.getRuleContext(0, AsnTypeContext);
    }
    ASSIGN_OP() { return this.getToken(ASN_3gppParser.ASSIGN_OP, 0); }
    value() {
        return this.getRuleContext(0, ValueContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_valueAssignment; }
    // @Override
    accept(visitor) {
        if (visitor.visitValueAssignment) {
            return visitor.visitValueAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ValueAssignmentContext = ValueAssignmentContext;
class AsnTypeContext extends ParserRuleContext_1.ParserRuleContext {
    builtinType() {
        return this.tryGetRuleContext(0, BuiltinTypeContext);
    }
    referencedType() {
        return this.tryGetRuleContext(0, ReferencedTypeContext);
    }
    constraint(i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstraintContext);
        }
        else {
            return this.getRuleContext(i, ConstraintContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_asnType; }
    // @Override
    accept(visitor) {
        if (visitor.visitAsnType) {
            return visitor.visitAsnType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AsnTypeContext = AsnTypeContext;
class BuiltinTypeContext extends ParserRuleContext_1.ParserRuleContext {
    octetStringType() {
        return this.tryGetRuleContext(0, OctetStringTypeContext);
    }
    bitStringType() {
        return this.tryGetRuleContext(0, BitStringTypeContext);
    }
    choiceType() {
        return this.tryGetRuleContext(0, ChoiceTypeContext);
    }
    enumeratedType() {
        return this.tryGetRuleContext(0, EnumeratedTypeContext);
    }
    integerType() {
        return this.tryGetRuleContext(0, IntegerTypeContext);
    }
    sequenceType() {
        return this.tryGetRuleContext(0, SequenceTypeContext);
    }
    sequenceOfType() {
        return this.tryGetRuleContext(0, SequenceOfTypeContext);
    }
    setType() {
        return this.tryGetRuleContext(0, SetTypeContext);
    }
    setOfType() {
        return this.tryGetRuleContext(0, SetOfTypeContext);
    }
    objectidentifiertype() {
        return this.tryGetRuleContext(0, ObjectidentifiertypeContext);
    }
    objectClassFieldType() {
        return this.tryGetRuleContext(0, ObjectClassFieldTypeContext);
    }
    BOOLEAN_LITERAL() { return this.tryGetToken(ASN_3gppParser.BOOLEAN_LITERAL, 0); }
    NULL_LITERAL() { return this.tryGetToken(ASN_3gppParser.NULL_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_builtinType; }
    // @Override
    accept(visitor) {
        if (visitor.visitBuiltinType) {
            return visitor.visitBuiltinType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BuiltinTypeContext = BuiltinTypeContext;
class ObjectClassFieldTypeContext extends ParserRuleContext_1.ParserRuleContext {
    definedObjectClass() {
        return this.getRuleContext(0, DefinedObjectClassContext);
    }
    DOT() { return this.getToken(ASN_3gppParser.DOT, 0); }
    fieldName() {
        return this.getRuleContext(0, FieldNameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_objectClassFieldType; }
    // @Override
    accept(visitor) {
        if (visitor.visitObjectClassFieldType) {
            return visitor.visitObjectClassFieldType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ObjectClassFieldTypeContext = ObjectClassFieldTypeContext;
class SetTypeContext extends ParserRuleContext_1.ParserRuleContext {
    SET_LITERAL() { return this.getToken(ASN_3gppParser.SET_LITERAL, 0); }
    L_BRACE() { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
    R_BRACE() { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
    extensionAndException() {
        return this.tryGetRuleContext(0, ExtensionAndExceptionContext);
    }
    optionalExtensionMarker() {
        return this.tryGetRuleContext(0, OptionalExtensionMarkerContext);
    }
    componentTypeLists() {
        return this.tryGetRuleContext(0, ComponentTypeListsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_setType; }
    // @Override
    accept(visitor) {
        if (visitor.visitSetType) {
            return visitor.visitSetType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SetTypeContext = SetTypeContext;
class SetOfTypeContext extends ParserRuleContext_1.ParserRuleContext {
    SET_LITERAL() { return this.getToken(ASN_3gppParser.SET_LITERAL, 0); }
    OF_LITERAL() { return this.getToken(ASN_3gppParser.OF_LITERAL, 0); }
    asnType() {
        return this.tryGetRuleContext(0, AsnTypeContext);
    }
    namedType() {
        return this.tryGetRuleContext(0, NamedTypeContext);
    }
    constraint() {
        return this.tryGetRuleContext(0, ConstraintContext);
    }
    sizeConstraint() {
        return this.tryGetRuleContext(0, SizeConstraintContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_setOfType; }
    // @Override
    accept(visitor) {
        if (visitor.visitSetOfType) {
            return visitor.visitSetOfType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SetOfTypeContext = SetOfTypeContext;
class ReferencedTypeContext extends ParserRuleContext_1.ParserRuleContext {
    definedType() {
        return this.getRuleContext(0, DefinedTypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_referencedType; }
    // @Override
    accept(visitor) {
        if (visitor.visitReferencedType) {
            return visitor.visitReferencedType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ReferencedTypeContext = ReferencedTypeContext;
class DefinedTypeContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.IDENTIFIER);
        }
        else {
            return this.getToken(ASN_3gppParser.IDENTIFIER, i);
        }
    }
    DOT() { return this.tryGetToken(ASN_3gppParser.DOT, 0); }
    actualParameterList() {
        return this.tryGetRuleContext(0, ActualParameterListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_definedType; }
    // @Override
    accept(visitor) {
        if (visitor.visitDefinedType) {
            return visitor.visitDefinedType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DefinedTypeContext = DefinedTypeContext;
class ConstraintContext extends ParserRuleContext_1.ParserRuleContext {
    L_PARAN() { return this.getToken(ASN_3gppParser.L_PARAN, 0); }
    constraintSpec() {
        return this.getRuleContext(0, ConstraintSpecContext);
    }
    R_PARAN() { return this.getToken(ASN_3gppParser.R_PARAN, 0); }
    exceptionSpec() {
        return this.tryGetRuleContext(0, ExceptionSpecContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_constraint; }
    // @Override
    accept(visitor) {
        if (visitor.visitConstraint) {
            return visitor.visitConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConstraintContext = ConstraintContext;
class ConstraintSpecContext extends ParserRuleContext_1.ParserRuleContext {
    generalConstraint() {
        return this.tryGetRuleContext(0, GeneralConstraintContext);
    }
    subtypeConstraint() {
        return this.tryGetRuleContext(0, SubtypeConstraintContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_constraintSpec; }
    // @Override
    accept(visitor) {
        if (visitor.visitConstraintSpec) {
            return visitor.visitConstraintSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConstraintSpecContext = ConstraintSpecContext;
class UserDefinedConstraintContext extends ParserRuleContext_1.ParserRuleContext {
    CONSTRAINED_LITERAL() { return this.getToken(ASN_3gppParser.CONSTRAINED_LITERAL, 0); }
    BY_LITERAL() { return this.getToken(ASN_3gppParser.BY_LITERAL, 0); }
    L_BRACE() { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
    userDefinedConstraintParameter(i) {
        if (i === undefined) {
            return this.getRuleContexts(UserDefinedConstraintParameterContext);
        }
        else {
            return this.getRuleContext(i, UserDefinedConstraintParameterContext);
        }
    }
    R_BRACE() { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_userDefinedConstraint; }
    // @Override
    accept(visitor) {
        if (visitor.visitUserDefinedConstraint) {
            return visitor.visitUserDefinedConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UserDefinedConstraintContext = UserDefinedConstraintContext;
class GeneralConstraintContext extends ParserRuleContext_1.ParserRuleContext {
    userDefinedConstraint() {
        return this.tryGetRuleContext(0, UserDefinedConstraintContext);
    }
    tableConstraint() {
        return this.tryGetRuleContext(0, TableConstraintContext);
    }
    contentsConstraint() {
        return this.tryGetRuleContext(0, ContentsConstraintContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_generalConstraint; }
    // @Override
    accept(visitor) {
        if (visitor.visitGeneralConstraint) {
            return visitor.visitGeneralConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GeneralConstraintContext = GeneralConstraintContext;
class UserDefinedConstraintParameterContext extends ParserRuleContext_1.ParserRuleContext {
    governor() {
        return this.getRuleContext(0, GovernorContext);
    }
    COLON() { return this.tryGetToken(ASN_3gppParser.COLON, 0); }
    value() {
        return this.tryGetRuleContext(0, ValueContext);
    }
    valueSet() {
        return this.tryGetRuleContext(0, ValueSetContext);
    }
    object() {
        return this.tryGetRuleContext(0, ObjectContext);
    }
    objectSet() {
        return this.tryGetRuleContext(0, ObjectSetContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_userDefinedConstraintParameter; }
    // @Override
    accept(visitor) {
        if (visitor.visitUserDefinedConstraintParameter) {
            return visitor.visitUserDefinedConstraintParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UserDefinedConstraintParameterContext = UserDefinedConstraintParameterContext;
class TableConstraintContext extends ParserRuleContext_1.ParserRuleContext {
    componentRelationConstraint() {
        return this.getRuleContext(0, ComponentRelationConstraintContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_tableConstraint; }
    // @Override
    accept(visitor) {
        if (visitor.visitTableConstraint) {
            return visitor.visitTableConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TableConstraintContext = TableConstraintContext;
class SimpleTableConstraintContext extends ParserRuleContext_1.ParserRuleContext {
    objectSet() {
        return this.getRuleContext(0, ObjectSetContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_simpleTableConstraint; }
    // @Override
    accept(visitor) {
        if (visitor.visitSimpleTableConstraint) {
            return visitor.visitSimpleTableConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SimpleTableConstraintContext = SimpleTableConstraintContext;
class ContentsConstraintContext extends ParserRuleContext_1.ParserRuleContext {
    CONTAINING_LITERAL() { return this.tryGetToken(ASN_3gppParser.CONTAINING_LITERAL, 0); }
    asnType() {
        return this.tryGetRuleContext(0, AsnTypeContext);
    }
    ENCODED_LITERAL() { return this.tryGetToken(ASN_3gppParser.ENCODED_LITERAL, 0); }
    BY_LITERAL() { return this.tryGetToken(ASN_3gppParser.BY_LITERAL, 0); }
    value() {
        return this.tryGetRuleContext(0, ValueContext);
    }
    WITH_LITERAL() { return this.tryGetToken(ASN_3gppParser.WITH_LITERAL, 0); }
    COMPONENTS_LITERAL() { return this.tryGetToken(ASN_3gppParser.COMPONENTS_LITERAL, 0); }
    L_BRACE() { return this.tryGetToken(ASN_3gppParser.L_BRACE, 0); }
    componentPresenceLists() {
        return this.tryGetRuleContext(0, ComponentPresenceListsContext);
    }
    R_BRACE() { return this.tryGetToken(ASN_3gppParser.R_BRACE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_contentsConstraint; }
    // @Override
    accept(visitor) {
        if (visitor.visitContentsConstraint) {
            return visitor.visitContentsConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ContentsConstraintContext = ContentsConstraintContext;
class ComponentPresenceListsContext extends ParserRuleContext_1.ParserRuleContext {
    componentPresenceList(i) {
        if (i === undefined) {
            return this.getRuleContexts(ComponentPresenceListContext);
        }
        else {
            return this.getRuleContext(i, ComponentPresenceListContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    }
    ELLIPSIS() { return this.tryGetToken(ASN_3gppParser.ELLIPSIS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_componentPresenceLists; }
    // @Override
    accept(visitor) {
        if (visitor.visitComponentPresenceLists) {
            return visitor.visitComponentPresenceLists(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ComponentPresenceListsContext = ComponentPresenceListsContext;
class ComponentPresenceListContext extends ParserRuleContext_1.ParserRuleContext {
    componentPresence(i) {
        if (i === undefined) {
            return this.getRuleContexts(ComponentPresenceContext);
        }
        else {
            return this.getRuleContext(i, ComponentPresenceContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_componentPresenceList; }
    // @Override
    accept(visitor) {
        if (visitor.visitComponentPresenceList) {
            return visitor.visitComponentPresenceList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ComponentPresenceListContext = ComponentPresenceListContext;
class ComponentPresenceContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
    ABSENT_LITERAL() { return this.tryGetToken(ASN_3gppParser.ABSENT_LITERAL, 0); }
    PRESENT_LITERAL() { return this.tryGetToken(ASN_3gppParser.PRESENT_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_componentPresence; }
    // @Override
    accept(visitor) {
        if (visitor.visitComponentPresence) {
            return visitor.visitComponentPresence(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ComponentPresenceContext = ComponentPresenceContext;
class SubtypeConstraintContext extends ParserRuleContext_1.ParserRuleContext {
    elementSetSpecs() {
        return this.getRuleContext(0, ElementSetSpecsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_subtypeConstraint; }
    // @Override
    accept(visitor) {
        if (visitor.visitSubtypeConstraint) {
            return visitor.visitSubtypeConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SubtypeConstraintContext = SubtypeConstraintContext;
class ValueContext extends ParserRuleContext_1.ParserRuleContext {
    builtinValue() {
        return this.getRuleContext(0, BuiltinValueContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_value; }
    // @Override
    accept(visitor) {
        if (visitor.visitValue) {
            return visitor.visitValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ValueContext = ValueContext;
class BuiltinValueContext extends ParserRuleContext_1.ParserRuleContext {
    enumeratedValue() {
        return this.tryGetRuleContext(0, EnumeratedValueContext);
    }
    integerValue() {
        return this.tryGetRuleContext(0, IntegerValueContext);
    }
    choiceValue() {
        return this.tryGetRuleContext(0, ChoiceValueContext);
    }
    objectIdentifierValue() {
        return this.tryGetRuleContext(0, ObjectIdentifierValueContext);
    }
    booleanValue() {
        return this.tryGetRuleContext(0, BooleanValueContext);
    }
    CSTRING() { return this.tryGetToken(ASN_3gppParser.CSTRING, 0); }
    BSTRING() { return this.tryGetToken(ASN_3gppParser.BSTRING, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_builtinValue; }
    // @Override
    accept(visitor) {
        if (visitor.visitBuiltinValue) {
            return visitor.visitBuiltinValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BuiltinValueContext = BuiltinValueContext;
class ObjectIdentifierValueContext extends ParserRuleContext_1.ParserRuleContext {
    L_BRACE() { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
    objIdComponentsList() {
        return this.getRuleContext(0, ObjIdComponentsListContext);
    }
    R_BRACE() { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_objectIdentifierValue; }
    // @Override
    accept(visitor) {
        if (visitor.visitObjectIdentifierValue) {
            return visitor.visitObjectIdentifierValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ObjectIdentifierValueContext = ObjectIdentifierValueContext;
class ObjIdComponentsListContext extends ParserRuleContext_1.ParserRuleContext {
    objIdComponents(i) {
        if (i === undefined) {
            return this.getRuleContexts(ObjIdComponentsContext);
        }
        else {
            return this.getRuleContext(i, ObjIdComponentsContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_objIdComponentsList; }
    // @Override
    accept(visitor) {
        if (visitor.visitObjIdComponentsList) {
            return visitor.visitObjIdComponentsList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ObjIdComponentsListContext = ObjIdComponentsListContext;
class ObjIdComponentsContext extends ParserRuleContext_1.ParserRuleContext {
    NUMBER() { return this.tryGetToken(ASN_3gppParser.NUMBER, 0); }
    IDENTIFIER() { return this.tryGetToken(ASN_3gppParser.IDENTIFIER, 0); }
    L_PARAN() { return this.tryGetToken(ASN_3gppParser.L_PARAN, 0); }
    R_PARAN() { return this.tryGetToken(ASN_3gppParser.R_PARAN, 0); }
    definedValue() {
        return this.tryGetRuleContext(0, DefinedValueContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_objIdComponents; }
    // @Override
    accept(visitor) {
        if (visitor.visitObjIdComponents) {
            return visitor.visitObjIdComponents(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ObjIdComponentsContext = ObjIdComponentsContext;
class IntegerValueContext extends ParserRuleContext_1.ParserRuleContext {
    signedNumber() {
        return this.tryGetRuleContext(0, SignedNumberContext);
    }
    IDENTIFIER() { return this.tryGetToken(ASN_3gppParser.IDENTIFIER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_integerValue; }
    // @Override
    accept(visitor) {
        if (visitor.visitIntegerValue) {
            return visitor.visitIntegerValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IntegerValueContext = IntegerValueContext;
class ChoiceValueContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
    COLON() { return this.getToken(ASN_3gppParser.COLON, 0); }
    value() {
        return this.getRuleContext(0, ValueContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_choiceValue; }
    // @Override
    accept(visitor) {
        if (visitor.visitChoiceValue) {
            return visitor.visitChoiceValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ChoiceValueContext = ChoiceValueContext;
class EnumeratedValueContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_enumeratedValue; }
    // @Override
    accept(visitor) {
        if (visitor.visitEnumeratedValue) {
            return visitor.visitEnumeratedValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EnumeratedValueContext = EnumeratedValueContext;
class SignedNumberContext extends ParserRuleContext_1.ParserRuleContext {
    NUMBER() { return this.getToken(ASN_3gppParser.NUMBER, 0); }
    MINUS() { return this.tryGetToken(ASN_3gppParser.MINUS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_signedNumber; }
    // @Override
    accept(visitor) {
        if (visitor.visitSignedNumber) {
            return visitor.visitSignedNumber(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SignedNumberContext = SignedNumberContext;
class ChoiceTypeContext extends ParserRuleContext_1.ParserRuleContext {
    CHOICE_LITERAL() { return this.getToken(ASN_3gppParser.CHOICE_LITERAL, 0); }
    L_BRACE() { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
    alternativeTypeLists() {
        return this.getRuleContext(0, AlternativeTypeListsContext);
    }
    R_BRACE() { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_choiceType; }
    // @Override
    accept(visitor) {
        if (visitor.visitChoiceType) {
            return visitor.visitChoiceType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ChoiceTypeContext = ChoiceTypeContext;
class AlternativeTypeListsContext extends ParserRuleContext_1.ParserRuleContext {
    rootAlternativeTypeList() {
        return this.getRuleContext(0, RootAlternativeTypeListContext);
    }
    COMMA() { return this.tryGetToken(ASN_3gppParser.COMMA, 0); }
    extensionAndException() {
        return this.tryGetRuleContext(0, ExtensionAndExceptionContext);
    }
    extensionAdditionAlternatives() {
        return this.tryGetRuleContext(0, ExtensionAdditionAlternativesContext);
    }
    optionalExtensionMarker() {
        return this.tryGetRuleContext(0, OptionalExtensionMarkerContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_alternativeTypeLists; }
    // @Override
    accept(visitor) {
        if (visitor.visitAlternativeTypeLists) {
            return visitor.visitAlternativeTypeLists(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AlternativeTypeListsContext = AlternativeTypeListsContext;
class ExtensionAdditionAlternativesContext extends ParserRuleContext_1.ParserRuleContext {
    COMMA() { return this.tryGetToken(ASN_3gppParser.COMMA, 0); }
    extensionAdditionAlternativesList() {
        return this.tryGetRuleContext(0, ExtensionAdditionAlternativesListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_extensionAdditionAlternatives; }
    // @Override
    accept(visitor) {
        if (visitor.visitExtensionAdditionAlternatives) {
            return visitor.visitExtensionAdditionAlternatives(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExtensionAdditionAlternativesContext = ExtensionAdditionAlternativesContext;
class ExtensionAdditionAlternativesListContext extends ParserRuleContext_1.ParserRuleContext {
    extensionAdditionAlternative(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExtensionAdditionAlternativeContext);
        }
        else {
            return this.getRuleContext(i, ExtensionAdditionAlternativeContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_extensionAdditionAlternativesList; }
    // @Override
    accept(visitor) {
        if (visitor.visitExtensionAdditionAlternativesList) {
            return visitor.visitExtensionAdditionAlternativesList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExtensionAdditionAlternativesListContext = ExtensionAdditionAlternativesListContext;
class ExtensionAdditionAlternativeContext extends ParserRuleContext_1.ParserRuleContext {
    extensionAdditionAlternativesGroup() {
        return this.tryGetRuleContext(0, ExtensionAdditionAlternativesGroupContext);
    }
    namedType() {
        return this.tryGetRuleContext(0, NamedTypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_extensionAdditionAlternative; }
    // @Override
    accept(visitor) {
        if (visitor.visitExtensionAdditionAlternative) {
            return visitor.visitExtensionAdditionAlternative(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExtensionAdditionAlternativeContext = ExtensionAdditionAlternativeContext;
class ExtensionAdditionAlternativesGroupContext extends ParserRuleContext_1.ParserRuleContext {
    DOUBLE_L_BRACKET() { return this.getToken(ASN_3gppParser.DOUBLE_L_BRACKET, 0); }
    versionNumber() {
        return this.getRuleContext(0, VersionNumberContext);
    }
    alternativeTypeList() {
        return this.getRuleContext(0, AlternativeTypeListContext);
    }
    DOUBLE_R_BRACKET() { return this.getToken(ASN_3gppParser.DOUBLE_R_BRACKET, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_extensionAdditionAlternativesGroup; }
    // @Override
    accept(visitor) {
        if (visitor.visitExtensionAdditionAlternativesGroup) {
            return visitor.visitExtensionAdditionAlternativesGroup(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExtensionAdditionAlternativesGroupContext = ExtensionAdditionAlternativesGroupContext;
class RootAlternativeTypeListContext extends ParserRuleContext_1.ParserRuleContext {
    alternativeTypeList() {
        return this.getRuleContext(0, AlternativeTypeListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_rootAlternativeTypeList; }
    // @Override
    accept(visitor) {
        if (visitor.visitRootAlternativeTypeList) {
            return visitor.visitRootAlternativeTypeList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RootAlternativeTypeListContext = RootAlternativeTypeListContext;
class AlternativeTypeListContext extends ParserRuleContext_1.ParserRuleContext {
    namedType(i) {
        if (i === undefined) {
            return this.getRuleContexts(NamedTypeContext);
        }
        else {
            return this.getRuleContext(i, NamedTypeContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_alternativeTypeList; }
    // @Override
    accept(visitor) {
        if (visitor.visitAlternativeTypeList) {
            return visitor.visitAlternativeTypeList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AlternativeTypeListContext = AlternativeTypeListContext;
class NamedTypeContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
    asnType() {
        return this.getRuleContext(0, AsnTypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_namedType; }
    // @Override
    accept(visitor) {
        if (visitor.visitNamedType) {
            return visitor.visitNamedType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NamedTypeContext = NamedTypeContext;
class EnumeratedTypeContext extends ParserRuleContext_1.ParserRuleContext {
    ENUMERATED_LITERAL() { return this.getToken(ASN_3gppParser.ENUMERATED_LITERAL, 0); }
    L_BRACE() { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
    enumerations() {
        return this.getRuleContext(0, EnumerationsContext);
    }
    R_BRACE() { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_enumeratedType; }
    // @Override
    accept(visitor) {
        if (visitor.visitEnumeratedType) {
            return visitor.visitEnumeratedType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EnumeratedTypeContext = EnumeratedTypeContext;
class EnumerationsContext extends ParserRuleContext_1.ParserRuleContext {
    rootEnumeration() {
        return this.getRuleContext(0, RootEnumerationContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    }
    ELLIPSIS() { return this.tryGetToken(ASN_3gppParser.ELLIPSIS, 0); }
    exceptionSpec() {
        return this.tryGetRuleContext(0, ExceptionSpecContext);
    }
    additionalEnumeration() {
        return this.tryGetRuleContext(0, AdditionalEnumerationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_enumerations; }
    // @Override
    accept(visitor) {
        if (visitor.visitEnumerations) {
            return visitor.visitEnumerations(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EnumerationsContext = EnumerationsContext;
class RootEnumerationContext extends ParserRuleContext_1.ParserRuleContext {
    enumeration() {
        return this.getRuleContext(0, EnumerationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_rootEnumeration; }
    // @Override
    accept(visitor) {
        if (visitor.visitRootEnumeration) {
            return visitor.visitRootEnumeration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RootEnumerationContext = RootEnumerationContext;
class EnumerationContext extends ParserRuleContext_1.ParserRuleContext {
    enumerationItem(i) {
        if (i === undefined) {
            return this.getRuleContexts(EnumerationItemContext);
        }
        else {
            return this.getRuleContext(i, EnumerationItemContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_enumeration; }
    // @Override
    accept(visitor) {
        if (visitor.visitEnumeration) {
            return visitor.visitEnumeration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EnumerationContext = EnumerationContext;
class EnumerationItemContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.tryGetToken(ASN_3gppParser.IDENTIFIER, 0); }
    namedNumber() {
        return this.tryGetRuleContext(0, NamedNumberContext);
    }
    value() {
        return this.tryGetRuleContext(0, ValueContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_enumerationItem; }
    // @Override
    accept(visitor) {
        if (visitor.visitEnumerationItem) {
            return visitor.visitEnumerationItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EnumerationItemContext = EnumerationItemContext;
class NamedNumberContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
    L_PARAN() { return this.getToken(ASN_3gppParser.L_PARAN, 0); }
    R_PARAN() { return this.getToken(ASN_3gppParser.R_PARAN, 0); }
    signedNumber() {
        return this.tryGetRuleContext(0, SignedNumberContext);
    }
    definedValue() {
        return this.tryGetRuleContext(0, DefinedValueContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_namedNumber; }
    // @Override
    accept(visitor) {
        if (visitor.visitNamedNumber) {
            return visitor.visitNamedNumber(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NamedNumberContext = NamedNumberContext;
class DefinedValueContext extends ParserRuleContext_1.ParserRuleContext {
    parameterizedValue() {
        return this.getRuleContext(0, ParameterizedValueContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_definedValue; }
    // @Override
    accept(visitor) {
        if (visitor.visitDefinedValue) {
            return visitor.visitDefinedValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DefinedValueContext = DefinedValueContext;
class ParameterizedValueContext extends ParserRuleContext_1.ParserRuleContext {
    simpleDefinedValue() {
        return this.getRuleContext(0, SimpleDefinedValueContext);
    }
    actualParameterList() {
        return this.tryGetRuleContext(0, ActualParameterListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_parameterizedValue; }
    // @Override
    accept(visitor) {
        if (visitor.visitParameterizedValue) {
            return visitor.visitParameterizedValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParameterizedValueContext = ParameterizedValueContext;
class SimpleDefinedValueContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.IDENTIFIER);
        }
        else {
            return this.getToken(ASN_3gppParser.IDENTIFIER, i);
        }
    }
    DOT() { return this.tryGetToken(ASN_3gppParser.DOT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_simpleDefinedValue; }
    // @Override
    accept(visitor) {
        if (visitor.visitSimpleDefinedValue) {
            return visitor.visitSimpleDefinedValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SimpleDefinedValueContext = SimpleDefinedValueContext;
class ActualParameterListContext extends ParserRuleContext_1.ParserRuleContext {
    L_BRACE() { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
    actualParameter(i) {
        if (i === undefined) {
            return this.getRuleContexts(ActualParameterContext);
        }
        else {
            return this.getRuleContext(i, ActualParameterContext);
        }
    }
    R_BRACE() { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_actualParameterList; }
    // @Override
    accept(visitor) {
        if (visitor.visitActualParameterList) {
            return visitor.visitActualParameterList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ActualParameterListContext = ActualParameterListContext;
class ActualParameterContext extends ParserRuleContext_1.ParserRuleContext {
    asnType() {
        return this.tryGetRuleContext(0, AsnTypeContext);
    }
    value() {
        return this.tryGetRuleContext(0, ValueContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_actualParameter; }
    // @Override
    accept(visitor) {
        if (visitor.visitActualParameter) {
            return visitor.visitActualParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ActualParameterContext = ActualParameterContext;
class ExceptionSpecContext extends ParserRuleContext_1.ParserRuleContext {
    EXCLAM() { return this.getToken(ASN_3gppParser.EXCLAM, 0); }
    exceptionIdentification() {
        return this.getRuleContext(0, ExceptionIdentificationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_exceptionSpec; }
    // @Override
    accept(visitor) {
        if (visitor.visitExceptionSpec) {
            return visitor.visitExceptionSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExceptionSpecContext = ExceptionSpecContext;
class ExceptionIdentificationContext extends ParserRuleContext_1.ParserRuleContext {
    signedNumber() {
        return this.tryGetRuleContext(0, SignedNumberContext);
    }
    definedValue() {
        return this.tryGetRuleContext(0, DefinedValueContext);
    }
    asnType() {
        return this.tryGetRuleContext(0, AsnTypeContext);
    }
    COLON() { return this.tryGetToken(ASN_3gppParser.COLON, 0); }
    value() {
        return this.tryGetRuleContext(0, ValueContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_exceptionIdentification; }
    // @Override
    accept(visitor) {
        if (visitor.visitExceptionIdentification) {
            return visitor.visitExceptionIdentification(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExceptionIdentificationContext = ExceptionIdentificationContext;
class AdditionalEnumerationContext extends ParserRuleContext_1.ParserRuleContext {
    enumeration() {
        return this.getRuleContext(0, EnumerationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_additionalEnumeration; }
    // @Override
    accept(visitor) {
        if (visitor.visitAdditionalEnumeration) {
            return visitor.visitAdditionalEnumeration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AdditionalEnumerationContext = AdditionalEnumerationContext;
class IntegerTypeContext extends ParserRuleContext_1.ParserRuleContext {
    INTEGER_LITERAL() { return this.getToken(ASN_3gppParser.INTEGER_LITERAL, 0); }
    L_BRACE() { return this.tryGetToken(ASN_3gppParser.L_BRACE, 0); }
    namedNumberList() {
        return this.tryGetRuleContext(0, NamedNumberListContext);
    }
    R_BRACE() { return this.tryGetToken(ASN_3gppParser.R_BRACE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_integerType; }
    // @Override
    accept(visitor) {
        if (visitor.visitIntegerType) {
            return visitor.visitIntegerType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IntegerTypeContext = IntegerTypeContext;
class NamedNumberListContext extends ParserRuleContext_1.ParserRuleContext {
    namedNumber(i) {
        if (i === undefined) {
            return this.getRuleContexts(NamedNumberContext);
        }
        else {
            return this.getRuleContext(i, NamedNumberContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_namedNumberList; }
    // @Override
    accept(visitor) {
        if (visitor.visitNamedNumberList) {
            return visitor.visitNamedNumberList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NamedNumberListContext = NamedNumberListContext;
class ObjectidentifiertypeContext extends ParserRuleContext_1.ParserRuleContext {
    OBJECT_LITERAL() { return this.getToken(ASN_3gppParser.OBJECT_LITERAL, 0); }
    IDENTIFIER_LITERAL() { return this.getToken(ASN_3gppParser.IDENTIFIER_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_objectidentifiertype; }
    // @Override
    accept(visitor) {
        if (visitor.visitObjectidentifiertype) {
            return visitor.visitObjectidentifiertype(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ObjectidentifiertypeContext = ObjectidentifiertypeContext;
class ComponentRelationConstraintContext extends ParserRuleContext_1.ParserRuleContext {
    L_BRACE(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.L_BRACE);
        }
        else {
            return this.getToken(ASN_3gppParser.L_BRACE, i);
        }
    }
    R_BRACE(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.R_BRACE);
        }
        else {
            return this.getToken(ASN_3gppParser.R_BRACE, i);
        }
    }
    IDENTIFIER(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.IDENTIFIER);
        }
        else {
            return this.getToken(ASN_3gppParser.IDENTIFIER, i);
        }
    }
    atNotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AtNotationContext);
        }
        else {
            return this.getRuleContext(i, AtNotationContext);
        }
    }
    DOT() { return this.tryGetToken(ASN_3gppParser.DOT, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_componentRelationConstraint; }
    // @Override
    accept(visitor) {
        if (visitor.visitComponentRelationConstraint) {
            return visitor.visitComponentRelationConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ComponentRelationConstraintContext = ComponentRelationConstraintContext;
class AtNotationContext extends ParserRuleContext_1.ParserRuleContext {
    componentIdList() {
        return this.getRuleContext(0, ComponentIdListContext);
    }
    A_ROND() { return this.tryGetToken(ASN_3gppParser.A_ROND, 0); }
    A_ROND_DOT() { return this.tryGetToken(ASN_3gppParser.A_ROND_DOT, 0); }
    level() {
        return this.tryGetRuleContext(0, LevelContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_atNotation; }
    // @Override
    accept(visitor) {
        if (visitor.visitAtNotation) {
            return visitor.visitAtNotation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AtNotationContext = AtNotationContext;
class LevelContext extends ParserRuleContext_1.ParserRuleContext {
    DOT() { return this.tryGetToken(ASN_3gppParser.DOT, 0); }
    level() {
        return this.tryGetRuleContext(0, LevelContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_level; }
    // @Override
    accept(visitor) {
        if (visitor.visitLevel) {
            return visitor.visitLevel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LevelContext = LevelContext;
class ComponentIdListContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.IDENTIFIER);
        }
        else {
            return this.getToken(ASN_3gppParser.IDENTIFIER, i);
        }
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.DOT);
        }
        else {
            return this.getToken(ASN_3gppParser.DOT, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_componentIdList; }
    // @Override
    accept(visitor) {
        if (visitor.visitComponentIdList) {
            return visitor.visitComponentIdList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ComponentIdListContext = ComponentIdListContext;
class OctetStringTypeContext extends ParserRuleContext_1.ParserRuleContext {
    OCTET_LITERAL() { return this.getToken(ASN_3gppParser.OCTET_LITERAL, 0); }
    STRING_LITERAL() { return this.getToken(ASN_3gppParser.STRING_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_octetStringType; }
    // @Override
    accept(visitor) {
        if (visitor.visitOctetStringType) {
            return visitor.visitOctetStringType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OctetStringTypeContext = OctetStringTypeContext;
class BitStringTypeContext extends ParserRuleContext_1.ParserRuleContext {
    BIT_LITERAL() { return this.tryGetToken(ASN_3gppParser.BIT_LITERAL, 0); }
    STRING_LITERAL() { return this.tryGetToken(ASN_3gppParser.STRING_LITERAL, 0); }
    L_BRACE() { return this.tryGetToken(ASN_3gppParser.L_BRACE, 0); }
    namedBitList() {
        return this.tryGetRuleContext(0, NamedBitListContext);
    }
    R_BRACE() { return this.tryGetToken(ASN_3gppParser.R_BRACE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_bitStringType; }
    // @Override
    accept(visitor) {
        if (visitor.visitBitStringType) {
            return visitor.visitBitStringType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BitStringTypeContext = BitStringTypeContext;
class NamedBitListContext extends ParserRuleContext_1.ParserRuleContext {
    namedBit(i) {
        if (i === undefined) {
            return this.getRuleContexts(NamedBitContext);
        }
        else {
            return this.getRuleContext(i, NamedBitContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ASN_3gppParser.COMMA);
        }
        else {
            return this.getToken(ASN_3gppParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_namedBitList; }
    // @Override
    accept(visitor) {
        if (visitor.visitNamedBitList) {
            return visitor.visitNamedBitList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NamedBitListContext = NamedBitListContext;
class NamedBitContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
    L_PARAN() { return this.getToken(ASN_3gppParser.L_PARAN, 0); }
    R_PARAN() { return this.getToken(ASN_3gppParser.R_PARAN, 0); }
    NUMBER() { return this.tryGetToken(ASN_3gppParser.NUMBER, 0); }
    definedValue() {
        return this.tryGetRuleContext(0, DefinedValueContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_namedBit; }
    // @Override
    accept(visitor) {
        if (visitor.visitNamedBit) {
            return visitor.visitNamedBit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NamedBitContext = NamedBitContext;
class BooleanValueContext extends ParserRuleContext_1.ParserRuleContext {
    TRUE_LITERAL() { return this.tryGetToken(ASN_3gppParser.TRUE_LITERAL, 0); }
    FALSE_LITERAL() { return this.tryGetToken(ASN_3gppParser.FALSE_LITERAL, 0); }
    TRUE_SMALL_LITERAL() { return this.tryGetToken(ASN_3gppParser.TRUE_SMALL_LITERAL, 0); }
    FALSE_SMALL_LITERAL() { return this.tryGetToken(ASN_3gppParser.FALSE_SMALL_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASN_3gppParser.RULE_booleanValue; }
    // @Override
    accept(visitor) {
        if (visitor.visitBooleanValue) {
            return visitor.visitBooleanValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BooleanValueContext = BooleanValueContext;
