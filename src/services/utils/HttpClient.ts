export class HttpClient {
  constructor(private path: string) {
    this.path = path;
  }

  async get(endpoint: string) {
    try {
      const response = await fetch(`${this.path}/${endpoint}`, {
        method: 'GET',
      });
      const data = await response.json();
      return { response, data };
    } catch (err) {
      return err;
    }
  }
}
