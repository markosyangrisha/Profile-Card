import './CardBlock.css'
import CardData from './CardData/CardData';
import FirendsData from './FirendsData/FirendsData';
import UserAlbum from './UserAlbum/UserAlbum';

const CardBlock = () => {

  const CardDataArrey = [
    {
      id: 1,
      firstName: "Mark",
      lastName: "zuckerberg",
      age: 50,
      gender: "male",
      email: "atuny0@sohu.com",
      phone: "+63 791 675 8914",
      description: "numbers & figures. Degree in corporate corporateness.responsible for all finances here at acme inc",

      profilImgage:"https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
      images: [
        "https://media.cnn.com/api/v1/images/stellar/prod/230711141746-01-mark-zuckerberg-life-in-pictures-lead-restricted.jpg?c=original",
        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2010/07/23/20/419247.jpg?width=1200",
        "https://hips.hearstapps.com/hmg-prod/images/facebook-founder-mark-zuckerberg-runs-with-bodyguards-in-news-photo-1682958981.jpg?crop=0.673xw:1.00xh;0.224xw,0&resize=1200:*",
        "https://s.hdnux.com/photos/01/32/01/42/23599278/6/rawImage.jpg"

      ],
      friends: [
       ["Kevin", "https://media.cnn.com/api/v1/images/stellar/prod/230711141746-01-mark-zuckerberg-life-in-pictures-lead-restricted.jpg?c=original",
       "https://static.independent.co.uk/s3fs-public/thumbnails/image/2010/07/23/20/419247.jpg?width=1200"],
       ["Elena", "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"], 
       ["syuzan", "https://media.istockphoto.com/id/1459178010/photo/fashion-industry-black-woman-and-designer-portrait-of-clothing-tailor-with-business-vision.jpg?s=612x612&w=0&k=20&c=XmGyalprlJMrpEPuduBA-YTrcbEXl8p0PFgTxWi0vvU="], 
       ["Joe", "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"]
      ]
    },
    {
      id: 2,
      firstName: "Sheldon",
      lastName: "Quigley",
      age: 40,
      gender: "female",
      email: "atuny0@sohu.com",
      phone: "+63 791 675 8914",
      description: "numbers & figures. Degree in corporate corporateness.responsible for all finances here at acme inc",

      profilImgage:"https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",

      images: [
        "https://media.istockphoto.com/id/1444291518/photo/black-woman-working-from-home-office.jpg?s=612x612&w=0&k=20&c=ruHb87Ryd6uOr7sRnqfOussQihY89gnGDLeisJnVi-M=",
        "https://media.istockphoto.com/id/1459178010/photo/fashion-industry-black-woman-and-designer-portrait-of-clothing-tailor-with-business-vision.jpg?s=612x612&w=0&k=20&c=XmGyalprlJMrpEPuduBA-YTrcbEXl8p0PFgTxWi0vvU=",
        "https://media.istockphoto.com/id/1440149723/photo/happy-man-social-media-phone-and-living-room-relax-typing-smartphone-and-online-communication.jpg?s=612x612&w=0&k=20&c=tCGby5hd5RN0bQLupoD19GCKsp4A5wvxNOFWkwajA1M=",
        "https://media.istockphoto.com/id/1455591618/photo/funny-excited-woman-laughing-and-smiling.jpg?s=612x612&w=0&k=20&c=Tfon_iIao0h2djYTbkwqnlPzAUDIeu7OnhZt98Ml73Y=",
    ],
    friends: [
      ["James", "https://media.cnn.com/api/v1/images/stellar/prod/230711141746-01-mark-zuckerberg-life-in-pictures-lead-restricted.jpg?c=original",
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2010/07/23/20/419247.jpg?width=1200"],
      ["serena", "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"], 
      ["cloe", "https://media.istockphoto.com/id/1459178010/photo/fashion-industry-black-woman-and-designer-portrait-of-clothing-tailor-with-business-vision.jpg?s=612x612&w=0&k=20&c=XmGyalprlJMrpEPuduBA-YTrcbEXl8p0PFgTxWi0vvU="], 
      ["Richard", "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"]
     ]
    },
    {
      id: 3,
      firstName: "Terrill",
      lastName: "Hills",
      age: 25,
      gender: "male",
      email: "atuny0@sohu.com",
      phone: "+63 791 675 8914",
      description: "numbers & figures. Degree in corporate corporateness.responsible for all finances here at acme inc",

      profilImgage:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",

      images: [
        "https://media.istockphoto.com/id/1460124878/photo/social-media-connection-and-woman-typing-on-a-phone-for-communication-app-and-chat-web-search.jpg?s=612x612&w=0&k=20&c=fJvxm6AuV1B0RkSKPx9BOuy-JQTevt1Ah0kySJ_GeRY=",
        "https://media.istockphoto.com/id/1443543154/photo/smiling-mature-woman-standing-in-a-park-outdoors-in-the-summertime.jpg?s=612x612&w=0&k=20&c=HOHi2rD00zuWrQswFIlOzxjJOiB0XKHfEPZXKBm51kE=",
        "https://media.istockphoto.com/id/1455591618/photo/funny-excited-woman-laughing-and-smiling.jpg?s=612x612&w=0&k=20&c=Tfon_iIao0h2djYTbkwqnlPzAUDIeu7OnhZt98Ml73Y=",
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
      ],
      friends: [
        ["Daniel", "https://media.cnn.com/api/v1/images/stellar/prod/230711141746-01-mark-zuckerberg-life-in-pictures-lead-restricted.jpg?c=original",
        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2010/07/23/20/419247.jpg?width=1200"],
        ["lusi", "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"], 
        ["veronika", "https://media.istockphoto.com/id/1459178010/photo/fashion-industry-black-woman-and-designer-portrait-of-clothing-tailor-with-business-vision.jpg?s=612x612&w=0&k=20&c=XmGyalprlJMrpEPuduBA-YTrcbEXl8p0PFgTxWi0vvU="], 
        ["donald", "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"]
       ]
    },
    {
      id: 4,
      firstName: "Miles",
      lastName: "Cummerata",
      age: 18,
      gender: "female",
      email: "atuny0@sohu.com",
      phone: "+63 791 675 8914",
      description: "numbers & figures. Degree in corporate corporateness.responsible for all finances here at acme inc",

      profilImgage:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",

      images: [
        "https://media.istockphoto.com/id/1444291518/photo/black-woman-working-from-home-office.jpg?s=612x612&w=0&k=20&c=ruHb87Ryd6uOr7sRnqfOussQihY89gnGDLeisJnVi-M=",
        "https://media.istockphoto.com/id/1459178010/photo/fashion-industry-black-woman-and-designer-portrait-of-clothing-tailor-with-business-vision.jpg?s=612x612&w=0&k=20&c=XmGyalprlJMrpEPuduBA-YTrcbEXl8p0PFgTxWi0vvU=",
        "https://media.istockphoto.com/id/1440149723/photo/happy-man-social-media-phone-and-living-room-relax-typing-smartphone-and-online-communication.jpg?s=612x612&w=0&k=20&c=tCGby5hd5RN0bQLupoD19GCKsp4A5wvxNOFWkwajA1M=",
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      ],
      friends: [
        ["steven", "https://media.cnn.com/api/v1/images/stellar/prod/230711141746-01-mark-zuckerberg-life-in-pictures-lead-restricted.jpg?c=original",
        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2010/07/23/20/419247.jpg?width=1200"],
        ["roza", "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"], 
        ["anna", "https://media.istockphoto.com/id/1459178010/photo/fashion-industry-black-woman-and-designer-portrait-of-clothing-tailor-with-business-vision.jpg?s=612x612&w=0&k=20&c=XmGyalprlJMrpEPuduBA-YTrcbEXl8p0PFgTxWi0vvU="], 
        ["ryan", "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"]
       ]
    },
  ];
  
  return(
      <div key={CardDataArrey.id} className='card-box'>
        {
          CardDataArrey.map((data) => {
            return(
              <div  className='card-block'>
                <div className='card-left'>
                  <CardData
                      profilImgage={data.profilImgage} 
                      firstName={data.firstName}
                      lastName={data.lastName} 
                      age={data.age} 
                      gender={data.gender}  
                      phone={data.phone}
                      email={data.email}
                      description={data.description}
                    />
                    <UserAlbum 
                      images={data.images}
                    />
                </div>
                <div className='card-right'>
                  <FirendsData 
                    images={data.images}
                    firends={data.friends}
                  />
                </div>
                
              </div>
            )
          })
        }
      </div>
  )
}

export default CardBlock;