const User = require("../../models/user");

exports.deleteUser = async(req, res) => {
    try {
        
        let   id  = req.params.id;
        if(!id) return res.status(500).json({ success: false, message: "id is required" });
        
        let deletedUser = await User.findByIdAndDelete(id);
        if(!deletedUser) return res.status(500).json({ success: true, message: "user not found" });
        return res.status(200).json({ success: true, message: " User deleted" });

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}