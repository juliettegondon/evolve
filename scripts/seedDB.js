const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/evolve"
);

const healthSeed = [

  {  yearWeek: '2021-2',
  userID: 'fred',
  healthData: 

  [
    {
        "day": "Monday",
        "bpSystolic": "100",
        "bpDiastolic": "85",
        "weight": "225",
        "sugarAM": "120",
        "sugarPM": "130",
        "sleep": "7",
        "notes": "Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor"
    },
    {
        "day": "Tuesday",
        "bpSystolic": "120",
        "bpDiastolic": "85",
        "weight": "225",
        "sugarAM": "120",
        "sugarPM": "130",
        "sleep": "7",
        "notes": "Proin hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan quam non, tristique tempor erat."
    },
    {
        "day": "Wednesday",
        "bpSystolic": "120",
        "bpDiastolic": "85",
        "weight": "225",
        "sugarAM": "120",
        "sugarPM": "130",
        "sleep": "7",
        "notes": "Ut et turpis non nunc maximus mollis a vitae tortor. Pellentesque mattis risus ac quam laoreet cursus"
    },
    {
        "day": "Thursday",
        "bpSystolic": "120",
        "bpDiastolic": "85",
        "weight": "225",
        "sugarAM": "120",
        "sugarPM": "130",
        "sleep": "7",
        "notes": "Nunc vehicula, erat eget laoreet condimentum, felis ante malesuada leo,"
    },
    {
        "day": "Friday",
        "bpSystolic": "120",
        "bpDiastolic": "85",
        "weight": "225",
        "sugarAM": "120",
        "sugarPM": "130",
        "sleep": "7",
        "notes": "Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor"
    },
    {
        "day": "Saturday",
        "bpSystolic": "120",
        "bpDiastolic": "85",
        "weight": "225",
        "sugarAM": "120",
        "sugarPM": "130",
        "sleep": "7",
        "notes": "Nulla bibendum magna nec sem pulvinar lobortis. Mauris et imperdiet urna"
    },
    {
        "day": "Sunday",
        "bpSystolic": "120",
        "bpDiastolic": "85",
        "weight": "225",
        "sugarAM": "120",
        "sugarPM": "130",
        "sleep": "7",
        "notes": "Maecenas vel porta augue. Fusce mauris ex, dignissim et lacinia"
    }
]}

];

db.Health
  .remove({})
  .then(() => db.Health.collection.insertMany(healthSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
