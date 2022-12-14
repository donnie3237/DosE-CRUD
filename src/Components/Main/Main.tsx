import React from 'react'
import './main.scss'
import 'aos/dist/aos.css'
import AOS from 'aos'
import {NavLink} from 'react-router-dom'
AOS.init();

function Main() {
  return (
    <div className='maineiei' data-aos='fade-up'>
        <div className="wrapmern">
        <div className="mern">
              <div className="crop crop-mern">
              </div>
              <div className="mern-text">
                <h1>This website made with MERN stack</h1>
                <p>LearnMoreAbout ?</p>
                <a href="https://wikitia.com/wiki/MERN_(solution_stack)" target='blank'>MERN STACK</a>
              </div>
        </div>
        <div className="detmern">
            <div className="detfont" data-aos='fade-right'>
              <div className="crop crop-font"></div>
              <div className="detfont-text">
                <p>Explore React For Client Side?</p>
                <p>ฉันใช้ ReactJS สำหรับทำฝั่งผู้ใช้ของเว็บนี้</p>
                <a href="https://reactjs.org/" target='blank'>React</a>
            </div>
            </div>
            <div className="detback" data-aos='fade-up'>
              <div className="crop crop-back"></div>
              <div className="detback-text">
                <p>Explore ExpressJS For Backend?</p>
                <p>ฉันใช้ ExpressJS สำหรับทำฝั่งหน้าเซิฟเวอร์ของเว็บนี้</p>
                <a href="https://expressjs.com/" target='blank'>ExpressJS</a>
              </div>
            </div>
            <div className="detdta" data-aos='fade-left'>
              <div className="crop crop-dta"></div>
              <div className="detdta-text">
                <p>Explore MongoBD For DataBase side?</p>
                <p>ฉันใช้ MongoDB สำหรับทำฝั่งฐานข้อมูลของเว็บนี้</p>
                <a href="https://www.mongodb.com/" target='blank'>MongoDB</a>
              </div>
            </div>
        </div>
        </div>
        <div className="detail">
            <div className="detail-title">
                <h2>More Details</h2>
            </div>
            <div className="grid">
              <div className="f1r">
                    <div className="g g1" data-aos='fade-right'>
                      <div className="crop crop-g1"></div>
                      <div className="g1-text">
                        <p>About UI/UX design.</p>
                        <p>การดีไซน์UI/UXเว็บ,แอพ,เกม ด้วยXD(มีอีกหลายตัว) แต่ผมรู้จักแค่ตัวนี้ :)</p>
                        <a href="https://www.adobe.com/products/xd.html" target='blank'>XD</a>
                      </div>
                    </div>
                    <div className="g g2" data-aos='fade-down'>
                      <div className="crop crop-g2"></div>
                      <div className="g2-text">
                        <p>connect to server</p>
                        <p>การเชื่อมต่อกับserver</p>
                        <NavLink to='/api'>Axios</NavLink>
                      </div>
                    </div>
                    <div className="g g3" data-aos='fade-left'>
                      <div className="crop crop-g3"></div>
                      <div className="g3-text">
                        <p>link to another page.</p>
                        <p>การลิงค์ไปหน้าต่างๆ</p>
                        <a href="https://www.w3schools.com/react/react_router.asp" target='blank'>Router</a>
                      </div>
                    </div>
              </div>
              <div className="s2r">
              <div className="g g4" data-aos='fade-right'>
                      <div className="crop crop-g4"></div>
                      <div className="g4-text">
                        <p>web Animation</p>
                        <p>ทำให้เว็บมีอนิเมชั่นนนน</p>
                        <a href="https://michalsnik.github.io/aos/" target='blank'>AOS</a>
                        <a href="https://www.framer.com/motion/" target='blank'>Famer-motion</a>
                        </div>
              </div>
                    <div className="g g5" data-aos='fade-up'>
                      <div className="crop crop-g5"></div>
                      <div className="g5-text">
                        <p>security .env and vpn for U.</p>
                        <p>ระบบความปลอดภัยเล็กน้อย .env และ Vpn สำหรับคุณ</p>
                        <NavLink to='/data'>.env</NavLink>
                        <a href="https://openvpn.net/" target='blank'>Vpn</a>
                      </div>
                    </div>
                    <div className="g g6" data-aos='fade-left'>
                      <div className="crop crop-g6"></div>
                      <div className="g6-text">
                        <p>connect database and how database work</p>
                        <p>มาทำความเข้าใจฐานข้อมูล</p>
                        <NavLink to='/data'>MongoDB</NavLink>
                      </div>
                    </div>
              </div>              
            </div>
        </div>
    </div>
  )
}

export default Main