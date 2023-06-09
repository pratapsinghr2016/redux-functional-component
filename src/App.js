import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <div className="App">
          <header className="App-header">
            <p>Count {counter.count}</p>

            <div className="container">
              <button
                className="button"
                onClick={() => dispatch({ type: "INC" })}
              >
                +
              </button>
              <button
                className="button"
                onClick={() => dispatch({ type: "DSC" })}
              >
                -
              </button>
              <button
                className="button"
                onClick={() =>
                  dispatch({ type: "INC5", payload: { value: 5 } })
                }
              >
                +5
              </button>
            </div>
          </header>
        </div>
      </header>
    </div>
  );
}

export default App;
