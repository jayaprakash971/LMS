package com.library.demo.Service;
import com.library.demo.Model.BookModel;

import java.util.List;

public interface BookService {

    public List<BookModel> getAllBooks();

    void addBook(BookModel book);

    Boolean deleteBook(Integer id);
}
