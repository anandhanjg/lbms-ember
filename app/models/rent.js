import Model, { attr } from '@ember-data/model';

export default class RentModel extends Model {
  @attr('string') _id;
  @attr('string') bookId;
  @attr('string') userId;
  @attr('string') borrowDate;
  @attr('string') dueDate;
  @attr('boolean') returned;
  @attr('string', { defaultValue: null }) returnedDate;
}
