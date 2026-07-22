import type { Product, Outlet } from '../types';

// Product Image Imports
import almondMilk from '../assets/almond_milk.png';
import appleMilk from '../assets/apple_milk.png';
import apricotMilk from '../assets/apricot_milk.png';
import butterscotchMilk from '../assets/butterscotch_milk.png';
import chikkuMilk from '../assets/chikku_milk.png';
import chocolateNutMilk from '../assets/chocolate_nut_milk.png';
import datesMilk from '../assets/dates_milk.png';
import dryFruitsMilk from '../assets/dry_fruits_milk.png';
import figMilk from '../assets/fig_milk.png';
import fruitNutMilk from '../assets/fruit_nut_milk.png';
import guavaMilk from '../assets/guava_milk.png';
import oreoMilk from '../assets/oreo_milk.png';
import passionFruitMilk from '../assets/passion_fruit_milk.png';
import pineappleMilk from '../assets/pineapple_milk.png';
import pistaMilk from '../assets/pista_milk.png';
import strawberryMilk from '../assets/strawberry_milk.png';
import watermelonMilk from '../assets/watermelon_milk.png';

// Outlet Image Imports
import perinthalmannaImg from '../assets/outlets/perinthalmanna.png';
import ottappalamImg from '../assets/outlets/ottappalam.jpg';
import edappalImg from '../assets/outlets/edappal.jpg';
import manjeriImg from '../assets/outlets/manjeri.jpg';
import kottakkalImg from '../assets/outlets/kottakkal.jpg';
import palakkadImg from '../assets/outlets/palakkad.jpg';
import pattambiImg from '../assets/outlets/pattambi.jpg';
import tirurImg from '../assets/outlets/tirur.jpg';
import coimbatoreImg from '../assets/outlets/coimbatore.jpg';
import dubaiImg from '../assets/outlets/dubai.jpg';
import calicutImg from '../assets/outlets/calicut.jpg';
import malappuramImg from '../assets/outlets/malappuram.jpg';
import mannarkadImg from '../assets/outlets/mannarkad.jpg';

export const PRODUCTS_DATA: Product[] = [
  // Supreme Avil Milks
  {
    id: 's1',
    name: 'Fruit Nut Avil Milk',
    category: 'supreme',
    description: 'Wholesome layers of fresh cut fruits, dry fruits, roasted peanuts, and custom ice cream scoop.',
    image: fruitNutMilk
  },
  {
    id: 's2',
    name: 'Choco Nut Avil Milk',
    category: 'supreme',
    description: 'A decadent layer of rich dark cocoa powder blend, loaded with chocolate syrup, chips, and nuts.',
    image: chocolateNutMilk
  },
  {
    id: 's3',
    name: 'Oreo Avil Milk',
    category: 'supreme',
    description: 'Creamy milk layered with crunchy Oreo crumbles, chocolate drizzle, and loaded nut flakes.',
    image: oreoMilk
  },
  {
    id: 's4',
    name: 'Butterscotch Avil Milk',
    category: 'supreme',
    description: 'Delicious butterscotch sauce blend with caramelized crunchies, roasted cashews, and ice cream scoop.',
    image: butterscotchMilk
  },
  {
    id: 's5',
    name: 'Strawberry Avil Milk',
    category: 'supreme',
    description: 'Sun-kissed fresh strawberry pulp blended with creamy milk, banana mash, and double roasted flakes.',
    image: strawberryMilk
  },
  {
    id: 's6',
    name: 'Passion Fruit Avil Milk',
    category: 'supreme',
    description: 'A tang-and-sweet tropical splash of fresh passion fruit pulp, layered with ice cream and flakes.',
    image: passionFruitMilk
  },
  {
    id: 's7',
    name: 'Pista Avil Milk',
    category: 'supreme',
    description: 'Rich extract of green pistachios mixed with almond toppings, roasted flakes, and banana base.',
    image: pistaMilk
  },

  // Premium Avil Milks
  {
    id: 'p1',
    name: 'Badam Avil Milk',
    category: 'premium',
    description: 'Wholesome premium almonds paste layer, loaded with sliced almonds and peanut crunches.',
    image: almondMilk
  },
  {
    id: 'p2',
    name: 'Dates Avil Milk',
    category: 'premium',
    description: 'Standardized blend of rich black Arabian dates, roasted cashews, banana, and chilled milk.',
    image: datesMilk
  },
  {
    id: 'p3',
    name: 'Apricot Avil Milk',
    category: 'premium',
    description: 'Imported dried apricots blended into soft banana mash, topped with crispy double flakes.',
    image: apricotMilk
  },
  {
    id: 'p4',
    name: 'Fig Avil Milk',
    category: 'premium',
    description: 'Creamy milk layered with wholesome dried figs, pure organic honey, and double nuts.',
    image: figMilk
  },
  {
    id: 'p5',
    name: 'Chikku Avil Milk',
    category: 'premium',
    description: 'Authentic sweet sapota fruit blend with banana base, fresh milk, and rich peanut toppings.',
    image: chikkuMilk
  },
  {
    id: 'p6',
    name: 'Dry Fruits Avil Milk',
    category: 'premium',
    description: 'Packed with cashew nuts, almonds, dark raisins, and cherry chunks, offering high protein.',
    image: dryFruitsMilk
  },
  {
    id: 'p7',
    name: 'Apple Avil Milk',
    category: 'premium',
    description: 'Fresh pulped red apples blended with creamy milk and crispy double-roasted flakes.',
    image: appleMilk
  },
  {
    id: 'p8',
    name: 'Pineapple Avil Milk',
    category: 'premium',
    description: 'A tangy kick of fresh pineapple cubes layered with cold milk and sweet banana mash.',
    image: pineappleMilk
  },
  {
    id: 'p9',
    name: 'Guava Avil Milk',
    category: 'premium',
    description: 'Pink guava pulpy puree mixed with sweet banana and loaded dry-roasted nuts.',
    image: guavaMilk
  },
  {
    id: 'p10',
    name: 'Watermelon Avil Milk',
    category: 'premium',
    description: 'Cooling fresh watermelon juice splash blended with roasted flakes and peanuts.',
    image: watermelonMilk
  }
];

