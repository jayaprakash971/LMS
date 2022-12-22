package com.library.demo.Repository;

import com.library.demo.Model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.library.demo.Model.BookModel;
import com.library.demo.Model.LendingModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface LendingRepo extends JpaRepository<LendingModel, Long> {

	//all books taken
	@Query("select book_name from BookModel where id in (select book_id from LendingModel)")
	public List<String> getBooksBorrowed();
	
	//all books taken by specific user
	@Query("select b from BookModel b where b.id in (select book_id from LendingModel where user_id= ?1)")
	public List<BookModel> getBooksBorrowedByUser(Integer uid);
	
	//all students taken a particular book
	
	@Query("select u from UserModel u where id in (select user_id from LendingModel where book_id= ?1)")
	public List<UserModel> getUsersBorrowedBook(Integer uid);

	@Transactional
	@Modifying
	@Query("delete from LendingModel l where l.book_id in (select id from BookModel where book_name = ?1)")
	public Integer returnBook(String bookname);
	
}
