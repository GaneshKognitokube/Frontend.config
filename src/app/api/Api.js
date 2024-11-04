import axios from "axios";


export default class Api {
  // constructor() {
  //   this.api = 'http://localhost:3005/sendmail';
  // }

  async post(body) {
    try {
      const response = await axios.post("/mailapi", body);
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async postc(body) {
    try {
      const response = await axios.post("/mailapi", body);
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async spost(body) {
    try {
      const response = await axios.post("/mailapi", body);
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  
}
