import Lights from "../components/Lights";
import Link from "../components/Link";

export default function HomePage({ lights, toggleLight, lightsOnCount }) {
  return (
    <div>
      <h1>Home</h1>
      <p>{lightsOnCount} light(s) are on.</p>
      <Lights lights={lights} onToggle={toggleLight} />
      <p>
        <Link href="/rooms">All Rooms →</Link>
      </p>
      <p>
        <Link href="/actions">Quick Actions →</Link>
      </p>
    </div>
  );
}
