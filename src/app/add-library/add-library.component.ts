import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Book } from '../models/book.model';
import { ApiService } from '../providers/api.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-add-library',
  templateUrl: './add-library.component.html',
  styleUrls: ['./add-library.component.css']
})
export class AddLibraryComponent implements OnInit {

  form : FormGroup;
  book: Book;

  constructor( public dialogRef: MatDialogRef<Book>,private apiService:ApiService,
    private formBuilder: FormBuilder
    ) { 

      this.form = this.formBuilder.group({
        isbn: new FormControl('',Validators.required),
        name: new FormControl('',Validators.required),
        numberBooks: new FormControl('',Validators.required)
      });

    this.book = {} as Book;

  }

  ngOnInit(): void {

  }

  saveBook(){      
      this.mapToModel();
      let path='book'
      this.apiService.apiPostModel(path,this.book).subscribe(result=>{
              this.close();
             

      },error=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Se ha presentado un error!',
        })
      }
      )
   
 
  }

  mapToModel(){
    try { 
      this.book.isbn = this.form.get("isbn")?.value;
      this.book.name = this.form.get("name")?.value;
      this.book.numberBooks = this.form.get("numberBooks")?.value; 
      
    } catch (error) {
      console.log("Error en mapearFormToModel", error)
    }
  }

  close(): void {
    this.dialogRef.close();
  }


}
