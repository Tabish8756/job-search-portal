import { Autocomplete, Box } from "@mui/material";
import styled from "@emotion/styled";

export const FilterContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  margin: 20px;
`;

export const JobContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  margin: 20px;
`;

export const AutocompleteWrapper = styled(Autocomplete)`
  flex: 1 1 1;
  min-width: 200px;
  margin-right: 10px;
`;