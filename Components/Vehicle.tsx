import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Vehicle = ({ imageUrl, description, price }) => { 
    return (
        <View>
            <Image 
                source={{ uri: imageUrl }} 
                style={styles.image}  
            />
            <Text style={{ marginTop: 10 }}>
                {description}
            </Text>
            <Text style={{ marginTop: 5, fontWeight: 'bold' }}>
                $ {price}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({ 
    image: {
        width: 200,
        height: 200
    }
});

export default Vehicle;

