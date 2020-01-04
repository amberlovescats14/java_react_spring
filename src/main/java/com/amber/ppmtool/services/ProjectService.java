package com.amber.ppmtool.services;

import com.amber.ppmtool.domain.Backlog;
import com.amber.ppmtool.domain.Project;
import com.amber.ppmtool.exception.ProjectIdException;
import com.amber.ppmtool.repositories.BacklogRepository;
import com.amber.ppmtool.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private BacklogRepository backlogRepository;

    //! CREATE:: SAVE OR UPDATE PROJECT
    public Project createProject(Project project){
        try {
            project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());

            //create new backlog but dont get stuck in recursion
                Backlog backlog = new Backlog();
                project.setBacklog(backlog);
                backlog.setProject(project);
                backlog.setProjectIdentifier(project.getProjectIdentifier());

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
    public ResponseEntity<?> updateProject(
            String identifier,
            Project projectDetails
    ) {

        System.out.println("ID" + identifier);
        Project project = projectRepository.findByProjectIdentifier(identifier);

        if(project == null)
            throw new ProjectIdException("Project Not Found");

        project.setDescription(projectDetails.getDescription());
        project.setProjectName(projectDetails.getProjectName());
        project.setUpdated_At(new Date());



        projectRepository.save(project);


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
