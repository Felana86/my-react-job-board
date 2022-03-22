"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = App;

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.array.is-array.js");

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@chakra-ui/react");

var _reactRouterDom = require("react-router-dom");

var _Header = _interopRequireDefault(require("../Header"));

var _Search = _interopRequireDefault(require("../Search"));

var _RegistrationForm = _interopRequireDefault(require("../Header/RegistrationForm"));

var _LogInForm = _interopRequireDefault(require("../Header/LogInForm"));

var _Footer = _interopRequireDefault(require("../Footer"));

var _Pagination = _interopRequireDefault(require("../Pagination"));

var _BackTopButton = _interopRequireDefault(require("../BackTopButton"));

var _About = _interopRequireDefault(require("../Header/About"));

var _TaglineBlock = _interopRequireDefault(require("../Header/TaglineBlock"));

var _Page = _interopRequireDefault(require("../Page404"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// == Creating the App component
function App() {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoggedIn = _useState2[0],
      setIsLoggedIn = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      jobs = _useState4[0],
      setJobs = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isAdmin = _useState6[0],
      setIsAdmin = _useState6[1]; // PAGINATION - States


  var _useState7 = (0, _react.useState)(1),
      _useState8 = _slicedToArray(_useState7, 2),
      currentPage = _useState8[0],
      setCurrentPage = _useState8[1];

  var _useState9 = (0, _react.useState)(10),
      _useState10 = _slicedToArray(_useState9, 1),
      jobsPerPage = _useState10[0];

  (0, _react.useEffect)(function () {
    fetch('http://localhost:8080/jobs/pe').then(function (data) {
      // console.log(data);
      return data.json();
    }).then(function (data) {
      // data = data.slice(0, 50)
      // console.log(data);
      setJobs(data);
    })["catch"](function (error) {
      console.log(error);
    });

    var handleIsLoggedIn = function handleIsLoggedIn(logState) {
      setIsLoggedIn(logState);
    };

    var handleIsAdmin = function handleIsAdmin(adminState) {
      setIsAdmin(adminState);
    };

    (0, _react.useEffect)(function () {
      fetch('http://18.212.203.228:8080' + '/jobs/pe').then(function (data) {
        // console.log(data);
        return data.json();
      }).then(function (data) {
        // data = data.slice(0, 100)
        // console.log(data);
        setJobs(data);
      })["catch"](function (error) {
        console.log(error);
      });
    }, []); // PAGINATION - Get current jobs

    var indexOfLastJob = currentPage * jobsPerPage;
    var indexOfFirstJob = indexOfLastJob - jobsPerPage;
    var currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob); // PAGINATION - Chnage page

    var paginate = function paginate(pageNumber) {
      return setCurrentPage(pageNumber);
    };

    return /*#__PURE__*/_react["default"].createElement(_react2.ChakraProvider, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "app"
    }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
      isLoggedIn: isLoggedIn,
      setIsLoggedIn: setIsLoggedIn,
      isAdmin: isAdmin
    }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
      exact: true,
      path: "/"
    }, /*#__PURE__*/_react["default"].createElement(_Header["default"], null), /*#__PURE__*/_react["default"].createElement(_Search["default"], {
      jobs: currentJobs
    }), /*#__PURE__*/_react["default"].createElement(_Pagination["default"], {
      jobsPerPage: jobsPerPage,
      totalJobs: jobs.length,
      paginate: paginate
    }), /*#__PURE__*/_react["default"].createElement(_Footer["default"], null), /*#__PURE__*/_react["default"].createElement(_BackTopButton["default"], null), /*#__PURE__*/_react["default"].createElement(_TaglineBlock["default"], null), /*#__PURE__*/_react["default"].createElement(_Search["default"], {
      jobs: jobs
    })), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
      path: "/register"
    }, /*#__PURE__*/_react["default"].createElement(_RegistrationForm["default"], null)), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
      exact: true,
      path: "/login"
    }, /*#__PURE__*/_react["default"].createElement(_LogInForm["default"], {
      handleIsLoggedIn: handleIsLoggedIn,
      handleIsAdmin: handleIsAdmin
    })), isAdmin && /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
      path: "/login/adminform"
    }, /*#__PURE__*/_react["default"].createElement(AdminForm, null)), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
      path: "/about"
    }, /*#__PURE__*/_react["default"].createElement(_About["default"], null)), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
      path: "*"
    }, /*#__PURE__*/_react["default"].createElement(_Page["default"], null))), /*#__PURE__*/_react["default"].createElement(_Footer["default"], null)));
  });
}
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es.array.is-array.js");

var _react = _interopRequireWildcard(require("react"));

var _fi = require("react-icons/fi");

var _react2 = require("@chakra-ui/react");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BackTopButton = function BackTopButton() {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var toggleVisible = function toggleVisible() {
    var scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  var scrollToTop = function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);
  return /*#__PURE__*/_react["default"].createElement(_react2.Button, {
    position: "fixed",
    right: "2.5%",
    bottom: "50px",
    h: "0px",
    fontSize: "3rem",
    zIndex: 1,
    color: "#0468ae",
    _focus: {
      outline: "none"
    }
  }, /*#__PURE__*/_react["default"].createElement(_fi.FiArrowUpCircle, {
    onClick: scrollToTop,
    style: {
      display: visible ? 'inline' : 'none'
    }
  }));
};

var _default = BackTopButton;
exports["default"] = _default;
"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Footer;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@chakra-ui/react");

var _fa = require("react-icons/fa");

var _icons = require("@chakra-ui/icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Footer() {
  return /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    bg: "#282C34",
    color: "white",
    height: "100%"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Container, {
    as: _react2.Stack,
    p: 5,
    direction: {
      base: 'column',
      md: 'row'
    },
    spacing: 4,
    justify: {
      base: 'center',
      md: 'space-between'
    },
    align: {
      base: 'center',
      md: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react2.Text, null, "React-jobs.fr \xA9 2021 CFAFF. Tous droits r\xE9serv\xE9s"), /*#__PURE__*/_react["default"].createElement(_react2.Stack, {
    direction: 'row',
    spacing: 6
  }, /*#__PURE__*/_react["default"].createElement(_react2.Link, {
    href: "https://discord.gg/jR3f6Uwm",
    isExternal: true
  }, /*#__PURE__*/_react["default"].createElement(_react2.Icon, {
    as: _fa.FaDiscord,
    w: 5,
    h: 5
  })), /*#__PURE__*/_react["default"].createElement(_react2.Link, {
    href: "https://twitter.com/react_jobs_fr",
    isExternal: true
  }, /*#__PURE__*/_react["default"].createElement(_react2.Icon, {
    as: _fa.FaTwitter,
    w: 5,
    h: 5
  })), /*#__PURE__*/_react["default"].createElement(_react2.Link, {
    href: "mailto:contact@react-jobs.fr",
    isExternal: true
  }, /*#__PURE__*/_react["default"].createElement(_react2.Icon, {
    as: _icons.EmailIcon,
    w: 5,
    h: 5
  })))));
}
"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = About;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@chakra-ui/react");

