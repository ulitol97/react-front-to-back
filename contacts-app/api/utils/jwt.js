const jwt = require("jsonwebtoken");

const createJWT = (user, expires, callback) => {
  const payload = {
    user: {
      id: user.id,
    },
  };

  jwt.sign(
    payload,
    process.env.JWT_SECRET,
    {
      expiresIn: 3600 * 4 || expires,
    },
    (err, jwt) => {
      if (err) throw err;
      callback(jwt);
    }
  );
};

module.exports = createJWT;
