const getExpeditious = require("express-expeditious");

const instance = {
    namespace: "cache",
    defaultTtl: "1 hour",
    statusCodeExpires: {
        404: "1 minute",
        500: "1 minute",
    },
}
  

const cacheInit = getExpeditious(instance);

module.exports = { cacheInit };
