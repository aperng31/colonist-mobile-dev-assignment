import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { User } from "../App"

interface Props {
  user: User
}

const UserCard = ({ user }: Props) => {
  return (
    <View style={styles.container}>
      <Text>
        {user.id} - 
        {user.userName} - {user.country}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserCard
