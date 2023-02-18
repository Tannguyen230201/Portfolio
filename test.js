window.onload = function () {
    var a = document.querySelector('.menu');
    a.style.top = "0px";
    a.style.paddingTop="10px"
    a.style.transition = "1.5s";
}
window.onscroll = function () {
    // var about= document.querySelectorById('about')
    if (document.documentElement.scrollTop >= 500) {
        var a = document.querySelector('.menu');
        Object.assign(a.style,{
            transition:"all 0.3s ease",
            width:"100%",
            height:"40px",
            backgroundColor:'#a9b9b7',
            boxShadow:"0px 0px 10px 0px black",
            transition:"0s",
            opacity:"1",
            zIndex:"10",
        })
    }
    else if (document.documentElement.scrollTop <500) {
        var a = document.querySelector('.menu');
        Object.assign(a.style,{
            width:"100%",
            height:"40px",
            backgroundColor:"rgba(46, 138, 138, 0)",
            boxShadow:"0px 0px 0px 0px ",
            transition:"all 0.3s ease",
        })
    }
    
    if (document.documentElement.scrollTop >800) {
        var b = document.querySelector('.percent')
        Object.assign(b.style, {
            width: "80%",
            height: "100%",
            transition: "5s",
            backgroundColor: "#8f8ff2",
        })
        var c = document.querySelector('.percent_js_js')
        Object.assign(c.style, {
            width: "60%",
            height: "100%",
            transition: "5s",
            backgroundColor: "#fdc45a",
        })
        var d = document.querySelector('.percent_css_css')
        Object.assign(d.style, {
            width: "70%",
            height: "100%",
            transition: "5s",
            backgroundColor: "#f0b5df",
        })
        var e = document.querySelector('.percent_react_react')
        Object.assign(e.style, {
            width: "40%",
            height: "100%",
            transition: "5s",
            backgroundColor: "#a8a0a0",
        })
    }
    else{
        var b = document.querySelector('.percent')
        Object.assign(b.style, {
            width: "0%",
            height: "30px",
            transition: "0s",
            // backgroundColor: "#8f8ff2",
        })
        var c = document.querySelector('.percent_js_js')
        Object.assign(c.style, {
            width: "0%",
            height: "30px",
            transition: "0s",
        })
        var d = document.querySelector('.percent_css_css')
        Object.assign(d.style, {
            width: "0%",
            height: "30px",
            transition: "0s",
        })
        var e = document.querySelector('.percent_react_react')
        Object.assign(e.style, {
            width: "0%",
            height: "30px",
            transition: "0s",
        })
    }
}
const change = src => {
    document.getElementById('main').src = src
}