export const OUTLETS_DATA: Outlet[] = [
  {
    id: 'o1',
    name: 'Mouzy Perinthalmanna',
    address: 'Near Tharayil Bus stand, Perinthalmanna, Malappuram (Dis)',
    phone: '+91 81578 61050',
    mapLink: 'https://maps.app.goo.gl/2myRe4LKgtdnhdEz5?g_st=iw',
    image: perinthalmannaImg
  },
  {
    id: 'o2',
    name: 'Mouzy Ottappalam',
    address: 'Near Sangamam Auditorium, East Ottappalam',
    phone: '+91 95390 05900',
    mapLink: 'https://maps.app.goo.gl/qvivBtoqgWnRaspe8?g_st=iw',
    image: ottappalamImg
  },
  {
    id: 'o3',
    name: 'Mouzy Edappal',
    address: 'Near Forum Mall, Edappal',
    phone: '+91 80781 55047',
    mapLink: 'https://maps.app.goo.gl/XXWCjv5L8Z7Mv4na8?g_st=iw',
    image: edappalImg
  },
  {
    id: 'o4',
    name: 'Mouzy Manjeri',
    address: 'Kacherippadi Bypass, Manjeri',
    phone: '+91 95395 77700',
    mapLink: 'https://goo.gl/maps/BDUtR9n1wYsV2vnY7',
    image: manjeriImg
  },
  {
    id: 'o5',
    name: 'Mouzy Kottakkal',
    address: 'Malappuram Road, Kottakkal',
    phone: '+91 81368 49913',
    mapLink: 'https://goo.gl/maps/rhES1qEs5gd1wufCA',
    image: kottakkalImg
  },
  {
    id: 'o6',
    name: 'Mouzy Palakkad',
    address: 'Kalmandapam Jn, Palakkad',
    phone: '+91 81368 49913',
    mapLink: 'https://goo.gl/maps/acnPa7WCtarWhSXf6',
    image: palakkadImg
  },
  {
    id: 'o7',
    name: 'Mouzy Pattambi',
    address: 'Opp. Pisharadi Restaurant, College Stop, Pattambi',
    phone: '+91 81368 49913',
    mapLink: 'https://goo.gl/maps/z19uUoTVsjhRwm99A',
    image: pattambiImg
  },
  {
    id: 'o8',
    name: 'Mouzy Tirur',
    address: 'Ring Road, Tirur',
    phone: '+91 81368 49913',
    mapLink: 'https://goo.gl/maps/xWzDPNd6BCErkVy67',
    image: tirurImg
  },
  {
    id: 'o9',
    name: 'Mouzy Coimbatore',
    address: 'Opp. Fathima Gani Auditorium, Podanur, Coimbatore',
    phone: '+91 96550 88755',
    mapLink: 'https://maps.app.goo.gl/oa4DhUBC5HhUdTWY7?g_st=iw',
    image: coimbatoreImg
  },
  {
    id: 'o10',
    name: 'Mouzy Dubai',
    address: 'Behind Ikkayees Restaurant, Sheik Hamdan Colony, Al Karama, Dubai',
    phone: '+971 4 232 3063',
    mapLink: 'https://maps.app.goo.gl/kvsY476LQoa5UHLb9?g_st=iw',
    image: dubaiImg
  },
  {
    id: 'o11',
    name: 'Mouzy Calicut',
    address: 'Near Muslim League State office, Opp. Red Cross Road, Moonalungal Junction, Calicut Beach',
    phone: '+91 80863 77700',
    mapLink: 'https://maps.app.goo.gl/FGhWh34UsRh6YV7N7?g_st=iw',
    image: calicutImg
  },
  {
    id: 'o12',
    name: 'Mouzy Malappuram',
    address: 'Opp. Preethi Silks, Kizhakkethala, Malappuram',
    phone: '+91 90486 14655',
    mapLink: 'https://maps.app.goo.gl/nmYAkZjbV7JyGDHTA?g_st=iw',
    image: malappuramImg
  },
  {
    id: 'o13',
    name: 'Mouzy Mannarkad',
    address: 'Near Kalladi College, Mannarkad',
    phone: '+91 90721 28685',
    mapLink: 'https://maps.app.goo.gl/LXHRCoHqWNMBTbkn9?g_st=iw',
    image: mannarkadImg
  }
];
