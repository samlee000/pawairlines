CREATE DATABASE flightslist;

CREATE TABLE flights(
    flight_id SERIAL PRIMARY KEY, 
    description VARCHAR(255)
);