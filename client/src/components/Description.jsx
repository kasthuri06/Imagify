import React from 'react'
import {assets} from '../assets/assets'
import {motion} from 'framer-motion'  


const Description = () => {
  return (
    <motion.div 
    initial ={{opacity: 0.2,y: 100}}
    transition ={{duration:1}}
    whileInView ={{opacity:1, y:0}}
    viewport ={{once:true}}
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
      <p className='text-gray-500 mb-8'>Turn your ideas into stunning visuals with our AI image generator.</p>
      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
        <img src= {assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg'/>
        <div>
            <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered Text to Image Generator</h2>
            <p className='text-gray-600 mb-4'>
                Easily Bring your ideas to life with our cutting-edge AI technology. Simply enter a description, and watch as our advanced algorithms create unique, high-quality images tailored to your vision. Perfect for designers, marketers, and creatives looking to enhance their projects with stunning visuals.
            </p>
            <p className='text-gray-600'> 
                Simply type in a text prompt describing the image you want, and our AI will generate a unique image based on your description. Whether you need illustrations for a blog post, concept art for a project, or just want to explore your creativity, our text to image generator makes it easy and fun.
            </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Description
