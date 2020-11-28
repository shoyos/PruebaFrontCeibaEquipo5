import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Libro } from '../models/libro.model';

@Component({
  selector: 'app-add-library',
  templateUrl: './add-library.component.html',
  styleUrls: ['./add-library.component.css']
})
export class AddLibraryComponent implements OnInit {

  form : FormGroup;
  libro: Libro;

  constructor( public dialogRef: MatDialogRef<Libro>,
    private formBuilder: FormBuilder
    ) { 

    this.form = new FormGroup({
      isbn: new FormControl('',Validators.required),
      nombre: new FormControl('',Validators.required),
      existencias: new FormControl('',Validators.required)
    });

    this.libro = {} as Libro;

  }

  ngOnInit(): void {
  }

  guardarFormulario(){
    try {
      
      /*
      this.mapearFormToModel();
      let data = this.libro;
      let response = this.infoService.guardarInformacion(data).subscribe(
        res => {
          if (res.datos == 'OK') {
            console.log("INFORMACION ALMACENADA CON EXITO")
            this.dialogRef.close();
          } else{ console.log("Error al guardar informacion") }
        }, err => {
          console.log("Error al cargar servicio guardarInformacion");
        })
        response = null;
        */
    } catch (error) {
      console.log("Error en enviarFormulario", error)
    }
  }

  mapearFormToModel(){
    try {
      
      debugger
      /*
      this.libro.isbn = this.form.get("isbn").value;
      this.libro.nombre = this.form.get("nombre").value;
      this.libro.exitencias = this.form.get("exitencias").value;
      */
      
    } catch (error) {
      console.log("Error en mapearFormToModel", error)
    }
  }

  cerrar(): void {
    this.dialogRef.close();
  }


}
