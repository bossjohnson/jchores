(function() {
  app.factory('DateService', DateService);

  function DateService() {

    var days = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday'
      ],
      months = [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december'
      ],
      now = new Date(),
      today = days[now.getDay()],
      todaysDate = now.getDate(),
      month = now.getMonth(),
      monthName = months[month],
      year = now.getFullYear(),
      firstDayOfMonth = days[new Date(year, month).getDay()],
      monthStartsOn = days.indexOf(firstDayOfMonth),
      numberOfDays = new Date(year, month + 1, 0).getDate(),
      daysInMonth = [];

    for (var i = 1; i <= numberOfDays; i++) {
      daysInMonth.push(new Date(year, month, i));
    }

    var calendarRows = [],
      row = [];
    for (i = 0; i < monthStartsOn; i++) {
      row.push(null);
    }
    for (i = 1; i <= numberOfDays; i++) {
      if (row.length < 7) {
        row.push(i);
      } else {
        calendarRows.push(row);
        row = [i];
      }
    }
    calendarRows.push(row);

    return {
      days: days,
      months: months,
      today: today,
      todaysDate: todaysDate,
      month: month,
      monthName: monthName,
      firstDayOfMonth: firstDayOfMonth,
      monthStartsOn: monthStartsOn,
      numberOfDays: numberOfDays,
      daysInMonth: daysInMonth,
      calendarRows: calendarRows
    };
  }
}());
