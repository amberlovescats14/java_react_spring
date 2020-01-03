package com.amber.ppmtool.repositories;

import com.amber.ppmtool.domain.ProjectTask;
import org.springframework.data.repository.CrudRepository;

public interface ProjectTaskRepository extends CrudRepository<ProjectTask, Long> {
}
