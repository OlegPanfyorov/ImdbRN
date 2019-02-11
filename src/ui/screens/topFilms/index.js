import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TopFilms from './TopFilms';
import { loadFilms, addFilmToFavourites } from '../../../modules/films/actions';
import { filmsListSelector, favouriteFilmsSelector } from '../../../modules/films/selectors';

function mapStateToProps(state) {
  return {
    films: filmsListSelector(state),
    favourites: favouriteFilmsSelector(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadFilms: bindActionCreators(loadFilms, dispatch),
    addFilmToFavourites: bindActionCreators(addFilmToFavourites, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopFilms);
