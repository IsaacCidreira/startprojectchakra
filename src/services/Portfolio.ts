import { HttpClient } from './utils/HttpClient';

class Portfolio {
  private httpClient: InstanceType<new (...args: []) => HttpClient>;
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3000');
  }

  async get() {
    return await this.httpClient.get(`portfolio`);
  }
}
export default new Portfolio();
