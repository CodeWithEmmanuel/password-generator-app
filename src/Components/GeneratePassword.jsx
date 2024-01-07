function GeneratePassword({ passwordParams, setDisplayPassword }) {
  const { charLength, uppercase, lowercase, numbers, symbols } = passwordParams;

  let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  let numberChars = "0123456789";
  let symbolsChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  if (!uppercase) {
    uppercaseChars = "";
  }

  if (!lowercase) {
    lowercaseChars = "";
  }

  if (!numbers) {
    numberChars = "";
  }

  if (!symbols) {
    symbolsChars = "";
  }

  function getPassword() {
    const allChars =
      uppercaseChars + lowercaseChars + numberChars + symbolsChars;
    let password = "";
    for (let i = 0; i < charLength; i++) {
      password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    setDisplayPassword(password);
  }

  return (
    <div className="generate-password">
      <button className="generate-password-btn" onClick={getPassword}>
        <h2>Generate Password</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
        </svg>
      </button>
    </div>
  );
}

export default GeneratePassword;
