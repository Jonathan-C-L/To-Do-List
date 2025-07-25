import { createNewContainer, createNewDiv } from "../lib/lib.js";
export { renderTimeRange };

// functions
function renderTimeRange(){
    const times = [createDay(), createWeek(), createMonth()];
    const timeRange = createNewContainer("time-range", times);
    return timeRange;
}
function createDay(){
    const day = createNewDiv("day");
    const title = document.createElement("div");
    const count = createNewDiv("count");
    title.textContent = "Today";
    day.appendChild(title);
    day.appendChild(count);

    return day;
}
function createWeek(){
    const week = createNewDiv("week");
    const title = document.createElement("div");
    const count = createNewDiv("count");
    title.textContent = "7 Days";
    week.appendChild(title);
    week.appendChild(count);

    return week;
}
function createMonth(){
    const month = createNewDiv("month");
    const title = document.createElement("div");
    const count = createNewDiv("count");
    title.textContent = "Month";
    month.appendChild(title);
    month.appendChild(count);

    return month;
}