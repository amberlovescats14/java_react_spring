package com.amber.ppmtool.web;

import com.amber.ppmtool.domain.Project;
import com.amber.ppmtool.exception.ProjectIdException;
import com.amber.ppmtool.services.MapValidationErrorService;
import com.amber.ppmtool.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequestMapping("/api/project")
@CrossOrigin
public class ProjectController {
    @Autowired
    private ProjectService projectService;
    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    //!GET ALL
    @GetMapping("/")
    public Iterable<Project> getAllProjects(){
        return projectService.findAllProjects();
    }

    //! GET ONE
    // u cannot say if(!project) to an object
    @GetMapping("/{projectIdentifier}")
    public ResponseEntity<?> getProjectIdentifier(
            @PathVariable String projectIdentifier
    ){
        Project project = projectService.findProjectByIdentifier(projectIdentifier.toUpperCase());
        if(project == null)
            throw new ProjectIdException("Project Not Found");
        //else
        return new ResponseEntity<>(project, HttpStatus.OK);
    }

    //!POST
    // React needs correct errors to handle :: HttpStatus.BAD_REQUEST
    // column(unique=true) is happening after this function
    @PostMapping("/")
    public ResponseEntity<?> createNewProject(
            @Valid @RequestBody Project project, BindingResult result
    ){
        //put the different errors into a hashMap
        if(result.hasErrors())
            return mapValidationErrorService.handleErrors(result);

        // else
        Project project1 = projectService.saveOrUpdateProject(project);
        return new ResponseEntity<>(project1, HttpStatus.CREATED);
    }

    //! PUT
    // if it exists it will automatically work
    @PutMapping("/{identifier}")
    public Iterable<Project> updateProject(
            @PathVariable String identifier,
            @Valid @RequestBody Project details
    ) {
        projectService.updateProject(identifier, details );
        return getAllProjects();
    }


    //! DELETE
    @DeleteMapping("/{identifier}")
    public ResponseEntity<?> deleteProject(
            @PathVariable String identifier
    ) {
        projectService.deleteProjectByIdentifier(identifier.toUpperCase());
        return new ResponseEntity<String>("Deleted", HttpStatus.OK);
    }




//end
}
