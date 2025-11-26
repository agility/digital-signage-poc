/**
 * PriceList Component
 *
 * An Agility CMS module component that displays a list of items with prices
 * in a table format optimized for digital signage displays.
 */

import { getContentItem } from "@/lib/cms/getContentItem"
import { getContentList } from "@/lib/cms/getContentList"
import { type UnloadedModuleProps } from "@agility/nextjs"

/**
 * Interface defining the structure of the PriceList component fields.
 * The field names must match the field reference names in Agility CMS.
 */
export interface PriceListFields {
	title?: string
	priceItems?: string // Reference name of the PriceList container
}

/**
 * Interface for individual price list items
 * Note: price is stored in cents (e.g., 699 = $6.99)
 */
export interface PriceListItem {
	itemName: string
	price: number | string // Stored in cents (e.g., 699 = $6.99) - can be string from Text field
	description?: string
}

/**
 * PriceList Component
 *
 * Displays a price list in a table format with large, readable text.
 *
 * @param module - The Agility CMS module object containing contentID
 * @param languageCode - The language code for localized content
 * @returns A section element with the rendered price list
 */
const PriceList = async ({ module, languageCode }: UnloadedModuleProps) => {
	const {
		fields: { title, priceItems },
		contentID,
	} = await getContentItem<PriceListFields>({
		contentID: module.contentid,
		languageCode,
	})

	// Fetch the price list items if a container reference is provided
	let items: PriceListItem[] = []
	if (priceItems) {
		// Handle both string and object formats (LinkedContent field might return object with referencename)
		const referenceName = typeof priceItems === 'string'
			? priceItems
			: (priceItems as any)?.referencename || (priceItems as any)?.referenceName || String(priceItems)

		if (referenceName) {
			const contentList = await getContentList<PriceListItem>({
				referenceName,
				languageCode,
			})
			items = contentList?.items || []
		}
	}

	return (
		<section
			id={`${contentID}`}
			className="relative min-h-screen w-full p-8 md:p-12 lg:p-16"
			data-agility-component={contentID}
		>
			<div className="max-w-7xl mx-auto h-full flex flex-col">

				{items.length > 0 && (
					<div className="flex-1 flex items-center justify-center">
						<div className="w-full max-w-5xl">
							<div className="space-y-3 md:space-y-4 lg:space-y-5">
								{items.map((item, index) => {
									// Handle both ContentItem format (item.fields) and direct format (item)
									const itemData = (item as any).fields || item
									const itemName = itemData.itemName
									const price = itemData.price
									const description = itemData.description

									// Parse price - handle both number (cents) and string formats
									const priceValue = typeof price === 'string'
										? parseFloat(price)
										: (price || 0)
									// Price is stored in cents, so divide by 100
									const priceInDollars = priceValue / 100

									// Alternate background colors for visual interest
									const bgColor = index % 2 === 0 ? "bg-white dark:bg-gray-50" : "bg-gray-50 dark:bg-gray-100"

									return (
										<div
											key={index}
											className={`${bgColor} p-6 md:p-8 lg:p-10 rounded-lg flex justify-between items-center gap-6 md:gap-8`}
										>
											<div className="flex-1">
												<div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 md:mb-3">
													{itemName}
												</div>
												{description && (
													<div className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-600">
														{description}
													</div>
												)}
											</div>
											<div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-gray-100 whitespace-nowrap">
												${priceInDollars.toFixed(2)}
											</div>
										</div>
									)
								})}
							</div>
						</div>
					</div>
				)}
				{items.length === 0 && (
					<p className="text-2xl md:text-3xl lg:text-4xl text-center text-gray-500 dark:text-gray-400">
						No items available
					</p>
				)}
			</div>
		</section>
	)
}

export default PriceList

