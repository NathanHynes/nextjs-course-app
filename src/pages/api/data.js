import nc from 'next-connect'

const handler = nc()
.get((req, res) => {
  res.send('Hello World')
})
.post((req, res) => {
  res.json({ hello:'world' })
})
.put(async (req, res) => {
  res.end('hello')
})

export default handler