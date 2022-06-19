import Nike from '../../assets/collections/nike-logo.svg';
import Adidas from '../../assets/collections/adidas-logo.svg';
import Puma from '../../assets/collections/puma-logo.svg';
import Reebok from '../../assets/collections/reebok-logo.svg';
import Vans from '../../assets/collections/vans-logo.svg';
import Jordan from '../../assets/collections/jordan-logo.svg';
import { Link } from 'react-router-dom';
// import {collections} from '../../data.js'

const CollectionsCards = () => {
  return (
    <div className='collections-wrapper flex flex-wrap mt-12 justify-center mb-3 lg:mb-12'>
      <Link to={`/products/${'nike'}`}>
      <div
        before='Nike'
        className='w-[15rem] bg-white xl:w-[20rem] text-pale-orange text-xl md:text-2xl uppercase cursor-pointer h-48 xl:h-60 border border-grayish-blue rounded-md mx-4 mb-10 flex items-center jusitfy-center relative after:content-[attr(before)] after:absolute after:flex after:w-full after:justify-center after:opacity-0 hover:after:opacity-100 before:absolute before:bg-[rgba(255,_125,_27,_0.9)] before:inset-0 text-center before:h-0 hover:before:h-full before:transition-all'
      >
        <picture className='mx-auto'>
          <img src={Nike} alt='nike logo' className='p-4 xl:p-0' />
        </picture>
      </div>
      </Link>
      <Link to={`/products/${'adidas'}`}>
      <div
        before='Adidas'
        className='w-[15rem] bg-white xl:w-[20rem] text-pale-orange text-xl md:text-2xl uppercase cursor-pointer h-48 xl:h-60 border border-grayish-blue rounded-md mx-4 mb-10 flex items-center jusitfy-center relative after:content-[attr(before)] after:absolute after:flex after:w-full after:justify-center after:opacity-0 hover:after:opacity-100 before:absolute before:bg-[rgba(255,_125,_27,_0.9)] before:inset-0 text-center before:h-0 hover:before:h-full before:transition-all'
      >
        <picture className='mx-auto'>
          <img src={Adidas} alt='adidas logo' className='p-4 xl:p-0' />
        </picture>
      </div>
      </Link>
      <Link to={`/products/${'puma'}`}>
      <div
        before='Puma'
        className='w-[15rem] bg-white xl:w-[20rem] text-pale-orange text-xl md:text-2xl uppercase cursor-pointer h-48 xl:h-60 border border-grayish-blue rounded-md mx-4 mb-10 flex items-center jusitfy-center relative after:content-[attr(before)] after:absolute after:flex after:w-full after:justify-center after:opacity-0 hover:after:opacity-100 before:absolute before:bg-[rgba(255,_125,_27,_0.9)] before:inset-0 text-center before:h-0 hover:before:h-full before:transition-all'
      >
        <picture className='mx-auto'>
          <img src={Puma} alt='puma logo' className='p-4 xl:p-0' />
        </picture>
      </div>
      </Link>
      <Link to={`/products/${'reebok'}`}>      
      <div
        before='Reebok'
        className='w-[15rem] bg-white xl:w-[20rem] text-pale-orange text-xl md:text-2xl uppercase cursor-pointer h-48 xl:h-60 border border-grayish-blue rounded-md mx-4 mb-10 flex items-center jusitfy-center relative after:content-[attr(before)] after:absolute after:flex after:w-full after:justify-center after:opacity-0 hover:after:opacity-100 before:absolute before:bg-[rgba(255,_125,_27,_0.9)] before:inset-0 text-center before:h-0 hover:before:h-full before:transition-all'
      >
        <picture className='mx-auto'>
          <img src={Reebok} alt='reebok logo' className='p-4 xl:p-0' />
        </picture>
      </div>
      </Link>
      <Link to={`/products/${'vans'}`}>
      <div
        before='Vans'
        className='w-[15rem] bg-white xl:w-[20rem] text-pale-orange text-xl md:text-2xl uppercase cursor-pointer h-48 xl:h-60 border border-grayish-blue rounded-md mx-4 mb-10 flex items-center jusitfy-center relative after:content-[attr(before)] after:absolute after:flex after:w-full after:justify-center after:opacity-0 hover:after:opacity-100 before:absolute before:bg-[rgba(255,_125,_27,_0.9)] before:inset-0 text-center before:h-0 hover:before:h-full before:transition-all'
      >
        <picture className='mx-auto'>
          <img src={Vans} alt='vans logo' className='p-4 xl:p-0' />
        </picture>
      </div>
      </Link>
      <Link to={`/products/${'jordan'}`}>
      <div
        before='Jordan'
        className='w-[15rem] bg-white xl:w-[20rem] text-pale-orange text-xl md:text-2xl uppercase cursor-pointer h-48 xl:h-60 border border-grayish-blue rounded-md mx-4 mb-10 flex items-center jusitfy-center relative after:content-[attr(before)] after:absolute after:flex after:w-full after:justify-center after:opacity-0 hover:after:opacity-100 before:absolute before:bg-[rgba(255,_125,_27,_0.9)] before:inset-0 text-center before:h-0 hover:before:h-full before:transition-all'
      >
        <picture className='mx-auto'>
          <img src={Jordan} alt='jordan logo' className='p-4 xl:p-0' />
        </picture>
      </div>
    </Link>
    </div>
  );
};

export default CollectionsCards;
