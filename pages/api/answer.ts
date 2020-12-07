export default (req: any, res: any) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  const services: object[] = [
    {
      name: 'Amazon Athena',
      // type: 'analyze',
      // attributes: ['s3', 'serverless', 'sql']
    },
  ]
  res.json({ answer: '' })
}
