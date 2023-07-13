import React, { useState } from 'react';

const ResumeBuilder = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [summary, setSummary] = useState('');
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSummaryChange = (e) => {
    setSummary(e.target.value);
  };

  const handleEducationChange = (e, index) => {
    const updatedEducation = [...education];
    updatedEducation[index] = e.target.value;
    setEducation(updatedEducation);
  };

  const addEducationField = () => {
    setEducation([...education, '']);
  };

  const removeEducationField = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  };

  const handleExperienceChange = (e, index) => {
    const updatedExperience = [...experience];
    updatedExperience[index] = e.target.value;
    setExperience(updatedExperience);
  };

  const addExperienceField = () => {
    setExperience([...experience, '']);
  };

  const removeExperienceField = (index) => {
    const updatedExperience = [...experience];
    updatedExperience.splice(index, 1);
    setExperience(updatedExperience);
  };

  const handleSkillsChange = (e, index) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = e.target.value;
    setSkills(updatedSkills);
  };

  const addSkillsField = () => {
    setSkills([...skills, '']);
  };

  const removeSkillsField = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any further actions here, such as saving the resume data or sending it to a server.
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Summary:', summary);
    console.log('Education:', education);
    console.log('Experience:', experience);
    console.log('Skills:', skills);
  };

  return (
    <div>
      <h1>Resume Builder</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />

        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} />

        <label htmlFor="summary">Summary:</label>
        <textarea id="summary" value={summary} onChange={handleSummaryChange} />

        <div>
          <h2>Education</h2>
          {education.map((educationItem, index) => (
            <div key={index}>
              <input
                type="text"
                value={educationItem}
                onChange={(e) => handleEducationChange(e, index)}
              />
              <button type="button" onClick={() => removeEducationField(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={addEducationField}>
            Add Education
          </button>
        </div>

        <div>
          <h2>Experience</h2>
          {experience.map((experienceItem, index) => (
            <div key={index}>
              <input
                type="text"zzzz
                value={experienceItem}
                onChange={(e) => handleExperienceChange(e, index)}
              />
              <button type="button" onClick={() => removeExperienceField(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={addExperienceField}>
            Add Experience
          </button>
        </div>

        <div>
          <h2>Skills</h2>
          {skills.map((skillsItem, index) => (
            <div key={index}>
              <input
                type="text"
                value={skillsItem}
                onChange={(e) => handleSkillsChange(e, index)}
              />
              <button type="button" onClick={() => removeSkillsField(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={addSkillsField}>
            Add Skill
          </button>
        </div>

        <button type="submit">Generate Resume</button>
      </form>

      <div>
        <h2>Preview</h2>
        <h3>Name: {name}</h3>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Summary: {summary}</p>
        <div>
          <h3>Education</h3>
          <ul>
            {education.map((educationItem, index) => (
              <li key={index}>{educationItem}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Experience</h3>
          <ul>
            {experience.map((experienceItem, index) => (
              <li key={index}>{experienceItem}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Skills</h3>
          <ul>
            {skills.map((skillsItem, index) => (
              <li key={index}>{skillsItem}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;

// import React, {Component} from "react";
// import "./index.css";
// import Joke from "./Joke";

// class App extends Component {
//   state = {
//     joke: {},
//     isLoading: false
//   };
//   getJoke = async () => {
//     this.setState({
//       isLoading: true
//     });

//     const callJokeApi = await fetch(
//       "https://official-joke-api.appspot.com/random_joke"
//     );

//     const resolveJoke = await callJokeApi.json();

//     this.setState({
//       joke: resolveJoke,
//       isLoading: false
//     });
//     console.log(this.state.joke)
//   };
  
//   componentDidMount = () => this.getJoke();
  
//   render() {
//     return (
//       <div className="container">
//         <div
//           className={this.state.isLoading ? "title title-pulse" : "title"}
//           onClick={this.getJoke}
//         >
//           Joke Machine
//         </div>
//         <Joke
//           seetup={this.state.joke.setup}
//           punchline={this.state.joke.punchline}
//         />
//       </div>
//     );
//   }
// }

// export default App;
