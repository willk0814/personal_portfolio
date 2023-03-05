import Navbar from './ComponentGroups/Navbar/Navbar'
import HomePage from './ComponentGroups/Home/HomePage'
import EducationPage from './ComponentGroups/Education/EducationPage'
import WorkExperiencePage from './ComponentGroups/WorkExperience/WorkExperiencePage'
import ProjectsPage from './ComponentGroups/Projects/ProjectPage'
import ContactPage from './ComponentGroups/Contact/ContactPage'


function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <EducationPage />
      <WorkExperiencePage />
      <ProjectsPage />
      {/* <ContactPage /> */}

    </div>
  );
}

export default App;
