package com.ktu.assessment.model;


import com.ktu.assessment.dto.GenderCountDTO; // <-- Import the new DTO
import com.ktu.assessment.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query; // <-- Import Query
import org.springframework.stereotype.Repository;

import java.util.List; // <-- Import List

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
    // JPQL query to group by gender and return a list of our DTO
    @Query("SELECT new com.ktu.assessment.dto.GenderCountDTO(p.gender, COUNT(p)) FROM Person p GROUP BY p.gender")
    List<GenderCountDTO> countByGender();
}