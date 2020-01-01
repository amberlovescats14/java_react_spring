import ProjectForm from '../components/project/ProjectForm'
import { connect } from 'react-redux'
import { createProject } from '../redux/actions'

const mapStateToProps = state => ({

})

const mapDisptachToProps = dispatch => ({
  createProject: (project, history) => dispatch(createProject(project, history))
})

export default connect(mapStateToProps, mapDisptachToProps)(ProjectForm)