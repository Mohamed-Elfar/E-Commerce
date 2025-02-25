import React, { useMemo } from 'react'
import styles from './Home.module.css'
import useFetch from '../../Hooks/useFetch';
import CardFour from '../CardFour/CardFour';
export default function Home() {
   const { data, loading, error } = useFetch(
      "get",
      "https://ecommerce.routemisr.com/api/v1/products"
    );
    const groupedItems = useMemo(() => {
      return data?.data?.reduce((acc, item) => {
        const categoryName = item.category?.name || "Uncategorized";
        if (!acc[categoryName]) {
          acc[categoryName] = [];
        }
        acc[categoryName].push(item);
        return acc;
      }, {});
    }, [data?.data]);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error}</p>;
    }
  return (
    
    <main>

      {/* cardFour */}
          <div className="row row-cols-4">
            {groupedItems &&
              Object.entries(groupedItems).map(([categoryName, items]) => (
                <div className="col" key={categoryName}>
                  <CardFour
                    items={items.slice(0, 4)}
                    className={categoryName.toLowerCase().replace(/\s+/g, "-")}
                    subTitle={`up to 60% off | ${categoryName}`}
                    show={false}
                  />
                </div>
              ))}
          </div>
        </main>

  )
}
