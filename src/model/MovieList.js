import React from "react";
import axios from "axios";
import Movie from "../component/Movie";
import "./MovieList.css";

class MovieList extends React.Component {
  state = {
    loading: false,
    movies: [],
  };

  loadFromApi = async (option) => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      `https://yts-proxy.now.sh/list_movies.json?sort_by=${option}`
    );
    this.setState({ movies, loading: true });
  };

  loadMovie = (event) => {
    event.preventDefault();
    const selectArrange = document.querySelector(".MovieOptionSelect");
    const select = selectArrange.value;
    this.loadFromApi(select);
  };

  componentDidMount() {
    const selectArrange = document.querySelector(".MovieOptionSelect");
    const select = selectArrange.value;
    this.loadFromApi(select);

    const searchBtn = document.querySelector(".MovieSearchBtn");
    searchBtn.addEventListener("click", this.loadMovie);
  }

  render() {
    const { loading, movies } = this.state;
    return (
      <section>
        <form className="MovieOption">
          <h5>영화 정렬</h5>
          <select className="MovieOptionSelect">
            <option value="title">이름순</option>
            <option value="rating">평점순</option>
            <option value="year">최신순</option>
          </select>
          <button className="MovieSearchBtn" type="submit">
            검색
          </button>
        </form>
        {loading === false ? (
          <i className="fas fa-spinner"></i>
        ) : (
          <div className="moviesContainer">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  poster={movie.medium_cover_image}
                  title={movie.title}
                  year={movie.year}
                  summary={movie.summary}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default MovieList;
