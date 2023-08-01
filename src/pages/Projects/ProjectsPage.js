import './projectspage.css';
import ProjectCard from './projectCard';
import projectData from './projectData.json';
import { useState } from 'react';
import ReactModal from 'react-modal';

const ProjectsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    "id": 0,
    "title": "DUMMY THICC",
    "description": "sheeeeyet that's a dummy thicc cat we got here"
  });

  function openModal() {
    setIsOpen(true);
  }

  function handleRequestCloseFunction() {
    setIsOpen(false);
  }


  return (
    <div className="grid grid-cols-3 gap show-card font-mono">
      {projectData.map((project, index) => (
        <div className="p-4" key={project.id}>
          <ProjectCard
            index={index}
            title={project.title}
            description={project.description}
            onClick={() => {setSelectedCard(project);
                            console.log(project.id);
                            openModal();}}
            initialDelay={index * 100} // Add a delay based on the index of the card
          />
        </div>
      ))}
      <div>
        <ReactModal 
          isOpen={isOpen} 
          onRequestClose={handleRequestCloseFunction}>
            <div className="font-mono">
              <p className="text-base">{selectedCard.title}</p>
              <p className="text-xs">{selectedCard.content}</p>
            </div>
        </ReactModal>
      </div>
    </div>
  );
};

export default ProjectsPage;