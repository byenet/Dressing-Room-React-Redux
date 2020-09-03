import React, { Component } from 'react'
import HeaderComponent from '../../components/Layouts/Header/header'
import FooterComponent from '../../components/Layouts/Footer/footer'
import CategoriesComponent from '../../components/Categories/categories'
import ProductsComponent from '../../components/Products/products'
import ModelComponent from '../../components/Model/model'

export default class HomeScreen extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <div className="container-fluid">
                <div className="row">
                    <div className="col-7">
                        <CategoriesComponent/>
                        <ProductsComponent/>
                    </div>
                    <div className="col-5 mt-5">
                        <ModelComponent/>
                    </div>
                </div>
                </div>
                <FooterComponent />
            </div>
        );
    }
}
