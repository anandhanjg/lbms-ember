import RESTAdapter from '@ember-data/adapter/rest';
import { API_URL } from '../utils/const';
import { inject as service } from '@ember/service';
export default class ApplicationAdapter extends RESTAdapter {
  @service authManager;

  headers = this.authManager.header;
  host = API_URL;

  
}
