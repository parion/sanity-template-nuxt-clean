/**
 * Sanity CLI Configuration
 * This file configures the Sanity CLI tool with project-specific settings
 * and customizes the Vite bundler configuration.
 * Learn more: https://www.sanity.io/docs/cli
 */

import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  typegen: {
    "path": "./app/sanity/queries.{ts,js}",
    "schema": "../studio/schema.json",
    "generates": "./app/sanity/types.ts",
    "overloadClientMethods": true
  }

})
