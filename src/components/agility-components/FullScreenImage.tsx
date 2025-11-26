/**
 * FullScreenImage Component
 *
 * An Agility CMS module component that displays a full-screen image
 * optimized for digital signage displays. No padding, no margins,
 * fills the entire viewport/container.
 */

import { getContentItem } from "@/lib/cms/getContentItem"
import { type UnloadedModuleProps, AgilityPic } from "@agility/nextjs"

/**
 * Interface defining the structure of the FullScreenImage component fields.
 * The field names must match the field reference names in Agility CMS.
 */
export interface FullScreenImageFields {
	image?: {
		url: string
		label: string
	}
	altText?: string
	objectFit?: "cover" | "contain" // How the image should fit
}

/**
 * FullScreenImage Component
 *
 * Displays a full-screen image that fills the entire viewport/container.
 * Perfect for promotional images, backgrounds, or hero displays.
 *
 * @param module - The Agility CMS module object containing contentID
 * @param languageCode - The language code for localized content
 * @returns A full-screen image element with no padding or margins
 */
const FullScreenImage = async ({ module, languageCode }: UnloadedModuleProps) => {
	const {
		fields: { image, altText, objectFit = "cover" },
		contentID,
	} = await getContentItem<FullScreenImageFields>({
		contentID: module.contentid,
		languageCode,
	})

	// Use placeholder if no image provided or URL is empty
	const imageUrl = image?.url && image.url.trim() !== ""
		? image.url
		: `https://placehold.co/1920x1080/4F46E5/FFFFFF?text=${encodeURIComponent(altText || "Full+Screen+Image")}`
	const imageAlt = altText || image?.label || "Full screen image"
	const isPlaceholder = imageUrl.startsWith("https://placehold.co")

	return (
		<section
			id={`${contentID}`}
			className="relative w-full h-screen"
			data-agility-component={contentID}
		>
			<div className="relative w-full h-full">
				{isPlaceholder ? (
					<img
						src={imageUrl}
						alt={imageAlt}
						className={`w-full h-full object-${objectFit}`}
						data-agility-field="image"
					/>
				) : image ? (
					<AgilityPic
						image={image}
						alt={imageAlt}
						width={1920}
						height={1080}
						className={`w-full h-full object-${objectFit}`}
						data-agility-field="image"
					/>
				) : null}
			</div>
		</section>
	)
}

export default FullScreenImage

