import React, {Component} from 'react';
import ItemList from '../Item-list';
import ErrorMessage from '../error-message';
import gotService from '../../service/gotService';
import {withRouter} from 'react-router-dom';

export class BooksPage extends Component {
    gotService = new gotService();

    state = {
        selectedBook: null,
        error: false,
    };

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id,
        })
    };

    componentDidCatch() {
        this.setState({
            error: true,
        })
    };

    render () {
        const {history} = this.props;
        const {error} = this.state;
        if(error) return <ErrorMessage />;

        return (
            <ItemList
                onItemSelected={(itemId) => {
                    history.push(itemId)
                }}
                getData={this.gotService.getAllBooks}
                renderItem={({name}) => name}
            />
        )
    };
};

export default withRouter(BooksPage);
