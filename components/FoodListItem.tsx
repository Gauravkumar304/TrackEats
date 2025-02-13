import { View,Text } from "react-native";
import {AntDesign} from "@expo/vector-icons";



// Define the type for item prop
interface Item {
    label: string;
    cal: number;
    brand: string;
  }

const FoodListItem = ({ item }: { item: Item }) => {
    return (
      <View
          style={{ 
            backgroundColor: "gainsboro",
            padding: 10,
            borderRadius: 5, 
            flexDirection:'row' ,
            justifyContent:'space-between',
            alignItems:'center' 
          }}
        >
  
          <View style={{flex:1, gap:5}}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.label} </Text>
          <Text style={{color:'dimgray'}}>{item.cal} cal, {item.brand}</Text>
          </View>
          <AntDesign name="pluscircleo" size={24} color="royalblue" />
        </View>
    );
  };


  export default FoodListItem;