import React, {Component} from 'react';
import ItemList from '../Item-list';
import ItemDetails, {Field} from '../item-details';
import ErrorMessage from '../error-message';
import gotService from '../../service/gotService';
import RowBlock from '../row-block';

export default class HousesPage extends Component {
    gotService = new gotService();

    state = {
        selectedHouse: null,
        error: false,
    }

    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id,
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        const {onItemSelected} = this;
        const {error, selectedHouse} = this.state;
        const {getAllHouse, getHouse} = this.gotService;
        if(error) return <ErrorMessage />;

        const itemList = (
            <ItemList
                onItemSelected={onItemSelected}
                getData={getAllHouse}
                renderItem={({name}) => name}
            />
        )

        const itemDetails = (
            <ItemDetails
                itemId={selectedHouse}
                getData={getHouse}
            >
                <Field field='region' label='Region' />
                <Field field='words' label='Words' />
                <Field field='titles' label='Titles' />
                <Field field='ancestralWeapons' label='Ancestral Weapons' />
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails} />
        )
    }
}