import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import styles from '../styles/profileScreenStyle';
import {constants, icons, images} from '../../constants';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.header}>
          <View style={styles.leftHeader}>
            <Image source={icons.logo} style={styles.logo} />
            <Text style={styles.profileText}>
              {constants.constantText.profile}
            </Text>
          </View>
          <View style={styles.rightHeader}>
            <TouchableOpacity>
              <Image source={icons.bell} style={styles.rightHeaderLogo} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={icons.shoppingCart}
                style={styles.rightHeaderLogo}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={images.qr_code} style={styles.rightHeaderLogo} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.profileContainer}>
            <View style={styles.leftProfile}>
              <Image source={icons.logo} style={styles.userProfile} />
              <View>
                <Text style={styles.userProfileText}>
                  {constants.constantText.sudhanshu}
                </Text>
                <Text style={styles.followerText}>
                  {constants.constantText.follower}
                </Text>
                <Text style={styles.personalInfoText}>
                  {constants.constantText.personalInfo}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.sellerAccountButton}>
              <Text style={styles.buttonText}>
                {constants.constantText.sellerAccount}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rewardContainer}>
            <View style={styles.rewardChildContainer}>
              <View style={styles.leftrewardContainer}>
                <View style={styles.LeftLogoContainer}>
                  <Image source={icons.shoppingBag} style={styles.rewardLogo} />
                </View>
                <View>
                  <Text style={styles.noOfCoinText}>
                    {constants.constantText.onethousand}
                  </Text>
                  <Text style={styles.coinText}>
                    {constants.constantText.coin}
                  </Text>
                </View>
              </View>
              <View style={styles.line}></View>
              <View style={styles.rightrewardContainer}>
                <View style={styles.rightLogoContainer}>
                  <Image source={icons.book_open} style={styles.goldLogo} />
                </View>
                <View>
                  <Text style={styles.noOfCoinText}>
                    {constants.constantText.onethousand}
                  </Text>
                  <Text style={styles.coinText}>
                    {constants.constantText.coin}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.box}>
            <TouchableOpacity style={styles.profileDetailContainer}>
              <Image source={icons.internet} style={styles.boxLogo} />
              <Text style={styles.boxText}>
                {constants.constantText.networkConnection}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileDetailContainer}>
              <Image source={icons.promoCode} style={styles.boxLogo} />
              <Text style={styles.boxText}>
                {constants.constantText.promotionCode}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileDetailContainer}>
              <Image source={icons.gift} style={styles.boxLogo} />
              <Text style={styles.boxText}>
                {constants.constantText.bonusGift}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileDetailContainer}>
              <Image source={icons.checklist} style={styles.boxLogo} />
              <Text style={styles.boxText}>
                {constants.constantText.orderManagement}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileDetailContainer}>
              <Image source={icons.widget} style={styles.boxLogo} />
              <Text style={styles.boxText}>
                {constants.constantText.widget}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <TouchableOpacity style={styles.lowerProfileDetailContainer}>
              <Text style={styles.boxText}>
                {constants.constantText.networkConnection}
              </Text>
              <Image source={icons.next} style={styles.boxLogo} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.lowerProfileDetailContainer}>
              <Text style={styles.boxText}>
                {constants.constantText.promotionCode}
              </Text>
              <Image source={icons.next} style={styles.boxLogo} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.lowerProfileDetailContainer}>
              <Text style={styles.boxText}>
                {constants.constantText.bonusGift}
              </Text>
              <Image source={icons.next} style={styles.boxLogo} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.lowerProfileDetailContainer}>
              <Text style={styles.boxText}>
                {constants.constantText.orderManagement}
              </Text>
              <Image source={icons.next} style={styles.boxLogo} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.lowerProfileDetailContainer}>
              <Text style={styles.boxText}>
                {constants.constantText.widget}
              </Text>
              <Image source={icons.next} style={styles.boxLogo} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Profile;
