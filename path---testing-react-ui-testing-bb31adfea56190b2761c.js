webpackJsonp([30171945304882],{652:function(t,e){t.exports={data:{site:{siteMetadata:{docSections:{basics:["/basics/introduction/","/basics/quick-start-guide/","/basics/slow-start-guide/","/basics/guide-react/","/basics/guide-vue/","/basics/guide-angular/","/basics/writing-stories/","/basics/exporting-storybook/","/basics/faq/","/basics/community/","/basics/live-examples/"],configurations:["/configurations/default-config/","/configurations/custom-webpack-config/","/configurations/custom-babel-config/","/configurations/add-custom-head-tags/","/configurations/serving-static-files/","/configurations/env-vars/","/configurations/cli-options/"],testing:["/testing/react-ui-testing/","/testing/structural-testing/","/testing/interaction-testing/","/testing/css-style-testing/","/testing/manual-testing/"],addons:["/addons/introduction/","/addons/using-addons/","/addons/addon-gallery/","/addons/writing-addons/","/addons/api/"]}}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/404/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/addons/addon-gallery/"},frontmatter:{title:"Addon Gallery",id:"addon-gallery"}}},{node:{fields:{slug:"/addons/introduction/"},frontmatter:{title:"Intro to Addons",id:"introduction"}}},{node:{fields:{slug:"/addons/api/"},frontmatter:{title:"API",id:"api"}}},{node:{fields:{slug:"/addons/using-addons/"},frontmatter:{title:"Using Addons",id:"using-addons"}}},{node:{fields:{slug:"/addons/writing-addons/"},frontmatter:{title:"Writing Addons",id:"writing-addons"}}},{node:{fields:{slug:"/basics/community/"},frontmatter:{title:"Community",id:"community"}}},{node:{fields:{slug:"/basics/exporting-storybook/"},frontmatter:{title:"Exporting Storybook as a Static App",id:"exporting-storybook"}}},{node:{fields:{slug:"/basics/guide-angular/"},frontmatter:{title:"Storybook for Angular",id:"guide-angular"}}},{node:{fields:{slug:"/basics/guide-react/"},frontmatter:{title:"Storybook for React",id:"guide-react"}}},{node:{fields:{slug:"/basics/faq/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/basics/guide-vue/"},frontmatter:{title:"Storybook for Vue",id:"guide-vue"}}},{node:{fields:{slug:"/basics/introduction/"},frontmatter:{title:"Introduction",id:"introduction"}}},{node:{fields:{slug:"/basics/slow-start-guide/"},frontmatter:{title:"Slow start guide",id:"slow-start-guide"}}},{node:{fields:{slug:"/basics/live-examples/"},frontmatter:{title:"Live Examples",id:"live-examples"}}},{node:{fields:{slug:"/basics/quick-start-guide/"},frontmatter:{title:"Quick Start Guide",id:"quick-start-guide"}}},{node:{fields:{slug:"/basics/writing-stories/"},frontmatter:{title:"Writing Stories",id:"writing-stories"}}},{node:{fields:{slug:"/configurations/add-custom-head-tags/"},frontmatter:{title:"Add Custom Head Tags",id:"add-custom-head-tags"}}},{node:{fields:{slug:"/configurations/cli-options/"},frontmatter:{title:"CLI Options",id:"cli-options"}}},{node:{fields:{slug:"/configurations/custom-babel-config/"},frontmatter:{title:"Custom Babel Config",id:"custom-babel-config"}}},{node:{fields:{slug:"/configurations/default-config/"},frontmatter:{title:"Default Config",id:"default-config"}}},{node:{fields:{slug:"/configurations/custom-webpack-config/"},frontmatter:{title:"Custom Webpack Config",id:"custom-webpack-config"}}},{node:{fields:{slug:"/configurations/env-vars/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/configurations/serving-static-files/"},frontmatter:{title:"Serving Static Files",id:"serving-static-files"}}},{node:{fields:{slug:"/testing/css-style-testing/"},frontmatter:{title:"CSS/Style Testing",id:"css-style-testing"}}},{node:{fields:{slug:"/testing/interaction-testing/"},frontmatter:{title:"Interaction Testing",id:"interaction-testing"}}},{node:{fields:{slug:"/testing/manual-testing/"},frontmatter:{title:"Manual Testing",id:"manual-testing"}}},{node:{fields:{slug:"/testing/react-ui-testing/"},frontmatter:{title:"Introduction: React UI Testing",id:"react-ui-testing"}}},{node:{fields:{slug:"/testing/structural-testing/"},frontmatter:{title:"Structural Testing",id:"structural-testing"}}}]},markdownRemark:{html:'<p>There are different aspects we need to look at when testing UI.\nThere are also a lot of tools and techniques we can use. </p>\n<h2 id="reasons-for-testing"><a href="#reasons-for-testing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reasons for Testing</h2>\n<p>Before we talk about testing, we need to think about why we need to test.\nThere are many reasons; here are some of our reasons:</p>\n<ul>\n<li>To find bugs.</li>\n<li>To make sure things won’t break between new code commits.</li>\n<li>To keep tests as living documentations.</li>\n</ul>\n<p>Specifically, testing is important when working with teams since it allows different people the ability to contribute with confidence.</p>\n<h2 id="different-aspects-of-ui-testing"><a href="#different-aspects-of-ui-testing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Different Aspects of UI Testing</h2>\n<p>We refer UI for many things. To put this in focus, let’s narrow it down to React based user interfaces.</p>\n<h3 id="1-structural-testing"><a href="#1-structural-testing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. Structural Testing</h3>\n<p>Here we’ll focus on the structure of the UI and how it’s laid out.\nFor an example, let’s say we have a “login component” as shown below:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/login_form-c8005a2e6efce0c8b97a8c07776f40c7-2d0b5.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 690px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 39.08163265306123%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAoklEQVQoz63NQQrCMBCF4V694MKFF1AEwcu4aBFd6Al0UbWpbZNJ1EmeaRbFFoRSOvAtQpJ/ouwuMKXo95CLEv2x1oGZW/3R5jU8aK2F1hqiKPydCJoFzrlxQUUEKRWUosD4z+yXNItGBXfHi3dFes46spzGBeebPeJVgtk6xWJ7QLxMguR0GxZ8+CCzbb0/jGdFQSU1ylqjVqbzhsj8D07hCyZTXktKwWhLAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Login Form"\n        title=""\n        src="/static/login_form-c8005a2e6efce0c8b97a8c07776f40c7-44d6a.png"\n        srcset="/static/login_form-c8005a2e6efce0c8b97a8c07776f40c7-f4799.png 173w,\n/static/login_form-c8005a2e6efce0c8b97a8c07776f40c7-b3b1d.png 345w,\n/static/login_form-c8005a2e6efce0c8b97a8c07776f40c7-44d6a.png 690w,\n/static/login_form-c8005a2e6efce0c8b97a8c07776f40c7-bc0f7.png 1035w,\n/static/login_form-c8005a2e6efce0c8b97a8c07776f40c7-b50e5.png 1380w,\n/static/login_form-c8005a2e6efce0c8b97a8c07776f40c7-2d0b5.png 1960w"\n        sizes="(max-width: 690px) 100vw, 690px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>For structural testing, we are testing whether or not it has following content:</p>\n<ul>\n<li>A title with “Login in to Facebook”</li>\n<li>Two inputs for the username and password.</li>\n<li>A submit button.</li>\n<li>An error screen to show errors.</li>\n</ul>\n<p>For React, we have been using <a href="https://github.com/airbnb/enzyme">Enzyme</a> as a way to do structural testing, but now we can also use <a href="https://facebook.github.io/jest/blog/2016/07/27/jest-14.html">Jest’s snapshot testing</a> to make things even more simple.</p>\n<h3 id="2-interaction-testing"><a href="#2-interaction-testing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. Interaction Testing</h3>\n<p>UI is all about interacting with the user.\nWe do this with a bunch of UI elements, such as buttons, links, and input elements.\nWith interaction testing, we need to test if they are working properly.</p>\n<p>Let’s again use the above login component as an example. It should do these things:</p>\n<ul>\n<li>When we click the submit button, it should give us the username and password.</li>\n<li>When we click the “Forgotten Account” link, it should redirect to a new page.</li>\n</ul>\n<p>We have few ways to do this type of testing with React. The simple way is to use <a href="https://github.com/airbnb/enzyme">Enzyme</a>.</p>\n<h3 id="3-cssstyle-testing"><a href="#3-cssstyle-testing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3. CSS/Style Testing</h3>\n<p>UI is all about styles (whether they’re simple, beautiful, or even ugly).\nWith style testing, we are evaluating the look and feel of our UI components between code changes.\nThis is a pretty complex subject and usually we do it by comparing images.</p>\n<p>If we are using inline styles all the way, we can use JEST snapshot testing.\nBut to get even better results, we should consider using tools such as:</p>\n<ul>\n<li><a href="https://github.com/garris/BackstopJS">BackstopJS</a></li>\n<li><a href="https://github.com/Huddle/PhantomCSS">PhantomCSS</a></li>\n<li><a href="https://github.com/gemini-testing/gemini">Gemini</a></li>\n<li><a href="https://github.com/Galooshi/happo">Happo</a></li>\n</ul>\n<h3 id="4-manual-testing"><a href="#4-manual-testing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4. Manual Testing</h3>\n<p>All the above sections are about testing with automated tools.\nBut since we are building UI for humans, we must also manually test them to see how they feel.</p>\n<p>Another reason for manual testing is for the better user experience.</p>\n<p>We should always try to test our UI with the naked eye.\nFor this, we can simply use our existing Storybook.\nThis is something that we can’t automate(yet) and takes time.\nBut it would be great if we could do this once in a while (especially with a major code changes).</p>\n<h2 id="how-storybook-can-help-us"><a href="#how-storybook-can-help-us" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How Storybook Can Help Us</h2>\n<p>A <strong>story</strong> is a smallest unit in Storybook.\nIt’s a fully functioning UI element where the input can be used for any of the testing methods we’ve mentioned above.</p>\n<p>Let’s look at how Storybook can help you do the above mentioned different aspects of testing.</p>\n<ul>\n<li><a href="/testing/structural-testing">Structural Testing with StoryShots</a></li>\n<li><a href="/testing/interaction-testing">Interaction Testing with Specs Addon</a></li>\n<li><a href="/testing/css-style-testing">Storybook as the Base for CSS/Style Testing</a></li>\n<li><a href="/testing/manual-testing">Storybook for Manual UI Testing</a></li>\n</ul>',fields:{slug:"/testing/react-ui-testing/"},frontmatter:{title:"Introduction: React UI Testing",id:"react-ui-testing"}}},pathContext:{slug:"/testing/react-ui-testing/"}}}});
//# sourceMappingURL=path---testing-react-ui-testing-bb31adfea56190b2761c.js.map