var _icons = require("@chakra-ui/icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function About() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_react2.Heading, {
    align: 'center',
    as: "h1",
    bg: (0, _react2.useColorModeValue)('gray.50', 'gray.800'),
    pt: "1em"
  }, "A propos"), /*#__PURE__*/_react["default"].createElement(_react2.Flex, {
    p: 5,
    flexWrap: "wrap",
    justifyContent: "space-around",
    bg: (0, _react2.useColorModeValue)('gray.50', 'gray.800')
  }, /*#__PURE__*/_react["default"].createElement(_react2.Flex, {
    justifyContent: "center",
    spacing: "24px",
    flexWrap: "wrap"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    m: "0.5em",
    w: "100%",
    bg: (0, _react2.useColorModeValue)('gray.50', 'gray.800'),
    py: 4,
    px: 8,
    spacing: {
      base: 8,
      md: 10
    },
    align: 'center'
  }, /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    fontWeight: 700,
    color: "#0468ae",
    fontSize: (0, _react2.useBreakpointValue)({
      base: 'xl',
      md: '2xl'
    }),
    textAlign: 'center'
  }, "React... ton framework frontend de coeur ?"), /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    fontWeight: 500,
    fontSize: (0, _react2.useBreakpointValue)({
      base: 'lg',
      md: 'xl'
    }),
    textAlign: 'center'
  }, "React-jobs.fr est la source #1 pour trouver la prochaine mission React qui te correspond. ", /*#__PURE__*/_react["default"].createElement("br", null), " Nous s\xE9lectionnons les offres les plus pertinentes en France pour te faciliter la vie."), /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    fontWeight: 700,
    fontSize: (0, _react2.useBreakpointValue)({
      base: 'md',
      md: 'lg'
    }),
    textAlign: 'center',
    mt: "1em",
    color: "#0468ae"
  }, "#Entraide #Communaut\xE9 #Passion"), /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    mt: "1em",
    fontSize: (0, _react2.useBreakpointValue)({
      base: 'md',
      md: 'lg'
    }),
    textAlign: 'center',
    maxW: '3xl'
  }, "Le projet a \xE9t\xE9 cr\xE9\xE9 par cinq d\xE9veloppeurs form\xE9s par ", /*#__PURE__*/_react["default"].createElement(_react2.Link, {
    href: "https://oclock.io/",
    isExternal: true
  }, "O'clock", /*#__PURE__*/_react["default"].createElement(_icons.ExternalLinkIcon, {
    mx: "5px"
  })))), /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    w: "0.5em",
    h: "100%",
    maxWidth: "1200px",
    bg: (0, _react2.useColorModeValue)('gray.50', 'gray.800'),
    py: 8,
    px: 8,
    spacing: {
      base: 8,
      md: 10
    },
    align: 'center',
    background: "linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?cs=srgb&dl=pexels-markus-spiske-177598.jpg&fm=jpg)",
    backgroundSize: 'cover',
    borderRadius: "5px"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    textAlign: 'center',
    maxW: '3xl',
    color: "white",
    textShadow: "1px 1px 20px #000000",
    fontWeight: 700,
    fontSize: (0, _react2.useBreakpointValue)({
      base: 'lg',
      md: 'xl'
    })
  }, "Bon \xE0 savoir : React est le framework le plus recherch\xE9 dans le monde : 59% des recruteurs tech sont \xE0 l'aff\xFBt de d\xE9veloppeurs connaissant React. Malheureusement, seuls 27,6% des programmeurs disent savoir l'utiliser."), /*#__PURE__*/_react["default"].createElement(_react2.Link, {
    color: "white",
    href: "https://www.codingame.com/work/codingame-developer-survey-2021/",
    isExternal: true
  }, "(Source : Codingame.com - 2021)", /*#__PURE__*/_react["default"].createElement(_icons.ExternalLinkIcon, {
    mx: "5px"
  }))))), /*#__PURE__*/_react["default"].createElement(_react2.Heading, {
    align: 'center',
    as: "h2",
    bg: (0, _react2.useColorModeValue)('gray.50', 'gray.800'),
    pt: "1em"
  }, "Notre \xE9quipe"), /*#__PURE__*/_react["default"].createElement(_react2.Flex, {
    p: 1,
    wrap: "wrap",
    justifyContent: "space-around",
    bg: (0, _react2.useColorModeValue)('gray.50', 'gray.800')
  }, /*#__PURE__*/_react["default"].createElement(_react2.Stack, {
    m: "0.5em",
    w: "300px",
    bg: (0, _react2.useColorModeValue)('gray.50', 'gray.800'),
    _hover: {
      boxShadow: 'lg'
    },
    py: 8,
    px: 8,
    spacing: {
      base: 6,
      md: 8
    },
    align: 'center',
    direction: 'column'
  }, /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    fontSize: {
      base: 'm',
      md: 'm'
    },
    textAlign: 'center',
    maxW: '3xl'
  }, "32 ans, je vis \xE0 Arras dans le Pas-de-Calais (62), actuellement charg\xE9 de communication et d\xE9veloppeur web React en devenir."), /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    textAlign: 'center'
  }, /*#__PURE__*/_react["default"].createElement(_react2.Avatar, {
    src: 'https://i.goopics.net/1bxvg.jpg',
    alt: 'Jenny Wilson',
    mb: 2
  }), /*#__PURE__*/_react["default"].createElement(_react2.Link, {
    href: "https://www.linkedin.com/in/florian-delobelle-42681b45/",
    isExternal: true
  }, /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    color: "#0468ae",
    fontWeight: 600
  }, "Florian Delobelle")), /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    fontSize: 'sm',
    color: (0, _react2.useColorModeValue)('gray.400', 'gray.400')
  }, "Product Owner et Dev Front"))), /*#__PURE__*/_react["default"].createElement(_react2.Stack, {
    m: "0.5em",
    w: "300px",
    bg: (0, _react2.useColorModeValue)('gray.50', 'gray.800'),
    _hover: {
      boxShadow: 'lg'
    },
    py: 8,
    px: 8,
    spacing: {
      base: 6,
      md: 8
    },
    align: 'center',
    direction: 'column'
  }, /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    fontSize: {
      base: 'm',
      md: 'm'
    },
    textAlign: 'center',
    maxW: '3xl'
  }, "37 ans, domicili\xE9e en Dordogne, ex-Biologiste et anciennement Attach\xE9e de Recherche Clinique, maman fi\xE8re de deux petites filles et folle de SQL !"), /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    textAlign: 'center'
  }, /*#__PURE__*/_react["default"].createElement(_react2.Avatar, {
    src: 'https://media-exp1.licdn.com/dms/image/C4D03AQHiB8eXPFjsBA/profile-displayphoto-shrink_800_800/0/1613555923540?e=1633564800&v=beta&t=752IJtCMhi3M3mSSzcWwL-q2RRj4nY4g0so7NiK2rpk',
    alt: 'Caro Wiese',
    mb: 2
  }), /*#__PURE__*/_react["default"].createElement(_react2.Link, {
    href: "https://www.linkedin.com/in/carowiese?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BlRfhnLi6QDaG1yAqX4MFGg%3D%3D",
    isExternal: true
  }, /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    color: "#0468ae",
    fontWeight: 600
  }, "Caroline Wiese")), /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    fontSize: 'sm',
    color: (0, _react2.useColorModeValue)('gray.400', 'gray.400')
  }, "Lead Dev Back"))), /*#__PURE__*/_react["default"].createElement(_react2.Stack, {
    m: "0.5em",
    w: "300px",
    bg: (0, _react2.useColorModeValue)('gray.50', 'gray.800'),
    _hover: {
      boxShadow: 'lg'
    },
    py: 8,
    px: 8,
    spacing: {
      base: 6,
      md: 8
    },
    align: 'center',
    direction: 'column'
  }, /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    fontSize: {
      base: 'm',
      md: 'm'
    },
    textAlign: 'center',
    maxW: '3xl'
  }, "32 ans, install\xE9 en Normandie, j'ai trouv\xE9 le chemin du d\xE9veloppement web apr\xE8s avoir travaill\xE9 dans diff\xE9rentes Maisons de Couture."), /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    textAlign: 'center'
  }, /*#__PURE__*/_react["default"].createElement(_react2.Avatar, {
    src: 'https://media-exp1.licdn.com/dms/image/C5103AQGhQV2sQZW2FA/profile-displayphoto-shrink_800_800/0/1516959223349?e=1633564800&v=beta&t=bxAkHHZm9AkS_twJC-s85w4ZvCn0fEFK9sZG9TvXACc',
    alt: 'Jenny Wilson',
    mb: 2
  }), /*#__PURE__*/_react["default"].createElement(_react2.Link, {
    href: "https://www.linkedin.com/in/florian-brun-buisson-631053145/",
    isExternal: true
  }, /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    color: "#0468ae",
    fontWeight: 600
  }, "Florian Brun-Buisson")), /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    fontSize: 'sm',
    color: (0, _react2.useColorModeValue)('gray.400', 'gray.400')
  }, "Lead Dev Front"))), /*#__PURE__*/_react["default"].createElement(_react2.Stack, {
    m: "0.5em",
    w: "300px",
    bg: (0, _react2.useColorModeValue)('gray.50', 'gray.800'),
    _hover: {
      boxShadow: 'lg'
    },
    py: 8,
    px: 8,
    spacing: {
      base: 6,
      md: 8
    },
    align: 'center',
    direction: 'column'
  }, /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    fontSize: {
      base: 'm',
      md: 'm'
    },
    textAlign: 'center',
    maxW: '3xl'
  }, "39 ans, Poitiers. Dev Web Backend. \u201CQuand on veut une chose, tout l'Univers conspire \xE0 nous permettre de r\xE9aliser notre r\xEAve.\u201D Paulo Coelho"), /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    textAlign: 'center'
  }, /*#__PURE__*/_react["default"].createElement(_react2.Avatar, {
    src: 'https://i.goopics.net/AP5Yb.jpg',
    alt: 'Felana Letrange',
    mb: 2
  }), /*#__PURE__*/_react["default"].createElement(_react2.Link, {
    href: "https://www.linkedin.com/in/felana-letrange/",
    isExternal: true
  }, /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    color: "#0468ae",
    fontWeight: 600
  }, "Felana Letrange")), /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    fontSize: 'sm',
    color: (0, _react2.useColorModeValue)('gray.400', 'gray.400')
  }, "Git Master et Dev Back"))), /*#__PURE__*/_react["default"].createElement(_react2.Stack, {
    m: "0.5em",
    w: "300px",
    bg: (0, _react2.useColorModeValue)('gray.50', 'gray.800'),
    _hover: {
      boxShadow: 'lg'
    },
    py: 8,
    px: 8,
    spacing: {
      base: 6,
      md: 8
    },
    align: 'center',
    direction: 'column'
  }, /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    fontSize: {
      base: 'm',
      md: 'm'
    },
    textAlign: 'center',
    maxW: '3xl'
  }, "34 ans, domicili\xE9 \xE0 Boulogne-sur-Mer (Pas-de-Calais, 62), ex-journaliste sportif en qu\xEAte de reconversion. En bref, sur tous les Front(s) ! :D"), /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    textAlign: 'center'
  }, /*#__PURE__*/_react["default"].createElement(_react2.Avatar, {
    src: 'https://media-exp1.licdn.com/dms/image/C4D03AQFN7JMdd6BsjQ/profile-displayphoto-shrink_400_400/0/1550840608493?e=1633564800&v=beta&t=2HroTWMk7Vctvo6WtjtUYtvRGqfL6jKzLjZ7Kea9KV8',
    alt: 'Alexandre Chochois',
    mb: 2
  }), /*#__PURE__*/_react["default"].createElement(_react2.Link, {
    href: "https://www.linkedin.com/in/alexandre-chochois",
    isExternal: true
  }, /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    color: "#0468ae",
    fontWeight: 600
  }, "Alexandre Chochois"), " "), /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    fontSize: 'sm',
    color: (0, _react2.useColorModeValue)('gray.400', 'gray.400')
  }, "Scrum Master et Dev Front")))), /*#__PURE__*/_react["default"].createElement(_react2.Heading, {
    align: 'center',
    as: "h1",
    bg: (0, _react2.useColorModeValue)('gray.50', 'gray.800'),
    pt: "1em"
  }, "Contact"), /*#__PURE__*/_react["default"].createElement(_react2.Flex, {
    p: 5,
    flexWrap: "wrap",
    justifyContent: "space-around",
    bg: (0, _react2.useColorModeValue)('gray.50', 'gray.800')
  }, /*#__PURE__*/_react["default"].createElement(_react2.Flex, {
    justifyContent: "center",
    spacing: "24px",
    flexWrap: "wrap"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    m: "0.5em",
    w: "100%",
    bg: (0, _react2.useColorModeValue)('gray.50', 'gray.800'),
    py: 4,
    px: 8,
    spacing: {
      base: 8,
      md: 10
    },
    align: 'center'
  }, /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    fontWeight: 700,
    color: "#0468ae",
    fontSize: (0, _react2.useBreakpointValue)({
      base: 'xl',
      md: '2xl'
    }),
    textAlign: 'center'
  }, "Int\xE9ress\xE9 par notre projet ? Envie d'en savoir plus ?"), /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    fontWeight: 500,
    fontSize: (0, _react2.useBreakpointValue)({
      base: 'lg',
      md: 'xl'
    }),
    textAlign: 'center'
  }, "N'h\xE9sitez pas \xE0 nous contacter par email : ", /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    fontWeight: 700,
    fontSize: (0, _react2.useBreakpointValue)({
      base: 'xl',
      md: '2xl'
    }),
    textAlign: 'center'
  }, "contact@react-jobs.fr"))))));
}
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.get-own-property-descriptors.js");

