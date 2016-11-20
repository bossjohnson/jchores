SELECT chores.name,
       chores.id
FROM chores
JOIN chores_days ON (chores.id = chores_id)
JOIN days ON (days.id = days_id)
WHERE days.name = $1
  AND finished = FALSE;
