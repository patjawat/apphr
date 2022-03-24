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
             <Head>
          <link href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        </Head>
        <body className="sidebar-mini layout-fixed " style={{height: 'auto'}}>
          <Main />
          <NextScript />
        </body>
        <script src="/admin-lte/plugins/jquery/jquery.min.js"></script>

<script src="/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>

<script src="/admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>

<script src="/admin-lte/dist/js/adminlte.min.js?v=3.2.0"></script>

<script src="/admin-lte/dist/js/demo.js"></script>
      </Html>
    )
  }
}

export default MyDocument