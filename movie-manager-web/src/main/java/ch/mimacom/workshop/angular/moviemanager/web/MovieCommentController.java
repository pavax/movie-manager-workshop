package ch.mimacom.workshop.angular.moviemanager.web;

import ch.mimacom.workshop.angular.moviemanager.domain.MovieComment;
import ch.mimacom.workshop.angular.moviemanager.domain.MovieCommentRepository;
import org.hibernate.validator.constraints.NotBlank;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/movie-comment")
public class MovieCommentController {

    private final MovieCommentRepository movieCommentRepository;

    @Autowired
    public MovieCommentController(MovieCommentRepository movieCommentRepository) {
        this.movieCommentRepository = movieCommentRepository;
    }

    @RequestMapping(value = "/find/byMovieId", method = RequestMethod.GET)
    public Page<MovieComment> findMovieComments(@RequestParam String movieId, @RequestParam int pageNumber) {
        return movieCommentRepository.findByMovieId(movieId, new PageRequest(pageNumber, 100));
    }

    @RequestMapping(value = "", method = RequestMethod.POST)
    public String createComment(@RequestBody @Validated NewCommentResource newCommentResource) {
        MovieComment movieComment = movieCommentRepository.save(new MovieComment(newCommentResource.movieId, newCommentResource.comment));
        return movieComment.getId();
    }

    public static final class NewCommentResource {

        @NotBlank
        private String movieId;

        @NotBlank
        private String comment;

        public String getMovieId() {
            return movieId;
        }

        public void setMovieId(String movieId) {
            this.movieId = movieId;
        }

        public String getComment() {
            return comment;
        }

        public void setComment(String comment) {
            this.comment = comment;
        }
    }
}
