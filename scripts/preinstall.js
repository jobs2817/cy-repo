if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.log('please use pnpm install')
  process.exit(1)
}
