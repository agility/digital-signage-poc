/**
 * Header Component
 *
 * An Agility CMS module component that displays a header section
 * with title, subtitle, and optional logo for digital signage displays.
 */

import { getContentItem } from "@/lib/cms/getContentItem"
import { type UnloadedModuleProps, AgilityPic } from "@agility/nextjs"

/**
 * Interface defining the structure of the Header component fields.
 * The field names must match the field reference names in Agility CMS.
 */
export interface HeaderFields {
	title?: string
	subtitle?: string
	logo?: {
		url: string
		label: string
	}
}

/**
 * Header Component
 *
 * Displays a header section optimized for digital signage with large, readable text.
 *
 * @param module - The Agility CMS module object containing contentID
 * @param languageCode - The language code for localized content
 * @returns A header section with title, subtitle, and optional logo
 */
const Header = async ({ module, languageCode }: UnloadedModuleProps) => {
	const {
		fields: { title, subtitle, logo },
		contentID,
	} = await getContentItem<HeaderFields>({
		contentID: module.contentid,
		languageCode,
	})

	// Use placeholder if no logo provided or URL is empty
	const logoUrl = logo?.url && logo.url.trim() !== ""
		? logo.url
		: `https://placehold.co/200x200/4F46E5/FFFFFF?text=${encodeURIComponent(title || "Logo")}`
	const logoAlt = logo?.label || title || "Logo"
	const isPlaceholder = logoUrl.startsWith("https://placehold.co")

	return (
		<header
			id={`${contentID}`}
			className="relative "
			data-agility-component={contentID}
		>


			{title && (
				<header className="bg-linear-to-r from-gray-500 to-gray-700 text-white px-6 py-4 md:py-6 w-full flex items-center justify-center shadow-lg z-20">
					<h1
						className="text-6xl font-bold text-center uppercase tracking-wide"
						style={{ fontFamily: 'var(--font-kaushan-script)' }}
					>
						{title}
					</h1>
				</header>
			)}
			{subtitle && (
				<h2
					data-agility-field="subtitle"
					className="text-3xl font-semibold text-center bg-linear-to-r from-gray-100 to-gray-200 text-gray-600 dark:text-gray-400 p-3"
				>
					{subtitle}
				</h2>
			)}
		</header>
	)
}

export default Header

