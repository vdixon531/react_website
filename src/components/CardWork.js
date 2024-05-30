import React, { useState } from "react";
import CardItem from './CardItem';
import './CardWork.css'
import Popup from "./Popup";
import s1Image from "../assets/images/img-S1-office.jpg"
import coImage from "../assets/images/img-slf-cops.jpg"
import doImage from "../assets/images/img-slf-office.jpg"

function CardWork() {
    const [showPopup1, setShowPopup1] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);
    const [showPopup3, setShowPopup3] = useState(false);
    return (
        <div className='cards'>
            <div className="cards__container">
                <div className="cards__wrapper">                   
                    <ul className="cards__items">
                        <CardItem 
                        src={s1Image}
                        text="QA Developer"
                        label="Purolator"
                        onClick={() => setShowPopup1(true)}
                        />
                        <CardItem 
                        src={coImage}
                        text="Cloud Ops"
                        label="Sun Life"
                        onClick={() => setShowPopup2(true)}
                        />
                        <CardItem 
                        src={doImage}
                        text="Dev Ops"
                        label="Sun Life"
                        onClick={() => setShowPopup3(true)}
                        />
                    </ul>                    
                </div>
            </div>
            <Popup trigger={showPopup1} setTrigger={setShowPopup1} title="Work-Term 3 Report">
                <div>
                    <h3>Job Description</h3>
                    <p>
                        As a Quality Assurance (QA) Developer at Purolator Digital Lab, I had the opportunity to engage in various tasks and projects that contributed significantly to the development and improvement of the company's digital solutions. My responsibilities encompassed creating guides, building pipelines, 
                        learning new technologies, and developing functionalities to support our applications.
                    </p>
                    <br/>
                    <h3>Key Responsibilities and Achievements</h3>
                    <h3>1. Developer Experience and Technical Documentation:</h3> 
                    <p>
                        One of my primary tasks was to create a comprehensive guide aimed at enhancing the developer experience and providing clear technical documentation. This guide was designed to assist developers in understanding the tools, processes, and best practices within our team. By documenting these procedures, I ensured that both new and existing team members could quickly get up to speed with the project requirements and workflows. The guide included detailed instructions on setup, troubleshooting, and best practices for writing clean and efficient code.
                    </p>
                    <h3>2. Build and Release Pipelines:</h3> 
                    <p>
                        I was tasked with creating build and release pipelines from scratch, a critical component of our continuous integration and deployment (CI/CD) strategy. These pipelines were integrated with various Azure services such as Azure Service Apps and Azure Key Vault. By automating the build and release process, I helped streamline the deployment of applications, ensuring that new features and updates could be delivered quickly and reliably. This automation also reduced the potential for human error, increasing the overall quality and reliability of our deployments.
                    </p>
                    <h3>3. Learning and Implementing Elastic Search:</h3> 
                    <p>
                        During my tenure, I dedicated a significant amount of time to learning Elastic Search, a powerful search and analytics engine. I wrote new queries to improve our search capabilities and explored advanced concepts such as pagination in Elastic Search. Understanding these concepts allowed me to optimize our search functionalities, making them more efficient and user-friendly. My contributions in this area helped enhance the performance and accuracy of our search features, providing users with faster and more relevant results.
                    </p>
                    <h3>4. Developing HTTP Triggers in C#:</h3> 
                    <p>
                        I also developed HTTP triggers in C#, which are essential for creating serverless applications that respond to HTTP requests. These triggers were used to build and manage various APIs and services within our application ecosystem. By implementing these triggers, I enabled our applications to handle real-time data processing and interaction, improving the responsiveness and functionality of our digital solutions.
                    </p>
                    <h3>5. Research and Continuous Learning:</h3> 
                    <p>
                        I honed my research skills in a technical context, learning to effectively gather, analyze, and apply information to solve complex problems. Additionally, I completed a Microsoft Learn course on different Azure services, which expanded my knowledge of cloud computing and how to leverage these services for optimal performance and scalability. This commitment to continuous learning and professional development has been crucial to my growth and effectiveness in my role.              
                    </p>
                    <br/>
                    <h3>Conclusion</h3>
                    <p>
                        My experience as a QA Developer at Purolator Digital Lab has been both challenging and rewarding. Throughout my tenure, I have had the opportunity to work on diverse projects that have broadened my technical skill set and provided me with valuable industry experience.
                    </p>
                    <h3>Technical and Personal Skill Development:</h3> 
                    <p>
                        I have significantly improved my technical skills, particularly in areas such as Elastic Search, Azure services, and C# development. I have also developed strong problem-solving abilities and a keen eye for detail, which are essential for ensuring the quality and reliability of software products.
                    </p>
                    <h3>Understanding of CI/CD Processes:</h3>
                    <p>
                        Working on build and release pipelines has given me a deep understanding of CI/CD processes and the importance of automation in software development. I have learned how to design and implement efficient pipelines that integrate seamlessly with various tools and services, ensuring smooth and reliable deployments.
                    </p>
                    <h3>Collaboration and Communication:</h3>
                    <p>
                        Creating the developer experience guide and technical documentation required me to collaborate closely with other team members and stakeholders. This experience has improved my communication skills and my ability to work effectively within a team, ensuring that everyone is aligned and working towards common goals.
                    </p>

                    <h3>Future Implications:</h3>Future Implications:
                    <p>
                        This internship has provided me with a solid foundation in QA development and has highlighted areas where I can further improve. I am now more confident in my ability to contribute to complex projects and am eager to apply the skills and knowledge I have gained in future roles.
                    </p>
                    <p>
                        In summary, my time at Purolator Digital Lab has been instrumental in shaping my career as a software developer. The practical experience, technical knowledge, and personal growth I have achieved will undoubtedly be invaluable as I continue to pursue my career in software engineering. The organization’s emphasis on innovation has allowed me to flourish, and I am grateful for the opportunities to learn and grow in such a supportive environment.
                    </p>
                </div>
            </Popup>
      
            <Popup trigger={showPopup2} setTrigger={setShowPopup2} title="Work-Term 2 Report">
                <div>
                    <h3>Job Description</h3>
                    <p>
                        During my time with the Cloud Ops team, the DevOps team focused their efforts on building a CI/CD pipeline that was deployed using Ansible, to automate internal processes throughout the organization. The team saves invaluable time and money automating on-boarding tasks, account 
                        creation & setup, certain access requests and AWS management, some of which are now 300 times quicker than when done manually.
                    </p>
                    <p>
                        The training process included a range of tutorials on BitBucket, Docker, Hashicorp Terraform and Hashicorp Packer. After completing all the training modules assigned to me, I was tasked with creating on-boarding documentation on Terraform and Packer 
                        to make it easier for professionals from other teams to join and work on the project as required. As I got more familiar with Terraform code, I worked on adding functionality to pre-existing code, such as creating filters to pick selective AWS accounts.
                        I was also involved in dynamic testing with a few senior developers. 
                    </p>
                    <br/>
                    <h3>Conclusion</h3>
                    <p>
                        Over the summer, Sun Life has allowed me the opportunity to acquire practical experience as a software engineer, which is invaluable
                        to my future as a software engineering professional.
                    </p>
                    <p>
                        Not only did I obtain new technical and personal skills, but I was also able to develop pre-existing ones too! I got the opportunity to learn from industry professionals, see how things 
                        are run within a small development team, and practice what I learned from university. I learned my
                        strengths, and weaknesses, and have understood what areas I need to improve on in future co-op terms. 
                    </p>
                </div>
            </Popup>
      
            <Popup trigger={showPopup3} setTrigger={setShowPopup3} title="Work-Term 1 Report">
            <div>
              <h3>Job Description</h3>
                <p>During my time at Sun Life, the DevOps team focused their efforts on building a CI/CD pipeline that was deployed using Ansible, to automate internal processes throughout the organization. The team saves invaluable time and money automating on-boarding tasks, account 
                creation & setup, certain access requests and AWS management, some of which are now 300 times quicker than when done manually.</p>
                <p>The training process included a range of tutorials on BitBucket, Docker, Hashicorp Terraform and Hashicorp Packer. After completing all the training modules assigned to me, I was tasked with creating on-boarding documentation on Terraform and Packer 
                    to make it easier for professionals from other teams to join and work on the project as required. As I got more familiar with Terraform code, I worked on adding functionality to pre-existing code, such as creating filters to pick selective AWS accounts.
                    I was also involved in dynamic testing with a few senior developers. 
                </p>
                <br/>
                <h3>Conclusion</h3>
                <p>Over the summer, Sun Life has allowed me the opportunity to acquire practical experience as a software engineer, which is invaluable
                to my future as a software engineering professional.
                </p>
                <p>Not only did I obtain new technical and personal skills, but I was also able to develop pre-existing ones too! I got the opportunity to learn from industry professionals, see how things 
                are run within a small development team, and practice what I learned from university. I learned my
                strengths, and weaknesses, and have understood what areas I need to improve on in future co-op
                terms. </p>
            </div>
            </Popup>
        </div>
    );
}

export default CardWork;