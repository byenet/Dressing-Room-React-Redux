import React, { Component } from 'react'
import {connect} from 'react-redux'

class ProductItemComponent extends Component {

    _chooseCloth = (cloth) => {
        this.props.dispatch({
            type: 'SET_CLOTH',
            payload: {
                type: cloth.type,
                img: cloth.imgSrc_png
            }
        })
    }

    render() {
        const {name, imgSrc_jpg} = this.props.item;

        return (
            <div className="card p-2 my-2">
                <img src={imgSrc_jpg} alt={'dressing room image'}/>
                <p>{name}</p>
                <button onClick={()=> this._chooseCloth(this.props.item)} className="btn btn-success">Thử đồ</button>
            </div>
        );
    }
}

export default connect()(ProductItemComponent)