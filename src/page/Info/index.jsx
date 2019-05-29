import React, { PureComponent } from 'react';
import InfoHeader from '../../components/InfoHeader/index.jsx';
import InfoCarousel from '../../components/InfoCarousel/index.jsx';
import InfoActive from '../../components/InfoActive/index.jsx';
import TaoCan from '../../components/TaoCan/index.jsx';
import BrandRecommend from '../../components/BrandRecommend/index.jsx';
import ProductInfo from '../../components/ProductInfo/index.jsx';
import ProductContent from '../../components/ProductContent/index.jsx';
import BackTo from '../../components/BackTop/index.jsx';
import InfoBottom from '../../components/InfoBottom/index.jsx';
import {InfoWrapper} from './style';

class Info extends PureComponent{
    render() {
        return (
            <InfoWrapper>
                <InfoHeader></InfoHeader>
                <InfoCarousel></InfoCarousel>
                <InfoActive></InfoActive>
                <TaoCan></TaoCan>
                <BrandRecommend></BrandRecommend>
                <ProductInfo></ProductInfo>
                <ProductContent></ProductContent>
                <InfoBottom></InfoBottom>
                <BackTo></BackTo>
            </InfoWrapper>
        )
    }
}

export default Info;