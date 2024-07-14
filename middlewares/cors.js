import cors from 'cors'

const ACCEPTED_ORIGINS = [
  'http://localhost:8080',
  'https://darkgames.vercel.app'
]

export const corsMiddleware = (
  { acceptedOrigins = ACCEPTED_ORIGINS } = {}
) => cors({
  origin: (origin, callback) => {
    console.log(origin);
    if (acceptedOrigins.includes(origin)) {
      return callback(null, true)
    }
    return callback(new Error('Not allowed by CORS'))
  }
})