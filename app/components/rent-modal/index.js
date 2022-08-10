import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default class RentModalComponent extends Component {
  @service store;
  // @tracked rent=this.args.rent;
  @tracked error = '';

  @tracked returned=false;

  @tracked returnDate='';

  get isSave() {
    return this.args.opt == 'SAVE';
  }

  @action
  onDataChange(e){
    this.args[e.target.name]=e.target.value;
  }

  @action
  async onSubmit(e) {
    e.preventDefault();
    let rt;
    try {
      if (this.args.opt == 'SAVE') {
        console.log(this.args.rent);
        rt = this.store.createRecord('rent', this.args.rent);
      } else {
        let b = Object.assign({}, this.args.rent);
        delete b._id;
        rt = this.store.peekRecord('rent', this.args.rent._id);
        Object.keys(b).forEach((k) => {
          rt[k] = b[k];
        });
        if(!b.returned)
            rt.returnedDate=null;
      }
        await rt.save();
        $('#rent-modal').modal('toggle');
    } catch (err) {
      if (rt) {
        if (this.args.opt == 'SAVE') rt.deleteRecord();
        else if (this.args.opt == 'EDIT') rt.rollbackAttributes();
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

  didUpdateAttrs(){
    console.log("New Attributes Received");
  }
  
}
