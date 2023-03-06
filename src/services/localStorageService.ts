export class localStorageService {
  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }
}

export default localStorageService;
