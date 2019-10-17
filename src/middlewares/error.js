const errorHandler = (errCode, e, req, res) => {
  const { status, message } = errCode;
  console.log(e);
  res.status(status).json({ message });
};

export default errorHandler;
