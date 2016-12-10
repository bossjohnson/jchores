WITH _chores AS
  (SELECT id
   FROM chores
   WHERE chores.name = $1 ),
     _days AS
  (SELECT id
   FROM days
   WHERE days.name = $2 )
INSERT INTO chores_days
VALUES (_chores[0].id, _days[0].id);

-- SELECT *
-- FROM chores_days
-- INNER JOIN _chores ON (_chores.id = chores_id)
-- INNER JOIN _days ON (_days.id = days_id);

-- SELECT * FROM _days;
