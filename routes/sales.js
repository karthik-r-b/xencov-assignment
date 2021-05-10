import express from 'express';
const router = express.Router();
import Sales from '../models/Sales.js';
import BadRequestError from '../utils/bad-request-error.js';
import fs from'fs';
import csvParser from 'csv-parse';
router.post('/upload-records',async(req,res)=>{
  if(!req.files.salesFile){
    throw new BadRequestError('File is needed',400);
  }
  const {salesFile} = req.files;
  salesFile.mv("public/files/"+salesFile.name,(error)=>{
    if(error){
      throw new BadRequestError('Error in uploading',500);
    }
    else{
      console.log('Uploaded successfully');
    }
  })
   const file = 'public/files/'+salesFile.name;
   fs.createReadStream(file)
        .pipe(csvParser({
            delimiter: '\t', 
            endLine: '\n', 
            escapeChar: '"', 
            enclosedChar: '"'
        }))
        .on('data', async function(data) {
            data =  data[0].split(',');
            await Sales.create(data);
        })
        .on('end', function(data) {
             console.log('reading finished');
        })
        res.send({success:true});
})

export default router