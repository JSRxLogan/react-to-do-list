import Header from "./components/Header"
import MiddleComponent from "./components/MiddleComponent"
import Footer from "./components/Footer"

function App() {
  return (
      <div className="max-w-md mx-auto my-14 px-2 shadow-xl rounded-2xl overflow-hidden md:my-8">
        <Header />
        <MiddleComponent />
        <Footer />
      </div>
  );
}

export default App;
