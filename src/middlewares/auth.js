import jwt from 'jsonwebtoken';

const onlyPrivate = (req, res, next) => {
  if (!req.cookies.jwttoken) {
    res.redirect('/');
  } else {
    req.user = jwt.verify(req.cookies.jwttoken, process.env.JWT_KEY);
    next();
  }
};

export { onlyPrivate };
