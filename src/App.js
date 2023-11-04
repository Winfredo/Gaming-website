import Header from "./components/Header";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import Cod from "./components/Cod";
import GameCenters from "./components/GameCenters";
import Footer from "./components/Footer";

function App() {
  return (
 <main className='text-white'>
  <Header />

  <div className="w-full xl:max-w-[1250px] mx-auto px-4" >
    <Hero />
    <Trending />
    <Cod />
    <GameCenters />
  </div>
  <Footer />


  <div className="h-[10rem]"></div>
 </main>

  );
}

export default App;
 