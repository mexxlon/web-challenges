import { useState } from "react";
import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import HomePage from "./index";

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState([
    { id: "1", name: "Living Room", isOn: false },
    { id: "2", name: "Kitchen", isOn: false },
    { id: "3", name: "Bedroom", isOn: false },
    { id: "4", name: "Bathroom", isOn: false },
    { id: "5", name: "Garage", isOn: false },
    { id: "6", name: "Porch", isOn: false },
    { id: "7", name: "Garden", isOn: false },
    { id: "8", name: "Office", isOn: false },
  ]);

  function toggleLight(id) {
    setLights((prevLights) =>
      prevLights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function turnAllLightsOn() {
    setLights((prevLights) =>
      prevLights.map((light) => ({ ...light, isOn: true }))
    );
  }

  function turnAllLightsOff() {
    setLights((prevLights) =>
      prevLights.map((light) => ({ ...light, isOn: false }))
    );
  }

  const lightsOnCount = lights.filter((light) => light.isOn).length;

  return (
    <Layout>
      <GlobalStyle />
      <HomePage
        lights={lights}
        toggleLight={toggleLight}
        lightsOnCount={lightsOnCount}
        turnAllLightsOn={turnAllLightsOn}
        turnAllLightsOff={turnAllLightsOff}
      />
      <Component {...pageProps} />
    </Layout>
  );
}
