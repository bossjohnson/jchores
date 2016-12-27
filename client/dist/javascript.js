var app=angular.module("J-Chores",["ui.router","ngMaterial","ngResource"]);
!function(){function e(e,r,t){r.theme("default").primaryPalette("green"),e.state("show-chores",{url:"/show-chores",templateUrl:"views/show-chores.html",controller:"ChoresCtrl",controllerAs:"Chores"}).state("edit-chores",{url:"/edit-chores",templateUrl:"views/edit-chores.html",controller:"ChoresCtrl",controllerAs:"Chores"}).state("calendar",{url:"/calendar",templateUrl:"views/calendar.html",controller:"CalendarCtrl",controllerAs:"Calendar"}),t.otherwise("/show-chores")}app.config(e),e.$inject=["$stateProvider","$mdThemingProvider","$urlRouterProvider"]}();
!function(){function t(t,e){var n=this;n.states=["show-chores","edit-chores","calendar"],n.slideDir=null,t.$on("nav",function(t,s){var a=n.states.indexOf(e.current.name),r=n.states.indexOf(s);n.slideDir=a>r?"left":"right"}),t.$on("$stateChangeSuccess",function(){n.state=e.current.name})}app.controller("AppCtrl",t),t.$inject=["$scope","$state"]}();
!function(){function a(a,e,o,t){var n=this,s=t;n.days=e.days,n.monthName=e.monthName,n.todaysDate=e.todaysDate,n.daysInMonth=e.daysInMonth,n.rows=e.calendarRows,n.tasks=s.query(),n.openDialog=function(a,t){function d(o,d){var l=t.indexOf(a);o.clicked=n.days[l],o.monthName=n.monthName,o.date=a,o.task={},o._date=e.daysInMonth[a-1],o.addTask=function(){var a=new s;a.name=o.task.name,a.date=o._date,console.log("task:",a),a.$save()}}var l=document.querySelectorAll(".calendar-day")[a-1];o.show({templateUrl:"views/partials/add_calendar_task.html",controller:d,clickOutsideToClose:!0,openFrom:l,closeTo:l}),d.$inject=["$scope","$mdDialog"]}}app.controller("CalendarCtrl",a),a.$inject=["$scope","DateService","$mdDialog","TasksResource"]}();
!function(){function e(e,a,t,o,s,n){var r=this;r.view={addNewChore:!1},r.days=o.days,r.today=o.today,r.todaysDate=o.todaysDate,r.monthName=o.monthName,r.chores=t.getDailyChores(),r.allChores=t.getAllChores(),r.finish=function(e){var a=r.chores.indexOf(e);r.chores.splice(a,1),e.finished=new Date,e.$save()},r.checkToggle=function(e,a){var t=e.days.indexOf(a);t<0?(e.days.push(a),e.finished=new Date(0)):e.days.splice(t,1),e.$save()},r.addNew=function(){var e=t.newChore();e.$save(),r.allChores.push(e),n(function(){var e=document.getElementsByTagName("input");angular.element(e[e.length-1]).focus()})},r.deleteChore=function(e){var a=r.allChores.indexOf(e);r.allChores.splice(a,1),e.$delete()}}app.controller("ChoresCtrl",e),e.$inject=["$scope","$http","ChoresService","DateService","$resource","$timeout"]}();
!function(){function t(t,e,a,n){var o=this;e(function(){o.today=n.today,o.todaysDate=n.todaysDate,o.monthName=n.monthName,o.currentNavItem=a.current.name},0),t.$on("$stateChangeSuccess",function(){o.state=a.current.name})}app.controller("HeaderCtrl",t),t.$inject=["$scope","$timeout","$state","DateService"]}();
!function(){function e(e,n,r){var t=r,u=function(){return t.query(function(e){return e})},o=function(){return t.all(function(e){return e})},c=function(){return new t};return{getDailyChores:u,getAllChores:o,newChore:c}}app.factory("ChoresService",e),e.$inject=["$http","DateService","ChoresResource"]}();
!function(){function e(){for(var e=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],a=["january","february","march","april","may","june","july","august","september","october","november","december"],t=new Date,n=e[t.getDay()],r=t.getDate(),u=t.getMonth(),o=a[u],s=t.getFullYear(),y=e[new Date(s,u).getDay()],d=e.indexOf(y),h=new Date(s,u+1,0).getDate(),f=[],m=1;m<=h;m++)f.push(new Date(s,u,m));var D=[],p=[];for(m=0;m<d;m++)p.push(null);for(m=1;m<=h;m++)p.length<7?p.push(m):(D.push(p),p=[m]);return D.push(p),{days:e,months:a,today:n,todaysDate:r,month:u,monthName:o,firstDayOfMonth:y,monthStartsOn:d,numberOfDays:h,daysInMonth:f,calendarRows:D}}app.factory("DateService",e)}();
!function(){function e(e,r){var a={all:{url:"/api/chores/all",method:"get",isArray:!0}},o={day:r.today,choreId:"@_id"};return e("/api/chores",o,a)}app.factory("ChoresResource",e),e.$inject=["$resource","DateService"]}();
!function(){function e(e,c){return e("/api/tasks")}app.factory("TasksResource",e),e.$inject=["$resource","DateService"]}();
!function(){function n(){return function(n){return n[0].toUpperCase()+n.slice(1)}}app.filter("capitalize",n)}();
!function(){function n(){return function(n){return n.replace(/-/g," ")}}app.filter("undash",n)}();