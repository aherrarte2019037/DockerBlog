import {
  STRING,
  INTEGER,
  TEXT,
} from 'sequelize'
import { db } from '../config/db.config.js'

/**
 * @swagger
 * components:
 *   schemas:
 *     Blog:
 *       type: object
 *       required:
 *         - title
 *         - content
 *         - first_player
 *         - second_player
 *         - points_first_player
 *         - points_second_player
 *         - winner
 *         - created_at
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *           description: The blog post's unique ID.
 *         title:
 *           type: string
 *           description: The title of the blog post.
 *         content:
 *           type: string
 *           description: The content of the blog post.
 *         image:
 *           type: string
 *           format: binary
 *           description: The image associated with the blog post.
 *         first_player:
 *           type: string
 *           description: The name of the first player.
 *         second_player:
 *           type: string
 *           description: The name of the second player.
 *         points_first_player:
 *           type: integer
 *           description: The points of the first player.
 *         points_second_player:
 *           type: integer
 *           description: The points of the second player.
 *         winner:
 *           type: string
 *           description: The name of the winner.
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: The date and time when the blog post was created.
 *       example:
 *         id: 1
 *         title: "A fascinating blog post title"
 *         content: "The actual content of the blog post."
 *         image: null
 *         first_player: "Player One"
 *         second_player: "Player Two"
 *         points_first_player: 15
 *         points_second_player: 10
 *         winner: "Player One"
 *         created_at: "2020-01-01T00:00:00.000Z"
 */

const Blog = db.define('blogs', {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: STRING,
    allowNull: false,
  },
  content: {
    type: TEXT,
    allowNull: false,
  },
  image: {
    type: STRING,
    allowNull: true,
  },
  first_player: {
    type: STRING,
    allowNull: false,
  },
  second_player: {
    type: STRING,
    allowNull: false,
  },
  points_first_player: {
    type: INTEGER,
    allowNull: false,
  },
  points_second_player: {
    type: INTEGER,
    allowNull: false,
  },
  winner: {
    type: STRING,
    allowNull: false,
  },
})

Blog.sync({ alter: true })

export default Blog
