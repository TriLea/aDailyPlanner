// moment js was not working so I used dayjs instead
var now = dayjs();
now.format("dddd,h,m");

console.log(now);

var text = $('.textarea');
var saveBtn = $('.saveBtn');
var hour = dayjs().hour();

//need dom hooks

function save()
{
    //save button onclick event
    //how to do in jquery syntax?
}

function saveToLocalStorage()
{
    //take from textarea?
}

function resetTextArea()
{
    //resets text area on page load
}

function displayColors()
{
    //updates color after each event, //and or change in hour?
    //clear button
    for (let i = 0; i < 9; i++) 
    {
        //should be for each row instead
    }
}

