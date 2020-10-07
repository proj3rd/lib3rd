"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const diff_1 = require("diff");
const diff2html_1 = require("diff2html");
const pug_1 = require("pug");
const unimpl_1 = require("unimpl");
function flatten(modules) {
    const assignmentFlattenedList = [];
    modules.modules.forEach((mod) => {
        const { name: moduleName } = mod;
        mod.assignments.forEach((assignment) => {
            assignmentFlattenedList.push({ moduleName, assignment });
        });
    });
    return assignmentFlattenedList;
}
function pair(assignmentFlattenedList1, assignmentFlattenedList2) {
    const assignmentFlattenedPairList = [];
    assignmentFlattenedList1.forEach((assignmentFlattened1) => {
        const { moduleName: moduleName1, assignment: assignment1, } = assignmentFlattened1;
        const { name: name1 } = assignment1;
        const index = assignmentFlattenedList2.findIndex((value) => {
            const { moduleName: moduleName2, assignment: assignment2 } = value;
            const { name: name2 } = assignment2;
            return moduleName2 === moduleName1 && name2 === name1;
        });
        if (index === -1) {
            assignmentFlattenedPairList.push({ assignmentFlattened1 });
        }
        else {
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
function diff(modules1, modules2) {
    const assignmentFlattenedList1 = flatten(modules1);
    const assignmentFlattenedList2 = flatten(modules2);
    const assignmentFlattenedPairList = pair(assignmentFlattenedList1, assignmentFlattenedList2);
    const patchList = [];
    assignmentFlattenedPairList.forEach((assignmentFlattenedPair) => {
        const { assignmentFlattened1, assignmentFlattened2, } = assignmentFlattenedPair;
        if (assignmentFlattened1 === undefined
            && assignmentFlattened2 === undefined) {
            unimpl_1.unreach();
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
        if (moduleName1 === moduleName2
            && assignmentName1 === assignmentName2
            && formatted1 === formatted2) {
            return;
        }
        let change;
        if (formatted1 === '' && formatted2 !== '') {
            change = 'added';
        }
        else if (formatted1 !== '' && formatted2 === '') {
            change = 'removed';
        }
        else {
            change = 'modified';
        }
        const patch = diff_1.createTwoFilesPatch(filename1, filename2, formatted1, formatted2, '', '', {
            context: Number.MAX_SAFE_INTEGER,
        });
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
exports.diff = diff;
function renderDiff(diffResult, template) {
    const { patchList } = diffResult;
    patchList.forEach((patch) => {
        // eslint-disable-next-line no-param-reassign
        patch.patchHtml = diff2html_1.html(diff2html_1.parse(patch.patch), {
            drawFileList: false,
            outputFormat: 'line-by-line',
        });
    });
    return pug_1.render(template, diffResult);
}
exports.renderDiff = renderDiff;
//# sourceMappingURL=diff.js.map