import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import ItemList from '../Item-list';
import CharDetails from '../char-details';
import ErrorMessage from '../error';
import gotService from '../../service/gotService';


export default class CharacterPage extends Component {
    gotService = new gotService();
    
    state = {
        selectedChar: 130,
        error: false,
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id 
        })
    }

    componentDidCatch = () => {
        this.setState({
            error: true
        });
    }
    
    render() {
        const {error} = this.state;
        if(error) {
            return <ErrorMessage />
        }

        return(
            <Row>
                <Col md='6'>
                    <ItemList onCharSelected={this.onCharSelected} 
                              getData={this.gotService.getAllCharacters}
                    />
                </Col>
                <Col md='6'>
                    <CharDetails charId={this.state.selectedChar} 
                    
                    />
                </Col>        
            </Row>
        )
    }
}