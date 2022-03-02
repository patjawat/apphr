import Document, { DocumentContext,Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const originalRenderPage = ctx.renderPage

    // return initialProps
    ctx.renderPage = () =>
    originalRenderPage({
      // Useful for wrapping the whole react tree
      enhanceApp: (App) => App,
      // Useful for wrapping in a per-page basis
      enhanceComponent: (Component) => Component,
    })

  // Run the parent `getInitialProps`, it now includes the custom `renderPage`
  // const initialProps = await Document.getInitialProps(ctx)

  return initialProps
  }
  render() {
    return (
      <Html>
        <Head />
        <body className="sidebar-mini" style={{height: 'auto'}}>
          <div className="wrapper">
          <Main />
          <NextScript />
          </div>
        </body>
      </Html>
    )
  }
}

export default MyDocument