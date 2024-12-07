// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const authMiddleware = async (req, res, next) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       token = req.headers.authorization.split(" ")[1];
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       req.user = await User.findById(decoded.id).select("-password");
//       next();
//     } catch (error) {
//       res.status(401).json({ message: "Not authorized, token failed" });
//     }
//   }

//   if (!token) {
//     res.status(401).json({ message: "Not authorized, no token" });
//   }
// };

// module.exports = authMiddleware;

// const jwt = require("jsonwebtoken"); // Import the jwt library

// // Middleware to check if the user is authenticated
// const authMiddleware = (req, res, next) => {
//   const token = req.header("Authorization")?.replace("Bearer ", ""); // Extract token from the Authorization header

//   if (!token) {
//     return res.status(401).json({ message: "Unauthorized" }); // Token not found, send error response
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token using the secret key
//     req.user = decoded; // Attach the decoded user data to the request object
//     next(); // Proceed to the next middleware or route handler
//   } catch (error) {
//     console.error("Authentication error:", error);
//     return res.status(401).json({ message: "Invalid or expired token" }); // Invalid token, send error response
//   }
// };

// module.exports = authMiddleware;
