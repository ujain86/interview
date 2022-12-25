function App() {

  const array = [1,2, [10,12], {name: "appscrip"}, ["javascript", "typescript"], "python", [123,212, [343,444,555,[999,888,7777],["code"]],{location: "Bengaluru"},[160062]],3,4]
  
  const arr1 = array.flat(3);
  console.log(arr1);
  const arr2 = [1,2,3,4,5];
  
  return (
    <div className="App">
      <ol>
        {arr1.map((item) => {
          if(typeof(item) == 'object'){
            return <li>{item.key}: {item.value}</li> 
          } 
          else if(typeof(item) == 'number'){
            return <li>Number: {item}</li> 
          } 
          else if(typeof(item) == 'string'){
            return <li>String: {item}</li> 
          }  
        
          
        })}
      </ol>
    </div>
  );
}

export default App;
