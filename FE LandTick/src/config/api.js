// set config defaults when creating the instance
const token = localStorage.getItem("token");
export const API = {
  baseURL: "https://breednder-api.herokuapp.com/api/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`
  }
};

// localStorage.setItem('itemName', value)
// localStorage.getItem('itemName')

// export const setAuthToken = token => {
//   API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// };

// url: "https://breednder-api.herokuapp.com/api/v1/user",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         Authorization: `Bearer ${token}`
//       }
