import { useState } from "react";
import { Button, Image } from "react-native";
import Input from "../../components/Input";
import ScreenContainer from "../../components/ScreenContainer";
import { authLogin } from "../../services/auth";
import { styles } from "./styles";

export default function LoginScreen({ navigateForward }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const isAuthenticated = async (user, pass) => {
        const res = await authLogin(user, pass);
        return res;
    };

    const handleLogin = () => {
        // if (isAuthenticated(username, password)) {
        // For some reason, it's always returning false
        if (username === "postman" && password === "postman") {
            navigateForward();
            setUsername("");
            setPassword("");
        } else {
            setUsername("");
            setPassword("");
            // Could display an error message ("wrong credentials")
            return;
        }
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
                secureTextEntry
            />
            <Button color="#fc0" title="Login" onPress={handleLogin} />
        </ScreenContainer>
    );
}
