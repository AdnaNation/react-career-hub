import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="mt-4">
        <img className="ml-4" src={logo} alt={job_title} />
      </div>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="mt-4 text-2xl flex gap-7 text-[#757575]">
          <h2 className="flex items-center">
            <CiLocationOn className=" mr-2"></CiLocationOn> {location}
          </h2>
          <h2 className="flex items-center">
            <HiOutlineCurrencyDollar className="mr-2"></HiOutlineCurrencyDollar>
            Salary: {salary}
          </h2>
        </div>
        <div className="card-actions ">
          <Link to={`/job/${id}`}>
            <button className="btn bg-[#7E90FE] text-white font-extrabold text-xl  px-4">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
