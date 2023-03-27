import React from 'react';
import styled from 'styled-components';
import rez from '../../images/rez.pdf'

function Resume() {
    return (
        <ResumeContainer className="text-center">
            <a className="btn button primary-button mr-4 text-uppercase" href="https://drive.google.com/file/d/1lelwX6Ur_MEuUdsKXa_UgIFRbqRukQ85/view?usp=share_link">View Resume</a>
            <div className="rezDlBtn">
                <a href={rez} download className="btn button primary-button text-uppercase">Download Resume</a>
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
`