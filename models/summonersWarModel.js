import mongoose from 'mongoose'

const summonersWarSchema = new mongoose.Schema({
    rune:{
        name:String,
        type:[String],
        information:{
            propriete:[String],

        }
    }
})