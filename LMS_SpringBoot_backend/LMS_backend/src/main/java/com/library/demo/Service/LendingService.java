package com.library.demo.Service;

import java.util.List;

import com.library.demo.Model.BookModel;
import com.library.demo.Model.LendingModel;
import com.library.demo.Model.UserModel;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;


public interface LendingService {

	
	
	public LendingModel addBorrowBook(LendingModel ls);
	
	public List<String> getBooksBorrowed();
	
	//all books taken by specific user
	public List<BookModel> getBooksBorrowedByUser(Integer uid);
	
	//all students taken a particular book
	public List<UserModel> getUsersBorrowedBook(Integer uid);


	public Boolean returnBook(String bookname);
}
