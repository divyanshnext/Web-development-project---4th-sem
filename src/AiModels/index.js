import {

    getCurrentWeather,
    getRankByEmailId,
    WriteJson,
    getUsersInRange,

} from "./functions/functions.js";
import tool from "./tool/tool.js";
import availableFunctions from "./availableFunctions/availableFunctions.js";


export const model = {
getCurrentWeather,
tool,
availableFunctions,
getRankByEmailId,
WriteJson,
getUsersInRange
};