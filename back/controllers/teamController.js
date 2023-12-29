const asyncHandler = require('express-async-handler');
const Player = require("../models/Player");
const Team = require("../models/Team");

const getTeamById = asyncHandler(async (req, res)=>{
    const { id } = req.params;
    try{
        const team = await Team.findById(id).exec();
        const players = await Player.find({_id:{$in:team.players}})
        team.players = players
        return res.status(200).json({
            team
        })
    }catch(err){
        return res.status(404).json({message:"Team Not Found"})
    }
})

module.exports = {
    getTeamById
}