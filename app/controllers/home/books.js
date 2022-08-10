import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import $ from 'jquery';
import { inject as service } from '@ember/service';
const initValue = {
  _id: '',
  bookId: '',
  name: '',
  author: '',
};
export default class HomeBooksController extends Controller {
  @tracked book;
  @tracked opt = 'SAVE';

  @service store;

  headers = [
    { key: 'bookId', displayValue: 'ID' },
    { key: 'name', displayValue: 'Name' },
    { key: 'author', displayValue: 'Author' },
  ];

  @action
  openModal() {
    $('#book-modal').modal('toggle');
  }

  @action
  openModalToSave() {
    this.opt = 'SAVE';
    this.book = { ...initValue };
    this.openModal();
  }

  @action
  openModalToEdit(bk) {
    this.opt = 'EDIT';
    this.book = bk.getProperties(...Object.keys(initValue));
    this.openModal();
  }

  @action
  async deleteBook(bk) {
    if (window.confirm('Are you sure want to Delete?')) {
      bk.destroyRecord();
    }
  }
}
