const config = require('./utils/config')
const app = require('./app')

const { PORT } = config

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})