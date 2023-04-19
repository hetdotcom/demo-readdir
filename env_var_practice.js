const { log } = require("console");
require("dotenv").config();

log(process.env.USER_ID, process.env.USER_NAME);
