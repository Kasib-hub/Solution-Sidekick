package com.solside.solutionsidekick.endpoint;

import com.solside.solutionsidekick.model.AppUser;
import com.solside.solutionsidekick.service.AppUserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/users")
@AllArgsConstructor
public class UserController implements IController<AppUser, UUID> {

    AppUserService userService;

    @Override
    public ResponseEntity<AppUser> getById(@PathVariable UUID id) {
        return new ResponseEntity<>(this.userService.findById(id), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<AppUser> create(AppUser user) {
        return new ResponseEntity<>(this.userService.save(user), HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<AppUser> update(UUID id, AppUser user) {
        return null;
    }

    @Override
    public ResponseEntity<Void> delete(UUID id) {
        this.userService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping
    public ResponseEntity<List<AppUser>> findAll() {
        return new ResponseEntity<>(this.userService.findAll(), HttpStatus.OK);
    }
}
