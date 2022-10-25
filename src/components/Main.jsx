import { useEffect } from "react";


const Main = () => {

    useEffect(()=>{
        //the animations of the words
        wordEffect()

    }, [])

    const wordEffect= ()=> {
        let words = ["stuff.", 'websites.', 'cool solutions.','because I love it.', 'databases and servers.', 'solutions.', "to solve problems.", "with React.", "with jQuery.", "in Ruby.", "with Python.", "with JavaScript.", "applications.", 'for fun', 'with Vue.js'],
        part,
        i = 0,
        offset = 0,
        len = words.length,
        forwards = true,
        skip_count = 0,
        skip_delay = 10,
        speed = 80;


        setInterval(function () {
            if (forwards) {
            if (offset >= words[i].length) {
                ++skip_count;
                if (skip_count == skip_delay) {
                forwards = false;
                skip_count = 0;
                }
            }
            }
            else {
            if (offset == 0) {
                forwards = true;
                i++;
                offset = 0;
                if (i >= len) {
                i = 0;
                }
            }
            }
            part = words[i].substr(0, offset) + `\u00A0`; 
            if (skip_count == 0) {
            if (forwards) {
                offset++;
            }
            else {
                offset--;
            }
            }
            document.querySelector('.word').innerText=part;
        },speed);
    }; //wordEffect()


  


    return(
        <div className="main wrapper ml-10">
            <div>
                <h1 className="text-[3em]">Hi!</h1>
                <h1 className="text-[3em]">I'm <span className="text-blue-600">Brendan Tuckerman</span ></h1>
                <h1 className="text-[3em]">Full-stack<span className="text-blue-600" > web developer</span></h1>
                <h1 className="text-[3em]">I build <span className="text-blue-600 word"> &nbsp; </span></h1>
                <p className="text-[2em]">I design and create <span className="text-blue-600  ">high quality</span> web applications with a focus on <span className="text-blue-600 text-b">creative problem solving.</span></p>
            </div>

            <div className="w-full flex justify-center mt-5" >
            
                <a href="#about" className="scroll-smooth">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-20 ">About Me</button></a>

            
            </div>
        </div>


    )


};

export default Main