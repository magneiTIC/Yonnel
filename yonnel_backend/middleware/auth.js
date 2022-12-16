import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("Il vous faut un token pour l'authentification");
  }
  try {
    const decoded = jwt.verify(token, 'secret');
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Token invalide");
  }
  return next();
};

export default verifyToken