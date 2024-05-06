import { Box, CircularProgress } from "@mui/material";
import { LoaderContainer } from "./styled-componet";

const Loader = () =>{
  return(
    <LoaderContainer>
      <CircularProgress />
    </LoaderContainer>
  )
}

export default Loader;