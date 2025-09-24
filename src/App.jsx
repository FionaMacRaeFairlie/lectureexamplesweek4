import "./App.css";
import { useState } from "react";
import BasicStateEx from "./components/basicStateExample";
import LessText from "./components/Lesstext";
import Numbers from "./components/Numbers";
import CountButton1 from "./components/CountButton1";
import CountButton2 from "./components/CountButton2";
import StarRating from "./components/Stars";
import InputPhrase from "./components/InputPhrase";

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <div className="component"><BasicStateEx /></div>
      <div className="component">
        <LessText
          text={`Burning household rubbish in giant incinerators to make electricity is
        now the dirtiest way the UK generates power, BBC analysis has found.
        Nearly half of the rubbish produced in UK homes, including increasing
        amounts of plastic, is now being incinerated. Scientists warn it is a
        “disaster for the climate” - and some are calling for a ban on new
        incinerators. The BBC examined five years of data from across the
        country, and found that burning waste produces the same amount of
        greenhouse gases for each unit of energy as coal power, which was
        abandoned by the UK last month.`}
          maxLength={15}
        />
      </div>
      <div className="component">
        <Numbers />
      </div>
      <div className="component">
        <div className="component">
          <CountButton1 count={count} onClick={() => setCount(count + 1)} />
          <CountButton1 count={count} onClick={() => setCount(count + 1)} />
        </div>

        <div className="component">
          <CountButton2 count={count} onClick={handleClick} />
          <CountButton2 count={count} onClick={handleClick} />
        </div>
      </div>

      <div className="component">
        <StarRating />
      </div>
      <div className="component">
        <InputPhrase />
      </div>
    </div>
  );
}

export default App;
