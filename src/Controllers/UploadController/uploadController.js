import {helper} from '../../Handlers/index.js';
import path from "path";
// Create Note
export const DocReview = async (req, res) => {

  try{
    console.log('reading the file');
    const docText = await helper.ReadDoc();
    console.log('reading done');
    const response = await helper.RunAi(docText);
    console.log(response[0].message);
    // let response = {"message":"response"};
    res.status(200).json(response[0].message);
  }
catch(err){
    console.log(err);
    res.status(500).send("internal server error");
}
};

export const DocUpload = async (req, res) => {
    const file = req.file;
  
    if (!file) return res.status(400).send("No file uploaded.");
    //absoluteFilePath is save
    const absoluteFilePath = path.resolve(file.path);
    res.status(200).json({message:"file uploaded"});
}