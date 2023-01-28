// moment js was not working so I used dayjs instead
var now = dayjs();
now.format("dddd,h,m");

console.log(now);

var text = $('.textarea');
var saveBtn = $('.saveBtn');
var hour = dayjs().hour();

// saveBtn.on('click', function() {