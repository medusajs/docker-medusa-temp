import { Router } from "express"

export default () => {
  const router = Router()

  router.get("/hello-world", (req, res) => {
    res.json({
      message: "Welcome to Medusa!!"
    })
  })

  return router;
}