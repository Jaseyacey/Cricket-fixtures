/* eslint-disable no-alert */
import axios from 'axios';


export default class Api {
  static get(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params,
        })
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
