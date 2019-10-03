import { User } from './user';
import { Book } from './book';

export class Bookshelf {
    userId: string;
    bookId: string;
    user: User;
    book: Book;
    page: number;
    updatedAt: string;
}
