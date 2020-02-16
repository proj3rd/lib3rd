"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const fs_1 = require("fs");
const format_1 = require("./format");
const text_1 = require("./format/text");
const parse_1 = require("./parse");
const testCases = [
    {
        testName: 'BIT STRING',
        specWithVersion: '36331-f80',
        ieName: 'P-C-AndCBSR-r15',
        expectedResult: `P-C-AndCBSR-r15 ::= SEQUENCE {
  p-C-r15                                             INTEGER (-8..15),
  codebookSubsetRestriction4-r15                      BIT STRING
}`,
    },
    {
        testName: 'BIT STRING (SIZE (X))',
        specWithVersion: '38331-f80',
        ieName: 'RRCSystemInfoRequest-IEs',
        expectedResult: `RRCSystemInfoRequest-IEs ::= SEQUENCE {
  requested-SI-List                                   BIT STRING (SIZE (maxSI-Message)),
  spare                                               BIT STRING (SIZE (12))
}`,
    },
    {
        testName: 'BIT STRING (SIZE (reference))',
        specWithVersion: '38331-f80',
        ieName: 'RRCSystemInfoRequest-IEs',
        expectedResult: `RRCSystemInfoRequest-IEs ::= SEQUENCE {
  requested-SI-List                                   BIT STRING (SIZE (maxSI-Message)),
  spare                                               BIT STRING (SIZE (12))
}`,
    },
    {
        testName: 'BIT STRING (SIZE (X..Y))',
        specWithVersion: '36331-f80',
        ieName: 'SS-RSSI-Measurement-r15',
        expectedResult: `SS-RSSI-Measurement-r15 ::= SEQUENCE {
  measurementSlots-r15                                BIT STRING (SIZE (1..80)),
  endSymbol-r15                                       INTEGER (0..3)
}`,
    },
    {
        testName: 'ENUMERATED',
        specWithVersion: '36331-f80',
        ieName: 'MasterInformationBlock-MBMS-r14',
        expectedResult: `MasterInformationBlock-MBMS-r14 ::= SEQUENCE {
  dl-Bandwidth-MBMS-r14                               ENUMERATED {n6, n15, n25, n50, n75, n100},
  systemFrameNumber-r14                               BIT STRING (SIZE (6)),
  additionalNonMBSFNSubframes-r14                     INTEGER (0..3),
  spare                                               BIT STRING (SIZE (13))
}`,
    },
    {
        testName: 'ENUMERATED with Extension Marker',
        specWithVersion: '36331-f80',
        ieName: 'GNSS-ID-r15',
        expectedResult: `GNSS-ID-r15 ::= SEQUENCE {
  gnss-id-r15                                         ENUMERATED {gps, sbas, qzss, galileo, glonass, bds, ...},
  ...
}`,
    },
    {
        testName: 'ENUMERATED with Extension Marker and Additional Enumerations',
        specWithVersion: '36331-f80',
        ieName: 'V2X-BandwidthClass-r14',
        expectedResult: `V2X-BandwidthClass-r14 ::= ENUMERATED {a, b, c, d, e, f, ..., c1-v1530}`,
    },
    {
        testName: 'INTEGER (X)',
        specWithVersion: '36331-f80',
        ieName: 'UE-RadioPagingInfo-r12',
        expectedResult: `UE-RadioPagingInfo-r12 ::= SEQUENCE {
  ue-Category-v1250                                   INTEGER (0)    OPTIONAL,
  ...,
  [[
    ue-CategoryDL-v1310                                 ENUMERATED {m1}    OPTIONAL,
    ce-ModeA-r13                                        ENUMERATED {true}    OPTIONAL,
    ce-ModeB-r13                                        ENUMERATED {true}    OPTIONAL
  ]],
  [[
    wakeUpSignal-r15                                    ENUMERATED {true}    OPTIONAL,
    wakeUpSignal-TDD-r15                                ENUMERATED {true}    OPTIONAL,
    wakeUpSignalMinGap-eDRX-r15                         ENUMERATED {ms40, ms240, ms1000, ms2000}    OPTIONAL,
    wakeUpSignalMinGap-eDRX-TDD-r15                     ENUMERATED {ms40, ms240, ms1000, ms2000}    OPTIONAL
  ]]
}`,
    },
    {
        testName: 'INTEGER (X..Y)',
        specWithVersion: '36331-f80',
        ieName: 'P-C-AndCBSR-r15',
        expectedResult: `P-C-AndCBSR-r15 ::= SEQUENCE {
  p-C-r15                                             INTEGER (-8..15),
  codebookSubsetRestriction4-r15                      BIT STRING
}`,
    },
    {
        testName: 'OCTET STRING',
        specWithVersion: '36331-f80',
        ieName: 'CSFBParametersRequestCDMA2000-v8a0-IEs',
        expectedResult: `CSFBParametersRequestCDMA2000-v8a0-IEs ::= SEQUENCE {
  lateNonCriticalExtension                            OCTET STRING    OPTIONAL,
  nonCriticalExtension                                SEQUENCE {}    OPTIONAL
}`,
    },
    {
        testName: 'OCTET STRING (SIZE (X))',
        specWithVersion: '36331-f80',
        ieName: 'IDC-SubframePattern-r11',
        expectedResult: `IDC-SubframePattern-r11 ::= CHOICE {
  subframePatternFDD-r11                              BIT STRING (SIZE (4)),
  subframePatternTDD-r11                              CHOICE {
    subframeConfig0-r11                                 BIT STRING (SIZE (70)),
    subframeConfig1-5-r11                               BIT STRING (SIZE (10)),
    subframeConfig6-r11                                 BIT STRING (SIZE (60))
  },
  ...
}`,
    },
    {
        testName: 'OCTET STRING (SIZE (X..Y))',
        specWithVersion: '36331-f80',
        ieName: 'SS-RSSI-Measurement-r15',
        expectedResult: `SS-RSSI-Measurement-r15 ::= SEQUENCE {
  measurementSlots-r15                                BIT STRING (SIZE (1..80)),
  endSymbol-r15                                       INTEGER (0..3)
}`,
    },
    {
        testName: 'OCTET STRING (CONTAINING X)',
        specWithVersion: '36331-f80',
        ieName: 'AS-Context-v1320',
        expectedResult: `AS-Context-v1320 ::= SEQUENCE {
  wlanConnectionStatusReport-r13                      OCTET STRING (CONTAINING WLANConnectionStatusReport-r13)    OPTIONAL    -- Cond HO2
}`,
    },
];
const asn1Pool = {};
function getAsn1Parsed(specWithVersion) {
    if (specWithVersion in asn1Pool) {
        return asn1Pool[specWithVersion];
    }
    else {
        const series = specWithVersion.substring(0, 2);
        const spec = specWithVersion.split('-')[0];
        const specPath = `specs/${series} series/${spec}/${specWithVersion}.asn1`;
        const asn1Text = fs_1.readFileSync(specPath, 'utf8');
        const asn1Parsed = parse_1.parse(asn1Text);
        asn1Pool[specWithVersion] = asn1Parsed;
        return asn1Parsed;
    }
}
testCases.forEach((testCase) => {
    const { testName, specWithVersion, ieName, expectedResult } = testCase;
    it(testName, () => {
        const asn1Parsed = getAsn1Parsed(specWithVersion);
        const ie = format_1.findMsgIes(ieName, asn1Parsed);
        assert.equal(text_1.format(ie), expectedResult);
    });
});
