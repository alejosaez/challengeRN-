import React from 'react';
import { Text } from 'react-native';
import {
  Products as ProductsContainer,
  Product,
  ProductImage,
  ProductName,
  ProductDescription,
  ProductPrice,
  AddButton,
  ProductDetails
} from'../../styles/productsStyle';

const Products: React.FC = () => {
  return (
    <ProductsContainer>
      <Product>
        <ProductImage source={{ uri: 'https://s3-alpha-sig.figma.com/img/3865/1810/52240331021247c5e63abe065c4907e7?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W2xCdQG6MgNe3JZ5VoQgg6bc7Py27Y-XbbXqbLrEktrdmfsYp0UL4gcWimasHx30JGcDexvAiswy3gzIFeJgt52HEuG696F7-ZDONY8t6qk-W138t4ziEma6TWvvAC4KjTel6b6mnMcIbJSoJEzDor-a-zsBFnGxAb4zkGtjnUXd-zO07hel9WAl7hV5acyZjeYAOiOw5hKuQCAofoBqwI3sAKKor-IkXzVnf1hxYTN-MufU6MyhR0MNshjaG7RMjAYNwxhKoB98ZL1nChwTzUzoC~uDua97OVD3LdE6hf7kW214OHD908YRuYFeQAvHWvxpbt4MhMZeDsXLKGXOeA__' }} />
        <ProductDetails>
          <ProductName>Cappuccino</ProductName>
          <ProductDescription>with chocolate</ProductDescription>
          <ProductPrice>$4.16</ProductPrice>
        </ProductDetails>
        <AddButton>
          <Text>+</Text>
        </AddButton>
      </Product>
      <Product>
        <ProductImage source={{ uri: 'https://s3-alpha-sig.figma.com/img/fcf7/d5cf/a03d93d08461628ba2b0ea2d070a2a8e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f-nCWCSgNgjMPJbaMTZRuvLtoI-iruCmMTv40~kjQSKpck~QHyVw7vnEQgK4TDOu7Ieetqa-kgzuRYFHPGjMqRLCxiCKor6ZDSL~dqPIqDUGf3gZm8j2cyWRCPNJwLL4d9EnJgvEMZkJ5tKJ9o94w-urulLGcIHEgVUOMeHpnAp-r70HQuTkzCydqduKeP5I7Xq9TqohL2KnGIn8WQyYY1WtMelk~JCs3AYm9wg99pe0Sc3ct-UPPTXuun-zbK~X1bx5md7mq3e48Ve2pxZZ8-DJ2Z1hdM2faJ-BLj2jvymGiRs1aWtgWSan8pMhywcvxLoWz-yE85bLBosisHdnhw__' }} />
        <ProductDetails>
          <ProductName>Cappuccino</ProductName>
          <ProductDescription>with chocolate and milk</ProductDescription>
          <ProductPrice>$5.42</ProductPrice>
        </ProductDetails>
        <AddButton>
          <Text>+</Text>
        </AddButton>
      </Product>
    </ProductsContainer>
  );
};

export default Products;
