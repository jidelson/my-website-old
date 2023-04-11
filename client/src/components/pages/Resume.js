import React from 'react';
import styled from 'styled-components';
import resume from '../../images/resume.pdf';

function Resume() {
    return (
        <ResumeContainer className="text-center">
            <div className="rezDlBtn">
                <a href={resume} download className="btn button primary-button text-uppercase">Download Resume</a>
            </div>
            <div className="pdf-container" 
                style={{ 
                    position: 'relative', 
                    width: '100vh', 
                    height: '100vh', // Set height to full viewport height
                    border: '5px solid black'
            }}>
                <iframe
                    title='resume' 
                    src="https://drive.google.com/file/d/1lelwX6Ur_MEuUdsKXa_UgIFRbqRukQ85/preview" 
                    width="100%" 
                    height="100%" 
                >
                </iframe>
            </div>
               
            
        </ResumeContainer>
    )    

}

export default Resume;

const ResumeContainer = styled.div`

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
}

.button.primary-button:hover{
    background:whitesmoke;
    background-clip: padding-box;
    color: black;
}

.pdf-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto; 
  }
  

`;