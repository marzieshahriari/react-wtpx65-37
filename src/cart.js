import React,{useState} from 'react';

const img_cart = 'https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg'

const img_url = 'https://dkstatics-public.digikala.com/digikala-products/120090704.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90'

export default function Cart (props){

  const {selected_products} = props;

    return (
      <div className='parent_cart'>
        <a className='page_cart'>
          <img className='icon_cart' src={img_cart}/>
          {selected_products.length ? <i>{selected_products.length}</i>:''}
        </a>
        <div className='sub_part'>
          <div className='cart_count'>
              <div>
                  {selected_products.map((item) => (
                    <div key={item.id}  className='products_cart' >
                      <img className="product_cart_img" src={img_url}/>
                      <div className='product_cart_content'>
                        <ul>
                          <li>{item.name}</li>
                          <li>{item.des}</li>  
                        </ul>
                      </div>  
                    </div>
                  ))}
                  
              </div>
              {
                selected_products.length ? '':<p className='empty_message'>هیج محصولی یافت نشد.</p>
              }
          </div>
        </div>
      </div>
    );
  
}















