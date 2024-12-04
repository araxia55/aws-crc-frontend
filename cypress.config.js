import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    supportFile: false
  }
})

// Setup baseUrl
module.exports = {
  baseUrl: 'http://localhost:4321/',
};