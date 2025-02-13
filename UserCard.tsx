import React from "react"
import { View, Text } from "react-native"
import { User } from "./App"

interface Props {
  user: User
}

const UserCard = ({user}: Props) => {
  return (
    <View>
      <Text>
        {user.userName}
      </Text>
    </View>
  )
}

export default UserCard
