import { helper } from '@ember/component/helper';

export default helper(function fDate([dtS] /*, named*/) {
  return dtS?new Date(dtS).toISOString().split('T')[0]:'';
});
