import './FirendsBlock.css'

const FirendsData = ({firends}) => {

  return(
    <div className="firends-blcok">
      <div className='firends-hedear'>
           <h3>firends</h3>
      </div>
     {
      firends.map((firend) => {
        return(
          <div className='firends-name'>
                <img src={firend[1]} alt="" />
                <span>{firend[0]}</span>
          </div>
        )
      }) 
     }
    </div>
  )
}

export default FirendsData;