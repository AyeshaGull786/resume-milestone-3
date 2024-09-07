window.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded");
  const toggleSkillsBtn = document.getElementById("toggle-skills-btn");
  const skillsSection = document.getElementById("skills");

  if (toggleSkillsBtn && skillsSection) {
    toggleSkillsBtn.addEventListener("click", () => {
      console.log("Button clicked");
      if (skillsSection.style.display === "block") {
        skillsSection.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills";
      } else {
        skillsSection.style.display = "block";
        toggleSkillsBtn.textContent = "Hide Skills";
      }
    });
  }
});



//....................forms section..................


const form = document.getElementById('resume-form') as HTMLFormElement;
const generateResumeBtn = document.getElementById('generate-resume-btn') as HTMLButtonElement;
const resumeContainer = document.getElementById('resume-container') as HTMLDivElement;

generateResumeBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const university = (document.getElementById('university') as HTMLInputElement).value;
    const graduationDate = (document.getElementById('graduation-date') as HTMLInputElement).value;
    const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const employmentDates = (document.getElementById('employment-dates') as HTMLInputElement).value;
    const mySkills = (document.getElementById('my-skills') as HTMLTextAreaElement).value;

    const resumeData = {
        name,
        email,
        phone,
        degree,
        university,
        graduationDate,
        jobTitle,
        company,
        employmentDates,
        mySkills,
    };

    const resume = `
        <h1>Resume</h1>
        <section>
            <h2>Personal Information</h2>
            <p>Name: ${resumeData.name}</p>
            <p>Email: ${resumeData.email}</p>
            <p>Phone: ${resumeData.phone}</p>
        </section>
        <section>
            <h2>Education</h2>
            <p>Degree: ${resumeData.degree}</p>
            <p>University: ${resumeData.university}</p>
            <p>Graduation Date: ${resumeData.graduationDate}</p>
        </section>
        <section>
            <h2>Work Experience</h2>
            <p>Job Title: ${resumeData.jobTitle}</p>
            <p>Company: ${resumeData.company}</p>
            <p>Employment Dates: ${resumeData.employmentDates}</p>
        </section>
        <section>
            <h2>My Skills</h2>
            <p>${resumeData.mySkills}</p>
        </section>
    `;

    resumeContainer.innerHTML = resume;
});
