//@desc GET all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
    res.status(200).json({ status: "success", message: "Get all contacts from controller json" })
}

//@desc GET single contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
    res.status(200).json({ status: "success", message: `Get single contacts from controller json ${req.params.id}` })
}

//@desc POST contact
//@route POST /api/contacts
//@access public
const postContact = (req, res) => {
    console.log("Requested body:", req.body);
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400)
        throw new Error("All fields are mendatory!!")
    }
    res.status(201).json({ status: "success", message: `Create contacts from controller json` })
}

//@desc PUT contact
//@route PUT /api/contacts/:id
//@access public
const putContact = (req, res) => {
    res.status(200).json({ status: "success", message: `update contacts from controller json ${req.params.id}` })
}

//@desc DELETE contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({ status: "success", message: `Delete contacts from controller json ${req.params.id}` })
}

module.exports = { getContacts, getContact, postContact, putContact, deleteContact }