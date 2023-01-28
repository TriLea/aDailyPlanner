const m = moment();
console.lo(m.tostring());

$("#currentDay").text(moment().format("MMMM Do, YYYY"));


var text = $('.textarea');
var saveBtn = $('.saveBtn');
var hour = moment().hour();

// saveBtn.on('click', function() {