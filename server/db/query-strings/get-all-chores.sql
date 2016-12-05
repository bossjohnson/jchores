SELECT chores.name AS chore,
       chores.id,
       days.name AS DAY
FROM chores
INNER JOIN chores_days ON (chores.id = chores_id)
INNER JOIN days ON (days.id = days_id);
