import React from 'react'
import './apipage.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init();

function ApiPage() {
  return (
    <div className='Allapi' data-aos='zoom-up'>
      <div className="api1">
        <img src={require('./img/Ql.png')}/>
        <div className="textt">
        <p>GraphQL คือการดึงAPI ในรูปแบบที่ยอดเยี่ยมเกินจินตนาการ</p>
        <a href="https://graphql.org/" target='blank'>GrapgQl</a>
        </div>
      </div>
      <div className="api2">
        <img src={require('./img/axios.png')}/>
        <div className="textt">
          <p>AXIOS คือการใช้คำสั่ง เพื่อส่งREquest ไปยังServer เพื่อGet ข้อมูลจากฐานข้อมูลมาแสดงบนหน้าเว็บของคุณณณณ</p>
          <a href="https://www.javatpoint.com/react-axios#:~:text=In%20ReactJS%2C%20Axios%20is%20a%20library%20that%20serves,they%20can%20be%20normally%20shown%20on%20the%20website." target='blank'>AXIOS</a>
        </div>
      </div>
      <div className="api3">
        <img src={require('./img/cors.png')}/>
        <div className="textt">
          <p>CORS คือการสร้างเว็บไซต์ที่สามารถใช้งานได้จากเว็บไซต์อื่นได้ หากคุณทำเว็บเซิร์ฟเวอร์ที่ใช้การดึงAPIแล้วไม่ติดตั้งตัวนี้ลงไป Error กำลังมองหาคุณอยู่</p>
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" target='blank'>CORS</a>
        </div>
      </div>
    </div>
  )
}

export default ApiPage