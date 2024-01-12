function useState1(){
  var x=10;
  console .log(x)
function change(){
  alert("call change function")
  x=20;
}

  return(
    <div>
      <h1>value of :{x}</h1>
      <button onClick={change}>change</button>
    </div>
  )
}
export default useState1