package com.amber.ppmtool.services;

import com.amber.ppmtool.domain.Project;
import com.amber.ppmtool.exception.ProjectIdException;
import com.amber.ppmtool.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.Date;

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

    //! PUT
    // i did this one myself for a more graceful handling
    // u actually dont need any code for this
    @PutMapping("/{identifier}")
    public ResponseEntity<?> updateProject(
            String identifier,
            Project projectDetails
    ) {
        Project project = projectRepository.findByProjectIdentifier(identifier);

        if(project == null)
            throw new ProjectIdException("Project Not Found");

        project.setDescription(projectDetails.getDescription());
        project.setProjectName(projectDetails.getProjectName());
        project.setUpdated_At(new Date());

        Project updatedProject = projectRepository.save(project);
        return new ResponseEntity<>("Updated",HttpStatus.OK);

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
