import { connect } from 'react-redux'
import ArticleHTML from '../components/articlehtml'

const mapStateToProps = (state) => {
  return {
    model: state.articleModel
  }
}

const AppArticleHTML = connect(
  mapStateToProps
)(ArticleHTML)

export default AppArticleHTML
