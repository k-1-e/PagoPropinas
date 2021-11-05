import { StyleSheet, Text, View, TextInput, Button,  } from 'react-native';
import React, { useEffect, useState, } from 'react';

const Componentes = () => {



    const [Cuenta, setCuenta] = useState ('')
    const [propina, setPropina] = useState ( 0 )

  

    useEffect(() => {
        calcularPropina(Cuenta)
      }, [Cuenta])

      
      const calcularPropina = (t : string) => {
        const _propina =  parseInt(Cuenta) / 10
       setPropina(_propina)
      }
      
      
      

    return (
        <View style={styles.container}>
            <Text>Cuenta ha pagar  </Text>
            <TextInput
            style={{ borderColor: "orange", borderWidth: 1 }}
            onChangeText={setCuenta}
            />

           
           

            <Text>Numero de personas </Text>
            <TextInput
            style={{ borderColor: "blue", borderWidth: 1 }}
            onChangeText={setCuenta}
            />

            <Text> su cuenta es de  {Cuenta}  con propina  { propina } </Text>

        </View>
    )
}

export default Componentes


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        margin: 10
    }
    
});
