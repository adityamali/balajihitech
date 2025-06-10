// import axios from 'axios';

// const STRAPI_URL = 'http://127.0.0.1:1337';
// const API_URL = `${STRAPI_URL}/api`;
// const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || '';

// // Configure axios with default headers for Strapi
// const strapiClient = axios.create({
//   headers: {
//     Authorization: API_TOKEN ? `Bearer ${API_TOKEN}` : '',
//   }
// });

// // Helper to format Strapi response data
// const formatStrapiResponse = (data: any) => {
//   if (!data) return null;
  
//   // For collections (arrays)
//   if (data.data && Array.isArray(data.data)) {
//     return data.data.map((item: any) => ({
//       id: item.id,
//       ...item.attributes
//     }));
//   }
  
//   // For single items
//   if (data.data && data.data.id) {
//     return {
//       id: data.data.id,
//       ...data.data.attributes
//     };
//   }
  
//   // Fallback to return raw data
//   return data;
// };

// // Fetch all categories
// export async function getCategories() {
//   try {
//     const response = await axios.get(`${API_URL}/categories?populate=*`, {
//       headers: {
//         Authorization: API_TOKEN ? `Bearer ${API_TOKEN}` : '',
//       }
//     });
//     return formatStrapiResponse(response.data);
//   } catch (error) {
//     console.error('Error fetching categories:', error);
//     return [];
//   }
// }

// // Fetch all products
// export async function getProducts() {
//   try {
//     const response = await axios.get(`${API_URL}/products?populate=*`, {
//       headers: {
//         Authorization: API_TOKEN ? `Bearer ${API_TOKEN}` : '',
//       }
//     });
//     const formattedData = formatStrapiResponse(response.data);
//     console.log('Formatted products:', formattedData);
//     return response.data.data;
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     return [];
//   }
// }

// // Fetch a single product by ID
// export async function getProduct(id: string) {
//   try {
//     const response = await axios.get(`${API_URL}/products/${id}?populate=*`, {
//       headers: {
//         Authorization: API_TOKEN ? `Bearer ${API_TOKEN}` : '',
//       }
//     });
//     console.log('Raw product response:', response.data);
//     const formattedData = formatStrapiResponse(response.data);
//     console.log('Formatted product:', formattedData);
//     return formattedData;
//   } catch (error) {
//     console.error(`Error fetching product ${id}:`, error);
//     return null;
//   }
// }

// // Fetch products by category
// export async function getProductsByCategory(categoryId: string) {
//   try {
//     const response = await axios.get(
//       `${API_URL}/products?filters[category][id][$eq]=${categoryId}&populate=*`,
//       {
//         headers: {
//           Authorization: API_TOKEN ? `Bearer ${API_TOKEN}` : '',
//         }
//       }
//     );
//     return formatStrapiResponse(response.data);
//   } catch (error) {
//     console.error(`Error fetching products for category ${categoryId}:`, error);
//     return [];
//   }
// }

// // Get image URL from Strapi
// export function getStrapiMedia(url: string | null) {
//   if (!url) return null;
//   if (url.startsWith('http') || url.startsWith('//')) return url;
//   console.log('URL:', url);
//   return `${STRAPI_URL}${url}`;
// }