import Users from "../models/Users.js";


export const CreateUser = async (req, res) => {
    const { name, email, password, contact } = req.body; 
    try {
        const existingEmailUser = await Users.findOne({ email });
        const existingContactUser = await Users.findOne({ contact });
        if (existingEmailUser) {
            return res.status(400).json({ success: false, message: 'User already exists with this email' });
        }

        else if (existingContactUser) {
            return res.status(400).json({ success: false, message: 'User already exists with this contact' });
        }
      else{
        const newUser = new Users({ name, email, password, contact }); 
        await newUser.save(); 
        res.status(200).json({ success: true, message: 'User created successfully' });
      }
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to create user', error: err.message });
    }
};



export const getSingleUser = async (req, res) => {
    const data = req.body;
    const email = data.email;
    const password = data.password;
    try {
        const user = await Users.findOne({ email }); 
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        } else {
            if (user.password === password) {
                
                res.status(200).json({ success: true, message: 'User found', data: user });
            } else {
                res.status(401).json({ success: false, message: 'Incorrect password' });
            }
        }
       
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed', error: error.message });
    }
};






