const crypto = require("node:crypto");

// Parameters
const password = "cypressdoesintrexx"; // Replace with the actual password
const salt = "1AB8565BDC35094439F5E2721ED64F23"; // Hexadecimal salt
const iterations = 10000; // Number of iterations
const keyLength = 32; // Desired key length in bytes

// Generate the hash

const k =
  "pbkdf2:hmacsha256:v1:32:10000:1AB8565BDC35094439F5E2721ED64F23:B858067721609356B9BE131412635A331F9FBC4A14610208B09C9B03B3B80615";
const prev = "pbkdf2:hmacsha256:v1:32:10000:";

function generatePBKDF2Hash(
  password,
  salt,
  iterations = 10000,
  keyLength = 32
) {
  const saltBuffer = Buffer.from(salt, "hex");
  const derivedKey = crypto.pbkdf2Sync(
    password,
    saltBuffer,
    iterations,
    keyLength,
    "sha256"
  );

  const prefix = "pbkdf2:hmacsha256:v1:32:10000:" + salt + ":";
  return prefix + derivedKey.toString("hex").toUpperCase();
}

function generateSalt(length = 32) {
  // Generate a random salt of the specified byte length
  return crypto
    .randomBytes(length / 2)
    .toString("hex")
    .toUpperCase(); // Convert to uppercase
}

const derivedKey = generatePBKDF2Hash(password, salt, iterations, keyLength);

console.log(`Derived Key: ${derivedKey}`);

console.log(`Derived Key: ${k}`);

console.log(derivedKey === k);
