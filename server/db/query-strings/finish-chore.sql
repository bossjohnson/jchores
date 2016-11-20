UPDATE chores_days
SET finished = TRUE
WHERE days_id = $1
  AND chores_id = $2;
