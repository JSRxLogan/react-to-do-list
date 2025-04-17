import Header from "./components/Header"
import MiddleComponent from "./components/MiddleComponent"
import Footer from "./components/Footer"

function App() {
  return (
      <div className="max-w-md mx-auto shadow-xl rounded-2xl overflow-hidden my-5 px-2.5 md:my-8 md:px-0">
        <Header />
        <MiddleComponent />
        <Footer />
      </div>
  );
}

export default App;
