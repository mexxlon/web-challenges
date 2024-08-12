import Lights from "../components/Lights";
import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function HomePage({
  lights,
  toggleLight,
  lightsOnCount,
  turnAllLightsOn,
  turnAllLightsOff,
}) {
  const allLightsOn = lights.every((light) => light.isOn);
  const allLightsOff = lights.every((light) => !light.isOn);

  return (
    <div>
      <h1>Home</h1>
      <p>{lightsOnCount} light(s) are on.</p>
      <Lights lights={lights} onToggle={toggleLight} />
      <QuickActions
        turnAllLightsOn={turnAllLightsOn}
        turnAllLightsOff={turnAllLightsOff}
        allLightsOn={allLightsOn}
        allLightsOff={allLightsOff}
      />
      <p>
        <Link href="/rooms">All Rooms →</Link>
      </p>
      <p>
        <Link href="/actions">Quick Actions →</Link>
      </p>
    </div>
  );
}
