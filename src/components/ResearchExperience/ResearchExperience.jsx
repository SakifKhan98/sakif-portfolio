import React from 'react'
import './ResearchExperience.css'

const ResearchExperience = () => {
  const interest = [
    'Application of AI & Machine Learning in Mechanical Engineering',
    'Heat Transfer',
    'Energy Systems',
    'Robotics and Control',
    'Combustion & IC Engine',
    'Software Design & Development',
    'Engineering for Public Health'
  ]

  return (
    <div class='research-container'>
      <section id='divided-container' className='divided-container contact-content'>
        <div style={{flex: 1}} className='research-interest-container'>
          <h5>Eucation</h5>
          <div className='research-experience-card education-card'>
          <h6>BSc in Mechanical Engineering</h6>
          <h6>Chittagong University of Engineering & Technology (CUET) </h6>
          <div className='education-duration'>January, 2018 – June, 2023</div>
          <p>
            <span className='point-title'>CGPA:</span> 3.47/4.00
          </p>
          <p>
            <span className='point-title'>Courses:</span> Thermodynamics, Heat Transfer, Fluid Dynamics, Mechanics of Materials, Mechatronics, Operations Research, etc.
          </p>
        </div>
        </div>
        <div style={{flex: 1}} id='research-interest' className='research-interest-container'>
          <h5>Research Interest</h5>
          <div className='research-interest-container'>
            <div className='research-experience-card'>
              <ul>
                {interest.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id='research-exp' className='research-experience-container'>
        <h5>Research Experience</h5>
        <div className='research-experience-card'>
          <h6>Undergraduate Research Work </h6>
          <h6>Chittagong University of Engineering & Technology (CUET) </h6>
          <div className='research-duration'>April, 2022 – May, 2023</div>
          <p>
            <span className='point-title'>Thesis Title:</span> Detection of
            Knocking in SI Engine Using a Deep Learning Approach: A Method Based
            on Convolutional Neural Network
          </p>
          <p>
            <span className='point-title'>Thesis Supervisor:</span> Dr. Kazi
            Afzalur Rahman, Professor, Department of Mechanical Engineering,
            CUET.
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span className='point-title'>Thesis Description:</span> A deep
            learning model was trained to detect engine knocks automatically
            using ResNet-34, ResNet-18, and ResNet-50 architectures. A set of
            engine sounds was collected from different surrounding sources and
            audio spectrograms were generated to prepare a large dataset. It has
            been used to train and evaluate the model. Several audio processing
            applications have demonstrated promising results with convolutional
            neural networks (CNNs), which have been used in the approach. In
            order to prevent overfitting, the CNNs contained multiple
            convolutional layers with different kernel sizes and filter numbers,
            followed by max-pooling layers and dropout layers. Then the best
            resulting and trained model was exposed using a Web Application
            where anyone could upload a soundtrack of an engine. In return, the
            web application would give him/her the result if the engine was
            knocking.
          </p>
        </div>
      </section>
    </div>
  )
}

export default ResearchExperience
