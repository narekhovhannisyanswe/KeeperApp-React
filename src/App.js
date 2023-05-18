import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import Form from "./components/Form";


let isRegistered = true;

function App() {
  return (
    <div className="App">
      <Header />
      <Form isRegistered={isRegistered} />
      <Notes />
      <Footer />
    </div>
  );
}

export default App;
