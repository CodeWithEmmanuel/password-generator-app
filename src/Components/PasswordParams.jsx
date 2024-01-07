import { useState, useEffect } from "react";

function PasswordParams({ setPasswordParams }) {
  const [charLength, setCharLength] = useState(8);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  useEffect(() => {
    setPasswordParams({
      charLength: charLength,
      uppercase: uppercase,
      lowercase: lowercase,
      numbers: numbers,
      symbols: symbols,
    });
  }, [charLength, uppercase, lowercase, numbers, symbols]);

  function getCharLength(e) {
    setCharLength(e.target.value);
  }

  function getUppercase(e) {
    setUppercase(e.target.checked);
  }

  function getLowercase(e) {
    setLowercase(e.target.checked);
  }

  function getNumbers(e) {
    setNumbers(e.target.checked);
  }

  function getSymbols(e) {
    setSymbols(e.target.checked);
  }

  return (
    <div className="password-params">
      <div className="controls-heading">
        <p>Character Length</p>
        <h2 className="char-length-num">{charLength}</h2>
      </div>
      <div className="char-length">
        <input
          type="range"
          min="1"
          max="32"
          defaultValue={charLength}
          className="char-length-slider"
          onChange={getCharLength}
        />
      </div>

      <div className="controls-checks">
        <label htmlFor="uppercase-char">
          <input
            type="checkbox"
            id="uppercase-char"
            onChange={getUppercase}
            defaultValue={uppercase}
          />
          <span>Include Uppercase Letters</span>
        </label>

        <label htmlFor="lowercase-char">
          <input
            type="checkbox"
            id="lowercase-char"
            onChange={getLowercase}
            defaultValue={lowercase}
          />
          <span>Include Lowercase Letters</span>
        </label>

        <label htmlFor="numbers-char">
          <input
            type="checkbox"
            id="numbers-char"
            onChange={getNumbers}
            defaultValue={numbers}
          />
          <span>Include Numbers</span>
        </label>

        <label htmlFor="symbols-char">
          <input
            type="checkbox"
            id="symbols-char"
            onChange={getSymbols}
            defaultValue={symbols}
          />
          <span>Include Symbols</span>
        </label>
      </div>
    </div>
  );
}

export default PasswordParams;
