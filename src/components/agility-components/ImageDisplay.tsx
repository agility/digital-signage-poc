/**
 * ImageDisplay Component
 *
 * An Agility CMS module component that displays images
 * with optional captions for digital signage displays.
 */

import { getContentItem } from "@/lib/cms/getContentItem"
import { type UnloadedModuleProps, AgilityPic, ImageField } from "@agility/nextjs"

/**
 * Interface defining the structure of the ImageDisplay component fields.
 * The field names must match the field reference names in Agility CMS.
 */
export interface ImageDisplayFields {
	image?: ImageField
}

/**
 * ImageDisplay Component
 *
 * Displays images optimized for large digital signage displays.
 *
 * @param module - The Agility CMS module object containing contentID
 * @param languageCode - The language code for localized content
 * @returns A section element with the rendered image and optional caption
 */
const ImageDisplay = async ({ module, languageCode }: UnloadedModuleProps) => {
	const {
		fields: { image },
		contentID,
	} = await getContentItem<ImageDisplayFields>({
		contentID: module.contentid,
		languageCode,
	})

	const imageAlt = image?.label || "Display image"

	// Use placeholder if no image provided or URL is empty
	const imageUrl = image?.url && image.url.trim() !== ""
		? image.url
		: `https://placehold.co/1200x675/4F46E5/FFFFFF?text=${encodeURIComponent(imageAlt)}`

	const isPlaceholder = imageUrl.startsWith("https://placehold.co")

	return (
		<section
			id={`${contentID}`}
			data-agility-component={contentID}
		>
			<div className="max-w-7xl mx-auto">
				<div className="relative w-full aspect-video mb-6 md:mb-8 lg:mb-10">
					{isPlaceholder ? (
						<img
							src={imageUrl}
							alt={imageAlt}
							className="w-full h-full object-contain rounded-lg"
							data-agility-field="image"
						/>
					) : image ? (
						<AgilityPic
							image={image}
							className="object-contain rounded-lg"
							data-agility-field="image"
						/>
					) : null}
				</div>
			</div>
		</section>
	)
}

export default ImageDisplay

