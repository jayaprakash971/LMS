package com.library.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.library.demo.Repository.BookRepo;
import com.library.demo.Model.BookModel;

import java.util.List;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepo bookRepo;

    @Override
    public List<BookModel> getAllBooks() {
        return bookRepo.findAll();
    }

    @Override
    public void addBook(BookModel book) {
        bookRepo.save(book);
    }

    @Override
    public Boolean deleteBook(Integer id) {
        if (!bookRepo.existsById(id)) {
            return false;
        }
        bookRepo.deleteById(id);
        return true;
    }
}
