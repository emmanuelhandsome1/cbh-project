const { deterministicPartitionKey, deterministicCandidate } = require("./dpk.js");
const crypto = require("crypto");
const { it, expect, describe } = require("vitest");

describe("deterministicPartitionKey", () => {
  it("this returns the candidate with value of partitionKey less than 256 character string", () => {
    const event = {partitionKey: "Emmanuel"}
    const candidate = deterministicPartitionKey(event);
    expect(candidate).toBe("Emmanuel");
  });

  it("this returns candidate that is encrypted with crypto when there is no partitionKey", () => {
    const event = {newKey: 565656}
    const candidate = deterministicPartitionKey(event);
    expect(candidate).toBe(crypto.createHash("sha3-512").update(JSON.stringify({newKey: 565656})).digest("hex"));
  });

  it("this returns candidate that is encrypted with crypto for input that is not an object", () => {
    const event = 'emmanuel'
    const candidate = deterministicPartitionKey(event);
    expect(candidate).toBe(crypto.createHash("sha3-512").update(JSON.stringify('emmanuel')).digest("hex"));
  });
});

describe("deterministicCandidate", () => {
  it("this returns the candidate with value of partitionKey greater than 256 character string", () => {
    const event = {partitionKey: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}
    const candidate = deterministicCandidate(event);
    expect(candidate).toBe(crypto.createHash("sha3-512").update(event.partitionKey).digest("hex"));
  });

  it("this returns a candidate that is stingified when the value of partitionKey is not a string", () => {
    const event = {partitionKey: 565656}
    const candidate = deterministicCandidate(event);
    expect(candidate).toBe(JSON.stringify(565656));
  });

  it("this returns zero when there is no input", () => {
    const trivialKey = deterministicCandidate();
    expect(trivialKey).toBe("0");
  });
})

