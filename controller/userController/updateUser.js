const User = require("../../models/user");

exports.updateUser = async(req, res) => {
    try {

        const id = req.params.id;
        const{ name, email, phone, address, bio } = req.body;
        let image = req.file.path;

        const updatedUser = await User.findOne({ _id: id });
        if(!updatedUser) return res.status(500).json({ success: false, message: "user not found" });

        updatedUser.name = name || updatedUser.name
        updatedUser.email = email || updatedUser.email
        updatedUser.phone = phone || updatedUser.phone
        updatedUser.address = address ||updatedUser.address
        updatedUser.bio = bio || updatedUser.bio
        updatedUser.image = image || updatedUser.image
        await updatedUser.save();
        return res.status(200).json({ success: true, message: "user updated", data: updatedUser });
        
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}