function Map2()
{
  var map=[{id:1,name:"raja"},{id:2,name:"ram"},{id:3,name:"moli"}]

  return(
    <div>
      {
        map.map((item,i)=>
          <h1 key={i}> {item.id} {item.name}</h1>
        )
      }
    </div>
  )
}export default Map2
