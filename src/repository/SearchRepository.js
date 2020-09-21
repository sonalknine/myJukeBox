import axios from 'axios';

class SearchRepository {
  async getMethod(searchValue) {
    const url = "https://itunes.apple.com/search?term=" + searchValue;
    const response = await axios.get(url);
    return response;
  }
}

const searchRepository = new SearchRepository();
export {searchRepository as SearchRepository};