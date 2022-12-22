package com.library.demo.Service;

import java.util.List;

import com.library.demo.Model.BookModel;
import com.library.demo.Model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.library.demo.Model.LendingModel;
import com.library.demo.Repository.LendingRepo;

@Service
public class LendingServiceImpl implements LendingService {
	
	@Autowired
	LendingRepo lrepo;
	
	@Override
	public LendingModel addBorrowBook(LendingModel ls) {
		return lrepo.save(ls);
	}
	
	@Override
	public List<String> getBooksBorrowed(){
		return lrepo.getBooksBorrowed();
	}
	
	//all books taken by specific user
	@Override
	public List<BookModel> getBooksBorrowedByUser(Integer uid){
		return lrepo.getBooksBorrowedByUser(uid);
	}
	
	//all students taken a particular book
	@Override
	public List<UserModel> getUsersBorrowedBook(Integer bid){
		return lrepo.getUsersBorrowedBook(bid);
	}

	@Override
	public Boolean returnBook(String bookname) {
		lrepo.returnBook(bookname);
		return true;
	}

}
