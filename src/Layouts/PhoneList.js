import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import ItemSeparator from "../components/ItemSeparator";
import DeviceCard from "../components/DeviceCard";
import { PHONES_API } from "../constants/Urls";

const PhoneList = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(PHONES_API);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setPhones(
          data.data.data.map(phone => ({
            id: phone.id,
            name: phone.name,
            imgUrl: phone.imgUrl,
            amount: phone.data.length > 0 ? phone.data[0].amount : null,
            status: phone.data.length > 0 ? phone.status : null,
            properties: phone.data.length > 0 ? phone.data[0].properties : {},
            quantity: phone.data.length > 0 ? phone.data[0].quantity : null,
          }))
        );
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderRow = ({ item }) => {
    return (
      <View style={{ flexDirection: "row", margin: "0" }}>
        {item.map(phone => (
          <View key={phone.id} style={{ marginRight: 20 }}>
            <DeviceCard phone={phone} />
          </View>
        ))}
      </View>
    );
  };

  const chunkArray = (arr, size) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
  };

  return (
    <FlatList
      data={chunkArray(phones, 7)}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={() => <ItemSeparator width={20} />}
      ListHeaderComponent={() => <ItemSeparator width={20} />}
      ListFooterComponent={() => <ItemSeparator width={20} />}
      renderItem={({ item }) => renderRow({ item })}
    />
  );
};

export default PhoneList;
