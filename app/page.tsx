"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import "./globals.css";
import { initializeChatbot } from '../public/js/chatbotLogic';

export default function Home() {
  useEffect(() => {
    const lazyloadRunObserver = () => {
      const lazyloadBackgrounds = document.querySelectorAll(`.e-con.e-parent:not(.e-lazyloaded)`);
      const lazyloadBackgroundObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let lazyloadBackground = entry.target;
            if (lazyloadBackground) {
              lazyloadBackground.classList.add('e-lazyloaded');
            }
            lazyloadBackgroundObserver.unobserve(entry.target);
          }
        });
      }, { rootMargin: '200px 0px 200px 0px' });
      lazyloadBackgrounds.forEach((lazyloadBackground) => {
        lazyloadBackgroundObserver.observe(lazyloadBackground);
      });
    };

    const events = [
      'DOMContentLoaded',
      'elementor/lazyload/observe',
    ];
    events.forEach((event) => {
      document.addEventListener(event, lazyloadRunObserver);
    });

    // Cleanup
    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, lazyloadRunObserver);
      });
    };
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/swiper.min.js";
    script.async = true;
    script.onload = () => {
      // @ts-ignore  (ignore TS since Swiper comes from global window)
      const swiper = new window.Swiper(".e-n-carousel ", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".elementor-swiper-button-next",
          prevEl: ".elementor-swiper-button-prev",
        },

        keyboard: {
          enabled: true,
        },
        mousewheel: false,
      });
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const cleanup = initializeChatbot();
    return cleanup;
  }, []);

  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        Email: formData.email,
        Customer_Name: formData.customerName,
        Lead_Source: "Website",
        Phone_Whatsapp_Number: formData.phone
      };

      const response = await fetch('http://localhost:8000/zohocrm/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'bXlfc3VwZXJfc2VjcmV0X2tleQ=='
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        // Reset form
        setFormData({
          customerName: '',
          email: '',
          phone: ''
        });
      } 
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <main id="content">
      <div
        data-elementor-type="wp-page"
        data-elementor-id="9"
        className="elementor elementor-9"
        data-elementor-post-type="page"
      >
        <div className="elementor-element elementor-element-cbc02a4 e-con-full banner_section e-flex e-con e-parent e-lazyloaded"
          data-id="cbc02a4" data-element_type="container"
          data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
          <div className="elementor-element elementor-element-2e0e98f e-con-full e-flex e-con e-child" data-id="2e0e98f"
            data-element_type="container">
            <div className="elementor-element elementor-element-92f36a2 elementor-widget-mobile__width-inherit elementor-widget elementor-widget-video"
              data-id="92f36a2" data-element_type="widget" id="banner_video"
              data-settings="{&quot;video_type&quot;:&quot;hosted&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;loop&quot;:&quot;yes&quot;,&quot;mute&quot;:&quot;yes&quot;,&quot;play_on_mobile&quot;:&quot;yes&quot;}"
              data-widget_type="video.default">
              <div className="elementor-widget-container">
                <div className="e-hosted-video elementor-wrapper elementor-open-inline">
                  <video className="elementor-video"
                    src="https://wedease.in/wp-content/uploads/2024/12/wedease-banner-video.mp4" autoPlay
                    loop muted playsInline controlsList="nodownload"></video>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-d5e8bb9 e-con-full e-flex e-con e-child"
              data-id="d5e8bb9" data-element_type="container" id="volumeToggle">
              <div className="elementor-element elementor-element-cec29f8 elementor-align-right elementor-widget__width-inherit elementor-widget elementor-widget-button"
                data-id="cec29f8" data-element_type="widget" id="muteIcon" data-widget_type="button.default"
                style={{ display: "none" }}>
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <a className="elementor-button elementor-size-sm" role="button">
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="37" height="29"
                            viewBox="0 0 37 29" fill="none">
                            <path id="icon" fillRule="evenodd" clipRule="evenodd"
                              d="M23.7857 3.94286C23.8477 0.795901 20.3435 -1.09453 17.7481 0.70126L17.7404 0.706652L7.51081 7.89298H3.96429C1.795 7.89298 0 9.68798 0 11.8573V17.143C0 19.3123 1.795 21.1073 3.96429 21.1073H7.50299L17.491 28.2852L17.5103 28.2989C20.0775 30.0752 23.7158 28.2357 23.7854 25.1008L23.7857 25.0714V3.94286ZM36.4194 9.4645C37.1935 10.2386 37.1935 11.4936 36.4194 12.2677L34.1872 14.5L36.4194 16.7324C37.1935 17.5064 37.1935 18.7615 36.4194 19.5355C35.6453 20.3096 34.3904 20.3096 33.6163 19.5355L31.3839 17.3032L29.1515 19.5355C28.3774 20.3096 27.1226 20.3096 26.3484 19.5355C25.5743 18.7615 25.5743 17.5064 26.3484 16.7324L28.5806 14.5L26.3484 12.2677C25.5743 11.4936 25.5743 10.2386 26.3484 9.4645C27.1226 8.69043 28.3774 8.69043 29.1515 9.4645L31.3839 11.6968L33.6163 9.4645C34.3904 8.69043 35.6453 8.69043 36.4194 9.4645Z"
                              fill="#D2666A"></path>
                          </svg> </span>
                        <span className="elementor-button-text">Mute</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-3e4ff13 elementor-align-right elementor-widget__width-inherit elementor-widget elementor-widget-button"
                data-id="3e4ff13" data-element_type="widget" id="unmuteIcon" data-widget_type="button.default"
                style={{ display: "block" }}>
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <a className="elementor-button elementor-size-sm" role="button">
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="37" height="28"
                            viewBox="0 0 37 28" fill="none">
                            <path
                              d="M16.8235 0L6.7294 9.33333H3.3647C1.5057 9.33333 0 10.7256 0 12.4444V15.5556C0 17.2744 1.5057 18.6667 3.3647 18.6667H6.7294L16.8235 28V0ZM31.0972 0.802083L28.7183 3.00174C35.3028 9.08997 35.3025 18.9117 28.7183 24.9983L31.0972 27.1979C38.9677 19.9223 38.9675 8.07919 31.0972 0.802083ZM26.3393 5.20139L23.9604 7.40104C27.9171 11.0596 27.9167 16.9421 23.9604 20.599L26.3393 22.7986C31.582 17.9528 31.5817 10.0486 26.3393 5.20139ZM21.5814 9.60069L19.2025 11.8003C20.5317 13.0294 20.5317 14.9706 19.2025 16.1997L21.5814 18.4023C24.1956 15.9852 24.1956 12.0179 21.5814 9.60069Z"
                              fill="#D2666A"></path>
                          </svg> </span>
                        <span className="elementor-button-text">Unmute</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="elementor-element elementor-element-0ea49fa logo_custom e-flex e-con-boxed e-con e-child"
          data-id="0ea49fa" data-element_type="container"
          data-settings="{&quot;position&quot;:&quot;absolute&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-b6ea405 elementor-widget__width-initial elementor-widget elementor-widget-theme-site-logo elementor-widget-image"
              data-id="b6ea405" data-element_type="widget" data-widget_type="theme-site-logo.default">
              <div className="elementor-widget-container">
                <a href="https://wedease.in/">
                  <Image decoding="async" width="98" height="85"
                    src="/images/wedease-logo.svg"
                    className="attachment-full  wp-image-1331" alt="" /> </a>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-f4e2fea elementor-hidden-mobile banner_button e-flex e-con-boxed e-con e-child"
          data-id="f4e2fea" data-element_type="container">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-4c2c7be elementor-widget elementor-widget-heading"
              data-id="4c2c7be" data-element_type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default weddingCss">Weddings,
                </h2>
              </div>
            </div>
            <div className="elementor-element elementor-element-ba33e20 elementor-widget elementor-widget-heading"
              data-id="ba33e20" data-element_type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">WedEase ke sath!</h2>
              </div>
            </div>
            <div className="elementor-element elementor-element-8b6aeef elementor-widget elementor-widget-button"
              data-id="8b6aeef" data-element_type="widget" data-widget_type="button.default">
              <div className="elementor-widget-container weddingCssButton">
                <div className="elementor-button-wrapper">
                  <a className="elementor-button elementor-button-link elementor-size-sm"
                    href="https://wedease.in/#form_top">
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-text">Talk to your WedEaser</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-eb736cc banner_skip e-flex e-con-boxed e-con e-child"
          data-id="eb736cc" data-element_type="container">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-be59aa4 elementor-widget elementor-widget-button"
              data-id="be59aa4" data-element_type="widget" data-widget_type="button.default">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a className="elementor-button elementor-button-link elementor-size-sm"
                    href="https://wedease.in/#form_top">
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-text">Skip</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-58468ab e-con-full e-flex e-con e-parent e-lazyloaded"
          data-id="58468ab" data-element_type="container">
        </div>

        <div className="elementor-element elementor-element-a90f551 elementor-hidden-desktop elementor-hidden-tablet e-flex e-con-boxed e-con e-parent"
          data-id="a90f551" data-element_type="container">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-e4185e2 e-con-full e-flex e-con e-child"
              data-id="e4185e2" data-element_type="container">
              <div className="elementor-element elementor-element-3557431 elementor-widget__width-inherit elementor-widget elementor-widget-heading"
                data-id="3557431" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">Weddings,
                  </h2>
                </div>
              </div>
              <div className="elementor-element elementor-element-341449c elementor-widget__width-inherit elementor-widget elementor-widget-heading"
                data-id="341449c" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">WedEase ke sath!</h2>
                </div>
              </div>
              <div className="elementor-element elementor-element-fecac7f elementor-align-center elementor-widget__width-inherit elementor-widget elementor-widget-button"
                data-id="fecac7f" data-element_type="widget" data-widget_type="button.default">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <a className="elementor-button elementor-button-link elementor-size-sm"
                      href="https://wedease.in/#form_top">
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">Talk to your WedEaser</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-9edda53 elementor-widget elementor-widget-image"
              data-id="9edda53" data-element_type="widget" data-widget_type="image.default">
              <div className="elementor-widget-container">
                <Image decoding="async" width="154" height="141" src="/images/PinkMotif-7.png"
                  className="attachment-full  wp-image-1890" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-3f963a0 e-con-full e-flex e-con e-parent e-lazyloaded"
          data-id="3f963a0" data-element_type="container" id="form_top"
          data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
          <div className="elementor-element elementor-element-391c593 e-con-full e-flex e-con e-child" data-id="391c593"
            data-element_type="container">

            <div className="elementor-element elementor-element-2955db1 elementor-widget elementor-widget-heading"
              data-id="2955db1" data-element_type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">You Say ‘I Do,’
                </h2>
              </div>
            </div>
            <div className="elementor-element elementor-element-eb504b0 elementor-widget elementor-widget-heading"
              data-id="eb504b0" data-element_type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">We Handle the Rest For You!</h2>
              </div>
            </div>
            <div className="elementor-element elementor-element-6d8454b e-con-full e-flex e-con e-child"
              data-id="6d8454b" data-element_type="container">
              <div id='crmWebToEntityForm' className='zcwf_lblLeft crmWebToEntityForm'>
                <form onSubmit={handleSubmit}>
                  <div className='zcwf_row'>
                    <div className="half-width">
                      <input
                        type='text'
                        id='customerName'
                        name='customerName'
                        maxLength={40}
                        placeholder="Full Name"
                        value={formData.customerName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="half-width">
                      <input
                        type='text'
                        id='phone'
                        name='phone'
                        maxLength={30}
                        placeholder="Mobile Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className='zcwf_row'>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      maxLength={100}
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <input
                    type='submit'
                    id='formsubmit'
                    className='formsubmit zcwf_button'
                    value={isSubmitting ? 'Submitting...' : 'Talk to your WedEaser'}
                    disabled={isSubmitting}
                  />
                </form>
              </div>
            </div>
            <div className="elementor-element elementor-element-76e7f3d elementor-widget elementor-widget-heading"
              data-id="76e7f3d" data-element_type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">Lights, Camera, Celebrations! <br />
                  WedEase in Action.</h2>
              </div>
            </div>
            <div className="elementor-element elementor-element-bef14b1 e-flex e-con-boxed e-con e-child w-full" data-id="bef14b1"
              data-element_type="container">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-b669d18 e-con-full e-flex e-con e-child"
                  data-id="b669d18" data-element_type="container">
                  <div className="elementor-element elementor-element-d6663b2 elementor-widget elementor-widget-text-editor"
                    data-id="d6663b2" data-element_type="widget" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <p>Weddings in our families celebrate our rich culture, traditions, and togetherness.
                        With over 16 years of experience managing weddings for royalty and elite corporate
                        houses, I have perfected the art of transforming a good wedding into an
                        extraordinary celebration.</p>
                      <p>From choosing your beautiful venue to taking your vows, every detail is carefully
                        designed to enhance your unique experience.</p>
                      <p>Starting a new journey for couples and their families often brings a mix of emotions
                        and the worry of <strong>“Log Kya Kahenge?”</strong></p>
                      <p>But we know how to make sure you and your guests say, <br /><strong>“Mazaa
                        Agaya!”</strong></p>
                      <p>The secret to “Mazaa Agaya” is simple: every detail must be perfectly planned. You
                        deserve to be treated like royalty on your special day, surrounded by your loved
                        ones.</p>
                      <p>Together, we’ll create a fairytale wedding that beautifully tells your story and
                        leaves you with cherished memories for a lifetime!</p>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-64d8de7 elementor-widget elementor-widget-heading"
                    data-id="64d8de7" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">With love,</h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-c5f882e elementor-widget-mobile__width-inherit elementor-widget elementor-widget-image"
                    data-id="c5f882e" data-element_type="widget" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <Image decoding="async" width="268" height="50"
                        src="/images/Prerana-Agarwal-Saxena-sign-1.png"
                        className="attachment-full  wp-image-125" alt="" />
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-601685a e-con-full e-flex e-con e-child"
                  data-id="601685a" data-element_type="container">
                  <div className="elementor-element elementor-element-06e369a elementor-widget elementor-widget-image"
                    data-id="06e369a" data-element_type="widget" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <Image loading="lazy" decoding="async" width="381" height="535"
                        src="/images/prena-img-1.webp"
                        className="attachment-full  wp-image-1870" alt=""

                        sizes="(max-width: 381px) 100vw, 381px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-a776009 e-flex e-con-boxed e-con e-parent" data-id="a776009"
              data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-eeaa417 e-con-full moving-ticker e-flex e-con e-child"
                  data-id="eeaa417" data-element_type="container"
                  data-settings="{&quot;background_background&quot;:&quot;video&quot;,&quot;background_video_link&quot;:&quot;https:\/\/wedease.in\/wp-content\/uploads\/2025\/02\/moving-ticker.mp4&quot;,&quot;background_play_on_mobile&quot;:&quot;yes&quot;}">
                  <div className="elementor-background-video-container">
                    <video className="elementor-background-video-hosted elementor-html5-video" autoPlay muted
                      playsInline loop src="https://wedease.in/wp-content/uploads/2025/02/moving-ticker.mp4"
                      style={{ width: "1264px", height: "711px" }}></video>
                  </div>
                  <div className="elementor-element elementor-element-bc155d0 elementor-widget elementor-widget-video"
                    data-id="bc155d0" data-element_type="widget"
                    data-settings="{&quot;video_type&quot;:&quot;hosted&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;mute&quot;:&quot;yes&quot;,&quot;loop&quot;:&quot;yes&quot;,&quot;play_on_mobile&quot;:&quot;yes&quot;}"
                    data-widget_type="video.default">
                    <div className="elementor-widget-container">
                      <div className="e-hosted-video elementor-wrapper elementor-open-inline">
                        <video className="elementor-video"
                          src="https://wedease.in/wp-content/uploads/2025/02/moving-ticker.mp4" autoPlay
                          loop muted playsInline controlsList="nodownload"></video>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-b6f2dff e-con-full elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child"
                  data-id="b6f2dff" data-element_type="container">
                  <div className="elementor-element elementor-element-8992bf2 e-con-full e-flex e-con e-child"
                    data-id="8992bf2" data-element_type="container"
                    data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
                    <div className="elementor-element elementor-element-e10010d elementor-absolute elementor-widget elementor-widget-image"
                      data-id="e10010d" data-element_type="widget"
                      data-settings="{&quot;_position&quot;:&quot;absolute&quot;}"
                      data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <Image loading="lazy" decoding="async" width="1428" height="39"
                          src="/images/Gradient-1-3.png"
                          className="attachment-full  wp-image-1515" alt=""
                          sizes="(max-width: 1428px) 100vw, 1428px" />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-f84c7d5 elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading"
                      data-id="f84c7d5" data-element_type="widget" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Deejay</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-2606b5a elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading"
                      data-id="2606b5a" data-element_type="widget" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Venue</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-a934cbd elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading"
                      data-id="a934cbd" data-element_type="widget" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Photographer</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-283898b elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading"
                      data-id="283898b" data-element_type="widget" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Makeup Artist</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-86e655a elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading"
                      data-id="86e655a" data-element_type="widget" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Dhol Bhaiya</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-4a7b0ea elementor-absolute elementor-widget elementor-widget-image"
                      data-id="4a7b0ea" data-element_type="widget"
                      data-settings="{&quot;_position&quot;:&quot;absolute&quot;}"
                      data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <Image loading="lazy" decoding="async" width="1428" height="39"
                          src="/images/Gradient-1-3.png"
                          className="attachment-full  wp-image-1515" alt=""

                          sizes="(max-width: 1428px) 100vw, 1428px" />
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-a935540 e-con-full e-flex e-con e-child"
                    data-id="a935540" data-element_type="container">
                    <div className="elementor-element elementor-element-cf77d5f elementor-widget elementor-widget-heading"
                      data-id="cf77d5f" data-element_type="widget" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">se toh kar lenge hum baat,
                          <br />
                          you get ready for
                        </h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-6b5f6f5 elementor-widget elementor-widget-heading"
                      data-id="6b5f6f5" data-element_type="widget" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Band, Baja, Baraat!</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-74183a2 e-con-full e-flex e-con e-child"
                  data-id="74183a2" data-element_type="container">
                  <div className="elementor-element elementor-element-06effa2 elementor-arrows-position-inside elementor-widget elementor-widget-n-carousel e-widget-swiper"
                    data-id="06effa2" data-element_type="widget"
                    data-settings="{&quot;carousel_items&quot;:[{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;c0944c3&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;bbab3bf&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;2f2c8e5&quot;}],&quot;slides_to_show&quot;:&quot;3&quot;,&quot;slides_to_scroll&quot;:&quot;1&quot;,&quot;slides_to_show_tablet&quot;:&quot;2&quot;,&quot;slides_to_show_mobile&quot;:&quot;1&quot;,&quot;speed&quot;:500,&quot;arrows&quot;:&quot;yes&quot;,&quot;image_spacing_custom&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]},&quot;image_spacing_custom_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;image_spacing_custom_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}"
                    data-widget_type="nested-carousel.default" aria-roledescription="carousel"
                    aria-label="Carousel | Horizontal scrolling: Arrow Left &amp; Right">
                    <div className="elementor-widget-container">
                      <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
                        dir="ltr">
                        <div className="swiper-wrapper" aria-live="polite" id="swiper-wrapper-b7bd4305af73c81c"
                          style={{ transform: "translate3d(0px, 0px, 0px)" }}>
                          <div className="swiper-slide swiper-slide-active" data-slide="1" role="group"
                            aria-roledescription="slide" aria-label="1 / 3"
                            style={{ width: "414.667px", marginRight: "10px" }}>
                            <div className="elementor-element elementor-element-2957273 e-flex e-con-boxed e-con e-child"
                              data-id="2957273" data-element_type="container">
                              <div className="e-con-inner">
                                <div className="elementor-element elementor-element-2794613 e-con-full e-flex e-con e-child"
                                  data-id="2794613" data-element_type="container">
                                  <div className="elementor-element elementor-element-a3b09ac elementor-widget elementor-widget-image"
                                    data-id="a3b09ac" data-element_type="widget"
                                    data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                      <Image loading="lazy" decoding="async" width="369"
                                        height="263"
                                        src="/images/wedding-img3-min.webp"
                                        className="attachment-full  wp-image-1872" alt=""

                                        sizes="(max-width: 369px) 100vw, 369px" />
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-36b76d6 elementor-widget elementor-widget-heading"
                                    data-id="36b76d6" data-element_type="widget"
                                    data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        Tailored <br />
                                        Discovery</h2>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-02bdff2 elementor-widget elementor-widget-heading"
                                    data-id="02bdff2" data-element_type="widget"
                                    data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        We curate the finest venues, photographers, décor
                                        experts, caterers, and more, handpicked to suit your
                                        unique needs. Every detail is thoughtfully tailored to
                                        bring your vision to life, ensuring a flawless and
                                        unforgettable celebration!</h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide swiper-slide-next" data-slide="2" role="group"
                            aria-roledescription="slide" aria-label="2 / 3"
                            style={{ width: "414.667px", marginRight: "10px" }}>
                            <div className="elementor-element elementor-element-0bd0d54 e-flex e-con-boxed e-con e-child"
                              data-id="0bd0d54" data-element_type="container">
                              <div className="e-con-inner">
                                <div className="elementor-element elementor-element-373a725 e-con-full e-flex e-con e-child"
                                  data-id="373a725" data-element_type="container">
                                  <div className="elementor-element elementor-element-56f1bed elementor-widget elementor-widget-image"
                                    data-id="56f1bed" data-element_type="widget"
                                    data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                      <Image loading="lazy" decoding="async" width="369"
                                        height="263"
                                        src="/images/wedding-img2-min.webp"
                                        className="attachment-full  wp-image-1876" alt=""

                                        sizes="(max-width: 369px) 100vw, 369px" />
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-4cd23c5 elementor-widget elementor-widget-heading"
                                    data-id="4cd23c5" data-element_type="widget"
                                    data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        Guaranteed <br />
                                        Best Pricing</h2>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-4d036ca elementor-widget elementor-widget-heading"
                                    data-id="4d036ca" data-element_type="widget"
                                    data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        Our extensive network of top-tier vendor partners
                                        empowers you to select the best, while we negotiate
                                        unbeatable prices on your behalf. Plus, we take the
                                        stress out of managing payments, ensuring a seamless and
                                        worry-free experience!</h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide" data-slide="3" role="group" aria-roledescription="slide"
                            aria-label="3 / 3" style={{ width: "414.667px", marginRight: "10px" }}>
                            <div className="elementor-element elementor-element-c62efb1 e-flex e-con-boxed e-con e-child"
                              data-id="c62efb1" data-element_type="container">
                              <div className="e-con-inner">
                                <div className="elementor-element elementor-element-119b476 e-con-full e-flex e-con e-child"
                                  data-id="119b476" data-element_type="container">
                                  <div className="elementor-element elementor-element-c48b6a2 elementor-widget elementor-widget-image"
                                    data-id="c48b6a2" data-element_type="widget"
                                    data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                      <Image loading="lazy" decoding="async" width="369"
                                        height="263"
                                        src="/images/wedding-img1-min.webp"
                                        className="attachment-full  wp-image-1877" alt=""

                                        sizes="(max-width: 369px) 100vw, 369px" />
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-12a3e38 elementor-widget elementor-widget-heading"
                                    data-id="12a3e38" data-element_type="widget"
                                    data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        Seamless <br />
                                        Contracting</h2>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-72c4a94 elementor-widget elementor-widget-heading"
                                    data-id="72c4a94" data-element_type="widget"
                                    data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        You’ll enjoy complete peace of mind—no unexpected
                                        surprises before or after your wedding. We handle all
                                        payment management, so you can focus on celebrating
                                        without any stress!</h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                      </div>
                      <div className="elementor-swiper-button elementor-swiper-button-prev swiper-button-disabled swiper-button-lock"
                        role="button" tabIndex={-1} aria-label="Previous slide"
                        aria-controls="swiper-wrapper-b7bd4305af73c81c" aria-disabled="true">
                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-chevron-circle-left"
                          viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z">
                          </path>
                        </svg>
                      </div>
                      <div className="elementor-swiper-button elementor-swiper-button-next swiper-button-disabled swiper-button-lock"
                        role="button" tabIndex={-1} aria-label="Next slide"
                        aria-controls="swiper-wrapper-b7bd4305af73c81c" aria-disabled="true">
                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-chevron-circle-right"
                          viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z">
                          </path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-daf46c8 elementor-hidden-desktop elementor-hidden-tablet e-flex e-con-boxed e-con e-parent"
              data-id="daf46c8" data-element_type="container">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-d23cefd e-con-full e-flex e-con e-child"
                  data-id="d23cefd" data-element_type="container">
                  <div className="elementor-element elementor-element-2eda193 elementor-widget elementor-widget-heading"
                    data-id="2eda193" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">LoveShots</h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-55ce555 elementor-widget elementor-widget-heading"
                    data-id="55ce555" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">WedEase <br />
                        Weddings</h2>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-4baa1a6 elementor-arrows-position-inside elementor-widget elementor-widget-n-carousel e-widget-swiper"
                  data-id="4baa1a6" data-element_type="widget"
                  data-settings="{&quot;carousel_items&quot;:[{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;72bcde2&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;f6740a8&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;0afc78e&quot;}],&quot;slides_to_show&quot;:&quot;1&quot;,&quot;slides_to_scroll&quot;:&quot;1&quot;,&quot;slides_to_show_tablet&quot;:&quot;2&quot;,&quot;slides_to_show_mobile&quot;:&quot;1&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;infinite&quot;:&quot;yes&quot;,&quot;speed&quot;:500,&quot;offset_sides&quot;:&quot;none&quot;,&quot;arrows&quot;:&quot;yes&quot;,&quot;image_spacing_custom&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]},&quot;image_spacing_custom_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;image_spacing_custom_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}"
                  data-widget_type="nested-carousel.default" aria-roledescription="carousel"
                  aria-label="Carousel | Horizontal scrolling: Arrow Left &amp; Right">
                  <div className="elementor-widget-container">
                    <div className="e-n-carousel swiper swiper-initialized swiper-horizontal swiper-pointer-events"
                      dir="ltr">
                      <div className="swiper-wrapper" aria-live="off" id="swiper-wrapper-16f42c20b23c4f41"
                        style={{ transitionDuration: "0ms" }}>
                        <div className="swiper-slide swiper-slide-duplicate" data-slide="3" role="group"
                          aria-roledescription="slide" aria-label="3 of 3" data-swiper-slide-index="2"
                          aria-hidden="true" inert>
                          <div className="elementor-element elementor-element-46fc9f4 e-flex e-con-boxed e-con e-child"
                            data-id="46fc9f4" data-element_type="container">
                            <div className="e-con-inner">
                              <div className="elementor-element elementor-element-51e139f e-con-full e-flex e-con e-child"
                                data-id="51e139f" data-element_type="container"
                                data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                <div className="elementor-element elementor-element-f938c9f e-con-full e-flex e-con e-child"
                                  data-id="f938c9f" data-element_type="container">
                                  <div className="elementor-element elementor-element-837b9fa elementor-widget elementor-widget-image"
                                    data-id="837b9fa" data-element_type="widget"
                                    data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                      <a href="https://www.youtube.com/watch?v=Yd1i-TO1Dgc"
                                        target="_blank">
                                        <Image loading="lazy" decoding="async" width="614"
                                          height="684"
                                          src="/images/parathana-new.webp"
                                          className="attachment-full  wp-image-1843"
                                          alt=""

                                          sizes="(max-width: 614px) 100vw, 614px" /> </a>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-35b158b elementor-absolute elementor-view-default elementor-widget elementor-widget-icon"
                                    data-id="35b158b" data-element_type="widget"
                                    data-settings="{&quot;_position&quot;:&quot;absolute&quot;}"
                                    data-widget_type="icon.default">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-icon-wrapper">
                                        <a className="elementor-icon"
                                          href="https://www.youtube.com/watch?v=Yd1i-TO1Dgc"
                                          target="_blank">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="81"
                                            height="81" viewBox="0 0 81 81" fill="none">
                                            <g id="Play Button"
                                              clipPath="url(#clip0_66_237)">
                                              <path id="icon" fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0 8.67857C0 3.88553 3.88553 0 8.67857 0H72.3214C77.1143 0 81 3.88553 81 8.67857V72.3214C81 77.1143 77.1143 81 72.3214 81H8.67857C3.88553 81 0 77.1143 0 72.3214V8.67857ZM28.662 26.8827V54.9273C28.6644 55.3965 28.7909 55.8568 29.0285 56.2614C29.2661 56.666 29.6065 57.0006 30.0151 57.2313C30.4237 57.462 30.886 57.5805 31.3553 57.5749C31.8245 57.5693 32.2839 57.4398 32.6869 57.1995L56.7065 43.1772C57.111 42.9435 57.4467 42.6075 57.6802 42.203C57.9138 41.7985 58.0365 41.3396 58.0365 40.8726C58.0365 40.4055 57.9138 39.9467 57.6802 39.5422C57.4467 39.1376 57.111 38.8017 56.7065 38.568L32.6869 24.6106C32.2839 24.3703 31.8245 24.2408 31.3553 24.2351C30.886 24.2296 30.4237 24.3481 30.0151 24.5788C29.6065 24.8094 29.2661 25.1441 29.0285 25.5487C28.7909 25.9533 28.6644 26.4135 28.662 26.8827Z"
                                                fill="white"></path>
                                            </g>
                                            <defs>
                                              <clipPath id="clip0_66_237">
                                                <rect width="81" height="81"
                                                  fill="white"></rect>
                                              </clipPath>
                                            </defs>
                                          </svg> </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-1013a60 e-con-full e-flex e-con e-child"
                                  data-id="1013a60" data-element_type="container"
                                  data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                  <div className="elementor-element elementor-element-68636c5 e-con-full e-flex e-con e-child"
                                    data-id="68636c5" data-element_type="container">
                                    <div className="elementor-element elementor-element-52609c5 elementor-widget elementor-widget-image"
                                      data-id="52609c5" data-element_type="widget"
                                      data-widget_type="image.default">
                                      <div className="elementor-widget-container">
                                        <Image loading="lazy" decoding="async" width="104"
                                          height="132"
                                          src="/images/testimonial-circle-img1-1.jpg"
                                          className="attachment-large size-large wp-image-1771"
                                          alt="" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-8430037 elementor-widget elementor-widget-heading"
                                    data-id="8430037" data-element_type="widget"
                                    data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        WedEase impressed us with their attention to detail,
                                        seamless coordination, and impeccable execution. We
                                        loved the team's perfection and dedication to ensuring
                                        everything was delivered on time!</h2>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-f596784 e-con-full e-flex e-con e-child"
                                    data-id="f596784" data-element_type="container">
                                    <div className="elementor-element elementor-element-ae84dbb elementor-widget elementor-widget-heading"
                                      data-id="ae84dbb" data-element_type="widget"
                                      data-widget_type="heading.default">
                                      <div className="elementor-widget-container">
                                        <h2
                                          className="elementor-heading-title elementor-size-default">
                                          Prarthana</h2>
                                      </div>
                                    </div>
                                    <div className="elementor-element elementor-element-ae0c57e elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-heading"
                                      data-id="ae0c57e" data-element_type="widget"
                                      data-widget_type="heading.default">
                                      <div className="elementor-widget-container">
                                        <h2
                                          className="elementor-heading-title elementor-size-default">
                                          ( 2022 )</h2>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide" data-slide="1" role="group" aria-roledescription="slide"
                          aria-label="1 of 3" data-swiper-slide-index="0" aria-hidden="true" inert={true}>
                          <div className="elementor-element elementor-element-e45231f e-flex e-con-boxed e-con e-child"
                            data-id="e45231f" data-element_type="container">
                            <div className="e-con-inner">
                              <div className="elementor-element elementor-element-a70cb41 e-con-full e-flex e-con e-child"
                                data-id="a70cb41" data-element_type="container"
                                data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                <div className="elementor-element elementor-element-66d0f26 e-con-full e-flex e-con e-child"
                                  data-id="66d0f26" data-element_type="container">
                                  <div className="elementor-element elementor-element-9742899 elementor-widget-mobile__width-initial elementor-widget elementor-widget-image"
                                    data-id="9742899" data-element_type="widget"
                                    data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                      <a href="https://www.youtube.com/watch?v=JrkG5_GA7cE"
                                        target="_blank">
                                        <Image loading="lazy" decoding="async" width="658"
                                          height="728"
                                          src="/images/manshi3.webp"
                                          className="attachment-full  wp-image-1825"
                                          alt=""

                                          sizes="(max-width: 658px) 100vw, 658px" /> </a>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-ccbb086 elementor-absolute elementor-view-default elementor-widget elementor-widget-icon"
                                    data-id="ccbb086" data-element_type="widget"
                                    data-settings="{&quot;_position&quot;:&quot;absolute&quot;}"
                                    data-widget_type="icon.default">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-icon-wrapper">
                                        <a className="elementor-icon"
                                          href="https://www.youtube.com/watch?v=JrkG5_GA7cE"
                                          target="_blank">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="81"
                                            height="81" viewBox="0 0 81 81" fill="none">
                                            <g id="Play Button"
                                              clipPath="url(#clip0_66_237)">
                                              <path id="icon" fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0 8.67857C0 3.88553 3.88553 0 8.67857 0H72.3214C77.1143 0 81 3.88553 81 8.67857V72.3214C81 77.1143 77.1143 81 72.3214 81H8.67857C3.88553 81 0 77.1143 0 72.3214V8.67857ZM28.662 26.8827V54.9273C28.6644 55.3965 28.7909 55.8568 29.0285 56.2614C29.2661 56.666 29.6065 57.0006 30.0151 57.2313C30.4237 57.462 30.886 57.5805 31.3553 57.5749C31.8245 57.5693 32.2839 57.4398 32.6869 57.1995L56.7065 43.1772C57.111 42.9435 57.4467 42.6075 57.6802 42.203C57.9138 41.7985 58.0365 41.3396 58.0365 40.8726C58.0365 40.4055 57.9138 39.9467 57.6802 39.5422C57.4467 39.1376 57.111 38.8017 56.7065 38.568L32.6869 24.6106C32.2839 24.3703 31.8245 24.2408 31.3553 24.2351C30.886 24.2296 30.4237 24.3481 30.0151 24.5788C29.6065 24.8094 29.2661 25.1441 29.0285 25.5487C28.7909 25.9533 28.6644 26.4135 28.662 26.8827Z"
                                                fill="white"></path>
                                            </g>
                                            <defs>
                                              <clipPath id="clip0_66_237">
                                                <rect width="81" height="81"
                                                  fill="white"></rect>
                                              </clipPath>
                                            </defs>
                                          </svg> </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-826bd38 e-con-full e-flex e-con e-child"
                                  data-id="826bd38" data-element_type="container"
                                  data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                  <div className="elementor-element elementor-element-5927f0f e-con-full e-flex e-con e-child"
                                    data-id="5927f0f" data-element_type="container">
                                    <div className="elementor-element elementor-element-ed87306 elementor-widget-mobile__width-initial elementor-widget elementor-widget-image"
                                      data-id="ed87306" data-element_type="widget"
                                      data-widget_type="image.default">
                                      <div className="elementor-widget-container">
                                        <Image loading="lazy" decoding="async" width="104"
                                          height="132"
                                          src="/images/testimonial-circle-img3-1.jpg"
                                          className="attachment-large size-large wp-image-1773"
                                          alt="" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-05645ce elementor-widget elementor-widget-heading"
                                    data-id="05645ce" data-element_type="widget"
                                    data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        "I absolutely loved the decor that WedEase created.
                                        Every detail was perfect, and everything looked prim and
                                        proper!"</h2>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-a594382 e-con-full e-flex e-con e-child"
                                    data-id="a594382" data-element_type="container">
                                    <div className="elementor-element elementor-element-21832cd elementor-widget elementor-widget-heading"
                                      data-id="21832cd" data-element_type="widget"
                                      data-widget_type="heading.default">
                                      <div className="elementor-widget-container">
                                        <h2
                                          className="elementor-heading-title elementor-size-default">
                                          Ananya</h2>
                                      </div>
                                    </div>
                                    <div className="elementor-element elementor-element-5005ada elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-heading"
                                      data-id="5005ada" data-element_type="widget"
                                      data-widget_type="heading.default">
                                      <div className="elementor-widget-container">
                                        <h2
                                          className="elementor-heading-title elementor-size-default">
                                          ( 2022 )</h2>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide" data-slide="2" role="group" aria-roledescription="slide"
                          aria-label="2 of 3" data-swiper-slide-index="1" aria-hidden="true" inert={true}>
                          <div className="elementor-element elementor-element-0261819 e-flex e-con-boxed e-con e-child"
                            data-id="0261819" data-element_type="container">
                            <div className="e-con-inner">
                              <div className="elementor-element elementor-element-1024c05 e-con-full e-flex e-con e-child"
                                data-id="1024c05" data-element_type="container"
                                data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                <div className="elementor-element elementor-element-9159d73 e-con-full e-flex e-con e-child"
                                  data-id="9159d73" data-element_type="container">
                                  <div className="elementor-element elementor-element-08e3308 elementor-widget elementor-widget-image"
                                    data-id="08e3308" data-element_type="widget"
                                    data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                      <a href="https://www.youtube.com/watch?v=GwzBG9R2PdY"
                                        target="_blank">
                                        <Image loading="lazy" decoding="async" width="658"
                                          height="728"
                                          src="/images/manshi1.webp"
                                          className="attachment-full  wp-image-1809"
                                          alt=""

                                          sizes="(max-width: 658px) 100vw, 658px" /> </a>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-0b8b647 elementor-absolute elementor-view-default elementor-widget elementor-widget-icon"
                                    data-id="0b8b647" data-element_type="widget"
                                    data-settings="{&quot;_position&quot;:&quot;absolute&quot;}"
                                    data-widget_type="icon.default">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-icon-wrapper">
                                        <a className="elementor-icon"
                                          href="https://www.youtube.com/watch?v=GwzBG9R2PdY"
                                          target="_blank">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="81"
                                            height="81" viewBox="0 0 81 81" fill="none">
                                            <g id="Play Button"
                                              clipPath="url(#clip0_66_237)">
                                              <path id="icon" fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0 8.67857C0 3.88553 3.88553 0 8.67857 0H72.3214C77.1143 0 81 3.88553 81 8.67857V72.3214C81 77.1143 77.1143 81 72.3214 81H8.67857C3.88553 81 0 77.1143 0 72.3214V8.67857ZM28.662 26.8827V54.9273C28.6644 55.3965 28.7909 55.8568 29.0285 56.2614C29.2661 56.666 29.6065 57.0006 30.0151 57.2313C30.4237 57.462 30.886 57.5805 31.3553 57.5749C31.8245 57.5693 32.2839 57.4398 32.6869 57.1995L56.7065 43.1772C57.111 42.9435 57.4467 42.6075 57.6802 42.203C57.9138 41.7985 58.0365 41.3396 58.0365 40.8726C58.0365 40.4055 57.9138 39.9467 57.6802 39.5422C57.4467 39.1376 57.111 38.8017 56.7065 38.568L32.6869 24.6106C32.2839 24.3703 31.8245 24.2408 31.3553 24.2351C30.886 24.2296 30.4237 24.3481 30.0151 24.5788C29.6065 24.8094 29.2661 25.1441 29.0285 25.5487C28.7909 25.9533 28.6644 26.4135 28.662 26.8827Z"
                                                fill="white"></path>
                                            </g>
                                            <defs>
                                              <clipPath id="clip0_66_237">
                                                <rect width="81" height="81"
                                                  fill="white"></rect>
                                              </clipPath>
                                            </defs>
                                          </svg> </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-4c185ab e-con-full e-flex e-con e-child"
                                  data-id="4c185ab" data-element_type="container"
                                  data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                  <div className="elementor-element elementor-element-24c80af e-con-full e-flex e-con e-child"
                                    data-id="24c80af" data-element_type="container">
                                    <div className="elementor-element elementor-element-792c422 elementor-widget elementor-widget-image"
                                      data-id="792c422" data-element_type="widget"
                                      data-widget_type="image.default">
                                      <div className="elementor-widget-container">
                                        <Image loading="lazy" decoding="async" width="211"
                                          height="228"
                                          src="/images/mansi.webp"
                                          className="attachment-large size-large wp-image-1927"
                                          alt="" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-a3e4b9f elementor-widget elementor-widget-heading"
                                    data-id="a3e4b9f" data-element_type="widget"
                                    data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">I
                                        recently got married and discovered WedEase through
                                        Google! I loved how thorough and attentive the team was,
                                        always proactive and dedicated to creating the best
                                        event. Thank you, team</h2>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-833e1cb e-con-full e-flex e-con e-child"
                                    data-id="833e1cb" data-element_type="container">
                                    <div className="elementor-element elementor-element-d48a23e elementor-widget elementor-widget-heading"
                                      data-id="d48a23e" data-element_type="widget"
                                      data-widget_type="heading.default">
                                      <div className="elementor-widget-container">
                                        <h2
                                          className="elementor-heading-title elementor-size-default">
                                          Mansi</h2>
                                      </div>
                                    </div>
                                    <div className="elementor-element elementor-element-daae211 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-heading"
                                      data-id="daae211" data-element_type="widget"
                                      data-widget_type="heading.default">
                                      <div className="elementor-widget-container">
                                        <h2
                                          className="elementor-heading-title elementor-size-default">
                                          ( 2022 )</h2>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide" data-slide="3" role="group" aria-roledescription="slide"
                          aria-label="3 of 3" data-swiper-slide-index="2" aria-hidden="true" inert={true}>
                          <div className="elementor-element elementor-element-46fc9f4 e-flex e-con-boxed e-con e-child"
                            data-id="46fc9f4" data-element_type="container">
                            <div className="e-con-inner">
                              <div className="elementor-element elementor-element-51e139f e-con-full e-flex e-con e-child"
                                data-id="51e139f" data-element_type="container"
                                data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                <div className="elementor-element elementor-element-f938c9f e-con-full e-flex e-con e-child"
                                  data-id="f938c9f" data-element_type="container">
                                  <div className="elementor-element elementor-element-837b9fa elementor-widget elementor-widget-image"
                                    data-id="837b9fa" data-element_type="widget"
                                    data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                      <a href="https://www.youtube.com/watch?v=Yd1i-TO1Dgc"
                                        target="_blank">
                                        <Image loading="lazy" decoding="async" width="614"
                                          height="684"
                                          src="/images/parathana-new.webp"
                                          className="attachment-full  wp-image-1843"
                                          alt=""

                                          sizes="(max-width: 614px) 100vw, 614px" /> </a>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-35b158b elementor-absolute elementor-view-default elementor-widget elementor-widget-icon"
                                    data-id="35b158b" data-element_type="widget"
                                    data-settings="{&quot;_position&quot;:&quot;absolute&quot;}"
                                    data-widget_type="icon.default">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-icon-wrapper">
                                        <a className="elementor-icon"
                                          href="https://www.youtube.com/watch?v=Yd1i-TO1Dgc"
                                          target="_blank">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="81"
                                            height="81" viewBox="0 0 81 81" fill="none">
                                            <g id="Play Button"
                                              clipPath="url(#clip0_66_237)">
                                              <path id="icon" fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0 8.67857C0 3.88553 3.88553 0 8.67857 0H72.3214C77.1143 0 81 3.88553 81 8.67857V72.3214C81 77.1143 77.1143 81 72.3214 81H8.67857C3.88553 81 0 77.1143 0 72.3214V8.67857ZM28.662 26.8827V54.9273C28.6644 55.3965 28.7909 55.8568 29.0285 56.2614C29.2661 56.666 29.6065 57.0006 30.0151 57.2313C30.4237 57.462 30.886 57.5805 31.3553 57.5749C31.8245 57.5693 32.2839 57.4398 32.6869 57.1995L56.7065 43.1772C57.111 42.9435 57.4467 42.6075 57.6802 42.203C57.9138 41.7985 58.0365 41.3396 58.0365 40.8726C58.0365 40.4055 57.9138 39.9467 57.6802 39.5422C57.4467 39.1376 57.111 38.8017 56.7065 38.568L32.6869 24.6106C32.2839 24.3703 31.8245 24.2408 31.3553 24.2351C30.886 24.2296 30.4237 24.3481 30.0151 24.5788C29.6065 24.8094 29.2661 25.1441 29.0285 25.5487C28.7909 25.9533 28.6644 26.4135 28.662 26.8827Z"
                                                fill="white"></path>
                                            </g>
                                            <defs>
                                              <clipPath id="clip0_66_237">
                                                <rect width="81" height="81"
                                                  fill="white"></rect>
                                              </clipPath>
                                            </defs>
                                          </svg> </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-1013a60 e-con-full e-flex e-con e-child"
                                  data-id="1013a60" data-element_type="container"
                                  data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                  <div className="elementor-element elementor-element-68636c5 e-con-full e-flex e-con e-child"
                                    data-id="68636c5" data-element_type="container">
                                    <div className="elementor-element elementor-element-52609c5 elementor-widget elementor-widget-image"
                                      data-id="52609c5" data-element_type="widget"
                                      data-widget_type="image.default">
                                      <div className="elementor-widget-container">
                                        <Image loading="lazy" decoding="async" width="104"
                                          height="132"
                                          src="/images/testimonial-circle-img1-1.jpg"
                                          className="attachment-large size-large wp-image-1771"
                                          alt="" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-8430037 elementor-widget elementor-widget-heading"
                                    data-id="8430037" data-element_type="widget"
                                    data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        WedEase impressed us with their attention to detail,
                                        seamless coordination, and impeccable execution. We
                                        loved the team's perfection and dedication to ensuring
                                        everything was delivered on time!</h2>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-f596784 e-con-full e-flex e-con e-child"
                                    data-id="f596784" data-element_type="container">
                                    <div className="elementor-element elementor-element-ae84dbb elementor-widget elementor-widget-heading"
                                      data-id="ae84dbb" data-element_type="widget"
                                      data-widget_type="heading.default">
                                      <div className="elementor-widget-container">
                                        <h2
                                          className="elementor-heading-title elementor-size-default">
                                          Prarthana</h2>
                                      </div>
                                    </div>
                                    <div className="elementor-element elementor-element-ae0c57e elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-heading"
                                      data-id="ae0c57e" data-element_type="widget"
                                      data-widget_type="heading.default">
                                      <div className="elementor-widget-container">
                                        <h2
                                          className="elementor-heading-title elementor-size-default">
                                          ( 2022 )</h2>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide swiper-slide-duplicate" data-slide="1" role="group"
                          aria-roledescription="slide" aria-label="1 of 3" data-swiper-slide-index="0"
                          aria-hidden="true" inert={true}>
                          <div className="elementor-element elementor-element-e45231f e-flex e-con-boxed e-con e-child"
                            data-id="e45231f" data-element_type="container">
                            <div className="e-con-inner">
                              <div className="elementor-element elementor-element-a70cb41 e-con-full e-flex e-con e-child"
                                data-id="a70cb41" data-element_type="container"
                                data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                <div className="elementor-element elementor-element-66d0f26 e-con-full e-flex e-con e-child"
                                  data-id="66d0f26" data-element_type="container">
                                  <div className="elementor-element elementor-element-9742899 elementor-widget-mobile__width-initial elementor-widget elementor-widget-image"
                                    data-id="9742899" data-element_type="widget"
                                    data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                      <a href="https://www.youtube.com/watch?v=JrkG5_GA7cE"
                                        target="_blank">
                                        <Image loading="lazy" decoding="async" width="658"
                                          height="728"
                                          src="/images/manshi3.webp"
                                          className="attachment-full  wp-image-1825"
                                          alt=""

                                          sizes="(max-width: 658px) 100vw, 658px" /> </a>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-ccbb086 elementor-absolute elementor-view-default elementor-widget elementor-widget-icon"
                                    data-id="ccbb086" data-element_type="widget"
                                    data-settings="{&quot;_position&quot;:&quot;absolute&quot;}"
                                    data-widget_type="icon.default">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-icon-wrapper">
                                        <a className="elementor-icon"
                                          href="https://www.youtube.com/watch?v=JrkG5_GA7cE"
                                          target="_blank">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="81"
                                            height="81" viewBox="0 0 81 81" fill="none">
                                            <g id="Play Button"
                                              clipPath="url(#clip0_66_237)">
                                              <path id="icon" fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0 8.67857C0 3.88553 3.88553 0 8.67857 0H72.3214C77.1143 0 81 3.88553 81 8.67857V72.3214C81 77.1143 77.1143 81 72.3214 81H8.67857C3.88553 81 0 77.1143 0 72.3214V8.67857ZM28.662 26.8827V54.9273C28.6644 55.3965 28.7909 55.8568 29.0285 56.2614C29.2661 56.666 29.6065 57.0006 30.0151 57.2313C30.4237 57.462 30.886 57.5805 31.3553 57.5749C31.8245 57.5693 32.2839 57.4398 32.6869 57.1995L56.7065 43.1772C57.111 42.9435 57.4467 42.6075 57.6802 42.203C57.9138 41.7985 58.0365 41.3396 58.0365 40.8726C58.0365 40.4055 57.9138 39.9467 57.6802 39.5422C57.4467 39.1376 57.111 38.8017 56.7065 38.568L32.6869 24.6106C32.2839 24.3703 31.8245 24.2408 31.3553 24.2351C30.886 24.2296 30.4237 24.3481 30.0151 24.5788C29.6065 24.8094 29.2661 25.1441 29.0285 25.5487C28.7909 25.9533 28.6644 26.4135 28.662 26.8827Z"
                                                fill="white"></path>
                                            </g>
                                            <defs>
                                              <clipPath id="clip0_66_237">
                                                <rect width="81" height="81"
                                                  fill="white"></rect>
                                              </clipPath>
                                            </defs>
                                          </svg> </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-826bd38 e-con-full e-flex e-con e-child"
                                  data-id="826bd38" data-element_type="container"
                                  data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                  <div className="elementor-element elementor-element-5927f0f e-con-full e-flex e-con e-child"
                                    data-id="5927f0f" data-element_type="container">
                                    <div className="elementor-element elementor-element-ed87306 elementor-widget-mobile__width-initial elementor-widget elementor-widget-image"
                                      data-id="ed87306" data-element_type="widget"
                                      data-widget_type="image.default">
                                      <div className="elementor-widget-container">
                                        <Image loading="lazy" decoding="async" width="104"
                                          height="132"
                                          src="/images/testimonial-circle-img3-1.jpg"
                                          className="attachment-large size-large wp-image-1773"
                                          alt="" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-05645ce elementor-widget elementor-widget-heading"
                                    data-id="05645ce" data-element_type="widget"
                                    data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        "I absolutely loved the decor that WedEase created.
                                        Every detail was perfect, and everything looked prim and
                                        proper!"</h2>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-a594382 e-con-full e-flex e-con e-child"
                                    data-id="a594382" data-element_type="container">
                                    <div className="elementor-element elementor-element-21832cd elementor-widget elementor-widget-heading"
                                      data-id="21832cd" data-element_type="widget"
                                      data-widget_type="heading.default">
                                      <div className="elementor-widget-container">
                                        <h2
                                          className="elementor-heading-title elementor-size-default">
                                          Ananya</h2>
                                      </div>
                                    </div>
                                    <div className="elementor-element elementor-element-5005ada elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-heading"
                                      data-id="5005ada" data-element_type="widget"
                                      data-widget_type="heading.default">
                                      <div className="elementor-widget-container">
                                        <h2
                                          className="elementor-heading-title elementor-size-default">
                                          ( 2022 )</h2>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                    </div>
                    <div className="elementor-swiper-button elementor-swiper-button-prev" role="button" tabIndex={0}
                      aria-label="Previous slide" aria-controls="swiper-wrapper-16f42c20b23c4f41">
                      <svg aria-hidden="true" className="e-font-icon-svg e-eicon-chevron-left" viewBox="0 0 1000 1000"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z">
                        </path>
                      </svg>
                    </div>
                    <div className="elementor-swiper-button elementor-swiper-button-next" role="button" tabIndex={0}
                      aria-label="Next slide" aria-controls="swiper-wrapper-16f42c20b23c4f41">
                      <svg aria-hidden="true" className="e-font-icon-svg e-eicon-chevron-right"
                        viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z">
                        </path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-145aa1d elementor-hidden-mobile e-flex e-con-boxed e-con e-parent"
              data-id="145aa1d" data-element_type="container">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-f9d7ec0 elementor-arrows-position-inside elementor-widget elementor-widget-n-carousel e-widget-swiper"
                  data-id="f9d7ec0" data-element_type="widget"
                  data-settings="{&quot;carousel_items&quot;:[{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;72bcde2&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;2a0d4e1&quot;},{&quot;slide_title&quot;:&quot;Slide #1&quot;,&quot;_id&quot;:&quot;86d6269&quot;}],&quot;slides_to_show&quot;:&quot;1&quot;,&quot;slides_to_scroll&quot;:&quot;1&quot;,&quot;slides_to_show_tablet&quot;:&quot;1&quot;,&quot;slides_to_show_mobile&quot;:&quot;1&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;infinite&quot;:&quot;yes&quot;,&quot;speed&quot;:500,&quot;offset_sides&quot;:&quot;none&quot;,&quot;arrows&quot;:&quot;yes&quot;,&quot;image_spacing_custom&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]},&quot;image_spacing_custom_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;image_spacing_custom_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}"
                  data-widget_type="nested-carousel.default" aria-roledescription="carousel"
                  aria-label="Carousel | Horizontal scrolling: Arrow Left &amp; Right">
                  <div className="elementor-widget-container">
                    <div className="e-n-carousel  swiper swiper-initialized swiper-horizontal swiper-pointer-events"
                      dir="ltr">
                      <div className="swiper-wrapper" aria-live="off"
                        style={{ transitionDuration: "0ms", transform: "translate3d(-3822px, 0px, 0px)" }}
                        id="swiper-wrapper-9119bd557e4f56c0">
                        <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                          data-slide="3" role="group" aria-roledescription="slide" aria-label="3 / 3"
                          data-swiper-slide-index="2" style={{ width: "1264px", marginRight: "10px" }}
                          aria-hidden="true" inert={true}>
                          <div className="elementor-element elementor-element-8056d05 e-flex e-con-boxed e-con e-child"
                            data-id="8056d05" data-element_type="container">
                            <div className="e-con-inner">
                              <div className="elementor-element elementor-element-0c3ce54 e-con-full e-flex e-con e-child"
                                data-id="0c3ce54" data-element_type="container"
                                data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                <div className="elementor-element elementor-element-6ab767c e-con-full e-flex e-con e-child"
                                  data-id="6ab767c" data-element_type="container"
                                  data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                  <div className="elementor-element elementor-element-c7f3d54 e-con-full e-flex e-con e-child"
                                    data-id="c7f3d54" data-element_type="container">
                                    <div className="elementor-element elementor-element-516c69f elementor-widget__width-inherit elementor-widget elementor-widget-image"
                                      data-id="516c69f" data-element_type="widget"
                                      data-widget_type="image.default">
                                      <div className="elementor-widget-container">
                                        <Image loading="lazy" decoding="async" width="211"
                                          height="228"
                                          src="/images/prathana-1.webp"
                                          className="attachment-full  wp-image-1883"
                                          alt="" />
                                      </div>
                                    </div>
                                    <div className="elementor-element elementor-element-623dabe e-con-full e-flex e-con e-child"
                                      data-id="623dabe" data-element_type="container">
                                      <div className="elementor-element elementor-element-85f5576 elementor-widget elementor-widget-heading"
                                        data-id="85f5576" data-element_type="widget"
                                        data-widget_type="heading.default">
                                        <div className="elementor-widget-container">
                                          <h2
                                            className="elementor-heading-title elementor-size-default">
                                            Prarthana</h2>
                                        </div>
                                      </div>
                                      <div className="elementor-element elementor-element-7550e52 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-heading"
                                        data-id="7550e52" data-element_type="widget"
                                        data-widget_type="heading.default">
                                        <div className="elementor-widget-container">
                                          <h2
                                            className="elementor-heading-title elementor-size-default">
                                            ( 2022 )</h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-0c10b1f elementor-widget elementor-widget-heading"
                                    data-id="0c10b1f" data-element_type="widget"
                                    data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        WedEase impressed us with their attention to detail,
                                        seamless coordination, and impeccable execution. We
                                        loved the team's perfection and dedication to ensuring
                                        everything was delivered on time!</h2>
                                    </div>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-7977300 e-con-full e-flex e-con e-child"
                                  data-id="7977300" data-element_type="container">
                                  <div className="elementor-element elementor-element-8f742bf e-con-full love-section e-flex e-con e-child"
                                    data-id="8f742bf" data-element_type="container">
                                    <div className="elementor-element elementor-element-891e98f elementor-widget elementor-widget-image"
                                      data-id="891e98f" data-element_type="widget"
                                      data-widget_type="image.default">
                                      <div className="elementor-widget-container">
                                        <a href="https://www.youtube.com/watch?v=Yd1i-TO1Dgc"
                                          target="_blank">
                                          <Image loading="lazy" decoding="async" width="614"
                                            height="684"
                                            src="/images/parathana-new.webp"
                                            className="attachment-full  wp-image-1843"
                                            alt=""

                                            sizes="(max-width: 614px) 100vw, 614px" /> </a>
                                      </div>
                                    </div>
                                    <div className="elementor-element elementor-element-b921e3d elementor-absolute elementor-view-default elementor-widget elementor-widget-icon"
                                      data-id="b921e3d" data-element_type="widget"
                                      data-settings="{&quot;_position&quot;:&quot;absolute&quot;}"
                                      data-widget_type="icon.default">
                                      <div className="elementor-widget-container">
                                        <div className="elementor-icon-wrapper">
                                          <a className="elementor-icon elementor-animation-grow"
                                            href="https://www.youtube.com/watch?v=Yd1i-TO1Dgc"
                                            target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                              width="81" height="81" viewBox="0 0 81 81"
                                              fill="none">
                                              <g id="Play Button"
                                                clipPath="url(#clip0_66_237)">
                                                <path id="icon" fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M0 8.67857C0 3.88553 3.88553 0 8.67857 0H72.3214C77.1143 0 81 3.88553 81 8.67857V72.3214C81 77.1143 77.1143 81 72.3214 81H8.67857C3.88553 81 0 77.1143 0 72.3214V8.67857ZM28.662 26.8827V54.9273C28.6644 55.3965 28.7909 55.8568 29.0285 56.2614C29.2661 56.666 29.6065 57.0006 30.0151 57.2313C30.4237 57.462 30.886 57.5805 31.3553 57.5749C31.8245 57.5693 32.2839 57.4398 32.6869 57.1995L56.7065 43.1772C57.111 42.9435 57.4467 42.6075 57.6802 42.203C57.9138 41.7985 58.0365 41.3396 58.0365 40.8726C58.0365 40.4055 57.9138 39.9467 57.6802 39.5422C57.4467 39.1376 57.111 38.8017 56.7065 38.568L32.6869 24.6106C32.2839 24.3703 31.8245 24.2408 31.3553 24.2351C30.886 24.2296 30.4237 24.3481 30.0151 24.5788C29.6065 24.8094 29.2661 25.1441 29.0285 25.5487C28.7909 25.9533 28.6644 26.4135 28.662 26.8827Z"
                                                  fill="white"></path>
                                              </g>
                                              <defs>
                                                <clipPath id="clip0_66_237">
                                                  <rect width="81" height="81"
                                                    fill="white"></rect>
                                                </clipPath>
                                              </defs>
                                            </svg> </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide swiper-slide-duplicate-next" data-slide="1" role="group"
                          aria-roledescription="slide" aria-label="1 / 3" data-swiper-slide-index="0"
                          style={{ width: "1264px", marginRight: "10px" }} aria-hidden="true">
                          <div className="elementor-element elementor-element-d4a0b1e e-flex e-con-boxed e-con e-child"
                            data-id="d4a0b1e" data-element_type="container">
                            <div className="e-con-inner">
                              <div className="elementor-element elementor-element-5f5c1d4 e-con-full e-flex e-con e-child"
                                data-id="5f5c1d4" data-element_type="container"
                                data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                <div className="elementor-element elementor-element-66b4499 e-con-full e-flex e-con e-child"
                                  data-id="66b4499" data-element_type="container"
                                  data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                  <div className="elementor-element elementor-element-edafac4 e-con-full e-flex e-con e-child"
                                    data-id="edafac4" data-element_type="container">
                                    <div className="elementor-element elementor-element-e82314c elementor-widget__width-inherit elementor-widget elementor-widget-image"
                                      data-id="e82314c" data-element_type="widget"
                                      data-widget_type="image.default">
                                      <div className="elementor-widget-container">
                                        <Image loading="lazy" decoding="async" width="211"
                                          height="228"
                                          src="/images/ananya-1.webp"
                                          className="attachment-full  wp-image-1881"
                                          alt="" />
                                      </div>
                                    </div>
                                    <div className="elementor-element elementor-element-8a21478 e-con-full e-flex e-con e-child"
                                      data-id="8a21478" data-element_type="container">
                                      <div className="elementor-element elementor-element-f99ec83 elementor-widget elementor-widget-heading"
                                        data-id="f99ec83" data-element_type="widget"
                                        data-widget_type="heading.default">
                                        <div className="elementor-widget-container">
                                          <h2
                                            className="elementor-heading-title elementor-size-default">
                                            Ananya</h2>
                                        </div>
                                      </div>
                                      <div className="elementor-element elementor-element-4ac0d0f elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-heading"
                                        data-id="4ac0d0f" data-element_type="widget"
                                        data-widget_type="heading.default">
                                        <div className="elementor-widget-container">
                                          <h2
                                            className="elementor-heading-title elementor-size-default">
                                            ( 2022 )</h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-9a459f7 elementor-widget elementor-widget-heading"
                                    data-id="9a459f7" data-element_type="widget"
                                    data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">I
                                        absolutely loved the decor that WedEase created. Every
                                        detail was perfect, and everything looked prim and
                                        proper!</h2>
                                    </div>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-817a1f4 e-con-full e-flex e-con e-child"
                                  data-id="817a1f4" data-element_type="container">
                                  <div className="elementor-element elementor-element-c39aa03 e-con-full love-section e-flex e-con e-child"
                                    data-id="c39aa03" data-element_type="container">
                                    <div className="elementor-element elementor-element-31da86c elementor-widget elementor-widget-image"
                                      data-id="31da86c" data-element_type="widget"
                                      data-widget_type="image.default">
                                      <div className="elementor-widget-container">
                                        <a href="https://www.youtube.com/watch?v=JrkG5_GA7cE"
                                          target="_blank">
                                          <Image loading="lazy" decoding="async" width="658"
                                            height="728"
                                            src="/images/manshi3.webp"
                                            className="attachment-full  wp-image-1825"
                                            alt=""

                                            sizes="(max-width: 658px) 100vw, 658px" /> </a>
                                      </div>
                                    </div>
                                    <div className="elementor-element elementor-element-7b80fa3 elementor-absolute elementor-view-default elementor-widget elementor-widget-icon"
                                      data-id="7b80fa3" data-element_type="widget"
                                      data-settings="{&quot;_position&quot;:&quot;absolute&quot;}"
                                      data-widget_type="icon.default">
                                      <div className="elementor-widget-container">
                                        <div className="elementor-icon-wrapper">
                                          <a className="elementor-icon elementor-animation-grow"
                                            href="https://www.youtube.com/watch?v=JrkG5_GA7cE"
                                            target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                              width="81" height="81" viewBox="0 0 81 81"
                                              fill="none">
                                              <g id="Play Button"
                                                clipPath="url(#clip0_66_237)">
                                                <path id="icon" fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M0 8.67857C0 3.88553 3.88553 0 8.67857 0H72.3214C77.1143 0 81 3.88553 81 8.67857V72.3214C81 77.1143 77.1143 81 72.3214 81H8.67857C3.88553 81 0 77.1143 0 72.3214V8.67857ZM28.662 26.8827V54.9273C28.6644 55.3965 28.7909 55.8568 29.0285 56.2614C29.2661 56.666 29.6065 57.0006 30.0151 57.2313C30.4237 57.462 30.886 57.5805 31.3553 57.5749C31.8245 57.5693 32.2839 57.4398 32.6869 57.1995L56.7065 43.1772C57.111 42.9435 57.4467 42.6075 57.6802 42.203C57.9138 41.7985 58.0365 41.3396 58.0365 40.8726C58.0365 40.4055 57.9138 39.9467 57.6802 39.5422C57.4467 39.1376 57.111 38.8017 56.7065 38.568L32.6869 24.6106C32.2839 24.3703 31.8245 24.2408 31.3553 24.2351C30.886 24.2296 30.4237 24.3481 30.0151 24.5788C29.6065 24.8094 29.2661 25.1441 29.0285 25.5487C28.7909 25.9533 28.6644 26.4135 28.662 26.8827Z"
                                                  fill="white"></path>
                                              </g>
                                              <defs>
                                                <clipPath id="clip0_66_237">
                                                  <rect width="81" height="81"
                                                    fill="white"></rect>
                                                </clipPath>
                                              </defs>
                                            </svg> </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide swiper-slide-prev" data-slide="2" role="group"
                          aria-roledescription="slide" aria-label="2 / 3" data-swiper-slide-index="1"
                          style={{ width: "1264px", marginRight: "10px" }} aria-hidden="true">
                          <div className="elementor-element elementor-element-096fda4 e-flex e-con-boxed e-con e-child"
                            data-id="096fda4" data-element_type="container">
                            <div className="e-con-inner">
                              <div className="elementor-element elementor-element-f690e1f e-con-full e-flex e-con e-child"
                                data-id="f690e1f" data-element_type="container"
                                data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                <div className="elementor-element elementor-element-93c838d e-con-full e-flex e-con e-child"
                                  data-id="93c838d" data-element_type="container"
                                  data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                  <div className="elementor-element elementor-element-1ce4b8f e-con-full e-flex e-con e-child"
                                    data-id="1ce4b8f" data-element_type="container">
                                    <div className="elementor-element elementor-element-69d611c elementor-widget__width-inherit elementor-widget elementor-widget-image"
                                      data-id="69d611c" data-element_type="widget"
                                      data-widget_type="image.default">
                                      <div className="elementor-widget-container">
                                        <Image loading="lazy" decoding="async" width="211"
                                          height="228"
                                          src="/images/mansi.webp"
                                          className="attachment-full  wp-image-1927"
                                          alt="" />
                                      </div>
                                    </div>
                                    <div className="elementor-element elementor-element-9614bbc e-con-full e-flex e-con e-child"
                                      data-id="9614bbc" data-element_type="container">
                                      <div className="elementor-element elementor-element-48e98f6 elementor-widget elementor-widget-heading"
                                        data-id="48e98f6" data-element_type="widget"
                                        data-widget_type="heading.default">
                                        <div className="elementor-widget-container">
                                          <h2
                                            className="elementor-heading-title elementor-size-default">
                                            Mansi</h2>
                                        </div>
                                      </div>
                                      <div className="elementor-element elementor-element-368ce9d elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-heading"
                                        data-id="368ce9d" data-element_type="widget"
                                        data-widget_type="heading.default">
                                        <div className="elementor-widget-container">
                                          <h2
                                            className="elementor-heading-title elementor-size-default">
                                            ( 2022 )</h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-4e444c6 elementor-widget elementor-widget-heading"
                                    data-id="4e444c6" data-element_type="widget"
                                    data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">I
                                        recently got married and discovered WedEase through
                                        Google! I loved how thorough and attentive the team was,
                                        always proactive and dedicated to creating the best
                                        event. Thank you, team</h2>
                                    </div>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-482e066 e-con-full e-flex e-con e-child"
                                  data-id="482e066" data-element_type="container">
                                  <div className="elementor-element elementor-element-04828a0 e-con-full love-section e-flex e-con e-child"
                                    data-id="04828a0" data-element_type="container">
                                    <div className="elementor-element elementor-element-da856b2 elementor-widget elementor-widget-image"
                                      data-id="da856b2" data-element_type="widget"
                                      data-widget_type="image.default">
                                      <div className="elementor-widget-container">
                                        <a href="https://www.youtube.com/watch?v=GwzBG9R2PdY"
                                          target="_blank">
                                          <Image loading="lazy" decoding="async" width="658"
                                            height="728"
                                            src="/images/manshi1.webp"
                                            className="attachment-full  wp-image-1809"
                                            alt=""

                                            sizes="(max-width: 658px) 100vw, 658px" /> </a>
                                      </div>
                                    </div>
                                    <div className="elementor-element elementor-element-4a1c299 elementor-absolute elementor-view-default elementor-widget elementor-widget-icon"
                                      data-id="4a1c299" data-element_type="widget"
                                      data-settings="{&quot;_position&quot;:&quot;absolute&quot;}"
                                      data-widget_type="icon.default">
                                      <div className="elementor-widget-container">
                                        <div className="elementor-icon-wrapper">
                                          <a className="elementor-icon elementor-animation-grow"
                                            href="https://www.youtube.com/watch?v=GwzBG9R2PdY"
                                            target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                              width="81" height="81" viewBox="0 0 81 81"
                                              fill="none">
                                              <g id="Play Button"
                                                clipPath="url(#clip0_66_237)">
                                                <path id="icon" fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M0 8.67857C0 3.88553 3.88553 0 8.67857 0H72.3214C77.1143 0 81 3.88553 81 8.67857V72.3214C81 77.1143 77.1143 81 72.3214 81H8.67857C3.88553 81 0 77.1143 0 72.3214V8.67857ZM28.662 26.8827V54.9273C28.6644 55.3965 28.7909 55.8568 29.0285 56.2614C29.2661 56.666 29.6065 57.0006 30.0151 57.2313C30.4237 57.462 30.886 57.5805 31.3553 57.5749C31.8245 57.5693 32.2839 57.4398 32.6869 57.1995L56.7065 43.1772C57.111 42.9435 57.4467 42.6075 57.6802 42.203C57.9138 41.7985 58.0365 41.3396 58.0365 40.8726C58.0365 40.4055 57.9138 39.9467 57.6802 39.5422C57.4467 39.1376 57.111 38.8017 56.7065 38.568L32.6869 24.6106C32.2839 24.3703 31.8245 24.2408 31.3553 24.2351C30.886 24.2296 30.4237 24.3481 30.0151 24.5788C29.6065 24.8094 29.2661 25.1441 29.0285 25.5487C28.7909 25.9533 28.6644 26.4135 28.662 26.8827Z"
                                                  fill="white"></path>
                                              </g>
                                              <defs>
                                                <clipPath id="clip0_66_237">
                                                  <rect width="81" height="81"
                                                    fill="white"></rect>
                                                </clipPath>
                                              </defs>
                                            </svg> </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide swiper-slide-active" data-slide="3" role="group"
                          aria-roledescription="slide" aria-label="3 / 3" data-swiper-slide-index="2"
                          style={{ width: "1264px", marginRight: "10px" }}>
                          <div className="elementor-element elementor-element-8056d05 e-flex e-con-boxed e-con e-child"
                            data-id="8056d05" data-element_type="container">
                            <div className="e-con-inner">
                              <div className="elementor-element elementor-element-0c3ce54 e-con-full e-flex e-con e-child"
                                data-id="0c3ce54" data-element_type="container"
                                data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                <div className="elementor-element elementor-element-6ab767c e-con-full e-flex e-con e-child"
                                  data-id="6ab767c" data-element_type="container"
                                  data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                  <div className="elementor-element elementor-element-c7f3d54 e-con-full e-flex e-con e-child"
                                    data-id="c7f3d54" data-element_type="container">
                                    <div className="elementor-element elementor-element-516c69f elementor-widget__width-inherit elementor-widget elementor-widget-image"
                                      data-id="516c69f" data-element_type="widget"
                                      data-widget_type="image.default">
                                      <div className="elementor-widget-container">
                                        <Image loading="lazy" decoding="async" width="211"
                                          height="228"
                                          src="/images/prathana-1.webp"
                                          className="attachment-full  wp-image-1883"
                                          alt="" />
                                      </div>
                                    </div>
                                    <div className="elementor-element elementor-element-623dabe e-con-full e-flex e-con e-child"
                                      data-id="623dabe" data-element_type="container">
                                      <div className="elementor-element elementor-element-85f5576 elementor-widget elementor-widget-heading"
                                        data-id="85f5576" data-element_type="widget"
                                        data-widget_type="heading.default">
                                        <div className="elementor-widget-container">
                                          <h2
                                            className="elementor-heading-title elementor-size-default">
                                            Prarthana</h2>
                                        </div>
                                      </div>
                                      <div className="elementor-element elementor-element-7550e52 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-heading"
                                        data-id="7550e52" data-element_type="widget"
                                        data-widget_type="heading.default">
                                        <div className="elementor-widget-container">
                                          <h2
                                            className="elementor-heading-title elementor-size-default">
                                            ( 2022 )</h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-0c10b1f elementor-widget elementor-widget-heading"
                                    data-id="0c10b1f" data-element_type="widget"
                                    data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">
                                        WedEase impressed us with their attention to detail,
                                        seamless coordination, and impeccable execution. We
                                        loved the team's perfection and dedication to ensuring
                                        everything was delivered on time!</h2>
                                    </div>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-7977300 e-con-full e-flex e-con e-child"
                                  data-id="7977300" data-element_type="container">
                                  <div className="elementor-element elementor-element-8f742bf e-con-full love-section e-flex e-con e-child"
                                    data-id="8f742bf" data-element_type="container">
                                    <div className="elementor-element elementor-element-891e98f elementor-widget elementor-widget-image"
                                      data-id="891e98f" data-element_type="widget"
                                      data-widget_type="image.default">
                                      <div className="elementor-widget-container">
                                        <a href="https://www.youtube.com/watch?v=Yd1i-TO1Dgc"
                                          target="_blank">
                                          <Image loading="lazy" decoding="async" width="614"
                                            height="684"
                                            alt="parathana"
                                            src="/images/parathana-new.webp"
                                            className="attachment-full  wp-image-1843"
                                            sizes="(max-width: 614px) 100vw, 614px" /> </a>
                                      </div>
                                    </div>
                                    <div className="elementor-element elementor-element-b921e3d elementor-absolute elementor-view-default elementor-widget elementor-widget-icon"
                                      data-id="b921e3d" data-element_type="widget"
                                      data-settings="{&quot;_position&quot;:&quot;absolute&quot;}"
                                      data-widget_type="icon.default">
                                      <div className="elementor-widget-container">
                                        <div className="elementor-icon-wrapper">
                                          <a className="elementor-icon elementor-animation-grow"
                                            href="https://www.youtube.com/watch?v=Yd1i-TO1Dgc"
                                            target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                              width="81" height="81" viewBox="0 0 81 81"
                                              fill="none">
                                              <g id="Play Button"
                                                clipPath="url(#clip0_66_237)">
                                                <path id="icon" fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M0 8.67857C0 3.88553 3.88553 0 8.67857 0H72.3214C77.1143 0 81 3.88553 81 8.67857V72.3214C81 77.1143 77.1143 81 72.3214 81H8.67857C3.88553 81 0 77.1143 0 72.3214V8.67857ZM28.662 26.8827V54.9273C28.6644 55.3965 28.7909 55.8568 29.0285 56.2614C29.2661 56.666 29.6065 57.0006 30.0151 57.2313C30.4237 57.462 30.886 57.5805 31.3553 57.5749C31.8245 57.5693 32.2839 57.4398 32.6869 57.1995L56.7065 43.1772C57.111 42.9435 57.4467 42.6075 57.6802 42.203C57.9138 41.7985 58.0365 41.3396 58.0365 40.8726C58.0365 40.4055 57.9138 39.9467 57.6802 39.5422C57.4467 39.1376 57.111 38.8017 56.7065 38.568L32.6869 24.6106C32.2839 24.3703 31.8245 24.2408 31.3553 24.2351C30.886 24.2296 30.4237 24.3481 30.0151 24.5788C29.6065 24.8094 29.2661 25.1441 29.0285 25.5487C28.7909 25.9533 28.6644 26.4135 28.662 26.8827Z"
                                                  fill="white"></path>
                                              </g>
                                              <defs>
                                                <clipPath id="clip0_66_237">
                                                  <rect width="81" height="81"
                                                    fill="white"></rect>
                                                </clipPath>
                                              </defs>
                                            </svg> </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide swiper-slide-duplicate swiper-slide-next" data-slide="1"
                          role="group" aria-roledescription="slide" aria-label="1 / 3"
                          data-swiper-slide-index="0" style={{ width: "1264px", marginRight: "10px" }}
                          aria-hidden="true" inert={true}>
                          <div className="elementor-element elementor-element-d4a0b1e e-flex e-con-boxed e-con e-child"
                            data-id="d4a0b1e" data-element_type="container">
                            <div className="e-con-inner">
                              <div className="elementor-element elementor-element-5f5c1d4 e-con-full e-flex e-con e-child"
                                data-id="5f5c1d4" data-element_type="container"
                                data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                <div className="elementor-element elementor-element-66b4499 e-con-full e-flex e-con e-child"
                                  data-id="66b4499" data-element_type="container"
                                  data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                  <div className="elementor-element elementor-element-edafac4 e-con-full e-flex e-con e-child"
                                    data-id="edafac4" data-element_type="container">
                                    <div className="elementor-element elementor-element-e82314c elementor-widget__width-inherit elementor-widget elementor-widget-image"
                                      data-id="e82314c" data-element_type="widget"
                                      data-widget_type="image.default">
                                      <div className="elementor-widget-container">
                                        <Image loading="lazy" decoding="async" width="211"
                                          height="228"
                                          src="/images/ananya-1.webp"
                                          className="attachment-full  wp-image-1881"
                                          alt="" />
                                      </div>
                                    </div>
                                    <div className="elementor-element elementor-element-8a21478 e-con-full e-flex e-con e-child"
                                      data-id="8a21478" data-element_type="container">
                                      <div className="elementor-element elementor-element-f99ec83 elementor-widget elementor-widget-heading"
                                        data-id="f99ec83" data-element_type="widget"
                                        data-widget_type="heading.default">
                                        <div className="elementor-widget-container">
                                          <h2
                                            className="elementor-heading-title elementor-size-default">
                                            Ananya</h2>
                                        </div>
                                      </div>
                                      <div className="elementor-element elementor-element-4ac0d0f elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-heading"
                                        data-id="4ac0d0f" data-element_type="widget"
                                        data-widget_type="heading.default">
                                        <div className="elementor-widget-container">
                                          <h2
                                            className="elementor-heading-title elementor-size-default">
                                            ( 2022 )</h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-9a459f7 elementor-widget elementor-widget-heading"
                                    data-id="9a459f7" data-element_type="widget"
                                    data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">I
                                        absolutely loved the decor that WedEase created. Every
                                        detail was perfect, and everything looked prim and
                                        proper!</h2>
                                    </div>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-817a1f4 e-con-full e-flex e-con e-child"
                                  data-id="817a1f4" data-element_type="container">
                                  <div className="elementor-element elementor-element-c39aa03 e-con-full love-section e-flex e-con e-child"
                                    data-id="c39aa03" data-element_type="container">
                                    <div className="elementor-element elementor-element-31da86c elementor-widget elementor-widget-image"
                                      data-id="31da86c" data-element_type="widget"
                                      data-widget_type="image.default">
                                      <div className="elementor-widget-container">
                                        <a href="https://www.youtube.com/watch?v=JrkG5_GA7cE"
                                          target="_blank">
                                          <Image loading="lazy" decoding="async" width="658"
                                            height="728"
                                            src="/images/manshi3.webp"
                                            className="attachment-full  wp-image-1825"
                                            alt=""

                                            sizes="(max-width: 658px) 100vw, 658px" /> </a>
                                      </div>
                                    </div>
                                    <div className="elementor-element elementor-element-7b80fa3 elementor-absolute elementor-view-default elementor-widget elementor-widget-icon"
                                      data-id="7b80fa3" data-element_type="widget"
                                      data-settings="{&quot;_position&quot;:&quot;absolute&quot;}"
                                      data-widget_type="icon.default">
                                      <div className="elementor-widget-container">
                                        <div className="elementor-icon-wrapper">
                                          <a className="elementor-icon elementor-animation-grow"
                                            href="https://www.youtube.com/watch?v=JrkG5_GA7cE"
                                            target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                              width="81" height="81" viewBox="0 0 81 81"
                                              fill="none">
                                              <g id="Play Button"
                                                clipPath="url(#clip0_66_237)">
                                                <path id="icon" fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M0 8.67857C0 3.88553 3.88553 0 8.67857 0H72.3214C77.1143 0 81 3.88553 81 8.67857V72.3214C81 77.1143 77.1143 81 72.3214 81H8.67857C3.88553 81 0 77.1143 0 72.3214V8.67857ZM28.662 26.8827V54.9273C28.6644 55.3965 28.7909 55.8568 29.0285 56.2614C29.2661 56.666 29.6065 57.0006 30.0151 57.2313C30.4237 57.462 30.886 57.5805 31.3553 57.5749C31.8245 57.5693 32.2839 57.4398 32.6869 57.1995L56.7065 43.1772C57.111 42.9435 57.4467 42.6075 57.6802 42.203C57.9138 41.7985 58.0365 41.3396 58.0365 40.8726C58.0365 40.4055 57.9138 39.9467 57.6802 39.5422C57.4467 39.1376 57.111 38.8017 56.7065 38.568L32.6869 24.6106C32.2839 24.3703 31.8245 24.2408 31.3553 24.2351C30.886 24.2296 30.4237 24.3481 30.0151 24.5788C29.6065 24.8094 29.2661 25.1441 29.0285 25.5487C28.7909 25.9533 28.6644 26.4135 28.662 26.8827Z"
                                                  fill="white"></path>
                                              </g>
                                              <defs>
                                                <clipPath id="clip0_66_237">
                                                  <rect width="81" height="81"
                                                    fill="white"></rect>
                                                </clipPath>
                                              </defs>
                                            </svg> </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                    </div>
                    <div className="elementor-swiper-button elementor-swiper-button-prev" role="button" tabIndex={0}
                      aria-label="Previous slide" aria-controls="swiper-wrapper-9119bd557e4f56c0">
                      <svg aria-hidden="true" className="e-font-icon-svg e-eicon-chevron-left" viewBox="0 0 1000 1000"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z">
                        </path>
                      </svg>
                    </div>
                    <div className="elementor-swiper-button elementor-swiper-button-next" role="button" tabIndex={0}
                      aria-label="Next slide" aria-controls="swiper-wrapper-9119bd557e4f56c0">
                      <svg aria-hidden="true" className="e-font-icon-svg e-eicon-chevron-right"
                        viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z">
                        </path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-2ce824c e-flex e-con-boxed e-con e-parent" data-id="2ce824c"
              data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
              <div className="e-con-inner second-form ">
                <div className="elementor-element elementor-element-ba1275c e-con-full e-flex e-con e-child"
                  data-id="ba1275c" data-element_type="container">
                  <div className="elementor-element elementor-element-66d8820 elementor-widget elementor-widget-heading"
                    data-id="66d8820" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">Nahi ayegi apki izat pe aanch
                      </h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-e34e00b elementor-widget elementor-widget-heading"
                    data-id="e34e00b" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">Weddings, WedEase ke sath</h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-17644b2 e-con-full e-flex e-con e-child"
                    data-id="17644b2" data-element_type="container">
                    <div className="elementor-element elementor-element-025f1be elementor-button-align-center elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-form"
                      data-id="025f1be" data-element_type="widget"
                      data-settings="{&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;button_width&quot;:&quot;100&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}"
                      data-widget_type="form.default">
                    </div>
                  </div>
                </div>

                <div className="elementor-element elementor-element-6d8454b e-con-full e-flex e-con e-child"
                  data-id="6d8454b" data-element_type="container">
                  <div id='crmWebToEntityForm' className='zcwf_lblLeft crmWebToEntityForm'>
                    <form onSubmit={handleSubmit}>
                      <div className='zcwf_row'>
                        <div className="half-width">
                          <input
                            type='text'
                            id='customerName'
                            name='customerName'
                            maxLength={40}
                            placeholder="Full Name"
                            value={formData.customerName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="half-width">
                          <input
                            type='text'
                            id='phone'
                            name='phone'
                            maxLength={30}
                            placeholder="Mobile Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className='zcwf_row'>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          maxLength={100}
                          placeholder="Email address"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <input
                        type='submit'
                        id='formsubmit'
                        className='formsubmit zcwf_button'
                        value={isSubmitting ? 'Submitting...' : 'Talk to your WedEaser'}
                        disabled={isSubmitting}
                      />
                    </form>
                  </div>
                </div>

                <script
                  type="speculationrules"
                  dangerouslySetInnerHTML={{
                    __html: `
            {
              "prefetch": [{
                "source": "document",
                "where": {
                  "and": [{
                    "href_matches": "/*"
                  }, {
                    "not": {
                      "href_matches": ["/wp-*.php", "/wp-admin/*", "/wp-content/uploads/*", "/wp-content/*", "/wp-content/plugins/*", "/wp-content/themes/hello-elementor/*", "/*\\\\?(.+)"]
                    }
                  }, {
                    "not": {
                      "selector_matches": "a[rel~=\\"nofollow\\"]"
                    }
                  }, {
                    "not": {
                      "selector_matches": ".no-prefetch, .no-prefetch a"
                    }
                  }]
                },
                "eagerness": "conservative"
              }]
            }
          `}} />
                {/* Elementor Device Mode Span */}
                <span id="elementor-device-mode" className="elementor-screen-only"></span>

                {/* SVG Symbols */}
                <svg style={{ display: 'none' }} className="e-font-icon-svg-symbols"></svg>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* chatbot div */}
      <div>
        <div id="chatbot-icon"></div>
        <div id="chatbox">
          <button id="chatbox-close-btn">×</button>
          <div id="chatbox-messages"></div>
          <div id="chatbox-inputs"></div>
        </div>
      </div>
      {/* footer section */}
      <div data-elementor-type="footer" data-elementor-id="22" className="elementor elementor-22 elementor-location-footer"
        data-elementor-post-type="elementor_library">
        <div className="elementor-element elementor-element-88b77a9 e-flex e-con-boxed e-con e-parent" data-id="88b77a9"
          data-element_type="container">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-88677ed e-con-full e-flex e-con e-child"
              data-id="88677ed" data-element_type="container">
              <div className="elementor-element elementor-element-ce5e2c5 e-con-full e-flex e-con e-child"
                data-id="ce5e2c5" data-element_type="container">
                <div className="elementor-element elementor-element-b6bc51d elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-heading"
                  data-id="b6bc51d" data-element_type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Weddings mean</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-509a7a5 elementor-widget-mobile__width-initial elementor-widget__width-initial elementor-widget elementor-widget-image"
                  data-id="509a7a5" data-element_type="widget" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <a href="https://wedease.in/">
                      <Image src="/images/foot-logo-1.webp" title="foot-logo-1" className="w-full h-full object-contain" width="200" height="60"
                        alt="foot-logo-1" loading="lazy" /> </a>
                  </div>
                </div>
                <div className="elementor-element elementor-element-a5bf80c e-con-full e-flex e-con e-child"
                  data-id="a5bf80c" data-element_type="container">
                  <div className="elementor-element elementor-element-c770b35 e-con-full e-flex e-con e-child"
                    data-id="c770b35" data-element_type="container">
                    <div className="elementor-element elementor-element-50c76ad elementor-widget elementor-widget-image"
                      data-id="50c76ad" data-element_type="widget" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <Image width="78" height="78" src="/images/1_Mail-2.png"
                          className="attachment-full  wp-image-1573" alt="" />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-0895a53 elementor-widget__width-initial elementor-widget elementor-widget-heading"
                      data-id="0895a53" data-element_type="widget" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default"><a
                          href="tel:+917042938900">+91 70429 38900</a></h2>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-b757c04 e-con-full e-flex e-con e-child"
                    data-id="b757c04" data-element_type="container">
                    <div className="elementor-element elementor-element-0a15026 elementor-widget elementor-widget-image"
                      data-id="0a15026" data-element_type="widget" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <Image width="78" height="78" src="/images/1_Mail-1.png"
                          className="attachment-full  wp-image-1574" alt="" />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-204055c elementor-widget__width-initial elementor-widget elementor-widget-heading"
                      data-id="204055c" data-element_type="widget" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default"><a
                          href="mailto:Sales@wedease.in">Sales@wedease.in</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-c3b03dc e-con-full e-flex e-con e-child"
                data-id="c3b03dc" data-element_type="container">
                <div className="elementor-element elementor-element-616b0f9 e-con-full e-flex e-con e-child"
                  data-id="616b0f9" data-element_type="container">
                  <div className="elementor-element elementor-element-b0b9ace elementor-widget elementor-widget-image"
                    data-id="b0b9ace" data-element_type="widget" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <a href="https://www.instagram.com/wedease_weddings/" target="_blank">
                        <Image width="552" height="162" src="/images/instagram-logo.png"
                          className="attachment-full  wp-image-1576" alt=""
                          sizes="(max-width: 552px) 100vw, 552px" /> </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-38a10ab e-con-full e-flex e-con e-child"
              data-id="38a10ab" data-element_type="container">
              <div className="elementor-element elementor-element-a90a872 e-con-full e-flex e-con e-child"
                data-id="a90a872" data-element_type="container">
                <div className="elementor-element elementor-element-3bd360a elementor-widget elementor-widget-heading"
                  data-id="3bd360a" data-element_type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <p className="elementor-heading-title elementor-size-default">Copyright © 2025. All rights
                      reserved.</p>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-c4338f8 e-con-full e-flex e-con e-child"
                data-id="c4338f8" data-element_type="container">
                <div className="elementor-element elementor-element-6478924 elementor-widget elementor-widget-heading"
                  data-id="6478924" data-element_type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <p className="elementor-heading-title elementor-size-default"><a
                      href="https://wedease.in/wp-content/uploads/2024/12/PP-WedEase.pdf">Privacy
                      Policy </a></p>
                  </div>
                </div>
                <div className="elementor-element elementor-element-da53dbf elementor-widget elementor-widget-heading"
                  data-id="da53dbf" data-element_type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <p className="elementor-heading-title elementor-size-default"><a
                      href="https://wedease.in/wp-content/uploads/2024/12/TC-WedEase.pdf">Terms &amp;
                      Condition</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