require("core-js/modules/es.object.define-properties.js");

require("core-js/modules/es.weak-map.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AdminForm;

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.array.is-array.js");

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _axios = _interopRequireDefault(require("axios"));

var _reactEmojiRender = require("react-emoji-render");

var _react2 = require("@chakra-ui/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function AdminForm(_ref) {
  var isAdmin = _ref.isAdmin;
  var history = (0, _reactRouterDom.useHistory)();

  var _useState = (0, _react.useState)({
    title: '',
    technology: '',
    company: '',
    locality: '',
    contract: '',
    salary: '',
    description: '',
    url: '',
    user_id: isAdmin
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var handleChange = function handleChange(e) {
    var _e$target = e.target,
        id = _e$target.id,
        value = _e$target.value;
    setState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, id, value));
    });
  };

  var sendDetailsToServer = function sendDetailsToServer() {
    var payload = {
      "title": state.title,
      "technology": state.technology,
      "company": state.company,
      "locality": state.locality,
      "contract": state.contract,
      "salary": state.salary,
      "description": state.description,
      "url": state.url,
      'user_id': localStorage.getItem('USER_ID')
    };

    _axios["default"].post('http://18.212.203.228:5050/jobs/save', payload, {
      headers: {
        'Authorization': "Bearer ".concat(localStorage.getItem('USER_TOKEN'))
      }
    }).then(function (response) {
      redirectToHome();

      if (response.status === 200) {
        setState(function (prevState) {
          return _objectSpread({}, prevState);
        });
        console.log(response); // props.showError(null);
      } else {// props.showError("Erreur");
      }
    })["catch"](function (error) {
      console.log(error.response);
    });
  };

  var handleSubmitClick = function handleSubmitClick(e) {
    e.preventDefault(); // console.log(state);

    sendDetailsToServer();
  };

  var redirectToHome = function redirectToHome() {
    console.log(history);
    history.push('/');
  }; // const redirectToLogin = () => {
  // history.push('/login');
  // };


  return /*#__PURE__*/_react["default"].createElement(_react2.Flex, {
    align: "center",
    justify: "center",
    bg: (0, _react2.useColorModeValue)('gray.50', 'gray.800'),
    height: "100%"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Stack, {
    spacing: 8,
    mx: "auto",
    maxW: "lg",
    py: 12,
    px: 6
  }, /*#__PURE__*/_react["default"].createElement(_react2.Stack, {
    align: "center"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Heading, {
    fontSize: "4xl"
  }, "Ajouter une offre ", /*#__PURE__*/_react["default"].createElement(_reactEmojiRender.Twemoji, {
    display: "flex",
    onlyEmojiClassName: "twemoji",
    displayFlex: "flex",
    text: "\uD83D\uDCDD"
  }))), /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    rounded: "lg",
    bg: (0, _react2.useColorModeValue)('white', 'gray.700'),
    boxShadow: "lg",
    p: 8
  }, /*#__PURE__*/_react["default"].createElement(_react2.Stack, {
    spacing: 4
  }, /*#__PURE__*/_react["default"].createElement(_react2.FormControl, {
    id: "title"
  }, /*#__PURE__*/_react["default"].createElement(_react2.FormLabel, null, "Titre de l'offre"), /*#__PURE__*/_react["default"].createElement(_react2.Input, {
    type: "text",
    id: "title",
    value: state.title,
    onChange: handleChange
  })), /*#__PURE__*/_react["default"].createElement(_react2.FormControl, {
    id: "technology"
  }, /*#__PURE__*/_react["default"].createElement(_react2.FormLabel, null, "Technos"), /*#__PURE__*/_react["default"].createElement(_react2.Input, {
    type: "text",
    id: "technology",
    value: state.technology,
    onChange: handleChange
  })), /*#__PURE__*/_react["default"].createElement(_react2.FormControl, {
    id: "company"
  }, /*#__PURE__*/_react["default"].createElement(_react2.FormLabel, null, "Entreprise"), /*#__PURE__*/_react["default"].createElement(_react2.Input, {
    type: "text",
    id: "company",
    value: state.company,
    onChange: handleChange
  })), /*#__PURE__*/_react["default"].createElement(_react2.FormControl, {
    id: "locality"
  }, /*#__PURE__*/_react["default"].createElement(_react2.FormLabel, null, "Localisation"), /*#__PURE__*/_react["default"].createElement(_react2.Input, {
    type: "text",
    id: "locality",
    value: state.locality,
    onChange: handleChange
  })), /*#__PURE__*/_react["default"].createElement(_react2.FormControl, {
    id: "contract"
  }, /*#__PURE__*/_react["default"].createElement(_react2.FormLabel, null, "Contrat"), /*#__PURE__*/_react["default"].createElement(_react2.Input, {
    type: "text",
    id: "contract",
    value: state.contract,
    onChange: handleChange
  })), /*#__PURE__*/_react["default"].createElement(_react2.FormControl, {
    id: "salary"
  }, /*#__PURE__*/_react["default"].createElement(_react2.FormLabel, null, "Salaire"), /*#__PURE__*/_react["default"].createElement(_react2.Input, {
    type: "text",
    id: "salary",
    value: state.salary,
    onChange: handleChange
  })), /*#__PURE__*/_react["default"].createElement(_react2.FormControl, {
    id: "description"
  }, /*#__PURE__*/_react["default"].createElement(_react2.FormLabel, null, "Description de l'offre"), /*#__PURE__*/_react["default"].createElement(_react2.Textarea, {
    type: "text",
    id: "description",
    value: state.description,
    onChange: handleChange
  })), /*#__PURE__*/_react["default"].createElement(_react2.FormControl, {
    id: "url"
  }, /*#__PURE__*/_react["default"].createElement(_react2.FormLabel, null, "URL de l'offre"), /*#__PURE__*/_react["default"].createElement(_react2.Input, {
    type: "text",
    id: "url",
    value: state.url,
    onChange: handleChange
  })), /*#__PURE__*/_react["default"].createElement(_react2.Stack, {
    spacing: 10
  }, /*#__PURE__*/_react["default"].createElement(_react2.Stack, {
    direction: {
      base: 'column',
      sm: 'row'
    },
    align: "start",
    justify: "space-between"
  }), /*#__PURE__*/_react["default"].createElement(_react2.Button, {
    color: "#0468ae",
    onClick: handleSubmitClick
  }, "Publier"))))));
}
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.get-own-property-descriptors.js");

