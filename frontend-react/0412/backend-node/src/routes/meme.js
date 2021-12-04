const router = require("express").Router()
const memeController = require("../controllers/meme")

router.get("/", memeController.getPosts)
router.post("/create", memeController.createPost)
router.put("/update/:id", memeController.updatePost)
router.delete("/delete/:id", memeController.deletePost)

module.exports = router