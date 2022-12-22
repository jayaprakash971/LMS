package com.library.demo.Controller;


import java.util.Objects;
import com.library.demo.Model.UserModel;
import com.library.demo.Service.AuthService;
import com.library.demo.Service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public UserModel login(@RequestBody UserModel user) {
        return authService.login(user);
    }

    @PostMapping("/register")
    public UserModel register(@RequestBody UserModel user) {
        System.out.println("register");
        return authService.register(user);
    }

    @GetMapping("/username/{id}")
    public String username(@PathVariable int id) {
        return authService.getUsernameById(id);
    }
}
