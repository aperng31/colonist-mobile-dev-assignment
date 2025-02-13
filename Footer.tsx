import React, { useState } from "react"
import { StyleSheet, View, TouchableOpacity, Pressable, Text } from "react-native"
import Octicons from 'react-native-vector-icons/Octicons';

interface Props {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}
const Footer = ({ page, setPage }) => {
  // actual footer should fetch total number of elements in order to determine max num of pages
  // each right/left click should refetch?
  const handleNextPage = () => {
    setPage(page + 1)
  }
  
  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  }
  
  return (
    <View style={styles.footer}>
      {<Pressable
        onPress={handlePreviousPage}
        style={styles.pressable}
      >
        <Octicons name="chevron-left" size={20} color="black" />
      </Pressable>}
      <Text style={styles.footerText}>{page}</Text>
      <Pressable
        onPress={handleNextPage}
        style={styles.pressable}
      >
        <Octicons name="chevron-right" size={20} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50 // make this a % of screen
  },
  footerText: {
    fontSize: 36,
  },
  pressable: {
    borderWidth: 2,
    borderColor: 'red',
    padding: 12,
  }
});

export default Footer