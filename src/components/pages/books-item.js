import React, {Component} from 'react';
import gotService from '../../service/gotService';
import ItemDetails, {Field} from '../item-details';

export default class BooksItem extends Component {
    gotService = new gotService();
    
    render () {
        return (
            <ItemDetails
                itemId={this.props.bookId}
                getData={this.gotService.getBook}
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
