const express = require("express");
const port = 5000;

const app = express();

// app.get("/post", (req, res) => {
//   //req = je te passe quelque chose et res = renvois moi la donnée.
//   res.json({ message: "Voici les données." });
// });

//Middleware qui permet de traier les données de la request "REQ".
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));
// Pour Lancer le Server
app.listen(port, () =>
  console.log("le serveur démarre correctement au port" + port)
);
