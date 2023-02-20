// moment js was not working so I used dayjs instead
//I think its because its depricated.
var now = dayjs();
now.format("dddd,h,m");

console.log(now);

var text = $('.textarea');
var saveBtn = $('.saveBtn');
var hour = dayjs().hour();

function reloadStorage()
{
    for (let i = 9; i < 18; i++) 
    {
        let currentText = localStorage.getItem(i);
        $("#" + i).val(currentText);
    }
}

function save(textID)
{
    //save button
    //save to local storage
    currentText = $("#" + textID);
    let text = currentText.val();
    console.log(text);
    localStorage.setItem(textID, text); 
}

function displayColors()
{
    //updates color after each event, //and or change in hour?
    //clear button
    for (let i = 9; i < 18; i++) 
    {   
        currentElement = $("#" + i);
        //hour = now.$H;
        //hour = 2; //for testing purposes

        if (i > hour)
        {
            currentElement.removeClass("past");
            currentElement.removeClass("present");
            currentElement.addClass("future");
        }
        else if (i == hour)
        {
            currentElement.removeClass("past");
            currentElement.removeClass("future");
            currentElement.addClass("present");
        }
        else
        {
            currentElement.removeClass("present");
            currentElement.removeClass("future");
            currentElement.addClass("past");
        }
    }
}

displayColors();
reloadStorage();
