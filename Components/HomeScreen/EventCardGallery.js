import React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import EventCard from "./EventCard";

const EventCardGallery = () => {
  data_sample = [
    {
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1666433656515-77386ea16d5a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "PewDiePie & Marzia",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1710598586974-a2acd673c04e?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "MrBeast & Mark Rober",
    },
    {
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1677249227771-43a86c13eb76?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Jacksepticeye & Emma Blackery",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1710964041322-4b6538294762?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "DanTDM & LDShadowLady",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1637560701868-b9aabf2c8fce?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Jenna Marbles & Julien Solomita",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1709675153296-1f7e5b74137b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "LazarBeam & Lannan Eacott",
    },
    {
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1711508489279-8352f416ba45?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "GamingWithJen & PopularMMOs",
    },
  ];

  return (
    <ScrollView style={{ marginTop: 10 }}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data_sample}
        renderItem={({ item, index }) => (
          <EventCard name={item.name} imgUrl={item.imgUrl} />
        )}
      />
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data_sample}
        renderItem={({ item, index }) => (
          <EventCard name={item.name} imgUrl={item.imgUrl} />
        )}
      />
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data_sample}
        renderItem={({ item, index }) => (
          <EventCard name={item.name} imgUrl={item.imgUrl} />
        )}
      />
    </ScrollView>
  );
};

export default EventCardGallery;
