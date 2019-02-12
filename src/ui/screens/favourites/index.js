import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Favourites from './Favourites';
import { favouriteFilmsSelector } from '../../../modules/films/selectors';
import { removeFilmFromFavourites, updateFilmsSorting } from '../../../modules/films/actions';

function mapStateToProps(state) {
  return {
    favourites: favouriteFilmsSelector(state),
    currentSortingValue: state.films.sortingType
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromFavourites: bindActionCreators(removeFilmFromFavourites, dispatch),
    updateSorting: bindActionCreators(updateFilmsSorting, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favourites);