require("core-js/modules/es.object.define-properties.js");

require("core-js/modules/es.weak-map.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LogInForm;

require("core-js/modules/es.array.is-array.js");

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _axios = _interopRequireDefault(require("axios"));

var _reactEmojiRender = require("react-emoji-render");

var _react2 = require("@chakra-ui/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function LogInForm(_ref) {
  var handleIsLoggedIn = _ref.handleIsLoggedIn,
      handleIsAdmin = _ref.handleIsAdmin;
  var history = (0, _reactRouterDom.useHistory)(); // const [isAdmin, setIsAdmin] = useState(false)
  // const [isLogged, setIsLogged] = useState(false)

  var _useState = (0, _react.useState)({
    email: '',
    password: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var handleChange = function handleChange(e) {
    var _e$target = e.target,
        id = _e$target.id,
        value = _e$target.value;
    setState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, id, value));
    });
  };

  var handleSubmitClick = function handleSubmitClick(e) {
    e.preventDefault();
    console.log(state);
    var payload = {
      "email": state.email,
      "password": state.password
    };

    _axios["default"].post("http://18.212.203.228:5050/users/loginUser", payload).then(function (response) {
      if (response.status === 200) {
        var _response$data = response.data,
            user = _response$data.user,
            token = _response$data.token; // console.log("c'est le rôle", user.role);

        handleIsLoggedIn(true);

        if (user.role == "admin") {
          // console.log("c'est le rôle", user.role, user.id);
          handleIsAdmin(true);
        }

        localStorage.setItem("USER_TOKEN", response.data.token);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("USER_ID", user.id);
        setState(function (prevState) {
          return _objectSpread({}, prevState);
        });
        redirectToHome();
      } else if (response.code === 204) {// props.showError("Le nom d'utilisateur et le mot de passe ne correspondent pas");
      } else {// props.showError("Le nom d'utilisateur n'existe pas");
      }
    })["catch"](function (error) {
      handleIsLoggedIn(false);
      handleIsAdmin(false);
      console.log(error);
    });
  };

  var redirectToHome = function redirectToHome() {
    // console.log(history)
    history.push('/');
  };

  return /*#__PURE__*/_react["default"].createElement(_react2.Flex, {
    align: "center",
    justify: "center",
    height: "75vh",
    bg: (0, _react2.useColorModeValue)('gray.50', 'gray.800')
  }, /*#__PURE__*/_react["default"].createElement(_react2.Stack, {
    spacing: 8,
    mx: "auto",
    maxW: "lg",
    py: 12,
    px: 6
  }, /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    justifyContent: "center",
    display: "flex"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Heading, {
    display: "flex",
    fontSize: "4xl"
  }, "Connexion ", /*#__PURE__*/_react["default"].createElement(_reactEmojiRender.Twemoji, {
    className: "twemoji",
    display: "flex",
    text: "\u270C\uFE0F"
  }))), /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    rounded: "lg",
    bg: (0, _react2.useColorModeValue)('white', 'gray.700'),
    boxShadow: "lg",
    p: 8
  }, /*#__PURE__*/_react["default"].createElement(_react2.Stack, {
    spacing: 4
  }, /*#__PURE__*/_react["default"].createElement(_react2.FormControl, {
    id: "email"
  }, /*#__PURE__*/_react["default"].createElement(_react2.FormLabel, null, "Adresse e-mail"), /*#__PURE__*/_react["default"].createElement(_react2.Input, {
    type: "email",
    id: "email",
    value: state.email,
    onChange: handleChange
  })), /*#__PURE__*/_react["default"].createElement(_react2.FormControl, {
    id: "password"
  }, /*#__PURE__*/_react["default"].createElement(_react2.FormLabel, null, "Mot de passe"), /*#__PURE__*/_react["default"].createElement(_react2.Input, {
    type: "password",
    id: "password",
    value: state.password,
    onChange: handleChange
  })), /*#__PURE__*/_react["default"].createElement(_react2.Stack, {
    spacing: 10
  }, /*#__PURE__*/_react["default"].createElement(_react2.Stack, {
    direction: {
      base: 'column',
      sm: 'row'
    },
    align: "start",
    justify: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Link, {
    as: _reactRouterDom.Link,
    to: "/register"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    href: "/register",
    color: "#0468ae"
  }, "Pas encore de compte ? Cliquez ici pour vous inscrire"))), /*#__PURE__*/_react["default"].createElement(_react2.Button, {
    color: "#0468ae",
    onClick: handleSubmitClick
  }, "Je me connecte"))))));
}
"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Logo;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _LogoValidéJobBoard = _interopRequireDefault(require("src/assets/Logo valid\xE9-Job Board.png"));

