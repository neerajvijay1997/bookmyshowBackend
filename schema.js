const { Schema } = require('mongoose');

const bookMovieSchema = new Schema({
    movie: { type: String, required: [true, 'Kindly Select a Movie'] },
    slot: { type: String, required: [true, 'Kindly choose a slot'] },
    seat: {
        A1: { type: Number, default: 0, min: 0 },
        A2: { type: Number, default: 0, min: 0 },
        A3: { type: Number, default: 0, min: 0 },
        A4: { type: Number, default: 0, min: 0 },
        D1: { type: Number, default: 0, min: 0 },
        D2: { type: Number, default: 0, min: 0 }
    }

}, { timestamps: true })

exports.bookMovieSchema = bookMovieSchema;
