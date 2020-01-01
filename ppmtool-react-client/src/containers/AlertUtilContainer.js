import Alert from '../components/util/AlertUtil'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  errors: state.errors
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Alert)