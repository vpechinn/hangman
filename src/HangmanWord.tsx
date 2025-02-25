type Props = {
  guessedLetters: string[];
  guessWord: string;
  reveal: boolean;
};

const HangmanWord = ({ guessedLetters, guessWord, reveal }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {guessWord.split("").map((letter, index) => (
        <div
          style={{
            borderBottom: ".1em solid black",
          }}
          key={index}
        >
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color: guessedLetters.includes(letter) ? "black" : "red",
            }}
          >
            {letter}
          </span>
        </div>
      ))}
    </div>
  );
};

export default HangmanWord;
