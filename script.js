var timeHour;
var hour;

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var currentTime = moment().format("H");

$("button:submit").on("click", function () {
    var userInput = $("input:text") 

    for (var x = 0; x < userInput.length; x++) {
        var id = $(userInput[x]).closest("tr").attr('id');
        var input = $(userInput[x]).val();
        localStorage.setItem(id, input);
    }
});

var userInput = $("input:text")
for (var x = 0; x < userInput.length; x++) {
    var id = $(userInput[x]).closest("tr").attr('id');
    var input = localStorage.getItem(id)
    $(userInput[x]).val(input);
}

var timeArray = $(".hour").get();

for (var i = 0; i < timeArray.length; i++) {
    var trId = parseInt(timeArray[i].id);
    if (trId < parseInt(currentTime)) {
        timeArray[i].classList.add("past");
        var userHour = timeArray[i].id;
        var userText = localStorage.getItem(hour);
        timeArray[i].val = userText;

    } else if (trId > parseInt(currentTime)) {
        timeArray[i].classList.add("future");
        var userHour = timeArray[i].id;
        var userText = localStorage.getItem(hour);
        timeArray[i].val = userText;

    } else {
        timeArray[i].classList.add("present");
        var userHour = timeArray[i].id;
        var userText = localStorage.getItem(hour);
        timeArray[i].val = userText;
    }
}