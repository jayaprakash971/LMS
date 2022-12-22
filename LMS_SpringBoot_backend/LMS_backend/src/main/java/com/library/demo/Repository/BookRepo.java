package com.library.demo.Repository;

import com.library.demo.Model.BookModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepo
		extends JpaRepository<BookModel, Integer> {

}