import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import ApiEndPoints from '../utils/endpoints';

export default class SearchController extends Controller {
  @tracked message = 'Please Search Books!';
  @tracked searchTxt = '';
  @tracked books = [];

  @action
  onSubmit(e) {
    e.preventDefault();
    if (this.searchTxt) this.getBooks();
  }

  @action
  onChange(e) {
    this.searchTxt = e.target.value;
    if (this.searchTxt.length > 4) this.getBooks();
  }

  async getBooks() {
    if (this.searchTxt) {
      let response = await fetch(ApiEndPoints.bookSearch, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchTxt: this.searchTxt }),
      });

      if (response.ok) {
        let data = await response.text();
        data = JSON.parse(data);
        this.books = data.books;

        if (!this.books.length) this.message = 'No Books Found!';
      } else {
        this.message = message;
      }
    }
  }
}
