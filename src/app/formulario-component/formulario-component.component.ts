import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BogService } from '../blog.service';

@Component({
  selector: 'app-formulario-component',
  templateUrl: './formulario-component.component.html',
  styleUrls: ['./formulario-component.component.css'],
})
export class FormularioComponentComponent implements OnInit {

  formulario: FormGroup;

  constructor(private blogservice: BogService) {

    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
      ]),
      texto: new FormControl('', [
        Validators.required,
        Validators.maxLength(300),
      ]),
      autor: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      imagen: new FormControl('', [
        Validators.required,
      ]),
      categoria: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  ngOnInit() {
  }

  crearPost() {
    this.blogservice.agregarPost(this.formulario.value);
  }

}
