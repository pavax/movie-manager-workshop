package ch.mimacom.workshop.angular.moviemanager.domain;

import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.UUID;

@Entity
public class MovieComment {

    @Id
    private String id;

    @NotBlank
    private String movieId;

    @NotBlank
    private String comment;

    public MovieComment(String movieId, String comment) {
        this.id = UUID.randomUUID().toString();
        this.movieId = movieId;
        this.comment = comment;
    }

    protected MovieComment() {
    }

    public String getId() {
        return id;
    }

    public String getMovieId() {
        return movieId;
    }

    public String getComment() {
        return comment;
    }
}
