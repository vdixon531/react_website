import React from "react";
import { useParams } from "react-router-dom";
import "../BlogPost.css"; 

const blogData = {
  "purolator-digital-lab": {
    title: "Work-Term Report",
    company: "Purolator Digital Lab",
    image: "https://res.cloudinary.com/dgpp4gcw5/image/upload/v1738186458/puro_truck_yh29p5.jpg",
    "content": [
      {
        "heading": "💡 Key Takeaways & Skills Gained",
        "text": 
          "<ul style='font-size: 18px; line-height: 1.6;'><li>Enhanced backend development expertise using .NET and ElasticSearch.</li>" +
          "<li>Designed and implemented infrastructure for a new application from scratch using Azure DevOps & Terraform.</li>" +
          "<li>Optimized geo-location data consolidation with ElasticSearch, improving search efficiency.</li>" +
          "<li>Gained experience in AI/ML development through a predictive maintenance hackathon project.</li></ul>"
      },
      {
        "heading": "📌 Purolator Digital Lab - Software Engineering Co-op (Jan 2024 – Aug 2024)",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>For my Winter & Summer 2024 Co-op terms, I worked as a <strong>Software Engineering Co-op at Purolator Digital Lab</strong>. This role exposed me to <strong>large-scale distributed systems, cloud automation, and data processing challenges</strong>. My work revolved around <strong>developing backend services, optimizing infrastructure through DevOps, and improving search and data processing performance</strong>. I collaborated with teams using <strong>.NET, Azure DevOps, Terraform, and ElasticSearch</strong> within an Agile workflow.</p>"
      },
      {
        "heading": "🏢 About My Employer - Purolator Digital Lab",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'><strong>Purolator</strong> is Canada’s leading integrated freight, package, and logistics provider. The <strong>Digital Lab</strong> focuses on leveraging <strong>data-driven solutions</strong> to enhance logistics operations, optimize route planning, and improve efficiency at scale. The lab fosters a <strong>startup-like culture</strong>, encouraging innovation, collaboration, and rapid prototyping through initiatives like <strong>quarterly hackathons</strong> and open-concept workspaces.</p>"
      },
      {
        "heading": "🔧 Building Scalable Address Mapping with .NET and Azure",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>One of my key projects involved designing and implementing <strong>HTTP triggers with C#</strong> in a <strong>.NET-based mapping system</strong>. This consolidated address data from multiple sources, ensuring <strong>route optimization</strong> and <strong>data consistency</strong>. Additionally, I deployed <strong>Azure Functions</strong> to create a real-time data pipeline, improving <strong>scalability and efficiency</strong>.</p>"
      },
      {
        "heading": "⚙️ DevOps and Cloud Automation - Building Infrastructure from Scratch",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>I was responsible for setting up the entire <strong>Azure DevOps infrastructure</strong> for a <strong>brand-new application</strong> that we built from the ground up. This included configuring <strong>CI/CD pipelines, infrastructure provisioning with Terraform, and automating deployments</strong>. Not often do you get to see the <strong>beginning of a product as a co-op</strong>, so this experience was incredibly valuable in understanding the full software development lifecycle.</p>"
      },
      {
        "heading": "🔍 ElasticSearch Performance Optimization for Geo-Tag Consolidation",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>I worked on optimizing <strong>ElasticSearch queries</strong> within a <strong>custom-built consolidation service</strong>. This system merged <strong>various geo-location tags</strong> to map them to a <strong>single, optimized location</strong>, improving accuracy and efficiency in logistics routing. By restructuring queries and refining indexing strategies, we achieved a <strong>10x improvement in search speed</strong> while handling significantly larger data volumes.</p>"
      },
      {
        "heading": "🚀 Predictive Maintenance Hackathon Project",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>A highlight of my co-op term was participating in a <strong>company-wide AI/ML hackathon</strong>. My team developed a <strong>Predictive Maintenance Application</strong> using a <strong>Random Forest AI model</strong>. By analyzing <strong>historical maintenance data</strong>, we predicted potential equipment failures with <strong>92% accuracy</strong>, demonstrating a method to reduce downtime and optimize maintenance schedules.</p>"
      },
      {
        "heading": "📡 Developing HTTP Triggers in C#",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>I built <strong>serverless HTTP triggers in C#</strong> to automate real-time API processing. This improved <strong>data responsiveness</strong> and streamlined backend operations by efficiently handling large-scale address data.</p>"
      },
      {
        "heading": "🎓 Conclusion",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>This experience gave me a deep understanding of <strong>backend engineering, cloud automation, and AI-driven logistics solutions</strong>. It solidified my technical foundation and prepared me for future challenges in large-scale software development.</p>"
      },
      {
        "heading": "🙏 Acknowledgments",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>A huge thank you to <strong>my mentors and colleagues</strong> at Purolator Digital Lab for their guidance and support throughout my co-op journey!</p>"
      }
    ]
  },
  "system1": {
    title: "Work-Term Report",
    company: "System1",
    image: "https://res.cloudinary.com/dgpp4gcw5/image/upload/v1738186462/s1-office_vs7umt.jpg",
    "content": [
      {
        "heading": "💡 Key Takeaways & Skills Gained",
        "text": 
          "<ul style='font-size: 18px; line-height: 1.6;'><li>Developed robust API & E2E testing frameworks in Python & TypeScript.</li>" +
          "<li>Worked with Jenkins to automate CI/CD processes, reducing manual testing effort by 80%.</li>" +
          "<li>Implemented Playwright-based UI testing for a privacy-first search engine (Startpage).</li>" +
          "<li>Improved search engine validation through automation, ensuring high accuracy and reliability.</li>" +
          "<li>Standardized code linting & formatting to enforce consistency across team repositories.</li></ul>"
      },
      {
        "heading": "📌 System1 - Software Engineering Co-op (Jan 2023 – Aug 2023)",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>For my Summer 2023 Co-op term, I worked as a <strong>Jr. Full Stack Software Developer at System1</strong>. My primary focus was on <strong>building automated testing frameworks, improving CI/CD workflows, and enhancing code quality</strong>. I collaborated with multiple teams across the organization, including a U.S.-based team working on <strong>Startpage</strong>, a private search engine, to ensure the highest standards in software reliability and privacy-focused technology.</p>"
      },
      {
        "heading": "🏢 About My Employer - System1",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'><strong>System1</strong> is a global leader in <strong>online advertising and content publishing</strong>, operating a collection of owned web properties while also supporting external publishers with <strong>advanced audience acquisition tools</strong>. As one of the largest digital advertisers in the world, System1 leverages <strong>data science, paid marketing, and privacy-first technology</strong> to scale user acquisition. Their portfolio includes <strong>Startpage</strong>, the world’s first and most private search engine, which provides <strong>surveillance-free search results</strong> through privacy-respecting advertising.</p>"
      },
      {
        "heading": "🔧 Developing Automated API & E2E Testing Frameworks",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>I designed and implemented <strong>API & end-to-end (E2E) testing frameworks in Python</strong> to enhance software reliability. By integrating these frameworks into the CI/CD pipelines, we reduced <strong>manual testing efforts by 80%</strong>, enabling faster, more reliable deployments.</p>"
      },
      {
        "heading": "⚙️ CI/CD & Code Management with Jenkins",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>I worked with teams across the organization to establish and maintain <strong>automated E2E testing, linting, and other code management processes</strong> using <strong>Jenkins</strong> as the CI/CD tool. This ensured that code quality remained consistent across multiple repositories while reducing manual intervention in the deployment process.</p>"
      },
      {
        "heading": "📡 UI Test Automation for Startpage Using MS Playwright",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>As part of my work with a <strong>U.S.-based team developing Startpage</strong>, I implemented <strong>automated UI testing</strong> using <strong>MS Playwright in TypeScript</strong>. This was a crucial step in verifying <strong>search engine responsiveness and UI component interactions</strong>, ensuring a seamless experience for users while maintaining <strong>privacy-first principles</strong>.</p>"
      },
      {
        "heading": "🔍 Improving Search Engine Test Coverage",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>I expanded test coverage for System1’s search engine projects by implementing <strong>automated testing frameworks</strong> to reduce human error and ensure consistent validation of search functionalities. These improvements helped maintain the integrity of search results while preventing regressions in the product’s core features.</p>"
      },
      {
        "heading": "🛠 Standardizing Code Quality Across Repositories",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>I set up <strong>automated linting and formatting</strong> for team-owned repositories, enforcing <strong>consistent code style</strong> across projects. This ensured maintainability and adherence to best practices within System1’s development teams.</p>"
      },
      {
        "heading": "🎓 Conclusion",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>This experience gave me hands-on exposure to <strong>test automation, CI/CD pipelines, and large-scale search engine validation</strong>. Working with System1’s engineering teams reinforced my ability to build scalable, maintainable testing infrastructure while collaborating with international teams on privacy-focused technology.</p>"
      },
      {
        "heading": "🙏 Acknowledgments",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>A huge thank you to <strong>the System1 and Startpage teams</strong> for their mentorship and support throughout my co-op journey!</p>"
      }
    ]
  },
  "slf-coop": {
    title: "Work-Term Report",
    company: "Sun Life Financial",
    image: "https://res.cloudinary.com/dgpp4gcw5/image/upload/v1738202411/sun_life_desk_eddze7.jpg",
    "content": [
      {
        "heading": "💡 Key Takeaways & Skills Gained",
        "text": 
          "<ul style='font-size: 18px; line-height: 1.6;'><li>Enhanced AWS performance optimization using EC2, S3, and Lambda, increasing responsiveness by 20%.</li>" +
          "<li>Implemented CI/CD pipelines with Jenkins and automated infrastructure with Terraform.</li>" +
          "<li>Developed monitoring dashboards using Grafana for real-time performance insights.</li>" +
          "<li>Automated cloud infrastructure using Ansible, saving up to 300x time in deployment processes.</li></ul>"
      },
      {
        "heading": "📌 Sun Life Financial - Cloud Solutions Analyst (Sept 2022 – Dec 2022)",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>During my time as a <strong>Cloud Solutions Analyst</strong> at <strong>Sun Life Financial</strong>, I focused on <strong>optimizing cloud infrastructure</strong> and automating processes to improve efficiency and cost-effectiveness. I collaborated closely with cross-functional teams to enhance cloud performance and drive operational success.</p>"
      },
      {
        "heading": "🚀 AWS Optimization & Automation",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>I optimized the performance of <strong>AWS EC2 instances, S3 storage, and Lambda functions</strong> by implementing automation scripts in Java, resulting in a <strong>20% increase in responsiveness and cost savings</strong>. I also assisted in <strong>migrating legacy code</strong> to the cloud, reducing operational downtime by <strong>30%</strong>.</p>"
      },
      {
        "heading": "🤝 Team Collaboration & Issue Resolution",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>I collaborated with developers and IT teams to <strong>troubleshoot and resolve AWS service-related issues</strong>, enhancing my ability to work effectively in diverse team environments and ensuring seamless cloud operations.</p>"
      },
      {
        "heading": "📌 Sun Life Financial - DevOps Automation Engineer (May 2022 – Aug 2022)",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>As a <strong>DevOps Automation Engineer</strong> at Sun Life Financial, I contributed to the company's <strong>DevOps transformation journey</strong>, implementing automation and CI/CD practices to accelerate software deployment and enhance infrastructure reliability.</p>"
      },
      {
        "heading": "⚙️ DevOps Transformation with CI/CD",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>I played a pivotal role in setting up <strong>CI/CD pipelines using Jenkins</strong>, containerizing applications with <strong>Docker</strong>, and managing infrastructure with <strong>Terraform</strong>. This transformation streamlined deployment processes and reduced manual efforts significantly.</p>"
      },
      {
        "heading": "📊 Real-Time Monitoring with Grafana",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>Developed <strong>monitoring dashboards using Grafana</strong> that integrated real-time system metrics, providing actionable insights into resource consumption and system performance, enabling proactive management and optimization.</p>"
      },
      {
        "heading": "🛠 Automating Cloud Infrastructure with Ansible",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>As part of the Cloud Ops team, I worked on automating cloud infrastructure deployment using <strong>Ansible</strong>, reducing setup times and ensuring consistent, repeatable configurations across environments.</p>"
      },
      {
        "heading": "📚 Building Documentation & Knowledge Sharing",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>I created comprehensive <strong>onboarding documentation for Terraform and Packer</strong>, streamlining the onboarding process for new team members and enabling them to quickly contribute to cloud projects.</p>"
      },
      {
        "heading": "🎓 Conclusion",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>My co-op experiences at Sun Life Financial have been instrumental in developing my skills in <strong>cloud computing, DevOps practices, and infrastructure automation</strong>. These opportunities allowed me to contribute to impactful projects while learning from industry experts.</p>"
      },
      {
        "heading": "🙏 Acknowledgments",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>A huge thank you to my mentors and colleagues at Sun Life Financial for their support and guidance throughout my co-op journey!</p>" +
          "<p style='font-size: 18px; line-height: 1.6;'>Special shoutout to my amazing team for making this experience even more memorable! Our outings, including the <strong>hike and the trip to The Rec Room in Toronto</strong>, were an absolute blast! Thanks for all the great memories and fun times. 🎉🥾🎮</p>"
      }
    ]
  },
  "uofg": {
    title: "Work Experience Blog",
    company: "University of Guelph",
    image: "https://res.cloudinary.com/dgpp4gcw5/image/upload/v1738203497/uofg_banner_hkpghr.jpg",
    "content": [
      {
        "heading": "💡 Key Takeaways & Skills Gained",
        "text": 
          "<ul style='font-size: 18px; line-height: 1.6;'><li>Developed strong instructional and mentoring skills by guiding students through complex computer science concepts.</li>" +
          "<li>Gained experience with grading, lab facilitation, and exam invigilation in both introductory and advanced CS courses.</li>" +
          "<li>Refined expertise in Java, object-oriented programming, Linux command-line tools, Git, and testing frameworks like JUnit.</li>" +
          "<li>Enhanced my ability to communicate technical topics effectively, both in writing and verbally, to diverse student groups.</li></ul>"
      },
      {
        "heading": "📌 Teaching Assistant - CIS*2030: Structure and Applications of Microcomputers (Fall 2023)",
        "text": 
          "<p style='font-size: 18p x; line-height: 1.6;'>In Fall 2023, I worked as a <strong>Teaching Assistant</strong> for <strong>CIS*2030: Structure and Applications of Microcomputers</strong>. This role allowed me to help students understand the fundamental principles of <strong>computer architecture, assembly language, and hardware interfacing</strong>. My responsibilities included:</p>"
      },
      {
        "heading": "🖥️ Facilitating Labs & Debugging Assembly Code",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>I conducted <strong>in-person and online lab sessions</strong>, guiding students through hands-on exercises in <strong>assembly programming, microprocessor architecture, and interfacing hardware components</strong>. A key aspect of my role was assisting students in <strong>debugging assembler code</strong> and ensuring they understood low-level programming concepts.</p>"
      },
      {
        "heading": "📊 Grading & Exam Invigilation",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>I was responsible for grading lab exercises and assignments in a timely manner, ensuring that students received constructive feedback on their work. Additionally, I helped <strong>proctor exams</strong> and assisted in managing final grades using <strong>Excel and CourseLink</strong>.</p>"
      },
      {
        "heading": "💻 Online & Hybrid Course Support",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>Given the hybrid nature of the course, I maintained a strong internet connection to facilitate remote labs and office hours, ensuring students had continuous access to support regardless of their learning mode.</p>"
      },
      {
        "heading": "📌 Teaching Assistant - CIS*2430: Object-Oriented Programming (Fall 2024)",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>In Fall 2024, I served as a <strong>Teaching Assistant</strong> for <strong>CIS*2430: Object-Oriented Programming</strong>. This role involved a more advanced focus on <strong>Java, Git, test-driven development, and software engineering best practices</strong>. My key responsibilities included:</p>"
      },
      {
        "heading": "🔍 Supporting Students in Object-Oriented Programming",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>I helped students strengthen their understanding of <strong>Java, OOP design patterns, and data structures</strong>. I also provided guidance on industry-standard development tools such as <strong>Git, Maven, and Gradle</strong>.</p>"
      },
      {
        "heading": "🛠 Hands-On Lab Facilitation & Debugging Assistance",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>I facilitated weekly labs where students worked on <strong>software development projects using Git, test harnesses, and build tools</strong>. I provided real-time debugging assistance and helped them improve their <strong>test-driven development (TDD) workflows with JUnit</strong>.</p>"
      },
      {
        "heading": "🖥️ Moderating Online Discussion Forums",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>As part of my role, I monitored <strong>online discussion forums</strong>, answering student questions and providing timely feedback. This helped ensure a collaborative and engaging learning environment.</p>"
      },
      {
        "heading": "📊 Grading & Feedback",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>I evaluated programming assignments and projects, providing detailed feedback on <strong>coding style, efficiency, and design principles</strong>. My grading responsibilities also included assessing students’ proficiency in <strong>Git workflows, test-driven development, and Java-based OOP implementation</strong>.</p>"
      },
      {
        "heading": "🎓 Conclusion",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>My experience as a Teaching Assistant for both <strong>CIS*2030</strong> and <strong>CIS*2430</strong> gave me valuable insights into <strong>teaching, mentoring, and technical communication</strong>. I had the opportunity to help students navigate complex topics while reinforcing my own understanding of computer architecture and software development.</p>" +
          "<p style='font-size: 18px; line-height: 1.6;'>These roles strengthened my ability to <strong>explain technical concepts clearly, provide effective feedback, and facilitate hands-on learning experiences</strong>. This experience has been instrumental in preparing me for future roles in software engineering and technical leadership.</p>"
      },
      {
        "heading": "🙏 Acknowledgments",
        "text": 
          "<p style='font-size: 18px; line-height: 1.6;'>A big thank you to the faculty members and students I had the chance to work with! Your curiosity, engagement, and dedication made the teaching experience incredibly rewarding. I enjoyed every moment of helping students debug code, refine their programming skills, and grow as future developers! 💻🎓</p>"
      }
    ] 
  }
};



function BlogPost() {
  const { postId } = useParams(); // Get dynamic post ID from URL
  const post = blogData[postId];

  if (!post) {
    return <h2 className="error-message">Post Not Found</h2>;
  }

  return (
    <>

      <div className="blog-hero">
        <img src={post.image} alt={post.company} className="blog-hero__image" />
        <div className="blog-hero__overlay">
          <h1 className="blog-title">{post.title}</h1>
          <p className="blog-company">@ {post.company}</p>
        </div>
      </div>

      <div className="blog-container">
        <p dangerouslySetInnerHTML={{ __html: post.description }} />

        {post.content.map((section, index) => (
          <div key={index}>
            <h3>{section.heading}</h3>
            <p dangerouslySetInnerHTML={{ __html: section.text }} />
            <br/>
          </div>
        ))}
      </div>
    </>
  );
}


export default BlogPost;
