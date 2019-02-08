import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TopFilms from './TopFilms';
import { loadFilms, addFilmToFavourites, removeFilmFromFavourites } from '../../../modules/films/actions';

function mapStateToProps(state) {
  return {
    films: state.films,
    favourites: state.favourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadFilms: bindActionCreators(loadFilms, dispatch),
    addFilmToFavourites: bindActionCreators(addFilmToFavourites, dispatch),
    removeFilmFromFavourites: bindActionCreators(removeFilmFromFavourites, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopFilms);
