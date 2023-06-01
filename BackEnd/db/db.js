const mongoose = require('mongoose')
const DB = process.env.DATABASE;
module.exports = function (callback) {
    mongoose.connect(DB, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("---" + err)
        else {
            console.log("Connected to mongoDB")
            // mongoose.set('strictQuery', false); // fetchData from DB
            const pagesData = await mongoose.connection.db.collection("pagesInfo");
            pagesData.find({}).toArray(function (err, pagesdata) {
                if (err) { console.log(err); }
                else {
                    global.pagesInfo = pagesdata;
                }
            })
            const vegetablesData = await mongoose.connection.db.collection("vegetablesInfo");
            vegetablesData.find({}).toArray(function (err, vegetablesdata) {
                if (err) { console.log(err); }
                else {
                    global.vegetablesInfo = vegetablesdata;
                }
            }
            );
            const fruitsData = await mongoose.connection.db.collection("fruitsInfo");
            fruitsData.find({}).toArray(function (err, fruitsdata) {
                if (err) { console.log(err); }
                else {
                    global.vegetablesInfo = fruitsdata;
                }
            }
            );
        };
    })
};
// const foodCollection = await mongoose.connection.db.collection("food_items");
// foodCollection.find({}).toArray(async function (err, data) {
//     const categoryCollection = await mongoose.connection.db.collection("Categories");
//     categoryCollection.find({}).toArray(async function (err, Catdata) {
//         callback(err, data, Catdata);

//     })
// });
// listCollections({name: 'food_items'}).toArray(function (err, database) {
// });
//     module.exports.Collection = database;
// });
