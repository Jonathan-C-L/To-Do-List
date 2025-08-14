export { getDay, getMonth, getYear };

// gets a specific section of a date in the ISO format of "YYYY-MM-DD"
function getDay(dateString){
    return dateString.split("-")[2];
}
function getMonth(dateString){
    return dateString.split("-")[1];
}
function getYear(dateString){
    return dateString.split("-")[0];
}
