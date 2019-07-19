import axios from 'axios'

class triviaService {
  constructor() {
    axios.defaults.baseURL = "http://jservice.io/api/"
  }

  getTrivia() {
    // return axios.get(`?count=${number}`);
    return axios.get('random?count=30');
  }

  getTriviaCategories() {
    return axios.get('categories?count=10')
  }

  getTriviaByCategory(id) {
    return axios.get(`category?id=${id}`)
  }
}

export const TriviaService = new triviaService()