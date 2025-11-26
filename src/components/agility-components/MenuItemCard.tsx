/**
 * MenuItemCard Component
 *
 * A reusable card component for displaying a single menu item
 * in the MenuBoard layout.
 */

import { type ContentItem, AgilityPic, ImageField } from "@agility/nextjs"

export interface MenuItem {
	name: string
	description?: string
	price?: number // Stored in cents (e.g., 699 = $6.99)
	image?: ImageField
	category?: ContentItem<{ name: string }>
}

interface MenuItemCardProps {
	item: ContentItem<MenuItem>
	index: number
}

/**
 * MenuItemCard Component
 *
 * Displays a single menu item in a card format with image, name, description, and price.
 *
 * @param item - The menu item content item
 * @param index - The index of the item (used for background color alternation)
 * @returns A card element displaying the menu item
 */
export default function MenuItemCard({ item, index }: MenuItemCardProps) {
	const itemImageUrl = item.fields.image?.url && item.fields.image.url.trim() !== ""
		? item.fields.image.url
		: `https://placehold.co/400x250/4F46E5/FFFFFF?text=${encodeURIComponent(item.fields.name)}`
	const isPlaceholder = itemImageUrl.startsWith("https://placehold.co")

	// Background colors: first 4 items (rows 1-2) = white, last 2 items (row 3) = bright yellow
	const bgColor = index >= 4 ? "bg-yellow-200" : "bg-white"

	return (
		<div
			className={`${bgColor} flex flex-col h-full relative overflow-hidden border-r border-b border-gray-200 pt-8`}
		>
			{/* Image - constrained to fit within card */}
			<div className="relative w-full flex items-center justify-center h-80" >
				{isPlaceholder ? (
					<img
						src={itemImageUrl}
						alt={item.fields.image?.label || item.fields.name || ""}
						className="w-full h-full object-cover"
					/>
				) : item.fields.image ? (
					<div className="w-full flex items-center justify-center ">
						<AgilityPic
							image={item.fields.image}
							className="w-full  object-cover"
							fallbackWidth={400}
						/>
					</div>
				) : (
					<div className="w-full h-full bg-gray-100 flex items-center justify-center">
						<span className="text-gray-400 text-lg">No Image</span>
					</div>
				)}
			</div>

			{/* Text content below image - all centered */}
			<div className="flex-1 flex flex-col  items-center text-center p-3 md:p-4 min-h-0 relative z-10	">
				{/* Item name - centered, prominent, using Kaushan Script font */}
				<h4
					className="text-5xl font-bold mb-1 md:mb-2 leading-tight text-gray-900 "
					style={{ fontFamily: 'var(--font-kaushan-script)' }}
				>
					{item.fields.name}
				</h4>
				{/* Description - centered, readable, limited to 2 lines */}
				{item.fields.description && (
					<p className="text-3xl text-gray-700 line-clamp-2 leading-tight mb-2">
						{item.fields.description}
					</p>
				)}
				{/* Price - centered at bottom, large and bold */}
				{item.fields.price !== undefined && (
					<div className="text-5xl font-bold text-gray-900 mt-1 tracking-tight">
						${(item.fields.price / 100).toFixed(2)}
					</div>
				)}
			</div>
		</div>
	)
}

