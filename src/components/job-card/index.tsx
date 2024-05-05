import { Box, Button, Typography } from "@mui/material";

const JobCard = ({ jobList }: any) => {
  return (
    <Box
      className="main-container"
      sx={{
        borderRadius: "20px",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 4px 0px",
        padding: "5px",
        maxWidth: "360px",
      }}
    >
      <Box className="job-details-section" padding="8px 18px">
        <Box className="job-card-header" sx={{ display: "flex" }}>
          <Box className="logo-section">
            <Box
              component="img"
              src={jobList?.logoUrl}
              sx={{ width: "25px", height: "2.5rem" }}
            />
          </Box>
          <Box
            className="company-name-role-location-section"
            sx={{ marginLeft: "20px" }}
          >
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: "600",
                letterSpacing: "1px",
                color: "#8b8b8b",
              }}
            >
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
        <Box className="salary-section">
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              color: "rgb(77, 89, 106)",
              lineHeight: "1.43",
            }}
          >
            Estimated Salary : Rs{jobList?.minJdSalary} - Rs
            {jobList?.maxJdSalary} ✅
          </Typography>
        </Box>
        <Box className="job-details-company" sx={{ position: "relative" }}>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "500", lineHeight: "1.5" }}
          >
            About Company:
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
            About us
          </Typography>
          <Box
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              position: "relative",
              overflow: "hidden",
              lineHeight: "1.5",
              maxHeight: "180px",
            }}
          >
            <Typography>{jobList?.jobDetailsFromCompany}</Typography>
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: "2.5em",
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0), rgba(255,255,255,1))",
              }}
            />
          </Box>
        </Box>
        <a
          href={jobList?.jdLink}
          className="view-job-section"
          style={{
            position: "relative",
            top: "-20px",
            display: "block",
            textDecoration: "none",
          }}
        >
          <Typography
            sx={{ textAlign: "center", fontSize: "12px", color: "#4943da" }}
          >
            View Job
          </Typography>
        </a>
        <Box className="minimu-experience-section" sx={{ marginTop: "10px" }}>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "600",
              color: "#8b8b8b",
              letterSpacing: "1px",
            }}
          >
            Minimum Experience
          </Typography>
          <Typography sx={{ fontSize: "14px", lineHeight: "1.5" }}>
            {jobList?.minExp} years
          </Typography>
        </Box>
      </Box>
      <Box className="apply-section" padding="0px 15px">
        <Button
          sx={{
            background: "rgb(85, 239, 196)",
            color: "rgb(0, 0, 0)",
            width: "100%",
            fontWeight: "500",
            padding: "8px 18px",
            "&:hover": {
              background: "rgb(85, 239, 196)",
            },
          }}
        >
          ⚡ Easy Apply
        </Button>
      </Box>
    </Box>
  );
};

export default JobCard;
