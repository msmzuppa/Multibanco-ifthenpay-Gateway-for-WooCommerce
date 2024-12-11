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
/*!****************************************************!*\
  !*** ./woocommerce-blocks/cofidispay/src/index.js ***!
  \****************************************************/
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
/**
 * External dependencies
 */





//import { CART_STORE_KEY } from '@woocommerce/block-data';
//import { useSelect } from '@wordpress/data';

const settings = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_2__.getSetting)('cofidispay_ifthen_for_woocommerce_data', {});
const defaultLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cofidis Pay (ifthenpay)', 'multibanco-ifthen-software-gateway-for-woocommerce');
const label = (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__.decodeEntities)(settings.title) || defaultLabel;

/**
 * Notices
 */
// Testing notices
/*const { dispatch } = window.wp.data;
dispatch( 'core/notices' ).createErrorNotice(
	__(
		'Payment failed on the gateway. Please try again.',
		'multibanco-ifthen-software-gateway-for-woocommerce'
	),
	{ context: 'wc/checkout' }
);*/
// Testing getting data from the Store API - We need to do this only on page load and show the notice
/*const { cofidisFailedPayment } = useSelect(
	( select ) => select( 'wc/store/cart' ).getCartData().extensions.ifthenpay
);
console.log( cofidisFailedPayment );*/
//useEffect(() => {
//	console.log( 'useEffect' );
//});

/**
 * Content component
 *
 * @param {*} props Props from payment API.
 */
const Content = props => {
  // Only runs when the payment method is selected
  //console.log( props );
  // Are we returning from a failed payment?
  //const { extensions } = useSelect((select) => {
  //	const store = select(CART_STORE_KEY);
  //	const { extensions } = store.getCartData();
  //	return {
  //		extensions,
  //	};
  //});
  //console.log( extensions.ifthenpay.cofidisFailedPayment );
  //if ( extensions?.ifthenpay?.cofidisFailedPayment ) {
  //	console.log( extensions.ifthenpay.cofidisFailedPayment );
  //}
  // Description
  var description = react__WEBPACK_IMPORTED_MODULE_4___default().createElement('div', null, (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__.decodeEntities)(settings.description || ''));
  return description;
};

/**
 * Label component
 *
 * @param {*} props Props from payment API.
 */
const Label = props => {
  var icon = react__WEBPACK_IMPORTED_MODULE_4___default().createElement('img', {
    src: settings.icon,
    width: 28,
    height: 24,
    style: {
      display: 'inline'
    }
  });
  var span = react__WEBPACK_IMPORTED_MODULE_4___default().createElement('span', {
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
  // Error notice?
  var error_notice = checkoutData?.cart?.extensions?.ifthenpay?.cofidisFailedPayment;
  if (error_notice) {
    const {
      dispatch
    } = window.wp.data;
    dispatch('core/notices').createErrorNotice(error_notice, {
      context: 'wc/checkout'
    });
  }
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
const ifthenpayCofidisPaymentMethod = {
  name: 'cofidispay_ifthen_for_woocommerce',
  label: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(Label, null),
  content: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(Content, null),
  edit: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(Content, null),
  icons: null,
  canMakePayment: CanMakePayment,
  ariaLabel: label,
  supports: {
    features: settings.supports
  }
};
(0,_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_0__.registerPaymentMethod)(ifthenpayCofidisPaymentMethod);
})();

/******/ })()
;
//# sourceMappingURL=cofidispay-block.js.map