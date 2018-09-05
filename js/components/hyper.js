webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


var reviewLeftClicked = function reviewLeftClicked(state, actions) {
  return {
    reviewStatus: {
      currentReview: state.globalState.reviewStatus.currentReview -= 1
    }

  };
};

var reviewRightClicked = function reviewRightClicked(state, actions) {
  return {
    reviewStatus: {
      currentReview: state.globalState.reviewStatus.currentReview += 1
    }

  };
};

var actions = exports.actions = {
  reviewLeftClicked: reviewLeftClicked,
  reviewRightClicked: reviewRightClicked
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(6);

var _Header2 = _interopRequireDefault(_Header);

var _TopImg = __webpack_require__(11);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _OurStory = __webpack_require__(7);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(10);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuote = __webpack_require__(8);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _Reviews = __webpack_require__(9);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _ContactUs = __webpack_require__(4);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Footer = __webpack_require__(5);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(
      'div',
      null,
      (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
      (0, _hyperapp.h)(_TopImg2.default, { state: state, actions: actions }),
      (0, _hyperapp.h)(_OurStory2.default, { state: state, actions: actions }),
      (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions }),
      (0, _hyperapp.h)(_RandomQuote2.default, { state: state, actions: actions }),
      (0, _hyperapp.h)(_Reviews2.default, { state: state, actions: actions }),
      (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions }),
      (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions })
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var companyInfo = {
  title: 'New York Vegan Cuisine',
  phone: '718 - 897 - 4859',
  location: 'New York, New York'
};

var specialMenuData = [{
  title: 'Super BBQ Grill No Smoke',
  description: 'Fried eggs, Steak, baked potato or french fries',
  price: 25
}, {
  title: 'Potato Salad',
  description: 'Fried eggs, Steak, baked potato or french fries',
  price: 22
}, {
  title: 'Curry Chick Peas with Mixed Vegetables',
  description: 'Fried eggs, Steak, baked potato or french fries',
  price: 21
}];

var reviewsData = [{
  company: 'The Food Network',
  author: 'Aaron Oquendo',
  authorInfo: 'Winner Of Master Chef 2018',
  highlight: '"Best restaurant in the N.Y area!"',
  review: 'Lorem ipsum dolor amet biodiesel umami flexitarian banh mi 8-bit asymmetrical lo-fi. Glossier marfa freegan edison bulb bushwick hexagon.'
}, {
  company: 'HBO',
  author: 'Aaron Oquendo',
  authorInfo: 'Winner Of Master Chef 2018',
  highlight: '"Best restaurant in the N.Y area BOY!"',
  review: 'Lorem ipsum dolor amet biodiesel umami flexitarian banh mi 8-bit asymmetrical lo-fi. Glossier marfa freegan edison bulb bushwick hexagon.'
}, {
  company: 'New York Times',
  author: 'Aaron Oquendo',
  authorInfo: 'Winner Of Master Chef 2018',
  highlight: '"Best restaurant in the N.Y area!"',
  review: 'Lorem ipsum dolor amet biodiesel umami flexitarian banh mi 8-bit asymmetrical lo-fi. Glossier marfa freegan edison bulb bushwick hexagon.'
}, {
  company: 'HealthFood.com',
  author: 'Aaron Oquendo',
  authorInfo: 'Winner Of Master Chef 2018',
  highlight: '"Best restaurant in the N.Y area!"',
  review: 'Lorem ipsum dolor amet biodiesel umami flexitarian banh mi 8-bit asymmetrical lo-fi. Glossier marfa freegan edison bulb bushwick hexagon.'
}, {
  company: 'CWB',
  author: 'Aaron Oquendo',
  authorInfo: 'Winner Of Master Chef 2018',
  highlight: '"Best restaurant in the N.Y area!"',
  review: 'Lorem ipsum dolor amet biodiesel umami flexitarian banh mi 8-bit asymmetrical lo-fi. Glossier marfa freegan edison bulb bushwick hexagon.'
}];

