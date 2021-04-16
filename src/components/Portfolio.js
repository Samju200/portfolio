import React from 'react'
import { FaAngleRight, FaGithubSquare } from 'react-icons/fa'
function Portfolio() {
    return (
        <>
            <div className="work" id="portfolio">
            <h1> Portfolio</h1>
            <div className="portfolio-link">
                    <div className="foundation">
                      <img src="img/foundation.png" className="foto" alt="">
                      <h1>Random</h1>
                      <button className="port-btn"> <a href="https://samju200.github.io/samju/foundation/index.html">Veiw Website <FaAngleRight/></a></button>
                      <a href="https://github.com/Samju200/samju/tree/master/foundation">
                         <FaGithubSquare/>
                      </a>
                    </div>
                    <div className="simple">
                      <img src="img/simple.png" alt="">
                        <h1>e-commerce </h1>
                        <button className="port-btn"> <a href="https://samju200.github.io/samju/simple/product.html">Veiw Website <FaAngleRight/></a></button>
                        <a href="https://github.com/Samju200/samju/tree/master/simple">
                           <FaGithubSquare />
                        </a>
                    </div>
                    <div className="dribble">
                      <img src="img/dribble.png" alt="">
                          <h1>e-commerce</h1>
                       <button className="port-btn"> <a href="https://samju200.github.io/samju/dribble/index.html">Veiw Website<FaAngleRight/></a></button>
                       <a href="https://github.com/Samju200/samju/tree/master/dribble">
                        <FaGithubSquare />
                      </a>
                    </div>
                    <div className="martha">
                      <img src="img/martha.png" alt="">
                        <h1>e-commerce</h1>
                     <button className="port-btn"> <a href="https://samju200.github.io/samju/martha/index.html">Veiw Website<FaAngleRight/></a></button>
                     <a href="https://github.com/Samju200/samju/tree/master/martha">
                       <FaGithubSquare />
                     </a>
                    </div>
                    <div className="dom1">
                      <img src="img/dom1.png" alt="">
                        <h1>Dom</h1>
                     <button class="port-btn"> <a href="https://samju200.github.io/DOM/dom1/dom.html">Veiw Website<FaAngleRight/></a></button>
                     <a href="https://github.com/Samju200/DOM/tree/master/dom1">
                      <FaGithubSquare />
                     </a>
                    </div>
                    < div className="dom2">
                      <img src="img/currency.png" alt="">
                        <h1>currency exchange</h1>
                     <button className="port-btn"> <a href="https://samju200.github.io/samju/currency/index.html">Veiw Website <FaAngleRight/></a></button>
                     <a href="https://github.com/Samju200/samju/tree/master/currency">
                       <FaGithubSquare />
                     </a>
                    
                    <div className="dom2">
                      <img src="img/fetch-user.png" alt="fetch-user">
                        <h1>fetch user </h1>
                     <button className="port-btn"> <a href="https://samju200.github.io/react-fetchusers/">Veiw Website<FaAngleRight/></a></button>
                     <a href="https://github.com/Samju200/react-fetchusers">
                      <FaGithubSquare />
                     </a>
                    </div>
                    <div className="dom2">
                      <img src="img/linkedlin-clone.png" alt="linkedlin-clone">
                        <h1>LinkedlIn Clone</h1>
                     <button className="port-btn"> <a href="https://linkedin-clone-yt-4878b.web.app/">Veiw Website<FaAngleRight/></a></button>
                     <a href="https://github.com/Samju200/todo">
                      <FaGithubSquare />
                     </a>
                    </div>
                    <div className="dom2">
                      <img src="img/todo-react.png" alt="todo-react">
                        <h1>Advance Todo </h1>
                     <button className="port-btn"> <a href="https://samju200.github.io/todo/">Veiw Website <FaAngleRight/></a></button>
                     <a href="https://github.com/Samju200/todo">
                       <FaGithubSquare />
                     </a>
                    </div>
        
        </div>
        </>
    )
}

export default Portfolio
