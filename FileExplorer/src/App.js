import "./styles.css";
import explorer from "./data/explorer";
import FileSystem from "./components/FileSystem";

export default function App() {
  return (
    <div className="App">
      <FileSystem files={explorer} />
    </div>
  );
}
