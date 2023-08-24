import './projectspage.css';
import ProjectCard from './projectCard';
// import projectData from './projectData.json';
import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { getProjects } from './GetProjects';
import parse from 'html-react-parser';

const ProjectsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [projectData, setProjectData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const getProjectList = async() => {
      const projects = await getProjects();
      setProjectData(projects);
      setSelectedCard(projects[0].node);
      setIsLoaded(true);
    }
    getProjectList()
      .catch(console.log("error getting Post Detail"));
  }, [])

  function openModal() {
    setIsOpen(true);
  }

  function handleRequestCloseFunction() {
    setIsOpen(false);
  }


  return (
    <div> 
      {isLoaded ? (
      <div className="grid items-stretch grid-cols-3 show-card font-mono">
      {projectData.map((project, index) => (
        <div className="p-2" key={index+1}>
          <ProjectCard
            index={index}
            project= {project.node}
            onClick={() => {setSelectedCard(project.node);
                            console.log(index +1);
                            openModal();}}
            initialDelay={(index+1) * 100} // Add a delay based on the index of the card
          />
        </div>
      ))}
      <div>
        <ReactModal 
          isOpen={isOpen} 
          onRequestClose={handleRequestCloseFunction}>
            <div className="font-mono">
              <p className="text-xl">{selectedCard.title}</p>
              <br />
              <p className="text-base">{parse(selectedCard.projectDescription.html)}</p>
            </div>
        </ReactModal>
      </div>
    </div>
    ) : (
      <p>LOADING</p>
    )}
    </div>

  );
};

export default ProjectsPage;