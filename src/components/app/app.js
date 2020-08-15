import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../random-char';
import ErrorMessage from '../error-message';
import {CharacterPage, BooksPage, HousesPage, BooksItem} from '../pages';
import gotService from '../../service/gotService';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './app.css'

export default class App extends Component {

    gotService = new gotService();

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
        this.setState((state) => {
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
            <Router>
                <div className='app'>
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
                        <Route path='/' component={() => <h1>Welcome to GOT DB</h1>} exact/>
                        <Route path='/characters' component={CharacterPage} />
                        <Route path='/books' component={BooksPage} exact/>
                        <Route path='/books/:id' render={({match}) => {
                            const {id} = match.params;
                        return <BooksItem bookId={id} /> }} />
                        <Route path='/houses' component={HousesPage}/>
                    </Container>
                </div>
            </Router>
        );
    }
};