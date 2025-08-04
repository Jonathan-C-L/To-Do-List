import { createNewContainer, createNewElement } from "../lib/lib.js";
export { renderTimeRange };

// functions
function renderTimeRange(){
    const times = [createDay(), createWeek(), createMonth()];
    const timeRange = createNewContainer("time-range", times);
    return timeRange;
}
function createDay(){
    const day = createNewElement("div", "day");
    const title = document.createElement("div");
    title.textContent = "Today";
    day.appendChild(title);

    return day;
}
function createWeek(){
    const week = createNewElement("div", "week");
    const title = document.createElement("div");
    title.textContent = "7 Days";
    week.appendChild(title);

    return week;
}
function createMonth(){
    const month = createNewElement("div", "month");
    const title = document.createElement("div");
    title.textContent = "Month";
    month.appendChild(title);

    return month;
}