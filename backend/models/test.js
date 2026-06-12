const dns = require("dns");

dns.resolveSrv(
  "_mongodb._tcp.cluster0.s8hlm0h.mongodb.net",
  (err, records) => {
    if (err) {
      console.error("SRV Error:", err);
    } else {
      console.log("SRV Records:");
      console.log(records);
    }
  }
);