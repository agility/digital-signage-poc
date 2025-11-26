'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'

interface MenuOption {
	value: string
	label: string
	path: string
}

const menuOptions: MenuOption[] = [
	{ value: 'breakfast', label: 'Breakfast Menu', path: '/breakfast-menu' },
	{ value: 'lunch', label: 'Lunch Menu', path: '/lunch-menu' },
	{ value: 'dinner', label: 'Dinner Menu', path: '/dinner-menu' },
]

export default function MenuSelector() {
	const router = useRouter()
	const pathname = usePathname()
	const [selectedMenu, setSelectedMenu] = useState(() => {
		// Determine current menu from pathname
		if (pathname.includes('breakfast-menu')) return 'breakfast'
		if (pathname.includes('lunch-menu')) return 'lunch'
		if (pathname.includes('dinner-menu')) return 'dinner'
		return 'breakfast' // default
	})

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value
		setSelectedMenu(value)

		const selectedOption = menuOptions.find(opt => opt.value === value)
		if (selectedOption) {
			// Get current locale from pathname
			const locale = pathname.split('/')[1] || 'en-us'
			router.push(`/${locale}${selectedOption.path}`)
		}
	}

	return (
		<div className="fixed top-4 right-4 z-50">
			<select
				value={selectedMenu}
				onChange={handleChange}
				className="px-4 py-2 bg-white border-2 border-gray-300 rounded-lg shadow-lg text-lg font-semibold text-gray-800 cursor-pointer hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
			>
				{menuOptions.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	)
}

