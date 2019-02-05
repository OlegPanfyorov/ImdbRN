import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Favourites from './Favourites';
// import { loadFilms } from '../../../modules/films/actions';

function mapStateToProps(state) {
  return {
    // films: state.films,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // loadFilms: bindActionCreators(loadFilms, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favourites);
