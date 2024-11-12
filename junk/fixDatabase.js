const fs = require("fs");
const readline = require("readline");
const path = require("path");

// Path to the input file (change this to your file path)
const inputFilePath = path.join(__dirname, "Database.ts");
// Path to the output file (optional, if you want to write the processed results)
const outputFilePath = path.join(__dirname, "DatabaseGlobal.ts");

// Create a readable stream from the input file
const fileStream = fs.createReadStream(inputFilePath);

// Create an interface for reading the file line by line
const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});

// Open a writable stream for the output file (optional)
const outputStream = fs.createWriteStream(outputFilePath);

const interfaces = [];
let output = "";

rl.on("line", (line) => {
  //   line = line.trim(); // Trim whitespace

  // Check if the line declares an interface
  const interfaceMatch = line.match(/export interface (\w+)/);
  if (interfaceMatch) {
    interfaces.push(interfaceMatch[1]);

    const noExportLine = line.replace("export ", "") + "\n";

    output += noExportLine;

    // outputStream.write(line.replace("export ", "") + "\n");
  } else {
    output += line + "\n";
    // outputStream.write(line + "\n");
  }
});

// After reading the entire file
rl.on("close", () => {
  const ddd = `

export type DB2 = {
    ${interfaces.map((i) => `${i}:${i} `).join(" \n")}
};
  `;
  output += ddd;
  outputStream.write(output);
  outputStream.end();
  console.log("Processing complete. Output written to", outputFilePath);
});
