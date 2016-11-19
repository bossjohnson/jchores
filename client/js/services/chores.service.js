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

    var chores = {
        sunday: sunday,
        monday: monday,
        tuesday: tuesday,
        wednesday: wednesday,
        thursday: thursday,
        friday: friday,
        saturday: saturday
    };
    return chores;
}
