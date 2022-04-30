CREATE TABLE flights (
    flight_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

CREATE TABLE billing (
    bill_id SERIAL PRIMARY KEY,
    user_id SERIAL,
    routing_no SERIAL,
    subtotal DECIMAL(50, 2),
    total DECIMAL(50, 2)
);

CREATE TABLE tickets (
    ticket_id SERIAL PRIMARY KEY,
    flight_id SERIAL,
    user_id SERIAL,
    bill_id SERIAL,
    seat_number int,
    class VARCHAR(30),
    pets_carry_on boolean,
    price DECIMAL(50, 2)
);