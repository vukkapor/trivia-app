import ChuckNorris from 'chucknorris-io'

class chuckService {
  constructor() {
    this.client = new ChuckNorris()
  }

  getJoke(category) {
    return this.client.getRandomJoke(category);
  }
}

export const ChuckService = new chuckService();