export class localStorageService {
  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  get(key: string) {
    return localStorage.getItem(key);
  }

  setJSON(key: string, value: string) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getJSON(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  delete(key: string) {
    localStorage.removeItem(key);
  }
}

export default localStorageService;
