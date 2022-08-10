import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import $ from 'jquery';
import { inject as service } from '@ember/service';
const initValue = {
  _id: '',
  name: '',
  email: '',
  password: '',
  username: '',
};
export default class HomeAdminsController extends Controller {
  @tracked admin;
  @tracked opt = 'SAVE';

  @service store;

  headers = [
    { key: 'name', displayValue: 'Name' },
    { key: 'username', displayValue: 'UserName' },
    { key: 'email', displayValue: 'Email' },
  ];

  @action
  openModal() {
    $('#admin-modal').modal('toggle');
  }

  @action
  openModalToSave() {
    this.opt = 'SAVE';
    this.admin = { ...initValue };
    this.openModal();
  }

  @action
  openModalToEdit(ur) {
    this.opt = 'EDIT';
    this.admin = ur.getProperties(...Object.keys(initValue));
    this.openModal();
  }

  @action
  async deleteAdmin(admin) {
    if (window.confirm('Are you sure want to Delete?')) {
      admin.destroyRecord();
    }
  }
}
