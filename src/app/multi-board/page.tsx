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

'use client'

import { useEffect, useState, useRef } from 'react'

export default function MultiBoardPage() {
	const vertical1080pWidth = 1080
	const vertical1080pHeight = 1920
	const aspectRatio = vertical1080pWidth / vertical1080pHeight // 0.5625 (9:16)

	// Gap between frames
	const gap = 32 // 32px gap between frames

	// Calculate the total width needed for 3 frames + gaps
	const totalFrameWidth = vertical1080pWidth * 3 + gap * 2
	const totalFrameHeight = vertical1080pHeight

	// State to track viewport dimensions for scaling
	const [scale, setScale] = useState(1)

	// State to track which iframe set is visible (for double-buffering)
	const [activeSet, setActiveSet] = useState<'a' | 'b'>('a')

	// Refs for iframes to enable refresh (double-buffered)
	const leftIframeRefA = useRef<HTMLIFrameElement>(null)
	const middleIframeRefA = useRef<HTMLIFrameElement>(null)
	const rightIframeRefA = useRef<HTMLIFrameElement>(null)
	const leftIframeRefB = useRef<HTMLIFrameElement>(null)
	const middleIframeRefB = useRef<HTMLIFrameElement>(null)
	const rightIframeRefB = useRef<HTMLIFrameElement>(null)

	useEffect(() => {
		const calculateScale = () => {
			const viewportWidth = window.innerWidth
			const viewportHeight = window.innerHeight

			// Calculate scale based on both width and height constraints
			// Leave some padding (10% margin on each side)
			const widthScale = (viewportWidth * 0.9) / totalFrameWidth
			const heightScale = (viewportHeight * 0.9) / totalFrameHeight

			// Use the smaller scale to ensure everything fits
			const newScale = Math.min(widthScale, heightScale, 1) // Cap at 1x for clarity
			setScale(newScale)
		}

		calculateScale()
		window.addEventListener('resize', calculateScale)
		return () => window.removeEventListener('resize', calculateScale)
	}, [])

	// Auto-refresh iframes every 10 seconds with smooth transitions
	useEffect(() => {
		let loadCount = 0
		const expectedLoads = 3

		const refreshIframes = () => {
			// Determine which set is currently hidden (the one we'll refresh)
			const hiddenSet = activeSet === 'a' ? 'b' : 'a'

			// Get refs for the hidden set
			const leftRef = hiddenSet === 'a' ? leftIframeRefA : leftIframeRefB
			const middleRef = hiddenSet === 'a' ? middleIframeRefA : middleIframeRefB
			const rightRef = hiddenSet === 'a' ? rightIframeRefA : rightIframeRefB

			// Reset load counter
			loadCount = 0

			// Handler for when all iframes are loaded
			const handleAllLoaded = () => {
				loadCount++
				if (loadCount >= expectedLoads) {
					// Small delay to ensure rendering is complete
					setTimeout(() => {
						setActiveSet(hiddenSet)
					}, 200)
				}
			}

			// Set up load event listeners
			const leftHandler = () => handleAllLoaded()
			const middleHandler = () => handleAllLoaded()
			const rightHandler = () => handleAllLoaded()

			if (leftRef.current) {
				leftRef.current.addEventListener('load', leftHandler, { once: true })
				const baseSrc = '/en-us/home'
				leftRef.current.src = `${baseSrc}?refresh=${Date.now()}`
			}
			if (middleRef.current) {
				middleRef.current.addEventListener('load', middleHandler, { once: true })
				const baseSrc = '/en-us/breakfast-menu'
				middleRef.current.src = `${baseSrc}?refresh=${Date.now()}`
			}
			if (rightRef.current) {
				rightRef.current.addEventListener('load', rightHandler, { once: true })
				const baseSrc = '/en-us/price-list'
				rightRef.current.src = `${baseSrc}?refresh=${Date.now()}`
			}

			// Fallback: if iframes don't fire load events (e.g., already cached), swap after timeout
			setTimeout(() => {
				if (loadCount < expectedLoads) {
					setActiveSet(hiddenSet)
				}
			}, 2000)
		}

		const interval = setInterval(refreshIframes, 10000) // 10 seconds

		return () => clearInterval(interval)
	}, [activeSet])

	// Scaled dimensions
	const scaledWidth = vertical1080pWidth * scale
	const scaledHeight = vertical1080pHeight * scale
	const scaledGap = gap * scale

	return (
		<div className="w-screen h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black">
			{/* 3D Perspective Container */}
			<div
				className="w-full h-full flex items-center justify-center"
				style={{
					perspective: '3000px',
					perspectiveOrigin: 'center center'
				}}
			>
				{/* Arc Container - scales to fit viewport while maintaining aspect ratios */}
				<div
					className="flex items-center justify-center"
					style={{
						transform: `rotateY(-2deg) scale(${scale})`,
						transformStyle: 'preserve-3d',
						gap: `${scaledGap}px`
					}}
				>
					{/* Left Panel - Home Page (Promotional Image) */}
					<div
						className="border-2 border-gray-700 shadow-2xl overflow-hidden relative"
						style={{
							width: `${vertical1080pWidth}px`,
							height: `${vertical1080pHeight}px`,
							transform: 'rotateY(18deg) translateZ(50px)',
							transformStyle: 'preserve-3d',
							backfaceVisibility: 'hidden'
						}}
					>
						{/* Iframe Set A */}
						<iframe
							ref={leftIframeRefA}
							src="/en-us/home"
							className="border-0 absolute inset-0 transition-opacity duration-500"
							title="Home - Promotional Display"
							scrolling="no"
							style={{
								width: `${vertical1080pWidth}px`,
								height: `${vertical1080pHeight}px`,
								display: 'block',
								border: 'none',
								opacity: activeSet === 'a' ? 1 : 0,
								pointerEvents: activeSet === 'a' ? 'auto' : 'none'
							}}
						/>
						{/* Iframe Set B */}
						<iframe
							ref={leftIframeRefB}
							src="/en-us/home"
							className="border-0 absolute inset-0 transition-opacity duration-500"
							title="Home - Promotional Display"
							scrolling="no"
							style={{
								width: `${vertical1080pWidth}px`,
								height: `${vertical1080pHeight}px`,
								display: 'block',
								border: 'none',
								opacity: activeSet === 'b' ? 1 : 0,
								pointerEvents: activeSet === 'b' ? 'auto' : 'none'
							}}
						/>
					</div>

					{/* Middle Panel - Menu Board */}
					<div
						className="border-2 border-gray-700 shadow-2xl overflow-hidden relative"
						style={{
							width: `${vertical1080pWidth}px`,
							height: `${vertical1080pHeight}px`,
							transform: 'rotateY(0deg) translateZ(50px)',
							transformStyle: 'preserve-3d',
							backfaceVisibility: 'hidden'
						}}
					>
						{/* Iframe Set A */}
						<iframe
							ref={middleIframeRefA}
							src="/en-us/breakfast-menu"
							className="border-0 absolute inset-0 transition-opacity duration-500"
							title="Breakfast Menu Board"
							scrolling="no"
							style={{
								width: `${vertical1080pWidth}px`,
								height: `${vertical1080pHeight}px`,
								display: 'block',
								border: 'none',
								opacity: activeSet === 'a' ? 1 : 0,
								pointerEvents: activeSet === 'a' ? 'auto' : 'none'
							}}
						/>
						{/* Iframe Set B */}
						<iframe
							ref={middleIframeRefB}
							src="/en-us/breakfast-menu"
							className="border-0 absolute inset-0 transition-opacity duration-500"
							title="Breakfast Menu Board"
							scrolling="no"
							style={{
								width: `${vertical1080pWidth}px`,
								height: `${vertical1080pHeight}px`,
								display: 'block',
								border: 'none',
								opacity: activeSet === 'b' ? 1 : 0,
								pointerEvents: activeSet === 'b' ? 'auto' : 'none'
							}}
						/>
					</div>

					{/* Right Panel - Price List */}
					<div
						className="border-2 border-gray-700 shadow-2xl overflow-hidden relative"
						style={{
							width: `${vertical1080pWidth}px`,
							height: `${vertical1080pHeight}px`,
							transform: 'rotateY(-18deg) translateZ(50px)',
							transformStyle: 'preserve-3d',
							backfaceVisibility: 'hidden'
						}}
					>
						{/* Iframe Set A */}
						<iframe
							ref={rightIframeRefA}
							src="/en-us/price-list"
							className="border-0 absolute inset-0 transition-opacity duration-500"
							title="Price List"
							scrolling="no"
							style={{
								width: `${vertical1080pWidth}px`,
								height: `${vertical1080pHeight}px`,
								display: 'block',
								border: 'none',
								opacity: activeSet === 'a' ? 1 : 0,
								pointerEvents: activeSet === 'a' ? 'auto' : 'none'
							}}
						/>
						{/* Iframe Set B */}
						<iframe
							ref={rightIframeRefB}
							src="/en-us/price-list"
							className="border-0 absolute inset-0 transition-opacity duration-500"
							title="Price List"
							scrolling="no"
							style={{
								width: `${vertical1080pWidth}px`,
								height: `${vertical1080pHeight}px`,
								display: 'block',
								border: 'none',
								opacity: activeSet === 'b' ? 1 : 0,
								pointerEvents: activeSet === 'b' ? 'auto' : 'none'
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

