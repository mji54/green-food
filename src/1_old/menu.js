// iterate through BOTH keywords and description
// if "cheese" is in the list, then check for "optCheese"
export const Menu = [
  {
    soups: [
      {
        id: 1,
        title: 'Soup of the Day Cup',
        description: 'Ask your server about our soup special!',
        price: 5.99,
        isOrganic: false,
        isVegan: false,
        keywords: [
          'soup',
          'soup of the day cup',
          'day',
          'cup',
          'day cup',
          'the day cup',
        ]
      },
      {
        id: 2,
        title: 'Soup of the Day Bowl',
        description: 'Ask your server about our soup special!',
        price: 6.99,
        isOrganic: true,
        isVegan: true,
        keywords: [
          'organic',
          'vegan',
          'vegans',
          'soup',
          'soup of the day bowl',
          'day',
          'bowl',
          'day bowl',
          'the day bowl',
        ]
      }
    ]
  },
  {
    salads: [
      {
        id: 3,
        title: 'Greens with tandoori spiced chickpeas',
        description: 'Romain lettuce, kale, collards, crispy tandoori masala spiced chickpeas & creamy lemon tahini dressing.',
        price: 15.99,
        optCheese: true,
        isOrganic: true,
        isVegan: true,
        isGlutenFree: true,
        keywords: [
          'gluten-free',
          'gluten free',
          'no gluten',
          'salad',
          'greens with tandoori spiced chickpeas',
          'tandoori spiced chickpeas',
          'spcied chickpeas',
          'greens',
          'tandoori',
          'spiced',
          'chickpeas',
          'vegan',
          'vegans',
          'organic',
        ]

      },
      {
        id: 4,
        title: 'Harvest Kale Salad',
        description: 'Kale, Collards, roasted squash, roasted carrots, pumpkin seeds, red onions and pomegranate vinaigrette dressing.',
        price: 15.99,
        optCheese: true,
        isOrganic: true,
        isVegan: true,
        isGlutenFree: true,
        keywords: [
          'gluten-free',
          'gluten free',
          'no gluten',
          'vegan',
          'vegans',
          'organic',
          'harvest kale salad',
          'salad',
          'kale salad'
        ]
      }
    ],
    cheese: [
      'Vegan Cheese',
      'No Cheese',
      'Coconut cheese',
      'House Made Cashew Blue Cheese'
    ]
  },
  {
    starters: [
      {
        id: 5,
        title: 'Cauliflower Pops',
        description: 'Your choice of Buffalo or Kung Poa. Served over mesclun greens (contains nuts).',
        price: 9.99,
        optCheese: false,
        isOrganic: true,
        isVegan: true,
        isGlutenFree: true,
        keywords: [
          'gluten-free',
          'gluten free',
          'no gluten',
          'organic',
          'vegan',
          'vegans',
          'cauliflower',
          'cauliflower pops',
          'pops',
        ]
      },
      {
        id: 6,
        title: 'Loaded MexiCali Fries',
        description: 'Sweet potato fries, yukon fries, topped with cashew chipotle drizzle, guacamole, pico de gallo, vegan cheese (contains nuts)',
        price: 9.99,
        optCheese: true,
        isOrganic: true,
        isVegan: true,
        isGlutenFree: true,
        keywords: [
          'gluten-free',
          'gluten free',
          'no gluten',
          'organic',
          'vegan',
          'vegans',
          'loaded mexicali fries',
          'mexicali fries',
          'loaded mexicali',
          'fries',
        ],
      },
      {
        id: 7,
        title: 'Kimchi Fries',
        description: 'sweet fries, yukon fries, topped with home made kimchi, cashew chipotle drizzle, sriracha, hemp seeds, sesame seeds, and vegan cheese',
        price: 9.99,
        optCheese: true,
        isOrganic: true,
        isVegan: true,
        isGlutenFree: true,
        keywords: [
          'gluten-free',
          'gluten free',
          'no gluten',
          'organic',
          'vegan',
          'vegans',
          'kimchi fries',
          'kimchi',
          'fries',
        ]
      },
    ],
    cheese: [
      'Vegan Cheese',
      'No Cheese',
      'Coconut cheese',
      'House Made Cashew Blue Cheese'
    ]
  },
  {
    bowls: [
      {
        id: 8,
        title: 'Green Earth Bowl',
        description: 'Pesto brown rice, crispy kale, blanched broccoli, avocado, & tofu scramble (vegan, gluten free)',
        price: 16.99,
        isOrganic: true,
        isVegan: true,
        isGlutenFree: false,
        keywords: [
          'vegans',
          'vegan',
          'organic',
          'bowl',
          'green earth bowl',
          'green earth',
          'green',
        ]
      },
      {
        id: 9,
        title: 'Tofu Masala Curry Bowl',
        description: 'Carrots, cauliflower, broccoli, kale, collards, peas, onions, & tofu slow cooked in a coconut masala curry sauce. Topped with brown rice (vegan, gluten free)',
        price: 14.99,
        isOrganic: true,
        isVegan: true,
        isGlutenFree: false,
        keywords: [
          'vegans',
          'vegan',
          'organic',
          'bowl',
          'tofu',
          'masala',
          'curry',
          'curry bowl',
          'tofu masala',
        ]
      },
      {
        id: 10,
        title: 'Veggie Squash Bowl',
        description: 'Your choice of burger patty, squash, carrots, avocado, cauliflower, broccoli, sautéed kale, collards, caramelized onions, cashew cream drizzle (vegan, contains nuts, GF)',
        price: 16.99,
        isOrganic: true,
        isVegan: true,
        isGlutenFree: true,
        keywords: [
          'gluten-free',
          'gluten free',
          'no gluten',
          'vegans',
          'vegan',
          'organic',
          'bowl',
          'veggie',
          'squash',
          'veggie bowl',
          'squash bowl',
        ]
      },
      {
        id: 11,
        title: 'Kung Poa Bowl',
        description: 'Yellow turmeric rice, mushrooms, scallions, broccoli, carrots, and onions, topped with crispy Kung pao cauliflower & sesame seeds',
        price: 15.99,
        isOrganic: false,
        isVegan: false,
        isGlutenFree: false,
        keywords: [
          'bowl',
          'kung poa',
          'poa bowl',
          'kung poa bowl',

        ]
      },
    ]
  },
  {
    burgers: [
      {
        id: 12,
        title: 'Green Machine Burger',
        description: 'Roasted mushroom patty, served on a vegan bun with pesto, vegan cheese, caramelized onions, guacamole, lettuce, tomato, & sprouts. Served with kale slaw and a pickle.',
        price: 13.99,
        optCheese: true,
        isOrganic: true,
        isVegan: true,
        isGlutenFree: false,
        keywords: [
          'vegan',
          'vegans',
          'organic',
          'green machine burger',
          'burger',
          'green burger',
          'green machine',
        ]
      },
      {
        id: 13,
        title: 'Original OG Burger',
        description: "Original Organic Grill's Veggie Patty served on a vegan bun topped with cashew sour cream & spicy buffalo sauce, cashew blue cheese, lettuce, tomato & sprouts. Served with kale slaw and a pickle. (vegan, contains nuts). Please specify baked or pan fried.",
        price: 12.99,
        optCheese: true,
        isOrganic: true,
        isVegan: true,
        isGlutenFree: false,
        keywords: [
          'vegan',
          'vegans',
          'organic',
          'original og burger',
          'organic grill',
          'organic grill burger',
          'grill burger',
          'grilled burger',
          'organic burger',
        ]
      },
      {
        id: 14,
        title: 'Spicy Black Bean Burger',
        description: 'Black bean patty, vegan bun, aquafaba sriracha mayo, caramelized onions, pico de gallo, avocado, lettuce, tomato, & sprouts (vegan). Served with pickle and Kale Slaw on the side. Please specify baked or pan fried.',
        price: 12.99,
        optCheese: false,
        isOrganic: true,
        isVegan: true,
        isGlutenFree: false,
        keywords: [
          'vegan',
          'vegans',
          'organic',
          'spicy black bean burger',
          'spicy burger',
          'black bean burger',
          'black bean',
          'spicy black bean',
          'burger',
        ]
      },
      {
        id: 15,
        title: 'BYOB Burger',
        description: 'Build your own burger! Please specify baked, grilled or pan fried patty. Served with kale slaw and a pickle.',
        price: 14.99,
        optCheese: false,
        isOrganic: true,
        isVegan: true,
        isGlutenFree: false,
        keywords: [
          'vegan',
          'vegans',
          'organic',
          'byob burger',
          'build your own burger',
          'build your own',
          'own burger',
          'customized burger',
          'burger',
        ]
      },
      {
        id: 16,
        title: 'Double Decker Burger',
        description: 'Two burger patties of your choice, cweet chili aquafaba mayo, pico de gallo, smoked tempeh bacon, vegan cheese, lettuce, tomato & sprouts. Served with pickle and coleslaw on the side.',
        price: 17.99,
        optCheese: false,
        isOrganic: true,
        isVegan: true,
        isGlutenFree: false,
        keywords: [
          'vegan',
          'vegans',
          'organic',
          'double decker burger',
          'double decker',
          'burger',

        ]
      },
      {
        id: 17,
        title: 'Stuffed Falafel Burger',
        description: 'Red Pepper cheese stuffed falafel patty, sriracha mayo, lettuce, pickle, sprouts, on a potato dill bun. Served with Kale slaw and and more pickle.',
        price: 14.99,
        optCheese: false,
        isOrganic: true,
        isVegan: true,
        isGlutenFree: false,
        keywords: [
          'vegan',
          'vegans',
          'organic',
          'stuffed falafel burger',
          'stuffed burger',
          'falafel burger',
          'burger',
        ]
      },
    ],
    cheese: [
      'Vegan Cheese',
      'No Cheese',
      'Coconut cheese',
      'House Made Cashew Blue Cheese'
    ],
  },
  {
    sandwiches: [
      {
        id: 18,
        title: '"The Triple J" Pulled Jackruit Sandwich',
        description: 'Named by legendary John Joseph, a lead singer of the Cro-Mags, vegan Ironman triathlete, and author of "Meat is for Pussies. Jackfruit roasted in a bourbon beet BBQ sauce, topped with slaw, aquafaba mayo, cilantro, and onions. Served on a vegan bun with pickle and kale slaw.',
        price: 13.99,
        optCheese: false,
        isOrganic: true,
        isVegan: true,
        isGlutenFree: false,
        keywords: [
          'vegan',
          'vegans',
          'organic',
          'the triple j',
          'the triple j pulled jackruit sandwich',
          'jackruit sandwich',
          'pulled jackruit',
          'sandwich',
        ]
      },
      {
        id: 19,
        title: 'Cauliflower Parm Sandwich',
        description: 'Roasted cauliflower, pesto, marinara sauce, vegan cheese. Served on a vegan focaccia roll with pickle and Kale slaw on the side.',
        price: 12.99,
        optCheese: true,
        isOrganic: false,
        isVegan: false,
        isGlutenFree: false,
        keywords: [
          'cauliflower parm sandwich',
          'cauliflower',
          'parm sandwich',
          'cauliflower sandwich',
          'sandwich',
        ]
      },
      {
        id: 20,
        title: 'Green Melt Sandwich',
        description: 'Tempeh bacon, kale, avocado, pesto, caramelized onions, tomato, and melted vegan cheese pressed on sourdough bread and served with kale slaw and a pickle.',
        price: 12.99,
        optCheese: true,
        isOrganic: true,
        isVegan: true,
        isGlutenFree: false,
        keywords: [
          'green melt sandwich',
          'sandwich',
          'vegan',
          'vegans',
          'organic',
          'green sandwich',
        ]
      },
      {
        id: 21,
        title: 'OGhicken Sandwich',
        description: 'Deep-fried cornmeal crusted oyster mushrooms, aquafaba mayo, lettuce, tomatoes, pickles on a shallot focaccia roll. Served with a pickle and kale slaw on the side.',
        price: 14.99,
        optCheese: false,
        isOrganic: false,
        isVegan: true,
        isGlutenFree: false,
        keywords: [
          'vegan',
          'vegans',
          'oghicken sandwich',
          'sandwich'
        ]
      },
    ],
    cheese: [
      'Vegan Cheese',
      'No Cheese',
      'Coconut cheese',
      'House Made Cashew Blue Cheese'
    ],
  },
  {
    entrees: [
      {
        id: 22,
        title: 'Organic Grill Pierogies',
        description: 'Spelt flour peirogies filled seasonal veggie fillings. Served over sautéed kale & cashew cream drizzle (contains nut, vegan). Please specify boiled or pan fried.',
        price: 14.99,
        isOrganic: true,
        isVegan: true,
        isGlutenFree: false,
        keywords: [
          'vegan',
          'vegans',
          'organic',
          'organic grill pierogies',
          'grill pierogies',
          'organic pierogies',
          'pierogies',
        ]
      },
      {
        id: 23,
        title: 'Paradase Casserole',
        description: 'Layers of sweet potato, black beans & polenta, served with steamed greens and mushroom gravy. (Vegan, GF)',
        price: 15.99,
        isOrganic: true,
        isVegan: true,
        isGlutenFree: false,
        keywords: [
          'vegan',
          'vegans',
          'organic',
          'paradase casserole',
          'paradase',
          'casserole',
        ]
      },
    ]
  },
  {
    drinks: [
      {
        id: 24,
        title: 'Ever Green Smoothie',
        description: 'Spirulina, almond milk, blackberries, strawberries, fresh squeezed apple juice, maple, banana, ice, & kale',
        price: 8.99,
        isOrganic: false,
        isVegan: false,
        isGlutenFree: false,
        keywords: [
          'ever green smoothie',
          'green smoothie',
          'smoothie',
          'ever green',
        ]
      },
      {
        id: 25,
        title: 'Organic Lemonade',
        description: 'Add Essential Oils ....',
        price: 3.50,
        isOrganic: true,
        isVegan: true,
        isGlutenFree: false,
        keywords: [
          'vegan',
          'vegans',
          'organic',
          'organic lemonade',
          'lemonade',
        ]
      },
      {
        id: 26,
        title: 'Iced Tea',
        description: 'Iced Tea of the day made from the selection of our organic and fare trade loose leaf teas.',
        price: 3.50,
        isOrganic: true,
        isVegan: true,
        isGlutenFree: false,
        keywords: [
          'vegan',
          'vegans',
          'organic',
          'organic tea',
          'iced tea',
          'iced',
          'tea',

        ]
      },
      {
        id: 27,
        title: 'Espresso Smoothie',
        description: 'Double shot of Jim’s Organic Espresso, cacao powder, ice, choice of milk (almond, coconut, soy) chocolate chips, vanilla, banana, Health Tip: Almonds are often considered one of the best brain foods! Almonds are a great source of vitamin E and other antioxidants that nourish the skin and reduce signs of aging',
        price: 7.99,
        isOrganic: true,
        isVegan: true,
        isGlutenFree: true,
        keywords: [
          'vegan',
          'vegans',
          'organic',
          'espresso',
          'espresso smoothie',
          'smoothie',
          'gluten-free',
          'gluten free',
          'no gluten',
          'organic smoothie',
        ]
      },
      {
        id: 28,
        title: 'Fresh Squeezed juice',
        description: 'Mix and Match: apple, kale, carrots, celery, cucumbers, and ginger.',
        price: 8.99,
        isOrganic: true,
        isVegan: true,
        isGlutenFree: false,
        keywords: [
          'vegan',
          'vegans',
          'organic',
          'fresh juice',
          'fresh squeezed juice',
          'juice',
          'organic juice',
        ]
      },
    ]
  },
  {
    dessert: [
      {
        id: 29,
        title: 'Vegan Cherry Cheese Cake',
        description: '',
        price: 6.99,
        isOrganic: false,
        isVegan: true,
        isGlutenFree: false,
        keywords: [
          'vegan',
          'vegans',
          'vegan cherry cheese cake',
          'cheese cake',
          'vegan cheese cake',
          'cherry cheese cake',
          'vegan cake',
          'cherry cake',
          'cake',
        ]
      },
      {
        id: 30,
        title: "Vegan Cookie's & Cream Cheese Cake",
        description: '',
        price: 6.99,
        isOrganic: false,
        isVegan: true,
        isGlutenFree: false,
        keywords: [
          'vegan',
          'vegans',
          "vegan cookie's and cream cheese cake",
          'vegan cookies and cream cheese cake',
          'cream cheese cake',
          'cheese cake',
          'cake',
          'vegan cookies cheese cake',
          'vegan cookies cream cheese cake',
          'vegan cookies cake',
          'vegan cake',
          'cream cake',
          'vegan cookies',
          'cream',
          'vegan cookies cream',
        ]
      },
      {
        id: 31,
        title: 'Vegan Carrot Cake',
        description: '',
        price: 6.99,
        isOrganic: false,
        isVegan: true,
        isGlutenFree: false,
        keywords: [
          'vegan',
          'vegans',
          'vegan carrot cake',
          'cake',
          'carrot cake',
          'vegan cake',
          'carrot',
        ]
      },
    ]
  },
]
