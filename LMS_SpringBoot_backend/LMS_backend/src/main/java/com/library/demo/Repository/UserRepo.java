package com.library.demo.Repository;

import com.library.demo.Model.UserModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<UserModel, Integer> {

    @Query("select u from UserModel u where u.user_email = ?1")
    public UserModel getUserByEmail(String email);

}