const express = require("express");

const { createUser } = require("../controller/userController/createUser");
const { showUser } = require("../controller/userController/showUser");
const upload = require("../utils/multerConfig");
const { deleteUser } = require("../controller/userController/daleteUser");
const { updateUser } = require("../controller/userController/updateUser");
const router = express.Router();


router.post("/user/create", upload.single("image"), createUser);
router.get("/show/user", showUser);
router.delete("/user/delete/:id", deleteUser);
router.patch("/user/update/:id", upload.single("image"), updateUser);

module.exports = router;
