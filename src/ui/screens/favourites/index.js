import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Favourites from './Favourites';
import { favouriteFilmsSelector } from '../../../modules/films/selectors';
import { removeFilmFromFavourites } from '../../../modules/films/actions';

function mapStateToProps(state) {
  return {
    favourites: favouriteFilmsSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromFavourites: bindActionCreators(removeFilmFromFavourites, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favourites);
