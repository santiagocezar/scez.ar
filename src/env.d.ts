/// <reference types="astro/client" />

module "*.yaml" {
    const doc: any
    export default doc
}

module "*.yml" {
    export { default } from "*.yaml"
}