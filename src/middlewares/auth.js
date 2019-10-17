import jwt from 'jsonwebtoken';

const onlyPrivate = (req, res, next) => {
  if (!req.headers.Authorization) {
    res.redirect('/');
  } else {
    const [_, token] = req.headers.Authorization.split(' ');
    req.user = jwt.verify(token, process.env.JWT_KEY);
    next();
  }
};

export { onlyPrivate };
