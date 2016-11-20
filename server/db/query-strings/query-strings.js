var getChoresByDay = 'SELECT days.name as day, chores.name as chore ' +
  'FROM chores ' +
  'JOIN chores_days ON (chores.id = chores_id) ' +
  'JOIN days ON (days.id = days_id) ' +
  'ORDER BY days.id;';

exports.getChoresByDay = getChoresByDay;

var getDailyChores = 'SELECT chores.name, chores.id ' +
  'FROM chores ' +
  'JOIN chores_days ON (chores.id = chores_id) ' +
  'JOIN days ON (days.id = days_id) ' +
  'WHERE days.name = $1;';

exports.getDailyChores = getDailyChores;
