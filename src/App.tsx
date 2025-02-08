import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home/Home'
import { useEffect, useState } from 'react';
import { NotFoundPage } from './pages/not_found/NotFound';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from "@tsparticles/slim";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  const [_init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });

  }, []);

  useEffect(() => {
    AOS.init({
      easing: "ease-in-out-quart",
      duration: 1000,
      once: true,
    });
  }, []);

  const urlBase = "/wedding-invitation-1"
  return (
    <>


      <BrowserRouter>

        <Routes>
          <Route path="*" Component={NotFoundPage} />
          <Route path={urlBase} Component={HomePage} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
