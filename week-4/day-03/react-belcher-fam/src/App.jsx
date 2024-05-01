import "./App.css";

import bobImg from "./assets/belcher/bob-belcher.webp";
import lindaImg from "./assets/belcher/linda-belcher.webp";
import tinaImg from "./assets/belcher/tina-belcher.webp";
import geneImg from "./assets/belcher/gene-belcher.webp";
import louiseImg from "./assets/belcher/louise-belcher.webp";

import CharacterCard from "./components/CharacterCard";
import { useState } from "react";

const belchers = [
  {
    name: "Bob Belcher",
    voiceActor: "H. Jon Benjamin",
    quote:
      "All right, listen. You're my children, and I love you. But you're all terrible at what you do here, and I feel like I should tell you I'd fire all of you if I could.",
    imageSrc: bobImg
  },
  {
    name: "Linda Belcher",
    voiceActor: "John Roberts",
    quote: "Mommy doesn't get drunk. She just has fun.",
    imageSrc: lindaImg
  },
  {
    name: "Tina Belcher",
    voiceActor: "Dan Mintz",
    quote:
      "Is it bad to be attracted to a cartoon fox that you don't even know that well?",
    imageSrc: tinaImg
  },
  {
    name: "Gene Belcher",
    voiceActor: "Eugene Mirman",
    quote:
      "You should know when you hold hands with me, you are holding hands with everything I’ve ever eaten.",
    imageSrc: geneImg
  },
  {
    name: "Louise Belcher",
    voiceActor: "Kristen Schaal",
    quote:
      "The best part about working here is my dad's total disregard for child labor laws. It feels great to be an accessory to a crime every single day without even trying.",
    imageSrc: louiseImg
  }
];

// shallow copy and perf

function App() {
  // const [message, setMessage] = useState("Hello");
  const [characters, setCharacters] = useState(belchers);

  function deleteCharacter(name) {
    const charactersToKeep = characters.filter((char) => char.name !== name);
    setCharacters(charactersToKeep);

    // const indexOfCharToDelete = characters.findIndex(
    //   (char) => char.name === name
    // );

    // characters.splice(indexOfCharToDelete, 1);

    // setCharacters(characters);
    // setCharacters([...characters]);
  }

  console.log("Rendering");

  return (
    <>
      <h1>Belcher Family</h1>
      {/* <div>{message}</div> */}

      {/* <button onClick={() => setMessage("Hello")}>click</button> */}

      {characters.map((char) => (
        <CharacterCard
          key={char.name}
          name={char.name}
          voiceActor={char.voiceActor}
          quote={char.quote}
          imageSrc={char.imageSrc}
          deleteCharacter={deleteCharacter}
        />
      ))}
    </>
  );
}

export default App;
