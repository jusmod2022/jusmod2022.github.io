import React from "react"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <section>
        <div>
          <h1>
            1st International Workshop on Digital Justice, Digital Law, and Conceptual Modeling
          </h1>
          <p className="subtitle">
            In conjunction with the{" "}
            <a href="https://er2022web.github.io/ER2022/">
              41st International Conference on Conceptual Modeling (ER 2022)
            </a>
            , Hyderabad, India, 17-20 October, 2022.
          </p>
          <h2>Call for papers</h2>
          
          <h3>Relevance and Goals</h3>
          <p>
          Law plays a crucial role in almost every aspect of our life, both public and private. Thousands of legal documents are constantly produced by institutional bodies, such as Parliaments and Courts, which constitute a prominent source of information and knowledge for judges, lawyers, and other professionals involved in legal decision-making. To cope with growing volume, complexity, and articulation of legal documents as well as to foster digital justice and digital law, increasing effort is being devoted to digital transformation processes in the legal domain. 
          </p>
          <p>
          Conceptual modeling plays a crucial role in this scenario, to formalize features and nature of terminology used in legal documents and to promote the development and the adoption of legal ontologies, shared vocabularies, and open linked data about legislation, case-law, and other relevant legal information. Furthermore, advanced functionalities for legal data and process modeling and management are advocated, embracing modern technologies like Semantic Web, NLP, AI, to enable semantic text search and exploration, legal knowledge extraction and formalization, legal decision-making and legal analytics.
          </p>
          <p>
          This workshop aims to constitute a meeting venue for a variety of researchers involved in digital justice and digital law, originating a rich community crossing different disciplines besides computer science, like law, legal informatics, management, economics and social sciences. The workshop will provide an opportunity to share, discuss, and identify new approaches and solutions for modeling, analysis, formalization, and interpretation of legal data and related processes.
          </p>

          <h3>Topics of Interest</h3>
          <p>We solicit submissions related to digital justice and digital law in general, also bringing out modeling and conceptualization features; topics of interest include, but are not limited to:</p>
          <ul>
            <li>Digital transformation, digital justice, digital law</li>
            <li>Legal ontologies: design, reuse, applications, experiences</li>
            <li>Linked data and knowledge graphs in the legal domain</li>
            <li>Thesauri, shared vocabularies, and taxonomies in the legal domain</li>
            <li>Domain-Specific Visual Modeling Language (DSVML) and law</li>
            <li>Visual law, legal design, and correlated themes</li>
            <li>Process modeling in digital justice</li>
            <li>Legal data interpretation</li>
            <li>Modeling and law version control: normative systems, judicial decisions, contracts</li>
            <li>Legal document annotation</li>
            <li>Legal knowledge extraction</li>
            <li>Semantic search and retrieval of legal data</li>
            <li>Ethics in legal data processing</li>
            <li>Legal analytics</li>
            <li>Quality of legal data modeling</li>
          </ul>
          <h3 id="dates">Important Dates</h3>
          <ul>
            <li>Abstract submission: 8 June 2022</li>
            <li>Paper submission: 15 June 2022</li>
            <li>Author notification: 14 July 2022</li>
            <li>Camera-ready: 31 July 2022</li>
            <li>Workshop: 17-20 October 2022 (exact date to be defined)</li>
          </ul>
          <h3 id="guidelines">Submission Guidelines</h3>
          <p>
          JUSMOD invites submissions of high-quality papers describing original and unpublished research contributions.
          </p>
          <p>
          The paper submission formats are:
          </p>

          <ul>
            <li><b>Regular paper</b> (max 10 pages, including images and references): research papers describing a completed study, including negative results and early exploratory efforts.</li>
            <li><b>Short paper</b> (max 6 pages): position, vision, and lesson-learnt papers about planned/in-progress study, including presentations of preliminary results. </li>
          </ul>
          
          <p>
          The authors must submit manuscripts using the <a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines">Springer style for Lecture Notes in Computer Science</a>. Papers must be submitted as PDF files via <a href="https://easychair.org/conferences/?conf=jusmod22">EasyChair</a>.
         </p>
         <p> Accepted papers are expected to be presented at the conference and at least one author is required to register to the conference. 
         </p>
         <p>
         The proceedings of JUSMOD will be published in a volume of Springer LNCS. 
         </p>
         <p>
         The organization of a journal special issue about the workshop topics is currently under consideration. The authors of workshop accepted papers will be invited to submit an extended contribution to the special issue (if confirmed).
         </p>

          <div>
            <a
              href="https://easychair.org/conferences/?conf=jusmod22"
              class="button"
              target="_blank"
              rel="noreferrer"
            >
              Submit a paper
            </a>
          </div>

          <h3 id="organization">Chairs and Organization</h3>
          <ul>
            <li>
              <div>
                <a href="https://www.unimi.it/it/ugov/person/silvana-castano">
                  Silvana Castano
                </a>
                , Università degli Studi di Milano, Italy
              </div>
              <div>silvana.castano [at] unimi.it</div>
            </li>
            <li>
              <div>
                <a href="https://scholar.google.com/citations?user=W8Mu8rAAAAAJ">
                Mattia Falduti
                </a>
                , Free University of Bozen-Bolzano, Italy
              </div>
              <div>mattia.falduti [at] unibz.it</div>
            </li>
            <li>
              <div>
                <a href="https://scholar.google.com/citations?user=TCpW-JMAAAAJ">
                Cristine Griffo
                </a>
                , Free University of Bozen-Bolzano, Italy
              </div>
              <div>cristine.griffo [at] unibz.it</div>
            </li>
            <li>
              <div>
                <a href="https://www.unimi.it/en/ugov/person/stefano-montanelli">
                Stefano Montanelli
                </a>
                , Università degli Studi di Milano, Italy
              </div>
              <div>stefano.montanelli [at] unimi.it</div>
            </li>
            <li>
              <div>
                <a href="https://inf.unibz.it/~tpsales">Tiago Prince Sales</a>,
                Free University of Bozen-Bolzano, Italy
              </div>
              <div>tiago.princesales [at] unibz.it</div>
            </li>
          </ul>

          <h3>Program Committee</h3>
          <ul>
            <li>Tommaso Agnoloni, ITTIG, CNR, Italy </li>
            <li>João Paulo A. Andrade, Federal University of Espírito Santo, Brazil</li>
            <li>Lauro Araujo, Prodasen-Brazilian Senate, Brazil</li>
            <li>Jean-Remi Bourguet, University of Vila Velha, Brazil</li>
            <li>Samuel M. Brasil Jr., National School of the Judiciary (ENFAM), Brazil</li>
            <li>Daniel Braun, University of Twente, The Netherlands</li>
            <li>Enrico Francesconi,  ITTIG, CNR, Italy</li>
            <li>Matthias Grabmair, Technische Universität München, Germany</li>
            <li>Giancarlo Guizzardi, Free University of Bolzano, Italy</li>
            <li>João O. Lima, Prodasen-Brazilian Senate, Brazil</li>
            <li>Juliana Justo Castello, Vitória Law School, Brazil</li>
            <li>Juliano Maranhão, São Paulo University, Brazil</li>
            <li>Samuela Marchiori, University of Twente, the Nederlands </li>
            <li>Robert Muthuri,  Strathmore University </li>
            <li>Elias Oliveira, Federal University of Espírito Santo, Brazil</li>
            <li>Anca Radu, European University Institute (EUI), Italy</li>
            <li>Aires Rover, Federal University of Santa Catarina, Brazil</li>
            <li>Jaromir Savelka, Carnegie Mellon University, USA</li>
            <li>Giovanni Sileno, University of Amsterdam, The Netherlands</li>
            <li>Paolo Sommaggio, Faculty of Law, University of Trento, Italy</li>
            <li>Maria das Graças Teixeira, Federal University of Espírito Santo, Brazil</li>
            <li>Sergio Tessaris, Free University of Bozen-Bolzano, Italy</li>
          </ul>

        </div>
      </section>
    </Layout>
  )
}
