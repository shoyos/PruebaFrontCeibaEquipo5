import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddLibraryComponent } from '../add-library/add-library.component';
import { ApiService } from '../providers/api.service';
import Swal from 'sweetalert2'
import { Book } from '../models/book.model';


@Component({
  selector: 'app-library-crud',
  templateUrl: './library-crud.component.html',
  styleUrls: ['./library-crud.component.css']
})
export class LibraryCrudComponent implements OnInit {

  headers = ["ISBN", "Nombre", "Número de libros", "Número de prestamos", "Acciones"];

  rows = [
    {
      "isbn": "1",
      "name": "Test1",
      "numberBooks": "21",
      "numberLoans": "12",
    },
    {
      "isbn": "1",
      "name": "Test1",
      "numberBooks": "21",
      "numberLoans": "12",
    }

  ]

  constructor(public dialog: MatDialog, private apiService: ApiService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    let path = 'book/books'
    this.apiService.apigetModel(path).subscribe(result => {
      this.rows = result;
    }, error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Se ha presentado un error!',
      })
    })
  }


  addBook() {
    try {

      const dialogRef = this.dialog.open(AddLibraryComponent, {
        width: '600px',
        height: '500px',
      });

      dialogRef.afterClosed().subscribe(result => {
        this.getBooks();
        //this.encuesta.infoPersonal = result;
      });
    } catch (error) {
      console.log("Error en addBook", error);
    }

  }


  loanBooks(isbn:string,name:string) {
    let path = 'loan/'+isbn+name;
    console.log(path);
    this.apiService.apiDeleteModel(path).subscribe(result => {

    }, error => {

    }
    )
  }

  deleteBook(isbn:string) {
    let path = 'book/remove/'+isbn;
    this.apiService.apiDeleteModel(path).subscribe(result => {
          console.log(result);
           Swal.fire({
        icon: 'info',
        title: 'Información',
        text: result.message,
      })
      this.getBooks();

    }, error => {
      console.log(error);
      Swal.fire({
        icon: 'info',
        title: 'Información',
        text: error.error.text,
      })
      this.getBooks();
    }
    )
  }


  captureName(isbn:string) {
    Swal.fire({
      title: 'Nombre de la persona quien presta el libto',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      showLoaderOnConfirm: true,
      preConfirm: (name) => {
        this.loanBooks(isbn,name);
      },
      allowOutsideClick: () => !Swal.isLoading()
    })
  }


}
