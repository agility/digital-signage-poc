import MainTemplate from "./MainTemplate"

export const getPageTemplate = (templateName: string) => {
	switch (templateName) {
		case "MainTemplate":
		case "Signage Page":
		case "SignagePage":
		case "Signage-Page":
			return MainTemplate
		default:
			return MainTemplate
	}
}

