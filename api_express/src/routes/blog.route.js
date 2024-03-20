import express from 'express'
import Blog from '../models/blog.model.js'
import upload from '../config/multer.config.js'

const router = express.Router()

router.get('/blog', async (_req, res) => {
  try {
    const blogs = await Blog.findAll()
    res.status(200).json({ data: blogs, success: true })
  } catch (error) {
    res.status(500).json({ error: error.message, success: false })
  }
})

router.get('/blog/:id', async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({ error: 'Id is required', success: false })
    }

    const blog = await Blog.findOne({ where: { id: req.params.id } })

    if (!blog) {
      return res.status(404).json({ error: 'Blog not found', success: false })
    }

    res.status(200).json({ data: blog, success: true })
  } catch (error) {
    res.status(500).json({ error: error.message, success: false })
  }
})

router.post('/blog', upload.single('image'), async (req, res) => {
  try {
    const blogData = {
      ...req.body,
      image: req.file ? req.file.filename : null,
    }
    const blog = await Blog.create(blogData)
    res.status(200).json({ data: blog, success: true })
  } catch (error) {
    res.status(500).json({ error: error.message, success: false })
  }
})

router.delete('/blog/:id', async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({ error: 'Id is required', success: false })
    }

    const blog = await Blog.findOne({ where: { id: req.params.id } })
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found', success: false })
    }

    await blog.destroy()
    res.status(204).json({ success: true })
  } catch (error) {
    res.status(500).json({ error: error.message, success: false })
  }
})

router.put('/blog/:id', upload.single('image'), async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({ error: 'Id is required', success: false })
    }

    const blog = await Blog.findOne({ where: { id: req.params.id } })
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found', success: false })
    }

    const blogData = {
      ...req.body,
      image: req.file ? req.file.filename : blog.image,
    }

    await blog.update(blogData)
    res.status(200).json({ data: blog, success: true })
  } catch (error) {
    res.status(500).json({ error: error.message, success: false })
  }
})

export default router
