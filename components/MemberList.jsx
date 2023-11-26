import { StyleSheet, Pressable } from "react-native"
import { Avatar, Text, List } from 'react-native-paper'
import {Link} from 'expo-router'
import { RESOURCES } from "../resources/app";

function MemberList({members}) {
  return (
    <>
        <Text>{RESOURCES.members}</Text>
        <List.Section style={{width: "100%", gap: 10}}>
            {members.map((member,i) => (
                <Link href={"/memberDetails/" + member.id} asChild key={i}>
                    <Pressable>
                        <List.Item style={styles.item} title={member.fullname}
                        left={props => <Avatar.Image size={48} {...props} source={member.image}/>}
                        right={props => <List.Icon {...props} icon='chevron-right'/>}
                        />
                    </Pressable>
                </Link>
            ))}
        </List.Section>
    </>
  )
}

const styles = StyleSheet.create({
    item:{
        fontWeight: "bold",
        backgroundColor: "#e4e8e8",
        borderRadius: 40,
        width: "100%"
    }
})

export default MemberList