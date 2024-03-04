import express from 'express'
import Blog from '../models/blog.model.js'
import validateBodyData from '../middlewares/validate-body.middleware.js'

const router = express.Router()

router.get('/blog', async (_req, res) => {
  try {
    const blogs = await Blog.findAll()
    res.status(200).json({ data: blogs, success: true })
  } catch (error) {
    res.status(500).json({ error: error.message, success: false })
  }
})

router.post('/blog', validateBodyData, async (req, res) => {
  try {
    const blog = await Blog.create(req.body)
    res.status(200).json({ data: blog, success: true })
  } catch (error) {
    res.status(500).json({ error: error.message, success: false })
  }
})

export default router
