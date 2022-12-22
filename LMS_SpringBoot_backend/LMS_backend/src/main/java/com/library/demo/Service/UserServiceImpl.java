package com.library.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

import com.library.demo.Repository.UserRepo;
import com.library.demo.Service.UserService;
import com.library.demo.Model.UserModel;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public List<UserModel> getAllUsers() {
        return userRepo.findAll();
    }

    @Override
    public void addUser(UserModel user) {
        userRepo.save(user);
    }

    @Modifying
    @Override
    public Integer deleteUser(Integer id) {
        if (!userRepo.existsById(id)) {
            return 0;
        }
        userRepo.deleteById(id);
        return 1;
    }

    @Override
    public UserModel updateUser(UserModel user) {
        UserModel existingUser = userRepo.findById(user.getId()).orElse(null);

        existingUser.setUser_name(user.getUser_name());
        existingUser.setUser_email(user.getUser_email());
        existingUser.setUser_mobile(user.getUser_mobile());

        return userRepo.save(existingUser);
    }

}
