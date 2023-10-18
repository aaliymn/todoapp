import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let allNotes = [];
let workNotes = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { today, allNotes });
});
app.get("/work", (req, res) => {
  res.render("work.ejs", { today, workNotes });
});

app.post("/submit", (req, res) => {
  allNotes.push(req.body["usernote"]);
  res.render("index.ejs", { allNotes, today });
});
app.post("/submitw", (req, res) => {
  workNotes.push(req.body["usernote"]);
  res.render("work.ejs", { workNotes, today });
});
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let today =
  days[new Date().getDay()] +
  ", " +
  month[new Date().getMonth()] +
  " " +
  new Date().getDate();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
