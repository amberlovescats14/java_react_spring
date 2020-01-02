import Dashboard from '../components/Dashboard'
import { connect } from 'react-redux'
import { getProjects, deleteProject } from '../redux/actions'

const mapStateToProps = state => ({
  projectObj: state.projectObj
})

const mapDispatchToProps = dispatch => ({
  getProjects: () => dispatch(getProjects()),
  deleteProject: (identifier) => dispatch(deleteProject(identifier))

})

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)