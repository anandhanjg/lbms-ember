import Model, { attr } from '@ember-data/model';

export default class BookModel extends Model {
  @attr('string') _id;
  @attr('string') bookId;
  @attr('string') name;
  @attr('string') author;
}
