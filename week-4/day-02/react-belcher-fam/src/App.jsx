import "./App.css";

import bobImg from "./assets/belcher/bob-belcher.webp";
import lindaImg from "./assets/belcher/linda-belcher.webp";

import CharacterCard from "./components/CharacterCard";

const characters = [
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
  }
];

function App() {
  return (
    <>
      <h1>Belcher Family</h1>

      {characters.map((char) => (
        <CharacterCard
          key={char.name}
          name={char.name}
          voiceActor={char.voiceActor}
          quote={char.quote}
          imageSrc={char.imageSrc}
        />
      ))}
    </>
  );
}

export default App;
