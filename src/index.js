import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: path.join(__dirname, '../.env.local') })

ReactDOM.render(<App />, document.getElementById('root'))
