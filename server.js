//  everythnig server related

const mongoose = require("mongoose");
require("dotenv/config");

const app = require("./app");

const DB = process.env.DATABASE_LOCAL;

mongoose.connect(DB, {}).then(() => console.log("db connected!"));

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, (error) => {
  if (!error) console.log(`Server running on ${PORT}`);
  else console.log(`error occured`);
});
