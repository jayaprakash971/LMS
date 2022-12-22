package com.library.demo.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

//import org.springframework.data.annotation.Id;

import java.util.Date;

@Entity
public class LendingModel {
	
	@Id
	@GeneratedValue
	@Column
	public int id;
	@Column
	private int user_id;
	@Column
	private int book_id;
	@Column
	private Date borrowed_date;
	@Column
	private Date due_date;
	@Column
	private Date returned_date;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public int getBook_id() {
		return book_id;
	}
	public void setBook_id(int book_id) {
		this.book_id = book_id;
	}
	public Date getBorrowed_date() {
		return borrowed_date;
	}
	public void setBorrowed_date(Date borrowed_date) {
		this.borrowed_date = borrowed_date;
	}
	public Date getDue_date() {
		return due_date;
	}
	public void setDue_date(Date due_date) {
		this.due_date = due_date;
	}
	public Date getReturned_date() {
		return returned_date;
	}
	public void setReturned_date(Date returned_date) {
		this.returned_date = returned_date;
	}
	
}
