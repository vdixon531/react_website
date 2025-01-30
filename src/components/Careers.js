import React from "react";
import { Link } from "react-router-dom";
import "./Careers.css";  

const experiences = [
  {
    id: 1,
    company: "Purolator Digital Lab",
    logo: "https://res.cloudinary.com/dgpp4gcw5/image/upload/v1738186458/pdl_dgkque.jpg",
    title: "Software Engineering Co-op",
    description: [
        "Designed and implemented HTTP triggers with C# in a .NET-based mapping system to consolidate and process address data from multiple sources, enabling more efficient route optimization and improving data consistency across applications.",
        "Took on DevOps tasks to set up new project infrastructure using Azure DevOps, including CI/CD pipelines and Terraform, leading to faster deployment cycles and improved system reliability.",
        "Optimized application search capabilities by 10x using ElasticSearch in Python, refining query indexing and data structuring, allowing the system to process and consolidate millions of data records with significantly improved retrieval speeds.",
        "Developed a predictive maintenance AI model using Random Forest and Python, analyzing historical failure data to predict equipment failures with 92% accuracy, reducing downtime and optimizing maintenance schedules."
      ],
    detailsPage: "/career/purolator-digital-lab",
   },
   {
     id: 2,
     company: "System1",
     logo: "https://res.cloudinary.com/dgpp4gcw5/image/upload/v1738186462/system1_dhsgnr.png",
     title: "Jr. Full Stack Software Developer",
     description: [
        "Developed API & E2E testing frameworks in Python and CI/CD pipelines using Jenkins to improve software deployment and testing processes, leading to more efficient, reliable code delivery and an 80% reduction in manual testing efforts.",
        "Implemented automated testing frameworks for a search engine using MS Playwright in TypeScript, improving test coverage and reducing human error.",
        "Set up automated linting and formatting for team-owned repositories, ensuring consistent code quality."
      ],
     detailsPage: "/career/system1",
   },
   {
     id: 3,
     company: "Sun Life Financial",
     logo: "https://res.cloudinary.com/dgpp4gcw5/image/upload/v1738186452/img-slf_venzty.jpg",
     title: "Cloud Solutions Analyst",
     description: [
        "Optimized the performance of AWS EC2 instances, S3 storage, and Lambda functions by using Java scripts for automating and monitoring configurations, increasing responsiveness and cost-effectiveness by 20%",
        "Assisted in the migration of legacy code to cloud infrastructure, reducing operational downtime by 30% ",
        "Collaborated closely with developers and teams to troubleshoot and resolve AWS service-related issues, enhancing my ability to work with diverse teams."
      ],
     detailsPage: "/career/slf-coop",
   },
   {
     id: 4,
     company: "Sun Life Financial",
     logo: "https://res.cloudinary.com/dgpp4gcw5/image/upload/v1738186452/img-slf-cops_mlodxi.jpg",
     title: "Dev Ops Automation Engineer",
     description: [
        "Developed CI/CD pipelines using Jenkins, GitHub Actions, and Docker, reducing deployment failures by 40%.",
        "Managed containerized applications with Kubernetes, ensuring high availability and scalability.",
        "Implemented monitoring and logging solutions with Prometheus and Grafana to proactively identify system issues.",
        "Automated infrastructure provisioning and configuration management with Ansible and Terraform, streamlining deployment processes."
      ],
     detailsPage: "/career/slf-coop",
   },
   {
     id: 5,
     company: "University of Guelph",
     logo: "https://res.cloudinary.com/dgpp4gcw5/image/upload/v1738186462/uofg_jthokr.jpg",
     title: "Teachers Assistant",
     description: [
        "Led tutorials and workshops for CIS courses, simplifying complex topics such as data structures, algorithms, and OOP.",
        "Assisted students in debugging and optimizing their code, improving their problem-solving skills and project quality.",
        "Graded assignments, projects, and exams, providing detailed feedback to enhance student learning outcomes.",
        "Developed supplementary learning materials, including slides and coding exercises, to reinforce core programming concepts."
      ],
     detailsPage: "/career/uofg",
   },
];

const Careers = () => {
    return (
      <div className="careers-container">
        <div className="careers-list">
          {experiences.map((job) => (
            <div className="career-card" key={job.id}>
              <img src={job.logo} alt={job.company} className="company-logo" />
              <div className="career-info">
                
                {/* Company Name on its own line at the top */}
                <h3 className="company-name">{job.company}</h3>
  
                {/* Job Title below the company name */}
                <h2 className="job-title">{job.title}</h2>
  
                {/* Bullet Points for Description */}
                <ul className="career-description">
                  {job.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
  
                <Link to={job.detailsPage} className="see-more">
                  See more...
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};  
  

export default Careers;
