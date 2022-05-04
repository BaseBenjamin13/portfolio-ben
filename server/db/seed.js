
const User = require('./models/users');
const userSeedData = require('./user.json');



User.deleteMany({})
    .then(() => {
        User.insertMany(userSeedData)
            .then((data) => {
                console.log(data);
            })
            .catch(console.error)
            .finally(() => process.exit())
    })