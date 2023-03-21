import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Card from './Card';

class Game extends Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = {
      cards: [],
      selectedCards: [],
      matchedCards: [],
    };
  }

  componentDidMount() {
    // Generate an array of card values and shuffle them
    const values = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const newCards = [...values, ...values];
    newCards.sort(() => Math.random() - 0.5);

    this.setState({ cards: newCards });
  }

  handleCardPress(index) {
    const { selectedCards, cards, matchedCards } = this.state;

    // Ignore card press if it's already been matched
    if (matchedCards.includes(index)) {
      return;
    }

    // If two cards have been selected, check if they match
    if (selectedCards.length === 2) {
      const [firstIndex, secondIndex] = selectedCards;
      if (cards[firstIndex] === cards[secondIndex]) {
        this.setState({
          matchedCards: [...matchedCards, firstIndex, secondIndex],
        });
      }
      this.setState({ selectedCards: [] });
    }

    // Add card to selected cards
    this.setState({ selectedCards: [...selectedCards, index] });
  }

  render() {
    const { cards, matchedCards } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.grid}>
          {cards.map((value, index) => (
            <Card
              key={index}
              value={value}
              onPress={() => this.handleCardPress(index)}
              disabled={matchedCards.includes(index)}
            />
          ))}
        </View>
        {matchedCards.length === cards.length && (
          <Text style={styles.winText}>You Win!</Text>
        )}
      </View>
    );
  }
}

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

export default Game;






