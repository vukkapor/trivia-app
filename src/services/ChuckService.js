import ChuckNorris from 'chucknorris-io'

class chuckService {
  constructor() {
    this.client = new ChuckNorris()
  }

  getJoke() {
    return this.client.getRandomJoke();
  }
}

export const ChuckService = new chuckService();