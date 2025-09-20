import fs from "node:fs";

// create utils folder
fs.mkdir("utils", { recursive: true }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("utils folder created");
  }
});

// create service.ts file
fs.writeFile(
  "utils/service.ts",
  `
  import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = \`Bearer \${token}\`;
  }

  return config;
});

api.interceptors.response.use((response) => {
  return response.data;
});
`,
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("service.ts file created");
    }
  }
);
