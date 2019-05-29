import React, { PureComponent, Fragment } from 'react';
import MakeUpHeader from '../../components/MakeUpHeader/index.jsx';
import CarouselComponent from '../../components/Carousel/index.jsx';
import NavBar from '../../components/NavBar/index.jsx';
import ReXiao from '../../components/ReXiao/index.jsx';
import Href from '../../components/Href/index.jsx';
import BackTo from '../../components/BackTop/index.jsx';

class MakeUp extends PureComponent{
    render() {
        return (
            <Fragment>
                <MakeUpHeader></MakeUpHeader>
                <div style={{marginTop: '-50px'}}>
                    <CarouselComponent></CarouselComponent>
                    <NavBar></NavBar>
                </div>
                <ReXiao></ReXiao>
                <Href></Href>
                <BackTo></BackTo>
            </Fragment>
        )
    }
}

export default MakeUp;