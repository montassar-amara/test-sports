const asyncHandler = require('express-async-handler');
const League = require("../models/League");
const Team = require("../models/Team");
const filterLeagues = asyncHandler(async (req, res)=>{
    const { filter } = req.body;
   try{
    const leagues = await League
        .find({name:{$regex:filter,$options:'i'}})
        .select({"name":1}) 
        .exec();
    return res.status(200).json({
    leagues
    })
   }catch(err){
    return res.status(500).json({message:"Server Error"})
   }
})
const getLeagueById = asyncHandler(async (req, res)=>{
    const { id } = req.params;
    try{
        const league = await League.findById(id).exec();
        const teams = await Team.find({_id:{$in:league.teams}})
        league.teams = teams
        return res.status(200).json({
            league
        })
    }catch(err){
        return res.status(404).json({message:"League Not Found"})
    }
})

module.exports = {
    filterLeagues,
    getLeagueById
}