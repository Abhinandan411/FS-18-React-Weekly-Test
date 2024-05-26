import { useState } from "react";
import "./App.css";
import {
  number,
  upperCseCharacters,
  lowerCseCharacters,
  specialCharacters,
} from "./chracter";

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(50);

  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const handleGeneratePassword = (e) => {
    let characterList = "";
    if (includeLowerCase) {
      characterList = characterList + lowerCseCharacters;
    }

    if (includeUpperCase) {
      characterList += upperCseCharacters;
    }
    if (includeNumbers) {
      characterList += number;
    }
    if (includeSymbols) {
      characterList += specialCharacters;
    }

    setPassword(createPassword(characterList));
  };

  // Generating random password
  const createPassword = (characterList) => {
    let password = "";
    const characterListLength = characterList.length;

    for (let i = 0; i < passwordLength; i++) {
      const charIndex = Math.round(Math.random() * characterListLength);
      password = password + characterList.charAt(charIndex);
    }

    return password;
  };

  // copy function

  const cpoyToClipBoard = (e) => {
    const newTextArea = document.createElement("textarea");
    newTextArea.innerText = password;
    document.body.append(newTextArea);

    newTextArea.select();
    document.execCommand("copy");
    newTextArea.remove();
  };

  const handleCopyPassword = (e) => {
    cpoyToClipBoard();
    alert(`Password ${password} has copied` );
  };

  return (
    <>
      <div className="container">
        <div className="generator">
          <h2>Password Generator</h2>
          <div className="generator-password">
            <h3 className="display-password">{password}</h3>
            <button onClick={handleCopyPassword} className="copy-btn">
              <p>📑</p>
            </button>
          </div>

          <div className="form-section-1">
            <label htmlFor="password-strength">
              Select Password Length (**8-50 character**){" "}
            </label>
            <input
              onChange={(e) => setPasswordLength(e.target.value)}
              type="number"
              name="password-strength"
              id="password-strength"
              max={50}
              min={8}
            />
          </div>
          <div className="form-section">
            <input
              checked={includeUpperCase}
              onChange={(e) => setIncludeUpperCase(e.target.checked)}
              type="checkbox"
              name="upper-letters"
              id="uppercase-letter"
            />
            <label htmlFor="uppercase">Include Uppercase</label>
          </div>
          <div className="form-section">
            <input
              checked={includeLowerCase}
              onChange={(e) => setIncludeLowerCase(e.target.checked)}
              type="checkbox"
              name="lower-letters"
              id="lowercase-letter"
            />
            <label htmlFor="uppercase">Include Lowecase</label>
          </div>
          <div className="form-section">
            <input
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              type="checkbox"
              name="numbers"
              id="include-numbers"
            />
            <label htmlFor="numbers">Include numbers</label>
          </div>
          <div className="form-section">
            <input
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              type="checkbox"
              name="symbols"
              id="include-symbols"
            />
            <label htmlFor="symbols">Include symbols</label>
          </div>

          <button onClick={handleGeneratePassword} className="generate-btn">
            Generate Password
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
