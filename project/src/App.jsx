import './Main.css'
import logo from './Img/logo.png'
import i1 from './Img/1.png'
import i2 from './Img/2.png'

function App() {
  return (
    <>
      <nav>
        <img src={ logo } style={{width:"136px"}} />
        <ul className="navUl">
          <li className="navLi activeNavLi">Home</li>
          <li className="navLi">About</li>
          <li className="navLi">Services</li>
          <li className="navLi">Projects</li>
        </ul>
        <div className="btn">Contact us</div>
      </nav>

      <div className="textZone1">
        <center><h1 className="bigText1">Make your dream <br /> business goal come true</h1></center>
        <center><p className="smallText1">when you need us for improve your business, <br /> then come with us to help your business have reach it, you just sit and feel that goal</p></center>
        <div className="btn-outline">Start Project</div>
        <img src={ i1 } className="imgI1"/>
      </div>

      <div className="textZone2">
        <center><p className="smallText2">About Us</p></center>
        <center><h1 className='bigText2'>Our Teammate</h1></center>
        <div className="miniZone1">
          <img src={ i2 } style={{height:"340px"}}/>
          <div className='textGroup'>
            <p className="smallText3">We move with make a Creative Strategy for help your business <br /> goal, we help to improve your income by a services we have. <br /> make your content look interesting and make people look for <br /> your business <br /><br /> We move with make a Creative Strategy for help your business <br /> goal, we help to improve your income by a services we have. <br /> make your content look interesting and make people look for <br /> your business
              <div className='btnGroup1'>
                <div className="btn-outline">About Us</div>
                <div className="btn">Our Story</div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
