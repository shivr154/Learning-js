// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// jab koi bhi match nhi hota to default execute hota hai
// jab break nhi lagate to sara code execute hota hai par default nhi hota

const month = 2

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feburary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Default code executed");
        break;
}

const month1 = "march"

switch (month1) {
    case "jan":
        console.log("Jan");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    default:
        console.log("default case");
        break;
}