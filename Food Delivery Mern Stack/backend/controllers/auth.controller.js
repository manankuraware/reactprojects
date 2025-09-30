import User from "../models/user.model.js";
import genToken from "../utils/token.js";

export const signUp = async (req, res) => {
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
        const token = await genToken(user._id);
        res.cookie("token", token, {
            // when using http use secure false 
            secure: false,
            // whenver secure false use same site strict 
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true
            // httpOnly: true JavaScript on frontend cannot access it (prevents XSS attacks). 
        })
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json(`Sign up error ${error}`);
    }
}


export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User Not Exist" })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect Password" })
        }

        // passing mongo db user id to token 
        const token = await genToken(user._id);
        res.cookie("token", token, {
            // when using http use secure false 
            secure: false,
            // whenver secure false use same site strict 
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true
            // httpOnly: true JavaScript on frontend cannot access it (prevents XSS attacks). 
        })
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json(`Sign in error ${error}`);
    }
}

export const signOut = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json({ message: "log out sucessfully" })
    } catch (error) {
        return res.status(500).json(`Sign Out error ${error}`)
    }
}