
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$(document).ready(function(){
		
        var d 	= new Date();
        var mth = d.getMonth()+1;
        var yr 	= d.getFullYear();

        $("#month").val(mth);
        $("#year").val(yr);
        showCalendar (mth, yr);

        $("#month,#year").change(function(e) {
            showCalendar ($("#month").val(), $("#year").val());
        });
});


function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getYear(), anyDateInMonth.getMonth()+1, 0).getDate();
}


function showCalendar (mth, yr) {
		
    var firstDayOfMonth = mth + "/1/" + yr;
    var d = new Date( firstDayOfMonth );
    var numberOfDaysInMonth = daysInMonth(d);
    var firstDayOfWeek = d.getDay();

    var str = "<thead><tr>";
    daysOfTheWeek.forEach(function(dayOfWeek){
        str += '<th>' + dayOfWeek + '</th>';
    })
    str += "</tr></thead><tbody>";
    var monthStart = false;
    var dayOfMonth = 2;
    var numOfWeeks = 5;

    for(var w = 0; w < numOfWeeks; w++){
        str += "<tr>";
        for(var d = 0; d < 7; d++){
            if(monthStart){
                if(dayOfMonth <= numberOfDaysInMonth){
                    str += '<td class="date">' + dayOfMonth + '</td>';
                    dayOfMonth++;
                    if(numOfWeeks == 5 && d == 6 && dayOfMonth != numberOfDaysInMonth){
                        numOfWeeks = 6;
                    }
                }
            } else if(d == firstDayOfWeek) {
                monthStart = true;
                str += '<td class="date">1</td>';
            } else {
                str += '<td></td>';
            }
        }
        str += '</tr></tbody></table>';
    }

    document.querySelector("#results").innerHTML = str;
     
    var dates = document.querySelectorAll(".date");
    var yes = document.querySelector("#yes");
    var no = document.querySelector("#no");

    dates.forEach(function(date){
        date.addEventListener("click", function(){
            if(this.classList.contains("available")){
                this.classList.remove("available");
                this.classList.add("unavailable");
            } else if(this.classList.contains("unavailable")){
                this.classList.remove("unavailable");
            } else {
                this.classList.add("available");
            }
        })
    })

    yes.addEventListener("click", function(){
        dates.forEach(function(date){
            date.classList.remove("unavailable");
            date.classList.add("available");
        })
    })

    no.addEventListener("click", function(){
        dates.forEach(function(date){
            date.classList.remove("available");
            date.classList.add("unavailable");
        })
    })
    
}


