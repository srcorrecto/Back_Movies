const jwt = require("jsonwebtoken")


const generateToken = (payload, isRefresh) => {
  if (isRefresh) {
    return jwt.sign(payload, process.env.SECRET_TOKEN, {
      expiresIn: "20min",
    });
  }
  return jwt.sign(payload, process.env.SECRET_TOKEN_REFRESH, {
    expiresIn: "90min",
  });
};

module.export = { generateToken };
