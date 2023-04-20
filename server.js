const app = require("./src/app");

const PORT = 3030
const server = app.listen(3030, () => {
  console.log(`Server started on port ${PORT}`)
})

process.on("SIGINT", () => {
  server.close(() => {
    console.log("Exit Server Express");
  })

})