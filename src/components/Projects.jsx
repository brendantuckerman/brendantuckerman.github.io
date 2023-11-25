import '../index.css'


const Projects =()=> {

    return(
        <div className="wrapper flex flex-col w-[100vw] text-center">
            <h2 className="text-center text-[3em]" id="projects">Recent Projects</h2>
            {/* Serious Business */}
            <div class="flex justify-center mt-10" >
              <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg border-4 border-slate-200 p-10">
                <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="../img/serious-business.png" alt="A screenshot from Serious Business" />
                <div class="p-2 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">Serious Business</h5>
                <p class="text-gray-700 text-base mb-4">
                    An example of a Drupal 10 project using Composer and hosted on patheon.io. It uses custome themes, blocks, and views to generate a demonstration of how Drupal could be used for an organisation.
                </p>
                    <div className="buttons p-2">
                        <a href="https://dev-serious-business.pantheonsite.io/" target="_blank" rel="noopener noreferrer" >
                        <button type="button" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-20 m-2">Demo</button></a> <a href="https://github.com/MrMaverick79/" target="_blank" rel="noopener noreferrer"><button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-20">GitHub</button></a>

                    </div>
                    <div className="icons text-[2em]">
                        
                        <i class="devicon-drupal-plain-wordmark colored"></i>
                        <i class="devicon-bootstrap-plain-wordmark colored"></i>
                        <i class="devicon-composer-line-wordmark colored"></i>
                        <i className="devicon-javascript-plain colored p-2"></i>             
                    </div>
                </div>
            </div>
        </div>
        {/* You autocomplete me */}
            <div class="flex justify-center mt-10" >
              <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg border-4 border-slate-200 p-10">
                <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="../img/yam.png" alt="A screenshot from you autocomplete me" />
                <div class="p-2 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">you (auto)complete me</h5>
                <p class="text-gray-700 text-base mb-4">
                    This machine learning project takes user input and writes a line in the style of famous authors: Shakepeare, Dickinson, and Edgar Allan Poe, so that you can write a poem together!
                </p>
                    <div className="buttons p-2">
                        <a href="https://mrmaverick79.github.io/you-autocomplete-me/" target="_blank" rel="noopener noreferrer" >
                        <button type="button" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-20 m-2">Demo</button></a> <a href="https://github.com/MrMaverick79/you-autocomplete-me" target="_blank" rel="noopener noreferrer"><button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-20">GitHub</button></a>

                    </div>
                    <div className="icons text-[2em]">
                        <i className="devicon-react-original-wordmark colored p-2"></i>
                        <i className="devicon-redux-original colored p-2"></i>
                        <i className="devicon-tailwindcss-original-wordmark colored p-2"></i>
                        <i className="devicon-javascript-plain colored p-2"></i>
                        <i class="devicon-python-plain-wordmark colored  p-2"></i>
                    </div>
                </div>
            </div>
        </div>
        {/* -URL SHORTN */}
        <div class="flex justify-center mt-10">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg border-4 border-slate-200 p-5">
                <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="../img/shrtUrl.png" alt="a screenshot from srt.URL showing thee main page with a shortened url." />
                <div class="p-2 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">shrtn.URL</h5>
                <p class="text-gray-700 text-base mb-4">
                MERN Stack project that takes a URL and provides a shortened link. Node.js back end hosted on Render.
                </p>
                    <div className="buttons p-2">
                        <a href="https://mrmaverick79.github.io/url-shorten-react-frontend/" target="_blank" rel="noopener noreferrer" >
                        <button type="button" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-20 m-2">Demo</button></a> <a href="https://github.com/MrMaverick79/url-shorten-react-frontend"
                        target="_blank" rel="noopener noreferrer"><button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-20">GitHub</button></a>

                    </div>
                    <div className="icons text-[2em]">
                        <i class="devicon-mongodb-plain-wordmark colored p-2"></i>
                        <i class="devicon-express-original-wordmark colored p-2"></i>
                        <i className="devicon-react-original-wordmark colored p-2"></i>
                        <i class="devicon-nodejs-plain-wordmark"></i>

                        
                    </div>
                </div>
            </div>
        </div>
        {/* 3-GOOD POINT */}
        <div class="flex justify-center mt-10">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg border-4 border-slate-200 p-5">
                <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="../img/goodpoint.png" alt="a screenshot from goodpoint, showing a chatroom." />
                <div class="p-2 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">Good Point</h5>
                <p class="text-gray-700 text-base mb-4">
                Full-stack project demonstrating Socket.io with Vue.js and Node.js to send messages via chat rooms.
                </p>
                    <div className="buttons p-2">
                        <a href="https://mrmaverick79.github.io/good-point-vue-frontend/" target="_blank" rel="noopener noreferrer" >
                        <button type="button" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-20 m-2">Demo</button></a> <a href="https://github.com/MrMaverick79/good-point-vue-frontend"
                        target="_blank" rel="noopener noreferrer"><button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-20">GitHub</button></a>

                    </div>
                    <div className="icons text-[2em]">
                        <i class="devicon-mongodb-plain-wordmark colored p-2"></i>
                        <i class="devicon-express-original-wordmark colored p-2"></i>
                        <i class="devicon-socketio-original-wordmark colored p-2"></i>
                        <i class="devicon-vuejs-plain-wordmark colored p-2"></i>
                    </div>
                </div>
            </div>
        </div>


              

        {/* 3  - TTT*/}
        <div class="flex justify-center mt-10">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg border-4 border-slate-200 p-5">
                <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="../img/ttt.png" alt="a screenshot from youautocomplete me, showing one of the poems." />
                <div class="p-2 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">Recursive Algoriths - Tic Tac Toe</h5>
                <p class="text-gray-700 text-base mb-4">
                A demonstration of recursion and the use of the minimax algorithm in a web-based Tic Tac Toe app. The AI considers every possibly move in every possible square, so you can't beat it when it is set to "Impossible".
                </p>
                    <div className="buttons p-2">
                        <a href="https://mrmaverick79.github.io/project0/" target="_blank" rel="noopener noreferrer" >
                        <button type="button" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-20 m-2">Demo</button></a> <a href="https://github.com/MrMaverick79/project0" target="_blank" rel="noopener noreferrer"><button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-20">GitHub</button></a>

                    </div>
                    <div className="icons text-[2em]">
                    <i class="devicon-jquery-plain-wordmark colored  p-2"></i>
                        <i class="devicon-html5-plain-wordmark colored  p-2"></i>
                        <i class="devicon-css3-plain-wordmark colored  p-2"></i>
                        <i class="devicon-javascript-plain colored  p-2"></i>
                    </div>
                </div>
            </div>
        </div>




    </div>
      

    )

}

export default Projects