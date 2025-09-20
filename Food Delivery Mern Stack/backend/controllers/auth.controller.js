import User from "../models/user.model.js";
import genToken from "../utils/token.js";

const signUp = async (req, res) => {
    try {
        const { fullName, email, password, mobile, role } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User Already Exist" })
        }
        if (password.length < 6) {
            return res.status(400).json({ message: "PassWord Must Be At Least 6 Characters." })
        }
        if (mobile.length < 10) {
            return res.status(400).json({ message: "Mobile number Must Be At Least 10 digits." })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        // creating new user login in db and save it 
        user = await User.create({
            fullName,
            email,
            mobile,
            role,
            password: hashedPassword
        })

        // passing mongo db user id to token 
        const token=await genToken(user._id);

    } catch (error) {

    }
}