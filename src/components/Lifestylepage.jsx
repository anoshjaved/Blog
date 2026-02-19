import React from 'react'

import { Link, useParams } from 'react-router-dom'
import Footer from './Footer'
import lifestyledata from '../Blogdata/Lifestyledata'
const Beautypage = () => {
     let params = useParams()

     let filterData = lifestyledata.find(ele => ele.id == params.pid)
     console.log('Data->',filterData)
  return (
    <div>    <div className='main1'>
       <div className='main2'>

        {
            filterData.img&&(
                <img className='main2' src={filterData.img} alt="Fashion Item" width={900} height={600}/>
            )
        }
       </div>
       <h1 className='main3'>
         {filterData.heading}
       </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio adipisci mollitia magni 
          illum, error tempora eveniet architecto eligendi, numquam voluptas provident repudiandae, ipsum 
          itaque suscipit voluptates. Facere doloribus nostrum quos, cumque consequuntur perspiciatis,
           beatae fugiat labore distinctiotempore vero libero animi possimus quis aliquam a officia sapiente
            minima error. Incidunt!</p>
             <div>
             <h1 className='main7'>About Author</h1>
           <div className='main8'>           
             <div className='main4'>
            
            <img className='main5' src='https://p.w3layouts.com/demos_new/template_demo/11-08-2020/newsblog-liberty-demo_Free/1950211435/web/assets/images/a2.jpg' alt='Isabella ava' />
            <b className='main6'>Isabella ava</b>
            </div>
            <div className='main4'>
              <textarea  className='main9' placeholder='Leave your comment'/>
              <button className='main12'>Submit</button>
            </div>
            
            </div>
            <Link to={`/lifestyle`}>           
             <button className='main11'>Back</button>
            </Link>

          </div>

        
        
      
    </div>
    <Footer/>
    </div>

  )
}

export default Beautypage
