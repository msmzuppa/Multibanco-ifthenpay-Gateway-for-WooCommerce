/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@woocommerce/blocks-registry":
/*!******************************************!*\
  !*** external ["wc","wcBlocksRegistry"] ***!
  \******************************************/
/***/ ((module) => {

module.exports = window["wc"]["wcBlocksRegistry"];

/***/ }),

/***/ "@woocommerce/settings":
/*!************************************!*\
  !*** external ["wc","wcSettings"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wc"]["wcSettings"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/***/ ((module) => {

module.exports = window["wp"]["htmlEntities"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************************************!*\
  !*** ./woocommerce-blocks/mbway/src/index.js ***!
  \***********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @woocommerce/blocks-registry */ "@woocommerce/blocks-registry");
/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @woocommerce/settings */ "@woocommerce/settings");
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__);
/**
 * External dependencies
 */






const settings = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_2__.getSetting)('mbway_ifthen_for_woocommerce_data', {});
const defaultLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('MB WAY (ifthenpay)', 'multibanco-ifthen-software-gateway-for-woocommerce');
const label = (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__.decodeEntities)(settings.title) || defaultLabel;

//const [mbwayPhoneNumber, setMbwayPhoneNumber] = useState(''); //If I set it here, i get "invalid hook call"

/**
 * Content component
 *
 * @param {*} props Props from payment API.
 */
const Content = props => {
  /* Data to send to the server - https://github.com/woocommerce/woocommerce-blocks/blob/trunk/docs/internal-developers/block-client-apis/checkout/checkout-api.md#passing-a-value-from-the-client-through-to-server-side-payment-processing */
  const [mbwayPhoneNumber, setMbwayPhoneNumber] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(settings.default_number); // This works but mbwayPhoneNumber is not available inside onPaymentProcessing below
  const {
    eventRegistration,
    emitResponse
  } = props;
  const {
    onPaymentProcessing
  } = eventRegistration;
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    const unsubscribe = onPaymentProcessing(async () => {
      // Here we can do any processing we need, and then emit a response.
      // For example, we might validate a custom field, or perform an AJAX request, and then emit a response indicating it is valid or not.
      const mbway_ifthen_for_woocommerce_phone = mbwayPhoneNumber; // This will need to be the value of the input field
      const customDataIsValid = mbway_ifthen_for_woocommerce_phone.length === 9;
      if (customDataIsValid) {
        return {
          type: emitResponse.responseTypes.SUCCESS,
          meta: {
            paymentMethodData: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__.applyFilters)('mbway_ifthen_blocks_checkout_payment_data', {
              mbway_ifthen_for_woocommerce_phone
            })
          }
        };
      }
      return {
        type: emitResponse.responseTypes.ERROR,
        message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Invalid MB WAY phone number', 'multibanco-ifthen-software-gateway-for-woocommerce')
      };
    });
    // Unsubscribes when this component is unmounted.
    return () => {
      unsubscribe();
    };
  }, [emitResponse.responseTypes.ERROR, emitResponse.responseTypes.SUCCESS, onPaymentProcessing, mbwayPhoneNumber]);
  /* Input value */
  const HandleMBWayChange = event => {
    const value = event.target.value.replace(/\D/g, "");
    setMbwayPhoneNumber(value);
  };
  /* Content */
  // Description
  var description = React.createElement('p', null, (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__.decodeEntities)(settings.description || ''));
  // Input field
  var phonenumberinput = React.createElement('input', {
    type: 'tel',
    name: settings.id + '_phone',
    id: settings.id + '_phone',
    placeholder: '9xxxxxxxx',
    autoComplete: 'off',
    maxLength: '9',
    required: true,
    value: mbwayPhoneNumber,
    onChange: HandleMBWayChange
  });
  // Label inside field
  var phonenumberlabel = React.createElement('label', {
    htmlFor: settings.id + '_phone'
  }, (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__.decodeEntities)(settings.phonenumbertext || ''));
  // Extend before phone number
  var beforePhoneNumber = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__.applyFilters)('mbway_ifthen_blocks_checkout_before_phone_number', null);
  // Phone number: input + label
  var phonenumber = React.createElement('div', {
    className: 'wc-block-components-text-input is-active'
  }, '', phonenumberinput, phonenumberlabel);
  // Extend after phone number
  var afterPhoneNumber = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__.applyFilters)('mbway_ifthen_blocks_checkout_after_phone_number', null);
  // Return Content
  return React.createElement('div', null, description, beforePhoneNumber, phonenumber, afterPhoneNumber);
};

/**
 * Label component
 *
 * @param {*} props Props from payment API.
 */
const Label = props => {
  var icon = React.createElement('img', {
    src: settings.icon,
    width: 28,
    height: 24,
    style: {
      display: 'inline'
    }
  });
  var span = React.createElement('span', {
    className: 'wc-block-components-payment-method-label wc-block-components-payment-method-label--with-icon'
  }, icon, (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__.decodeEntities)(settings.title) || defaultLabel);
  return span;
};

/**
 * CanMakePayment function
 *
 * @param checkoutData Checkout details.
 */
const CanMakePayment = checkoutData => {
  //Euro?
  if (checkoutData.cartTotals.currency_code != 'EUR') {
    return false;
  }
  //Portugal?
  if (settings.only_portugal) {
    if (checkoutData.billingData.country != 'PT' && checkoutData.shippingAddress.country != 'PT') {
      return false;
    }
  }
  //Minimum and maximum value
  var cart_total = checkoutData.cartTotals.total_price / 100; //It's return in cents (?)
  if (settings.only_above) {
    if (cart_total < settings.only_above) {
      return false;
    }
  }
  if (settings.only_bellow) {
    if (cart_total > settings.only_bellow) {
      return false;
    }
  }
  return true;
};

/**
 * Payshop payment method config object.
 */
const ifthenpayMbWayPaymentMethod = {
  name: 'mbway_ifthen_for_woocommerce',
  label: React.createElement(Label, null),
  content: React.createElement(Content, null),
  edit: React.createElement(Content, null),
  icons: null,
  canMakePayment: CanMakePayment,
  ariaLabel: label,
  supports: {
    features: settings.supports
  }
};
(0,_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_0__.registerPaymentMethod)(ifthenpayMbWayPaymentMethod);
})();

/******/ })()
;
//# sourceMappingURL=mbway-block.js.map