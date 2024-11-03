package com.solside.solutionsidekick.service;

import com.solside.solutionsidekick.model.Solution;
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
    AppUserService appUserService;

    @Override
    public List<Solution> findAll() {
        return solutionRepository.findAll();
    }

    @Override
    public Solution findById(UUID id) {
        return solutionRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("No solution found with id: " + id));
    }

    @Override
    public Solution save(Solution solutionRequest) {
        solutionRequest.setUser(
                appUserService.findById(solutionRequest.getUser().getId())
        );
        return solutionRepository.save(solutionRequest);
    }

    @Override
    public void deleteById(UUID id) {
        solutionRepository.deleteById(id);
    }
}
