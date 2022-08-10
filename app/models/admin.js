import Model, { attr } from '@ember-data/model';

export default class AdminModel extends Model {
  @attr('string') _id;
  @attr('string') username;
  @attr('string', { defaultValue: null }) password;
  @attr('string') email;
  @attr('string') name;
}
