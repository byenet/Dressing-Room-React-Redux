import React, { Component } from 'react';
import classes from './style.module.css';
import {connect} from 'react-redux';


class ModelComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contain: "images/background/background_998.jpg",
            body: "images/allbody/bodynew.png",
            bikinitop: "images/allbody/bikini_branew.png",
            bikinibottom: "images/allbody/bikini_pantsnew.png",
            model: "images/model/1000new.png",
            feetleft: "images/allbody/feet_high_leftnew.png",
            feetright: "images/allbody/feet_high_rightnew.png",
        };
    }

    render() {
        return (
            <div
                className={classes.contain}
                style={{ background: `url(${this.state.contain})` }}
            >
                <div
                className={classes.body}
                style={{ background: `url(${this.state.body})` }}
                />
                <div
                className={classes.model}
                style={{ background: `url(${this.state.model})` }}
                />
                <div
                className={classes.bikinitop}
                style={{ background: `url(${this.state.bikinitop})` }}
                />
                <div
                className={classes.bikinibottom}
                style={{
                    background: `url(${this.state.bikinibottom})`,
                    zIndex: 2,
                }}
                />
                <div
                className={classes.feetleft}
                style={{ background: `url(${this.state.feetleft})` }}
                />
                <div
                className={classes.feetright}
                style={{ background: `url(${this.state.feetright})` }}
                />

                {/* Mac do */}

                <div
                className={classes.bikinitop}
                style={{
                    backgroundImage: `url(${this.props.model.topclothes})`,
                    backgroundSize: "cover",
                    zIndex: 5,
                }}
                ></div>

                <div
                className={classes.bikinibottom}
                style={{
                    backgroundImage: `url(${this.props.model.botclothes})`,
                    backgroundSize: "cover",
                    zIndex: 4,
                }}
                ></div>

                <div
                className={classes.contain}
                style={{
                    backgroundImage: `url(${this.props.model.background})`,
                    backgroundSize: "cover",
                    zIndex: 1,
                }}
                ></div>

                <div
                className={classes.hairstyle}
                style={{
                    backgroundImage: `url(${this.props.model.hairstyle})`,
                }}
                ></div>

                <div
                className={classes.handbagStyle}
                style={{
                    backgroundImage: `url(${this.props.model.handbags})`,
                }}
                ></div>

                <div
                className={classes.feetStyle}
                style={{
                    backgroundImage: `url(${this.props.model.shoes})`,
                }}
                ></div>

                <div
                className={classes.necklace}
                style={{
                    backgroundImage: `url(${this.props.model.necklaces})`,
                }}
                ></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    model: state.model
})

export default connect(mapStateToProps,null)(ModelComponent)