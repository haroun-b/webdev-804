const express = require("express");
const morgan = require("morgan");

const characters = require("./data/characters.json");

const port = 3000;
const app = express();

app.use(morgan("dev"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

// Request Search Query
// /characters?gender=male&isRecurring=false
/*
using the same key multiple times will store the values in an array
/characters?firstName=Linda&firstName=Louise
req.params.firstName => ["Linda", "Louise"]
*/
app.get("/characters", (req, res) => {
  console.log(req.query);

  const { gender, isRecurring, firstName } = req.query;

  const firstNames = typeof firstName === "string" ? [firstName] : firstName;

  const filteredCharacters = characters.filter((char) => {
    return (
      (gender !== undefined ? char.gender === gender : true) &&
      (isRecurring !== undefined
        ? char.isRecurring?.toString() === isRecurring
        : true) &&
      (firstNames !== undefined ? firstNames.includes(char.firstName) : true)
    );
  });

  res.json(filteredCharacters);
});

app.get("/characters/last-one", (req, res) => {
  res.json(characters[characters.length - 1]);
});

// Request Params
app.get("/characters/:characterId", (req, res) => {
  // const characterId = req.params.characterId
  const { characterId } = req.params;

  const character = characters.find((char) => char.id === characterId);

  if (!character) {
    res
      .status(404)
      .json({ message: `No such character with id: ${characterId}` });
  }

  res.json(character);
});

/*
the `/characters/:characterId` will prevent this route from ever being reached
this is because `last-one` will be treated as a `characterId`
to fix this, this route must come before `/characters/:characterId`

we handle routes the same way we write `if` conditions, most specific to least specific

app.get("/characters/last-one", (req, res) => {
  res.json(characters[characters.length - 1]);
});
*/

app.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`);
});
