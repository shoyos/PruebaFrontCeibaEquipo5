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
      let path='book/createBook'
      this.apiService.apiPostModel(path,this.book).subscribe(result=>{
        console.log(result);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El libro se guardo correctamente',
          showConfirmButton: false,
          timer: 1500
        })
              this.close();
             

      },error=>{
        if(error.status===200){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'El libro se guardo correctamente',
            showConfirmButton: false,
            timer: 1500
          })
                this.close();  
        }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Se ha presentado un error!',
        })
      }
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
