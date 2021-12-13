import Head from 'next/head'

export default function Meta() {
    return (
        <Head>
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/favicons/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicons/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicons/favicon-16x16.png"
            />
            <link rel="manifest" href="/favicons/site.webmanifest" />
            <link
                rel="mask-icon"
                href="/favicons/safari-pinned-tab.svg"
                color="#ff66aa"
            />
            <link rel="shortcut icon" href="/favicons/favicon.ico" />
            <meta name="msapplication-TileColor" content="#ff66aa" />
            <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
            <meta name="theme-color" content="#ff66aa" />
            <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
            <meta name="description" content={`The place that I want to write everything that I want`}/>
        </Head>
    )
}