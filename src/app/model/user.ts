import { Book } from './book';

export class User {
    id: number;
    username: string;

    books?: { lastPage: number, book: Book }[];
}