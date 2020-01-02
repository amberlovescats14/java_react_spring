import Dashboard from '../components/Dashboard'
import { connect } from 'react-redux'
import { getProjects, updateProject } from '../redux/actions'

const mapStateToProps = state => ({
  projectObj: state.projectObj
})

const mapDispatchToProps = dispatch => ({
  getProjects: () => dispatch(getProjects()),

})

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)