var _react2 = require("@chakra-ui/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Logo() {
  return /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    boxSize: "11em",
    ml: "4",
    mt: "1"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Link, {
    as: _reactRouterDom.Link,
    to: "/"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Image, {
    src: _LogoValidéJobBoard["default"],
    alt: "Logo React-jobs.fr"
  })));
}

;
"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MenuBurger;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _icons = require("@chakra-ui/icons");

var _react2 = require("@chakra-ui/react");

var _fa = require("react-icons/fa");

var _ai = require("react-icons/ai");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function MenuBurger(_ref) {
  var isAdmin = _ref.isAdmin,
      isLoggedIn = _ref.isLoggedIn;
  var responsiveSize = (0, _react2.useBreakpointValue)(['md', 'lg']);
  return /*#__PURE__*/_react["default"].createElement(_react2.Menu, null, /*#__PURE__*/_react["default"].createElement(_react2.MenuButton, {
    size: responsiveSize,
    mt: "2",
    color: "#0468ae",
    as: _react2.IconButton,
    "aria-label": "Options",
    icon: /*#__PURE__*/_react["default"].createElement(_icons.HamburgerIcon, null)
  }), /*#__PURE__*/_react["default"].createElement(_react2.MenuList, null, !isLoggedIn && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_react2.Link, {
    as: _reactRouterDom.Link,
    to: "/register"
  }, /*#__PURE__*/_react["default"].createElement(_react2.MenuItem, {
    display: {
      md: 'none',
      lg: 'none'
    },
    size: responsiveSize,
    variant: "solid",
    mr: "2",
    mt: "2"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Icon, {
    as: _ai.AiTwotoneEdit,
    mr: 2.5
  }), "Inscription")), /*#__PURE__*/_react["default"].createElement(_react2.Link, {
    as: _reactRouterDom.Link,
    to: "/login"
  }, /*#__PURE__*/_react["default"].createElement(_react2.MenuItem, {
    display: {
      md: 'none',
      lg: 'none'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react2.Icon, {
    as: _ai.AiOutlineRightCircle,
    mr: 2.5
  }), "Connexion"))), isAdmin && isLoggedIn && /*#__PURE__*/_react["default"].createElement(_react2.Link, {
    as: _reactRouterDom.Link,
    to: "/login/adminform"
  }, /*#__PURE__*/_react["default"].createElement(_react2.MenuItem, {
    icon: /*#__PURE__*/_react["default"].createElement(_icons.AddIcon, null)
  }, "D\xE9poser une annonce")), /*#__PURE__*/_react["default"].createElement(_react2.Link, {
    as: _reactRouterDom.Link,
    to: "/about"
  }, /*#__PURE__*/_react["default"].createElement(_react2.MenuItem, {
    icon: /*#__PURE__*/_react["default"].createElement(_icons.QuestionIcon, null)
  }, "A propos")), /*#__PURE__*/_react["default"].createElement(_react2.Link, {
    href: "https://discord.gg/jR3f6Uwm",
    isExternal: true
  }, /*#__PURE__*/_react["default"].createElement(_react2.MenuItem, null, /*#__PURE__*/_react["default"].createElement(_react2.Icon, {
    as: _fa.FaDiscord,
    mr: 2.5
  }), "Discord")), /*#__PURE__*/_react["default"].createElement(_react2.Link, {
    href: "https://twitter.com/react_jobs_fr",
    isExternal: true
  }, /*#__PURE__*/_react["default"].createElement(_react2.MenuItem, null, /*#__PURE__*/_react["default"].createElement(_react2.Icon, {
    as: _fa.FaTwitter,
    mr: 2.5
  }), "Twitter"))));
}
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.get-own-property-descriptors.js");

require("core-js/modules/es.object.define-properties.js");

