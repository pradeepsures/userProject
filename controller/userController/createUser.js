const User = require("../../models/user");

exports.createUser = async(req, res) => {
    try {
         
        let { name, email, phone, address, bio } = req.body;
        const imagepath = req.file.path;

        if(!name) return res.status(500).json({ success: false, message:  "name is required" });
        if(!email) return res.status(500).json({ success: false, message:  "email is required" });
        if(!phone) return res.status(500).json({ success: false, message:  "phone is required" });
        if(!address) return res.status(500).json({ success: false, message:  "address is required" });
        if(!bio) return res.status(500).json({ success: false, message:  "bio is required" });


        const newUser = new User({ name, email,phone, address, bio, image: imagepath })
        await newUser.save();
        return res.status(200).json({ success: true, message: "user created",count: newUser.length, data: newUser })

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}