import Image from 'next/image'
import Search from '../icons/Search'
import UserCircle from '../icons/UserCircle'
import Heart from '../icons/Heart'
import Cart from '../icons/Cart'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import Dropdown from '@/components/Dropdown'
import { DropdownButton } from '@/components/DropdownLink'
import DropdownLink from '@/components/DropdownLink'

const HeaderMidldle = () => {
    const { user } = useAuth({ middleware: 'guest' })
    const { logout } = useAuth()
    const [open, setOpen] = useState(false)

    return (
        <div className="py-5">
            <div className="container mx-auto flex items-center">
                {/* Logo wrapper */}
                <div className="w-1/4">
                    <Image
                        src="/images/logo.svg"
                        alt="Logo"
                        width="100px"
                        height="60px"
                    />
                </div>

                {/* Search wrapper */}
                <div className="w-1/2">
                    <div className="w-full relative flex">
                        <input
                            className="bg-gray-100 w-full px-4 rounded h-11 border-none focus:outline-none"
                            type="search"
                            placeholder="Search"
                            role="combobox"
                            aria-expanded="false"
                            aria-owns="predictive-search-results-list"
                            aria-controls="predictive-search-results-list"
                            aria-haspopup="listbox"
                            aria-autocomplete="list"
                            autoCorrect="off"
                            autoComplete="off"
                            autoCapitalize="off"
                            spellCheck="false"
                            aria-activedescendant=""
                        />
                        <button className="bg-secondary-color w-20 h-11 flex justify-center items-center absolute top-0 right-0 rounded-tr rounded-br">
                            <Search classes="h-5 w-5 text-white" />
                        </button>
                    </div>
                </div>

                {/* Cart - Wishlist - Myaccount wrapper */}
                <div className="w-1/4 flex items-center justify-end space-x-6">
                    <div className="flex items-center">
                        {user ? (
                            // <button className="flex items-center space-x-1">
                            //     <UserCircle classes="h-6 w-6" />
                            //     <span>{user.name}</span>
                            // </button>
                            <div className="hidden sm:flex sm:items-center sm:ml-6 space-x-1">
                                <UserCircle classes="h-6 w-6" />
                                <Dropdown
                                    align="right"
                                    width="52"
                                    trigger={
                                        <button className="flex items-center text-base font-medium text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out">
                                            <div>{user?.name}</div>

                                            <div className="ml-1">
                                                <svg
                                                    className="fill-current h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </button>
                                    }>
                                    <DropdownLink href="/">
                                        My Orders
                                    </DropdownLink>
                                    <DropdownButton>My Account</DropdownButton>
                                    {/* Authentication */}
                                    <DropdownButton onClick={logout}>
                                        Logout
                                    </DropdownButton>
                                </Dropdown>
                            </div>
                        ) : (
                            <div className="flex">
                                <Link href="/login">
                                    <a className="text-primary-color text-sm font-semibold px-2 border-r border-r-gray-400">
                                        Sign in
                                    </a>
                                </Link>
                                <Link href="/register">
                                    <a className="text-primary-color text-sm font-semibold px-2">
                                        Register
                                    </a>
                                </Link>
                            </div>
                        )}
                    </div>
                    <div className="flex items-center space-x-2">
                        <button>
                            <Heart classes="h-7 w-7" />
                        </button>
                        <button className="relative">
                            <Cart classes="h-7 w-7" />
                            <span className="h-5 w-5 text-xs leading-5 rounded-full bg-secondary-color text-white absolute -top-2 -right-2 z-10">
                                0
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMidldle
