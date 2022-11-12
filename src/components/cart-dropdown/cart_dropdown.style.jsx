import styled from 'styled-components';
import Button from '../button/button.component';


export const CartContainer = styled.div`
  position: absolute;
  width: 261px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  border-radius: 10px;
  z-index: 5;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 100px auto;
  color: #777777a0;
`;
export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
export const CheckoutButton = styled(Button)`
  margin-top: auto;
`;
