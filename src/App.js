import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
 <main className='text-white'>
  <Header />

  <div className="w-full xl:max-w-[1250px] mx-auto px-4" >
    <Hero />
  </div>
 </main>

  );
}

export default App;
 