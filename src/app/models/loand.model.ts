import { Book } from './book.model'

export interface Loan{
    idBook : Book;
    date : Date;
    personName: string;
    diasPrestamo:number;
}