CREATE TABLE chores (
  id serial PRIMARY KEY,
  name varchar(40)
);

CREATE TABLE days (
  id serial PRIMARY KEY,
  name varchar(9)
);

CREATE TABLE chores_days (
  chores_id integer REFERENCES chores(id),
  days_id integer REFERENCES days(id),
  finished boolean DEFAULT false,
  PRIMARY KEY(chores_id, days_id)
);

CREATE TABLE deferred_chores (
  id serial PRIMARY KEY,
  name varchar(40),
  finished boolean,
  defer_date date
);

CREATE TABLE calendar_tasks (
  id serial PRIMARY KEY,
  name varchar(50),
  finished boolean,
  task_date date
);

CREATE TABLE users (
  id serial PRIMARY KEY,
  username varchar(20),
  first_name varchar(20),
  last_name varchar(20),
  password varchar(50),
  score integer
);
