import * as combinatorics from 'js-combinatorics';

import { CcConfig, getFallback } from '../caCommon';
import { CcConfigLte } from '../eUtra/ca';
import { CcConfigNr } from '../nr/ca';

function removeNullInCombos<T extends CcConfig>(combos: T[][]): void {
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

  const [ caConfigLte, caConfigNr ] = dcConfig.replace('DC_', '').split('_');
  const ccConfigLteArr = caConfigLte.split('-')
                                    .map((ccConfigLte) => new CcConfigLte(ccConfigLte));
  const ccConfigNrArr = caConfigNr.split('-')
                                  .map((ccConfigNr) => new CcConfigNr(ccConfigNr));

  const fallbackCombosLte = getFallback(ccConfigLteArr, CcConfigLte);
  removeNullInCombos(fallbackCombosLte);
  const fallbackCombosNr = getFallback(ccConfigNrArr, CcConfigNr);
  removeNullInCombos(fallbackCombosNr);

  const fallbackCombosDc = combinatorics.cartesianProduct(fallbackCombosLte, fallbackCombosNr).toArray();
  process.stdout.write('Cartesian product\n');
  fallbackCombosDc.forEach((comboDc) => {
    const [ comboLte, comboNr ] = comboDc;
    process.stdout.write(`DC_${comboLte.join('-')}_${comboNr.join('-')}\n`);
  });
}
