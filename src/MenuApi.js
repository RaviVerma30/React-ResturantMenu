const menu = [
  {
    id: 1,
    image: "pic/poha.jpg",
    name: "Poha",
    category: "Breakfast",
    price: "₹40/",
    description:
      "Poha is a quick Indian breakfast made with flattened rice, onion, spices, herbs, lemon juice and peanuts. They are consider to be nutritious & wholesome as they aregot by minimally processing paddy. "
  },

  {
    id: 2,
    image: "pic/rajma.jpg",
    name: "Rajma Chawal",
    category: "Lunch",
    price: "₹100/",
    description:
      "Rajma is a vegetarian dish, originating from the Indian subcontinent, consisting of red kidney beans in a thick gravy with many Indian whole spices, and is usually served with rice. It is a part of regular diet in India, Nepal, Bangladesh and Punjab province of Pakistan. The dish developed after the red kidney bean was brought to the Indian subcontinent from Mexico. Rajma chawal is kidney beans served with boiled rice."
  },
  {
    id: 3,
    image: "pic/Samosa.jpg",
    name: "Samosa",
    category: "Snacks",
    price: "₹10/",
    description:
      "Samosa or singara is a fried Indian pastry with a savoury filling, including ingredients such as spiced potatoes, onions, and peas. It may take different forms, including triangular, cone, or half-moon shapes, depending on the region. Samosas are often accompanied by chutney, and have origins in medieval times or earlier. "
  },
  {
    id: 4,
    image: "pic/chole-kulcha.jpg",
    name: "Chole Kulcha",
    category: "Lunch",
    price: "₹50/",
    description:
      "A traditional Punjabi recipe, Chole Kulche is made from maida (white refined flour) and cooked in a tandoor. The Kulche is stuffed with potatoes, cottage cheese, pomegranate seeds and spices. Generously glazed with a dollop of butter, it is served with chole – the spicy chickpea curry. "
  },
  {
    id: 5,
    image: "pic/pizza.jpg",
    name: "Pizza",
    category: "Snacks",
    price: "₹120/",
    description:
      "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as various types of sausage, anchovies, mushrooms, onions, olives, vegetables, meat, ham, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven. "
  },
  {
    id: 6,
    image: "pic/panner.jpg",
    name: "Panner Butter Masala",
    category: "Dinner",
    price: "₹180/",
    description:
      " Paneer Butter Masala is a preparation of paneer, native to the Indian subcontinent, consisting of a thick gravy of cream, butter, tomatoes and Indian spices. "
  },
  {
    id: 7,
    image: "pic/kaju-katli.jpg",
    name: "Kaju Katli",
    category: "Sweets",
    price: "₹1200/kg",
    description:
      "Kaju katli (literally cashew slice), also known as kaju barfi, is an Indian dessert similar to a barfi. Kaju means cashew; barfi is often made by thickening milk with sugar and other ingredients (such as dry fruits and mild spices). Kesar kaju katli includes saffron. "
  },
  {
    id: 8,
    image: "pic/makkirotisaag.jpg",
    name: "Makke Ki Roti Chana Saag",
    category: "Lunch",
    price: "₹100/",
    description:
      "The dish is regarded as the traditional way to prepare saag and is usually served with Makki ki roti or Bajra ki roti or even wheat roti. It can be topped with either makkhan (butter) or more traditionally with ghee (clarified butter). Some spinach (Palak) may be added to enhance colour and thicken the dish, though this may alter the flavour. "
  },
  {
    id: 9,
    image: "pic/mushroom.jpg",
    name: "Matar Mushroom with Naan roti",
    category: "Dinner",
    price: "₹150/",
    description:
      "Matar Mushrroom is one pot curried side dish made with mushroom, green peas, onion tomatos, spices and herbs.  "
  },
  {
    id: 10,
    image: "pic/Khichdi.jpg",
    name: "Khichdi",
    category: "Lunch",
    price: "₹70/",
    description:
      "Khichdi is the national and traditional dish of India, made with rice, pulses and vegitables, served with lassi or yogurt "
  },
  {
    id: 11,
    image: "pic/Omelette.jpg",
    name: "Omelette",
    category: "Breakfast",
    price: "₹25/",
    description:
      "An omelette (also spelled omelet) is a dish made from beaten eggs, fried with butter or oil in a frying pan ("
  },
  {
    id: 12,
    image: "pic/chole-bhature.jpg",
    name: "Chole Bhature",
    category: "Lunch",
    price: "₹50/",
    description:
      "It is a combination of chana masala (spicy white chickpeas) and bhatura, a deep-fried bread made from maida. Although it is known as a typical Punjabi dish, It is originally a culinary dish of Delhi and Uttar Pradesh. "
  },
  {
    id: 13,
    image: "pic/gulab-jamun.jpg",
    name: "Gulab Jamun",
    category: "Sweets",
    price: "₹20/",
    description:
      "Gulab jamun is a beloved Indian dessert consisting of fried balls of a dough made from milk solids and semolina, soaked with an aromatic syrup spiced with green cardamom, rose water, saffron. "
  },
  {
    id: 14,
    image: "pic/idli.jpg",
    name: "Idli Shambhar",
    category: "Breakfast",
    price: "₹50/",
    description:
      "Idli sambhar is a common food in South India. It is a delicacy made by steaming a batter consisting of fermented black lentils and rice. Sambar is a lentil based vegetable stew or chowder based on a broth made with tamarind popular in South Indian and Sri Lankan Tamil cuisines adapted in each to its taste and environment. It is also served with coconut chutney. "
  },
  {
    id: 15,
    image: "pic/maggi.jpg",
    name: "Maggi",
    category: "Snacks",
    price: "₹25/",
    description:
      "Maggi noodles are dried noodles fused with oil, and sold with a packet of flavorings. These noodles are usually eaten after being cooked in boiling water for 3 to 5 minutes or eaten straight from the packet "
  },
  {
    id: 16,
    image: "pic/masala-oats.jpg",
    name: "Masala Oats",
    category: "Breakfast",
    price: "₹50/",
    description:
      "Masala Oats brings to you a range of delightful flavours making for a perfect evening snack. Made with wholegrain oats, real vegetables & a tasty mix of authentic desi spices "
  },
  {
    id: 17,
    image: "pic/non-veg-thali.png",
    name: "Non-Veg Thali",
    category: "Dinner",
    price: "₹300/",
    description:
      "A typical no veg meal includes meat, chicken or fish in it along with roti, salad and yogurt. "
  },
  {
    id: 18,
    image: "pic/plain-dosa.jpg",
    name: "Dosa",
    category: "Lunch",
    price: "₹70/",
    description:
      "Dosa are made up of fermented rice and urad dal better. They are cooked on flat pan. Thin flat layer creps."
  },
  {
    id: 19,
    image: "pic/puri_sabji.jpg",
    name: "Puri Sabji",
    category: "Lunch",
    price: "₹50/",
    description:
      "Puri Sabji is Indian traditional dish served with deep fried puri, coriander chutney, potato sabji, red onion and pickle "
  },
  {
    id: 20,
    image: "pic/rasmalai.jpg",
    name: "Rasmalai",
    category: "Sweets",
    price: "₹30/",
    description:
      "Rasmalai consists of flattened balls of chhena soaked in malai (clotted cream) flavoured with cardamom."
  },
  {
    id: 21,
    image: "pic/sandwich.jpg",
    name: "Sandwich",
    category: "Breakfast",
    price: "₹40/",
    description:
      "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type"
  },
  {
    id: 22,
    image: "pic/veg_thali.jpg",
    name: "Veg Thali",
    category: "Lunch",
    price: "₹250/",
    description:
      "Veg thali is a platter that is made up of several diferent dishesh like panner masala, naan, raita, jeera rice, papad, pickle, sweets and many more. "
  },
  {
    id: 23,
    image: "pic/pakoda.jpg",
    name: "Pakora",
    category: "Snacks",
    price: "₹40/",
    description:
      "Pakora is spiced fritter made of potatoes and onions coated in seasoned gram flour better and deep fried. "
  },
  {
    id: 24,
    image: "pic/jalebi.jpg",
    name: "Jalebi",
    category: "Sweets",
    price: "₹200/kg",
    description:
      "Jalebis are Indian desserts made by deep-frying a wheat flour (maida flour) batter in pretzel or circular shapes, which are then soaked in sugar syrup. "
  },
  {
    id: 25,
    image: "pic/veg-biryani.jpg",
    name: "Veg Biryani",
    category: "Dinner",
    price: "₹150/",
    description:
      "Vegetable biryani is an aromatic rice dish made with basmati rice, mix veggies, herbs & biryani spices."
  },
  {
    id: 26,
    image: "pic/Chicken-Biryani.jpg",
    name: "Chicken Biryani",
    category: "Dinner",
    price: "₹200/",
    description:
      "Chicken biryani is a spiced mix of meat and rice, traditionally cooked over an open fire in a leather pot. It is combined in different ways with a variety of components to create a number of highly tasty and unique flavor combinations"
  }
];
export default menu;