var randomQuoteData = [{
  author: 'Johnny',
  quote: '"Good Painting Is Like Good Cooking; It Can Be Tasted, But Not Explained"'
}, {
  author: 'Jack',
  quote: '"Best Vegan Food"'
}, {
  author: 'Paul',
  quote: '"Youll never know how good it is until you try it"'
}];

var globalState = exports.globalState = {
  count: 0,
  companyInfo: companyInfo,
  specialMenuData: specialMenuData,
  reviewsData: reviewsData,
  randomQuoteData: randomQuoteData,
  reviewStatus: {
    currentReview: 0
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactUs;

var _hyperapp = __webpack_require__(0);

function ContactUs(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "ContactUs", "class": "texturebg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Contact Us"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Delicious Flavor of Autumn"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "box" },
        (0, _hyperapp.h)(
          "div",
          { "class": "row" },
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "div",
              { "class": "title" },
              state.globalState.companyInfo.location
            ),
            (0, _hyperapp.h)(
              "h6",
              { "class": "address" },
              "435 Main Street ",
              (0, _hyperapp.h)("br", null),
              "New York, New York 10314"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              (0, _hyperapp.h)(
                "strong",
                null,
                "Email: "
              ),
              (0, _hyperapp.h)(
                "a",
                { href: "mailto:info@primerestaurant.com" },
                "info@primerestaurant.com"
              )
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "h6",
              null,
              "Phone:"
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "title" },
              "718-980-7435"
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "Lunch Service:"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "Friday, Saturday and Sunday ",
              (0, _hyperapp.h)("br", null),
              "from 12pm - 1:30pm"
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "Dinner Service:"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "Daily Bookings from 6pm - 9:30pm"
            )
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _hyperapp = __webpack_require__(0);

function Footer(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "footer",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "nav",
        { "class": "menu" },
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Our Story"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Special Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Contact Us"
        )
      ),
      (0, _hyperapp.h)(
        "ul",
        { "class": "social-media" },
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.facebook.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fab fa-facebook-square" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.facebook.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fab fa-twitter" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.facebook.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fab fa-google-plus-g" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.facebook.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fab fa-youtube" })
          )
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "copyright" },
        "\xA9 Copyright 2018"
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;


  return (0, _hyperapp.h)(
    "header",
    { id: "myHeader", "class": "header" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "header-container" },
        (0, _hyperapp.h)(
          "div",
          { "class": "logo" },
          "NYVC"
        ),
        (0, _hyperapp.h)(
          "nav",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            "Our Story"
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            "Reviews"
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            "Special Menu"
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            "Reservations"
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "OurStory" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "comp-title" },
            "Our Story"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "Cooking is the art of adjustment"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Lorem ipsum dolor amet portland viral paleo, meditation hexagon tacos austin chicharrones vaporware distillery lumbersexual chartreuse raclette. Helvetica taiyaki crucifix air plant. Helvetica DIY tattooed man bun taiyaki, bushwick meggings 90's before they sold out hoodie."
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "quote" },
            "\"The best vegan food in the town\" - ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Aaron Oquendo"
            )
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#", "class": "reserve-btn" },
            "Reserve"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)("div", { "class": "video-img" })
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RandomQuote;

var _hyperapp = __webpack_require__(0);

