import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  
  background-color: #f5f5f5;
  flex: 1;
  padding: 20px;
  padding-top: 20px;
`;

export const InputLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.TextInput`
  height: 40px;
  border-radius: 5px;
  border-width: 1px;
  border-color: #ccc;
  padding: 10px;
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  border-radius: 5px;
  background-color: #4CAF50;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;
