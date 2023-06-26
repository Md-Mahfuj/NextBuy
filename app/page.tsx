import Image from 'next/image'
import axios from "axios";



import ListProducts from "@/components/products/ListProducts";

const getProducts = async () => {
  const { data } = await axios.get(`${process.env.API_URL}/api/products`);
  return data;
};

 const Home = async()=> {
  const productsData = await getProducts();

  return (
    <main className="flex min-h-screen flex-col">
       <ListProducts data={productsData} />
    </main>
  )
}

export default Home;
