import { SafeAreaView, StyleSheet, View } from "react-native";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { useCallback, useEffect, useState } from "react";

const colors = ['white', 'gray', 'yellow', 'red', 'blue', 'orange'];

export type UserType = {
    name: string,
    avatar: string,
};

export default function Main() {

    const [user, setUser] = useState<UserType>({
        name: 'Chưa có tên',
        avatar: 'https://i.pinimg.com/originals/20/05/e2/2005e27a39fa5f6d97b2e0a95233b2be.jpg',
    });
    const [lastTimeUpdate, setLastTimeUpdate] = useState(
        'Bạn chưa nhập thông tin',
    );
    const [footerColor, setFooterColor] = useState(colors[0]);

    // Cập nhật thông tin cho tài khoản
    const handleUpdateInfor = useCallback((_user: UserType) => {
        setUser(_user);
    }, []);

    // Hàm random màu cho background của Footer
    const handleRandomColor = useCallback(() => {
        const numberRan = Math.floor(Math.random() * colors.length);
        setFooterColor(colors[numberRan]);
    }, []);

    // Mỗi lần tin user thay đổi, sẽ cập nhật lại thời gian sửa đổi
    useEffect(() => {
        const currentDate = new Date();
        const dateTime =
            currentDate.getDate() +
            '/' +
            (currentDate.getMonth() + 1) +
            '/' +
            currentDate.getFullYear() +
            ' ' +
            currentDate.getHours() +
            ':' +
            currentDate.getSeconds();
        setLastTimeUpdate(dateTime);
    }, [user]);

return(
    <SafeAreaView>
        <View style={style.container}>
    <Header user={user} />
    <Body 
    onUpdateInfor={handleUpdateInfor}
    onClickChangBgFooter={handleRandomColor}
     />
    <Footer 
    timeUpdate={lastTimeUpdate}
    backgroundColor={footerColor}/>
</View>
    </SafeAreaView>
);
}
const style = StyleSheet.create({
    container:{
        padding: 16,
    }
})