package com.library.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.library.demo.Model.BookModel;
import com.library.demo.Service.BookServiceImpl;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BookController {
	

    @Autowired
    BookServiceImpl bookService;

    @GetMapping("/")
    public String hello() {
    	return "hello";
    }
    
    @PostMapping("/addBook")
    public ResponseEntity<?> addBook(@RequestBody BookModel book) {
        bookService.addBook(book);
        return ResponseEntity.ok("Sucess");
    }
    
    @GetMapping("/allBooks")
    public ResponseEntity<List<BookModel>> getBooks(){
    	List<BookModel> lst= bookService.getAllBooks();
    	System.out.println(lst);
    	return ResponseEntity.ok(lst);
    }

    @DeleteMapping("/delBook/{bid}")
    public ResponseEntity<?> delBook(@PathVariable Integer bid) {
        boolean x = bookService.deleteBook(bid);
        if(x == true) {
            return ResponseEntity.ok("Book deleted");
        }
        else {
            return ResponseEntity.ok("Book deletion failed");
        }
    }
	
}
