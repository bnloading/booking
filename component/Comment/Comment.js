import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

const reviews = [
  {
    id: "1",
    name: "Yсен E",
    date: "28 Қар 2023 ж. · 19:42",
    rating: 5,
    comment: "Өте жылы адамдар, жақсы әдіс-тәсілдерімен.",
  },
  {
    id: "2",
    name: "Мирлатова А",
    date: "27 Қар 2023 ж. · 12:42",
    rating: 5,
    comment:
      "Керемет қамқор қызметкерлер. Менің 2 білегім сынған және олар жоғары деңгейді емдеп берді",
  },
  {
    id: "3",
    name: "Бахтиярова Б",
    date: "25 Қар 2023 ж. · 19:22",
    rating: 5,
    comment: "Әдеттегідей керемет тәжірибе",
  },
];

const StarRating = ({ rating, size = 12 }) => (
  <View style={styles.starContainer}>
    {[...Array(5)].map((_, i) => (
      <View key={i} style={{ width: size, height: size, marginRight: 2 }}>
        {i < rating ? (
          <Image
            source={require("../../assets/star.png")}
            style={{ width: size, height: size }}
            resizeMode="contain"
          />
        ) : (
          <Text style={[styles.star, { fontSize: size }]}>☆</Text>
        )}
      </View>
    ))}
  </View>
);

const ReviewItem = ({ item }) => (
  <View style={styles.reviewItem}>
    <View style={styles.reviewHeader}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{item.name.slice(0,2)}</Text>
      </View>
      <View style={styles.nameDate}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
    <StarRating rating={item.rating} size={12} />
    <Text style={styles.comment}>{item.comment}</Text>
  </View>
);

const ReviewList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Пікірлер</Text>
      <View style={styles.overallRating}>
        <StarRating rating={5} size={20} />
        <Text style={styles.ratingText}>4.9 (500+)</Text>
      </View>
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem item={item} />}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Барлығын қарау</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    flexDirection: "column",
    marginTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
  },
  overallRating: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  ratingText: {
    marginLeft: 0,
    fontSize: 16,
    color: "#666",
  },
  reviewItem: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 16,
  },
  reviewHeader: {
    flexDirection: "row",
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatarText: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform:'uppercase'
  },
  nameDate: {
    justifyContent: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  date: {
    color: "#888",
    fontSize: 14,
  },
  starContainer: {
    flexDirection: "row",
    marginBottom: 4,
  },
  star: {
    color: "#FFD700",
  },
  comment: {
    fontSize: 14,
  },
  button: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ReviewList;