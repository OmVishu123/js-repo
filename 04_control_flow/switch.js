const month = "March"


switch (month) {
    case "jan":
        console.log("Jan");
        break; // If break is not used it will run all the code present below except the default code
    case "Feb":
        console.log("Feb");
        break;
    case "March":
        console.log("March");
        break;
    case "April":
        console.log("April");
        break;

    default:
        console.log(`Default case`);
        break;
}