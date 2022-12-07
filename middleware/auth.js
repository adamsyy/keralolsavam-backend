// middle ware for getting the token from the header and verifying it

var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const checkAuth = async (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) {
      return res
        .status(401)
        .json({ msg: "No authentication token, access denied" });
    }
    const user = await admin.auth().verifyIdToken(token);
    if (!user) {
      return res
        .status(401)
        .json({ msg: "Token verification failed, authorization denied" });
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// sample axios call in frontend:
// const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/<path>`, {
//   headers: {
//     "x-auth-token": authToken,
//   },
// });

module.exports = checkAuth;
