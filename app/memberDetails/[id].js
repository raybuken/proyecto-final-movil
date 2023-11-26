import { useLocalSearchParams } from 'expo-router'
import { Card, Text } from 'react-native-paper';
import MainLayout from "../../layouts/MainLayout";
import { team } from '../../data/team';
import { StyleSheet } from 'react-native';

function MemberDetails() {
  const {id} = useLocalSearchParams()
  const member = team.members.find(member => member.id === id)

  if(!member){
    return;
  }

  return (
    <MainLayout backButton={true} title={member.fullname}>
      <Card style={{padding: 10}}>
        <Card.Cover source={member.image} />
        <Card.Content style={styles.content}>
          <Text variant="titleLarge" style={styles.title}>{member.fullname} ({member.enrollment})</Text>
          <Text>{member.description}</Text>
          <Text>
            <Text style={styles.bold}>Ciudad de nacimiento: </Text>
            {member.birthCity}
          </Text>
          <Text style={styles.bold}>Pasatiempos:</Text>
          {member.hobbies.map((hobby, i) => (
            <Text style={{textAlign: "justify"}} key={i}>-{hobby}</Text>
          ))}

        </Card.Content>
      </Card>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20
  },
  content: {
    gap: 10
  },
  bold:{
    fontWeight: "bold"
  }
})

export default MemberDetails;
