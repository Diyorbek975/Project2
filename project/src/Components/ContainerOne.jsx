import React from "react";
import imgOne from '../Assets/Img/img1.png'
import imgTwo from '../Assets/Img/img2.png'
import imgThree from '../Assets/Img/img3.png'
import imgFour from '../Assets/Img/img4.png'
import imgFive from '../Assets/Img/img5.png'
import imgSix from '../Assets/Img/img6.png'

const ContainerOne = () => {
    return(
        <div>
            <div>
                <div style={{display:"flex",justifyContent:"center",color:"#E2E2E2"}}>Our Portfolio</div>
                <br />
                <div style={{display:"flex",justifyContent:"center",fontSize:"30px",fontWeight:"600",color:"#E2E2E2"}}>What do we do</div>
                <br />
                <div style={{display:"flex",justifyContent:"center",textAlign:"center",fontSize:"12px",fontWeight:"300",color:"#E2E2E2"}}>all projects that we have already done , proven can help to use more <br /> comfortable, then can used by client from our business</div>
                <br /><br />
                <div style={{display:"flex",justifyContent:"center",gap:"40px",alignItems:"center"}}>
                    <div><img src={imgOne} style={{width:"200px",height:"200px"}} alt="" /></div>
                    <div><img src={imgTwo} style={{width:"250px",height:"250px"}} alt="" /></div>
                    <div><img src={imgThree} style={{width:"200px",height:"200px"}} alt="" /></div>
                </div>
                <br />
                <div style={{display:"flex",justifyContent:"center"}}>
                <button style={{display:"flex",justifyContent:"center",border:"1px solid #E2E2E2",width:"150px",height:"40px",borderRadius:"10px",alignItems:"center",background:"black",color:"#E2E2E2"}}>See All Portfolio</button>
                </div>
            </div>
            <br /><br /><br />
            <div>
            <div style={{display:"flex",justifyContent:"center",color:"#E2E2E2"}}>Testimonial</div>
                <br />
                <div style={{display:"flex",justifyContent:"center",fontSize:"30px",fontWeight:"600",color:"#E2E2E2"}}>People Talk about us</div>
                
                <br /><br />
                <div style={{display:"flex",justifyContent:"center",gap:"40px",alignItems:"center"}}>
                    <div><img src={imgFour} style={{width:"250px",height:"225px"}} alt="" /></div>
                    <div><img src={imgFour} style={{width:"250px",height:"225px"}} alt="" /></div>
                    <div><img src={imgFour} style={{width:"250px",height:"225px"}} alt="" /></div>
                </div>
            </div>
            <br /><br /><br />
            <div style={{display:"flex",justifyContent:"center",gap:"375px"}}>
                <div>
                    <div style={{fontSize:"40px",fontWeight:"500",color:"#E2E2E2"}}>Interesting <br /> Collaboration <br /> With Us?</div>
                    <br />
                    <div style={{marginTop:"20px",fontSize:"15px",fontWeight:"100",color:"#E2E2E2"}}>Help you to reach your business goal</div>

                    <div><button style={{marginTop:"20px",border:"none",background:"white",display:"flex",justifyContent:"center",alignItems:"center",width:"100px",height:"30px",borderRadius:"10px",fontWeight:"500"}}>Get started</button></div>
                </div>


                <div style={{marginRight:"200px"}}>
                    <div><img style={{width:"175px",height:"175px",position:"absolute"}} src={imgFive} alt="" /></div>
                    <div><img style={{width:"200px",height:"200px",position:"absolute"}} src={imgSix} alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default ContainerOne 