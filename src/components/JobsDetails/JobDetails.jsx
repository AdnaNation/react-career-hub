import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const {
    id,
    job_title,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    contact_information,
  } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job);
  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast("You have applied successfully ");
  };
  return (
    <div>
      <h2>Job Details of: {job.job_title}</h2>
      <div className="grid gap-4 md:grid-cols-8">
        <div className="border md:col-span-5">
          <p>
            <span>Job Descrition:</span> {job.job_description}
          </p>
          <p>
            <span>Job Responsibility:</span> {job.job_responsibility}
          </p>
          <div>
            <p>Educational Requirements:</p>
            <p>{job.educational_requirements}</p>
          </div>
          <div>
            <p>Experiences:</p>
            <p>{job.experiences}</p>
          </div>
        </div>
        <div className="border md:col-span-3">
          <div>
            <h2>Job Details</h2>
            <hr />
            <p>
              <span>Salary:</span> {job.salary}
            </p>
            <p>
              <span>Job Title:</span> {job.job_title}
            </p>

            <h2>Contact Information</h2>
            <hr />
            <p>
              <span>Phone:</span> {job.contact_information.phone}
            </p>
            <p>
              <span>Email:</span> {job.contact_information.email}
            </p>
            <p>
              <span>Address:</span> {job.contact_information.address}
            </p>
          </div>
          <button onClick={handleApplyJob} className="btn btn-primary w-full">
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
