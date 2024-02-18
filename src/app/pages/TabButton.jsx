import React from 'react'

const TabButton = ({active, selectTab, children}) => {

const buttonClasses = active ? 'text-black/80 dark:text-white border-b border-secondary-500': ' text-black/80 dark:text-[#ADB7BE]';

  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-black dark:hover:text-white uppercase ${buttonClasses}`}>
        {children}
        </p>
    </button>

    )
}

export default TabButton