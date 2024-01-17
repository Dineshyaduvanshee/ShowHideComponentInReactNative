import { useState } from "react";
import { Button, Text, View } from "react-native";

const App =()=>{
  const [show,setShow] = useState(true);
  return(
    <View>
      <Text style={{backgroundColor:'orange',textAlign:'center',fontSize:24}}>!!Show And Hide Component!!</Text>
      <Button title="Hide Component"  onPress={()=>setShow(false)}/>
      <Button title="Show Component" onPress={()=>setShow(true)}/>
      <Button title="Toggle Component" onPress={()=>setShow(!show)}/>
      {
       // show==true ? <User/> : null or
       show ? <User/> : null
      }
      
    </View>
  )
}
const User =()=>{
  return(
    <View>
      <Text style={{backgroundColor:'pink',textAlign:'center',fontSize:24}}>!!This message from User Component!!</Text>
    </View>
  )
}
export default App;
