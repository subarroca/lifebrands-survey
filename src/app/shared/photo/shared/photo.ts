import { environment } from '../../../../environments/environment';

export class Photo {
  word: string;
  id: string;
  author: string;
  path: string;

  constructor(options: {
    word?: string,
    id?: string,
    author?: string,
    path?: string,
  } = {}) {
    this.word = options.word;
    this.id = options.id;
    this.author = options.author;
    this.path = options.path;
  }

  get fullPath() {
    return `${environment.photosPath}/${this.path}`;
  }
}
