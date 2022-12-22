package com.library.demo.Controller;

import com.library.demo.Model.BookModel;
import com.library.demo.Model.UserModel;
import com.library.demo.Service.BookServiceImpl;
import com.library.demo.Service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

    @Autowired
    UserServiceImpl userService;

    @PostMapping("/addUser")
    public ResponseEntity<?> addUser(@RequestBody UserModel user) {
        userService.addUser(user);
        return ResponseEntity.ok("User added Successfully");
    }

    @GetMapping("/allUsers")
    public ResponseEntity<List<UserModel>> getUsers(){
        List<UserModel> lst= userService.getAllUsers();
        System.out.println(lst);
        return ResponseEntity.ok(lst);
    }

    @DeleteMapping("/delUser/{uid}")
    public ResponseEntity<?> delUser(@PathVariable Integer uid) {
        Integer x = userService.deleteUser(uid);
        return ResponseEntity.ok("User Deleted");
    }

    @PutMapping("/updateUser")
    public UserModel updateUser(@RequestBody UserModel user) {
        return userService.updateUser(user);
    }
}
