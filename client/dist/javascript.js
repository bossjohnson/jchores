var app=angular.module("J-Chores",["ui.router","ngMaterial"]);
!function(){function e(e,r,t){r.theme("default").primaryPalette("green"),e.state("show-chores",{url:"/show-chores",templateUrl:"views/show-chores.html",controller:"ChoresCtrl",controllerAs:"Chores"}).state("edit-chores",{url:"/edit-chores",templateUrl:"views/edit-chores.html",controller:"ChoresCtrl",controllerAs:"Chores"}).state("calendar",{url:"/calendar",templateUrl:"views/calendar.html",controller:"CalendarCtrl",controllerAs:"Calendar"}),t.otherwise("/show-chores")}app.config(e),e.$inject=["$stateProvider","$mdThemingProvider","$urlRouterProvider"]}();
!function(){function t(t,e){var n=this;n.states=["show-chores","edit-chores","calendar"],n.slideDir=null,t.$on("nav",function(t,s){var a=n.states.indexOf(e.current.name),r=n.states.indexOf(s);n.slideDir=a>r?"left":"right"}),t.$on("$stateChangeSuccess",function(){n.state=e.current.name})}app.controller("AppCtrl",t),t.$inject=["$scope","$state"]}();
!function(){function a(a,o,e){var t=this;t.days=o.days,t.monthName=o.monthName,t.todaysDate=o.todaysDate,t.daysInMonth=o.daysInMonth,t.rows=o.calendarRows,t.openDialog=function(a,o){function n(e,n){var l=o.indexOf(a);e.clicked=t.days[l],e.monthName=t.monthName,e.date=a,console.log(e)}var l=document.querySelectorAll(".calendar-day")[a-1];e.show({templateUrl:"views/partials/add_calendar_task.html",controller:n,clickOutsideToClose:!0,openFrom:l,closeTo:l}),n.$inject=["$scope","$mdDialog"]}}app.controller("CalendarCtrl",a),a.$inject=["$scope","DateService","$mdDialog"]}();
!function(){function o(o,e,t,s){var a=this;a.days=s.days,a.today=s.today,a.todaysDate=s.todaysDate,a.monthName=s.monthName,a.addChores={},t.getChores().then(function(o){a.chores=o.data}),t.allChores.then(function(o){a.allChores=o}),a.finish=function(o){var t=a.chores.indexOf(o),n=s.days.indexOf(a.today);a.chores.splice(t,1),e.post("/api/chores/daily/"+n+"/finish/"+o.id)},a.checkToggle=function(o,t){var s=a.allChores[o].indexOf(t);s<0?a.allChores[o].push(t):a.allChores[o].splice(s,1),console.log("chore, day:",o,t),e.post("/api/chores/"+o+"/toggle/"+t).then(function(o){console.log(o)})}}app.controller("ChoresCtrl",o),o.$inject=["$scope","$http","ChoresService","DateService"]}();
!function(){function t(t,e,a,n){var o=this;e(function(){o.today=n.today,o.todaysDate=n.todaysDate,o.monthName=n.monthName,o.currentNavItem=a.current.name},0),t.$on("$stateChangeSuccess",function(){o.state=a.current.name})}app.controller("HeaderCtrl",t),t.$inject=["$scope","$timeout","$state","DateService"]}();
!function(){function n(){return function(n){return n[0].toUpperCase()+n.slice(1)}}app.filter("capitalize",n)}();
!function(){function n(){return function(n){return n.replace(/-/g," ")}}app.filter("undash",n)}();
!function(){function e(e,t){var r=function(){return e.get("/api/chores/daily/"+t.today)},a=function(){return e.get("/api/chores/all").then(function(e){for(var t={},r=0;r<e.data.length;r++){var a=e.data[r],n=a.chore;t[n]||(t[n]=[]),t[n].indexOf(a.day)<0&&t[n].push(a.day)}return t})};return{getChores:r,getAllChores:a,allChores:a()}}app.factory("ChoresService",e),e.$inject=["$http","DateService"]}();
!function(){function a(){for(var a=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],e=["january","february","march","april","may","june","july","august","september","october","november","december"],t=new Date,n=a[t.getDay()],r=t.getDate(),u=t.getMonth(),o=e[u],s=t.getFullYear(),y=a[new Date(s,u).getDay()],d=a.indexOf(y),h=new Date(s,u+1,0).getDate(),f=[],m=1;m<=h;m++)f.push(m);var D=[],p=[];for(m=0;m<d;m++)p.push(null);for(m=1;m<=h;m++)p.length<7?p.push(m):(D.push(p),p=[m]);return D.push(p),{days:a,months:e,today:n,todaysDate:r,month:u,monthName:o,firstDayOfMonth:y,monthStartsOn:d,numberOfDays:h,daysInMonth:f,calendarRows:D}}app.factory("DateService",a)}();
