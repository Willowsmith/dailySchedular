var currentday = $('#currentDay');
var scheduleDisplayEl = $('#scheduleDisplay')
var h9 = $('h9');
var h9 = $('h10');
var h9 = $('h11');
var h9 = $('h12');
var h9 = $('h13');
var h9 = $('h14');
var h9 = $('h15');
var h9 = $('h16');
var h9 = $('h17');
var saveBtn = $('saveBtn');



function displayTime() {
    var rightNow = moment().format('dddd, MMMM do');
    currentday.text(rightNow);
  }