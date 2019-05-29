import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { InfoCarouselWrapper } from './style';
import * as ActionCreator from '../../page/Info/store/ActionCreator';
import { Carousel } from 'antd';

class InfoCarousel extends PureComponent{
    componentDidMount() {
        this.props.getInfoCarousel();
        this.props.getProduct();
    }
    render() {
        const infoCarousel =  this.props.infoCarousel.toJS();
        const { showCarousel, getCarouselIndex, carouselIndex, getCarousel } = this.props;
        const product = this.props.product.toJS();
        return (
            <InfoCarouselWrapper>
                {
                    showCarousel?
                    (
                        <Carousel autoplay className="carousel_list">
                            {
                                infoCarousel.map((item) => (
                                    <div key={item.id} className="carousel_item">
                                        <img src={item.imgUrl} alt=""/>
                                    </div>
                                ))
                            }
                        </Carousel>
                    ) : 
                    (<div className="big_img">
                        <img src={infoCarousel[carouselIndex].imgUrl} alt="" />
                    </div>)
                }
                <div className="small_img">
                    <div>
                        {
                            infoCarousel.length>0?(<img src={infoCarousel[0].imgUrl} onClick={getCarousel} alt="" />): ''
                        }
                    </div>
                    <span>颜色:</span>
                    {
                        infoCarousel.map((item, index) => (
                            <img 
                                src={item.imgUrl} alt="" 
                                key={item.id} 
                                onClick={() => getCarouselIndex(index)}
                            />
                        ))
                    }
                </div>
                <div className="price">
                    <span className="new_price">{product.new_price}</span>
                    <span className="old_price">{product.old_price}</span>
                    {
                        product.youhui!==undefined?
                        (
                            <div className="youhui">
                                {
                                    product.youhui.map((item, index) => (
                                        <span  key={index}>{item}</span>
                                    ))
                                }
                            </div>
                        ):''
                    }
                    
                </div>
                <h3>{product.title}</h3>
                <p>{product.desc}</p>
                {
                    product.type !== undefined ?
                    (
                        <ul className="type">
                            {
                                product.type.map((item) => (
                                    <li key={item.id}>
                                        <img src={item.img} alt=""/>
                                        <span>{item.title}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    ):''
                }
                
            </InfoCarouselWrapper>
        )
    }
}

const mapState = (state) => ({
    infoCarousel: state.getIn(['info', 'infoCarousel']),
    showCarousel: state.getIn(['info', 'showCarousel']),
    carouselIndex: state.getIn(['info', 'carouselIndex']),
    product: state.getIn(['info', 'product']),
})

const mapDispatch = (dispatch) => ({
    getInfoCarousel() {
        dispatch(ActionCreator.InfoCarousel());
    },
    getCarouselIndex(index) {
        dispatch(ActionCreator.CarouselIndex(index));
    },
    getCarousel() {
        dispatch(ActionCreator.Carousel());
    },
    getProduct() {
        dispatch(ActionCreator.Product());
    }
})

export default connect(mapState, mapDispatch)(InfoCarousel);