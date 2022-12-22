package com.library.demo.Service;

import java.util.List;
import com.library.demo.Model.UserModel;
import org.springframework.transaction.annotation.Transactional;

public interface UserService {
    List<UserModel> getAllUsers();

    void addUser(UserModel user);

    @Transactional
    Integer deleteUser(Integer id);

    UserModel updateUser(UserModel user);
}
