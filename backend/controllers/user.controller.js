const UserModel = require("../models/user");
exports.home = (req, res) => {
    res.send("<h1>App is healthy </h1>");// we are sending a responce 
}

exports.register = async (req, res) => {
    const {name, email, password} = req.body;
    try{
        const user = new UserModel({
            name,
            email,
            password
        });
        await user.save();
        console.log(user);
        res.status(200).json({success: true, message: "Successfully Added"});

    } catch(err){
        console.log(err);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ status: "Fail", message: "User not found" });
        }

        // Compare passwords directly (not recommended for production)
        if (user.password === password) {
            return res.status(200).json({ status: "Success", message: "Login successful" });
        } else {
            return res.status(400).json({ status: "Fail", message: "Invalid Credentials" });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ Success: false, message: "Failed to login" });
    }
};


