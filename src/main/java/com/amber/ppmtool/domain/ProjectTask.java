package com.amber.ppmtool.domain;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
public class ProjectTask {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(updatable = false)
    private String projectSequence;

    @NotBlank(message = "Please include summary")
    private String summary;

    private String status;

    private Integer priority;

    private Date dueDate;

    private Date created_at;

    private Date updated_at;

    // many to one with backlog... on backlog with many task
    @Column(updatable = false)
    private String projectIdentifier;


    @PrePersist
    protected void onCreate(){
        this.created_at = new Date();
    }

    @PreUpdate
    protected void onUpdate(){
        this.updated_at = new Date();
    }

    public ProjectTask() {
    }

    @Override
    public String toString() {
        return "ProjectTask{" +
                "id=" + id +
                ", projectSequence='" + projectSequence + '\'' +
                ", summary='" + summary + '\'' +
                ", status='" + status + '\'' +
                ", priority=" + priority +
                ", dueDate=" + dueDate +
                ", created_at=" + created_at +
                ", updated_at=" + updated_at +
                ", projectIdentifier='" + projectIdentifier + '\'' +
                '}';
    }
}
