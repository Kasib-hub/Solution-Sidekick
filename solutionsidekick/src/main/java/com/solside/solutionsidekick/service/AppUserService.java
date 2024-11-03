package com.solside.solutionsidekick.service;

import com.solside.solutionsidekick.model.AppUser;
import com.solside.solutionsidekick.repository.AppUserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@AllArgsConstructor
public class AppUserService implements IService<AppUser> {
    AppUserRepository appUserRepository;

    @Override
    public List<AppUser> findAll() {
        return appUserRepository.findAll();
    }

    @Override
    public AppUser findById(UUID id) {
        return appUserRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("No user found with id: " + id));
    }

    @Override
    public AppUser save(AppUser user) {
        appUserRepository.findByEmail(user.getEmail()).
                ifPresent(existingUser -> { throw new IllegalArgumentException("User already exists for " + user.getEmail()); });
        return appUserRepository.save(user);
    }

    @Override
    public void deleteById(UUID id) {
        appUserRepository.deleteById(id);
    }
}
