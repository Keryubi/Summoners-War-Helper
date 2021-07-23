import mongoose from 'mongoose'

const summonersWarSchemaRune = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    antique: {
        type: Boolean,
        required: true,
        default: false
    },
    stat: {
        type: new mongoose.Schema({
            star: {
                type: Number,
                min: 1,
                max: 6,
                required: true,
                unique: true
            },
            name: {
                type: String,
                required: true,
                uppercase: true
            },
            extremum: {
                type: [Number],
                unique: true,
                required: true
            }
        })
    },
    subStat: {
        star: {
            type: Number,
            min: 1,
            max: 6,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true,
            uppercase: true
        },
        extremum: {
            type: [Number],
            unique: true,
            required: true
        }
    }
})