-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- Table for the main prompts in game, destination integers reference other prompts in same table
CREATE TABLE "prompts" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (800),
    "image_path" VARCHAR (200),
    "option_a" VARCHAR (80),
    "option_b" VARCHAR (80),
    "option_c" VARCHAR (80),
    "option_d" VARCHAR (80),
    "option_a_dest" integer,
    "option_b_dest" integer,
    "option_c_dest" integer,
    "option_d_dest" integer
);