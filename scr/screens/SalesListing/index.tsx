import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';
import { Container, SaleCard, SaleInfo, SaleText, Button, ButtonText,Rodape } from './styles';
import { Header } from '../../components/Header';

interface Sale {
  id: string;
  cpfVendedor: string;
  nomeProduto: string;
  valorVenda: string;
  anoMesVenda: string;
}

type SalesListingScreenProps = {
  route: any;
  navigation: any;
}

export function SalesListing({navigation }: SalesListingScreenProps): JSX.Element {
  const [sales, setSales] = useState<Sale[]>([]);

  const buscarVendas = async (): Promise<void> => {
    try {
      const vendas = await AsyncStorage.getItem('vendas');
      if (vendas) {
        setSales(JSON.parse(vendas));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    buscarVendas();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      buscarVendas();
    });

    return unsubscribe;
  }, [navigation]);

  const handleClearSalesList = async (): Promise<void> => {
    try {
      await AsyncStorage.removeItem('vendas');
      setSales([]);
      Alert.alert('Lista de vendas apagada', 'A lista de vendas foi apagada com sucesso!');
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao apagar a lista de vendas. Tente novamente.');
    }
  };

  const renderItem = ({ item }: { item: Sale }): JSX.Element => (
    <SaleCard>
      <SaleInfo>
        <SaleText>CPF do vendedor: {item.cpfVendedor}</SaleText>
        <SaleText>Nome do produto: {item.nomeProduto}</SaleText>
        <SaleText>Valor da venda: R$ {item.valorVenda}</SaleText>
        <SaleText>
          Ano/mês da venda: {format(new Date(item.anoMesVenda), 'MM/yyyy')}
        </SaleText>
      </SaleInfo>
    </SaleCard>
  );

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Container>
        
        {sales.length > 0 ? (
          <FlatList
            data={sales}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          
        ) : (
          <Text>Não há vendas registradas</Text>
        )}
        <Rodape>
        <Button onPress={handleClearSalesList}>
          <ButtonText>Apagar lista de vendas</ButtonText>
        </Button>
        </Rodape>
      </Container>
    </View>
  );
}
