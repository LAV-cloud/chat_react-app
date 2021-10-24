const bCrypt = require('bcrypt');

const password = '1234';
const saltRounds = 10;

bCrypt.genSalt(saltRounds, (err, salt) => {
  if (err) {
    throw err;
  } else {
    bCrypt.hash(password, salt, (err, hash) => {
      if (err) {
        throw err;
      } else {
        console.log(hash);
        console.log(bCrypt.compareSync(password, hash));
      }
    });
  }
});
