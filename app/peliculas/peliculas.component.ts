import { Component, OnInit } from '@angular/core';
import { Pelicula } from './pelicula';
import { BIBLIOTECA } from './biblioteca';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  peliculas = BIBLIOTECA;
 
  isLinear = true;
  nameForm: FormGroup;
  avatarForm: FormGroup;
  claseForm: FormGroup;
  imagenForm: FormGroup;
  descriptionForm: FormGroup;
  altForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.nameForm = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.avatarForm = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.claseForm = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
     this.altForm = this._formBuilder.group({
      altCtrl: ['', Validators.required]
    });
    this.imagenForm = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.descriptionForm = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });



  }

  add(){
    BIBLIOTECA.push({id: BIBLIOTECA.length, name: this.nameForm.value.firstCtrl, avatar: this.avatarForm.value.secondCtrl, tematica: this.claseForm.value.thirdCtrl, alt: this.altForm.value.altCtrl, imagen: this.imagenForm.value.fourthCtrl, descripcion: this.descriptionForm.value.fifthCtrl});

  }

  remove(key){
      BIBLIOTECA.splice(BIBLIOTECA.indexOf(key), 1);
  }

  
}
