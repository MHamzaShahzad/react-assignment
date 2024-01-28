import axios from 'axios';
import {
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAILURE,
  FETCH_PERSON_DETAILS_SUCCESS,
  FETCH_PERSON_DETAILS_FAILURE,
  RESET_PERSON_DETAILS,
  FETCH_HOMEWORLD_SUCCESS,
  FETCH_HOMEWORLD_FAILURE,
  FETCH_SPECIES_SUCCESS,
  FETCH_SPECIES_FAILURE,
  FETCH_STARSHIPS_SUCCESS,
  FETCH_STARSHIPS_FAILURE,
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_FAILURE
} from './actionTypes';
import config from '../config';

export const fetchPeople = (page = 1) => async (dispatch) => {
  console.log(`Fetching people for page ${page}...`);
  try {
    const response = await axios.get(`${config.API_BASE_URL}${config.endpoints.PEOPLE}/?page=${page}`);
    console.log('fetchPeople API Response:', response.data);
    dispatch({ type: FETCH_PEOPLE_SUCCESS, payload: response.data.results, currentPage: page, count: response.data.count });
  } catch (error) {
    console.error('Error fetching people:', error.message);
    dispatch({ type: FETCH_PEOPLE_FAILURE, payload: error.message });
  }
};

export const fetchPersonDetails = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${config.API_BASE_URL}${config.endpoints.PEOPLE}/${id}/`);
    console.log('fetchPersonDetails API Response:', response.data);
    dispatch({ type: FETCH_PERSON_DETAILS_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error fetching person:', error.message);
    dispatch({ type: FETCH_PERSON_DETAILS_FAILURE, payload: error.message });
  }
};

export const resetPersonDetails = () => (dispatch) => (
  dispatch({type: RESET_PERSON_DETAILS,})
);

export const fetchHomeworld = (url) => async (dispatch) => {
  console.log(`Fetching homeworld for url ${url}...`);
  try {
    const response = await axios.get(url);
    console.log('fetchHomeworld API Response:', response.data);
    dispatch({ type: FETCH_HOMEWORLD_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error fetching homeworld:', error.message);
    dispatch({ type: FETCH_HOMEWORLD_FAILURE, payload: error.message });
  }
};

export const fetchSpecies = (urls) => async (dispatch) => {
  console.log(`Fetching Species for url(s) ${urls}...`);
  try {
    const species = await Promise.all(urls.map(url => axios.get(url)));
    const speciesData = species.map(response => response.data);
    dispatch({ type: FETCH_SPECIES_SUCCESS, payload: speciesData });
    console.log('fetchSpecies API Response:', speciesData);
  } catch (error) {
    dispatch({ type: FETCH_SPECIES_FAILURE, payload: error.message });
  }
};

export const fetchStarships = (urls) => async (dispatch) => {
  console.log(`Fetching starships for url(s) ${urls}...`);
  try {
    const starships = await Promise.all(urls.map(url => axios.get(url)));
    const starshipsData = starships.map(response => response.data);
    dispatch({ type: FETCH_STARSHIPS_SUCCESS, payload: starshipsData });
    console.log('fetchStarships API Response:', starshipsData);
  } catch (error) {
    dispatch({ type: FETCH_STARSHIPS_FAILURE, payload: error.message });
  }
};

export const fetchFilms = (urls) => async (dispatch) => {
  console.log(`Fetching films for url(s) ${urls}...`);
  try {
    const films = await Promise.all(urls.map(url => axios.get(url)));
    const filmsData = films.map(response => response.data);
    console.log('fetchFilms API Response:', filmsData);
    dispatch({ type: FETCH_FILMS_SUCCESS, payload: filmsData });
  } catch (error) {
    dispatch({ type: FETCH_FILMS_FAILURE, payload: error.message });
  }
};