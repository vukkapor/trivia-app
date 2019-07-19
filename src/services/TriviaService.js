import axios from 'axios'

class triviaService {
  constructor() {
    axios.defaults.baseURL = "http://jservice.io/api/random"
  }

  getTrivia() {
    // return axios.get(`?count=${number}`);
    return axios.get('?count=30');
  }
}

export const TriviaService = new triviaService()