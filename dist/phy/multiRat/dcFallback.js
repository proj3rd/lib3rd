"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combinatorics = require("js-combinatorics");
const caCommon_1 = require("../caCommon");
const caFallback_1 = require("../eUtra/caFallback");
const caFallback_2 = require("../nr/caFallback");
function removeNullInCombos(combos) {
    for (let i = 0; i < combos.length; i++) {
        combos[i] = combos[i].filter((ccConfig) => ccConfig !== null);
    }
    for (let i = combos.length - 1; i >= 0; i--) {
        if (!combos[i].length) {
            combos.splice(i, 1);
        }
    }
}
if (require.main === module) {
    const argv = process.argv;
    const dcConfig = argv[2];
    process.stdout.write('Original input\n');
    process.stdout.write(`${dcConfig}\n`);
    process.stdout.write('\n');
    const [caConfigLte, caConfigNr] = dcConfig.replace('DC_', '').split('_');
    const ccConfigLteArr = caConfigLte.split('-')
        .map((ccConfigLte) => new caFallback_1.CcConfigLte(ccConfigLte));
    const ccConfigNrArr = caConfigNr.split('-')
        .map((ccConfigNr) => new caFallback_2.CcConfigNr(ccConfigNr));
    const fallbackCombosLte = caCommon_1.getFallback(ccConfigLteArr, caFallback_1.CcConfigLte);
    removeNullInCombos(fallbackCombosLte);
    const fallbackCombosNr = caCommon_1.getFallback(ccConfigNrArr, caFallback_2.CcConfigNr);
    removeNullInCombos(fallbackCombosNr);
    const fallbackCombosDc = combinatorics.cartesianProduct(fallbackCombosLte, fallbackCombosNr).toArray();
    process.stdout.write('Cartesian product\n');
    fallbackCombosDc.forEach((comboDc) => {
        const [comboLte, comboNr] = comboDc;
        process.stdout.write(`DC_${comboLte.join('-')}_${comboNr.join('-')}\n`);
    });
}
