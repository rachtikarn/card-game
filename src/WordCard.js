import React, { Component } from 'react';
import CharacterCard from './CharacterCard';

class WordCard extends Component {
render() {
 return (
 <div>
{ Array.from(this.props.value).map((c, i) => <CharacterCard value={c} key={i}/>) }
 </div>
 );
 }
}

export default WordCard;