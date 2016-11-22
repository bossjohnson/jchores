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
    ];

    var months = [
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
    ];

    var now = new Date();
    var today = days[now.getDay()];
    var todaysDate = now.getDate();
    var month = now.getMonth();
    var monthName = months[month];
    var year = now.getFullYear();
    var firstDayOfMonth = days[new Date(year, month).getDay()];
    var monthStartsOn = days.indexOf(firstDayOfMonth);
    var numberOfDays = new Date(year, month + 1, 0).getDate();

    var daysInMonth = [];
    for (var i = 1; i <= numberOfDays; i++) {
      daysInMonth.push(i);
    }

    var calendarRows = [];
    var row = [];
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
