import { Router } from "express";
import User from "./userModel.js";
import Team from "./teamModel.js";
const router = Router();

// instead of direct functions we can use controllers
router.get("/users", async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error while fetching all user " });
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const data = await User.find({ id: req.params.id });
    if(data.length===0) res.status(200).json({message:"user id not present in database",success:false});
    else res.status(200).json({data,success:true});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "error while fetching user by id" });
  }
});

router.post("/users", async (req, res) => {
  try {
    const { id, first_name, last_name, gender, avatar, domain, available,email } =
      req.body;
      // console.log(req.body);
    const newUser = await User.create({
      id,
      first_name,
      last_name,
      email,
      gender,
      avatar,
      domain,
      available,
    });
    
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error while creating new user" });
  }
});

router.put("/users/:id", async (req, res) => {
  try {
    const { id, first_name, last_name, gender, avatar, domain, available,email } =
      req.body;
    // const updatedUser=await User.findOneAndUpdate({id:req.params.id,update:{first_name, last_name, gender, avatar, domain, available,email}})
    const updatedUser=await User.findByIdAndUpdate(req.params.id,{first_name, last_name, gender, avatar, domain, available,email})
      res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error while updating user" });
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    // const data = await User.deleteOne({ id: req.params.id });
    const data = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error); 
    res.status(500).json({ message: "error while deleting user" });
  }
});

// Team routes

router.get("/team/:id", async (req, res) => {
  try {
    const data = await Team.find({ id: req.params.id }); 
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error while fetching team" });
  }
});

router.post("/team", async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error while creating team" });
  }
});
export default router;
