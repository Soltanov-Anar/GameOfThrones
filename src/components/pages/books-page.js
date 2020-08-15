import React, {Component} from 'react';
import ItemList from '../Item-list';
import ErrorMessage from '../error-message';
import gotService from '../../service/gotService';
import {withRouter} from 'react-router-dom';

export class BooksPage extends Component {
    gotService = new gotService();

    state = {
        error: false,
    };

    componentDidCatch() {
        this.setState({
            error: true,
        })
    };

    render () {
        const {history} = this.props;
        const {error} = this.state;
        const {getAllBooks} = this.gotService;
        if(error) return <ErrorMessage />;

        return (
            <ItemList
                onItemSelected={(itemId) => {
                    history.push(itemId)
                }}
                getData={getAllBooks}
                renderItem={({name}) => name}
            />
        )
    };
};

export default withRouter(BooksPage);
