const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //req = je te passe quelque chose et res = renvois moi la donnée.
  res.json({ message: "Voici les données." });
});

router.post("/", (req, res) => {
  //req = je te passe quelque chose et res = renvois moi la donnée.
  //   console.log(req.body);
  res.json({ message: req.body.message });
});

router.put("/:id", (req, res) => {
  res.json({ messageId: req.params.id });
});

router.delete("/:id", (req, res) => {
  res.json({ message: "Post supprimé id : " + req.params.id });
});

router.patch("/like-post/:id", (req, res) => {
  res.json({ message: "post like ; with id: " + req.params.id });
});

router.patch("/dislike-post/:id", (req, res) => {
  res.json({ message: "post dislike ; with id: " + req.params.id });
});

module.exports = router;
