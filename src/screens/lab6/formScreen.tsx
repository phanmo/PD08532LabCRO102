import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useSignupMutation } from "../../features/pokemon/pokemon";
import { UserPostType } from "../../features/pokemon/type";

export default function FormScreen() {
    const [name, setName] = useState('');
    const [age, setAge] = useState<number>(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');

    const [signup, resultSignup] = useSignupMutation();

    const handleSignUp = () => {
        signup({
            name: name,
            age: age.toString(),
            email: email,
            password: password,
            gender: gender,
        });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>Form Builder Basic Demo</Text>
            <View style={styles.inputContainer}>
                <View style={styles.inputView}>
                    <Text>Name</Text>
                    <TextInput
                        placeholder="Enter your name"
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                    />
                </View>
                <View style={styles.inputView}>
                    <Text>Age</Text>
                    <TextInput
                        placeholder="Enter your age"
                        style={styles.input}
                        value={age.toString()}
                        onChangeText={(text) => setAge(parseInt(text))}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.inputView}>
                    <Text>Email</Text>
                    <TextInput
                        placeholder="Enter your email"
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.inputView}>
                    <Text>Password</Text>
                    <TextInput
                        placeholder="Enter your password"
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>
                <View style={styles.inputView}>
                    <Text>Gender</Text>
                    <TextInput
                        placeholder="Enter your gender"
                        style={styles.input}
                        value={gender}
                        onChangeText={setGender}
                    />
                </View>
            </View>
            <Button title="Submit" onPress={handleSignUp} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        width: '100%',
    },
    inputView: {
        marginVertical: 10,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        margin: 5,
        borderRadius: 5,
        width: '100%',
    },
});
