import { Profile } from "./sidebar/profile.js";
import { TimeRange } from "./sidebar/time-range.js";
import { RenderLists } from "./sidebar/lists.js";
export { Sidebar };

function Sidebar(){
    Profile();
    TimeRange();
    RenderLists();
}