import express from 'express'
import { userRouter } from './routes/user.routes'

const app = express()

app.use(express.json())

app.use(userRouter)

app.listen(3333, () => console.log('Server is running on port 3333'))
