import Header from "./components/Header";
import Hero from "./components/Hero";
import Trending from "./components/Trending";

function App() {
  return (
 <main className='text-white'>
  <Header />

  <div className="w-full xl:max-w-[1250px] mx-auto px-4" >
    <Hero />
    <Trending />
  </div>

  <div className="h-[10rem]"></div>
 </main>

  );
}

export default App;
 