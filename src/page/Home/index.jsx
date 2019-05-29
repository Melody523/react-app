import React, { PureComponent } from 'react';
import Search from '../../components/Search/index.jsx';
import CarouselComponent from '../../components/Carousel/index.jsx';
import NavBar from '../../components/NavBar/index.jsx';
import NavImg from '../../components/NavImg/index.jsx';
import QiangGou from '../../components/QiangGou/index.jsx';
import BrandList from '../../components/BrandList/index.jsx';
import BrandData from '../../components/BrandData/index.jsx';
import Recommend from '../../components/Recommend/index.jsx';
import Refresh from '../../components/Refresh/index.jsx';
import { HomeWrapper } from './style';
import BackTo from '../../components/BackTop/index.jsx';

class Home extends PureComponent{
  render() {
    return (
        <HomeWrapper>
          <Search></Search>
          <CarouselComponent></CarouselComponent>
          <NavBar></NavBar>
          <NavImg></NavImg>
          <QiangGou></QiangGou>
          <BrandList></BrandList>
          <BrandData></BrandData>
          <BrandList></BrandList>
          <BrandData></BrandData>
          <BrandList></BrandList>
          <BrandData></BrandData>
          <Recommend></Recommend>
          <Refresh></Refresh>
          <BackTo></BackTo>
        </HomeWrapper>
    );
  }
}

export default Home;
