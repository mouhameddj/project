const mongoose=require('mongoose')
const tache = require('../model/tache');
const express = require('express');
const res = require('express/lib/response');

const asyncHandler = require('express-async-handler');
const gettache = async(req,res)=>{
    const taches= await tache.find()
    res.status(200).json(taches)


};
const addtache= asyncHandler(async(req,res)=>{
   
    let  tachefp=req.body;
     if (!tachefp) {
         
 
         res.status(400)
         throw new Error('Please add a tache')
       }
       const taches = await tache.create({
        titre: req.body.titre,
        description: req.body.description,
        duree: req.body.duree,
        classe: req.body.classe,
        couleur:req.body.couleur,
        code:req.body.code,
        status:req.body.status
        
           
 
        
       }
     )
 
     
       res.status(200).json(taches)
 });
 
module.exports = {
    addtache,
    gettache
  }
  