const { Schema, model } = require('mongoose');

const bankSchema = new Schema({
    gold: { type: Number},
    silver: { type: Number},
    inr:{type: Number }
});

const Bank = new model('Bank', bankSchema);

module.exports = Bank;