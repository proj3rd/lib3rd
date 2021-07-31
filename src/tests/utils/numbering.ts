import assert from "assert";
import { versionFromCharacters } from "../../utils/numbering";

export function test_numbering() {
  describe('Numbering utilities', function() {
    it('versionFromCharacter', function() {
      const tcList = [
        { input: '123', expected: [1, 2, 3] },
        { input: 'fa0', expected: [15, 10, 0] },
        { input: '362514', expected: [36, 25, 14] },
      ];
      tcList.forEach((tc) => {
        const { input, expected } = tc;
        assert.deepStrictEqual(versionFromCharacters(input), expected);
      });
    });
  });
}
