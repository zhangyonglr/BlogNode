import { Component, OnInit } from '@angular/core';
import { BogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/model';

@Component({
  selector: 'app-blog-component',
  templateUrl: './blog-component.component.html',
  styleUrls: ['./blog-component.component.css'],
})
export class BlogComponentComponent implements OnInit {

  listaPost: Post[];

  constructor(private activatedroute: ActivatedRoute, private blogservice: BogService) {
    this.listaPost = [];
  }

  ngOnInit() {
    this.listaPost = this.blogservice.getAllPosts();
    // console.log(this.listaPost);
  }

  //filtro

  async manejarCategorias($event) {
    this.listaPost = await this.blogservice.getPostsByCategoria($event.target.value);

  }

  /*  async botonEliminar(post) {
     this.listaPost = await this.blogservice.borrarPost(post);
   } */

}
