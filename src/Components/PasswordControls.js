import { useState } from "react";
import PasswordParams from "./PasswordParams";
import GeneratePassword from "./GeneratePassword";
import PasswordStrength from "./PasswordStrength";

function PasswordControls({ displayPassword, setDisplayPassword }) {
  const [passwordParams, setPasswordParams] = useState({});
  return (
    <div className="password-controls">
      <PasswordParams setPasswordParams={setPasswordParams} />
      <PasswordStrength
        passwordParams={passwordParams}
        displayPassword={displayPassword}
      />
      <GeneratePassword
        passwordParams={passwordParams}
        setDisplayPassword={setDisplayPassword}
      />
    </div>
  );
}

export default PasswordControls;
