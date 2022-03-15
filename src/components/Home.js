import React from "react";

const Home = () => {

    var aku = window.location.hash;

    let style = {
        color:"red"
    }

    // let a = document.querySelector('#bahasa').innerHTML = "halo"
    // alert(a)

    return(
        <div>
            <a href="#eng">English</a>
            <p id="bahasa" style={style}>{aku}</p>
        </div>
    )
}
export default Home