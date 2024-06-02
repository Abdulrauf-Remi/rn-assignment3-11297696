import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Image, TextInput, SafeAreaView } from 'react-native';

export default function App() {
  const categories = [
    {
      key: "Exercise",
      image: require("./assets/young_woman_working_online.png"),
    },
    {
      key: "Study",
      image: require("./assets/young_woman_working_at_desk.png"),
    },
    { key: "Pray", image: require("./assets/young_woman_working_at_desk.png") },
    {
      key: "Make Du'a",
      image: require("./assets/young_woman_working_at_desk.png"),
    },
    {
      key: "Give Zakat",
      image: require("./assets/young_woman_working_at_desk.png"),
    },
    {
      key: "Visit mosque",
      image: require("./assets/young_woman_working_at_desk.png"),
    },
    {
      key: "Qu'ran recitation",
      image: require("./assets/young_woman_working_at_desk.png"),
    },
    {
      key: "Sleep",
      image: require("./assets/young_woman_working_at_desk.png"),
    },
  ];

  const tasks = [
    { key: "Mobile App Development" },
    { key: "Web Development" },
    { key: "Push ups" },
    { key: "Karting" },
    { key: "Sceneries" },
    { key: "Conference" },
    { key: "Shoplifting" },
    { key: "Vacation" },
    { key: "Hungout" },
    { key: "Family-time" },
    { key: "Self-reflection" },
    { key: "Heavy studying" },
    { key: "Assignments" },
    { key: "Research" },
    { key: "Vlogs" },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.greeting}>Hello, Devs</Text>
            <Text style={styles.taskCount}>14 Tasks today</Text>
            <View style={styles.profileIcon}>
              <Image style={styles.profileImage} source={require("./assets/profile.png")} />
            </View>
          </View>
          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <Image source={require("./assets/search.png")} style={styles.searchIcon} />
              <TextInput placeholder="Search" style={styles.searchInput} />
            </View>
            <View style={styles.filterIconContainer}>
              <Image style={styles.filterIcon} source={require("./assets/filter.png")} />
            </View>
          </View>
          <Text style={styles.sectionTitle}>Categories</Text>
          <FlatList
            data={categories}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.category}>
                <Text style={styles.categoryName}>{item.key}</Text>
                <Text style={styles.categoryTasks}>12 Tasks</Text>
                <View style={styles.categoryImageContainer}>
                  <Image source={item.image} style={styles.categoryImage} />
                </View>
              </View>
            )}
          />
          <Text style={styles.sectionTitle}>Ongoing Task</Text>
          <FlatList
            data={tasks}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.task}>
                <Text style={styles.taskName}>{item.key}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F7F0E8",
  },
  container: {
    flex: 1,
    backgroundColor: "#F7F0E8",
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  taskCount: {
    fontSize: 14,
    color: '#888',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '80%',
    height: '80%',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 8,
    flex: 1,
    marginRight: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 30,
  },
  filterIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#DC4D01',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIcon: {
    width: 20,
    height: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  category: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginRight: 10,
    alignItems: 'center',
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  categoryTasks: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10,
  },
  categoryImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  categoryImage: {
    width: '80%',
    height: '80%',
  },
  task: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
  },
  taskName: {
    fontSize: 16,
  },
});