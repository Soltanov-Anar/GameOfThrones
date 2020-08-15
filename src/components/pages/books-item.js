import React, {Component} from 'react';
import gotService from '../../service/gotService';
import ItemDetails, {Field} from '../item-details';

export default class BooksItem extends Component {
    gotService = new gotService();
    
    render () {
        const {bookId} = this.props;
        const {getBook} = this.gotService;
        return (
            <ItemDetails
                itemId={bookId}
                getData={getBook}
            >
                <Field 
                    field='numberOfPages'
                    label='Number of pages'
                />
                <Field 
                    field='publisher'
                    label='Publisher'
                />
                <Field 
                    field='released'
                    label='Released'
                />
            </ItemDetails>
        )
    };
}
