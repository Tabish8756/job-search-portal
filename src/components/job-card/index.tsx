import { Box, Typography } from "@mui/material";
import { ApplyButton, CardContainer, Logo} from "./styled-component";

const JobCard = ({ jobList }: any) => {
  return (
    <CardContainer>
      <Box  padding="8px 18px">
        <Box sx={{ display: "flex" }}>
          <Logo src={jobList?.logoUrl} alt="Company Logo" />
          <Box sx={{ marginLeft: "20px" }}>
            <Typography sx={{ fontSize: "13px", fontWeight: "600", letterSpacing: "1px", color: "#8b8b8b" }}>
              {jobList?.companyName}
            </Typography>
            <Typography sx={{ fontSize: "14px", lineHeight: "1.5" }}>
              {jobList?.jobRole}
            </Typography>
            <Typography sx={{ fontSize: "11px", fontWeight: "500" }}>
              {jobList?.location}
            </Typography>
          </Box>
        </Box>
        <Typography sx={{ fontSize: "14px", fontWeight: "500", color: "rgb(77, 89, 106)", lineHeight: "1.43" }}>
          Estimated Salary : Rs{jobList?.minJdSalary} - Rs{jobList?.maxJdSalary} ✅
        </Typography>
        <Box sx={{ position: "relative" }}>
          <Typography sx={{ fontSize: "16px", fontWeight: "500", lineHeight: "1.5" }}>
            About Company:
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
            About us
          </Typography>
          <Box sx={{ fontSize: "14px", fontWeight: "400", position: "relative", overflow: "hidden", lineHeight: "1.5", maxHeight: "180px" }}>
            <Typography>{jobList?.jobDetailsFromCompany}</Typography>
            <Box sx={{ position: "absolute", bottom: 0, width: "100%", height: "2.5em", backgroundImage: "linear-gradient(rgba(255,255,255,0), rgba(255,255,255,1))" }} />
          </Box>
        </Box>
        <a href={jobList?.jdLink} style={{ position: "relative", top: "-20px", display: "block", textDecoration: "none" }}>
          <Typography sx={{ textAlign: "center", fontSize: "12px", color: "#4943da" }}>
            View Job
          </Typography>
        </a>
        <Box padding="10px 0">
          <Typography sx={{ fontSize: "13px", fontWeight: "600", color: "#8b8b8b", letterSpacing: "1px" }}>
            Minimum Experience
          </Typography>
          <Typography sx={{ fontSize: "14px", lineHeight: "1.5" }}>
            {jobList?.minExp} years
          </Typography>
        </Box>
      </Box>
      <Box padding="0 15px">
        <ApplyButton>
          ⚡ Easy Apply
        </ApplyButton>
      </Box>
    </CardContainer>

  );
};

export default JobCard;
