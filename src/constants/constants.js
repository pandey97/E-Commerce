const walkthrough_01_01_images = [
  require('../assets/images/walkthrough/walkthrough_01_01.png'),
  require('../assets/images/walkthrough/walkthrough_01_02.png'),
  require('../assets/images/walkthrough/walkthrough_01_03.png'),
  require('../assets/images/walkthrough/walkthrough_01_04.png'),
];

const walkthrough_01_02_images = [
  require('../assets/images/walkthrough/walkthrough_01_05.png'),
  require('../assets/images/walkthrough/walkthrough_01_06.png'),
  require('../assets/images/walkthrough/walkthrough_01_07.png'),
  require('../assets/images/walkthrough/walkthrough_01_01.png'),
];

const walkthrough = [
  {
    id: 0,
    title: 'Genuine product',
    sub_title: 'Diversified items of products in life, genuine product, safe',
  },
  {
    id: 1,
    title: 'Convenient ordering',
    sub_title: 'Order multiple items from multiple brands at the same time',
  },
  {
    id: 2,
    title: 'Easy search',
    sub_title:
      'Find products easy with Scanning camera, pay with just one camera scan',
  },
  {
    id: 3,
    title: 'Super fast delivery',
    sub_title: 'Delivery within the next day including Saturday and Sunday',
  },
];

const home_tabs = [
  {
    id: 0,
    label: 'Product',
  },
  {
    id: 1,
    label: 'My Chart',
  },
  {
    id: 2,
    label: 'Service',
  },
];

const dashboard_screens = {
  home: 'Home',
  category: 'Category',
  setting: 'Setting',
  profile: 'Profile',
};

const bottom_tabs = [
  {
    id: 0,
    label: dashboard_screens.home,
  },
  {
    id: 1,
    label: dashboard_screens.category,
  },
  {
    id: 2,
    label: dashboard_screens.setting,
  },
  {
    id: 3,
    label: dashboard_screens.profile,
  },
];

const scan_product_option = {
  qr: 'QR',
  camera: 'CAMERA',
};

const constantText = {
  WelcomeTo: 'Welcome to',
  Margaret: 'Margaret',
  GetStarted: 'Get Started',
  AlreadyAccount: 'Already have an account',
  signInToContinue: 'Sign in to continue.',
  createNewAccount: 'Create new account',
  email:'Email',
  password: 'Password',
  name: 'Name',
  phone: 'Phone',
  country: 'Country',
  forgotpassword: 'Forgot Password?',
  termAndCondition: 'By registering, you agree to our Terms and that you have read our Data User Policy.',
  login: 'Log In',
  signin: 'Sign In',
  createAccount: 'Create Account',
  dontHaveAccount: "Don't have an account?",
  alreadyHaveAccount: 'I already have an account',
  newAccount: 'Create New Account',
  loginWith: 'OR login with',
  forgotPassword: 'Forgot Password',
  continuePhoneno: 'Continue using phone number.',
  OTPsent: 'Enter OTP sent to your phone.',
  sendCode: 'Send Verification Code',
  resend: 'Resend Code',
  home: 'Home',
  searchProduct: 'Search Product',
  product: 'Product',
  mychart: 'My Chart',
  service: 'Service',
  samePrice: 'Same Price of $100',
  miniacShop: 'Shoe in Miniac Shop',
  may: 'May',
  date: '09',
  event: 'Event',
  transport: 'Transport',
  live: 'Live',
  coin: 'Coin',
  flashsale: 'Flash Sale',
  search: 'Search',
  premium: 'Premium',
  card: 'Card',
  saleTimeProduct: 'Sale time product',
  youMayLike: 'You may like',
  seemore: 'See more >',
  promotionItems: 'Promotion Items',
  general: 'General',
  collection: 'Collection',
  men: 'Men',
  women: 'Women',
  technology: 'Technology',
  onetwok: '1.2k',
  profile: 'Profile',
  sudhanshu: 'BySudhanshu',
  follower: '30k followers',
  personalInfo: 'Personal info',
  sellerAccount: 'Seller Account',
  onethousand: '1000',
  coin: 'Coin(s)',
  gold: 'Gold',
  networkConnection: 'Social Network Connection',
  promotionCode: 'Promotion Code',
  bonusGift: 'Bonus Gift',
  orderManagement: 'Order Management',
  widget: 'Your Widget',
  reviewPurchasedProduct: 'Reviews of purchased products',
  recentlyViewedProduct: 'Recently viewed product',
  favourite: 'Favourite',
  billingInformation: 'Billing information',
  setting: 'Setting',
  notification: 'Notification',
  askBeforeBuy: 'Ask before buy',
  colorBlind: 'Color blind mode',
  setupWidth: 'Setup Width',
  personalCommunication: 'Personal Communication',
  subLnguage: 'Sub Language',
  sound: 'Sound',
  featured: 'Featured',
  upto: 'Up To 50% Off Holiday Bit',
  topKey: 'Top Key Search',
  suggested: 'Suggested to you'
};

export default {
  walkthrough_01_01_images,
  walkthrough_01_02_images,
  walkthrough,
  home_tabs,
  dashboard_screens,
  bottom_tabs,
  scan_product_option,
  constantText,
};
