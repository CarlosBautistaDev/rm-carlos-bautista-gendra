import { Provider } from "react-redux";
import generateStore from "./redux/store";
import { Characters } from "./components/characters";
import GlobalStyle from "./styles/style.global";
import Particles from "react-tsparticles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Search } from "./components/search";
import { Profile } from "./components/profile";

function App() {
  const store = generateStore();
  const particlesInit = (main) => main;
  const particlesLoaded = (container) => container;

  return (
    <Provider store={store}>
      <>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Characters />} />
            <Route path="/character" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>{" "}
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "",
              },
              image: "",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "100%",
            },
            fullScreen: {
              zIndex: 1,
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "bubble",
                },
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  opacity: 0,
                  size: 0,
                },
                grab: {
                  distance: 400,
                },
                repulse: {
                  distance: 400,
                },
              },
            },
            particles: {
              color: {
                value: "#777",
              },
              links: {
                color: {
                  value: "#ffffff",
                },
                distance: 150,
                opacity: 0.5,
              },
              move: {
                attract: {
                  rotate: {
                    x: 600,
                    y: 600,
                  },
                },
                enable: true,
                outModes: {
                  bottom: "out",
                  left: "out",
                  right: "out",
                  top: "out",
                },
                random: true,
                speed: 0.6,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 160,
              },
              opacity: {
                random: {
                  enable: true,
                },
                value: {
                  min: 0,
                  max: 1,
                },
                animation: {
                  enable: true,
                  speed: 0.5,
                  minimumValue: 0,
                },
              },
              size: {
                random: {
                  enable: true,
                },
                value: {
                  min: 1,
                  max: 4,
                },
                animation: {
                  speed: 1,
                  minimumValue: 0.3,
                },
              },
            },
          }}
        />
      </>
    </Provider>
  );
}

export default App;
