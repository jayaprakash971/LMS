package com.library.demo.Controller;

import com.library.demo.Model.BookModel;
import com.library.demo.Model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.library.demo.Model.LendingModel;
import com.library.demo.Service.LendingServiceImpl;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class LendingController {
	
	@Autowired
	LendingServiceImpl ls;

	@PostMapping("/borrowBook")
	public LendingModel borrowBook(@RequestBody LendingModel lend){
		return ls.addBorrowBook(lend);
	}

	@GetMapping("/getBooksBorrowed")
	public List<String> getBooksBorrowed(){
		List<String> books = ls.getBooksBorrowed();
		return books;
	}

	@GetMapping("/getBooksBorrowedByUser/{uid}")
	public List<BookModel> getBooksBorrowedByUser(@PathVariable Integer uid){
		List<BookModel> books = ls.getBooksBorrowedByUser(uid);
		return books;
	}

	@GetMapping("/getUsersBorrowedBook/{bid}")
	public List<UserModel> getUsersBorrowedBook(@PathVariable Integer bid){
		List<UserModel> users = ls.getUsersBorrowedBook(bid);
		return users;
	}

	@DeleteMapping("/returnBook/{bookname}")
	public ResponseEntity<?> returnBook(@PathVariable String bookname) {
		ls.returnBook(bookname);
		return ResponseEntity.ok("Book Returned");
	}
}
