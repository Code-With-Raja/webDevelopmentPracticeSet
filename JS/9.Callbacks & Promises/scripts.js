console.log("Raja is hacker")


function loadScript (Src, callback) {
    let script = document.createElement('scripts')
    script.Src = Src
    script.onload = () => callback(script)
    document.head.append(script)
}
loadScript ('https://cdn.harry.com',(script)=> {
    alert('script is loaded')
    alert(script.src)

});
