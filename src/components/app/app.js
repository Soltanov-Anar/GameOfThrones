import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../random-char';
import ErrorMessage from '../error';
import CharacterPage from '../character-page';

import './app.css'

export default class App extends Component {
    state = {
        showRandomChar: true,
        error: false,
    };

    componentDidCatch = () => {
        console.log('error');
        this.setState({
            error: true
        });
    }



    toggleRandomChar = () => {
        this.setState( (state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }

    render() {
        const {showRandomChar,error} = this.state;
        const char = showRandomChar ? <RandomChar/> : null;

        if(error) {
            return <ErrorMessage />
        }
        
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                            <button 
                                className='toggle-btn'
                                onClick={this.toggleRandomChar}>
                            Toggle random character    
                            </button>
                        </Col>
                    </Row>
                    <CharacterPage />
                    {/* <Row>
                        <Col md='6'>
                            <ItemList onCharSelected={this.onCharSelected} />
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar} />
                        < /Col>        
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList onCharSelected={this.onCharSelected} />
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar} />
                        </Col>        
                    </Row> */}
                </Container>
               </>
        );
    }
};