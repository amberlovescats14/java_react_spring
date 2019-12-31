package com.amber.ppmtool.services;

import com.amber.ppmtool.domain.Project;
import com.amber.ppmtool.exception.ProjectIdException;
import com.amber.ppmtool.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    //! SAVE OR UPDATE PROJECT
    public Project saveOrUpdateProject(Project project){
        try {
            project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());

            return projectRepository.save(project);
        } catch(Exception ex) {
            throw new ProjectIdException(
                    "Project ID: "+ project.getProjectIdentifier().toUpperCase() + " already exists"
            );

        }
    }

    //! FIND PROJECT BY INDENTIFIER
    public Project findProjectByIdentifier(String projectIdentifier){
        return projectRepository.findByProjectIdentifier(projectIdentifier);
    }

    //! GET ALL
    public Iterable<Project> findAllProjects(){
        return projectRepository.findAll();
    }

    //! DELETE
    public void deleteProjectByIdentifier(String identifier){
        Project project = projectRepository.findByProjectIdentifier(identifier);

        if(project == null)
            throw new ProjectIdException("Project Not Found");

        //else
        projectRepository.delete(project);
    }


}
