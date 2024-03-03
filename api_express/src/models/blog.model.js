import {
  STRING,
  INTEGER,
  TEXT,
  BLOB,
  TIME,
} from 'sequelize'
import { db } from '../config/db.config.js'

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
    type: BLOB,
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
  created_at: {
    type: TIME,
    allowNull: false,
  },
})

Blog.sync({ alter: true })

export default Blog
