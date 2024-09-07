window.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded");
    var toggleSkillsBtn = document.getElementById("toggle-skills-btn");
    var skillsSection = document.getElementById("skills");
    if (toggleSkillsBtn && skillsSection) {
        toggleSkillsBtn.addEventListener("click", function () {
            console.log("Button clicked");
            if (skillsSection.style.display === "block") {
                skillsSection.style.display = "none";
                toggleSkillsBtn.textContent = "Show Skills";
            }
            else {
                skillsSection.style.display = "block";
                toggleSkillsBtn.textContent = "Hide Skills";
            }
        });
    }
});
//....................forms section..................
var form = document.getElementById('resume-form');
var generateResumeBtn = document.getElementById('generate-resume-btn');
var resumeContainer = document.getElementById('resume-container');
generateResumeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var university = document.getElementById('university').value;
    var graduationDate = document.getElementById('graduation-date').value;
    var jobTitle = document.getElementById('job-title').value;
    var company = document.getElementById('company').value;
    var employmentDates = document.getElementById('employment-dates').value;
    var mySkills = document.getElementById('my-skills').value;
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        degree: degree,
        university: university,
        graduationDate: graduationDate,
        jobTitle: jobTitle,
        company: company,
        employmentDates: employmentDates,
        mySkills: mySkills,
    };
    var resume = "\n        <h1>Resume</h1>\n        <section>\n            <h2>Personal Information</h2>\n            <p>Name: ".concat(resumeData.name, "</p>\n            <p>Email: ").concat(resumeData.email, "</p>\n            <p>Phone: ").concat(resumeData.phone, "</p>\n        </section>\n        <section>\n            <h2>Education</h2>\n            <p>Degree: ").concat(resumeData.degree, "</p>\n            <p>University: ").concat(resumeData.university, "</p>\n            <p>Graduation Date: ").concat(resumeData.graduationDate, "</p>\n        </section>\n        <section>\n            <h2>Work Experience</h2>\n            <p>Job Title: ").concat(resumeData.jobTitle, "</p>\n            <p>Company: ").concat(resumeData.company, "</p>\n            <p>Employment Dates: ").concat(resumeData.employmentDates, "</p>\n        </section>\n        <section>\n            <h2>My Skills</h2>\n            <p>").concat(resumeData.mySkills, "</p>\n        </section>\n    ");
    resumeContainer.innerHTML = resume;
});
