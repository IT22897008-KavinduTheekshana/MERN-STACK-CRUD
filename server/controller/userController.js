import User from "../model/userModel.js";

export const create = async (req, res, next) => {
    try {
        const { email } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};
