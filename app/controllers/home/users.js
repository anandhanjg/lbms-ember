import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import $ from 'jquery';
import { inject as service } from '@ember/service';
const initValue = {
  _id: '',
  name: '',
  mobile: '',
  email: '',
  userId: '',
};

export default class HomeUsersController extends Controller {
  @tracked user;
  @tracked opt = 'SAVE';

  @service store;

  headers = [
    { key: 'userId', displayValue: 'ID' },
    { key: 'name', displayValue: 'Name' },
    { key: 'mobile', displayValue: 'Mobile' },
    { key: 'email', displayValue: 'Email' },
  ];

  @action
  openModal() {
    $('#user-modal').modal('toggle');
  }

  @action
  openModalToSave() {
    this.opt = 'SAVE';
    this.user = { ...initValue };
    this.openModal();
  }

  @action
  openModalToEdit(ur) {
    this.opt = 'EDIT';
    this.user = ur.getProperties(...Object.keys(initValue));
    this.openModal();
  }

  @action
  async deleteUser(user) {
    if (window.confirm('Are you sure want to Delete?')) {
      user.destroyRecord();
    }
  }
}
