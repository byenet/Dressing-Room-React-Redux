import React, { Component } from 'react'
import {connect} from 'react-redux';


class CategoriesComponent extends Component {

    _chooseCategory = (payload) => {
      this.props.dispatch({
        type: 'SET_CATEGORY',
        payload
      })
    }

    render() {
        return (
          <div className="btn-group">
            {this.props.categoryList.map((item, index) => (
              <button onClick={() => this._chooseCategory(item.type)} className={this.props.choosenCategory === item.type ? 'btn btn-primary' : 'btn btn-outline-primary'} key={index}>
                {item.showName}
              </button>
            ))}
          </div>
        );
    }
}

const mapStateToProps = (state) => ({
    categoryList: state.categories,
    choosenCategory: state.choosenCategory
})

export default connect(mapStateToProps,null)(CategoriesComponent);