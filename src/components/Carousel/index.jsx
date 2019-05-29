import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { CarouselWrapper } from './style';
import { Carousel } from 'antd';
import * as ActionCreator from '../../page/Home/store/ActionCreator'

class CarouselComponent extends PureComponent{
    
    componentDidMount() {
        this.props.getCarouselList();
    }
    render() {
        const { carouselList, imgHeight } = this.props;
        return(
            <CarouselWrapper>
                <Carousel
                    autoplay
                    infinite
                >
                {
                    carouselList.toJS().map((item) => (
                        <div
                            key={item.id}
                            href="#"
                            style={{ display: 'inline-block', width: '100%', height: imgHeight }}
                        >
                            <img
                                src={item.imgUrl}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </div>
                    ))
                }
                </Carousel>
            </CarouselWrapper>
        )
    }
};

const mapState = (state) => ({
    carouselList: state.getIn(['home', 'carouselList']),
    imgHeight: state.getIn(['home', 'imgHeight']),
})

const mapDispacth = (dispatch) => ({
    getCarouselList() {
        dispatch(ActionCreator.CarouselList())
    }
})

export default connect(mapState, mapDispacth)(CarouselComponent);