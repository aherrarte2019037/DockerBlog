// eslint-disable-next-line consistent-return
const validateBodyData = (req, res, next) => {
  if (!req.body.title || !req.body.content) {
    return res.status(400).json({ error: 'Body data with incorrect format', success: false })
  }

  next()
}

export default validateBodyData
