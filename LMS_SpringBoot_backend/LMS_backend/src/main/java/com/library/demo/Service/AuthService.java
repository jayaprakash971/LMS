package com.library.demo.Service;

import com.library.demo.Model.UserModel;
import com.library.demo.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepo userRepo;

    public UserModel register(UserModel user) {
        UserModel user2 = userRepo.getUserByEmail(user.getUser_email());
        if(user2 != null)
            return null;

        return userRepo.save(user);
    }

    public UserModel login(UserModel user) {
        UserModel existingUser = userRepo.getUserByEmail(user.getUser_email());

        System.out.println(existingUser);
//        if(existingUser == null)
//            return null;

        if(existingUser.getUser_email().equals(user.getUser_email()) &&
                existingUser.getUser_password().equals(user.getUser_password())) {

            existingUser.setUser_password("");
            return existingUser;
        }

        return null;
    }

    public String getUsernameById(int id) {
        UserModel user = userRepo.findById(id).orElse(null);
        return user.getUser_name();
    }

}
