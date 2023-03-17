import React from 'react';
import styled from 'styled-components';

function Resume() {
    return (
        <ResumeContainer className="text-center">
            <a className="btn button primary-button mr-4 text-uppercase" href="https://drive.google.com/file/d/17F7QoJLItDouYDLbZDfQROixhDqa5TrY/view?usp=sharing">Resume</a>
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