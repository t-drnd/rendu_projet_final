import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  const secretKey = process.env.JWT_SECRET;
  if (!secretKey) {
    throw new Error('JWT secret key is not defined');
  }
  return jwt.sign({ id: user.id, email: user.email }, secretKey, { expiresIn: '1h' });
};
