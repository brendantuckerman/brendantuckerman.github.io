
const Footer =()=>{

    return(
        <footer className="pt-[20vh] h-[33vh] border-t-2 border-slate-300  bg-slate-700 text-slate-300 flex">
            <div className="name ml-10">
                <h2>BRENDAN TUCKERMAN 2022</h2>
                <p className='text-xs'>Built with React, Tailwind CSS, JavaScript, and email.js </p>
            </div>
            <div className="links ml-20 text-2xl">
                <a href="https://fosstodon.org/@mrmaverick" target="_blank" rel="noopener noreferrer"> 
                <i class="devicon-twitter-original p-2 hover:cursor-pointer"></i></a>
                <a href="https://github.com/MrMaverick79" target="_blank" rel="noopener noreferrer"> 
                
                <i class="devicon-github-original p-2 hover:cursor-pointer"></i></a>
                <a href="http://newtrick.com" target="_blank" rel="noopener noreferrer"> 
                <i class="devicon-wordpress-plain p-2 hover:cursor-pointer"></i></a>
            
            </div>

        </footer>
    )
}

export default Footer