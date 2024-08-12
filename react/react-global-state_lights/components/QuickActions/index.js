import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  turnAllLightsOn,
  turnAllLightsOff,
  allLightsOn,
  allLightsOff,
}) {
  return (
    <StyledQuickActions>
      <Button type="button" onClick={turnAllLightsOff} disabled={allLightsOff}>
        Turn all lights off
      </Button>
      <Button type="button" onClick={turnAllLightsOn} disabled={allLightsOn}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