require("core-js/modules/es.weak-map.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RegistrationForm;

require("core-js/modules/es.array.is-array.js");

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _axios = _interopRequireDefault(require("axios"));

var _reactEmojiRender = require("react-emoji-render");

var _react2 = require("@chakra-ui/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function RegistrationForm() {
  var history = (0, _reactRouterDom.useHistory)();

  var _useState = (0, _react.useState)({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var handleChange = function handleChange(e) {
    var _e$target = e.target,
        id = _e$target.id,
        value = _e$target.value;
    setState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, id, value));
    });
  };

  var sendDetailsToServer = function sendDetailsToServer() {
    var payload = {
      "firstname": state.firstname,
      "lastname": state.lastname,
      "email": state.email,
      "password": state.password
    };

    _axios["default"].post("http://18.212.203.228:5050" + "/users/registerUser", payload).then(function (response) {
      redirectToHome(); // console.log(response)

      if (response.status === 200) {
        setState(function (prevState) {
          return _objectSpread({}, prevState);
        });
      } else {// props.showError("Erreur");
      }
    })["catch"](function (error) {
      console.log(error.response);
    });
  };

  var handleSubmitClick = function handleSubmitClick(e) {
    e.preventDefault(); // console.log(state);

    sendDetailsToServer();
  };

  var redirectToHome = function redirectToHome() {
    history.push('/');
  };

  return /*#__PURE__*/_react["default"].createElement(_react2.Flex, {
    align: "center",
    justify: "center",
    bg: (0, _react2.useColorModeValue)('gray.50', 'gray.800'),
    height: "100%"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Stack, {
    spacing: 8,
    mx: "auto",
    maxW: "lg",
    py: 12,
    px: 6
  }, /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    align: "center",
    justifyContent: "center",
    display: "flex"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Heading, {
    display: "flex",
    fontSize: "4xl"
  }, "Inscription ", /*#__PURE__*/_react["default"].createElement(_reactEmojiRender.Twemoji, {
    display: "flex",
    onlyEmojiClassName: "twemoji",
    displayFlex: "flex",
    text: "\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB"
  }))), /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    rounded: "lg",
    bg: (0, _react2.useColorModeValue)('white', 'gray.700'),
    boxShadow: "lg",
    p: 8
  }, /*#__PURE__*/_react["default"].createElement(_react2.Stack, {
    spacing: 4
  }, /*#__PURE__*/_react["default"].createElement(_react2.FormControl, {
    id: "email"
  }, /*#__PURE__*/_react["default"].createElement(_react2.FormLabel, null, "Pr\xE9nom"), /*#__PURE__*/_react["default"].createElement(_react2.Input, {
    type: "text",
    id: "firstname",
    value: state.firstname,
    onChange: handleChange
  })), /*#__PURE__*/_react["default"].createElement(_react2.FormControl, {
    id: "email"
  }, /*#__PURE__*/_react["default"].createElement(_react2.FormLabel, null, "Nom"), /*#__PURE__*/_react["default"].createElement(_react2.Input, {
    type: "text",
    id: "lastname",
    value: state.lastname,
    onChange: handleChange
  })), /*#__PURE__*/_react["default"].createElement(_react2.FormControl, {
    id: "email"
  }, /*#__PURE__*/_react["default"].createElement(_react2.FormLabel, null, "Adresse e-mail"), /*#__PURE__*/_react["default"].createElement(_react2.Input, {
    type: "email",
    id: "email",
    value: state.email,
    onChange: handleChange
  })), /*#__PURE__*/_react["default"].createElement(_react2.FormControl, {
    id: "password"
  }, /*#__PURE__*/_react["default"].createElement(_react2.FormLabel, null, "Mot de passe"), /*#__PURE__*/_react["default"].createElement(_react2.Input, {
    type: "password",
    id: "password",
    value: state.password,
    onChange: handleChange
  })), /*#__PURE__*/_react["default"].createElement(_react2.FormControl, {
    id: "password"
  }, /*#__PURE__*/_react["default"].createElement(_react2.FormLabel, null, "Confirmez votre mot de passe"), /*#__PURE__*/_react["default"].createElement(_react2.Input, {
    type: "password",
    id: "confirmPassword",
    value: state.confirmPassword
  })), /*#__PURE__*/_react["default"].createElement(_react2.Stack, {
    spacing: 10
  }, /*#__PURE__*/_react["default"].createElement(_react2.Stack, {
    direction: {
      base: 'column',
      sm: 'row'
    },
    align: "start",
    justify: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Link, {
    as: _reactRouterDom.Link,
    to: "/login"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    color: "#0468ae"
  }, "D\xE9ja un compte ? Connectez-vous"))), /*#__PURE__*/_react["default"].createElement(_react2.Button, {
    color: "#0468ae",
    onClick: handleSubmitClick
  }, "Je m'inscris"))))));
}
"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TaglineBlock;

var _react = _interopRequireDefault(require("react"));

var _reactEmojiRender = require("react-emoji-render");

var _react2 = require("@chakra-ui/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function TaglineBlock() {
  return /*#__PURE__*/_react["default"].createElement(_react2.Flex, {
    position: "relative",
    w: "100%",
    h: (0, _react2.useBreakpointValue)({
      base: "15em",
      md: "20em"
    }),
    background: "linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(https://images.pexels.com/photos/5244017/pexels-photo-5244017.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)",
    backgroundSize: 'cover',
    backgroundPosition: "60% 38%",
    pb: "1em"
  }, /*#__PURE__*/_react["default"].createElement(_react2.VStack, {
    position: "absolute",
    bottom: "6",
    w: "100%",
    justify: 'center',
    px: (0, _react2.useBreakpointValue)({
      base: 4,
      md: 8
    })
  }, /*#__PURE__*/_react["default"].createElement(_react2.Stack, {
    maxW: '4xl',
    align: 'flex-start',
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    textShadow: "2px 2px 5px #000000",
    color: '#F7FAFC',
    fontWeight: 700,
    lineHeight: 1,
    fontSize: (0, _react2.useBreakpointValue)({
      base: '3xl',
      md: '4xl'
    })
  }, "Les hooks n'ont plus de secret pour toi ?"), /*#__PURE__*/_react["default"].createElement(_react2.Stack, {
    direction: 'row',
    display: "flex"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    display: "flex",
    flexWrap: "wrap",
    textShadow: "2px 2px 5px #000000",
    color: '#F7FAFC',
    fontWeight: 300,
    lineHeight: 1,
    mr: 4,
    fontSize: (0, _react2.useBreakpointValue)({
      base: '2xl',
      md: '3xl'
    })
  }, "Consulte les offres React les plus r\xE9centes en France", /*#__PURE__*/_react["default"].createElement(_reactEmojiRender.Twemoji, {
    className: "twemoji",
    text: "\uD83C\uDDEB\uD83C\uDDF7"
  }))))));
}
"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _react2 = require("@chakra-ui/react");

var _MenuBurger = _interopRequireDefault(require("./MenuBurger"));

var _Logo = _interopRequireDefault(require("./Logo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Header = function Header(_ref) {
  var isLoggedIn = _ref.isLoggedIn,
      setIsLoggedIn = _ref.setIsLoggedIn,
      isAdmin = _ref.isAdmin;
  var history = (0, _reactRouterDom.useHistory)();
  var responsiveSize = (0, _react2.useBreakpointValue)(['md', 'lg']);

  var isLoggedOut = function isLoggedOut() {
    localStorage.clear();
    setIsLoggedIn(false);
    history.push("/");
  };

  return /*#__PURE__*/_react["default"].createElement(_react2.Flex, {
    bg: "gray.50",
    pb: "1.5em",
    pt: "1em"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    boxSize: "40"
  }, /*#__PURE__*/_react["default"].createElement(_Logo["default"], {
    size: responsiveSize
  })), /*#__PURE__*/_react["default"].createElement(_react2.Spacer, null), /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    p: 10
  }, !isLoggedIn ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_react2.Link, {
    as: _reactRouterDom.Link,
    to: "/register"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Button, {
    display: {
      base: 'none',
      md: 'inline-block',
      lg: 'inline-block'
    },
    size: responsiveSize,
    variant: "solid",
    color: "#0468ae",
    mr: "2",
    mt: "2"
  }, "Inscription")), /*#__PURE__*/_react["default"].createElement(_react2.Link, {
    as: _reactRouterDom.Link,
    to: "/login"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Button, {
    display: {
      base: 'none',
      md: 'inline-block',
      lg: 'inline-block'
    },
    size: responsiveSize,
    color: "#0468ae",
    mr: "2",
    mt: "2"
  }, "Connexion")), " ") : /*#__PURE__*/_react["default"].createElement(_react2.Button, {
    display: {
      base: 'inline-block',
      md: 'inline-block',
      lg: 'inline-block'
    },
    onClick: isLoggedOut,
    size: responsiveSize,
    color: "#0468ae",
    mr: "2",
    mt: "2"
  }, "D\xE9connexion"), /*#__PURE__*/_react["default"].createElement(_react2.Menu, null, /*#__PURE__*/_react["default"].createElement(_MenuBurger["default"], {
    isAdmin: isAdmin,
    isLoggedIn: isLoggedIn
  }))));
};

