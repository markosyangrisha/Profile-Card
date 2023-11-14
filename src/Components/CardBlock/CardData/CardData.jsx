import './CardData.css'

const CardData = ({firstName, lastName, age, gender, profilImgage, phone, email, description}) => {

  return(
    <div className="user-block">
              <div className="user-data">
                 <div className="profil-image">
                    <img src={profilImgage} alt="imgae" />
                </div>
                    <div>
                        <h2>{firstName} {lastName}</h2>
                    </div>
                  <div className='user-info'>
                      <p>{description}</p>
                      <div className='user-about'>
                        <b>email:</b> 
                        <span><i class="bi bi-envelope-at-fill"></i> {email}</span>
                      </div>
                      <div className='user-about'>
                        <b>age:</b> 
                        <span>{age}</span>
                      </div>
                      <div className='user-about'> 
                        <b>phone:</b> 
                        <span><i class="bi bi-telephone-inbound"></i> {phone}</span>
                      </div>
                      <div className='user-about'>
                        <b>gender:</b> 
                        <span>{gender}</span>
                      </div>
                      
                  </div>
              </div>
    </div>
  )
}

export default CardData;