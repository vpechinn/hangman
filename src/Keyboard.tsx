import styles from "./Keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type Props = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
};

const Keyboard = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled,
}: Props) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5em",
      }}
    >
      {KEYS.map((key, i) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            disabled={isInactive || isActive || disabled}
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""}`}
            key={i}
          >
            {key}
          </button>
        );
      })}
      )
    </div>
  );
};

export default Keyboard;
