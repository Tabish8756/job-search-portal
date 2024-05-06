import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const CardContainer = styled(Box)`
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px 0px;
  padding: 5px;
  max-width: 360px;
`;


export const Logo = styled.img`
  width: 25px;
  height: 2.5rem;
`;

export const ApplyButton = styled(Button)`
  && {
    background: rgb(85, 239, 196);
    color: rgb(0, 0, 0);
    width: 100%;
    font-weight: 500;
    padding: 8px 18px;

    &:hover {
      background: rgb(85, 239, 196);
    }
  }
`;