import React from 'react'
import './data.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useState} from 'react'
import {HashLink} from 'react-router-hash-link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

AOS.init();
function DataPage() {
  const [fix, setFix] = useState(false)
  function setfixed() {
    if(window.scrollY > 150) {
      setFix(true)
    }else {
      setFix(false)
    }
  }
  window.addEventListener('scroll', setfixed)
  return (
    <div className='DataAll' >
        <div className="mongo-head" id='dotenv'>
        <div className={fix ? 'bar fix':'bar'}>
            <HashLink smooth to='#dotenv'>DOTENV</HashLink>
            <HashLink smooth to='#json'>JSON</HashLink>
            <HashLink smooth to='#mongoose'>CLOUD</HashLink>
            <HashLink smooth to='#compass'>COMPASS</HashLink>
            <HashLink smooth to='#nodemon'>NODEMON</HashLink>
          </div>
        </div>
        <div className="big" data-aos='zoom-in' >
          <div className="dotenv" ata-aos='fade-right' >
            <div className="title"><p>DOTENV</p></div>
            <div className="envdata" >
              <div className="image">
                <img src={require('./img/dotenv.png')} alt=""/>
              </div>
              <div className="text">
                <p>.env เอาไว้เก็บข้อมูลสำคัญ ให้ปลอดภัย เช่น รหัสเชื่อม ฐานข้อมูล ,พอร์ตของserver </p>
                <a href="https://www.dotenv.org/" id='json' target='blank'>More</a>
              </div>
            </div>
          </div>
          <div className="JSON" data-aos='fade-left' >
            <div className="title"><p>JSON</p></div>
            <div className="JSONdata">
              <div className="image">
                <img src={require('./img/json.png')} alt=""/>
              </div>
              <div className="text">
                <p>JSON คือ รูปแบบของ javascript objectใช้สำหรับเเลกเปลี่ยนข้อมูล กับภาษาอื่นๆได้ เช่น PHP C#... โดยมีการเข้ารหัสและถอดรหัส เพื่ออ่านค่าข้อมูล
                  และ ผมใช้ JSON  สำหรับเก็บข้อมูลใน MongoDB
                </p>
                <a href="https://www.json.org/" id='mongoose' target='blank'>More</a>
                </div>
            </div>
          </div>
          <div className="mongoose" data-aos='fade-right' >
            <div className="title"><p>Cloud</p></div>
            <div className="mongoosedata" >
              <div className="image">
                <img src={require('./img/cloud.jpg')} alt=""/>
                </div>
              <div className="text">
                <p id='compass'>Cloud สำหรับ MongoBD มีหลักๆ 3เจ้า คือAWS,Google cloud,Microsoft Azure ซึ่งตัวฮิตๆน่าจะAWSนี่เเหละ</p>
                </div>
            </div>
          </div>
          <div className="compass" data-aos='fade-left' >
            <div className="title"><p>Compass</p></div>
            <div className="compassdata" >
              <div className="image">
                <img src={require('./img/compass.png')} alt=""/>
                </div>
              <div className="text">
                <p>MongoBD compass เป็น โปรแกรมสำหรับจัดการฐานข้อมูลนี้ ซึ่งหาโหลดได้ทางเว็บMongoBD เลย</p>
                <a href="https://www.mongodb.com/products/compass" id='nodemon' target='blank'>More</a>
                </div>
            </div>
          </div>
          <div className="nodemon" data-aos='fade-right' >
            <div className="title"><p>Nodemon</p></div>
            <div className="nodemondata" >
              <div className="image">
                <img src={require('./img/nodemon.png')}/>
                </div>
              <div className="text">
                <p>Nodemon ความจริงมันไม่ได้เกี่ยวกับฐานข้อมูลขนาดนั้นแต่พื้นที่มันเหลือก็เลยแทรกมา มันเอาไว้ใช้กับการพัฒนาฝั่งserver สำหรับการใส่สคริป ในไฟล์ package.json</p>
                <a href="https://nodemon.io/" target='blank'>More</a>
                </div>
                </div>
          </div>
        </div>
        <ToastContainer
				position="top-right"
				autoClose={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
			/>
    </div>
  )
}

export default DataPage