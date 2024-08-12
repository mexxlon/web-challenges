// import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("Failed fetching data.");
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }
  return response.json();
};

export default function ISSTracker() {
  const { data, error, mutate } = useSWR(URL, fetcher, {
    // destr mutate
    refreshInterval: 5000,
  });

  if (error) return <div>Error loading ISS data.</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data);

  const { longitude, latitude } = data;

  const handleReload = () => {
    mutate();
  };

  /*
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });
*/
  /*
  async function getISSCoords() {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setCoords({ longitude: data.longitude, latitude: data.latitude });
      }
    } catch (error) {
      console.error(error);
    }
  }
  */

  /*
  useEffect(() => {
    const timer = setInterval(() => {
      getISSCoords();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  */

  return (
    <main>
      <Map longitude={longitude} latitude={latitude} />
      <Controls
        longitude={longitude}
        latitude={latitude}
        onRefresh={() => handleReload()}
      />
    </main>
  );
}
