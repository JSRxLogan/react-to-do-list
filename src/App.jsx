import Header from "./components/Header"
import MiddleComponent from "./components/MiddleComponent"
import Footer from "./components/Footer"

function App() {
  return (
      <div className="max-w-md mx-auto my-8 shadow-xl rounded-2xl overflow-hidden">
        <Header />
        <MiddleComponent />
        <Footer />
      </div>
  );
}

export default App;
