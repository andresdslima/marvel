import { useState } from "react";
import { Button, Image } from "react-native";
import Input from "../../Components/Input";
import ScreenContainer from "../../Components/ScreenContainer";
import { styles } from "./styles";

export default function LoginScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log(username, password);
        setUsername("");
        setPassword("");
    };

    return (
        <ScreenContainer backgroundColor="blue">
            <Image
                source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg",
                }}
                style={styles.logo}
            />
            <Input
                value={username}
                onChangeText={setUsername}
                placeholder="username"
            />
            <Input
                value={password}
                onChangeText={setPassword}
                placeholder="password"
            />
            <Button color="#fc0" title="Login" onPress={handleLogin} />
        </ScreenContainer>
    );
}
