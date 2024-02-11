const express = require('express')
const router = express.Router();
const Task = require('../models/task')


router.get('/tasks', async (req, res, next)=>{
     try {
          const tasks = await Task.find()
          res.status(200).json(tasks)
     } catch (error) {
          res.status(500).json({ error: error.message})
     }
});

router.post('/tasks', async (req, res, next)=>{
     try {
          const task = new Task(req.body)
          await task.save()
          res.status(200).json({message: "Task Added Successfully", task})
     } catch (error) {
          res.status(400).json({ error: error.message})
          
     }
});

router.put('/tasks/:id', async (req, res, next)=>{
     try {
          const {id} = req.params;
          const dataToUpdate = req.body;
          const task = await Task.findByIdAndUpdate(id, dataToUpdate, {new : true});
          res.status(200).json({message: "Task Updated Successfully", task});
     } catch (error) {
          res.status(400).json({ error: error.message});
          
     }
});

router.delete('/tasks/:id', async (req, res, next)=>{
     try {
          const {id}= req.params;
          await Task.findByIdAndDelete(id);
          res.status(200).json({message: "Task Deleted Successfully"});
     } catch (error) {
          res.status(400).json({ error: error.message});
          
     }
});




module.exports = router;