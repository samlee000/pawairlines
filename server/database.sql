CREATE DATABASE pawsairline;

CREATE TABLE flights(
    flight_id SERIAL PRIMARY KEY, 
    description VARCHAR(255),
    origin VARCHAR(255),
    destination VARCHAR(255),
    airline VARCHAR(255),
    departure VARCHAR(255),
    plane_id VARCHAR(255)
);

CREATE TABLE tickets(
    ticket_id SERIAL PRIMARY KEY, 
    flight_id VARCHAR(255),
    user_id VARCHAR(255),
    bill_id VARCHAR(255),
    seat_number VARCHAR(255),
    class VARCHAR(255),
    pet_carry_on VARCHAR(255),
    price VARCHAR(255)
    economy_price DECIMAL(50, 2),
    business_price DECIMAL(50, 2),
    firstclass_price DECIMAL(50, 2)
);

CREATE TABLE baggage(
    baggage_id SERIAL PRIMARY KEY, 
    ticket_id VARCHAR(255),
    baggage_type VARCHAR(255)
);

CREATE TABLE pet(
    pet_id SERIAL PRIMARY KEY, 
    ticket_id VARCHAR(255),
    species VARCHAR(255),
    breed VARCHAR(255)
);

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY, 
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    age VARCHAR(255),
    gender VARCHAR(255),
    user_address VARCHAR(255),
    user_email VARCHAR(255),
    phone_number VARCHAR(255)
);

CREATE TABLE book(
    booking_id SERIAL PRIMARY KEY,
    flight_id SERIAL,
    fname VARCHAR(255),
    lname VARCHAR(255),
    seat_type VARCHAR(255),
    price DECIMAL(50, 2),
    user_id SERIAL
);

INSERT INTO users (first_name, last_name, age, gender, user_address, user_email, phone_number) 
VALUES ('Sam', 'Lee', '21', 'Male', 'N/A', 'leesamuel000@tamu.edu', '000-000-0000');