import AlertWarning from '../components/util/AlertWarning'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  warnings: state.warnings
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(AlertWarning)