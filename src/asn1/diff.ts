import { createTwoFilesPatch } from 'diff';
import { html, parse } from 'diff2html';
import { render } from 'pug';
import { unreach } from 'unimpl';
import { Modules } from './classes/modules';
import { Assignment } from './types/assignment';

interface IAssignmentFlattened {
  moduleName: string;
  assignment: Assignment;
}

interface IAssignmentFlattenedPair {
  assignmentFlattened1?: IAssignmentFlattened;
  assignmentFlattened2?: IAssignmentFlattened;
}

interface IPatch {
  moduleName1: string;
  assignmentName1: string;
  moduleName2: string;
  assignmentName2: string;
  change: 'added' | 'modified' | 'removed';
  patch: string;
  patchHtml?: string;
}

export interface IDiffResult {
  specOld: string;
  specNew: string;
  patchList: IPatch[];
}

function flatten(modules: Modules): IAssignmentFlattened[] {
  const assignmentFlattenedList: IAssignmentFlattened[] = [];
  modules.modules.forEach((mod) => {
    const { name: moduleName } = mod;
    mod.assignments.forEach((assignment) => {
      assignmentFlattenedList.push({ moduleName, assignment });
    });
  });
  return assignmentFlattenedList;
}

function pair(
  assignmentFlattenedList1: IAssignmentFlattened[],
  assignmentFlattenedList2: IAssignmentFlattened[],
): IAssignmentFlattenedPair[] {
  const assignmentFlattenedPairList: IAssignmentFlattenedPair[] = [];
  assignmentFlattenedList1.forEach((assignmentFlattened1) => {
    const {
      moduleName: moduleName1,
      assignment: assignment1,
    } = assignmentFlattened1;
    const { name: name1 } = assignment1;
    const index = assignmentFlattenedList2.findIndex((value) => {
      const { moduleName: moduleName2, assignment: assignment2 } = value;
      const { name: name2 } = assignment2;
      return moduleName2 === moduleName1 && name2 === name1;
    });
    if (index === -1) {
      assignmentFlattenedPairList.push({ assignmentFlattened1 });
    } else {
      const assignmentFlattened2 = assignmentFlattenedList2.splice(index, 1)[0];
      assignmentFlattenedPairList.push({
        assignmentFlattened1,
        assignmentFlattened2,
      });
    }
  });
  assignmentFlattenedList2.forEach((assignmentFlattened2) => {
    assignmentFlattenedPairList.push({ assignmentFlattened2 });
  });
  return assignmentFlattenedPairList;
}

export function diff(modules1: Modules, modules2: Modules): IPatch[] {
  const assignmentFlattenedList1 = flatten(modules1);
  const assignmentFlattenedList2 = flatten(modules2);
  const assignmentFlattenedPairList = pair(
    assignmentFlattenedList1,
    assignmentFlattenedList2,
  );
  const patchList: IPatch[] = [];
  assignmentFlattenedPairList.forEach((assignmentFlattenedPair) => {
    const {
      assignmentFlattened1,
      assignmentFlattened2,
    } = assignmentFlattenedPair;
    if (
      assignmentFlattened1 === undefined
      && assignmentFlattened2 === undefined
    ) {
      unreach();
    }
    const moduleName1 = assignmentFlattened1
      ? assignmentFlattened1.moduleName
      : '';
    const assignmentName1 = assignmentFlattened1
      ? assignmentFlattened1.assignment.name
      : '';
    const filename1 = `${moduleName1}.${assignmentName1}`;
    const formatted1 = assignmentFlattened1
      ? assignmentFlattened1.assignment.toString()
      : '';

    const moduleName2 = assignmentFlattened2
      ? assignmentFlattened2.moduleName
      : '';
    const assignmentName2 = assignmentFlattened2
      ? assignmentFlattened2.assignment.name
      : '';
    const filename2 = `${moduleName2}.${assignmentName2}`;

    const formatted2 = assignmentFlattened2
      ? assignmentFlattened2.assignment.toString()
      : '';

    if (
      moduleName1 === moduleName2
      && assignmentName1 === assignmentName2
      && formatted1 === formatted2
    ) {
      return;
    }

    let change: 'added' | 'removed' | 'modified';
    if (formatted1 === '' && formatted2 !== '') {
      change = 'added';
    } else if (formatted1 !== '' && formatted2 === '') {
      change = 'removed';
    } else {
      change = 'modified';
    }

    const patch = createTwoFilesPatch(
      filename1,
      filename2,
      formatted1,
      formatted2,
      '',
      '',
      {
        context: Number.MAX_SAFE_INTEGER,
      },
    );
    patchList.push({
      moduleName1,
      assignmentName1,
      moduleName2,
      assignmentName2,
      change,
      patch,
    });
  });
  return patchList;
}

export function renderDiff(diffResult: IDiffResult, template: string): string {
  const { patchList } = diffResult;
  patchList.forEach((patch) => {
    // eslint-disable-next-line no-param-reassign
    patch.patchHtml = html(parse(patch.patch), {
      drawFileList: false,
      outputFormat: 'line-by-line', // side-by-side has layout issue https://github.com/rtfpessoa/diff2html/issues/155
    });
  });
  return render(template, diffResult);
}
