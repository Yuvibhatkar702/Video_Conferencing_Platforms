import { Schema } from "mongoose";


const meeting = new Schema({
    user_id: {type: String},
    meeting_code: {type:String, required:true},
    date: {type: Date, required: true, default:Date.now}
})

const Meeting = mongoose.model("Meeting", meeting);

export{Meeting}; // If we Extract Multiple time in one model then we pass the array, Otherwise we can pass default 