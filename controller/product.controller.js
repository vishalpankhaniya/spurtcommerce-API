var product = require('../models/product.model');
var productService = require('../services/product.service');
// npm import
const path = require('path');
const mongoose = require('mongoose');
var _ = require('lodash');


const ObjectId = require('mongodb').ObjectId;

module.exports.productList = (req, res) => {

	const productData = {
		limit:parseInt(req.query.limit),
		offset:parseInt( req.query.offset),
		keyword: req.query.keyword,
		sku: req.query.sku,
		count: req.query.count,
		manufacturerId: req.query.manufacturerId,
		categoryId: req.query.categoryId,
		price: req.query.price,
		priceFrom: req.query.priceFrom,
		priceTo: req.query.priceTo,
		condition:req.query.condition,
		sku:req.query.sku,
	}

	productService.productList(productData).then((response) => {
		return res.status(200).json({ status: 1, message: response.message, data: response.data });
	}).catch((error) => {
		console.log('error: ', error);
		return res.status(error.status ? error.status : 500).json({ message: error.message ? error.message : 'Internal Server Error' });
	});
}

module.exports.getfeatureproduct = (req, res) => {

	const productData = {
		limit: 10,
		offset: req.query.offset,
		keyword: req.query.keyword,
		sku: req.query.sku,
		count: req.query.count
	}

	productService.getfeatureproduct(productData).then((response) => {
		return res.status(200).json({ status: 1, message: response.message, data: response.data });
	}).catch((error) => {
		console.log('error: ', error);
		return res.status(error.status ? error.status : 500).json({ message: error.message ? error.message : 'Internal Server Error' });
	});
}

module.exports.productDetail = (req, res) => {
	const productId = req.params.id;
	productService.productDetail(productId).then((response) => {
		return res.status(200).json({ status: 1, message: response.message, data: response.data });
	}).catch((error) => {
		console.log('error: ', error);
		return res.status(error.status ? error.status : 500).json({ message: error.message ? error.message : 'Internal Server Error' });
	});
}

module.exports.addProduct = (req, res) => {

	productData = {
		name: req.body.productName,
		description: req.body.productDescription,
		sku: req.body.sku,
		upc: req.body.upc,
		image: req.body.image,
		metaTagTitle: req.body.metaTagTitle,
		category: req.body.categoryId,
		relatedProductId: req.body.relatedProductId,
		manufacturerId: req.body.model,
		manufacturer_id: req.body.model,
		location: req.body.location,
		price: req.body.price,
		minimumQuantity: req.body.minimumQuantity,
		quantity: req.body.quantity,
		subtractStock: req.body.subtractStock,
		stock_status_id: req.body.subtractStock,
		stockStatusId: req.body.outOfStockStatus,
		requiredShipping: req.body.requiredShipping,
		dateAvailable: req.body.dateAvailable,
		condition: req.body.condition,
		is_active: req.body.status,
		isActive: req.body.status,
		sortOrder: req.body.sortOrder,
	}

	productService.addProduct(productData).then((response) => {
		return res.status(200).json({ status: 1, message: response.message, data: response.data });
	}).catch((error) => {
		console.log('error: ', error);
		return res.status(error.status ? error.status : 500).json({ message: error.message ? error.message : 'Internal Server Error' });
	});
}

module.exports.topSellingProduct = (req, res) => {
	productService.topSellingProduct().then((response) => {
		return res.status(200).json({ status: 1, message: response.message, data: response.data });
	}).catch((error) => {
		console.log('error: ', error);
		return res.status(error.status ? error.status : 500).json({ message: error.message ? error.message : 'Internal Server Error' });
	});
}


module.exports.updateProduct = (req, res) => {
	let categoryArr = [];

	productId = req.params.id;

	_.forEach(req.body.categoryId, (category) => {
		
		categoryArr.push(category.categoryId);

	})

	productData = {
		name: req.body.productName,
		description: req.body.productDescription,
		sku: req.body.sku,
		upc: req.body.upc,
		Image: req.body.image,
		metaTagTitle: req.body.metaTagTitle,
		Category: categoryArr,
		relatedProductId: req.body.relatedProductId,
		manufacturerId: req.body.model,
		location: req.body.location,
		price: req.body.price,
		minimumQuantity: req.body.minimumQuantity,
		quantity: req.body.quantity,
		subtractStock: req.body.subtractStock,
		outOfStockStatus: req.body.outOfStockStatus,
		requiredShipping: req.body.requiredShipping,
		dateAvailable: req.body.dateAvailable,
		condition: req.body.condition,
		status: req.body.status,
		sortOrder: req.body.sortOrder,
		productSpecial: req.body.productSpecial,
		productDiscount: req.body.productDiscount,
		productOptions: req.body.productOptions
	}

	productService.updateProduct(productId, productData).then((response) => {
		return res.status(200).json({ status: 1, message: response.message, data: response.data });
	}).catch((error) => {
		console.log('error: ', error);
		return res.status(error.status ? error.status : 500).json({ message: error.message ? error.message : 'Internal Server Error' });
	});
}


module.exports.deleteProduct = (req, res) => {

	productId = req.params.id;

	productService.deleteProduct(productId)
		.then((response) => {
			return res.status(200).json({ status: 1, message: response.message, data: response.data });
		})
		.catch((error) => {
			console.log('error: ', error);
			return res.status(error.status ? error.status : 500).json({ message: error.message ? error.message : 'Internal Server Error' });
		});
}


module.exports.updateFeatureProduct = (req, res) => {

	productId = req.params.id;

	console.log("productID------------>>>>>>>>>>", productId);

	const productData={
		is_featured:parseInt(req.body.isFeature),
		isFeatured:parseInt(req.body.isFeature)
	}

	productService.updateFeatureProduct(productId,productData).then((response) => {
		return res.status(200).json({ status: 1, message: response.message, data: response.data });
	}).catch((error) => {
		console.log('error: ', error);
		return res.status(error.status ? error.status : 500).json({ message: error.message ? error.message : 'Internal Server Error' });
	});
}








