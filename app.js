import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import supabase from './supabaseClient';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let { data: items, error } = await supabase
      .from('Enfermedad')
      .select('*');

    if (error) {
      console.error(error);
    } else {
      setData(items);
    }
  };

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default App;
