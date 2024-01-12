function Map1(){
    var arr=[1,2,3,4,5,6,7,8,9]
    var newarr=arr.map((item,i)=>
    <h1 key={i}>{item}</h1>
    );
    return(
        <div>
            {newarr}
        </div>
    )
}export default Map1