import TopBar from "../components/TopBar";
import {PaperProvider} from 'react-native-paper'

export default function MainLayout({children, backButton}){
    return (
        <PaperProvider>
            <TopBar backButton={backButton}/>
            {children}
        </PaperProvider>
    )
}