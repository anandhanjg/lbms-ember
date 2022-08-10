import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default class BookModalComponent extends Component {
  @service store;
  // @tracked book=this.args.book;
  @tracked error = '';

  get isSave() {
    return this.args.opt == 'SAVE';
  }

  @action
  async onSubmit(e) {
    e.preventDefault();
    let bk;
    try {
      if (this.args.opt == 'SAVE') {
        bk = this.store.createRecord('book', this.args.book);
      } else {
        let b = Object.assign({}, this.args.book);
        delete b._id;
        bk = this.store.peekRecord('book', this.args.book._id);
        Object.keys(b).forEach((k) => {
          bk[k] = b[k];
        });
      }
      await bk.save();

      $('#book-modal').modal('toggle');
    } catch (err) {
      if (bk) {
        if (this.args.opt == 'SAVE') bk.deleteRecord();
        else if (this.args.opt == 'EDIT') bk.rollbackAttributes();
      }

      this.error = err.message || err;
      console.log(err);
      setTimeout(() => (this.error = ''), 2000);
    }
  }

  @action
  onReset(e) {
    e.preventDefault();
  }
}
