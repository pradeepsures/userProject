const mongoose =  require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    address: {
        type: String
    },
    bio: {
        type: String
    },
    image: {
        type: String
    }
});

const User = new mongoose.model("User", userSchema);

module.exports = User;