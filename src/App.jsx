import { useState } from "react";
import PasswordDisplay from "./Components/PasswordDisplay";
import PasswordControls from "./Components/PasswordControls";

function App() {
  const [displayPassword, setDisplayPassword] = useState("");
  return (
    <div className="App">
      <PasswordDisplay displayPassword={displayPassword} />
      <PasswordControls
        displayPassword={displayPassword}
        setDisplayPassword={setDisplayPassword}
      />
    </div>
  );
}

export default App;
