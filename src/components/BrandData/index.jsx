import React, { PureComponent } from 'react';
import { BrandListWrapper } from '../BrandList/style';
import { connect } from 'react-redux';
import * as ActionCreator from '../../page/Home/store/ActionCreator';
import { Link } from 'react-router-dom';

class BrandData extends PureComponent{
    componentDidMount() {
        this.props.getBrandData();
    }
    render() {
        const brandData = this.props.brandData.toJS();
        return (
            <BrandListWrapper>
                {
                    brandData.map((item) => (
                        <div className="BrandItem" key={item.id||''}>
                            <Link to="/search"><img src={item.titleImg||''} alt=""/></Link>
                            <section>
                                <div className="ProductList">
                                    {
                                        item.porductImg.map((item) => (
                                            <Link to="/info" key={item.id} >
                                            <div className="ProductItem">
                                                <img src={item.imgUrl} alt=""/>
                                                <div className="desc">
                                                    <h3>{item.title}</h3>
                                                    <p className="sub_title">{item.txt}</p>
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
    brandData: state.getIn(['home', 'brandData'])
})

const mapDispatch = (dispatch) => ({
    getBrandData() {
        dispatch(ActionCreator.BrandData())
    }
})

export default connect(mapState, mapDispatch)(BrandData);