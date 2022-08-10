import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
const initValue = {
  _id: '',
  bookId: '',
  userId: '',
  dueDate: '',
  borrowDate: '',
  returnedDate: '',
  returned: false,
};

export default class HomeRentsController extends Controller {
  @tracked rent = { ...initValue };
  @tracked opt = 'SAVE';
  headers = [
    {
      key: 'bookId',
      displayValue: 'Book Id',
    },
    {
      key: 'userId',
      displayValue: 'User Id',
    },
    {
      key: 'borrowDate',
      displayValue: 'Borrowed On',
    },
    {
      key: 'dueDate',
      displayValue: 'Due Date',
    },
    {
      key: 'returned',
      displayValue: 'Returned',
    },
  ];

  @action
  openModal() {
    $('#rent-modal').modal('toggle');
  }

  @action
  openModalToSave() {
    this.opt = 'SAVE';
    this.rent = { ...initValue };
    this.openModal();
  }

  @action
  openModalToEdit(ur) {
    this.opt = 'EDIT';
    this.rent = ur.getProperties(...Object.keys(initValue));
    this.openModal();
  }

  @action
  async deleteRent(rent) {
    if (window.confirm('Are you sure want to Delete?')) {
      rent.destroyRecord();
    }
  }
}
