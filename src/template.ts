const template = (request: Request) => {
  
  
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width initial-scale=1">
      <title>My First Cloudflare Worker</title>
    </head>
    <body>
      <h1>Hello World!</h1>
    </body>
  </html>
`};


export default template