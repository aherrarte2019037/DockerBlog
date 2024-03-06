import express from 'express'
import Blog from '../models/blog.model.js'
import upload from '../config/multer.config.js'

const router = express.Router()

/**
 * @swagger
 * /blog:
 *   get:
 *     summary: Retrieve a list of blogs
 *     description: Retrieve a list of blogs from the database.
 *     responses:
 *       200:
 *         description: A list of blogs.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Blog'
 *       500:
 *        description: Internal server error.
 */
router.get('/blog', async (_req, res) => {
  try {
    const blogs = await Blog.findAll()
    res.status(200).json({ data: blogs, success: true })
  } catch (error) {
    res.status(500).json({ error: error.message, success: false })
  }
})

/**
 * @swagger
 * /blog/{id}:
 *   get:
 *     summary: Retrieve a single blog by Id
 *     description: Retrieve a single blog from the database by Id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the blog to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single blog.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 */
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

/**
 * @swagger
 * /blog:
 *   post:
 *     summary: Create a new blog
 *     description: Create a new blog with the given data.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Blog'
 *     responses:
 *       200:
 *         description: The created blog.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 */
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

/**
 * @swagger
 * /blog/{id}:
 *   delete:
 *     summary: Delete a single blog by Id
 *     description: Delete a single blog from the database by Id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the blog to delete.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single blog.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 */
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

/**
 * @swagger
 * /blog/{id}:
 *  put:
 *   summary: Update a single blog by Id
 *  description: Update a single blog from the database by Id.
 * parameters:
 *  - in: path
 *   name: id
 *  required: true
 * description: ID of the blog to update.
 * schema:
 * type: integer
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Blog'
 * responses:
 * 200:
 * description: A single blog.
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Blog'
 */
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
