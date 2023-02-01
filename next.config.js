const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
})
const nextEnv = require('next-env')
const dotEnvLoad = require('dotenv-load')

dotEnvLoad()

const withNextEnv = nextEnv()

const nextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  experimental: {
    forceSwcTransforms: true,
  },
}

module.exports = nextConfig
