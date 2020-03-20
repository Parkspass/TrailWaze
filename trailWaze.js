 /*jshint esversion: 6 */
console.log('connected');
// Start of functions for the SVG circle
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
  
function setStop(id, radius, stop){
    var c = document.getElementById(id);
    c.className = "background";
    var stopVal = Math.PI * radius * 2 * (stop/10);
    c.setAttribute("stroke-dasharray", stopVal + ", 3000");
    c.setAttribute("stroke-dashoffset", stopVal);
    c.className = "overlayLine";
}
  
function randomStops(){
    setStop("line1", 35, getRandomIntInclusive(1, 10));
    setStop("line2", 55, getRandomIntInclusive(1, 10));
    setStop("line3", 75, getRandomIntInclusive(1, 10));
    setStop("line4", 95, getRandomIntInclusive(1, 10));
    setStop("line5", 105, getRandomIntInclusive(1, 10));
    setStop("line6", 105, getRandomIntInclusive(1, 10));
    setStop("line7", 105, getRandomIntInclusive(1, 10));
    setStop("line8", 105, getRandomIntInclusive(1, 10));
}
randomStops();
// End of functions for SVG circle
  
Vue.use(Vuetify);
var app = new Vue({
    el: '#app',
    data: {
        todaysDate: "",
        currentTemp: "75",
        hour2: "",
        hour3: "",
        hour4: "",
        currentTempImage: "lightning_outline.png",
        seasonImage: "",
        popularTrailsStatus: "A little busy",
        parkingStatus: "As busy as it gets",
        shuttleStatus: "A little busy",
        entranceStatus: "A little busy",

        displaySeasonImage: true,
        hourly_Selected: true,
        daily_Selected: false,

    },
    methods: {
        getTodaysDate: function () {
            var date = new Date();
            var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var hours = date.getHours();
            var TOD;
            if (hours > 12){
                hours-=12;
                TOD = "PM";
            }else{
                TOD = "AM";
            }
            var minutes = date.getMinutes();
            if (minutes < 10){
                minutes = "0" + date.getMinutes();
            }
            var fulldate = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDay() + " " + hours + ":" + minutes + " " + TOD;
            this.todaysDate = fulldate;
            var month = date.getMonth() + 1;
            if (month > 6 & month < 9){
                this.seasonImage = "'images/summer.png'";
            }else if(month > 9 & month < 12){
                this.seasonImage = "'images/fall.png'";
            }else if(month > 12 | month < 3){
                this.seasonImage = "'images/winter.png'";
            }else{
                this.seasonImage = "'images/spring.png'";
            }

            this.hour2 = date.getHours() + 1;
            if (this.hour2 > 12){
                this.hour2-=12;
                TOD = "PM";
            }else{
                TOD = "AM";
            }
            this.hour2 = this.hour2 + " " + TOD;

            this.hour3 = date.getHours() + 3;
            if (this.hour3 > 12){
                this.hour3-=12;
                TOD = "PM";
            }else{
                TOD = "AM";
            }
            this.hour3 = this.hour3 + " " + TOD;

            this.hour4 = date.getHours() + 5;
            if (this.hour4 > 12){
                this.hour4-=12;
                TOD = "PM";
            }else{
                TOD = "AM";
            }
            this.hour4 = this.hour4 + " " + TOD;
        },
        hourlySelected: function(){
            console.log("Hourly selected");
            this.hourly_Selected = true;
            this.daily_Selected = false;
        },
        dailySelected: function(){
            console.log("Daily selected");
            this.hourly_Selected = false;
            this.daily_Selected = true;
        }
    },
    mounted() {
        this.getTodaysDate();
    }
        
});


// THIS SECTION NEEDED TO REGISTER SERVICE WORKER //
window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
                 .register('./sw.js');
    }
};

