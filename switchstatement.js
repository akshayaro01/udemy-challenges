const d = new Date();
let dayNo = d.getDay(); // day no.

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; //weekday[3]
let day = weekday[dayNo]
switch (day) {
    case 'Monday':
        console.log("do programing")
        break;
    case 'Tuesday':
        console.log("do logical thinking")
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log("rest day")
        break;
    case 'Friday':
        console.log("designing day");
        break;
    case 'Saturday':
        console.log("editing day");
        break;
    case 'Sunday':
        console.log("upload dauy");
        break;
}

