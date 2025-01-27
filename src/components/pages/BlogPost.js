import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer"; // Ensure Footer is correctly imported
import "../BlogPost.css"; // Import styles

// Example blog data (You can fetch dynamically later)
const blogData = {
  "purolator-digital-lab": {
    title: "Work-Term 3 Report",
    company: "Purolator Digital Lab",
    image: "/images/puro_truck.jpg",
    description:
    "As a Quality Assurance (QA) Developer at Purolator Digital Lab, I played a pivotal role in refining and optimizing digital solutions within a dynamic, fast-paced tech-driven environment. My work spanned multiple domains, from automation and infrastructure development to cloud-based solutions and real-time data processing. Collaborating with cross-functional teams, I helped drive innovation, improve developer experience, and streamline software deployment processes.",
  content: [
    {
      heading: "Purolator Digital Lab: Innovating the Future of Logistics",
      text: 
        "Purolator Digital Lab serves as the technology innovation hub of Purolator, driving forward-thinking solutions that integrate emerging technologies into daily operations. As a department dedicated to enhancing the logistics experience, the Digital Lab prioritizes efficiency, agility, and cutting-edge development. Unlike traditional corporate environments, the lab fosters a startup-like culture, emphasizing collaboration, iteration, and a willingness to challenge the status quo. Through quarterly hackathons, open-concept workspaces, and a commitment to continuous learning, the team cultivates an atmosphere where creativity thrives, and problem-solving is at the core of everything we do."
    },
    {
      heading: "Developer Experience and Technical Documentation",
      text: 
        "One of my primary responsibilities during my tenure was to create a detailed Developer Experience Guide, ensuring that both new and existing team members had access to structured onboarding materials and best practices. This document covered essential development workflows, CI/CD pipeline integration, and best coding practices within the Digital Lab. By collaborating with senior engineers, I compiled troubleshooting guides, environment setup instructions, and internal API documentation, making it easier for new developers to navigate the codebase and accelerate project delivery. This initiative significantly reduced onboarding time for new hires and improved overall team efficiency."
    },
    {
      heading: "Building and Optimizing Release Pipelines",
      text: 
        "Software deployment is a crucial component of any modern digital environment, and I had the opportunity to design and implement automated build and release pipelines from the ground up. Utilizing Azure DevOps, I developed workflows that integrated seamlessly with Azure Service Apps, Key Vault, and Kubernetes-based deployment strategies. These pipelines automated various testing, security checks, and deployment processes, ensuring that new code could be released with minimal human intervention. The automation I implemented led to a **60% reduction in deployment time**, increasing efficiency and allowing developers to focus more on feature development rather than manual deployments."
    },
    {
      heading: "Enhancing Search Functionalities with Elastic Search",
      text: 
        "In an effort to optimize search performance across Purolator's digital platforms, I delved deep into Elastic Search, fine-tuning search indexing, optimizing query performance, and implementing pagination techniques for improved user experience. My focus was on crafting advanced search queries that enhanced retrieval efficiency while ensuring system responsiveness under high loads. By implementing optimized search logic and leveraging indexing techniques, I contributed to a more seamless and dynamic search experience for end-users, significantly improving information accessibility across various internal applications."
    },
    {
      heading: "Developing and Deploying Serverless HTTP Triggers in C#",
      text: 
        "Modern cloud architectures thrive on event-driven systems, and I was tasked with developing HTTP triggers using C# and Azure Functions. These serverless functions were designed to handle asynchronous tasks such as logging system events, processing API requests, and automating internal workflows. This implementation helped reduce latency, improved system responsiveness, and facilitated real-time data processing without requiring dedicated infrastructure. Through this project, I gained deeper insights into cloud-based architectures and the benefits of event-driven programming in enterprise-scale applications."
    },
    {
      heading: "Research and Continuous Learning",
      text: 
        "Technology evolves rapidly, and staying ahead requires a commitment to learning and self-improvement. I dedicated a portion of my work term to deep-diving into Microsoft Azure services, completing structured learning paths on Microsoft Learn to solidify my understanding of serverless computing, DevOps automation, and cloud security best practices. Additionally, I actively engaged in internal knowledge-sharing sessions, discussing key learnings with my colleagues and refining team-wide best practices. This research-driven approach enabled me to take on increasingly complex projects with confidence and adaptability."
    },
    {
      heading: "Conclusion: Lessons Learned and Future Applications",
      text: 
        "My time at Purolator Digital Lab has been a transformative experience, allowing me to hone my technical skills while gaining exposure to real-world challenges in cloud computing, automation, and software scalability. I leave this experience with a deeper appreciation for well-structured CI/CD pipelines, cloud-native development, and the role of automation in modern software engineering. More importantly, I have cultivated a problem-solving mindset that will serve me well in future roles. Moving forward, I aim to leverage these insights to contribute to innovative, high-impact projects that drive efficiency and technological advancement."
    },
  ],  
  },
  "system1":{},
  "slf-cloud-ops":{},
  "slf-dev-ops":{},
  "uofg":{}
};

function BlogPost() {
  const { postId } = useParams(); // Get dynamic post ID from URL
  const post = blogData[postId];

  if (!post) {
    return <h2 className="error-message">Post Not Found</h2>;
  }

  return (
    <>
      {/* Hero Section with Featured Image */}
      <div className="blog-hero">
        <img src={post.image} alt={post.company} className="blog-hero__image" />
        <div className="blog-hero__overlay">
          <h1 className="blog-title">{post.title}</h1>
          <p className="blog-company">@ {post.company}</p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="blog-content">
        <h3>Job Description</h3>
        <p>{post.description}</p>

        {post.content.map((section, index) => (
          <div key={index}>
            <h3>{section.heading}</h3>
            <p>{section.text}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default BlogPost;
