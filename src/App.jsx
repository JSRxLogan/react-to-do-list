import Header from "./components/Header"
import MiddleComponent from "./components/MiddleComponent"
import Footer from "./components/Footer"

function App() {
  return (
      <div className="max-w-md mx-auto mt-20 px-2 shadow-xl rounded-2xl  md:mt-8">
        <Header />
        <MiddleComponent />
        <Footer />
      </div>
  );
}

export default App;
