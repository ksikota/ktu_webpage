package com.ktu.assessment.controller;

import com.ktu.assessment.dto.GenderCountDTO;
import com.ktu.assessment.model.Person;
import com.ktu.assessment.model.PersonRepository;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/persons")
@CrossOrigin(origins = "http://localhost:4200") // Allows our Angular app to call these endpoints
public class PersonController {

    private final PersonRepository personRepository;

    // Constructor-based dependency injection
    public PersonController(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @GetMapping
    public List<Person> getAllPersons() {
        // Returns a list of all persons, ordered by creation date by default
        return personRepository.findAll();
    }

    @GetMapping("/summary")
    public List<GenderCountDTO> getGenderSummary() {
        return personRepository.countByGender();
    }

    @PostMapping
    public ResponseEntity<Person> createPerson(@Valid @RequestBody Person person) {
        // @Valid triggers the validation rules in the Person class
        // The request body is mapped to the Person object
        Person savedPerson = personRepository.save(person);
        return new ResponseEntity<>(savedPerson, HttpStatus.CREATED);
    }
}