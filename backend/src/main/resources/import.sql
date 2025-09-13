-- This script will run automatically on application startup
-- and pre-populate the 'persons' table.
INSERT INTO persons (first_name, surname, gender, created_at) VALUES ('Kuhle', 'Sikota', 'Male', CURRENT_TIMESTAMP);
INSERT INTO persons (first_name, surname, gender, created_at) VALUES ('Jessy', 'Smith', 'Female', CURRENT_TIMESTAMP);
INSERT INTO persons (first_name, surname, gender, created_at) VALUES ('Sam', 'Mules', 'Other', CURRENT_TIMESTAMP);                                      ('Samuel', 'Jackson', 'Other', NOW());