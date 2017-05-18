'use strict';

//LandingSection
var LandingSection = React.createClass({
	displayName: "Landing Section",
    
	updateClass: function updateClass() {},
	render: function render() {
		return React.createElement(
   "div",
   { "className": "header-content" },
   "",
   React.createElement(
      "div",
      { "className": "header-content-inner" },
      React.createElement(
         "h1",
         { id: "homeHeading" },
         "Hi, Im Justin. I design and build"
      ),
      React.createElement("h1", { "className": "element" }),
      React.createElement(
         "p",
         null,
         "Im looking to join an amazing team that is building an amazing product"
      ),
      React.createElement(
         "a",
         { href: "#about", "className": "btn btn-primary btn-xl page-scroll find-out" },
         "About Me"
      )
   )
);

	}
});

//About
var AboutMe = React.createClass({
    displayName: "About Me",
	render: function render() {
		return React.createElement(
        "div",
        { "className": "container" },
        React.createElement(
            "div",
            { "className": "row" },
            React.createElement(
                "div",
                { "className": "col-lg-12 text-center" },
                React.createElement(
                    "div",
                    { "className": "row", styles: "padding-bottom:2em" },
                    React.createElement(
                        "div",
                        { "className": "col-md-4 skillItem sr-hero1" },
                        React.createElement("img", { src: "img/Graphic-Design-Icon.png", "className": "skillIcon" }),
                        React.createElement(
                            "div",
                            null,
                            "User Experience Designer"
                        )
                    ),
                    React.createElement(
                        "div",
                        { "className": "col-md-4 skillItem sr-hero2" },
                        React.createElement("img", { src: "img/HTML5_1Color_White.png", "className": "skillIcon" }),
                        React.createElement(
                            "div",
                            null,
                            "Front End Developer"
                        )
                    ),
                    React.createElement(
                        "div",
                        { "className": "col-md-4 skillItem sr-hero3" },
                        React.createElement("img", { src: "img/database-icon.png", "className": "skillIcon" }),
                        React.createElement(
                            "div",
                            null,
                            "Full Stack Ready"
                        )
                    )
                ),
                React.createElement(
                    "h2",
                    null,
                    "Hello there,"
                ),
                React.createElement(
                    "p",
                    { "className": "paraText"},
                    "I'm Justin, web-developer and undergraduate student in Information Systems. I have helped startups gather more than $250,000 in seed funding with my work, and I am looking to do even more. While my expertise centers around design and development, my work with various startups in Singapore has taken me on an exciting journey from front-end to back-end and everywhere else in between. I go where I am needed, always more than happy to learn a new framework or library, because I believe there is always a right tool for the job. Nevertheless, I am excited for the exhilarating adventure that lies ahead of me as I stand in the sweet spot where beautiful design and clean development collides."
                ),
                React.createElement("hr", null),
                React.createElement(
                    "h3",
                    { styles: "padding-top:1em", "className": "portrait" },
                    React.createElement("img", { src: "img/profile.jpg", "className": "hidden-xs hidden-sm profile-round" }),
                    "The best part of the job is working with like-minded people"
                )
            )
        )
    );

	}
});

//Expertise
var Expertise = React.createClass({
	displayName: "Expertise",
    
	updateClass: function updateClass() {},
	render: function render() {
		return React.createElement(
    "div",
    { "className": "container" },
    React.createElement(
        "div",
        { "className": "row" },
        React.createElement(
            "div",
            { "className": "col-lg-12 text-center" },
            React.createElement(
                "div",
                { "className": "section-heading" },
                "My Expertise"
            ),
            React.createElement("hr", { "className": "primary" })
        )
    )
), React.createElement(
    "div",
    { "className": "container" },
    React.createElement(
        "div",
        { "className": "col-lg-4 col-md-6 text-center" },
        React.createElement(
            "div",
            { "className": "service-box" },
            React.createElement("i", { "className": "fa fa-4x fa-code text-primary sr-icons" }),
            React.createElement(
                "h3",
                null,
                "Developer"
            ),
            React.createElement(
                "p",
                { "className": "text-muted" },
                "I develop for the web with HTML5,CSS3 and javascript. Special shoutout to Jquery, AngularJS and Twitter Bootstrap"
            )
        )
    ),
    React.createElement(
        "div",
        { "className": "col-lg-4 col-md-6 text-center" },
        React.createElement(
            "div",
            { "className": "service-box" },
            React.createElement("i", { "className": "fa fa-4x fa-magic text-primary sr-icons" }),
            React.createElement(
                "h3",
                null,
                "UI/UX"
            ),
            React.createElement(
                "p",
                { "className": "text-muted" },
                "I create wireframes mockups that place emphasis on intuitive UI patterns and simple interactions. Sometimes, less is more"
            )
        )
    ),
    React.createElement(
        "div",
        { "className": "row" },
        React.createElement(
            "div",
            { "className": "col-lg-4 col-md-6 text-center" },
            React.createElement(
                "div",
                { "className": "service-box" },
                React.createElement("i", { "className": "fa fa-4x fa-diamond text-primary sr-icons" }),
                React.createElement(
                    "h3",
                    null,
                    "Iteration"
                ),
                React.createElement(
                    "p",
                    { "className": "text-muted" },
                    "I work closely with founders and customers to translate business requirements into well-defined specifications because that is how great user experiences begin"
                )
            )
        )
    )
);

	}
});

