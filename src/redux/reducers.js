import { combineReducers } from 'redux';
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

const peopleReducer = (state = { list: [], error: null }, action) => {
  switch (action.type) {
    case FETCH_PEOPLE_SUCCESS:
      return { ...state, list: action.payload, error: null, currentPage: action.currentPage, count: action.count };
    case FETCH_PEOPLE_FAILURE:
      return { ...state, list: [], error: action.payload };
    default:
      return state;
  }
};

const selectedPersonReducer = (state = { details: {}, error: null }, action) => {
  switch (action.type) {
    case FETCH_PERSON_DETAILS_SUCCESS:
      return { ...state, details: action.payload, error: null };
    case FETCH_PERSON_DETAILS_FAILURE:
      return { ...state, details: {}, error: action.payload };
    case RESET_PERSON_DETAILS:
      return { details: {}, error: null };
    default:
      return state;
  }
};

const homeworldReducer = (state = { data: {}, error: null }, action) => {
  switch (action.type) {
    case FETCH_HOMEWORLD_SUCCESS:
      return { ...state, data: action.payload, error: null };
    case FETCH_HOMEWORLD_FAILURE:
      return { ...state, data: {}, error: action.payload };
    default:
      return state;
  }
};

const speciesReducer = (state = { data: [], error: null }, action) => {
  switch (action.type) {
    case FETCH_SPECIES_SUCCESS:
      return { ...state, data: action.payload, error: null };
    case FETCH_SPECIES_FAILURE:
      return { ...state, data: {}, error: action.payload };
    default:
      return state;
  }
};

const starshipsReducer = (state = { data: [], error: null }, action) => {
  switch (action.type) {
    case FETCH_STARSHIPS_SUCCESS:
      return { ...state, data: action.payload, error: null };
    case FETCH_STARSHIPS_FAILURE:
      return { ...state, data: [], error: action.payload };
    default:
      return state;
  }
};

const filmsReducer = (state = { data: [], error: null }, action) => {
  switch (action.type) {
    case FETCH_FILMS_SUCCESS:
      return { ...state, data: action.payload, error: null };
    case FETCH_FILMS_FAILURE:
      return { ...state, data: [], error: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  people: peopleReducer,
  selectedPerson: selectedPersonReducer,
  homeworld: homeworldReducer,
  species: speciesReducer,
  starships: starshipsReducer,
  films: filmsReducer,
});

export default rootReducer;