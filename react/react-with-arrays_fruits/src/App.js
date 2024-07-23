import Card from "./components/Card";

export default function App({ name }) {
  const fruits = [
    { id: 10, name: "🍌 Banana", color: "banana" },
    { id: 11, name: "🍓 Strawberry", color: "strawberry" },
    { id: 12, name: "🥑 Avocado", color: "avocado" },
    { id: 13, name: "🥭 Mango", color: "mango" },
    { id: 14, name: "🫐 Blueberry", color: "blueberry" },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <Card key={id} name={name} color={color} />
      ))}
    </div>
  );
}
