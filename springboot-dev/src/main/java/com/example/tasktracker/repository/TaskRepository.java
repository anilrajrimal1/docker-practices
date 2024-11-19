package com.example.tasktracker.repository;

import com.example.tasktracker.model.Task;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TaskRepository extends MongoRepository<Task, String> {

}
