import ProjectModal from '../components/project/ProjectModal'
import { connect } from 'react-redux'
import { updateProject } from '../redux/actions'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  updateProject: (identifier, details) => dispatch(updateProject(identifier, details))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectModal)