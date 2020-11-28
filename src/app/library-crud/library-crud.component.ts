import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddLibraryComponent } from '../add-library/add-library.component';

@Component({
  selector: 'app-library-crud',
  templateUrl: './library-crud.component.html',
  styleUrls: ['./library-crud.component.css']
})
export class LibraryCrudComponent implements OnInit {

  headers = ["ISBN", "Nombre", "Número de libros", "Número de prestamos", "Acciones"];

  rows = [
    {
      "isbn" : "1",
      "name" : "Test1",
      "numberBooks" : "21",
      "numberLoans" : "12",
    },
    {
      "isbn" : "1",
      "name" : "Test1",
      "numberBooks" : "21",
      "numberLoans" : "12",
    }

  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  
  addBook(){
    try {
      
      const dialogRef = this.dialog.open(AddLibraryComponent, {
        width: '600px',
        height: '500px',
      });

      dialogRef.afterClosed().subscribe(result => {
        debugger
        console.log('The dialog was closed');
        //this.encuesta.infoPersonal = result;
      });
    } catch (error) {
      console.log("Error en addBook", error);
    }
    /*
    Swal.fire({
      title: 'Submit your Github username',
      input: ['text',"text"],
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        })
      }
    })*/
  }


}
