var companyInfo = {
  title: 'New York Vegan Cuisine',
  phone: '718 - 897 - 4859',
  location: 'New York, New York'
}

var specialMenuData = [
  {
    title: 'Super BBQ Grill No Smoke',
    description: 'Fried eggs, Steak, baked potato or french fries',
    price: 25
  },
  {
    title: 'Potato Salad',
    description: 'Fried eggs, Steak, baked potato or french fries',
    price: 22
  },
  {
    title: 'Curry Chick Peas with Mixed Vegetables',
    description: 'Fried eggs, Steak, baked potato or french fries',
    price: 21
  }
]

var reviewsData = [
  {
    company: 'The Food Network',
    author: 'Aaron Oquendo',
    authorInfo: 'Winner Of Master Chef 2018',
    highlight:'"Best restaurant in the N.Y area!"',
    review: 'Lorem ipsum dolor amet biodiesel umami flexitarian banh mi 8-bit asymmetrical lo-fi. Glossier marfa freegan edison bulb bushwick hexagon.'
  },
  {
    company: 'HBO',
    author: 'Aaron Oquendo',
    authorInfo: 'Winner Of Master Chef 2018',
    highlight:'"Best restaurant in the N.Y area BOY!"',
    review: 'Lorem ipsum dolor amet biodiesel umami flexitarian banh mi 8-bit asymmetrical lo-fi. Glossier marfa freegan edison bulb bushwick hexagon.'
  },
  {
    company: 'New York Times',
    author: 'Aaron Oquendo',
    authorInfo: 'Winner Of Master Chef 2018',
    highlight:'"Best restaurant in the N.Y area!"',
    review: 'Lorem ipsum dolor amet biodiesel umami flexitarian banh mi 8-bit asymmetrical lo-fi. Glossier marfa freegan edison bulb bushwick hexagon.'
  },
  {
    company: 'HealthFood.com',
    author: 'Aaron Oquendo',
    authorInfo: 'Winner Of Master Chef 2018',
    highlight:'"Best restaurant in the N.Y area!"',
    review: 'Lorem ipsum dolor amet biodiesel umami flexitarian banh mi 8-bit asymmetrical lo-fi. Glossier marfa freegan edison bulb bushwick hexagon.'
  },
  {
    company: 'CWB',
    author: 'Aaron Oquendo',
    authorInfo: 'Winner Of Master Chef 2018',
    highlight:'"Best restaurant in the N.Y area!"',
    review: 'Lorem ipsum dolor amet biodiesel umami flexitarian banh mi 8-bit asymmetrical lo-fi. Glossier marfa freegan edison bulb bushwick hexagon.'
    }
]

var randomQuoteData = [
  {
    author: 'Johnny',
    quote: '"Good Painting Is Like Good Cooking; It Can Be Tasted, But Not Explained"'
  },
  {
    author: 'Jack',
    quote: '"Best Vegan Food"'
  },
  {
    author: 'Paul',
    quote: '"Youll never know how good it is until you try it"'
  }
]

export const globalState = {
  count: 0,
  companyInfo,
  specialMenuData,
  reviewsData,
  randomQuoteData,
  reviewStatus: {
    currentReview:0,
  }
}