var _default = Header;
exports["default"] = _default;
"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Page404;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _react2 = require("@chakra-ui/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Page404() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_react2.Heading, {
    align: 'center',
    as: "h1",
    bg: (0, _react2.useColorModeValue)('gray.50', 'gray.800'),
    pt: "4em"
  }, "Oups. Erreur 404"), /*#__PURE__*/_react["default"].createElement(_react2.Flex, {
    h: "50vh",
    p: 5,
    flexWrap: "wrap",
    justifyContent: "space-around",
    bg: (0, _react2.useColorModeValue)('gray.50', 'gray.800')
  }, /*#__PURE__*/_react["default"].createElement(_react2.Flex, {
    justifyContent: "center",
    spacing: "24px",
    flexWrap: "wrap"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    m: "0.5em",
    w: "100%",
    bg: (0, _react2.useColorModeValue)('gray.50', 'gray.800'),
    py: 4,
    px: 8,
    spacing: {
      base: 8,
      md: 10
    },
    align: 'center'
  }, /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    fontWeight: 700,
    color: "#0468ae",
    fontSize: (0, _react2.useBreakpointValue)({
      base: 'xl',
      md: '2xl'
    }),
    textAlign: 'center'
  }, "La page que tu demandes n'existe pas."), /*#__PURE__*/_react["default"].createElement(_react2.Link, {
    as: _reactRouterDom.Link,
    to: "/"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    fontSize: (0, _react2.useBreakpointValue)({
      base: 'lg',
      md: 'xl'
    }),
    color: "#0468ae"
  }, "Retour \xE0 l'accueil"))))));
}
"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es.array.map.js");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@chakra-ui/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Pagination = function Pagination(_ref) {
  var jobsPerPage = _ref.jobsPerPage,
      totalJobs = _ref.totalJobs,
      paginate = _ref.paginate;
  var pageNumbers = [];

  for (var i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  return /*#__PURE__*/_react["default"].createElement(_react2.HStack, {
    spacing: "3em",
    padding: "1em"
  }, pageNumbers.map(function (number) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_react2.Box, {
      w: "1em",
      key: number
    }, /*#__PURE__*/_react["default"].createElement("a", {
      onClick: function onClick() {
        return paginate(number);
      }
    }, /*#__PURE__*/_react["default"].createElement(_react2.Button, null, number))));
  }));
};

var _default = Pagination;
exports["default"] = _default;
"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Job;

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

var _react = _interopRequireDefault(require("react"));

var _dayjs = _interopRequireDefault(require("dayjs"));

require("dayjs/locale/fr");

var _icons = require("@chakra-ui/icons");

var _react2 = require("@chakra-ui/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Job(_ref) {
  var val = _ref.val;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_react2.VStack, {
    p: 1,
    bg: (0, _react2.useColorModeValue)('gray.50', 'gray.800'),
    spacing: 4,
    divider: /*#__PURE__*/_react["default"].createElement(_react2.StackDivider, {
      color: "gray.50",
      align: "stretch"
    })
  }, /*#__PURE__*/_react["default"].createElement(_react2.Accordion, {
    bg: "white",
    width: (0, _react2.useBreakpointValue)({
      base: "80%",
      md: "60%"
    }),
    allowToggle: true
  }, /*#__PURE__*/_react["default"].createElement(_react2.AccordionItem, {
    pt: "2",
    pb: "2",
    _hover: {
      boxShadow: 'lg',
      borderLeftWidth: '2px',
      borderLeftColor: 'blue.500'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react2.AccordionButton, null, /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    flex: "1",
    textAlign: "left"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Heading, {
    as: "h2",
    size: (0, _react2.useBreakpointValue)({
      base: "xs",
      md: "sm"
    })
  }, val.intitule.toUpperCase())), /*#__PURE__*/_react["default"].createElement(_react2.Badge, {
    display: (0, _react2.useBreakpointValue)({
      base: "none",
      md: "sm"
    }),
    size: (0, _react2.useBreakpointValue)({
      base: "xs",
      md: "sm"
    }),
    ml: "1",
    colorScheme: ""
  }, val.lieuTravail.libelle), /*#__PURE__*/_react["default"].createElement(_react2.AccordionIcon, null)), /*#__PURE__*/_react["default"].createElement(_react2.AccordionPanel, null, /*#__PURE__*/_react["default"].createElement(_react2.Flex, {
    justifyContent: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Heading, {
    display: "flex",
    as: "h3",
    fontSize: (0, _react2.useBreakpointValue)({
      base: "xs",
      md: "sm"
    }),
    color: "blue.500"
  }, val.entreprise.nom), /*#__PURE__*/_react["default"].createElement(_react2.Heading, {
    display: "flex",
    as: "h2",
    fontSize: (0, _react2.useBreakpointValue)({
      base: "xs",
      md: "sm"
    }),
    color: "blue.500"
  }, val.typeContrat)), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    noOfLines: [3, 4, 6],
    fontSize: (0, _react2.useBreakpointValue)({
      base: "sm",
      md: "md"
    }),
    as: "p"
  }, val.description), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    fontSize: (0, _react2.useBreakpointValue)({
      base: "xs",
      md: "sm"
    }),
    fontWeight: "700",
    as: "p"
  }, val.lieuTravail.libelle), /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    fontSize: (0, _react2.useBreakpointValue)({
      base: "xs",
      md: "sm"
    }),
    fontWeight: "700",
    as: "p"
  }, "Publi\xE9 le : ", (0, _dayjs["default"])(val.dateCreation).locale('fr').format('dddd DD MMMM YYYY'), " "), /*#__PURE__*/_react["default"].createElement(_react2.Flex, {
    justifyContent: "flex-end"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Link, {
    fontSize: (0, _react2.useBreakpointValue)({
      base: "sm",
      md: "md"
    }),
    href: val.origineOffre.partenaires && val.origineOffre.partenaires[0].url ? val.origineOffre.partenaires[0].url : val.origineOffre.urlOrigine,
    isExternal: true
  }, /*#__PURE__*/_react["default"].createElement(_react2.Button, {
    color: "#0468ae",
    rightIcon: /*#__PURE__*/_react["default"].createElement(_icons.ArrowForwardIcon, null)
  }, "Je postule"))))))));
}
"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PremiumJobs;

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

var _react = _interopRequireDefault(require("react"));

require("./style.css");

var _icons = require("@chakra-ui/icons");

var _reactEmojiRender = require("react-emoji-render");

