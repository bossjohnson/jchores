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
