import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#000",
        },
        particles: {
          number: {
            value: 80,
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
          },
          move: {
            enable: true,
            speed: 1,
          },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
          },
        },
      }}
    />
  );
};

particlesJS("particles-container", {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      move: { enable: true, speed: 2 }
    },
    interactivity: {
      events: { onhover: { enable: true, mode: "repulse" } },
      modes: { repulse: { distance: 100, duration: 0.4 } }
    }
  });
  

const App = () => {
  return (
    <div className="relative w-full h-screen">
      <ParticleBackground />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white z-10">
        <nav className="fixed top-0 w-full bg-opacity-50 backdrop-blur-md p-4 flex justify-between">
          <h1 className="text-xl font-bold">Supply Chain Tracker</h1>
          <button className="px-4 py-2 bg-blue-500 rounded">Login</button>
        </nav>
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold">Welcome to Decentralized Medicine Supply Chain</h2>
          <p className="text-lg mt-2">Ensuring Transparency and Security</p>
        </section>
      </div>
    </div>
  );
};

export default App;