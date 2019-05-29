import React, { PureComponent } from 'react';
import { BrandListWrapper } from './style';
import { connect } from 'react-redux';
import * as ActionCreator from '../../page/Home/store/ActionCreator';
import { Link } from 'react-router-dom';

class BrandList extends PureComponent{
    componentDidMount() {
        this.props.getBrandList();
    }
    render() {
        const brandList = this.props.brandList.toJS();
        return (
            <BrandListWrapper>
                {
                    brandList.map((item) => (
                        <div className="BrandItem" key={item.id}>
                            <Link to="/search"><img src={item.titleImg} alt=""/></Link>
                            <section>
                                <div className="ProductList">
                                    {
                                        item.porductImg.map((item) => (
                                            <Link to="/info" key={item.id} >
                                            <div className="ProductItem">
                                                <img src={item.imgUrl} alt=""/>
                                                <div className="desc">
                                                    <p>{item.title}</p>
                                                    <span className="txt">{item.txt}</span>
                                                    <div className="price"><span className="new_price">{item.new_price}</span><span className="old_price">{item.old_price}</span></div>
                                                </div>
                                            </div>
                                            </Link>
                                        ))
                                    }
                                    <div className="loadmore">
                                       <p >查看更多</p>
                                    </div>
                                </div>
                            </section>
                            
                            
                        </div>
                    ))
                }
                
            </BrandListWrapper>
        )
    }
}

const mapState = (state) => ({
    brandList: state.getIn(['home', 'brandList'])
})

const mapDispatch = (dispatch) => ({
    getBrandList() {
        dispatch(ActionCreator.BrandList())
    }
})

export default connect(mapState, mapDispatch)(BrandList);