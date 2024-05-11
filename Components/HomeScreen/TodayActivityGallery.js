import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import TodayActivityCard from "./TodayActivityCard";
import { useNavigation } from "@react-navigation/native";

const TodayActivityGallery = () => {
  const navigation = useNavigation();
  const data_sample = [
    {
      heading: "Activity 01",
      subHeading:
        "Plants, flowers, herbs, or vegetables and learn about gardening",
      rate: 10,
      color: "#FF6B6B",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1666433656515-77386ea16d5a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: [
        "gardening",
        "plants",
        "flowers",
        "herbs",
        "vegetables",
        "nature",
        "outdoor",
        "learning",
        "horticulture",
        "greenery",
        "botany",
        "environment",
        "sustainability",
        "farming",
      ],
    },
    {
      heading: "Activity 02",
      subHeading:
        "Explore the local park and learn about different trees and plants",
      rate: 8,
      color: "#FF9F1C",
      imgUrl:
        "https://images.unsplash.com/photo-1710598586974-a2acd673c04e?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: [
        "nature",
        "park",
        "trees",
        "plants",
        "exploration",
        "outdoor",
        "adventure",
        "learning",
        "environment",
        "ecology",
        "botany",
        "forest",
        "greenery",
        "education",
        "scenery",
        "landscape",
        "outings",
        "picnic",
      ],
    },
    {
      heading: "Activity 03",
      subHeading:
        "Visit a botanical garden and learn about various plant species",
      rate: 9,
      color: "#6A4C93",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1677249227771-43a86c13eb76?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: [
        "botanical garden",
        "plants",
        "species",
        "learning",
        "tourism",
        "nature",
        "greenery",
        "outdoor",
        "exploration",
        "beauty",
        "environment",

        "culture",
      ],
    },
    {
      heading: "Activity 04",
      subHeading:
        "Attend a gardening workshop and learn about sustainable gardening practices",
      rate: 7,
      color: "#FF6B6B",
      imgUrl:
        "https://images.unsplash.com/photo-1710964041322-4b6538294762?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: [
        "gardening",
        "workshop",
        "sustainable",
        "practices",
        "learning",
        "horticulture",
        "education",
        "skills",
        "community",
        "environment",
        "greenery",
        "planting",

        "conservation",
        "ecology",
        "botany",
      ],
    },
    {
      heading: "Activity 05",
      subHeading:
        "Grow your own herbs or vegetables at home and track their progress",
      rate: 6,
      color: "#FF9F1C",
      imgUrl:
        "https://images.unsplash.com/photo-1637560701868-b9aabf2c8fce?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: [
        "gardening",
        "home",
        "herbs",
        "vegetables",
        // "growing",
        // "tracking",
        // "progress",
        // "learning",
        // "horticulture",
        // "skills",
        // "kitchen",

        // "health",
        // "self-sustainability",
        // "greenery",
        // "nature",
        // "environment",
        // "wellness",
        // "lifestyle",
      ],
    },
  ];

  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={data_sample}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ActivityInformation", {
              activity: item,
            })
          }
        >
          <TodayActivityCard
            heading={item.heading}
            subHeading={item.subHeading}
            rate={item.rate}
            colour={item.color}
            imgUrl={item.imgUrl}
            tags={item.tags}
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default TodayActivityGallery;
