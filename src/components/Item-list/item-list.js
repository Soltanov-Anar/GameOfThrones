import React, {useState, useEffect} from 'react';
import './item-list.css';
import Spinner from '../spinner';
//import PropTypes from 'prop-types';
//import gotService from '../../service/gotService';

function ItemList({getData, onItemSelected, renderItem}) {
    
    const [itemList, updateList] = useState([]);

    useEffect(() => {
             getData()
            .then( (data) => {
                updateList(data)
            })
    }, [])

    function renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;

            const label = renderItem(item);

            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => onItemSelected(id)}
                    >
                    {label}
                </li>
            )
            
        })
    }
       
    if(!itemList) {
        return <Spinner />
    }

    const items = renderItems(itemList);
    
    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
}

export default ItemList;

/* ItemList.defaultProps = {
    onItemSelected: () => {}
} */

/* const withData = (View, getData) => { 
    return class extends Component {
        state = {
            data: null,
        } 


        render() {
            const {data} = this.state;

            if(!data) {
                return <Spinner />
            }
            return <View {...this.props} data={data}/>
        }
    };
}
const {getAllCharacters} = new gotService();
export default withData(ItemList, getAllCharacters); */