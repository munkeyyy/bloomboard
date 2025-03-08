import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    // Get token from headers
    const token = req.header("Authorization");

    if (!token) {
      return res.status(401).json({ message: "Access Denied. No token provided." });
    }

    // Verify token
    const decoded = jwt.verify(token, "SECRET_KEY");
    req.user = decoded; // Attach user info to request object

    next(); // Proceed to the next middleware or controller
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
