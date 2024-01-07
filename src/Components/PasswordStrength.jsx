import { useState, useEffect } from "react";

function PasswordStrength({ passwordParams, displayPassword }) {
  const [passwordStrengthName, setPasswordStrengthName] = useState("");
  const [passwordStrengthEl, setPasswordStrengthEl] = useState(<></>);

  useEffect(() => {
    calculatePasswordStrength();
  }, [displayPassword]);

  const tooWeakStrengthHtml = (
    <>
      <span className="too-weak-strength"></span>
      <span></span>
      <span></span>
      <span></span>
    </>
  );

  const weakStrengthHtml = (
    <>
      <span className="weak-strength"></span>
      <span className="weak-strength"></span>
      <span></span>
      <span></span>
    </>
  );

  const mediumStrengthHtml = (
    <>
      <span className="medium-strength"></span>
      <span className="medium-strength"></span>
      <span className="medium-strength"></span>
      <span></span>
    </>
  );

  const strongStrengthHtml = (
    <>
      <span className="strong-strength"></span>
      <span className="strong-strength"></span>
      <span className="strong-strength"></span>
      <span className="strong-strength"></span>
    </>
  );

  function calculatePasswordStrength() {
    let passwordStrengthScore = 0;

    const { charLength, uppercase, lowercase, numbers, symbols } =
      passwordParams;

    if (charLength >= 8) {
      passwordStrengthScore += 1;
    }

    if (uppercase) {
      passwordStrengthScore += 1;
    }

    if (lowercase) {
      passwordStrengthScore += 1;
    }

    if (numbers) {
      passwordStrengthScore += 1;
    }

    if (symbols) {
      passwordStrengthScore += 1;
    }

    if (passwordStrengthScore === 1) {
      setPasswordStrengthName("too weak");
      setPasswordStrengthEl(tooWeakStrengthHtml);
    }

    if (passwordStrengthScore === 2) {
      setPasswordStrengthName("weak");
      setPasswordStrengthEl(weakStrengthHtml);
    }

    if (passwordStrengthScore === 3) {
      setPasswordStrengthName("medium");
      setPasswordStrengthEl(mediumStrengthHtml);
    }

    if (passwordStrengthScore === 4) {
      setPasswordStrengthName("strong");
      setPasswordStrengthEl(strongStrengthHtml);
    }
  }

  return (
    <div className="password-strength">
      <h2>STRENGTH</h2>
      <span className="strength-bars">
        <h2>{passwordStrengthName.toUpperCase()}</h2>
        <div className="strength-bar">{passwordStrengthEl}</div>
      </span>
    </div>
  );
}

export default PasswordStrength;
