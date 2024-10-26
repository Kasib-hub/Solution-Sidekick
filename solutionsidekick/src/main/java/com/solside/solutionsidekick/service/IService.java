package com.solside.solutionsidekick.service;

import java.util.List;
import java.util.UUID;

public interface IService<T> {

    List<T> findAll();

    T findById(UUID id);

    T save(T entity);

    void deleteById(UUID id);
}

