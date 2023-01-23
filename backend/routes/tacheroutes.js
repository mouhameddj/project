const express=require('express')


const router=express.Router();
const {addtache,gettache} =require('../controller/tache')
router.route('/').get(gettache).post(addtache)



module.exports=router