var _react2 = require("@chakra-ui/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function PremiumJobs(_ref) {
  var premiumJobs = _ref.premiumJobs;
  return /*#__PURE__*/_react["default"].createElement(_react2.VStack, {
    p: 1,
    bg: (0, _react2.useColorModeValue)('gray.50', 'gray.800'),
    spacing: 4
  }, /*#__PURE__*/_react["default"].createElement(_react2.Accordion, {
    width: (0, _react2.useBreakpointValue)({
      base: "80%",
      md: "60%"
    }),
    allowToggle: true,
    bg: "#fcf5eb"
  }, /*#__PURE__*/_react["default"].createElement(_react2.AccordionItem, {
    pt: "2",
    pb: "2",
    _hover: {
      boxShadow: 'lg',
      borderLeftWidth: '2px',
      borderLeftColor: 'blue.500'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react2.AccordionButton, null, /*#__PURE__*/_react["default"].createElement(_reactEmojiRender.Twemoji, {
    className: "twemoji",
    text: "\u2B50"
  }), /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    flex: "1",
    textAlign: "left"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Heading, {
    as: "h2",
    size: (0, _react2.useBreakpointValue)({
      base: "xs",
      md: "sm"
    })
  }, premiumJobs.title.toUpperCase())), /*#__PURE__*/_react["default"].createElement(_react2.Badge, {
    display: (0, _react2.useBreakpointValue)({
      base: "none",
      md: "sm"
    }),
    size: (0, _react2.useBreakpointValue)({
      base: "xs",
      md: "sm"
    }),
    ml: "1",
    colorScheme: ""
  }, premiumJobs.locality), /*#__PURE__*/_react["default"].createElement(_react2.AccordionIcon, null)), /*#__PURE__*/_react["default"].createElement(_react2.AccordionPanel, null, /*#__PURE__*/_react["default"].createElement(_react2.Flex, {
    justifyContent: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Heading, {
    display: "flex",
    as: "h3",
    fontSize: (0, _react2.useBreakpointValue)({
      base: "xs",
      md: "sm"
    }),
    color: "blue.500"
  }, premiumJobs.company), /*#__PURE__*/_react["default"].createElement(_react2.Heading, {
    display: "flex",
    as: "h2",
    fontSize: (0, _react2.useBreakpointValue)({
      base: "xs",
      md: "sm"
    }),
    color: "blue.500"
  }, premiumJobs.contract)), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    fontSize: (0, _react2.useBreakpointValue)({
      base: "sm",
      md: "md"
    }),
    as: "p"
  }, premiumJobs.description), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    fontSize: (0, _react2.useBreakpointValue)({
      base: "xs",
      md: "sm"
    }),
    fontWeight: "700",
    as: "p"
  }, premiumJobs.locality), /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    fontSize: (0, _react2.useBreakpointValue)({
      base: "xs",
      md: "sm"
    }),
    fontWeight: "700",
    as: "p"
  }, " ", premiumJobs.salary), /*#__PURE__*/_react["default"].createElement(_react2.Flex, {
    justifyContent: "flex-end"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Link, {
    fontSize: (0, _react2.useBreakpointValue)({
      base: "sm",
      md: "md"
    }),
    href: "https://oclock.io/team",
    isExternal: true
  }, /*#__PURE__*/_react["default"].createElement(_react2.Button, {
    color: "#0468ae",
    rightIcon: /*#__PURE__*/_react["default"].createElement(_icons.ArrowForwardIcon, null)
  }, "Je postule")))))));
}
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Search;

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.array.is-array.js");

var _react = _interopRequireWildcard(require("react"));

var _reactInfiniteScrollComponent = _interopRequireDefault(require("react-infinite-scroll-component"));

var _react2 = require("@chakra-ui/react");

var _icons = require("@chakra-ui/icons");

var _Job = _interopRequireDefault(require("./Job"));

var _PremiumJobs = _interopRequireDefault(require("./PremiumJobs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Search(_ref) {
  var jobs = _ref.jobs;
  var perPage = 5;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      premiumJobs = _useState2[0],
      setPremiumJobs = _useState2[1];

  var _useState3 = (0, _react.useState)(jobs.slice(0, perPage)),
      _useState4 = _slicedToArray(_useState3, 2),
      allJobs = _useState4[0],
      setAllJobs = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      hasMore = _useState6[0],
      setHasMore = _useState6[1];

  var _useState7 = (0, _react.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      searchTerm = _useState8[0],
      setSearchTerm = _useState8[1];

  var _useState9 = (0, _react.useState)(perPage),
      _useState10 = _slicedToArray(_useState9, 2),
      lastPosition = _useState10[0],
      setLastPosition = _useState10[1];

  (0, _react.useEffect)(function () {
    fetch('http://18.212.203.228:5050' + '/jobs').then(function (data) {
      // console.log("1er console log de data PremiumJobs",data);
      return data.json();
    }).then(function (data) {
      // console.log("2eme console log de data PremiumJobs",data);
      setPremiumJobs(data);
    })["catch"](function (error) {
      console.log(error);
    });
  }, []);

  var handleSearchTerm = function handleSearchTerm(e) {
    setSearchTerm("");
    var value = e.target.value;
    value.length > 2 && setSearchTerm(e.target.value);
  };

  var fetchMoreData = function fetchMoreData() {
    setHasMore(true);
    setAllJobs(function (prev) {
      return [].concat(_toConsumableArray(prev), _toConsumableArray(jobs.slice(lastPosition, lastPosition + perPage)));
    });
    setLastPosition(lastPosition + perPage);
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_react2.VStack, {
    spacing: "10px",
    justify: "center",
    p: 5,
    bg: (0, _react2.useColorModeValue)('gray.50', 'gray.800')
  }, /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    mt: "2em",
    color: "gray.500"
  }, "Rechercher une ville, une technologie, un type de contrat..."), /*#__PURE__*/_react["default"].createElement(_react2.InputGroup, {
    maxWidth: "500px"
  }, /*#__PURE__*/_react["default"].createElement(_react2.InputLeftElement, {
    pointerEvents: "none",
    children: /*#__PURE__*/_react["default"].createElement(_icons.SearchIcon, {
      color: "gray.300"
    })
  }), /*#__PURE__*/_react["default"].createElement(_react2.Input, {
    boxShadow: "rgb(0 0 0 / 5%) 0 10px 15px",
    type: "text",
    onChange: handleSearchTerm,
    variant: "outline",
    placeholder: "Ex : Bordeaux, Redux, CDI",
    size: "lg",
    bg: "white",
    mb: "1.5em"
  }))), /*#__PURE__*/_react["default"].createElement(_react2.VStack, {
    spacing: "10px",
    justify: "center",
    p: 5,
    bg: (0, _react2.useColorModeValue)('gray.50', 'gray.800')
  }), premiumJobs.map(function (val) {
    return /*#__PURE__*/_react["default"].createElement(_PremiumJobs["default"], {
      premiumJobs: val,
      key: val.id
    });
  }), /*#__PURE__*/_react["default"].createElement(_react2.VStack, {
    spacing: "0.5em",
    justify: "center",
    p: 5,
    bg: (0, _react2.useColorModeValue)('gray.50', 'gray.800')
  }), /*#__PURE__*/_react["default"].createElement(_reactInfiniteScrollComponent["default"], {
    dataLength: allJobs,
    next: fetchMoreData,
    hasMore: setHasMore
  }, allJobs.filter(function (val) {
    return val.description.toLowerCase().includes(searchTerm.toLowerCase()) || val.intitule.toLowerCase().includes(searchTerm.toLowerCase()) || val.typeContrat.toLowerCase().includes(searchTerm.toLowerCase()) || val.lieuTravail.libelle.toLowerCase().includes(searchTerm.toLowerCase());
  }).map(function (val) {
    return /*#__PURE__*/_react["default"].createElement(_Job["default"], {
      key: val.id,
      val: val
    });
  })), /*#__PURE__*/_react["default"].createElement(_react2.VStack, {
    spacing: "0.5em",
    justify: "center",
    p: 5,
    bg: (0, _react2.useColorModeValue)('gray.50', 'gray.800')
  }));
}
"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _reactRouterDom = require("react-router-dom");

var _App = _interopRequireDefault(require("src/components/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Composants
// == Render
// Root React element (the one that contains the whole app)
// => creates a structures of nested objects
var rootReactElement = /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(_App["default"], null)); // The DOM target (where the structure should come to life in the DOM)


var target = document.getElementById('root'); //React rendering trigger (virtual) => DOM (web page)

(0, _reactDom.render)(rootReactElement, target);
