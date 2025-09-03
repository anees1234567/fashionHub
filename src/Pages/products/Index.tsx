import React, { useState } from 'react';
import ProductCard from './components/Card';
import { useQuery } from '@tanstack/react-query';
import { fetchProductsService } from './service';
import { Pagination, Stack } from '@mui/material';

const ProductList = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [searchText,setSearchText]=useState("")

   const { data: products, isLoading, isError } = useQuery({
  queryKey: ["products"],
  queryFn:fetchProductsService,
  retry: 2,
  refetchOnMount:true,
  refetchOnWindowFocus:true
});


const handlesearchChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
  setSearchText(event?.target?.value);
  setCurrentPage(1);
}

 const filteredProducts = products?.response?.filter(product =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  ) || [];

  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / 10);

  const startIndex = (currentPage - 1) * 10;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + 10);

  const handlePageChange = (_, value: number) => {
    setCurrentPage(value);
  };
 
 
  return (
    <div className="p-2 min-h-screen">
      <div className="w-full max-w-fit mx-auto">
        <div  className='mb-2'>
          <input
            type="text"
            value={searchText}
            onChange={handlesearchChange}
            placeholder="Search products by title..."
            className="w-full sm:w-1/2 md:w-1/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6  ">
          {paginatedProducts?.map((product, index) => (
            <ProductCard
              key={index}
              imageUrl={product.image}
              name={product.title.length > 15 ? product.title.slice(0, 15) + "…" : product.title}
              cateogory={product.category}
              price={product?.price}
              rating={product?.rating?.rate}
              ratingCount={product?.rating?.count}
            />
          ))}
        </div>

           <Stack spacing={2} className="mt-6 items-center">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="secondary"
            shape="rounded"
          />
        </Stack>
        
      </div>
    </div>
  );
};

export default ProductList;