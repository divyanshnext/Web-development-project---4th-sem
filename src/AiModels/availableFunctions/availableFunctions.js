import { getCurrentWeather, WriteJson, getRankByEmailId, getUsersInRange } from "../functions/functions.js";

const availableFunctions = {
    get_current_weather: getCurrentWeather,
    write_json: WriteJson,
    get_rank_by_email_id: getRankByEmailId,
    get_users_in_range: getUsersInRange
}; 

export default availableFunctions;
