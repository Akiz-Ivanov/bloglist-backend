const groupBy = require('lodash/groupBy')
const maxBy = require('lodash/maxBy')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const likes = blogs.map(blog => blog.likes)
  return likes.reduce((acc, curr) => acc + curr, 0)
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return null

  const likes = blogs.map(blog => blog.likes)
  const highestLikes = Math.max(...likes)
  return blogs.find(blog => blog.likes === highestLikes)
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) return null

  
  const groupedByAuthor = groupBy(blogs, 'author')
  const mostBlogsAuthor = maxBy(Object.entries(groupedByAuthor), ([author, blogs]) => blogs.length)

  return {
    author: mostBlogsAuthor[0],
    blogs: mostBlogsAuthor[1].length
  }
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) return null

  const groupedByAuthor = groupBy(blogs, 'author')
  const mostLikesAuthor = maxBy(Object.entries(groupedByAuthor), ([author, blogs]) => {
    return blogs.reduce((sum, blog) => sum + blog.likes, 0)
  })

  const [author, authorsBlogs] = mostLikesAuthor

  const totalLikes = authorsBlogs.reduce((sum, blog) => sum + blog.likes, 0)

  return {
    author,
    likes: totalLikes
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}