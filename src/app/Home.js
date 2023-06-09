import React, {useState} from 'react'
import Resume from './Resume.js'
const Home = () => {
    
    // about me
    // resume attachement
    // contact me
  return (
    <div>
      <section>
        <h2>About Me</h2>
        <p>I am a web developer passionate about creating awesome websites.</p>    
        <p>
            I am a highly skilled developer with extensive expertise in a wide range of technologies, including HTML, database management, CSS, MySQL, Ruby on Rails, React.js, JavaScript, and Git. My commitment to continuous learning allows me to stay up-to-date with the latest industry trends and deliver exceptional results.
            Drawing upon my diverse background in web development, sales, recruiting, communication, and leadership, I bring a unique and multifaceted perspective to every project I undertake. I thrive in collaborative environments, leveraging teamwork and effective communication as catalysts for success.
            My passion for crafting exceptional digital experiences and my unwavering dedication to excellence drive me to consistently exceed expectations. I am excited to contribute my expertise and skills to create innovative solutions and deliver outstanding outcomes for your organization.
        </p>
    </section>
    <br/>
    <section>
        <h2>Resume</h2>
        <Resume />
        {/* <a href={}></a> */}
        {/* <p>Resume</p> */}
    </section>
    </div>
  )
}

export default Home
