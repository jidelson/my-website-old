import React from 'react';
import styled from 'styled-components';

import headshot from '../../images/headshot.jpg';
import bayB from '../../images/bayB.jpg';
import wc from '../../images/wc.jpg';
import expression from '../../images/expression.jpg';
import lambda from '../../images/lambda.png';
import dallas from '../../images/dallas.jpg';
import revature from '../../images/revature.png';
import infosys from '../../images/infosys.png';

function About() {
    return (
        <AboutContainer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 py-4">
                        <img src={headshot} alt="headshot" className="headshot img-fluid" />
                    </div>
                    <div className="col-md-4" style={{paddingRight: "5%"}} >
                        <h2 className="text-uppercase pt-5">Hey there!</h2>
                        <p className="para pt-3">I'm Joe Idelson, a full stack web developer.</p>
                        <p className="para">I was born in the beautiful city of San Francisco and grew up in the city of Walnut Creek, CA.</p>
                        <p className='para'>In 2022 I relocated and now reside in the Dallas-Fort Worth Metroplex.</p>
                    </div>
                    <div className="col-md-4 py-4">
                        <img src={bayB} alt="Bay Bridge & SF Skyline" style={{maxWidth: "100%"}} />
                    </div>
                    
                </div>
            </div>


                    

            <div className='container-fluid'>
                <div className='row'>
                    <div className="col-md-4 py-4">
                        <img src={wc} alt="walnutCreek" style={{maxWidth: "100%"}} />
                    </div>
                    <div className='col-md-4 py-4'>
                        <p className="para text-center py-5">
                            After graduating high school and attending a year at the University of Oregon I enrolled in a
                            digital arts college called Expression College. 
                        </p>
                        <p className="para text-center py-1">
                            It was there that I was introduced, taught, and learned many new technologies used for production.
                            I gained the ability to learn new programs at a rapid rate which directly translated to my transition
                            into web development.
                        </p>
                        <p className="para text-center py-1">
                            After graduating Expression, I worked as a freelancer doing many different projects from graphic design
                            to fully rendered 3D animations. 
                        </p>
                        <p className="para text-center py-1">
                            During this time, on a daily basis I was using the Adobe Suite and primarily Autodesk Maya, along with
                            a number of other programs. As time progressed, I noticed I was drawn more towards the skills in the 
                            animation field that were more technical including rigging. 
                        </p>
                    </div>
                    <div className="col-md-4 py-4">
                    <img src={dallas} alt="Dallas Skyline" />
                    </div>
                </div>
            </div>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-4 py-4'>
                        <img src={expression} alt="expression-img" className="expression img-fluid" />
                    </div>
                    <div className='col-md-4 py-4'>
                        <p className="para">
                            I learned my development skills through Lambda School (now called Bloom Institute of Technology), a nine month intensive boot-camp style school, where I was 
                            taught the most contemporary techniques and skills for web development. Lambda School constantly updates its curriculum based on what tools and techniques 
                            are currently being used in the industry.     
                        </p>
                        <p className="para">
                               The curriculum at Lambda included learning through lectures and assignments and then
                               completing weekly sprints. There were also group projects where projects would be planned and completed. Students would also interact with stakeholders to
                               gain more experience of a professional working environment. While attending Lambda School I was also able to be a mentor to students in earlier units of 
                               the curriculum.
                            </p>
                        <p className="para">
                            Below you can see my badge of completion for the Lambda School curriculum and some of what it entailed.
                        </p>
                    </div>
                    <div className='col-md-4 py-4'>
                        <img src={lambda} alt="lambda-img" className="lambda img-fluid" />    
                    </div>
                </div>
            </div>

            <div className="text-center">
                <a className="btn button primary-button mr-4 text-uppercase" href="https://drive.google.com/file/d/1urVavN1ztUdGnO6UMR6UIm1xZEU3Yqxl/view?usp=sharing">
                    View my certificate
                </a>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className='col-md-4 py-4'>
                        <img src={revature} alt="Revature" style={{maxWidth: "100%"}} />
                    </div>
                    <div className="col-md-4 py-4">
                        <p className='para'>
                            After completing the Lambda program, I worked and received additional training through a company called Revature. While working at Revature I was trained 
                            in a number of technologies, programming languages, and frameworks including Java, Maven, SQL, Git, AWS, JDBC, HTML, CSS, JavaScript, HTTP, Servlets, 
                            REST, Hibernate, Angular, Spring, DevOps, and Microservices.
                        </p>
                        <p className='para'>
                            During my time at Revature I was trained by attending lectures, completing projects, working on coding challenges, mock interviews, and other interactive exercises.
                            Projects were done individually, in small groups, as well as large groups of about 25 developers. 
                        </p>
                        <p className='para'>
                            After Revature, I was hired at Infosys where I currently work since December of 2021. At Infosys I started off by getting more trained by taking courses on subjects
                            such as Java, Spring, Microservices, React, Cloud Computing, multiple AWS courses, and DevOps. After training I have been a part of a client project working primarily 
                            as a Database Administrator. More details regarding this project can be viewed on my resume.
                        </p>       
                    </div>
                    <div className='col-md-4 py-4'>
                        <img src={infosys} alt="Infosys" />
                    </div>
                </div>
            </div>

         
  
          

            
          
            
        </AboutContainer>
             
    )
}

export default About;

const AboutContainer = styled.div`

.headshot{
    width: 60%;

}

p.para{
    color: var(--text-color);
    font: normal 500 16px/25px var(--roboto);
}

.button{
    padding: 1.5rem 2.2rem;
    font: normal 500 16px/20px var(--roboto);
    position: relative;
    border: 3px solid transparent;
    border-radius: 4px;
}

.button.primary-button{
    background: var(--gradient-color);
    background-clip: padding-box;
    color: whitesmoke;
    transition: background .6s ease;
    box-shadow: var(--box-shadow);
    border: 2px solid #854fee;
}

.button.primary-button:hover{
    background:whitesmoke;
    background-clip: padding-box;
    color: black;
}

.expression{
    width: 75%;
}


`