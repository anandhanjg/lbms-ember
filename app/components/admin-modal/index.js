import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default class AdminModalComponent extends Component {
  @service store;
  // @tracked admin=this.args.admin;
  @tracked error = '';

  get isSave() {
    return this.args.opt == 'SAVE';
  }

  @action
  async onSubmit(e) {
    e.preventDefault();
    let an;
    try {
      if (this.args.opt == 'SAVE') {
        an = this.store.createRecord('admin', this.args.admin);
      } else {
        let b = Object.assign({}, this.args.admin);
        an = this.store.peekRecord('admin', this.args.admin._id);
        Object.keys(b).forEach((k) => {
          an[k] = b[k];
        });
      }
      await an.save();
      $('#admin-modal').modal('toggle');
    } catch (err) {
      if (an) {
        this.args.opt == 'SAVE' ? an.deleteRecord() : an.rollbackAttributes();
      }

      this.error = err.message || err;
      setTimeout(() => (this.error = ''), 2000);
    }
  }

  @action
  onReset(e) {
    e.preventDefault();
  }
}
