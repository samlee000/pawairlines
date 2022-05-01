CREATE DATABASE pawsairline;

CREATE TABLE flights(
    flight_id SERIAL PRIMARY KEY, 
    description VARCHAR(255)
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
);

CREATE TABLE baggage(
    baggage_id SERIAL PRIMARY KEY, 
    ticket_id VARCHAR(255),
    baggage_type VARCHAR(255)
);