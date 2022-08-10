import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') _id;
  @attr('string') userId;
  @attr('string') name;
  @attr('string') mobile;
  @attr('string') email;
}
