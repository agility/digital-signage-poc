/**
 * Multi-Board Demo Page
 *
 * Simulates a multi-screen digital signage setup with iframes
 * arranged in a 3D arc pattern, like viewing a drive-through display.
 *
 * Layout:
 * - Left: Home page (full-screen promotional image)
 * - Middle: Menu board (breakfast menu)
 * - Right: Price list
 *
 * Simulates vertical 1080p displays (1080px wide x 1920px tall)
 * All frames maintain their 1080x1920 aspect ratio regardless of browser size
 */

import type { Metadata } from 'next'
import MultiBoardView from './MultiBoardView'

export async function generateMetadata(): Promise<Metadata> {
	// Basic metadata - can be enhanced with SEO fields from Agility
	return {
		title: 'Signboard Emulator',
		description: 'Simulates a multi-screen digital signage setup with iframes arranged in a 3D arc pattern, like viewing a drive-through display.',
	}
}

export default function MultiBoardPage() {
	return <MultiBoardView />
}
