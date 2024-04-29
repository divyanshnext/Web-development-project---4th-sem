const tool = [
  {
    type: "function",
    function: {
      name: "get_current_weather",
      description: "Get the current weather in a given location",
      parameters: {
        type: "object",
        properties: {
          location: {
            type: "string",
            description: "The city and state, e.g. San Francisco, CA",
          },
          unit: { type: "string", enum: ["celsius", "fahrenheit"] },
        },
        required: ["location"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "write_json",
      description: `Writes Json data for user to a file `,
      parameters: {
        type: "object",
        properties: {
          name: {
            type:"string",
            description: "name of the user",
          },
          email:{
            type:"string",
            description:"email of the user",
          },
          technicalSkills:{
            type:"string",
            description:"technicalskills of user"
          },
          score:{
            type:"number",
            description:"score of the user on basis of cv .eg. A person having skills Node.js, JavaScript has been scored '50'."
          }
        },
        required: ["name","email","score"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "get_rank_by_email_id",
      description: "Get the rank of a user based on their email ID and score",
      parameters: {
        type: "object",
        properties: {
          email: {
            type: "string",
            description: "The email ID of the user",
          },
        },
        required: ["email"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "get_users_in_range",
      description: "Get users within a specified range of ranks based on their scores",
      parameters: {
        type: "object",
        properties: {
          startRank: {
            type: "number",
            description: "The starting rank",
          },
          endRank: {
            type: "number",
            description: "The ending rank",
          },
        },
        required: ["startRank", "endRank"],
      },
    },
  },
];

export default tool;
