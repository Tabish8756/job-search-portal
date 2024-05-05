import { useRef } from "react";
import { Autocomplete, Box, Divider, FormControl, IconButton, Select, TextField } from "@mui/material";
import { JobCard } from "../../components";
import { useEffect, useState } from "react";
import { useGetJobListQuery } from "../../redux/services/joblist";

const JobSearch = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [jobList, setJobList] = useState<any>([]);
  const [page, setPage] = useState(1);

const { data } = useGetJobListQuery({ limit: 10, offset: page - 1 });

return (
    <>
        <Box ref={ref} sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {data && (data as any)?.jdList.map((job: any) => <JobCard jobList={job} />)}
        </Box>
    </>
);
};

export default JobSearch;
