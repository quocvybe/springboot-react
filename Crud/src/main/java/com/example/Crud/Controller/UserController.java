package com.example.Crud.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.Crud.Entity.User;
import com.example.Crud.Service.UserService;
import com.example.Crud.dto.request.UserCreateRequest;
import com.example.Crud.dto.request.UserUpdateRequest;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping
    public User CreateUser(@RequestBody UserCreateRequest request) {
        return userService.CreateUser(request);
    }

    @GetMapping
    List<User> getUser() {
        return userService.getUser();
    }

    @GetMapping("/{userId}")
    User getUser(@PathVariable("userId") String userId) {
        return userService.getUser(userId);
    }

    @PutMapping("/{userId}")
    User UpdateUser(@PathVariable("userId") String userId, @RequestBody UserUpdateRequest request) {
        return userService.UpdateUser(userId, request);
    }

    @DeleteMapping("/{userId}")
    String deleteUser(@PathVariable("userId") String userId) {
        userService.deleteUser(userId);
        return "ban da xoa thanh cong";
    }
}
