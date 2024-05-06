import { useRef } from "react";
import {
  TextField,
  Typography,
} from "@mui/material";
import { JobCard, Loader } from "../../components";
import { useEffect, useState } from "react";
import { useGetJobListQuery } from "../../redux/services/joblist";
import { AutocompleteWrapper, FilterContainer, JobContainer } from "./styled-component";

const JobSearch = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [jobList, setJobList] = useState<any>([]);
  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetJobListQuery({ limit: 10, offset: page - 1 });

  const filterOption = [
    {
      label: "Role",
      options: [
        "Frontend Developer",
        "Backend Developer",
        "Fullstack Developer",
        "Devops Engineer",
        "Data Scientist",
        "Data Analyst",
        "Business Analyst",
        "Product Manager",
        "UI/UX Designer",
        "QA Engineer",
        "Mobile Developer",
        "Software Engineer",
        "Technical Architect",
        "Engineering Manager",
        "Engineering Director",
        "CTO",
        "CEO",
        "COO",
        "CFO",
        "CMO",
        "CIO",
        "CTO",
        "CISO",
        "CSO",
        "CPO",
        "CDO",
        "CRO",
        "CLO",
        "CBO",
        "CCO",
        "CQO",
        "CVO",
        "CWO",
      ],
      multiple: true,
    },
    {
      label: "No. of Employees",
      options: ["1-10", "21-50", "51-100", "201-500", "500+"],
      multiple: true,
    },
    {
      label: "Experience",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      multiple: false,
    },
    {
      label: "Remote",
      options: ["Remote", "Hybrid", "In-office"],
      multiple: true,
    },
    {
      label: "Min Base Pay",
      options: [
        "0L",
        "1L",
        "2L",
        "3L",
        "4L",
        "5L",
        "6L",
        "7L",
        "8L",
        "9L",
        "10L",
      ],
      mutiple: false,
    },
  ];

  const handleScroll = () => {
    if (
      ref.current &&
      ref.current.getBoundingClientRect().bottom <= window.innerHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    if (data && Array.isArray((data as any)?.jdList)) {
      setJobList((prev: any) => [...prev, ...(data as any)?.jdList]);
    }
  }, [data]);

  return (
    <>
      <FilterContainer>
        {filterOption.map((filter: any) => (
          <AutocompleteWrapper
            key={filter.label}
            multiple={filter.multiple}
            id={filter.label}
            options={filter.options}
            renderInput={(params) => (
              <TextField
                {...params}
                label={filter.label}
                placeholder={filter.label}
              />
            )}
          />
        ))}
      </FilterContainer>
     { !isLoading ? <JobContainer ref={ref}>
        {data && jobList?.map((job: any) => <JobCard jobList={job} />)}
      </JobContainer> : <Loader />}
    </>
  );
};

export default JobSearch;
