const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = +process.env.PORT || 5001;
const URI = process.env.URI;
const DATABASE = process.env.DATABASE;
const DBCOLLECTION = process.env.DBCOLLECTION;

const client = new MongoClient(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

app.use(express.json());
app.use(cors());

app.get("/users/", async (_, res) => {
  const connection = await client.connect();
  const data = await connection
    .db(DATABASE)
    .collection(DBCOLLECTION)
    .find()
    .toArray();

  await connection.close();

  res.send(data).end;
});

app.post("/create-student", async (req, res) => {
  const { name, lastName, studentAge } = req.body;
  const student = { name, lastName, studentAge };

  if (
    typeof name !== "string" ||
    typeof lastName !== "string" ||
    typeof studentAge !== "number"
  ) {
    res.status(400);
    res.send({ message: "your name, lastName or age is invalid" });
    res.end;
    return;
  }
  try {
    const con = await client.connect();
    const DATABASERES = await con
      .db(DATABASE)
      .collection(DBCOLLECTION)
      .insertOne(student);
    await con.close();
    return res.send(DATABASERES);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
