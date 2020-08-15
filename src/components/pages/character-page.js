import React, { Component } from 'react';
import ItemList from '../Item-list';
import ItemDetails, {Field} from '../item-details';
import ErrorMessage from '../error-message';
import gotService from '../../service/gotService';
import RowBlock from '../row-block';



export default class CharacterPage extends Component {
    gotService = new gotService();
    
    state = {
        selectedChar: null,
        error: false,
    }

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id, 
        })
    }

    componentDidCatch = () => {
        this.setState({
            error: true,
        });
    }
    
    render() {
        const {error} = this.state;
        if(error) {
            return <ErrorMessage />
        }

        const itemList = (
            <ItemList onItemSelected={this.onItemSelected} 
                      getData={this.gotService.getAllCharacters}
                      renderItem={({name, gender}) => `${name} (${gender})`}
            />
        )

        const itemDetails = (
            <ItemDetails 
                itemId={this.state.selectedChar}
                getData={this.gotService.getCharacter}
            >
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        )

        return(
            <RowBlock 
                left={itemList}
                right={itemDetails}
            />  
        )
    };
}; 