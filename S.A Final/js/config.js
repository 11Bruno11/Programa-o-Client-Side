$(function() {
	simpleCart({
	    cartColumns: [
	        { attr: "name" , label: "Nome" },
	        { attr: "price" , label: "Preço", view: 'currency' },
	        { view: "decrement" , label: false },
	        { attr: "quantity" , label: "Quantidade" },
	        { view: "increment" , label: false },
	        { attr: "total" , label: "SubTotal", view: 'currency' },
	        { view: "remove" , text: "Remover" , label: false }
	    ],

	    cartStyle: "div",

	    // how simpleCart should checkout, see the checkout reference for more info
	    checkout: {
	        type: "PayPal" ,
	        email: "you@yours.com"
	    },

	    currency: "BRL",
	    data: {},
	    language: "english-us",
	    excludeFromCheckout: [
	    	'qty',
	    	'thumb'
	    ],
	    shippingCustom: null,
	    shippingFlatRate: 0,
	    shippingQuantityRate: 0,
	    shippingTotalRate: 0,
	    taxRate: 0,
	    taxShipping: false,
	    beforeAdd               	: null,
	    afterAdd                	: null,
	    load                    	: null,
	    beforeSave              	: null,
	    afterSave               	: null,
	    update                  	: null,
	    ready                   	: null,
	    checkoutSuccess             : null,
	    checkoutFail                : null,
	    beforeCheckout              : null

	});

	simpleStore.init({

		brand : "TopModels",
		numColumns : 3,
		JSONFile : "products.json"

	});

});
