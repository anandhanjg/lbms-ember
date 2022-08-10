import { helper } from '@ember/component/helper';
function eq([s1, s2]) {
  return s1 == s2;
}
export default helper(eq);
