import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";
import TitleComponent from "./components/TitleComponent";

function App() {
  return (
    <div className="container">
      <TitleComponent nameTitle="Il tuo Bau a portata di clik" />

      <ButtonComponent nameButton="BAUUUU!" />

      <ImageComponent source="https://placedog.net/600" alt="Bau" />
    </div>
  );
}

export default App;
