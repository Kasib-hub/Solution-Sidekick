package com.solside.solutionsidekick.service;

import com.solside.solutionsidekick.model.Solution;
import com.solside.solutionsidekick.repository.AppUserRepository;
import com.solside.solutionsidekick.repository.SolutionRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@AllArgsConstructor
public class SolutionService implements IService<Solution> {

    SolutionRepository solutionRepository;
    AppUserRepository appUserRepository;

    @Override
    public List<Solution> findAll() {
        return solutionRepository.findAll();
    }

    @Override
    public Solution findById(UUID id) {
        return solutionRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("No solution found with id: " + id));
    }

    @Override
    public Solution save(Solution solution) {
        if (appUserRepository.existsById(solution.getUserId())) {
            return solutionRepository.save(solution);
        }
        throw new EntityNotFoundException("No user found by id: " + solution.getUserId());
    }

    @Override
    public void deleteById(UUID id) {
        solutionRepository.deleteById(id);
    }

    public List<Solution> findAllByUserId(UUID userId) {
        if (appUserRepository.existsById(userId)) {
            return solutionRepository.findByUserId(userId);
        }
        throw new EntityNotFoundException("No user found by id: " + userId);
    }
}
