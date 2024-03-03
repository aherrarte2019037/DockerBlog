import express from 'express'
import Blog from '../models/blog.model.js'

const router = express.Router()

router.get('/blog', async (_req, res) => {
  try {
    const blogs = await Blog.findAll()
    res.status(200).json({ data: blogs, success: true })
  } catch (error) {
    res.status(500).json({ message: error.message, success: false })
  }
})

export default router
