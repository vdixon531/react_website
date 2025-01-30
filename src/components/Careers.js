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
        "Developed scalable cloud solutions and microservices using AWS, improving system efficiency by 30%.",
        "Enhanced automation pipelines using CI/CD best practices, reducing deployment time from hours to minutes.",
        "Collaborated with cross-functional teams to optimize system performance, debugging and improving API response times.",
        "Designed and implemented RESTful APIs to support enterprise logistics applications, ensuring seamless data integration."
      ],
    detailsPage: "/career/purolator-digital-lab",
   },
   {
     id: 2,
     company: "System1",
     logo: "https://res.cloudinary.com/dgpp4gcw5/image/upload/v1738186462/system1_dhsgnr.png",
     title: "Jr. Full Stack Software Developer",
     description: [
        "Designed and implemented UI components for high-traffic web applications, improving user engagement metrics by 15%.",
        "Developed and maintained React and TypeScript applications, ensuring smooth state management with Redux.",
        "Worked closely with designers and backend teams to integrate GraphQL APIs and improve data-fetching performance.",
        "Optimized front-end rendering and reduced page load times by implementing efficient caching and lazy-loading strategies."
      ],
     detailsPage: "/career/system1",
   },
   {
     id: 3,
     company: "Sun Life Financial",
     logo: "https://res.cloudinary.com/dgpp4gcw5/image/upload/v1738186452/img-slf_venzty.jpg",
     title: "Cloud Solutions Analyst",
     description: [
        "Developed scalable APIs and microservices for Sun Life’s AWS-based cloud platforms, enabling seamless digital transformations.",
        "Implemented serverless solutions using AWS Lambda, S3, and DynamoDB, reducing infrastructure costs by 25%.",
        "Automated cloud infrastructure provisioning using Terraform and CloudFormation to enhance system reliability.",
        "Conducted security audits and performance optimizations to improve overall system uptime and efficiency."
      ],
     detailsPage: "/careers/slf-cloud-ops",
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
     detailsPage: "/careers/slf-dev-ops",
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
     detailsPage: "/careers/uofg",
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
