import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Charts from './Charts';
import { chartDataSelector } from '../../../modules/films/selectors';

function mapStateToProps(state) {
  return {
    chartData: chartDataSelector(state),
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
)(Charts);
