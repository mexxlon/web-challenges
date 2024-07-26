import {
  StyledButton,
  StyledExtendedButton,
  StyledPrimaryButton,
} from "./components/StyledButton";

function App() {
  return (
    <main>
      <h1>Hello from React</h1>
      <StyledButton>Default Button </StyledButton>
      <StyledExtendedButton>next one</StyledExtendedButton>
      <StyledPrimaryButton>Best button in the fookin world</StyledPrimaryButton>
    </main>
  );
}

export default App;
