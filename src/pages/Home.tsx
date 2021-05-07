import React from 'react';
import { useHistory } from 'react-router';
import InfoBox from '../components/InfoBox';
import '../css/Home.css';

export default function Home() {
  const history = useHistory();
  function navigate(url: string) {
    history.push('/'+url);
  }
  return (
    <div className='boxesSection'>
      <InfoBox subtitle='Incredibly informative' title='About Me' onClick={()=>navigate('About')} linkText='Work History'>
        <p>
          Hey there. My name is Jack LeCroy.
          I'm a student at Purdue University in my senior year of studying computer science.
          I will be graduating this fall.
        </p>
      </InfoBox>
      <InfoBox subtitle='Followed by everyone' title='Social Media'>
        <div>
          You can find me here. Feel free to connect with me on LinkedIn.
          If you follow me on GitHub, I'll follow you back.
          <ul>
            <a href='https://github.com/jacklecroy'><li>GitHub</li></a>
            <a href='https://linkedin.com/in/jacklecroy'><li>LinkedIn</li></a>
          </ul>
        </div>
      </InfoBox>
      <InfoBox subtitle='I may or may not check' title='My Email' linkText='Send Email'>
        <p>
          Email me. Please reach out with any interesting opportunities. Also reach out if you just want to say hello.
          Keep in mind that this specific email has strict spam filtering.
        </p>
      </InfoBox>
    </div>
  );
}