/**
 * MenuBoard Component
 *
 * An Agility CMS module component that displays a menu with nested menu items
 * in a grid layout optimized for digital signage displays.
 */

import { getContentItem } from "@/lib/cms/getContentItem"
import { getContentList } from "@/lib/cms/getContentList"
import { type UnloadedModuleProps, ContentItem, ImageField } from "@agility/nextjs"
import MenuItemCard from "./MenuItemCard"

/**
 * Interface defining the structure of the MenuBoard component fields.
 * The field names must match the field reference names in Agility CMS.
 */
export interface MenuBoardFields {
	title?: string
	menuID?: number // Alternative field name (lowercase)
}

/**
 * Interface for Menu content item
 */
export interface Menu {
	name: string
	description?: string
	menuItems: {
		referencename: string
	} // Reference name of nested MenuItem container
}

export interface Category {
	name: string
}

/**
 * Interface for MenuItem content item
 * Note: price is stored in cents (e.g., 699 = $6.99)
 */
export interface MenuItem {
	name: string
	description?: string
	price?: number // Stored in cents (e.g., 699 = $6.99)
	image?: ImageField
	category?: ContentItem<Category>
}

/**
 * MenuBoard Component
 *
 * Displays a menu with its nested menu items in a grid layout.
 *
 * @param module - The Agility CMS module object containing contentID
 * @param languageCode - The language code for localized content
 * @returns A section element with the rendered menu board
 */
const MenuBoard = async ({ module, languageCode }: UnloadedModuleProps) => {
	const {
		fields,
		contentID,
	} = await getContentItem<MenuBoardFields>({
		contentID: module.contentid,
		languageCode,
	})

	// Handle case-insensitive field name (MenuID or menuID)
	const menuID = fields.menuID
	const title = fields.title
	let menuItems: ContentItem<MenuItem>[] = []
	let menu: ContentItem<Menu> | null = null
	if (menuID) {
		// Fetch the specific menu by ID from the Menus container
		menu = await getContentItem<Menu>({
			contentID: menuID,
			languageCode,
		})

		// If menu has nested menuItems reference, fetch those items
		// The menuItems field contains a child container reference name (e.g., "menus_menuitem6cd4f77f")
		// Handle case-insensitive field name - check all possible variations
		const menuItemsRef = menu.fields.menuItems.referencename


		if (menuItemsRef) {
			try {
				console.log(`Fetching menu items from container: "${menuItemsRef}"`)
				const itemsList = await getContentList<MenuItem>({
					referenceName: menuItemsRef,
					languageCode,
				})
				menuItems = itemsList?.items || [] as ContentItem<MenuItem>[]
			} catch (error) {
				console.error(`Error fetching menu items from container "${menuItemsRef}":`, error)
			}
		}
	}

	// Group items by category if categories exist
	// Use CategoryName (from LinkedContentDropdown) or fallback to category (legacy) or "Other"
	const groupedItems = menuItems.reduce(
		(acc, item) => {
			const category = item.fields.category?.fields.name || "Other"
			if (!acc[category]) {
				acc[category] = []
			}
			acc[category].push(item)
			return acc
		},
		{} as Record<string, ContentItem<MenuItem>[]>,
	)

	const displayTitle = title || menu?.fields.name || "Menu"

	// Flatten all items into a single array (no category grouping for compact design)
	const allItems = Object.values(groupedItems).flat()

	return (
		<section
			id={`${contentID}`}
			className="relative h-screen w-full p-0 overflow-hidden bg-white"
			data-agility-component={contentID}
		>
			<div className="max-w-full mx-auto h-full flex flex-col">
				{/* Prominent Header */}
				<header className="bg-linear-to-r from-red-500 to-red-700 text-white px-6 py-4 md:py-6 flex items-center justify-center shadow-lg z-20">
					<h1
						className="text-4xl md:text-5xl lg:text-6xl font-bold text-center uppercase tracking-wide"
						style={{ fontFamily: 'var(--font-kaushan-script)' }}
					>
						{displayTitle}
					</h1>
				</header>

				{/* Menu Items Grid */}
				{allItems.length > 0 ? (
					<div className="grid grid-cols-2 grid-rows-3 gap-0 flex-1 h-full overflow-hidden">
						{allItems.slice(0, 6).map((item, index) => (
							<MenuItemCard key={index} item={item} index={index} />
						))}
					</div>
				) : (
					<div className="flex-1 flex items-center justify-center">
						<p className="text-2xl md:text-3xl lg:text-4xl text-center text-gray-500 dark:text-gray-400">
							No menu items available
						</p>
					</div>
				)}
			</div>
		</section>
	)
}

export default MenuBoard

