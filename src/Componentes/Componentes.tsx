import React, { useState,useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

const Componentes = () => {
    const [total, setTotal] = useState<string>('400')
    const [personas, setPersonas] = useState('4')
    const [porcentaje, setPorcentaje] = useState('5')
    const [propina, setPropina] = useState('0')
    const [totalPersona, setTotalPersona] = useState('0')

    const calcularPropina = () => {
        let _propinaTotal = (parseFloat(total) * (parseFloat(porcentaje) /100))
        let _propinaPorPersona = _propinaTotal / parseFloat(personas)
        if (isNaN(_propinaPorPersona) || _propinaPorPersona === Infinity) {
            _propinaPorPersona = 0
        }

        setPropina(_propinaPorPersona.toFixed(2).toString())
        let _cuentaPorPersona = parseFloat(total)/ parseFloat(personas)
        let cuentaTotal = _cuentaPorPersona +_propinaPorPersona
        setTotalPersona(cuentaTotal.toFixed(2).toString())
    }
    useEffect(calcularPropina, [total,personas,porcentaje])
    const resetData = () =>{
        setTotal('0')
    }

    
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.headerText}>Cuenta</Text>
                <View>
                    <Text style={styles.textaddon}>C$</Text>
                    <TextInput
                        style={styles.inputs}
                        keyboardType='numeric'
                        defaultValue={total}
                        onChangeText={setTotal} />
                </View>

                <View style={styles.boxSelectTip}>
                    <Text style={styles.headerText}>
                        Seleccione el porcentaje de propina
                    </Text>
                    <View style={styles.containersButtons}>
                        <TouchableOpacity
                            onPress={() => setPorcentaje('5')}
                            style={
                                porcentaje == '5'
                                    ? styles.botonPorcentajeActivate
                                    : styles.botonPorcentaje
                            }
                        >
                            <Text
                                style={
                                    porcentaje == '5'
                                        ? styles.textbotonPorcentajeActivate
                                        : styles.textbotonPorcentaje
                                }
                            >
                                5%
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setPorcentaje('10')}
                            style={
                                porcentaje == '10'
                                    ? styles.botonPorcentajeActivate
                                    : styles.botonPorcentaje
                            }
                        >
                            <Text
                                style={
                                    porcentaje == '10'
                                        ? styles.textbotonPorcentajeActivate
                                        : styles.textbotonPorcentaje
                                }
                            >
                                10%
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setPorcentaje('15')}
                            style={
                                porcentaje == '15'
                                    ? styles.botonPorcentajeActivate
                                    : styles.botonPorcentaje
                            }
                        >
                            <Text
                                style={
                                    porcentaje == '15'
                                        ? styles.textbotonPorcentajeActivate
                                        : styles.textbotonPorcentaje
                                }
                            >
                                15%
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setPorcentaje('25')}
                            style={
                                porcentaje == '25'
                                    ? styles.botonPorcentajeActivate
                                    : styles.botonPorcentaje
                            }
                        >
                            <Text
                                style={
                                    porcentaje == '25'
                                        ? styles.textbotonPorcentajeActivate
                                        : styles.textbotonPorcentaje
                                }
                            >
                                25%
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setPorcentaje('50')}
                            style={
                                porcentaje == '50'
                                    ? styles.botonPorcentajeActivate
                                    : styles.botonPorcentaje
                            }
                        >
                            <Text
                                style={
                                    porcentaje == '50'
                                        ? styles.textbotonPorcentajeActivate
                                        : styles.textbotonPorcentaje
                                }
                            >
                                50%
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botonPorcentaje}>
                            <Text style={styles.textbotonPorcentaje}>Custom</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                
                <View style={styles.boxSelectTip}>
                    <Text style={styles.headerText}>
                        Numeros de personas
                    </Text>
                    <View>
                        <FontAwesome
                        style={styles.textaddon}
                        name="user"
                        size={32}
                        color="black"
                        />
                        <TextInput
                        keyboardType='numeric'
                        style={styles.inputs}
                        defaultValue={personas}
                        onChangeText={setPersonas}
                        />
                    </View>
                </View>
                
                <View style={styles.boxResumen}>
                    <View style={styles.filaResumen}>
                    <View>
                        <Text style={styles.textWhiteHeaderText}>Propina</Text>
                        <Text style={styles.textGrayResumen}>Persona</Text>
                    </View>
                    <View>
                        <Text style={styles.textMontoResumen}>${propina}</Text>
                    </View>

                    </View>

                    <View style={styles.filaResumen}>
                    <View>
                        <Text style={styles.textWhiteHeaderText}>Total</Text>
                        <Text style={styles.textGrayResumen}>Persona</Text>
                    </View>
                    <View>
                        <Text style={styles.textMontoResumen}>${totalPersona}</Text>
                    </View>
                    </View>
                    <TouchableOpacity
                    onPress={() => resetData()}
                    style={styles.botonReset}
                    >
                        <Text style={styles.textbotonReset}>Reset</Text>

                    </TouchableOpacity>
                </View>


            </ScrollView>
        </View>
    )
}

export default Componentes

const styles = StyleSheet.create({
    container: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: '#FFFFFF',
        flex: 1,
        width: '100%',
        paddingTop: 24,
        paddingLeft: 24,
        paddingRight: 24
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#687778',
        borderWidth: 0,
        marginBottom: 5,
        marginTop: 5
    }

})