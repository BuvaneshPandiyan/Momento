import React from 'react';

import './HomePage.css';



import Image1 from './assets/Image1.png';

import Image2 from './assets/Image2.png';

import Image3 from './assets/Image3.png';

import Image4 from './assets/Image4.png';

import Image5 from './assets/Image5.png';

import Image6 from './assets/Image6.png';



function HomePage() {

  return (

    <main className="content-container">

      <div className="content-box">

        <h1 className="main-title">

          WE TURN EMOTIONS INTO <br /> BEAUTIFUL PERSONALIZED WEBSITES

        </h1>



        <p className="intro">

          Sometimes, words aren’t enough. Whether you're expressing love, apologizing, inviting people to your celebration, or sharing your journey we help you do it through websites that are emotional, unique, and unforgettable.

        </p>



        <p className="bold-paragraph">

          We don’t just build websites.<br />

          We create experiences that come straight from the heart.

        </p>



        <div className="image-placeholder">

          <img src={Image1} alt="Main concept" className="section-image" />

        </div>



        {/* LOVE & PROPOSAL */}

        <section className="section">

          <h2>❤️ LOVE & PROPOSAL WEBSITES</h2>

          <p>

            Why simply express your love when you can impress them with a website that tells the entire story of how you met, how you fell in love, and how much they truly mean to you?

          </p>

          <p>We help you express your emotions in the most romantic and unforgettable way.</p>

          <p>You can:</p>

          <ul>

            <li>Tell your love story with beautiful writing, music, and visuals</li>

            <li>Share your journey first meet, first smile, first kiss, and all the memories</li>

            <li>Add personalized photos, songs, messages, animations, and inside jokes</li>

            <li>Celebrate special dates or just surprise them with your feelings</li>

          </ul>

          <p>

            Instead of saying just "I love you", express it with an experience they’ll never forget.<br />

            And in the end, let the website ask the one question your heart’s been holding:

          </p>

          <blockquote>“I love you... will you love me too?”</blockquote>

          <p>Love is a story. Let us help you tell yours.<br />✅ Available in all languages</p>



          <h3>What Makes Our Love Websites Unique?</h3>

          <ul>

            <li><strong>Custom Themes:</strong> Each website is crafted to match your unique love story's mood and personality.</li>

            <li><strong>Interactive Elements:</strong> Quizzes, surprise animations, and secret messages keep your loved one engaged and delighted.</li>

            <li><strong>Multi-media Magic:</strong> Integrate your favorite songs, videos, and photos to bring your memories to life.</li>

            <li><strong>Private & Secure:</strong> Password protection or invitation-only access to keep your love story intimate.</li>

          </ul>



          <p>

            Whether it’s a first proposal, an anniversary surprise, or a lifelong vow — your love deserves a website as extraordinary as your feelings.

          </p>

        </section>



        <div className="image-placeholder">

          <img src={Image2} alt="Love website preview" className="section-image" />

        </div>



        {/* OCCASION & INVITATION */}

        <section className="section">

          <h2>🎉 OCCASION & INVITATION WEBSITES</h2>

          <p>

            Why send a simple, boring invitation card online when you can create a cool, unforgettable website that brings your celebration to life?

          </p>

          <p>

            Have a big day coming up? A wedding, birthday, engagement, or any special event? We create stunning digital invitations that do more than just inform — they celebrate.

          </p>

          <p>You can:</p>

          <ul>

            <li>Share your journey as a couple — how you met, fell in love, and what this moment means</li>

            <li>Add pictures, love stories, music, photo galleries, and videos</li>

            <li>Include RSVP forms, event schedules, gift information, maps, and even countdowns</li>

            <li>Share the invite instantly with friends and family anywhere in the world</li>

          </ul>

          <p>

            Let your invitation reflect who you are — full of personality, heart, and joy.<br />

            It’s more than just an invite. It’s a part of your love story.<br />✅ Available in all languages

          </p>



          <h3>More Than Just Invitations</h3>

          <p>

            Our invitation websites are designed to be a centerpiece of your celebration. Imagine guests exploring your love journey before they even arrive. From photo galleries to heartfelt messages, from personalized playlists to interactive event schedules, your invite website becomes the first celebration itself.

          </p>



          <p>

            Plus, our RSVP forms sync with your email or phone, so managing your guest list is effortless.

          </p>



          <h3>Perfect For:</h3>

          <ul>

            <li>Weddings & Engagements</li>

            <li>Birthday Parties & Anniversaries</li>

            <li>Baby Showers & Gender Reveals</li>

            <li>Graduations & Retirement Parties</li>

            <li>Corporate Events & Product Launches</li>

          </ul>

        </section>



        <div className="image-placeholder">

          <img src={Image3} alt="Invitation website preview" className="section-image" />

        </div>



        {/* APOLOGY & FORGIVENESS */}

        <section className="section">

          <h2>💔 APOLOGY & FORGIVENESS WEBSITES</h2>

          <p>

            Hurt someone you love? Want to apologize but they’re not ready to hear you out? Don’t worry — we help you say everything your heart holds, through something beautiful.

          </p>

          <p>We create Apology Websites that help you express your love, regret, and sincerity.</p>

          <p>You can:</p>

          <ul>

            <li>Write what you truly feel — with stories, messages, and favorite songs</li>

            <li>Add personal photos, beautiful memories, and meaningful moments</li>

            <li>Include riddles or clues only the two of you understand</li>

            <li>Set a countdown timer that can only be stopped with the right answer</li>

          </ul>

          <p>When they crack the code and stop the timer, the website gently says:</p>

          <blockquote>“Apology Accepted. Thank you for giving us another chance.”</blockquote>

          <p>

            Because some feelings are too deep for text messages.<br />

            Say sorry with love, effort, and creativity.<br />✅ Available in all languages

          </p>



          <h3>The Power of a Thoughtful Apology</h3>

          <p>

            An apology website goes beyond words. It shows you care enough to invest time, creativity, and honesty. It's a digital gesture that speaks volumes about your intentions, sincerity, and hope for forgiveness.

          </p>



          <p>

            We help you rebuild bridges with messages, music, memories, and heartfelt surprises that words alone can’t convey.

          </p>

        </section>



        <div className="image-placeholder">

          <img src={Image4} alt="Apology website preview" className="section-image" />

        </div>



        {/* WHY CHOOSE US */}

        <section className="section">

          <h2>🌟 WHY CHOOSE US?</h2>

          <ul>

            <li>💖 100% personalized for your emotion and occasion</li>

            <li>🎵 Music, visuals, photos, memories, and interactive features</li>

            <li>🔐 Countdown timers, riddles, puzzles, and hidden messages</li>

            <li>📱 Fully mobile-ready, responsive, and smooth on all devices</li>

            <li>✨ No templates — we craft everything uniquely for your story</li>

            <li>🚀 Fast delivery, compassionate design, and attention to emotional detail</li>

            <li>🌍 Available in all languages</li>

            <li>🔧 Ongoing support and updates so your website stays perfect</li>

            <li>🛡️ Privacy and security at the core of everything we build</li>

          </ul>



          <h3>Our Promise To You</h3>

          <p>

            We’re not just designers. We’re storytellers. We listen closely to your feelings and vision, then translate them into a digital space where your emotions shine.

          </p>



          <p>

            Your happiness and satisfaction drive every pixel, animation, and word. Because this isn’t just a website — it’s your heart made visible.

          </p>

        </section>



        <div className="image-placeholder">

          <img src={Image5} alt="Team or behind-the-scenes" className="section-image" />

        </div>



        {/* TESTIMONIALS */}

        <section className="section">

          <h2>💬 WHAT OUR CLIENTS SAY</h2>

          <blockquote>

            “The proposal website you created was magical. It brought tears to her eyes, and she said yes! I couldn’t have done it without you.”  <em>Jason T.</em>

          </blockquote>

          <blockquote>

            “Our wedding invitation site was the highlight for our guests. Everyone loved reliving our love story and the interactive RSVP was a game changer.”  <em>Maria & Liam</em>

          </blockquote>

          <blockquote>

            “After a tough time, the apology website helped me express feelings I couldn’t put into words. It made all the difference.”  <em>Sophie M.</em>

          </blockquote>

          <blockquote>

            “Highly recommend! They listened to my ideas and created a website that felt so personal and heartfelt.”  <em>Rahul P.</em>

          </blockquote>

        </section>



        {/* FAQ */}

        <section className="section">

          <h2>❓ FREQUENTLY ASKED QUESTIONS</h2>

          <h3>How long does it take to create a website?</h3>

          <p>Typically 1-2 weeks depending on complexity and customization.</p>

          <h3>Can I update the website after it’s live?</h3>

          <p>Yes! We offer easy editing options and support for updates.</p>

          <h3>Is my personal story secure?</h3>

          <p>Absolutely. We prioritize privacy and offer password protection for your site.</p>

          <h3>Can I add music and videos?</h3>

          <p>Yes, your website can include your favorite songs, videos, and animations.</p>

          <h3>Do you support multiple languages?</h3>

          <p>Yes, we provide full support for all languages.</p>

        </section>



        {/* FINAL CALL TO ACTION */}

        <section className="section">

          <h2>💌 LET US HELP YOU TELL YOUR STORY</h2>

          <p>

            Whether it’s love, celebration, or apology <br />

            We help you say it beautifully, deeply, and in a way they’ll never forget.

          </p>

          <p>

            Your story deserves its own place on the internet.<br />

            Let’s turn it into something unforgettable.

          </p>

          <p style={{ fontSize: '1.2rem', marginTop: '2rem', lineHeight: '1.6' }}>

            🌟 You can see a WhatsApp icon hovering over the website — click on it to <strong>start your journey</strong> with us.<br /><br />

            Send us your <strong>story, pictures, songs, voice notes, or anything</strong> that holds meaning for you, and we’ll craft a <strong>beautiful, personal website</strong> just for it.<br /><br />

            Whether you're expressing love, saying sorry, celebrating someone, or just making someone smile <br />

            <strong>Let us help you say it in a way they'll never forget.</strong>

          </p>

        </section>



        <div className="image-placeholder">

          <img src={Image6} alt="Emotional final moment" className="section-image" />

        </div>

      </div>



      <a

        href="https://wa.me/7338816479"

        className="whatsapp-float"

        target="_blank"

        rel="noopener noreferrer"

      >

        <img

          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"

          alt="WhatsApp"

          className="whatsapp-icon"

        />

      </a>

    </main>

  );

}



export default HomePage;
