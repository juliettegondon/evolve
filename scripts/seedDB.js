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
]}];

const exerciseSeed = [

  {  yearWeek: '2021-2',
    userID: 'fred',
  exerciseData:
  [
      {
        "day": "Monday",
        "activity": "Running",
        "duration": 50,
        "intensity": "High",
        "mood": "Up",
        "notes": "Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor"
    },
    {
        "day": "Tuesday",
        "activity": "Running",
        "duration": 50,
        "intensity": "High",
        "mood": "Up",
        "notes": "Proin hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan quam non, tristique tempor erat."
    },
    {
        "day": "Wednesday",
        "activity": "Running",
        "duration": 50,
        "intensity": "High",
        "mood": "Up",
        "notes": "Ut et turpis non nunc maximus mollis a vitae tortor. Pellentesque mattis risus ac quam laoreet cursus"
    },
    {
        "day": "Thursday",
        "activity": "Running",
        "duration": 50,
        "intensity": "High",
        "mood": "Up",
        "notes": "Nunc vehicula, erat eget laoreet condimentum, felis ante malesuada leo,"
    },
    {
        "day": "Friday",
        "activity": "Running",
        "duration": 50,
        "intensity": "High",
        "mood": "Up",
        "notes": "Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor"
    },
    {
        "day": "Saturday",
        "activity": "Running",
        "duration": 50,
        "intensity": "High",
        "mood": "Up",
        "notes": "Nulla bibendum magna nec sem pulvinar lobortis. Mauris et imperdiet urna"
    },
    {
        "day": "Sunday",
        "activity": "Running",
        "duration": 50,
        "intensity": "High",
        "mood": "Up",
        "notes": "Maecenas vel porta augue. Fusce mauris ex, dignissim et lacinia"
    }
]
}

];


const userSeed = [

  {  name: 'John Smith',
     email: 'john@company.com',
     displayname: 'John',
     password: '123456'
  },
  {  name: 'Heather Jones',
  email: 'Heather@zzz.com',
  displayname: 'Heather',
  password: '123456'
  },
  {  "name": "Marinda Carafrae",
     "email": "rinny@company.com",
     "displayName": "Rinny",
     "password": "123456"
  }
];
const mindSeed = [
  {  date: '123415',
     mood: 'tired',
     reflection: 'aldjfkadj',
     email: 'jg@evolve.us'
  },
  {  date: '123415',
     mood: 'really tired',
     reflection: 'aldjfkadjaa',
     email: 'jg@evolve.us'
  },
  {  date: '123415',
  mood: 'so tired',
  reflection: 'aldjfkadjaadgdsga',
  email: 'jg@evolve.us'
}
];


db.Health
  .remove({})
  .then(() => db.Health.collection.insertMany(healthSeed))
  .then(data => {
    console.log(data.result.n + " Health records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Exercise
  .remove({})
  .then(() => db.Exercise.collection.insertMany(exerciseSeed))
  .then(data => {
    console.log(data.result.n + " Exercise records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
/* 
  db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " User records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  }); */

  db.Mind
  .remove({})
  .then(() => db.Mind.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " User records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

