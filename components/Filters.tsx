import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { categories } from "@/constants/data";

const Filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setselectedCategory] = useState(
    params.filter || "All"
  );

  const handleCategoryPress = (category: string) => {
    if (selectedCategory == category) {
      setselectedCategory("All");
      router.setParams({ filter: "All" });
      return;
    }

    setselectedCategory(category);
    router.setParams({ filter: category });
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-3 mb-2"
    >
      {categories.map((item, index) => (
        <TouchableOpacity
          className={`flex flex-col items-start mr-4 px-4 py-2 rounded-full ${
            selectedCategory == item.category
              ? "bg-primary-300"
              : "bg-primary-100 border border-primary-200"
          }`}
          key={index}
          onPress={() => handleCategoryPress(item.title)}
        >
          <Text
            className={`text-sm ${
              selectedCategory == item.category
                ? "text-white font-rubik-bold mt-0.5"
                : "text-black-300 font-rubik"
            }`}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Filters;