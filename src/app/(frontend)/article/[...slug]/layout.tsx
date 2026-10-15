export default function ArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const siteId = process.env.NEXT_PUBLIC_ADS_KEEPER_SITE_ID || '1109794'

  return (
    <>
      {/* Load Adskeeper only on routes that contain intentional ad slots. */}
      <script src={`https://jsc.adskeeper.com/site/${siteId}.js`} async />
      {children}
    </>
  )
}
