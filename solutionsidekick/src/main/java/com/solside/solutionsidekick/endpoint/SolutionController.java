package com.solside.solutionsidekick.endpoint;

import com.solside.solutionsidekick.model.Solution;
import com.solside.solutionsidekick.service.SolutionService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/solutions")
@AllArgsConstructor
public class SolutionController implements IAppController<Solution, UUID>{

    SolutionService solutionService;

    @Override
    public ResponseEntity<Solution> getById(UUID id) {
        return new ResponseEntity<>(this.solutionService.findById(id), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Solution> create(Solution solution) {
        return new ResponseEntity<>(this.solutionService.save(solution), HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<Solution> update(UUID id, Solution entity) {
        return null;
    }

    @Override
    public ResponseEntity<Void> delete(UUID id) {
        this.solutionService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping
    public ResponseEntity<List<Solution>> findAll() {
        return new ResponseEntity<>(this.solutionService.findAll(), HttpStatus.OK);
    }
}
