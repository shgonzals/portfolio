import Link from 'next/link'

const NavLink = ({href, title, onClose}) => {
    return (
       <div onClick={onClose}  className='block py-2 pl-3 pr-4
       text-[#ADB7BE] uppercase text-xs font-semibold  rounded md:p-0
       hover:text-pink-500 hover:font-bold'>
            <Link href={href} className=''>
            {title}
        </Link>
       </div> 
    )
};

export default NavLink;