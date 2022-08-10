import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default class UserModalComponent extends Component {
  @service store;
  // @tracked user=this.args.user;
  @tracked error = '';

  get isSave() {
    return this.args.opt == 'SAVE';
  }

  @action
  async onSubmit(e) {
    e.preventDefault();
    let ur;
    try {
      if (this.args.opt == 'SAVE') {
        ur = this.store.createRecord('user', this.args.user);
      } else {
        let b = Object.assign({}, this.args.user);
        delete b._id;
        ur = this.store.peekRecord('user', this.args.user._id);
        Object.keys(b).forEach((k) => {
          ur[k] = b[k];
        });
      }
      await ur.save();
      $('#user-modal').modal('toggle');
    } catch (err) {
      if (ur) {
        this.args.opt == 'SAVE' ? ur.deleteRecord() : ur.rollbackAttributes();
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
