// moment js was not working so I used dayjs instead
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
        $("#" + i).text(currentText);
    }
}

function save(textID)
{
    //save button
    //save to local storage
    currentText = $("#" + textID);
    let text = currentText.text;
    localStorage.setItem(textID, text); 
}

function displayColors()
{
    //updates color after each event, //and or change in hour?
    //clear button
    for (let i = 9; i < 18; i++) 
    {   
        currentElement = $("#" + i);

        if (i > now.$H)
        {
            currentElement.removeClass("past");
            customElements.removeClass("present");
            currentElement.addClass("future");
        }
        else if (i == now.$H)
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
