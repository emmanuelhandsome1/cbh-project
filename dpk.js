const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  let candidate;
  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }
  return candidate;
}

exports.deterministicCandidate = (event) => {
  let candidate = this.deterministicPartitionKey(event);
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256
  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }
    else if (candidate.length > MAX_PARTITION_KEY_LENGTH){
      candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
    }
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }
  return candidate;
}