//Parallax
var Parallax = React.createClass({
	displayName: "Parallax",
    
	updateClass: function updateClass() {},
	render: function render() {
		return React.createElement(
  "div",
  { "className": "caption" },
  React.createElement(
    "span",
    { "className": "border quote-text", styles: "background-color:transparent" },
    "When sparks fly, some truly great ideas come to light "
  ),
  React.createElement(
    "div",
    null,
    "\xA0"
  ),
  React.createElement(
    "span",
    { "className": "border quote-author hidden-xs", styles: "background-color:transparent" },
    "- David Heinemeier Hansson"
  )
);

	}
});

//Experience
var Experience = React.createClass({
	displayName: "Experience",
	render: function render() {
		return React.createElement("div",{"className":"nothinghere"},
        React.createElement(
    "div",
    { "className": "row text-center worked-with-clients" },
    React.createElement(
        "div",
        { "className": "text-center sidepad" },
        React.createElement("div", { "className": "col-md-1" }),
        React.createElement(
            "div",
            { "className": "col-md-5 col-xs-12" },
            React.createElement(
                "h2",
                { styles: "text-align:left" },
                "Risingreens Technologies"
            ),
            React.createElement(
                "div",
                { "className": "job-scope" },
                React.createElement(
                    "i",
                    { styles: "color:orange" },
                    "* "
                ),
                "UI/UX design, Twitter Bootstrap Theme Customisation"
            ),
            React.createElement(
                "div",
                { "className": "company-desc" },
                "Risingreens Technologies is the first private farm management solution based out of Taiwan. They help farmers utilize and leverage technology for sustainable long term farm management along with powerful analytics tools."
            ),
            React.createElement("br", null),
            React.createElement(
                "div",
                { styles: "text-align:left" },
                React.createElement(
                    "a",
                    { href: "http://www.risingreens.com/", "className": "btn btn-primary btn-xl page-scroll find-out sr-button black-text" },
                    "Visit Website"
                )
            )
        ),
        React.createElement(
            "div",
            { "className": "col-md-5 col-xs-12", styles: "padding-top:1em" },
            React.createElement("img", { src: "img/risingreenMarketing.png", "className": "img-responsive" })
        ),
        React.createElement("div", { "className": "col-md-1" })
    )
), React.createElement(
    "div",
    { "className": "container text-center testimonial" },
    React.createElement(
        "div",
        { "className": "testimonial-text" },
        "\"Demonstrated great initiative to identify problems and devise solutions\""
    ),
    React.createElement(
        "div",
        { styles: "padding-top:1em" },
        React.createElement("img", { src: "img/RaxSuen.jpg", "className": "employer-img" }),
        React.createElement(
            "div",
            { "className": "employer-name" },
            "Rax Suen, CEO, Risingreens"
        )
    )
), React.createElement("br", null), React.createElement("br", null), React.createElement("br", null), React.createElement(
    "div",
    { "className": "row text-center worked-with-clients" },
    React.createElement(
        "div",
        { "className": "text-center sidepad" },
        React.createElement("div", { "className": "col-md-1" }),
        React.createElement(
            "div",
            { "className": "col-md-5 col-xs-12", styles: "text-align: left;padding:0" },
            React.createElement("img", { src: "img/thunderquoteImage.png", "className": "img-responsive" })
        ),
        React.createElement(
            "div",
            { "className": "col-md-5 col-xs-12" },
            React.createElement(
                "h2",
                { styles: "text-align:left" },
                "ThunderQuote"
            ),
            React.createElement(
                "div",
                { "className": "job-scope" },
                React.createElement(
                    "i",
                    { styles: "color:orange" },
                    "* "
                ),
                "UI/UX design, Front-End Developer"
            ),
            React.createElement(
                "div",
                { "className": "company-desc" },
                "ThunderQuote is a platform that seeks to connect B2B vendors in an online marketplace setting. Helping users conveniently source for quotes from a huge variety of vendors. They have been successful in raising significant seed funding from angel investors."
            ),
            React.createElement("br", null),
            React.createElement(
                "div",
                { styles: "text-align:left" },
                React.createElement(
                    "a",
                    { href: "https://www.thunderquote.com", "className": "btn btn-primary btn-xl page-scroll find-out sr-button black-text" },
                    "Visit Website"
                )
            )
        ),
        React.createElement("div", { "className": "col-md-1" })
    )
), React.createElement(
    "div",
    { "className": "container text-center testimonial" },
    React.createElement(
        "div",
        { "className": "testimonial-text" },
        "\"I'm deeply impressed by the quality of work Justin has delivered during his time here.\""
    ),
    React.createElement(
        "div",
        { styles: "padding-top:1em" },
        React.createElement("img", { src: "img/EmilNg.jpg", "className": "employer-img" }),
        React.createElement(
            "div",
            { "className": "employer-name" },
            "Emil Ng, CTO, ThunderQuote"
        )
    )
)
);
	}
});



React.render(React.createElement(LandingSection, null), document.getElementById('impl'));
React.render(React.createElement(AboutMe, null), document.getElementById('AboutMe'));
React.render(React.createElement(Expertise, null), document.getElementById('Expertise'));
React.render(React.createElement(Parallax, null), document.getElementById('Parallax'));
React.render(React.createElement(Experience, null), document.getElementById('Experience'));