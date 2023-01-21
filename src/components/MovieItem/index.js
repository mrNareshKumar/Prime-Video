// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <div>
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
        }
        className="popup_content"
      >
        {close => (
          <div className="modal_container">
            <button
              type="button"
              onClick={() => close()}
              data-testid="closeButton"
              className="close_button"
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div className="moviePlayer_container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
