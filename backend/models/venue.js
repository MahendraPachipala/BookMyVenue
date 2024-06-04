import mongoose from "mongoose";

const VenueSchema = new mongoose.Schema({
    venueInfo: {
        name: {
            type: String,
            required: true
        },
        address: {
            city: {
                type: String,
                required: true
            },
            state: {
                type: String,
                required: true
            },
            zipCode: {
                type: String,
                required: true
            }
        },
        contact: {
            phoneNumber: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            }
        },
    },
  
    accountDetails: {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    },
   
});

const VenueOwner = mongoose.model("VenueOwner", VenueSchema);
export default VenueOwner;