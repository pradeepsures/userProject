const User = require("../../models/user");

exports.showUser = async(req, res) => {
    try {

        const showUser = await User.find();
        if(!showUser) return res.status(500).json({ success: false, message: error.message });
        return res.status(200).json({ success: true, message: "all users", count: showUser.length ,data: showUser })
        
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}