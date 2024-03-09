CREATE DATABASE NAVANA;

-- use the database with \c navana --

CREATE EXTENSION  "pgcrypto";

-- create car_type enum

CREATE type car_type as enum ('Benzin', 'Diesel', 'Hybrid', 'Electric');

-- create cars table

CREATE TABLE car (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    model VARCHAR(255) NOT NULL,
    year INTEGER NOT NULL,
    color VARCHAR(50)[] NOT NULL,
    type car_type NOT NULL, 
    price INTEGER NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    description TEXT NOT NULL 
);

-- create news table

CREATE TABLE new (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

--  create comments table

CREATE TABLE comment (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    car_id UUID NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (car_id) REFERENCES car(id) ON DELETE CASCADE
);

-- create users table

CREATE TABLE users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255),
    role VARCHAR(255) DEFAULT 'user'
);


