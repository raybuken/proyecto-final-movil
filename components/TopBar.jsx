import {Appbar} from 'react-native-paper'
import {useNavigation} from 'expo-router'

function TopBar({backButton, title}) {
  const navigation = useNavigation()
  return (
    <Appbar>
        {backButton && 
          <Appbar.BackAction onPress={() => navigation.goBack()} />
        }
        <Appbar.Content title={title || "Home"}/>
    </Appbar>
  )
}

export default TopBar