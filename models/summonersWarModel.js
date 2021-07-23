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
    propriete: {
        type: new mongoose.Schema({
            star: {
                type: Number,
                required: true,
                unique: true
            },
            stat: {
                type: String,
                required: true,
                uppercase: true
            },
            subStat: {
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
    
})