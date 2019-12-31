package com.amber.ppmtool.web;

import com.amber.ppmtool.domain.Project;
import com.amber.ppmtool.services.MapValidationErrorService;
import com.amber.ppmtool.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequestMapping("/api/project")
public class ProjectController {
    @Autowired
    private ProjectService projectService;
    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    //! GET
    @GetMapping("/{projectIdentifier}")
    public ResponseEntity<?> getProjectIdentifier(
            @PathVariable String projectIdentifier
    ){
        Project project = projectService.findProjectByIdentifier(projectIdentifier.toUpperCase());
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


//end
}
