const express = require("express")
const { getContacts, getContact, postContact, putContact, deleteContact } = require("../controllers/contactController")

const router = express.Router()

// GET all contacts
router.route("/").get(getContacts)

// GET single contacts
router.route("/:id").get(getContact)

// POST contact
router.route("/").post(postContact)

// PUT contact
router.route("/:id").put(putContact)

// DELETE contact
router.route("/:id").delete(deleteContact)


// Chaining the routes
// router.route("/").get(getContacts).post(postContact)
// router.route("/:id").put(putContact).get(getContact).delete(deleteContact)

module.exports = router