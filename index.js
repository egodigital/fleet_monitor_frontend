import { AppRegistry } from "react-native";
import App from "./app/App";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);

if (Platform.OS === 'web') {
    const rootTag = document.getElementById('root');
    AppRegistry.runApplication(appName, { rootTag });
}