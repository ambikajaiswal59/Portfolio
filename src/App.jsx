import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
const App = () => {
  return (
    <div className='text-primary'>
      <Navbar />
      <div id="home" className="pt-40 pb-60 px-5 md:px-16 lg:px-[8rem]">
        <Home />
      </div>
      <div id="about" className="pb-30 px-5 md:px-16 lg:px-[8rem]">
        <About />

        </div>
    </div>
  );
};
export default App;