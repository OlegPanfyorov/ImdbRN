import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TopFilms from './TopFilms';
import { loadFilms, addFilmToFavourites, removeFilmFromFavourites } from '../../../modules/films/actions';
import { filmsListSelector, favouriteFilmsSelector } from '../../../modules/films/selectors';

function mapStateToProps(state) {
  // console.log('state', state)
  return {
    films: filmsListSelector(state),
    // favourites: favouriteFilmsSelector(state)
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
