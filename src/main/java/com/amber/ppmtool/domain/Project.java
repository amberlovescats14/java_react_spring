package com.amber.ppmtool.domain;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Table(name="projects")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Project Name Required")
    private String projectName;

    // unique only work on initialization of the table
    @NotBlank(message = "Project Identifier Required")
    @Size(min = 4, max = 5, message = "Must be between 4-5 Chars")
    @Column(unique = true, updatable = false)
    private String projectIdentifier;

    @NotBlank(message = "Description Required")
    private String description;

    //! Format dates
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date start_date;
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date end_date;
    @JsonFormat(pattern = "yyyy-mm-dd")
    @Column(updatable = false)
    private Date created_At;
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date updated_At;

// cascade means on delete of project, all backlogs and children will be deleted
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Backlog backlog;

    public Project(){}

    //! on created
    @PrePersist
    protected void onCreate(){
        this.created_At = new Date();
    }

    @PreUpdate
    protected void onUpdate(){
        this.updated_At = new Date();
    }

    public Backlog getBacklog() {
        return backlog;
    }

    public void setBacklog(Backlog backlog) {
        this.backlog = backlog;
    }

    public Long getId() {
        return id;
    }

    public String getProjectName() {
        return projectName;
    }

    public String getProjectIdentifier() {
        return projectIdentifier;
    }

    public String getDescription() {
        return description;
    }

    public Date getStart_date() {
        return start_date;
    }

    public Date getEnd_date() {
        return end_date;
    }

    public Date getCreated_At() {
        return created_At;
    }

    public Date getUpdated_At() {
        return updated_At;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }
//
    public void setProjectIdentifier(String projectIdentifier) {
        this.projectIdentifier = projectIdentifier;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setEnd_date(Date end_date) {
        this.end_date = end_date;
    }

    public void setUpdated_At(Date updated_At) {
        this.updated_At = updated_At;
    }
}
//@CrossOrigin(origins = "http://localhost:3000")
////@RestController