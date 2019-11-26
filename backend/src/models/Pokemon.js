const {Schema, model} = require ('mongoose');

const PokeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    pokedexNumber: {
        type: Number,
        required: true
    },
    image: String, 
    generation: Number,
    evolutionStage: Number,
    evolved: Boolean,
    familyId: Number,
    crossGen: Boolean,
    type1: String,
    type2: String, 
    weather1: String, 
    weather2: String,
    statTotal: Number,
    atk: Number, 
    def: Number, 
    sta: Number,
    legendary: Boolean, 
    aquireable: Boolean,
    spawns: Boolean,
    raidable: Boolean,
    hatchable: Number,
    shiny: Boolean,
    nest: Boolean, 
    newPoke: Boolean,
    notGettable: Boolean,
    futureEvolve: Boolean,
    cp40: Number,
    cp39: Number
},{
    timestamps: true,
});
PokeSchema.virtual('image_url').get(function(){
    return `http:localhost:3333/files/${this.image}`
})
module.exports = model('Pokemon', PokeSchema);