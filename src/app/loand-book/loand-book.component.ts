import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Book } from '../models/book.model';
import { ApiService } from '../providers/api.service';
import Swal from 'sweetalert2'
import { Loan } from '../models/loand.model';


@Component({
  selector: 'app-loand-book',
  templateUrl: './loand-book.component.html',
  styleUrls: ['./loand-book.component.css']
})
export class LoandBookComponent implements OnInit {
  form: FormGroup;
  book: Book;
  loan: Loan;
  isbn: string;

  constructor(public dialogRef: MatDialogRef<Book>, private apiService: ApiService,
    private formBuilder: FormBuilder
  ) {

    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      days: new FormControl('', Validators.required),
    });

    this.book = {} as Book;
    this.loan = {} as Loan;
    this.isbn = '';


  }

  ngOnInit(): void {

  }

  saveLoan() {
    this.mapToModel();

    let path = 'loan/generarPrestamo';
    this.apiService.apiPostModel(path, this.loan).subscribe(result => {
      console.log(result)
      Swal.fire({
        icon: 'info',
        title: 'Información',
        text: result.mensajeRespuesta,
      })
      this.close();

    }, error => {
      console.log(error)
      Swal.fire({
        icon: 'info',
        title: 'Información',
        text: error.error.mensajeRespuesta,
      })
      this.close();

    }
    )


  }

  mapToModel() {
    try {
      this.loan.date = new Date;
      this.book.isbn = this.isbn;
      this.loan.idBook = this.book;
      this.loan.personName = this.form.get("name")?.value;
      this.loan.diasPrestamo = this.form.get("days")?.value;

    } catch (error) {
      console.log("Error en mapearFormToModel", error)
    }
  }

  close(): void {
    this.dialogRef.close();
  }


}