import Document, {
    Html,
    Head,
    Main,
    NextScript
} from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {
            ...initialProps
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <title>my portfolio</title>
                    <meta name="description" content="Victor Manuel Portfolio Website" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" />
                </Head>
                <body>
                    <Main></Main>
                    <NextScript></NextScript>
                </body>
            </Html>
        )
    }

}