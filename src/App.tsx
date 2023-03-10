import React, { useCallback } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import FormPage from './containers/FormPage';
import ContentPage from './containers/ContentPage';

function App() {

  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // await console.log(container);
  }, []);

  return (
    <BrowserRouter>
      <div className='bg-red-600 min-h-screen bg-img py-5'>
        <Routes>
          <Route path="/*" element={<ContentPage />} />
          <Route path="/form/*" element={<FormPage />} />
        </Routes>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            "fullScreen": {
              "enable": true,
              "zIndex": 1
            },
            "particles": {
              "number": {
                "value": 400,
                "density": {
                  "enable": true
                }
              },
              "color": {
                "value": "#fff"
              },
              "shape": {
                "type": "circle"
              },
              "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 10,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": false,
                "distance": 500,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 2
              },
              "move": {
                "enable": true,
                "speed": 6,
                "direction": "bottom",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              // "events": {
              //   "onhover": {
              //     "enable": true,
              //     "mode": "bubble"
              //   },
              //   "onclick": {
              //     "enable": true,
              //     "mode": "repulse"
              //   },
              //   "resize": true
              // },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 0.5
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 4,
                  "duration": 0.3,
                  "opacity": 1,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true,
            "background": {
              // "color": "#0d47a1",
              "image": "https://harnishdesign.net/demo/html/zoon/images/intro-bg-7.jpg",
              "position": "50% 50%",
              "repeat": "no-repeat",
              "size": "cover"
            }
          }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;