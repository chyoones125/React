import React from "react";
import "./Footer.css"
function App(){
return (
<div className="App">
<NavBar/>
<Footer/>
<Button/>
<br />
<Button/>
<br />
<Button/>
<br />
<br />
<MainText/>
</div>
)
}

function NavBar(){
    return (
        <>
        <h1>header</h1>
        <hr />
        <p className="lorem_test">Lorem ipsum dolor sit amet consectetur adipisicing elit. A nam architecto, tempore debitis tenetur natus dolor nihil blanditiis nisi odio necessitatibus numquam animi illo atque, quas exercitationem consequuntur. Accusantium, sed.</p>
        </>
    )
}



function Footer(){
    return (
        <>
        <h1 style={{textAlign:"center"}}>Footer</h1>
        <p className="Text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, quasi.</p>
        </>
    )
}


function Button(){
    return (
        <>
        <button className="btn btn-outline-primary ">OK</button>
        </>
    )
}


function MainText(){
    return(
        <div className="text" style={{textAlign:"center"}}>
<p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi sit repellendus, vero eius consequatur aut explicabo! Itaque ad voluptates dolorum natus animi, in aspernatur mollitia provident fuga obcaecati ea?</p>
        </div>
    )
}
export default App;