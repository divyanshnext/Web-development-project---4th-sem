const filePath = 'data.json';
import { error } from 'console';
import { readFile, writeFile } from 'fs/promises';
export const getCurrentWeather = (functionArgs)=> {
  console.log("getWeather has been called");
  const location = functionArgs.location;
  const unit = functionArgs.unit || "fahrenheit";
  
    if (location.toLowerCase().includes("tokyo")) {
      return JSON.stringify({ location: "Tokyo", temperature: "10", unit: "celsius" });
    } else if (location.toLowerCase().includes("san francisco")) {
      return JSON.stringify({ location: "San Francisco", temperature: "72", unit: "fahrenheit" });
    } else if (location.toLowerCase().includes("paris")) {
      return JSON.stringify({ location: "Paris", temperature: "22", unit: "fahrenheit" });
    } else {
      return JSON.stringify({ location, temperature: "unknown" });
    }
  }

 export const WriteJson = async (object) => {
    try {
        // Read the existing JSON data from the file
        let data = await readFile(filePath, 'utf8');
        let jsonData = JSON.parse(data);

        // Check if an object with the same email already exists
        const existingIndex = jsonData.findIndex(item => item.email === object.email);

        if (existingIndex !== -1) {
            // If an object with the same email exists, overwrite it
            jsonData[existingIndex] = object;
        } else {
            // If the email is unique, add the object to the array
            jsonData.push(object);
        }

        // Convert the updated JSON data back to a string
        const updatedJsonData = JSON.stringify(jsonData, null, 2);

        // Write the updated JSON data back to the file
        await writeFile(filePath, updatedJsonData, 'utf8');
        console.log("Object added successfully to", filePath);
        return `data added successfully `;
    } catch (error) {
        console.error("Error:", error);
        return `error while adding data`;
    }
}

export const getRankByEmailId = async (functionArgs) =>{
  console.log("getRankByEmailId called")
  if(functionArgs.email){
  const emailId = functionArgs.email;
  
  
  try {
      // Read the existing JSON data from the file
      let data = await readFile(filePath, 'utf8');
      let jsonData = JSON.parse(data);

      // Sort the JSON data based on the score
      jsonData.sort((a, b) => b.score - a.score);

      // Find the index of the specified email ID
      const rank = await jsonData.findIndex(item => item.email === emailId) + 1;

      if (rank === 0) {
          console.log("Email ID not found.");
          return `email ${emailId} not found`;
      } else {
          console.log(`Rank of ${emailId} based on score: ${rank}`);
          return `Rank of ${emailId} based on score: ${rank}`;
      }
  } catch (error) {
      console.error("Error:", error);
  }
}
  return `emailId argument is not passed correctly`;
}

export const getUsersInRange = async (functionArgs)=> {
  
    const startRank = functionArgs.startRank;
    const endRank = functionArgs.endRank
  try {
      // Read the existing JSON data from the file
      let data = await readFile(filePath, 'utf8');
      let jsonData = JSON.parse(data);

      // Sort the JSON data based on the score in descending order
      jsonData.sort((a, b) => b.score - a.score);

      // Get the users within the specified range of ranks
      const usersInRange = jsonData.slice(startRank - 1, endRank);

      // Log the users within the specified range
      console.log("Users within the specified range:");
      console.log(usersInRange);
      return usersInRange;
  } catch (error) {
      console.error("Error:", error);
      return `there was some issue while searching for user`;
  };
}