package com.ktu.assessment.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Data // Lombok annotation to create getters, setters, toString, etc.
@Entity // Tells JPA this class is a database entity
@Table(name = "persons") // Specifies the table name in the database
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "First name is required")
    @Size(max = 48, message = "First name must not exceed 48 characters")
    @Column(name = "first_name", nullable = false, length = 48)
    private String firstName;

    @NotBlank(message = "Surname is required")
    @Size(max = 64, message = "Surname must not exceed 64 characters")
    @Column(name = "surname", nullable = false, length = 64)
    private String surname;

    @Column(name = "gender", nullable = false)
    private String gender;

    @CreationTimestamp // Automatically sets the value on creation
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
}