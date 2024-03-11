import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div>
      <ButtonComponent nameButton="Bottone" />

      <ImageComponent source="https://placedog.net/600" alt="Bau" />
    </div>
  );
}

export default App;
