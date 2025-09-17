import React from 'react'

const page = () => {
  return (
    <div>
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
          </div>
        </div>
        <div className="elementor-element elementor-element-3f963a0 e-con-full e-flex e-con e-parent e-lazyloaded"
          data-id="3f963a0" data-element_type="container" id="form_top"
          data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
          <div className="elementor-element elementor-element-391c593 e-con-full e-flex e-con e-child" data-id="391c593"
            data-element_type="container">
            <div className="elementor-element elementor-element-9edda53 elementor-widget elementor-widget-image"
              data-id="9edda53" data-element_type="widget" data-widget_type="image.default">
              <div className="elementor-widget-container">
                <Image decoding="async" width="154" height="141" src="/images/PinkMotif-7.png"
                  className="attachment-full size-full wp-image-1890" alt="" />
              </div>
            </div>
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
                <h2 className="elementor-heading-title elementor-size-default">We Handle the Rest htmlFor You!</h2>
              </div>
            </div>
            <div className="elementor-element elementor-element-6d8454b e-con-full e-flex e-con e-child"
              data-id="6d8454b" data-element_type="container">
              <div className="elementor-element elementor-element-8298425 elementor-button-align-center elementor-widget elementor-widget-form"
                data-id="8298425" data-element_type="widget"
                data-settings="{&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;button_width&quot;:&quot;100&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}"
                data-widget_type="form.default">
                <div className="elementor-widget-container">
                  <form className="elementor-form" method="post" name="intellemo_form">
                    <input type="hidden" name="post_id" value="9" />
                    <input type="hidden" name="form_id" value="8298425" />
                    <input type="hidden" name="referer_title" value="wedease - WedEase" />
                    <input type="hidden" name="queried_id" value="9" />

                    <div className="elementor-form-fields-wrapper elementor-labels-">
                      {/* Name */}
                      <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-50 elementor-field-required">
                        <label
                          htmlFor="form-field-name"
                          className="elementor-field-label elementor-screen-only"
                        >
                          Name
                        </label>
                        <input
                          size={1}
                          type="text"
                          name="form_fields[name]"
                          id="form-field-name"
                          className="elementor-field elementor-size-sm elementor-field-textual"
                          placeholder="Full Name"
                          required
                          aria-required="true"
                        />
                      </div>

                      {/* Phone */}
                      <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-phone elementor-col-50 elementor-field-required">
                        <label
                          htmlFor="form-field-phone"
                          className="elementor-field-label elementor-screen-only"
                        >
                          Number
                        </label>
                        <input
                          size={1}
                          type="tel"
                          name="form_fields[phone]"
                          id="form-field-phone"
                          className="elementor-field elementor-size-sm elementor-field-textual"
                          placeholder="Mobile Number"
                          required
                          aria-required="true"
                          pattern="[0-9()#&amp;+*-=.]+"
                          title="Only numbers and phone characters (#, -, *, etc) are accepted."
                        />
                      </div>

                      {/* Email */}
                      <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-100 elementor-field-required">
                        <label
                          htmlFor="form-field-email"
                          className="elementor-field-label elementor-screen-only"
                        >
                          Email
                        </label>
                        <input
                          size={1}
                          type="email"
                          name="form_fields[email]"
                          id="form-field-email"
                          className="elementor-field elementor-size-sm elementor-field-textual"
                          placeholder="Email address"
                          required
                          aria-required="true"
                        />
                      </div>

                      {/* Hidden fields */}
                      <div className="elementor-field-type-hidden elementor-field-group elementor-column elementor-field-group-utm_id elementor-col-100">
                        <input
                          size={1}
                          type="hidden"
                          name="form_fields[utm_id]"
                          id="form-field-utm_id"
                          className="elementor-field elementor-size-sm elementor-field-textual"
                        />
                      </div>

                      <div className="elementor-field-type-hidden elementor-field-group elementor-column elementor-field-group-utm_source elementor-col-100">
                        <input
                          size={1}
                          type="hidden"
                          name="form_fields[utm_source]"
                          id="form-field-utm_source"
                          className="elementor-field elementor-size-sm elementor-field-textual"
                        />
                      </div>

                      <div className="elementor-field-type-hidden elementor-field-group elementor-column elementor-field-group-utm_medium elementor-col-100">
                        <input
                          size={1}
                          type="hidden"
                          name="form_fields[utm_medium]"
                          id="form-field-utm_medium"
                          className="elementor-field elementor-size-sm elementor-field-textual"
                        />
                      </div>

                      <div className="elementor-field-type-hidden elementor-field-group elementor-column elementor-field-group-utm_campaign elementor-col-100">
                        <input
                          size={1}
                          type="hidden"
                          name="form_fields[utm_campaign]"
                          id="form-field-utm_campaign"
                          className="elementor-field elementor-size-sm elementor-field-textual"
                        />
                      </div>

                      {/* Submit */}
                      <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                        <button className="elementor-button elementor-size-sm" type="submit">
                          <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-text">Talk to your WedEaser</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="elementor-element elementor-element-76e7f3d elementor-widget elementor-widget-heading"
                  data-id="76e7f3d" data-element_type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Lights, Camera, Celebrations! <br />
                      WedEase in Action.</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-bef14b1 e-flex e-con-boxed e-con e-child" data-id="bef14b1"
                  data-element_type="container">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-b669d18 e-con-full e-flex e-con e-child"
                      data-id="b669d18" data-element_type="container">
                      <div className="elementor-element elementor-element-d6663b2 elementor-widget elementor-widget-text-editor"
                        data-id="d6663b2" data-element_type="widget" data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                          <p>Weddings in our families celebrate our rich culture, traditions, and togetherness.
                            With over 16 years of experience managing weddings htmlFor royalty and elite corporate
                            houses, I have perfected the art of transforming a good wedding into an
                            extraordinary celebration.</p>
                          <p>From choosing your beautiful venue to taking your vows, every detail is carefully
                            designed to enhance your unique experience.</p>
                          <p>Starting a new journey htmlFor couples and their families often brings a mix of emotions
                            and the worry of <strong>“Log Kya Kahenge?”</strong></p>
                          <p>But we know how to make sure you and your guests say, <br /><strong>“Mazaa
                            Agaya!”</strong></p>
                          <p>The secret to “Mazaa Agaya” is simple: every detail must be perfectly planned. You
                            deserve to be treated like royalty on your special day, surrounded by your loved
                            ones.</p>
                          <p>Together, we’ll create a fairytale wedding that beautifully tells your story and
                            leaves you with cherished memories htmlFor a lifetime!</p>
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
                            className="attachment-full size-full wp-image-125" alt="" />
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
                            className="attachment-full size-full wp-image-1870" alt=""
                            srcSet="https://wedease.in/wp-content/uploads/2025/01/prena-img-1.webp 381w, https://wedease.in/wp-content/uploads/2025/01/prena-img-1-214x300.webp 214w"
                            sizes="(max-width: 381px) 100vw, 381px" />
                        </div>
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
                            className="attachment-full size-full wp-image-1515" alt=""
                            src="https://wedease.in/wp-content/uploads/2024/12/Gradient-1-3.png 1428w, https://wedease.in/wp-content/uploads/2024/12/Gradient-1-3-300x8.png 300w, https://wedease.in/wp-content/uploads/2024/12/Gradient-1-3-1024x28.png 1024w, https://wedease.in/wp-content/uploads/2024/12/Gradient-1-3-768x21.png 768w"
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
                            className="attachment-full size-full wp-image-1515" alt=""
                            srcSet="https://wedease.in/wp-content/uploads/2024/12/Gradient-1-3.png 1428w, https://wedease.in/wp-content/uploads/2024/12/Gradient-1-3-300x8.png 300w, https://wedease.in/wp-content/uploads/2024/12/Gradient-1-3-1024x28.png 1024w, https://wedease.in/wp-content/uploads/2024/12/Gradient-1-3-768x21.png 768w"
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
                        <div className="e-n-carousel swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
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
                                          className="attachment-full size-full wp-image-1872" alt=""
                                          srcSet="https://wedease.in/wp-content/uploads/2025/01/wedding-img3-min.webp 369w, https://wedease.in/wp-content/uploads/2025/01/wedding-img3-min-300x214.webp 300w"
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
                                          className="attachment-full size-full wp-image-1876" alt=""
                                          srcSet="https://wedease.in/wp-content/uploads/2025/01/wedding-img2-min.webp 369w, https://wedease.in/wp-content/uploads/2025/01/wedding-img2-min-300x214.webp 300w"
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
                                          className="attachment-full size-full wp-image-1877" alt=""
                                          srcSet="https://wedease.in/wp-content/uploads/2025/01/wedding-img1-min.webp 369w, https://wedease.in/wp-content/uploads/2025/01/wedding-img1-min-300x214.webp 300w"
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
                                            className="attachment-full size-full wp-image-1843"
                                            alt=""
                                            src="https://wedease.in/wp-content/uploads/2025/01/parathana-new.webp 614w, https://wedease.in/wp-content/uploads/2025/01/parathana-new-269x300.webp 269w"
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
                                            className="attachment-full size-full wp-image-1825"
                                            alt=""
                                            src="https://wedease.in/wp-content/uploads/2025/01/manshi3.webp 658w, https://wedease.in/wp-content/uploads/2025/01/manshi3-271x300.webp 271w"
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
                                            className="attachment-full size-full wp-image-1809"
                                            alt=""
                                            src="https://wedease.in/wp-content/uploads/2025/01/manshi1.webp 658w, https://wedease.in/wp-content/uploads/2025/01/manshi1-271x300.webp 271w"
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
                                            className="attachment-full size-full wp-image-1843"
                                            alt=""
                                            src="https://wedease.in/wp-content/uploads/2025/01/parathana-new.webp 614w, https://wedease.in/wp-content/uploads/2025/01/parathana-new-269x300.webp 269w"
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
                                            className="attachment-full size-full wp-image-1825"
                                            alt=""
                                            src="https://wedease.in/wp-content/uploads/2025/01/manshi3.webp 658w, https://wedease.in/wp-content/uploads/2025/01/manshi3-271x300.webp 271w"
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
                      <div className="e-n-carousel swiper swiper-initialized swiper-horizontal swiper-pointer-events"
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
                                            className="attachment-full size-full wp-image-1883"
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
                                              className="attachment-full size-full wp-image-1843"
                                              alt=""
                                              src="https://wedease.in/wp-content/uploads/2025/01/parathana-new.webp 614w, https://wedease.in/wp-content/uploads/2025/01/parathana-new-269x300.webp 269w"
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
                                            className="attachment-full size-full wp-image-1881"
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
                                              className="attachment-full size-full wp-image-1825"
                                              alt=""
                                              src="https://wedease.in/wp-content/uploads/2025/01/manshi3.webp 658w, https://wedease.in/wp-content/uploads/2025/01/manshi3-271x300.webp 271w"
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
                                            className="attachment-full size-full wp-image-1927"
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
                                              className="attachment-full size-full wp-image-1809"
                                              alt=""
                                              src="https://wedease.in/wp-content/uploads/2025/01/manshi1.webp 658w, https://wedease.in/wp-content/uploads/2025/01/manshi1-271x300.webp 271w"
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
                                            className="attachment-full size-full wp-image-1883"
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
                                              className="attachment-full size-full wp-image-1843"
                                              alt=""
                                              src="https://wedease.in/wp-content/uploads/2025/01/parathana-new.webp 614w, https://wedease.in/wp-content/uploads/2025/01/parathana-new-269x300.webp 269w"
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
                                            className="attachment-full size-full wp-image-1881"
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
                                              className="attachment-full size-full wp-image-1825"
                                              alt=""
                                              src="https://wedease.in/wp-content/uploads/2025/01/manshi3.webp 658w, https://wedease.in/wp-content/uploads/2025/01/manshi3-271x300.webp 271w"
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
                <div className="e-con-inner">
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
                        <div className="elementor-widget-container">
                          {/* First Form */}
                          <form className="elementor-form" method="post" name="New Form">
                            <input type="hidden" name="post_id" value="9" />
                            <input type="hidden" name="form_id" value="025f1be" />
                            <input type="hidden" name="referer_title" value="wedease - WedEase" />
                            <input type="hidden" name="queried_id" value="9" />

                            <div className="elementor-form-fields-wrapper elementor-labels-">
                              <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-50 elementor-field-required">
                                <label
                                  htmlFor="form-field-name-1"
                                  className="elementor-field-label elementor-screen-only"
                                >
                                  Name
                                </label>
                                <input
                                  size={1}
                                  type="text"
                                  name="form_fields[name]"
                                  id="form-field-name-1"
                                  className="elementor-field elementor-size-sm elementor-field-textual"
                                  placeholder="Full Name"
                                  required
                                  aria-required="true"
                                />
                              </div>

                              <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-phone elementor-col-50 elementor-field-required">
                                <label
                                  htmlFor="form-field-phone-1"
                                  className="elementor-field-label elementor-screen-only"
                                >
                                  Number
                                </label>
                                <input
                                  size={1}
                                  type="tel"
                                  name="form_fields[phone]"
                                  id="form-field-phone-1"
                                  className="elementor-field elementor-size-sm elementor-field-textual"
                                  placeholder="Mobile Number"
                                  required
                                  aria-required="true"
                                  pattern="[0-9()#&amp;+*-=.]+"
                                  title="Only numbers and phone characters (#, -, *, etc) are accepted."
                                />
                              </div>

                              <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-100 elementor-field-required">
                                <label
                                  htmlFor="form-field-email-1"
                                  className="elementor-field-label elementor-screen-only"
                                >
                                  Email
                                </label>
                                <input
                                  size={1}
                                  type="email"
                                  name="form_fields[email]"
                                  id="form-field-email-1"
                                  className="elementor-field elementor-size-sm elementor-field-textual"
                                  placeholder="Email address"
                                  required
                                  aria-required="true"
                                />
                              </div>

                              <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                                <button className="elementor-button elementor-size-sm" type="submit">
                                  <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-text">Talk to your WedEaser</span>
                                  </span>
                                </button>
                              </div>
                            </div>
                          </form>

                          {/* Second Form (shortened, apply same fixes) */}
                          <form className="elementor-form" method="post" name="intellemo_form">
                            <input type="hidden" name="post_id" value="9" />
                            <input type="hidden" name="form_id" value="d140993" />
                            <input type="hidden" name="referer_title" value="wedease - WedEase" />
                            <input type="hidden" name="queried_id" value="9" />

                            <div className="elementor-form-fields-wrapper elementor-labels-">
                              {/* Name */}
                              <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-50 elementor-field-required">
                                <label
                                  htmlFor="form-field-name-2"
                                  className="elementor-field-label elementor-screen-only"
                                >
                                  Name
                                </label>
                                <input
                                  size={1}
                                  type="text"
                                  name="form_fields[name]"
                                  id="form-field-name-2"
                                  className="elementor-field elementor-size-sm elementor-field-textual"
                                  placeholder="Full Name"
                                  required
                                  aria-required="true"
                                />
                              </div>

                              {/* Phone */}
                              <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-phone elementor-col-50 elementor-field-required">
                                <label
                                  htmlFor="form-field-phone-2"
                                  className="elementor-field-label elementor-screen-only"
                                >
                                  Number
                                </label>
                                <input
                                  size={1}
                                  type="tel"
                                  name="form_fields[phone]"
                                  id="form-field-phone-2"
                                  className="elementor-field elementor-size-sm elementor-field-textual"
                                  placeholder="Mobile Number"
                                  required
                                  aria-required="true"
                                  pattern="[0-9()#&amp;+*-=.]+"
                                  title="Only numbers and phone characters (#, -, *, etc) are accepted."
                                />
                              </div>

                              {/* Email */}
                              <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-100 elementor-field-required">
                                <label
                                  htmlFor="form-field-email-2"
                                  className="elementor-field-label elementor-screen-only"
                                >
                                  Email
                                </label>
                                <input
                                  size={1}
                                  type="email"
                                  name="form_fields[email]"
                                  id="form-field-email-2"
                                  className="elementor-field elementor-size-sm elementor-field-textual"
                                  placeholder="Email address"
                                  required
                                  aria-required="true"
                                />
                              </div>

                              {/* Submit */}
                              <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                                <button className="elementor-button elementor-size-sm" type="submit">
                                  <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-text">Talk to your WedEaser</span>
                                  </span>
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>

                      </div>
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
    </div>
  )
}

export default page
