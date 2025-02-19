import React, { useState } from "react"
import { StyleSheet, View, TouchableOpacity, Pressable, Text } from "react-native"
import Octicons from 'react-native-vector-icons/Octicons';

interface Props {
  page: number;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
}
const Footer = ({ page, handlePreviousPage, handleNextPage }: Props) => {
  // actual footer should fetch total number of elements in order to determine max num of pages
  // each right/left click should refetch, sending back current page so API knows what chunk to return
  
  return (
    <View style={styles.container}>
      {<Pressable
        onPress={handlePreviousPage}
        style={styles.pressable}
        disabled={page == 1}
      >
        <Octicons name="chevron-left" size={20} color="black" />
      </Pressable>}
      <Text style={styles.text}>{page}</Text>
      <Pressable
        onPress={handleNextPage}
        style={styles.pressable}
        // disabled={} should disable based on if there's more page
      >
        <Octicons name="chevron-right" size={20} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50 // make this a % of screen
  },
  text: {
    fontSize: 36,
  },
  pressable: {
    borderWidth: 2,
    borderColor: 'gray',
    padding: 12,
  }
});

export default Footer