package ch.mimacom.workshop.angular.moviemanager.domain;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieCommentRepository extends JpaRepository<MovieComment, String> {

    @Query("select m from MovieComment m where m.movieId = :movieId")
    Page<MovieComment> findByMovieId(@Param("movieId") String movieId, Pageable pageable);
}
