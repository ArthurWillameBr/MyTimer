import styled from "styled-components";

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 1.5rem;
  }
`;

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;
  max-height: 300px;
  

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background: ${(props) => props.theme["th"]};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme["foreground"]};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }
    td {
      background-color: ${(props) => props.theme["td"]};
      border-top: 4px solid ${(props) => props.theme["background"]};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        border-top-left-radius: 8px;
      }
      &:last-child {
        border-top-right-radius: 8px;
      }
    }
  }
`;

const STATUS_COLORS = {
    green: 'green',
    yellow: 'yellow',
    red: 'red',
} as const;

interface StatusProps {
    statusColor: keyof typeof STATUS_COLORS;
}

export const Status = styled.span<StatusProps>`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
        content: '';
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
    }
`
