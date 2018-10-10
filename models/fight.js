const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fightSchema = new Schema({
    fighter1: { type: Schema.Types.ObjectId, ref: 'User' },
    fighter2: { type: Schema.Types.ObjectId, ref: 'User' },
    ref: { type: Schema.Types.ObjectId, ref: 'User' },
    time: { type: Date, default: Date.now },
    completed: { type: Boolean, default: false },
    winner: { type: Schema.Types.ObjectId, ref: 'User' },
    lat: { type: Number },
    lng: { type: Number }
})

const Fight = mongoose.model("Fight", fightSchema);

module.exports = Fight;