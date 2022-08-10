import { helper } from '@ember/component/helper';
function dDate([dateStr]) {
  return new Date(dateStr)
    .toISOString()
    .split('T')[0]
    .split('-')
    .reverse()
    .join('/');
  // return positional;
}
export default helper(dDate);
