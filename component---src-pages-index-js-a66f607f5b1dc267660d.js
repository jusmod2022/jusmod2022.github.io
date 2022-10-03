"use strict";(self.webpackChunkvmbo2022=self.webpackChunkvmbo2022||[]).push([[678],{2450:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=m;var a=o(n(7294)),l=n(5444),i=o(n(5697)),r=n(9650);function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){var t=e.to,n=e.title,i=e.children,o=e.className,s=e.stripHash,u=void 0!==s&&s,m=e.gatsbyLinkProps,d=void 0===m?{}:m,A=e.onAnchorLinkClick,p=u?r.handleStrippedLinkClick:r.handleLinkClick,g=c(c({},d),{},{to:u?(0,r.stripHashedLocation)(t):t,onClick:function(e){return p(t,e,A)}});return n&&(g.title=n),o&&(g.className=o),a.default.createElement(l.Link,g,i||n)}m.propTypes={to:i.default.string.isRequired,title:i.default.string,className:i.default.string,stripHash:i.default.bool,gatsbyLinkProps:i.default.object,onAnchorLinkClick:i.default.func,children:i.default.node}},9869:function(e,t,n){Object.defineProperty(t,"P",{enumerable:!0,get:function(){return a.AnchorLink}});var a=n(2450)},5881:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),l=n(5444),i=n(9869);function r(){return a.createElement("header",null,a.createElement("div",{className:"navbar"},a.createElement(l.Link,{to:"/",className:"logo"},"JUSMOD 2022"),a.createElement("nav",null,a.createElement("ul",null,a.createElement("li",null,a.createElement(i.P,{to:"/#program",title:"Program",className:"stripped",stripHash:!0})),a.createElement("li",null,a.createElement(i.P,{to:"/#dates",title:"Important Dates",className:"stripped",stripHash:!0})),a.createElement("li",null,a.createElement(i.P,{to:"/#guidelines",title:"Submission Guidelines",className:"stripped",stripHash:!0})),a.createElement("li",null,a.createElement(i.P,{to:"/#organization",title:"Organization",className:"stripped",stripHash:!0})),a.createElement("li",null,a.createElement(i.P,{to:"/#camera",title:"Camera-ready Instructions",className:"stripped",stripHash:!0}))))))}var o=n(6125);function s(e){var t=e.children;return a.createElement("div",{className:"layout"},a.createElement(r,null),a.createElement(o.S,{className:"banner",src:"../images/banner.jpeg",alt:"Banner",layout:"fullWidth",placeholder:"blurred",aspectRatio:3.2,__imageData:n(2315)}),a.createElement("div",{className:"content"},t),a.createElement("footer",null,a.createElement("p",null,"Website created by Dr. Tiago Prince Sales.")))}},7704:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var a=n(7294),l=n(5881);function i(){return a.createElement(l.Z,null,a.createElement("section",null,a.createElement("div",null,a.createElement("h1",null,"1st International Workshop on Digital Justice, Digital Law, and Conceptual Modeling"),a.createElement("p",{className:"subtitle"},"In conjunction with the"," ",a.createElement("a",{href:"https://er2022web.github.io/ER2022/"},"41st International Conference on Conceptual Modeling (ER 2022)"),", Hyderabad, India, 17-20 October, 2022."),a.createElement("h3",{id:"program"},"Program"),a.createElement("h3",null,"17th October 2022 IST"),a.createElement("ul",null,a.createElement("li",null,"14:30 - 14:45 - Welcome session (Chair: Silvana Castanto)"),a.createElement("li",null,"14:45 - 15:30 - Keynote session (Chair: Silvana Castanto): Legal Knowledge Representation and Reasoning in the Semantic Web by ",a.createElement("a",{href:"https://www.linkedin.com/in/enrico-francesconi-4754958/"}," Enrico Francesconi"))),a.createElement("h3",null,"Session 1 (Chair: Tiago Prince Sales): Legal Knowledge Representation"),a.createElement("ul",null,a.createElement("li",null,"15:30 - 15:50 - A Rule 74 for Italian judges (Giulia Pinotti, Federica Fazio and Amedeo Santosuosso)"),a.createElement("li",null,"15:50 - 16:10 - On the Lack of Legal Regulation in Conceptual Modeling (Kai von Lewinski and Stefanie Scherzinger)"),a.createElement("li",null,"16:10 - 16:30 - coffee break")),a.createElement("h3",null,"Session 2 (Chair: Cristine Griffo): Legal Knowledge Extraction"),a.createElement("ul",null,a.createElement("li",null,"16:30 - 16:50 - Unsupervised factor extraction from pretrial detention decisions by Italian and Brazilian Supreme Courts (Isabela Cristina Sabo, Marco Billi, Francesca Lagioia, Giovanni Sartor and Aires José Rover)"),a.createElement("li",null,"16:50 - 17:10 - Context-Aware Knowledge Extraction from Legal Documents through Zero-Shot Classification (Alfio Ferrara, Sergio Picascia and Davide Riva)"),a.createElement("li",null,"17:10 - 17:30 - Automated extraction and representation of citation network: a CJEU case-study (Galileo Sartor, Piera Santin, Davide Audrito, Emilio Sulis and Luigi Di Caro)"),a.createElement("li",null,"17:30 - 18:00 - Discussion and closing")),a.createElement("h2",null,"Call for papers"),a.createElement("h3",null,"Relevance and Goals"),a.createElement("p",null,"Law plays a crucial role in almost every aspect of our life, both public and private. Thousands of legal documents are constantly produced by institutional bodies, such as Parliaments and Courts, which constitute a prominent source of information and knowledge for judges, lawyers, and other professionals involved in legal decision-making. To cope with growing volume, complexity, and articulation of legal documents as well as to foster digital justice and digital law, increasing effort is being devoted to digital transformation processes in the legal domain."),a.createElement("p",null,"Conceptual modeling plays a crucial role in this scenario, to formalize features and nature of terminology used in legal documents and to promote the development and the adoption of legal ontologies, shared vocabularies, and open linked data about legislation, case-law, and other relevant legal information. Furthermore, advanced functionalities for legal data and process modeling and management are advocated, embracing modern technologies like Semantic Web, NLP, AI, to enable semantic text search and exploration, legal knowledge extraction and formalization, legal decision-making and legal analytics."),a.createElement("p",null,"This workshop aims to constitute a meeting venue for a variety of researchers involved in digital justice and digital law, originating a rich community crossing different disciplines besides computer science, like law, legal informatics, management, economics and social sciences. The workshop will provide an opportunity to share, discuss, and identify new approaches and solutions for modeling, analysis, formalization, and interpretation of legal data and related processes."),a.createElement("h3",null,"Topics of Interest"),a.createElement("p",null,"We solicit submissions related to digital justice and digital law in general, also bringing out modeling and conceptualization features; topics of interest include, but are not limited to:"),a.createElement("ul",null,a.createElement("li",null,"Digital transformation, digital justice, digital law"),a.createElement("li",null,"Legal ontologies: design, reuse, applications, experiences"),a.createElement("li",null,"Linked data and knowledge graphs in the legal domain"),a.createElement("li",null,"Thesauri, shared vocabularies, and taxonomies in the legal domain"),a.createElement("li",null,"Domain-Specific Visual Modeling Language (DSVML) and law"),a.createElement("li",null,"Visual law, legal design, and correlated themes"),a.createElement("li",null,"Process modeling in digital justice"),a.createElement("li",null,"Legal data interpretation"),a.createElement("li",null,"Modeling and law version control: normative systems, judicial decisions, contracts"),a.createElement("li",null,"Legal document annotation"),a.createElement("li",null,"Legal knowledge extraction"),a.createElement("li",null,"Semantic search and retrieval of legal data"),a.createElement("li",null,"Ethics in legal data processing"),a.createElement("li",null,"Legal analytics"),a.createElement("li",null,"Quality of legal data modeling")),a.createElement("h3",{id:"dates"},"Important Dates"),a.createElement("ul",null,a.createElement("li",null,"Abstract submission: 8 June 2022"),a.createElement("li",null,"Paper submission: EXTENDED 22 June 2022"),a.createElement("li",null,"Author notification: 14 July 2022"),a.createElement("li",null,"Camera-ready: 31 July 2022"),a.createElement("li",null,"Workshop: 17-20 October 2022 (exact date to be defined)")),a.createElement("h3",{id:"guidelines"},"Submission Guidelines"),a.createElement("p",null,"JUSMOD invites submissions of high-quality papers describing original and unpublished research contributions."),a.createElement("p",null,"The paper submission formats are:"),a.createElement("ul",null,a.createElement("li",null,a.createElement("b",null,"Regular paper")," (max 10 pages, including images and references): research papers describing a completed study, including negative results and early exploratory efforts."),a.createElement("li",null,a.createElement("b",null,"Short paper")," (max 6 pages): position, vision, and lesson-learnt papers about planned/in-progress study, including presentations of preliminary results. ")),a.createElement("p",null,"The authors must submit manuscripts using the ",a.createElement("a",{href:"https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"},"Springer style for Lecture Notes in Computer Science"),". Papers must be submitted as PDF files via ",a.createElement("a",{href:"https://easychair.org/conferences/?conf=jusmod22"},"EasyChair"),"."),a.createElement("p",null," Accepted papers are expected to be presented at the conference and at least one author is required to register to the conference."),a.createElement("p",null,"The proceedings of JUSMOD will be published in a volume of Springer LNCS."),a.createElement("p",null,"The organization of a journal special issue about the workshop topics is currently under consideration. The authors of workshop accepted papers will be invited to submit an extended contribution to the special issue (if confirmed)."),a.createElement("div",null,a.createElement("a",{href:"https://easychair.org/conferences/?conf=jusmod22",class:"button",target:"_blank",rel:"noreferrer"},"Submit a paper")),a.createElement("h3",{id:"organization"},"Chairs and Organization"),a.createElement("ul",null,a.createElement("li",null,a.createElement("div",null,a.createElement("a",{href:"https://www.unimi.it/it/ugov/person/silvana-castano"},"Silvana Castano"),", Università degli Studi di Milano, Italy"),a.createElement("div",null,"silvana.castano [at] unimi.it")),a.createElement("li",null,a.createElement("div",null,a.createElement("a",{href:"https://scholar.google.com/citations?user=W8Mu8rAAAAAJ"},"Mattia Falduti"),", Free University of Bozen-Bolzano, Italy"),a.createElement("div",null,"mattia.falduti [at] unibz.it")),a.createElement("li",null,a.createElement("div",null,a.createElement("a",{href:"https://scholar.google.com/citations?user=TCpW-JMAAAAJ"},"Cristine Griffo"),", Free University of Bozen-Bolzano, Italy"),a.createElement("div",null,"cristine.griffo [at] unibz.it")),a.createElement("li",null,a.createElement("div",null,a.createElement("a",{href:"https://www.unimi.it/en/ugov/person/stefano-montanelli"},"Stefano Montanelli"),", Università degli Studi di Milano, Italy"),a.createElement("div",null,"stefano.montanelli [at] unimi.it")),a.createElement("li",null,a.createElement("div",null,a.createElement("a",{href:"https://inf.unibz.it/~tpsales"},"Tiago Prince Sales"),", Free University of Bozen-Bolzano, Italy"),a.createElement("div",null,"tiago.princesales [at] unibz.it"))),a.createElement("h3",null,"Keynote"),a.createElement("ul",null,a.createElement("a",{href:"https://www.linkedin.com/in/enrico-francesconi-4754958/"}," Enrico Francesconi"),a.createElement("p",null,"Title: Legal Knowledge Representation and Reasoning in the Semantic Web"),a.createElement("p",null,"Abstract: Machine readable, actionable rules represent a precondition for developing systems endowed with automatic reasoning facilities for advanced information services in the legal domain. In this talk we present an approach for legal knowledge representation and reasoning within a Semantic Web framework. It is based on the distinction between provisions and norms and it is able to provide advanced reasoning facilities for advanced legal information retrieval (like implementing Hohfedian reasoning) and legal compliance checking for deontic notions. It is also shown how the approach can handle norm defeasibility. Such methodology is implemented by decidable fragments of OWL 2, while legal reasoning is implemented by available decidable reasoners.")),a.createElement("h3",null,"Program Committee"),a.createElement("ul",null,a.createElement("li",null,"Tommaso Agnoloni, IGSG, CNR, Italy "),a.createElement("li",null,"João Paulo A. Andrade, Federal University of Espírito Santo, Brazil"),a.createElement("li",null,"Lauro Araujo, Prodasen-Brazilian Senate, Brazil"),a.createElement("li",null,"Jean-Rémi Bourguet, University of Vila Velha, Brazil"),a.createElement("li",null,"Samuel M. Brasil Jr., National School of the Judiciary (ENFAM), Brazil"),a.createElement("li",null,"Daniel Braun, University of Twente, The Netherlands"),a.createElement("li",null,"Mirna El Ghosh, National Institute of Applied Sciences of Rouen, France"),a.createElement("li",null,"Matthias Grabmair, Technische Universität München, Germany"),a.createElement("li",null,"Giancarlo Guizzardi, Free University of Bolzano, Italy"),a.createElement("li",null,"João O. Lima, Prodasen-Brazilian Senate, Brazil"),a.createElement("li",null,"Juliana Justo Castello, Vitória Law School, Brazil"),a.createElement("li",null,"Juliano Maranhão, São Paulo University, Brazil"),a.createElement("li",null,"Samuela Marchiori, University of Twente, the Nederlands "),a.createElement("li",null,"Robert Muthuri,  Strathmore University "),a.createElement("li",null,"Elias Oliveira, Federal University of Espírito Santo, Brazil"),a.createElement("li",null,"Matteo Palmonari, Università di Milano-Bicocca, Italy"),a.createElement("li",null,"Anca Radu, European University Institute (EUI), Italy"),a.createElement("li",null,"Aires Rover, Federal University of Santa Catarina, Brazil"),a.createElement("li",null,"Jaromir Savelka, Carnegie Mellon University, USA"),a.createElement("li",null,"Giovanni Sileno, University of Amsterdam, The Netherlands"),a.createElement("li",null,"Paolo Sommaggio, Faculty of Law, University of Trento, Italy"),a.createElement("li",null,"Andrea Tagarelli, Università della Calabria, Italy"),a.createElement("li",null,"Maria das Graças Teixeira, Federal University of Espírito Santo, Brazil"),a.createElement("li",null,"Sergio Tessaris, Free University of Bozen-Bolzano, Italy"),a.createElement("li",null,"Ester Zumpano, Università della Calabria, Italy")),a.createElement("h3",{id:"camera"}," Camera-ready Instructions"),a.createElement("p",null,"Please, follow these instructions for preparation of the camera-ready versions of accepted papers:"),a.createElement("ul",null,a.createElement("li",null,"Upload the PDF file of the final version on ",a.createElement("a",{href:"https://easychair.org/conferences/?conf=jusmod22"},"Easychair")," using the ",a.createElement("a",{href:"https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"},"Springer style for Lecture Notes in Computer Science")," provided for the initial submission. Using this template is mandatory. Deadline: ",a.createElement("b",null,"August 5 2022"),"."),a.createElement("li",null,"Send an email to ",a.createElement("a",{href:"mailto:jusmod22@islab.di.unimi.it?subject=source%20files%20for%20JUSMOD%20submission%20%23paper-id"},"jusmod22@islab.di.unimi.it")," with subject ",a.createElement("i",null,"source files for JUSMOD submission #paper-id")," by attaching all the submission file sources as a zip archive. Deadline: ",a.createElement("b",null,"August 5 2022"),"."),a.createElement("li",null,"Send an email to ",a.createElement("a",{href:"mailto:jusmod22@islab.di.unimi.it?subject=copyright%20form%20for%20JUSMOD%20submission%20%23paper-id"},"jusmod22@islab.di.unimi.it")," with subject ",a.createElement("i",null,"copyright form for JUSMOD submission #paper-id")," by attaching a signed copyright form according to the ",a.createElement("a",{href:"https://resource-cms.springernature.com/springer-cms/rest/v1/content/19790018/data/SNCS_ProceedingsPaper_LTP_ST_SN_Switzerland"},"Springer Licence to Publish"),". For filling-in the form, use the following data:",a.createElement("ul",null,a.createElement("li",null,a.createElement("i",null,"Title of the Proceedings"),": Advances in Conceptual Modeling - ER 2022 Workshops CMLS, EMPER, iStar, JUSMOD, Hyderabad, India, October 17-10, 2022"),a.createElement("li",null,a.createElement("i",null,"Proceedings Editors"),": Renata Guizzardi and Bernd Neumayr")),"Deadline: ",a.createElement("b",null,"August 10 2022"),"."),a.createElement("li",null,"Register to the ER 2022 conference. At least one author registration (",a.createElement("i",null,"authors registration fee"),") is required per paper. Please, follow the instructions at the ",a.createElement("a",{href:"https://er2022web.github.io/ER2022/registration.html"},"ER 2022 website"),". Deadline: ",a.createElement("b",null,"August 22 2022")),"."),a.createElement("p",null,"Please, write to ",a.createElement("a",{href:"mailto:jusmod22@islab.di.unimi.it"},"jusmod22@islab.di.unimi.it")," for any question."))))}},2315:function(e){e.exports=JSON.parse('{"layout":"fullWidth","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABhQlQEf/EABkQAAMAAwAAAAAAAAAAAAAAAAABAhETIf/aAAgBAQABBQKK2nEYR//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/AWf/xAAYEAACAwAAAAAAAAAAAAAAAAABEQAQMf/aAAgBAQAGPwJoCZX/xAAYEAADAQEAAAAAAAAAAAAAAAAAASERMf/aAAgBAQABPyHQ8xOGRcD6Wn//2gAMAwEAAgADAAAAEAQ//8QAFxEBAAMAAAAAAAAAAAAAAAAAAAERMf/aAAgBAwEBPxCMW//EABYRAQEBAAAAAAAAAAAAAAAAAAEAMf/aAAgBAgEBPxDUBf/EABkQAQEAAwEAAAAAAAAAAAAAAAERACExQf/aAAgBAQABPxDxQQlR7cVIGNobXtxDE9Qc/9k="},"images":{"fallback":{"src":"/static/988ee0eca67af32f0b1602881d0b34b4/33355/banner.jpg","srcSet":"/static/988ee0eca67af32f0b1602881d0b34b4/19e5a/banner.jpg 750w,\\n/static/988ee0eca67af32f0b1602881d0b34b4/5c354/banner.jpg 1080w,\\n/static/988ee0eca67af32f0b1602881d0b34b4/c7a30/banner.jpg 1366w,\\n/static/988ee0eca67af32f0b1602881d0b34b4/33355/banner.jpg 1920w","sizes":"100vw"},"sources":[{"srcSet":"/static/988ee0eca67af32f0b1602881d0b34b4/b19ed/banner.webp 750w,\\n/static/988ee0eca67af32f0b1602881d0b34b4/02909/banner.webp 1080w,\\n/static/988ee0eca67af32f0b1602881d0b34b4/5981b/banner.webp 1366w,\\n/static/988ee0eca67af32f0b1602881d0b34b4/707e4/banner.webp 1920w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.3125}')}}]);
//# sourceMappingURL=component---src-pages-index-js-a66f607f5b1dc267660d.js.map