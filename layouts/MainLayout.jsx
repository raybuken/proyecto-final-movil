import TopBar from "../components/TopBar";
import {PaperProvider} from 'react-native-paper'

export default function MainLayout({children, backButton, title}){
    return (
        <PaperProvider>
            <TopBar backButton={backButton} title={title}/>
            {children}
        </PaperProvider>
    )
}