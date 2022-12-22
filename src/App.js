import "./App.css";
import Subscription from "./components/subscription/Subscription";
import Description from "./components/description/Description";
import Pros from "./components/pros/Pros";
function App() {
  return (
    <div className="App">
      <Description />
      <Subscription />
      <Pros />
    </div>
  );
}

export default App;
