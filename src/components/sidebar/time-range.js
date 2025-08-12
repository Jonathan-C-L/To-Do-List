import { createNewContainer, createNewElement } from "../lib/lib.js";
export { renderTimeRange };

// functions
function renderTimeRange(){
    const times = [createDay(), createWeek(), createMonth()];
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
    week.textContent = "7 Days";

    return week;
}
function createMonth(){
    const month = createNewElement("button", "month");
    month.textContent = "Month";

    return month;
}