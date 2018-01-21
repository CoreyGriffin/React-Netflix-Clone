import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w342';

const Movie = ({ movie }) => (
  <Link to={`/${movie.id}/${movie.title}`}>
    <Overdrive id={movie.id}>
      <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
    </Overdrive>
  </Link>
);

export default Movie;

Movie.propTypes = {
  movie: PropTypes
    .shape({ title: PropTypes.string })
    .isRequired,
};

export const Poster = styled.img`
  box-shadow: 0 0 35px black;
  margin: 5px;
  transition: all .2s ease-in-out;
  &:hover{
    transform: scale(1.05);
  }
    `;
