import type { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "wedease - WedEase",
  description: "Weddings, WedEase ke sath! You Say 'I Do,' We Handle the Rest for You!",
  openGraph: {
    title: "wedease - WedEase",
    description: "Weddings, WedEase ke sath! You Say 'I Do,' We Handle the Rest for You!",
    url: "https://wedease.in/",
    siteName: "WedEase",
    images: [
      {
        url: "/images/PinkMotif-7.png",
        width: 154,
        height: 141,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/images/logo.svg", sizes: "32x32" },
      { url: "/images/logo.svg", sizes: "192x192" },
    ],
    apple: "/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />

        {/* favicon */}

        <link rel="icon" type="image/svg+xml" href="/images/wedease.svg" />
        
        {/* External CSS Files */}
        <link rel="stylesheet" href="/css/style.min.css" media="all" />
        <link rel="stylesheet" href="/css/theme.min.css" media="all" />
        <link rel="stylesheet" href="/css/header-footer.min.css" media="all" />
        <link rel="stylesheet" href="/css/custom-frontend.min.css" media="all" />
        <link rel="stylesheet" href="/css/post-6.css" media="all" />
        <link rel="stylesheet" href="/css/widget-heading.min.css" media="all" />
        <link rel="stylesheet" href="/css/widget-image.min.css" media="all" />
        <link rel="stylesheet" href="/css/swiper.min.css" media="all" />
        <link rel="stylesheet" href="/css/e-swiper.min.css" media="all" />
        <link rel="stylesheet" href="/css/popup.min.css" media="all" />
        <link rel="stylesheet" href="/css/widget-video.min.css" media="all" />
        {/* <link rel="stylesheet" href="/css/widget-form.min.css" media="all" /> */}
        <link rel="stylesheet" href="/css/widget-text-editor.min.css" media="all" />
        <link rel="stylesheet" href="/css/widget-nested-carousel.min.css" media="all" />
        <link rel="stylesheet" href="/css/e-animation-grow.min.css" media="all" />
        <link rel="stylesheet" href="/css/widget-nested-accordion.min.css" media="all" />
        <link rel="stylesheet" href="/css/post-9.css" media="all" />
        <link rel="stylesheet" href="/css/post-66.css" media="all" />
        <link rel="stylesheet" href="/css/post-22.css" media="all" />
        <link rel="stylesheet" href="/css/mediaelementplayer-legacy.min.css" media="all" />
        <link rel="stylesheet" href="/css/wp-mediaelement.min.css" media="all" />
        
        {/* Google Fonts */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&amp;display=swap&amp;ver=6.8.2" media="all" />
      </head>
      <body className="home wp-singular page-template page-template-elementor_header_footer page page-id-9 wp-custom-logo wp-theme-hello-elementor elementor-default elementor-template-full-width elementor-kit-6 elementor-page elementor-page-9 e--ua-blink e--ua-chrome e--ua-mac e--ua-webkit">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-TBSVZLXH" 
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <a className="skip-link screen-reader-text" href="#content">
          Skip to content
        </a>

        {children}

        {/* JavaScript Files */}
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery-migrate.min.js" strategy="beforeInteractive" />
        <Script src="/js/breeze-prefetch-links.min.js" strategy="lazyOnload" />
        <Script src="/js/hello-frontend.min.js" strategy="lazyOnload" />
        <Script src="/js/mediaelement-and-player.min.js" strategy="lazyOnload" />
        <Script src="/js/mediaelement-migrate.min.js" strategy="lazyOnload" />
        <Script src="/js/wp-mediaelement.min.js" strategy="lazyOnload" />
        <Script src="/js/vimeo.min.js" strategy="lazyOnload" />
        <Script src="/js/webpack-pro.runtime.min.js" strategy="lazyOnload" />
        <Script src="/js/webpack.runtime.min.js" strategy="lazyOnload" />
        <Script src="/js/frontend-modules.min.js" strategy="lazyOnload" />
        <Script src="/js/hooks.min.js" strategy="lazyOnload" />
        <Script src="/js/i18n.min.js" strategy="lazyOnload" />
        <Script src="/js/frontend.min.js" strategy="lazyOnload" />
        <Script src="/js/core.min.js" strategy="lazyOnload" />
        <Script src="/js/frontend(1).min.js" strategy="lazyOnload" />
        <Script src="/js/elements-handlers.min.js" strategy="lazyOnload" />
        <Script src="/js/swiper.min.js" strategy="lazyOnload" />

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TBSVZLXH');
          `}
        </Script>

        {/* Custom Scripts */}
        <Script id="custom-phone-validation" strategy="lazyOnload">
          {`
            document.addEventListener('DOMContentLoaded', function () {
              console.log("Phone validation initialized");
              const forms = document.querySelectorAll('.elementor-form');
              if (forms.length > 0) {
                forms.forEach(function (form) {
                  const submitButton = form.querySelector('[type="submit"]');
                  submitButton.addEventListener('click', function (event) {
                    const phoneInput = form.querySelector('input#form-field-phone');
                    const phoneRegex = /^[0-9]{10}$/;
                    if (phoneInput && !phoneRegex.test(phoneInput.value)) {
                      event.preventDefault();
                      event.stopImmediatePropagation();
                      alert('Please enter a valid phone number with 10 digits.');
                      phoneInput.focus();
                      return false;
                    }
                  });
                  form.addEventListener('submit', function (event) {
                    const phoneInput = form.querySelector('input#form-field-phone');
                    const phoneRegex = /^[0-9]{10}$/;
                    if (phoneInput && !phoneRegex.test(phoneInput.value)) {
                      event.preventDefault();
                      alert('Please enter a valid phone number with 10 digits.');
                      phoneInput.focus();
                      return false;
                    }
                  });
                });
              }
            });
          `}
        </Script>

        <Script id="scrolling-words" strategy="lazyOnload">
          {`
            jQuery(document).ready(function () {
              var $words = jQuery('.scrolling-words-box li');
              var totalItems = $words.length;
              var activeIndex = 0;
              function highlightActiveWord() {
                $words.removeClass('active');
                $words.eq(activeIndex).addClass('active');
                activeIndex = (activeIndex + 1) % totalItems;
              }
              highlightActiveWord();
              setInterval(highlightActiveWord, 1000);
            });
          `}
        </Script>

        <Script id="video-controls" strategy="lazyOnload">
          {`
            jQuery(document).ready(function ($) {
              const video1 = $('#banner_video video');
              const volumeToggle = $('#volumeToggle');
              const unmuteIcon = $('#unmuteIcon');
              const muteIcon = $('#muteIcon');
              let isUserMuted = true;

              function ensureAutoplay() {
                if (video1.length) {
                  video1.each(function () {
                    const videoElement = this;
                    videoElement.muted = true;
                    const playPromise = videoElement.play();
                    if (playPromise !== undefined) {
                      playPromise.catch((error) => {
                        console.log('Autoplay failed:', error);
                      });
                    }
                  });
                }
              }

              ensureAutoplay();
              unmuteIcon.show();
              muteIcon.hide();

              volumeToggle.on('click', function () {
                const isMuted = video1.prop('muted');
                const newMuteState = !isMuted;
                video1.prop('muted', newMuteState);
                isUserMuted = newMuteState;
                if (newMuteState) {
                  unmuteIcon.show();
                  muteIcon.hide();
                } else {
                  muteIcon.show();
                  unmuteIcon.hide();
                }
              });

              $(window).on('scroll', function () {
                if (video1.length) {
                  const rect = video1[0].getBoundingClientRect();
                  if (rect.top < window.innerHeight && rect.bottom > 0) {
                    if (video1[0].paused) {
                      video1[0].muted = isUserMuted;
                      video1[0].play();
                    }
                  } else {
                    if (!video1[0].paused) {
                      video1[0].pause();
                    }
                  }
                }
              });
            });
          `}
        </Script>
      </body>
    </html>
  );
}