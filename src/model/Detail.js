import React from "react";
import axios from "axios";
import "./Detail.css";

class Detail extends React.Component {
  state = {
    loading: true,
    movie: [],
  };

  loadDetail = async (movie_id) => {
    const {
      data: {
        data: { movie },
      },
    } = await axios.get(
      `https://yts-proxy.now.sh/movie_details.json?movie_id=${movie_id.id}`
    );
    this.setState({ movie, loading: false });
  };

  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    } else {
      const {
        location: {
          state: { id },
        },
      } = this.props;
      this.loadDetail({ id });
    }
  }

  render() {
    const { location } = this.props;
    const { loading, movie } = this.state;
    const { genres } = movie;
    console.log({ genres });
    if (location.state !== undefined) {
      return (
        <div className="DetailContainerBig">
          {loading === true ? (
            <i className="fas fa-spinner"></i>
          ) : (
            <div>
              <img src={movie.background_image} className="background" />
              <div className="DetailContainer">
                <div className="whiteContainer"></div>
                <div className="DetailPoster">
                  <img src={movie.large_cover_image} />
                </div>
                <div className="DetailElement">
                  <div className="DetailTitle">
                    <h1>{movie.title}</h1>
                    <h5>{movie.year}</h5>
                  </div>
                  <h3 className="Rating">평점: {movie.rating}/10</h3>
                  <ul className="genresArray">
                    {genres.map((genre) => {
                      return <li key={genre}>{genre}</li>;
                    })}
                  </ul>
                  <p className="description">{movie.description_full}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
