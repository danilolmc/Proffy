import React, { useState } from 'react'
import { View, Text, Picker } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from "@expo/vector-icons";

export default function Study() {

    const [isfilterVisible, setisfilterVisible] = useState(false);

    return (


        <View style={styles.container}>
            <PageHeader
                title="Proffys disponíveis"
                headerRight={(
                    <BorderlessButton onPress={() => setisfilterVisible(!isfilterVisible)}>
                        <Feather name="filter" size={20} color="#04d361" />
                    </BorderlessButton>
                )}>


                {isfilterVisible && <View style={styles.searchForm}>
                    <Text style={styles.label}>Matéria</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Qual a Matéria?"
                        placeholderTextColor="#c1bccc"

                    />

                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da semana</Text>
                            <TextInput


                                style={styles.input}
                                placeholder="Qual o dia?"
                                placeholderTextColor="#c1bccc"
                            />
                        </View>

                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput


                                style={styles.input}
                                placeholder="Qual o horário?"
                                placeholderTextColor="#c1bccc"
                            />
                        </View>
                    </View>

                    <RectButton style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Buscar</Text>
                    </RectButton>
                </View>}

            </PageHeader>


            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{

                    paddingHorizontal: 16,
                    paddingBottom: 24
                }}
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>

        </View>
    )
}