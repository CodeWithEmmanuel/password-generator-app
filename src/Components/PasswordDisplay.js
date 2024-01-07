function PasswordDisplay({ displayPassword }) {
  function copyPassword() {
    if (displayPassword === "") {
      return;
    }

    const password = `${displayPassword}`;
    navigator.clipboard.writeText(password);

    const copyBtn = document.querySelector(".copy-btn");
    copyBtn.insertAdjacentHTML("afterbegin", "<h2>COPIED</h2>");

    setTimeout(() => {
      copyBtn.removeChild(copyBtn.firstChild);
    }, 3000);
  }

  return (
    <div className="password-display">
      <h2>Password Generator</h2>
      <label htmlFor="password-char" className="password-display-field">
        <input
          type="text"
          placeholder="Your password will appear here"
          id="password-char"
          disabled
          value={displayPassword}
        />
        <button className="copy-btn" onClick={copyPassword}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M747.691-220.001H332.309q-30.308 0-51.308-21t-21-51.308v-535.382q0-30.308 21-51.308t51.308-21h277.692l209.998 209.998v397.692q0 30.308-21 51.308t-51.308 21Zm-167.69-440V-840H332.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v535.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846h415.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463v-367.692H580.001Zm-407.692 600q-30.308 0-51.308-21t-21-51.308v-527.69H160v527.69q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846h407.69v59.998h-407.69ZM320-840v179.999V-840v560V-840Z" />
          </svg>
        </button>
      </label>
    </div>
  );
}

export default PasswordDisplay;
