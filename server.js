import { rps, rpsls } from "./lib/rpsls.js";
import express from "express";
import minimist from "minimist";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const args = minimist(process.argv.slice(2));
const PORT = args.port || 5000;

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });

// Get index page (does not show anything)
app.get("/app", (req, res) => {
  res.status(200).send("200 OK");
});

// get rpsls with no args
app.get("/app/rpsls", (req, res) => {
    res.status(200).send(rpsls());
  });
  
// get rps with no args
app.get("/app/rps", (req, res) => {
  res.status(200).send(rps());
});

//get rpsls with an arg
app.get("/app/rpsls/play", (req, res) => {
    res.status(200).send(rpsls(req.query.shot));
  });

//get rps with an arg
app.get("/app/rps/play", (req, res) => {
  res.status(200).send(rps(req.query.shot));
});

//add the arg for rps to the page
app.post("/app/rps/play", (req, res) => {
  res.status(200).send(rps(req.body.shot));
});

//add the arg for rpsls to the page
app.post("/app/rpsls/play", (req, res) => {
  res.status(200).send(rpsls(req.body.shot));
});

// now add the command
app.get("/app/rps/play/:shot", (req, res) => {
  res.status(200).send(rps(req.params.shot));
});

// now add the command
app.get("/app/rpsls/play/:shot", (req, res) => {
  res.status(200).send(rpsls(req.params.shot));
});

// return error if anything else is entered
app.get("*", (req, res) => {
    res.status(404).send("404 NOT FOUND");
  });


