import React, { useMemo, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Product_useMemo() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);

    const handleSubmit = () => {
        setProducts([...products, {
            name,
            price: parseInt(price)
        }])
    }

    // const total=products?.reduce((result, prod)=>{
    //     console.log('Tinh tong...');
    //     return result+prod.price;
    // }, 0);

    const total = useMemo(()=>{
        return products?.reduce((result, prod)=>{
            console.log('Tinh tong...');
            return result+prod.price;
        },0)
    }, [products])

    // console.log(products);
    return (
        <View style={styles.container}>
            <TextInput value={name} onChangeText={setName} style={styles.input} placeholder="input name" />
            <TextInput value={price} onChangeText={setPrice} style={styles.input} placeholder="input price" />
            <TouchableOpacity onPress={handleSubmit} style={styles.clickContainer}>
                <Text style={styles.clickText}>Add</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Total: {total}</Text>
            <View>
                {products?.map((prod, index)=>(
                    <Text style={styles.title} key={index}>{prod.name} - {prod.price}</Text>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        padding: 16,
        justifyContent: 'center'
    },
    input: {
        height: 40,
        width: '100%',
        padding: 5,
        borderRadius: 4,
        borderWidth: 1,
        marginVertical: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    clickContainer: {
        marginVertical: 20,
        padding: 10,
        backgroundColor: 'tomato',
        borderRadius: 5,
    },
    clickText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
})
