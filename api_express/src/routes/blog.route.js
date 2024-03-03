import express from 'express'

const router = express.Router()

router.get('/blog', (_req, res) => {
  res.json({ message: 'ok' })
})

export default router
