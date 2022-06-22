import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
export default function AddSubButton() {
  const [count, setcount] = useState(10)
  const incerement=()=>{
    setcount(pre=>pre+1)
  }
  const decrement=()=>{
    count>0&&setcount(pre=>pre-1)
  }
  return (
    <View style={styles.mainView}>
      <TouchableOpacity style={[styles.buttonView,{backgroundColor:"#E2F8E3"}]} activeOpacity={0.5} onPress={incerement} >
      <AntDesign name={'plus'} size={15} color={"#155D18"} />
      </TouchableOpacity>
      <Text style={{fontSize:15,color:"#5B5B5B",fontWeight:"bold"}}>{count}</Text>
      <TouchableOpacity style={[styles.buttonView,{backgroundColor:"#FDE7E7"}]} activeOpacity={0.5} onPress={decrement} >
      <AntDesign name={'minus'} size={15} color={"#920E0B"} />
      </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
  mainView:{
    height:100,
    width:43,
    backgroundColor:"#fff",
    borderRadius:9,
    elevation:3,
    justifyContent:"space-between",
    alignItems:"center",
    paddingVertical:3.5
  },
  buttonView:{
    height:23,
    paddingHorizontal:10,
    backgroundColor:"green",
    borderRadius:7,
    alignItems:"center",
    justifyContent:"center"
  }
})