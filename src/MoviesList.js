/* eslint react/no-did-mount-set-state: 0 */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Movie from './Movie';

class MoviesList extends PureComponent {
  state = {
    movies: [],
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=cb856d5959ce784a4b15a040c4a4' +
          'c0f8&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=fal' +
          'se&page=1');
      const movies = await res.json();
      this.setState({ movies: movies.results });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <MovieGrid>
        {this
          .state
          .movies
          .map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}

export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  justify-content: center;
  text-align: center;
  max-width: 2000px;
`;
