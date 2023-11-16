import React, { useState, useEffect } from "react";
import { Pressable, TextInput, Image } from "react-native";
import { StyleSheet, Text, View } from 'react-native';

// Component Screen2
function Screen2({ navigation }) {
  // State để lưu trữ danh sách công việc
  const [tasks, setTasks] = useState([]);

  // Sử dụng useEffect để fetch dữ liệu từ API khi component được tạo
  // Thay đổi phần xử lý dữ liệu ở useEffect
    useEffect(() => {
        fetch("https://65445c195a0b4b04436c49cd.mockapi.io/Tuan8/notes")
        .then(response => response.json())
        .then(data => {
            if (data && Array.isArray(data.data)) {
            setTasks(data.data);
            } else {
            console.error("Dữ liệu không phải là một mảng:", data);
            }
        })
        .catch(error => console.error("Lỗi khi fetch dữ liệu công việc:", error));
    }, []);
  

  // Render danh sách công việc
  const renderTasks = () => {
    return (
      <View style={styles.v3}>
        {tasks.map(task => (
          <View key={task.id} style={styles.v4}>
            <Image source={require("../Image/mdi_marker-tick.png")} style={styles.img3} />
            <Text style={styles.t4}>{task.title}</Text>
            <Image source={require("../Image/iconamoon_edit-bold.png")} style={styles.img4} />
          </View>
        ))}
      </View>
    );
  };

  // Giao diện của component Screen2
  return (
    <View style={styles.container}>
      {/* Phần header */}
      <View style={styles.v1}>
        <Image source={require("../Image/Avatar 31.png")} style={styles.img1}/>
        <View style={styles.v11}>
          <Text style={styles.t1}> Hi Twinkle </Text>
          <Text style={styles.t2}> Have a great day ahead </Text>
        </View>
      </View>

      {/* Phần tìm kiếm */}
      <View style={styles.v2}>
        <Image source={require("../Image/mingcute_search-fill.png")} style={styles.img2}></Image>
        <TextInput style={styles.t3} placeholder="Search"></TextInput>
      </View>

      {/* Danh sách công việc */}
      {renderTasks()}

      {/* Nút thêm công việc */}
      <Pressable style={styles.v5} onPress={() => { navigation.navigate("Screen4") }}>
        <Text style={styles.t5}> + </Text>
      </Pressable>
    </View>
  );
}

// Styles để định dạng giao diện
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  v1: {
    flexDirection: 'row',
    marginLeft: 150,
  },
  v11: {
    flexDirection: 'column'
  },
  img1: {
    height: 45,
    width: 45,
    resizeMode: 'contain',
  },
  t1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  t2: {
    fontSize: 15,
  },
  v2: {
    flexDirection: 'row',
    height: 45,
    width: 320,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 20,
    padding: 5,
  },
  img2: {
    height: 30,
    width: 30,
  },
  t3: {
    fontSize: 20,
    paddingLeft: 10,
  },
  v3: {
    flexDirection: 'column',
    marginTop: 25,
  },
  v4: {
    flexDirection: 'row',
    height: 45,
    width: 320,
    borderRadius: 25,
    borderWidth: 1,
    marginTop: 20,
    padding: 5,
    alignItems: 'center',
    justifyContent: "space-between",
  },
  img3: {
    height: 20,
    width: 20,
    marginLeft: 10,
  },
  img4: {
    height: 20,
    width: 20,
  },
  t4: {
    fontSize: 16,
  },
  v5: {
    marginTop: 15,
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  t5: {
    color: 'white',
    fontSize: 50,
    marginBottom: 10,
  },
});

// Xuất component để sử dụng
export default Screen2;
