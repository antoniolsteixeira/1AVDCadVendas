import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { cpf } from 'cpf-cnpj-validator';
import { Container, Input, Button, ButtonText, InputLabel } from './styles';
import { Header } from '../../components/Header';
import UUID from 'react-native-uuid';


type RegistrationScreenProps = {
    navigation: any;
  };

export function RegistrationScreens({ navigation }: RegistrationScreenProps)  {

 
    const [cpfVendedor, setCpfVendedor] = useState('');
    const [nomeProduto, setNomeProduto] = useState('');
    const [valorVenda, setValorVenda] = useState('');
    const [anoMesVenda, setAnoMesVenda] = useState('');

 
    const handleCadastrarVenda = async () => {if (!cpf.isValid(cpfVendedor)) {
      Alert.alert('CPF inválido', 'Por favor, informe um CPF válido');
      return;
    }

    if (!nomeProduto) {
      Alert.alert('Nome do produto', 'Por favor, informe o nome do produto');
      return;
    }

    if (!valorVenda) {
      Alert.alert('Valor da venda', 'Por favor, informe o valor da venda');
      return;
    }

    if (!anoMesVenda.match(/^\d{4}-\d{2}$/)) {
      Alert.alert(
        'Ano/mês da venda',
        'Por favor, informe o ano/mês da venda no formato YYYY-MM'
      );
      return;
    }

    const venda = {
      id: UUID.v4(),
      cpfVendedor,
      nomeProduto,
      valorVenda,
      anoMesVenda,
    };

    try {
      let vendas = await AsyncStorage.getItem('vendas');

      if (vendas) {
        let vendasArray = JSON.parse(vendas);
        vendasArray.push(venda);
        await AsyncStorage.setItem('vendas', JSON.stringify(vendasArray));
      } else {
        await AsyncStorage.setItem('vendas', JSON.stringify([venda]));
      }
      
      Alert.alert('Venda cadastrada', 'A venda foi cadastrada com sucesso!');
     
      setCpfVendedor('');
      setNomeProduto('');
      setValorVenda('');
      setAnoMesVenda('');

      navigation.navigate('Sales', { cpfVendedor, nomeProduto, valorVenda, anoMesVenda }); // Passando informações para a próxima tela
      
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao cadastrar a venda. Tente novamente.');
    }
  };

  
  return (
    <View style={{ flex: 1 }}>
        <Header   />
        <Container>
        <InputLabel>CPF do vendedor:</InputLabel>
                <Input value={cpfVendedor} onChangeText={setCpfVendedor} placeholder="Informe o CPF do vendedor" keyboardType="numeric" />
                <InputLabel>Nome do produto:</InputLabel>
                <Input value={nomeProduto} onChangeText={setNomeProduto} placeholder="Informe o nome do produto" />
                <InputLabel>Valor da venda:</InputLabel>
                <Input value={valorVenda} onChangeText={setValorVenda} placeholder="Informe o valor da venda" keyboardType="numeric" />
                <InputLabel>Ano/mês da venda (YYYY-MM):</InputLabel>
                <Input value={anoMesVenda} onChangeText={setAnoMesVenda} placeholder="Informe o ano/mês da venda (YYYY-MM)" />
                <Button onPress={handleCadastrarVenda}>
                    <ButtonText>Registrar Venda</ButtonText>
                </Button>
        </Container>
    </View>
  );
};


