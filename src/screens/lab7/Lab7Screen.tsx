import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import auth from "@react-native-firebase/auth";
import { GoogleSignin, User } from "@react-native-google-signin/google-signin";
import React, { useEffect, useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const Lab7Screen = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>();
    const [userInput, setUserInput] = useState({ email: '', password: '' });


    const onSignUpWithPassword = () => {
        auth()
            .createUserWithEmailAndPassword(userInput.email, userInput.password)
            .then(() => {
                Alert.alert('Tài khoản đã được tạo và đăng nhập');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert('Email đã tồn tại');
                }
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert('Email của bạn không hợp lệ!');
                }
                console.error(error);

            });
    };

    const onSignInWithEmailAndPassword = () => {
        auth()
            .signInWithEmailAndPassword(userInput.email, userInput.password)
            .then(() => {
                Alert.alert('Đăng nhập thành công');
            })
            .catch(error => {
                if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                    Alert.alert('Sai tên đăng nhập hoặc mật khẩu');
                } else if (error.code === 'auth/invalid-email') {
                    Alert.alert('Email không hợp lệ');
                }
                console.error(error);
            });
    };

    const onSignOut = () => {
        auth()
            .signOut()
            .then(() => {
                Alert.alert('Đăng xuất thành công');
            });
    };

    GoogleSignin.configure({
        webClientId: "906981850332-s6duduapmcu1flc4vjhsa00g75boojnu.apps.googleusercontent.com"
    });

    const onSignUpWithGoogle = async () => {
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            const { idToken } = await GoogleSignin.signIn();
            console.log(idToken);
            Alert.alert("Đăng nhập thành công")
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            await auth().signInWithCredential(googleCredential);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(userState => {
            setUser(userState);
            if (initializing) {
                setInitializing(false);
            }
        });
        return subscriber;
    }, [initializing]);

    if (initializing) {
        return null;
    }

    if (!user) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Lab7</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={userInput.email}
                    onChangeText={text => setUserInput(prevState => ({ ...prevState, email: text }))}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={userInput.password}
                    secureTextEntry={true}
                    onChangeText={text => setUserInput(prevState => ({ ...prevState, password: text }))}
                />
                <Pressable style={styles.button} onPress={onSignInWithEmailAndPassword}>
                    <Text style={styles.text}>Log In</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={onSignUpWithPassword}>
                    <Text style={styles.text}>Sign Up</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={onSignUpWithGoogle}>
                    <Text style={styles.text}>Sign In with google</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Xin chào {user?.email}</Text>
            <Pressable onPress={onSignOut} style={styles.button}>
                <Text style={styles.text}>Đăng xuất</Text>
            </Pressable>
        </View>
    );
    
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        color:'tomato',
        marginBottom: 50,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#fff'
    },
    input: {
        width: '90%',
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 10,
        borderRadius: 15,
        padding: 10,
        
    },
    button: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'tomato',
        padding: 10,
        marginVertical: 10,
        borderRadius: 15,
    },
});
export default Lab7Screen;