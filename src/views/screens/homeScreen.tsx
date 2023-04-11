import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from '../styles/homeScreenStyle';
import {COLORS, constants, dummyData, icons, images} from '../../constants';
import ProgressScreen from '../../components/progressBar';

const Home = () => {
  const [flexValue, setFlexValue] = useState(0.35);
  const [Value, setValue] = useState(-60);
  const [activeHeader, setActiveHeader] = useState(1);

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    console.log(offsetY);
    // Update the flex value based on the scroll position
    setFlexValue(offsetY > 5 ? 0.27 : 0.35);
    setValue(offsetY > 5 ? 0 : -60);
  };

  const handleHeaderClick = (button: any) => {
    if (button == 2 || button == 3) setFlexValue(0.27);
    else {
      setFlexValue(0.36);
      setValue(-60);
    }
    setActiveHeader(button);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.upperContainer, {flex: flexValue}]}>
        <View style={styles.upperChildContainer}>
          <View style={styles.header}>
            <View style={styles.leftHeader}>
              <Image source={icons.logo} style={styles.logo} />
              <Text style={styles.homeText}>{constants.constantText.home}</Text>
            </View>
            <View style={styles.rightHeader}>
              <TouchableOpacity>
                <Image
                  source={icons.shoppingBag}
                  style={styles.rightHeaderLogo}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={icons.bell} style={styles.rightHeaderLogo} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={icons.shoppingCart}
                  style={styles.rightHeaderLogo}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <TextInput
              placeholder={constants.constantText.searchProduct}
              style={styles.input}
            />
            <Image source={icons.search} style={styles.leftInputIcon} />
            <TouchableOpacity style={styles.cameraTouchable}>
              <Image source={icons.camera} style={[styles.rightInputIcon]} />
            </TouchableOpacity>
            <View style={styles.barSelector}>
              <TouchableOpacity onPress={() => handleHeaderClick(1)}>
                <Text
                  style={[
                    styles.text,
                    {
                      color:
                        activeHeader === 1 ? COLORS.secondary : COLORS.light,
                    },
                  ]}>
                  {constants.constantText.product}
                </Text>
                {activeHeader === 1 ? (
                  <View style={styles.headerBar}></View>
                ) : null}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleHeaderClick(2)}>
                <Text
                  style={[
                    styles.text,
                    {
                      color:
                        activeHeader === 2 ? COLORS.secondary : COLORS.light,
                    },
                  ]}>
                  {constants.constantText.mychart}
                </Text>
                {activeHeader === 2 ? (
                  <View style={styles.headerBar}></View>
                ) : null}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleHeaderClick(3)}>
                <Text
                  style={[
                    styles.text,
                    {
                      color:
                        activeHeader === 3 ? COLORS.secondary : COLORS.light,
                    },
                  ]}>
                  {constants.constantText.service}
                </Text>
                {activeHeader === 3 ? (
                  <View style={styles.headerBar}></View>
                ) : null}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {activeHeader === 1 ? (
        <View style={[styles.middleContainer, {marginTop: Value}]}>
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}
            onScroll={handleScroll}>
            <View>
              <Image source={images.banner01} style={styles.banner} />
              <Text style={styles.bannerTopText}>
                {constants.constantText.samePrice}
              </Text>
              <Text style={styles.bannerBottomText}>
                {constants.constantText.miniacShop}
              </Text>
              <View style={styles.dateContainer}>
                <Text style={styles.month}>{constants.constantText.may}</Text>
                <Text style={styles.month}>{constants.constantText.date}</Text>
              </View>
            </View>
            <View style={styles.middleChildContainer}>
              <TouchableOpacity>
                <View style={styles.imageLogo}>
                  <Image source={icons.book_open} style={styles.icon} />
                </View>
                <Text style={styles.logoText}>
                  {constants.constantText.event}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.imageLogo}>
                  <Image source={icons.car} style={styles.icon} />
                </View>
                <Text style={styles.logoText}>
                  {constants.constantText.transport}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.imageLogo}>
                  <Image source={icons.video} style={styles.icon} />
                </View>
                <Text style={styles.logoText}>
                  {constants.constantText.live}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.imageLogo}>
                  <Image source={icons.shoppingBag} style={styles.icon} />
                </View>
                <Text style={styles.logoText}>
                  {constants.constantText.coin}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.middleChildContainer,
                {marginTop: 10, marginLeft: 0},
              ]}>
              <TouchableOpacity>
                <View style={styles.imageLogo}>
                  <Image source={icons.clock} style={styles.icon} />
                </View>
                <Text style={styles.logoText}>
                  {constants.constantText.flashsale}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.imageLogo}>
                  <Image source={icons.search} style={styles.icon} />
                </View>
                <Text style={styles.logoText}>
                  {constants.constantText.search}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.imageLogo}>
                  <Image source={icons.fire_fill} style={styles.icon} />
                </View>
                <Text style={styles.logoText}>
                  {constants.constantText.premium}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.imageLogo}>
                  <Image source={icons.credit_card} style={styles.icon} />
                </View>
                <Text style={styles.logoText}>
                  {constants.constantText.card}
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <View style={styles.productHeader}>
                <Text style={styles.saleTimeProductText}>
                  {constants.constantText.saleTimeProduct}
                </Text>
                <TouchableOpacity>
                  <Text style={styles.seeMoreText}>
                    {constants.constantText.seemore}
                  </Text>
                </TouchableOpacity>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.Product}>
                  <View style={styles.flashDealContainer}>
                    <Text style={styles.flashDealText}>
                      {dummyData.flashDeals[0].title}
                    </Text>
                    <Text style={styles.saleTimeText}>
                      {dummyData.flashDeals[0].desc}
                    </Text>
                  </View>
                  <View style={styles.flashDealContainer2}>
                    <Image
                      source={dummyData.flashDeals[1].image}
                      style={styles.image}
                    />
                    <ProgressScreen progress={4 / 5} />
                    <Text style={styles.quantityText}>
                      {dummyData.flashDeals[1].sold_qty}/
                      {dummyData.flashDeals[1].total_qty}
                    </Text>
                    <Text style={styles.productSoldText}>
                      {dummyData.flashDeals[1].text}
                    </Text>
                  </View>
                  <View style={styles.flashDealContainer2}>
                    <Image
                      source={dummyData.flashDeals[2].image}
                      style={styles.image}
                    />
                    <ProgressScreen progress={0.2} />
                    <Text style={styles.quantityText}>
                      {dummyData.flashDeals[2].sold_qty}/
                      {dummyData.flashDeals[2].total_qty}
                    </Text>
                    <Text style={styles.productSoldText}>
                      {dummyData.flashDeals[2].text}
                    </Text>
                  </View>
                </View>
              </ScrollView>
            </View>
            <View>
              <View style={[styles.productHeader, {marginTop: 10}]}>
                <Text style={styles.saleTimeProductText}>
                  {constants.constantText.promotionItems}
                </Text>
                <TouchableOpacity>
                  <Text style={styles.seeMoreText}>
                    {constants.constantText.seemore}
                  </Text>
                </TouchableOpacity>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.Product}>
                  <View style={styles.promotionItemContainer}>
                    <Text style={styles.flashDealText}>
                      {dummyData.promoItems[0].title}
                    </Text>
                    <Text style={styles.saleTimeText}>
                      {dummyData.promoItems[0].desc}
                    </Text>
                  </View>
                  <View style={styles.promotionItemContainer2}>
                    <Image
                      source={dummyData.promoItems[1].image}
                      style={styles.image}
                    />
                    <Text style={styles.quantityText}>
                      {dummyData.promoItems[1].name}
                    </Text>
                    <View style={styles.priceTextConatiner}>
                      <Text style={styles.priceText}>
                        ${dummyData.promoItems[1].price}
                      </Text>
                      <Text style={styles.productDiscount}>
                        {dummyData.promoItems[1].discount}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.flashDealContainer2}>
                    <Image
                      source={dummyData.flashDeals[2].image}
                      style={styles.image}
                    />
                    <Text style={styles.quantityText}>
                      {dummyData.flashDeals[2].sold_qty}/
                      {dummyData.flashDeals[2].total_qty}
                    </Text>
                    <Text style={styles.productSoldText}>
                      {dummyData.flashDeals[2].text}
                    </Text>
                  </View>
                </View>
              </ScrollView>
            </View>
            <View style={styles.lowerParentContainer}>
              <View style={[styles.productHeader, {marginTop: 10}]}>
                <Text style={[styles.saleTimeProductText, {marginBottom: 10}]}>
                  {constants.constantText.youMayLike}
                </Text>
                <TouchableOpacity>
                  <Text style={styles.seeMoreText}>
                    {constants.constantText.seemore}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.bottomContainer}>
                <View style={styles.likeContainer}>
                  <View style={styles.smallImageContainer}>
                    <View style={styles.iconStyle}>
                      <Image
                        source={dummyData.categories[0].image_1}
                        style={styles.smallImage}
                      />
                    </View>
                    <View style={styles.iconStyle}>
                      <Image
                        source={dummyData.categories[0].image_2}
                        style={styles.smallImage}
                      />
                    </View>
                    <View style={styles.iconStyle}>
                      <Image
                        source={dummyData.categories[0].image_3}
                        style={styles.smallImage}
                      />
                    </View>
                  </View>
                  <View style={styles.lowerContainer}>
                    <Text style={styles.productDetail}>
                      {dummyData.categories[0].name}
                    </Text>
                    <Text style={styles.productquantity}>
                      {dummyData.categories[0].qty}
                    </Text>
                  </View>
                </View>
                <View style={styles.likeContainer}>
                  <View style={styles.smallImageContainer}>
                    <View style={styles.iconStyle}>
                      <Image
                        source={dummyData.categories[1].image_1}
                        style={styles.smallImage}
                      />
                    </View>
                    <View style={styles.iconStyle}>
                      <Image
                        source={dummyData.categories[1].image_2}
                        style={styles.smallImage}
                      />
                    </View>
                    <View style={styles.iconStyle}>
                      <Image
                        source={dummyData.categories[1].image_3}
                        style={styles.smallImage}
                      />
                    </View>
                  </View>
                  <View
                    style={[
                      styles.lowerContainer,
                      {backgroundColor: COLORS.error20},
                    ]}>
                    <Text style={styles.productDetail}>
                      {dummyData.categories[1].name}
                    </Text>
                    <Text style={styles.productquantity}>
                      {dummyData.categories[1].qty}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.bottomContainer}>
                <View style={styles.likeContainer}>
                  <View style={styles.smallImageContainer}>
                    <View style={styles.iconStyle}>
                      <Image
                        source={dummyData.categories[2].image_1}
                        style={styles.smallImage}
                      />
                    </View>
                    <View style={styles.iconStyle}>
                      <Image
                        source={dummyData.categories[2].image_2}
                        style={styles.smallImage}
                      />
                    </View>
                    <View style={styles.iconStyle}>
                      <Image
                        source={dummyData.categories[2].image_3}
                        style={styles.smallImage}
                      />
                    </View>
                  </View>
                  <View
                    style={[
                      styles.lowerContainer,
                      {backgroundColor: COLORS.success20},
                    ]}>
                    <Text style={styles.productDetail}>
                      {dummyData.categories[2].name}
                    </Text>
                    <Text style={styles.productquantity}>
                      {dummyData.categories[2].qty}
                    </Text>
                  </View>
                </View>
                <View style={styles.likeContainer}>
                  <View style={styles.smallImageContainer}>
                    <View style={styles.iconStyle}>
                      <Image
                        source={dummyData.categories[3].image_1}
                        style={styles.smallImage}
                      />
                    </View>
                    <View style={styles.iconStyle}>
                      <Image
                        source={dummyData.categories[3].image_2}
                        style={styles.smallImage}
                      />
                    </View>
                    <View style={styles.iconStyle}>
                      <Image
                        source={dummyData.categories[3].image_3}
                        style={styles.smallImage}
                      />
                    </View>
                  </View>
                  <View
                    style={[
                      styles.lowerContainer,
                      {backgroundColor: COLORS.secondary20},
                    ]}>
                    <Text style={styles.productDetail}>
                      {dummyData.categories[3].name}
                    </Text>
                    <Text style={styles.productquantity}>
                      {dummyData.categories[3].qty}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      ) : activeHeader === 3 ? (
        <View style={styles.serviceContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.serviceBox}>
            <View style={styles.serviceBoxItem}>
              <View style={styles.contentText}>
                <View>
                <Text style={styles.headerText}>{dummyData.services[0].title}</Text>
                <Text style={styles.contentItemText}>{dummyData.services[0].description}</Text>
                </View>
                <Text style={styles.onlyPrice}>{dummyData.services[0].price}</Text>
              </View>
              <View style={styles.serviceContainerImage}>
                <Image source={dummyData.services[0].image}/>
              </View>
            </View>
          </View>
          <View style={styles.serviceBox}>
            <View style={styles.serviceBoxItem}>
              <View style={styles.contentText}>
                <View>
                <Text style={styles.headerText}>{dummyData.services[1].title}</Text>
                <Text style={styles.contentItemText}>{dummyData.services[1].description}</Text>
                </View>
                <Text style={styles.onlyPrice}>{dummyData.services[1].price}</Text>
              </View>
              <View style={styles.serviceContainerImage}>
                <Image source={dummyData.services[1].image}/>
              </View>
            </View>
          </View>
          <View style={styles.serviceBox}>
            <View style={styles.serviceBoxItem}>
              <View style={styles.contentText}>
                <View>
                <Text style={styles.headerText}>{dummyData.services[2].title}</Text>
                <Text style={styles.contentItemText}>{dummyData.services[2].description}</Text>
                </View>
                <Text style={styles.onlyPrice}>{dummyData.services[2].price}</Text>
              </View>
              <View style={styles.serviceContainerImage}>
                <Image source={dummyData.services[2].image}/>
              </View>
            </View>
          </View>
          <View style={styles.serviceBox}>
            <View style={styles.serviceBoxItem}>
              <View style={styles.contentText}>
                <View>
                <Text style={styles.headerText}>{dummyData.services[3].title}</Text>
                <Text style={styles.contentItemText}>{dummyData.services[3].description}</Text>
                </View>
                <Text style={styles.onlyPrice}>{dummyData.services[3].price}</Text>
              </View>
              <View style={styles.serviceContainerImage}>
                <Image source={dummyData.services[3].image}/>
              </View>
            </View>
          </View>
          </ScrollView>
        </View>
      ) : null}
    </View>
  );
};

export default Home;
