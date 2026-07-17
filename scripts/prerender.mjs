import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const clientHtmlPath = path.join(root, 'dist', 'index.html')

const { render } = await import(path.join(root, 'dist-ssr', 'entry-server.js'))

const template = readFileSync(clientHtmlPath, 'utf-8')
const appHtml = render()
const finalHtml = template.replace('<!--app-html-->', appHtml)

writeFileSync(clientHtmlPath, finalHtml)
rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })

console.log('Prerendered index.html with static content for SEO.')
