import VenueOwner from "../models/venue.js";

export const createVendor = async (req, res) => {
    const { venueInfo, accountDetails } = req.body;

    try {
        const existingOwner = await VenueOwner.findOne({ "accountDetails.username": accountDetails.username });

        if (existingOwner) {
            return res.status(400).json({ success: false, message: "Username already exists" });
        }

       
        const newOwner = new VenueOwner({
            venueInfo: venueInfo,
            accountDetails: accountDetails
        });

        await newOwner.save();

        return res.status(200).json({ success: true, message: "Registered Successfully" });
    } catch (err) {
        console.error("Failed to create user:", err);
        return res.status(500).json({ success: false, message: "Failed to create user" });
    }
};
