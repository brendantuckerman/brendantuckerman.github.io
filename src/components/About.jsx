import '../shapes.css'

const About = () => {

    return(

        <div className="w-full">
            <h2 className="text-center text-[3em]">About Me</h2>
            <div className="m-10 md:flex" id="about" >
             <div className="m-10">
                <div id="red_square" className="shape flex justify-center align-center h-full">
                <img src="../img/profile.jpg" className="rounded-full relative top-3 h-[70%] w-[80%] border-4 border-black" />
                </div>
                
              </div>
             <div className="w-[70vw]">
              <h3 className='text-xl p-2'>Hi! 👋 I'm Brendan.</h3>
                            
  
              <p className='p-2'>I'm a Canberra-based software engineer who has been fascinated by technology since my very first Commodore 64.</p>
              
              <p className='p-2'>I'm energized by finding solutions to complex problems in creative ways and exploring new things with an unceasing curiosity.</p>
                               
              <p className='p-2'>I aspire to improve digital equity--ensuring that everyone has a chance to benefit from our amazing technologies. As a former teacher, leader, and professional coach, I'm passionate about making sure my work helps those who need it most.</p>
              
              <p className='p-2'>If you are looking for someone who loves to code, loves a challenge,  and loves to learn, <a href="mailto:brendan.tuckerman@gmail.com?subject=Hello!" target="_blank" rel="noopener noreferrer">get in touch!</a></p>

              </div>
            </div>
            <div className="w-full flex justify-center mt-10" >
            
            <a href="#projects" className="scroll-smooth">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-20 ">See My Work</button></a>

        
        </div>
        </div>

    )
};

export default About