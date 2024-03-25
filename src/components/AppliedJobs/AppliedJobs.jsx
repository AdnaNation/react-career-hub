import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
      // console.log(jobs, storedJobIds, jobsApplied);
    }
  }, [jobs]);
  return (
    <div>
      <div className="flex justify-end mx-28">
        <details className="dropdown">
          <summary className="m-1 btn">
            Filter <RiArrowDropDownLine></RiArrowDropDownLine>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleJobsFilter("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleJobsFilter("remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleJobsFilter("onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>

      {displayJobs.map((job) => (
        <div
          key={job.id}
          className="card card-side bg-base-100 shadow-xl mb-5 mx-28"
        >
          <figure className="bg-gray-300 my-12 mx-4 px-7 rounded-lg">
            <img src={job.logo} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{job.job_title}</h2>
            <p>{job.company_name}</p>
            <div>
              <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
                {job.remote_or_onsite}
              </button>
              <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
                {job.job_type}
              </button>
            </div>
            <div className="mt-4 text-2xl flex gap-7 text-[#757575]">
              <h2 className="flex items-center">
                <CiLocationOn className=" mr-2"></CiLocationOn> {job.location}
              </h2>
              <h2 className="flex items-center">
                <HiOutlineCurrencyDollar className="mr-2"></HiOutlineCurrencyDollar>
                Salary: {job.salary}
              </h2>
            </div>
            <div className="flex justify-end">
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppliedJobs;
