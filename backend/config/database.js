// const mongoose = require("mongoose");
// const colors = require("colors")

// require("dotenv").config();
// exports.connect = () => {
//     mongoose.connect(process.env.MONGO_URL, {
//         // useNewUrlParser : true,
//         // useUnifiedTopology : true
//     })
//     .then(() => console.log(colors.green('Database Connected Successfully')))
//     .catch((error) => {
//         console.log(colors.red.underline('Database Connection Filed'))
//         confirm.error(error);
//         process.exit(1);
//     })
// };

const mongoose = require("mongoose");
const colors = require("colors");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGO_URL, {
        // useNewUrlParser and useUnifiedTopology are no longer needed in modern Mongoose versions
        // as they are enabled by default.
    })
    .then(() => console.log(colors.green('Database Connected Successfully')))
    .catch((error) => {
        console.log(colors.red.underline('Database Connection Failed')); // Fixed typo from 'Filed' to 'Failed'
        console.error(error); // Fixed confirm.error to console.error
        process.exit(1);
    });
};