import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Card from './Card';

const GameScreen = () => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    // Generate an array of card values and shuffle them
    const values = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const newCards = [...values, ...values];
    newCards.sort(() => Math.random() - 0.5);

    setCards(newCards);
  }, []);

  const handleCardPress = (index) => {
    // Ignore card press if it's already been matched
    if (matchedCards.includes(index)) {
      return;
    }

    // If two cards have been selected, check if they match
    if (selectedCards.length === 2) {
      const [firstIndex, secondIndex] = selectedCards;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedCards([...matchedCards, firstIndex, secondIndex]);
      }
      setSelectedCards([]);
    }

    // Add card to selected cards
    setSelectedCards([...selectedCards, index]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {cards.map((value, index) => (
          <Card
            key={index}
            value={value}
            onPress={() => handleCardPress(index)}
          />
        ))}
      </View>
      {matchedCards.length === cards.length && (
        <Text style={styles.winText}>You Win!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  winText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 50,
  },
});

export default GameScreen;
