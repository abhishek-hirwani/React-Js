// ReactDOM.render(<h1>Hello, world!</h1>,document.getElementById("admin"))
// ReactDOM.render(<P>Hi my, name is abhi</P>, document.getElementById("admin"))
// // ReactDOM.render(<div><ul><li>intro to react</li><li>react code</li></ul></div>, document.getElementById("admin"))
// function Mainfunction(){
//  return (<h1>I'm learning react</h1>)
// }

// ReactDOM.render(<div>
//  <Mainfunction/>
// </div>, document.getElementById("admin"))

const h1=document.createElement("h1")
h1.textContent="This is an iperative way to program"
h1.className = "header"
document.getElementById("admin").append(h1)



const navbar=(
 <nav>
  <h1>illusions cafe</h1>
  <ul><li>Home</li>
  <li>About</li>
  <li>Contact</li></ul>
 </nav>
)
ReactDOM.render(navbar,document.getElementById("admin"))
