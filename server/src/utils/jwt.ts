import jwt from "jsonwebtoken";
type User = {
  _id: String;
  name: String;
  email: String;
  age: Number;
  isActive: Boolean;
  nationality: String;
  friends: [User];
};

const SECRET = process.env.JWT_SECRET || "DEFAULT_SECRET_KEY";

export const createToken = (user: User) => {
  return jwt.sign({ id: user._id, email: user.email }, SECRET, {
    expiresIn: "7d",
  });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
};
