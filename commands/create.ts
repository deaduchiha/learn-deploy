import { mkdir, writeFile } from "node:fs";

export const createFolder = (folderName: string) => {
  mkdir(folderName, { recursive: true }, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Directory created");
    }
  });
};

export const createFile = (fileName: string, content: string) => {
  writeFile(fileName, content, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File created");
    }
  });
};
