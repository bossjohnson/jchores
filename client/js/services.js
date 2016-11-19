app.factory('ChoresService', ChoresService);

ChoresService.$inject = ['$http', 'DateService'];

function ChoresService($http, DateService) {

    var sunday = ['Cook dinner', 'Do the dishes', 'Mow the lawn'];
    var monday = ['Clean up dinner', 'Put laundry away', 'Do the dishes'];
    var tuesday = ['Cook dinner', 'Take out the trash'];
    var wednesday = ['Clean up dinner', 'Bring trash can in', 'Do the dishes'];
    var thursday = [];
    var friday = ['Clean up dinner', 'Do the dishes'];
    var saturday = [];

    // $http.get('/api/chores/by/day').then(function(data) {
    //         console.log(data.data);
    //     })
    // $http.get('/api/chores/all').then(function(data) {
    //     console.log(data.data.rows);
    // })



    var chores = {
        sunday,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday
    };
    return chores;
}

app.factory('Days', Days);

function Days() {
    return [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday'
    ];
}

app.factory('Months', Months);

function Months() {
    return [
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
}

app.factory('DateService', DateService);
DateService.$inject = ['Days', 'Months'];

function DateService(Days, Months) {
    var now = new Date();
    var today = Days[now.getDay()];
    var todaysDate = now.getDate();
    var month = Months[now.getMonth()];

        return {
            today,
            todaysDate,
            month
        };
}
