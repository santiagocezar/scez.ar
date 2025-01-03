export default import.meta.glob<string>([
    "./captures/*.png",
    "./logo/*.svg",
], { eager: true, import: "default" })
