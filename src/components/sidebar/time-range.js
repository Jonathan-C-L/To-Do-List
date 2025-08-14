import { createNewContainer, createNewElement } from "../lib/lib.js";
export { renderTimeRange };

// functions
function renderTimeRange(){
    const times = [createDay(), createWeek(), createMonth(), createAll()];
    const timeRange = createNewContainer("time-range", times);
    return timeRange;
}
function createDay(){
    const day = createNewElement("button", "day");
    day.textContent = "Today";

    return day;
}
function createWeek(){
    const week = createNewElement("button", "week");
    week.textContent = "Week";

    return week;
}
function createMonth(){
    const month = createNewElement("button", "month");
    month.textContent = "Month";

    return month;
}
function createAll(){
    const all = createNewElement("button", "all-time-ranges");
    all.textContent = "All";
    
    return all;
}