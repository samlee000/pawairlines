CREATE TABLE flights (
    flight_id SERIAL PRIMARY KEY,
    schedule VARCHAR(255),
    destination VARCHAR(255),
    origin VARCHAR(255),
    airline VARCHAR(255),
    exit_terminal VARCHAR(255),
    entry_terminal VARCHAR(255)
);

CREATE TABLE billing (
    bill_id SERIAL PRIMARY KEY,
    user_id SERIAL,
    flight_id SERIAL, 
    routing_no SERIAL,
    subtotal DECIMAL(50, 2),
    total DECIMAL(50, 2)
);

CREATE TABLE tickets(
    ticket_id SERIAL PRIMARY KEY, 
    flight_id VARCHAR(255),
    user_id VARCHAR(255),
    bill_id VARCHAR(255),
    seat_number VARCHAR(255),
    class VARCHAR(255),
    pet_co VARCHAR(255),
    economy_price DECIMAL(50, 2),
    business_price DECIMAL(50, 2),
    firstclass_price DECIMAL(50, 2)
);

CREATE TABLE baggage(
    baggage_id SERIAL PRIMARY KEY, 
    ticket_id VARCHAR(255),
    baggage_type VARCHAR(255)
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

CREATE TABLE membership(
    membership_id SERIAL PRIMARY KEY,
    user_id SERIAL,
    membership_type int,
    membership_duration int
);

CREATE TABLE book(
    booking_id SERIAL,
    fname VARCHAR(255),
    lname VARCHAR(255),
    seat_type VARCHAR(255)
);

INSERT INTO users (first_name, last_name, age, gender, user_address, user_email, phone_number) 
VALUES ('Sam', 'Lee', '21', 'Male', 'N/A', 'leesamuel000@tamu.edu', '000-000-0000');