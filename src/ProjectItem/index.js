import './index.css'

const ProjectItem = props => {
  const {projectDetails, onImageClicked} = props
  const {thumbnailUrl} = projectDetails

  const onClickImage = () => {
    onImageClicked(thumbnailUrl)
  }

  return (
    <li className="list-item-container">
      <button className="button" type="button" onClick={onClickImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="image-icon" />
      </button>
    </li>
  )
}
export default ProjectItem
