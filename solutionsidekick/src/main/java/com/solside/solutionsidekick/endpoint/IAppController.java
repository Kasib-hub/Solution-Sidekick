package com.solside.solutionsidekick.endpoint;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Tag(name = "Solution Sidekick API", description = "backend for Solution Sidekick")
public interface IAppController<T, ID> {

    @GetMapping("/{id}")
    ResponseEntity<T> getById(@PathVariable ID id);

    @PostMapping
    ResponseEntity<T> create(@RequestBody T entity);

    @PutMapping("/{id}")
    ResponseEntity<T> update(@PathVariable ID id, @RequestBody T entity);

    @DeleteMapping("/{id}")
    ResponseEntity<Void> delete(@PathVariable ID id);
}