function RandomQuote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'section',
    { id: 'RandomQuote', style: {
        backgroundImage: 'linear-gradient(135deg,rgba(0,0,0,.2) 0,#000 100%) , url("https://www.fishmongermedia.com/wp-content/uploads/2017/01/cooking.png")'
      } },
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'h1',
        null,
        '"Good painting is like good cooking; it can be tasted, but not explained"'
      ),
      (0, _hyperapp.h)(
        'span',
        { 'class': 'author' },
        '- Aaron Oquendo'
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;


  var currentReview = function currentReview() {
    return (0, _hyperapp.h)(
      "div",
      null,
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Reviews"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        state.globalState.reviewsData[state.globalState.reviewStatus.currentReview].company
      ),
      (0, _hyperapp.h)(
        "h4",
        null,
        state.globalState.reviewsData[state.globalState.reviewStatus.currentReview].highlight
      ),
      (0, _hyperapp.h)(
        "p",
        null,
        state.globalState.reviewsData[state.globalState.reviewStatus.currentReview].review
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "author" },
        (0, _hyperapp.h)(
          "strong",
          null,
          state.globalState.reviewsData[state.globalState.reviewStatus.currentReview].author
        ),
        " - ",
        (0, _hyperapp.h)(
          "em",
          null,
          state.globalState.reviewsData[state.globalState.reviewStatus.currentReview].authorInfo
        )
      )
    );
  };
  var leftClickBTN = function leftClickBTN() {
    if (state.globalState.reviewStatus.currentReview == 0) {
      console.log('do nothing');
    } else {
      actions.reviewLeftClicked();
    }
  };
  var rightClickBTN = function rightClickBTN() {
    if (state.globalState.reviewStatus.currentReview == state.globalState.reviewsData.length - 1) {
      console.log('do nothing');
    } else {
      actions.reviewRightClicked();
    }
  };
  return (0, _hyperapp.h)(
    "section",
    { id: "Reviews" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-8" },
          (0, _hyperapp.h)(
            "div",
            { "class": "side-img" },
            (0, _hyperapp.h)("img", { src: "https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/85/121/skd181312sdc.jpg" })
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          currentReview(),
          (0, _hyperapp.h)(
            "div",
            { "class": "arrows" },
            (0, _hyperapp.h)("i", { onclick: leftClickBTN,
              "class": "fas fa-arrow-left " + (state.globalState.reviewStatus.currentReview > 0 ? 'ready' : '') }),
            (0, _hyperapp.h)("i", { onclick: rightClickBTN,
              "class": "fas fa-arrow-right " + (state.globalState.reviewStatus.currentReview == state.globalState.reviewsData.length - 1 ? '' : 'ready') }),
            console.log(state.globalState.reviewStatus.currentReview)
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;


  var loopMenu = function loopMenu() {
    return state.globalState.specialMenuData.map(function (item) {
      console.log(item.title);
      return (0, _hyperapp.h)(
        "div",
        { "class": "col-md-4" },
        (0, _hyperapp.h)(
          "div",
          { "class": "box" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box-img" },
            (0, _hyperapp.h)(
              "div",
              { "class": "price-circle" },
              "$",
              item.price
            )
          ),
          (0, _hyperapp.h)(
            "span",
            { "class": "title" },
            item.title
          ),
          (0, _hyperapp.h)(
            "p",
            { "class": "details" },
            item.description
          )
        )
      );
    });
  };

  return (0, _hyperapp.h)(
    "section",
    { id: "SpecialMenu", "class": "texturebg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Special Menu"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Delicious Flavor of Autumn"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "row boxes" },
        loopMenu()
      ),
      (0, _hyperapp.h)(
        "a",
        { href: "#", "class": "link" },
        "View Full Menu"
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "TopImg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "title" },
        (0, _hyperapp.h)(
          "h5",
          null,
          "Welcome to"
        ),
        (0, _hyperapp.h)(
          "h1",
          null,
          state.globalState.companyInfo.title
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "contact-info" },
        (0, _hyperapp.h)(
          "div",
          { "class": "container" },
          (0, _hyperapp.h)(
            "div",
            { "class": "booking" },
            "Book Table Directly"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "718 - 897 - 4859"
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "hours" },
            "Opening Hours ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Mon - Fri"
            ),
            " 9am - 9pm ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Weekends"
            ),
            " 9am - 11pm"
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _actions = __webpack_require__(1);

var _globalState = __webpack_require__(3);

var _App = __webpack_require__(2);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: { globalState: _globalState.globalState },
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    },
    load: function load(state, actions) {}
  }
});

/***/ })
],[12]);