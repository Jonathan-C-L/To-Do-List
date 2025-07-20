import { CreateNewContainer, CreateNewDiv } from "../lib/lib.js";
export { TimeRange };

const sidebar = document.querySelector(".sidebar");

function TimeRange(){
    const times = [CreateDay(), CreateWeek(), CreateMonth()];
    const timeRange = CreateNewContainer("time-range", times);
    sidebar.appendChild(timeRange);
}
function CreateDay(){
    const day = CreateNewDiv("day");
    const title = document.createElement("h1");
    const count = CreateNewDiv("count");
    title.textContent = "Today";
    day.appendChild(title);
    day.appendChild(count);

    return day;
}
function CreateWeek(){
    const week = CreateNewDiv("week");
    const title = document.createElement("h1");
    const count = CreateNewDiv("count");
    title.textContent = "7 Days";
    week.appendChild(title);
    week.appendChild(count);

    return week;
}
function CreateMonth(){
    const month = CreateNewDiv("month");
    const title = document.createElement("h1");
    const count = CreateNewDiv("count");
    title.textContent = "Month";
    month.appendChild(title);
    month.appendChild(count);

    return month;
}