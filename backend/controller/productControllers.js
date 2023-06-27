import Product from "../model/product";

import APIFilters from "../utils/APIFilters";

export const newProduct = async (req,res,next)=>{
    const product = await Product.create(req.body);

    res.status(201).json({
        product,
    });
}

// export const getProducts = async (req,res,next)=>{

//     const apiFilters = new APIFilters(Product.find(), req.query).search().filter()
//     const products = await apiFilters.query ;
//     console.log("products",products);
//     res.status(200).json({
//         products,
//     });
// }

export const getProducts = async (req, res, next) => {
    const resPerPage = 3;
    const productsCount = await Product.countDocuments();
  
    const apiFilters = new APIFilters(Product.find(), req.query)
      .search()
      .filter();
  
    let products = await apiFilters.query;
    const filteredProductsCount = products.length;
  
    apiFilters.pagination(resPerPage);
  
    products = await apiFilters.query.clone();
  
    res.status(200).json({
      productsCount,
      resPerPage,
      filteredProductsCount,
      products,
    });
  };
  



export const getProduct = async (req,res,next)=>{
    const product = await Product.findById(req.query.id);

    if(!product){
        res.status(400).json({
            error:"Product Not found"
            
        });

    }
    res.status(200).json({
        product ,
    });
}