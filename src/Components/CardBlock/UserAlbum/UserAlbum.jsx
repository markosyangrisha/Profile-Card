import './UserAlbum.css'

const UserAlbum = ({images}) => {
  
  return(
    <div className="user-album">
      <h1>album</h1>
        <div className='album-images'>
          {
            images.map((img) => {
              return(
                    <div className='photo'>
                        <img src={img} alt="images" />
                    </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default UserAlbum;