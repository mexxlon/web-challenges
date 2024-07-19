import "./styles.css";

export default function App() {
  return <Greeting name="Dominik" />;
}

function Greeting({ name }) {
  const names = ["Dominik", "Andrea", "Esraa"];
  const greetingMessage = names.includes(name)
    ? `Hello, Coach ${name}!`
    : `Hello, ${name}!`;

  return <section>{greetingMessage}</section>;
}
