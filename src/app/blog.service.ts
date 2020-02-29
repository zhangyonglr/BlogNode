import { Injectable } from '@angular/core';
import { Post } from './models/model';

@Injectable({
  providedIn: 'root'
})
export class BogService {

  arrPost: Post[];
  nuevoPost: Post;
  sumarId: number;

  constructor() {
    this.arrPost = [];
    this.sumarId = 0;
  }

  agregarPost(formValues: any) {
    this.arrPost = [];
    const nuevoPost = new Post(
      formValues.titulo,
      formValues.texto,
      formValues.autor,
      formValues.imagen,
      formValues.categoria,
      this.sumarId++
    );
    this.arrPost.push(nuevoPost);
    localStorage.setItem('arrPosts', JSON.stringify(this.arrPost));
  }

  getAllPosts(): Post[] {
    return this.arrPost;
  }

  getPostsByCategoria(pCategoria: string): Promise<Post[]> {
    const prom = new Promise<Post[]>((resolve, reject) => {
      const listaf = this.arrPost.filter(item =>
        item.categoria === pCategoria);
      resolve(listaf);
    });
    return prom;
  }
}
