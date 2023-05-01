import {Cart, Chat, Home, Profile} from '../Screens';
import colors from '../styles/colors';
import imagePath from './imagePath';
import navigationString from './navigationString';

export const Data = [
  {
    id: '1',
    title: 'Vegan Resto',
    image: imagePath.VeganResto,
    time: '12 Mins',
  },
  {
    id: '2',
    title: 'Healthy Food',
    image: imagePath.HealthlyFood,
    time: '8 Mins',
  },
  {
    id: '3',
    title: 'Good Food',
    image: imagePath.GoodFood,
    time: '10 Mins',
  },
  {
    id: '4',
    title: 'Smart Resto',
    image: imagePath.SmartResto,
    time: '20 Mins',
  },
  {
    id: '5',
    title: 'FastFood Resto',
    image: imagePath.fastFood,
    time: '30 Mins',
  },
  {
    id: '6',
    title: 'Babarchi Resto',
    image: imagePath.BabarchiResto,
    time: '21 Mins',
  },
  {
    id: '101',
    title: 'Vegan Resto',
    image: imagePath.VeganResto,
    time: '12 Mins',
  },
];

export const Menu = [
  {
    id: '1',
    title: 'Herbal Pancake',
    subTitle: 'Warung Herbal',
    price: '$7',
    image: imagePath.herbalPancake,
  },
  {
    id: '2',
    title: 'Fruit Salad',
    subTitle: 'Wijie Resto',
    price: '$5',
    image: imagePath.fruitSalad,
  },
  {
    id: '3',
    title: 'Green Noddle',
    subTitle: 'Noodle Home',
    price: '$15',
    image: imagePath.greenNoddle,
  },
];

export const TabArr = [
  {
    route: navigationString.HOME,
    label: 'Home',
    icon: imagePath.Home,
    component: Home,
    iconColor: colors.iconColor,
    bgColor: colors.bgColor,
    count: 0,
  },
  {
    route: navigationString.PROFILE,
    label: 'Profile',
    icon: imagePath.Profile,
    component: Profile,
    iconColor: colors.iconColor,
    bgColor: colors.bgColor,
    count: 0,
  },
  {
    route: navigationString.CART,
    label: 'Cart',
    icon: imagePath.Cart,
    component: Cart,
    iconColor: colors.iconColor,
    bgColor: colors.bgColor,
    count: 3,
  },
  {
    route: navigationString.CHAT,
    label: 'Chat',
    icon: imagePath.Chat,
    component: Chat,
    iconColor: colors.iconColor,
    bgColor: colors.bgColor,
    count: 0,
  },
];

export const Chats = [
  {
    id: '1',
    title: 'Anamwp',
    subTitle: 'Your Order Just Arrived!',
    time: '20:00',
    image: imagePath.ChatProfile1,
  },
  {
    id: '2',
    title: 'Guy Hawkins',
    subTitle: 'Your Order Just Arrived!',
    time: '20:00',
    image: imagePath.ChatProfile2,
  },
  {
    id: '3',
    title: 'Leslie Alexander',
    subTitle: 'Your Order Just Arrived!',
    time: '20:00',
    image: imagePath.ChatProfile3,
  },
];
export const Notifications = [
  {
    id: '1',
    title: 'Your order has been taken\nby the driver',
    subTitle: 'Recently',
    image: imagePath.SuccessIcon,
  },
  {
    id: '2',
    title: 'Topup for $100 was successful',
    subTitle: '10.00 Am',
    image: imagePath.TopUpIcon,
  },
  {
    id: '3',
    title: 'Your order has been canceled',
    subTitle: '22 Juny 2021',
    image: imagePath.CancelIcon,
  },
];
export const orderDetails = [
  {
    id: '1',
    title: 'Spacy fresh crab',
    subTitle: 'Waroenk kita',
    price: 35,
    image: imagePath.MenuPhoto1,
    quantity: 1,
  },
  {
    id: '2',
    title: 'Spacy fresh crab',
    subTitle: 'Waroenk kita',
    price: 35,
    image: imagePath.MenuPhoto2,
    quantity: 1,
  },
  {
    id: '3',
    title: 'Spacy fresh crab',
    subTitle: 'Waroenk kita',
    price: 35,
    image: imagePath.MenuPhoto3,
    quantity: 1,
  },
];

export const PopularMenu = [
  {
    id: '1',
    title: 'Spacy fresh crab',
    price: '12$',
    image: imagePath.Pizza,
  },
  {
    id: '2',
    title: 'Spacy fresh crab',
    price: '16$',
    image: imagePath.Chicken,
  },
  {
    id: '3',
    title: 'Spacy fresh crab',
    price: '12$',
    image: imagePath.Pizza,
  },
];

export const Testimonials = [
  {
    id: '1',
    title: 'Dianne Russell',
    subTitle: `This Is great, So delicious! You Must\nHere, With Your family . . `,
    time: '12 April 2021',
    image: imagePath.testimonal1,
  },
  {
    id: '2',
    title: 'Dianne Russell',
    subTitle: `This Is great, So delicious! You Must\nHere, With Your family . . `,
    time: '12 April 2021',
    image: imagePath.testimonal1,
  },
  {
    id: '3',
    title: 'Dianne Russell',
    subTitle: `This Is great, So delicious! You Must\nHere, With Your family . . `,
    time: '12 April 2021',
    image: imagePath.testimonal1,
  },
];
