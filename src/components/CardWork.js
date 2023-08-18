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
                        text="Full Stack Developer"
                        label="System1"
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
              <h3>Content for Popup 1</h3>
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