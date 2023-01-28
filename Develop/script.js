// moment js was not working so I used dayjs instead
const dayjs = require('dayjs');
var now = dayjs;;
now.format(dddd,h,m);

console.lo(now.toString());

var text = $('.textarea');
var saveBtn = $('.saveBtn');
var hour = moment().hour();

// saveBtn.on('click', function() {