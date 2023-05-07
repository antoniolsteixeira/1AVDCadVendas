import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const SaleCard = styled.View`
  background-color: #f2f2f2;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
`;

export const SaleInfo = styled.View`
  flex-direction: column;
`;

export const SaleText = styled.Text`
  font-size: 16px;
  color: #000;
  margin-bottom: 8px;
`;

export const HeaderContainer = styled.View`
  height: 64px;
  background-color: #0077b6;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
export const Button = styled.TouchableOpacity`
  height: 50px;
  border-radius: 5px;
  background-color: #4CAF50;
  align-items: center;
  justify-content: center;
  width: 80%;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  
  
`;
export const Rodape = styled.Text`
  flex: 1;
  flex-direction: row;
  position: absolute;
  bottom: 10px;
  align-self: center;
  height: 50px;
  width: 50%;
  border-radius: 5px;
  background-color: #4CAF50;
  justify-content: center;
  
`;

