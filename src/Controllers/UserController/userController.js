
import {model} from "../../AiModels/index.js";

const {
    getRankByEmailId,
    WriteJson,
    getUsersInRange
} = model;

export const addData = async (req,res)=>{
    try{
        console.log(req.body);
        await WriteJson(req.body);
        res.status(200).json({message:"object recieved"});
    }
    catch(err){
        res.status(500).json({ message:"internal server error" });
    }
}

export const getRankByEmail = async(req,res)=>{
    try{
        const response = await getRankByEmailId(req.body);
        // console.log(response);
        res.status(200).json({message:`your rank is ${response}`});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:'internal server error'});
    }
}

export const getRankInRange = async(req,res)=>{
    try{
        const response = await getUsersInRange(req.body);
        res.status(200).json({message:"users between given ranks are: ",user: response});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:'internal server error'});
    }
}