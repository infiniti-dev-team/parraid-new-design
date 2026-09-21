export default function Tags() {
    return (
        <>
            {/* Google Search Console Verification (both) */}
            <meta
                name="google-site-verification"
                content="450_gZwhZZB7qJ3QODzQ83-WYCt4pS7_j-4btHqETc4"
            />
            <meta
                name="google-site-verification"
                content="lOckrMahgvKZMhTHz77FpRSb6LmjM7XTdxW0kPTgUwI"
            />

            {/* =======================
                GLOBAL DATA LAYER (ONLY ONCE)
            ======================= */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        window.gtag = gtag;
                    `,
                }}
            />

            {/* =======================
                GA4 - G-XTM7EGPVHL
            ======================= */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-XTM7EGPVHL"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        gtag('js', new Date());
                        gtag('config', 'G-XTM7EGPVHL');
                    `,
                }}
            />

            {/* =======================
                GA4 - G-4EH26VE5K4
            ======================= */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-4EH26VE5K4"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        gtag("set","linker",{"domains":["www.parraid.com"]});
                        gtag("set", "developer_id.dZTNiMT", true);
                        gtag("config", "G-4EH26VE5K4");
                    `,
                }}
            />

            {/* =======================
                GA4 - G-VX79KDC7JC
            ======================= */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-VX79KDC7JC"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        gtag('config', 'G-VX79KDC7JC');
                    `,
                }}
            />

            {/* =======================
                Google Tag Manager
            ======================= */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        (function(w,d,s,l,i){w[l]=w[l]||[];
                        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                        var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                        j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;
                        f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-PHTZV8TF');
                    `,
                }}
            />

            {/* Google Tag Manager (noscript) */}
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-PHTZV8TF"
                    height="0"
                    width="0"
                    style={{ display: "none", visibility: "hidden" }}
                />
            </noscript>
        </>
    );
}