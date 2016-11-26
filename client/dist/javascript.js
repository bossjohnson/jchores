var app=angular.module("J-Chores",["ui.router","ngMaterial"]);
!function(){function e(e,r,t){r.theme("default").primaryPalette("green"),e.state("show-chores",{url:"/show-chores",templateUrl:"views/show-chores.html",controller:"ChoresCtrl",controllerAs:"Chores"}).state("edit-chores",{url:"/edit-chores",templateUrl:"views/edit-chores.html",controller:"ChoresCtrl",controllerAs:"Chores"}).state("calendar",{url:"/calendar",templateUrl:"views/calendar.html",controller:"CalendarCtrl",controllerAs:"Calendar"}),t.otherwise("/show-chores")}app.config(e),e.$inject=["$stateProvider","$mdThemingProvider","$urlRouterProvider"]}();
!function(){function t(t,e){var n=this;n.states=["show-chores","edit-chores","calendar"],n.slideDir=null,t.$on("nav",function(t,s){var a=n.states.indexOf(e.current.name),r=n.states.indexOf(s);n.slideDir=a>r?"left":"right"}),t.$on("$stateChangeSuccess",function(){n.state=e.current.name})}app.controller("AppCtrl",t),t.$inject=["$scope","$state"]}();
!function(){function a(a,t){var n=this;n.days=t.days,n.monthName=t.monthName,n.todaysDate=t.todaysDate,n.daysInMonth=t.daysInMonth,n.rows=t.calendarRows}app.controller("CalendarCtrl",a),a.$inject=["$scope","DateService"]}();
!function(){function e(e,o,t,a){var s=this;s.days=a.days,s.today=a.today,s.todaysDate=a.todaysDate,s.monthName=a.monthName,s.addChores={},t.getChores.then(function(e){s.chores=e}),s.finish=function(e){var t=s.chores.indexOf(e),i=a.days.indexOf(s.today);s.chores.splice(t,1),o.post("/api/chores/daily/"+i+"/finish/"+e.id)}}app.controller("ChoresCtrl",e),e.$inject=["$scope","$http","ChoresService","DateService"]}();
!function(){function t(t,e,a,n){var o=this;e(function(){o.today=n.today,o.todaysDate=n.todaysDate,o.monthName=n.monthName,o.currentNavItem=a.current.name},0),t.$on("$stateChangeSuccess",function(){o.state=a.current.name})}app.controller("HeaderCtrl",t),t.$inject=["$scope","$timeout","$state","DateService"]}();
!function(){function t(t,e){function n(t){}var i=new Promise(function(n,i){t.get("/api/chores/daily/"+e.today).then(function(t){n(t.data)})});return{getChores:i,finish:n}}app.factory("ChoresService",t),t.$inject=["$http","DateService"]}();
!function(){function a(){for(var a=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],e=["january","february","march","april","may","june","july","august","september","october","november","december"],t=new Date,n=a[t.getDay()],r=t.getDate(),u=t.getMonth(),o=e[u],s=t.getFullYear(),y=a[new Date(s,u).getDay()],d=a.indexOf(y),h=new Date(s,u+1,0).getDate(),f=[],m=1;m<=h;m++)f.push(m);var D=[],p=[];for(m=0;m<d;m++)p.push(null);for(m=1;m<=h;m++)p.length<7?p.push(m):(D.push(p),p=[m]);return D.push(p),{days:a,months:e,today:n,todaysDate:r,month:u,monthName:o,firstDayOfMonth:y,monthStartsOn:d,numberOfDays:h,daysInMonth:f,calendarRows:D}}app.factory("DateService",a)}();
!function(){function n(){return function(n){return n[0].toUpperCase()+n.slice(1)}}app.filter("capitalize",n)}();
!function(){function n(){return function(n){return n.replace(/-/g," ")}}app.filter("undash",n)}();