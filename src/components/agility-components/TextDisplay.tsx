/**
 * TextDisplay Component
 *
 * An Agility CMS module component that displays text content
 * with configurable text sizes for digital signage displays.
 */

import { getContentItem } from "@/lib/cms/getContentItem"
import { renderHTML, type UnloadedModuleProps } from "@agility/nextjs"

/**
 * Interface defining the structure of the TextDisplay component fields.
 * The field names must match the field reference names in Agility CMS.
 */
export interface TextDisplayFields {
	title?: string
	content?: string
	textSize?: "large" | "medium" | "small"
}

/**
 * TextDisplay Component
 *
 * Displays text content with configurable sizes optimized for digital signage.
 *
 * @param module - The Agility CMS module object containing contentID
 * @param languageCode - The language code for localized content
 * @returns A section element with the rendered text content
 */
const TextDisplay = async ({ module, languageCode }: UnloadedModuleProps) => {
	const {
		fields: { title, content, textSize = "medium" },
		contentID,
	} = await getContentItem<TextDisplayFields>({
		contentID: module.contentid,
		languageCode,
	})

	// Map text sizes to Tailwind classes for large displays
	const sizeClasses = {
		large: "text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
		medium: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
		small: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
	}

	return (
		<section
			id={`${contentID}`}
			className="relative px-8 py-12 md:py-16 lg:py-20"
			data-agility-component={contentID}
		>
			<div className="max-w-7xl mx-auto">
				{title && (
					<h2
						data-agility-field="title"
						className={`${sizeClasses[textSize]} font-bold mb-6 md:mb-8 lg:mb-10 text-center`}
					>
						{title}
					</h2>
				)}
				{content && (
					<div
						data-agility-field="content"
						data-agility-html
						className={`${sizeClasses[textSize]} prose prose-lg max-w-full text-center leading-relaxed`}
						dangerouslySetInnerHTML={renderHTML(content)}
					/>
				)}
			</div>
		</section>
	)
}

export default TextDisplay

