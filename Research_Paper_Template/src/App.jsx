import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'phosphor-react'; // Importing Sun and Moon icons from phosphor-react

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="font-sans antialiased bg-gray-100 text-gray-900 dark:bg-pitch-black dark:text-white p-8">
      <div className="max-w-screen-md mx-auto">
        {/* Page 3: Research Paper Front Page */}
        <div className="bg-white dark:bg-dark-page-black shadow-md rounded-lg overflow-hidden w-a4 paper mb-8 relative">
          <div className="px-10 py-20 space-y-10">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center mb-6">
              Semi-Autonomous AI-Powered Research
            </h1>

            <div className="text-center mb-6">
              <strong className="text-lg text-gray-700 dark:text-gray-300">Obedai Research</strong><br />
              <p className="text-base text-gray-600 dark:text-dark-text tracking-tight whitespace-nowrap">
                <strong className="font-semibold">Christian Katzmann*</strong>
              </p>
            </div>

            <div className="text-center mb-8">
              <p className="text-gray-600 dark:text-dark-text">* <em className="font-normal">Corresponding Author: Christian Katzmann, independent researcher at Obedai Research, Aarhus, Denmark (<a href="mailto:christian@obedai.com" className="text-blue-500 dark:text-blue-300 hover:underline">christian@obedai.com</a>)</em></p>
            </div>

            <div className="text-center mb-8">
              <strong className="text-gray-600 dark:text-dark-text">February 6, 2025</strong>
            </div>

            <section className="mb-8 py-4">
              <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Abstract</h3>
              <p className="text-gray-600 dark:text-dark-text">
                This research paper provides a comprehensive analysis of the impact of artificial intelligence (AI) on modern society. It explores the various applications of AI across different sectors, including healthcare, finance, transportation, and education. The paper also discusses the ethical considerations and potential risks associated with the widespread adoption of AI technologies.
              </p>
            </section>

            <section className="py-4">
              <h3 className="text-xl font-semibold border-b border-gray-300 dark:border-gray-700 pb-2 mb-6 text-gray-700 dark:text-gray-300">Keywords</h3>
              <p className="text-gray-600 dark:text-dark-text">
                Artificial Intelligence, Machine Learning, Society, Ethics, Technology, Healthcare, Finance, Transportation, Education
              </p>
            </section>
          </div>
          <button
            onClick={toggleDarkMode}
            className="absolute top-8 right-8 focus:outline-none transition-colors duration-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {isDarkMode ? (
              <Sun size={24} color="#fff"/>
            ) : (
              <Moon size={24} className="text-gray-800 dark:text-white" />
            )}
          </button>
        </div>

        {/* Page 2: Blank Page with AI Ethics - Apple Style Formatting */}
        <div className="bg-white dark:bg-dark-page-black shadow-md rounded-lg overflow-hidden w-a4 paper mb-8 flex flex-col justify-center items-center px-10 py-16 text-center">
          <section className="max-w-prose">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">AI Contributions & Ethical Considerations</h2>
            <p className="text-base text-gray-700 dark:text-dark-text mb-4">
              This research utilized AI models (ChatGPT Deep Research, Google Gemini, and DeepSeek o1) for literature review, hypothesis refinement, and text structuring. All conclusions, interpretations, and final edits were made by the human researcher.
            </p>
            <p className="text-sm text-gray-600 dark:text-dark-text">
              AI-assisted outputs were critically reviewed to ensure accuracy and mitigate biases. <br/> <b>AI cannot take responsibility</b> for the research, and its role is transparently disclosed to maintain academic integrity.
            </p>
          </section>
        </div>

        {/* Page 4: Table of Contents */}
        <div className="bg-white dark:bg-dark-page-black shadow-md rounded-lg overflow-hidden w-a4 paper mb-8">
          <div className="px-10 py-12">
            {/* Table of Contents Header */}
            <header className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Table of Contents</h1>
              <hr className="w-12 border-b-2 border-gray-300 dark:border-gray-700 mx-auto" />
            </header>

            {/* Table Layout for TOC */}
            <div className="w-full">
              <table className="w-full text-left border-collapse">
                <tbody>
                  <tr className="border-b border-gray-300 dark:border-gray-700">
                    <td className="py-2 text-lg font-medium text-gray-700 dark:text-gray-300">Abstract</td>
                    <td className="py-2 text-gray-600 dark:text-dark-text text-right text-sm">2</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-700">
                    <td className="py-2 text-lg font-medium text-gray-700 dark:text-gray-300">Keywords</td>
                    <td className="py-2 text-gray-600 dark:text-dark-text text-right text-sm">3</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-700">
                    <td className="py-2 text-lg font-medium text-gray-700 dark:text-gray-300">Introduction</td>
                    <td className="py-2 text-gray-600 dark:text-dark-text text-right text-sm">4</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-700">
                    <td className="py-2 text-lg font-medium text-gray-700 dark:text-gray-300">Literature Review</td>
                    <td className="py-2 text-gray-600 dark:text-dark-text text-right text-sm">5</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-700">
                    <td className="py-2 text-lg font-medium text-gray-700 dark:text-gray-300">Methodology</td>
                    <td className="py-2 text-gray-600 dark:text-dark-text text-right text-sm">6</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-700">
                    <td className="py-2 text-lg font-medium text-gray-700 dark:text-gray-300">Results</td>
                    <td className="py-2 text-gray-600 dark:text-dark-text text-right text-sm">7</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-700">
                    <td className="py-2 text-lg font-medium text-gray-700 dark:text-gray-300">Discussion</td>
                    <td className="py-2 text-gray-600 dark:text-dark-text text-right text-sm">8</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-700">
                    <td className="py-2 text-lg font-medium text-gray-700 dark:text-gray-300">Conclusion</td>
                    <td className="py-2 text-gray-600 dark:text-dark-text text-right text-sm">9</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Page 5: Research Paper Text */}
        <div className="bg-white dark:bg-dark-page-black shadow-md rounded-lg overflow-hidden w-a4 paper mb-8">
          <div className="px-10 py-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">1. Introduction</h2>
              <p className="text-gray-600 dark:text-dark-text mb-4">
                The search for extraterrestrial intelligence (SETI) has been a long-standing endeavor of humankind. With advancements in technology, our ability to detect signals from distant stars has increased exponentially. This paper explores the potential implications of detecting an artificial intelligence (AI) signal from an extraterrestrial civilization.
              </p>
              <p className="text-gray-600 dark:text-dark-text">
                The detection of an AI signal would not only confirm the existence of extraterrestrial intelligence but also raise profound questions about the nature of intelligence, communication, and our place in the cosmos. This research delves into the possible scenarios and challenges that humanity might face upon such a discovery.
              </p>

              {/* Extended Research Typology Table */}
              <h3 className="text-xl font-semibold mb-4 mt-8 text-gray-700 dark:text-gray-300">Extended Research Typology</h3>
              <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-300 dark:border-gray-700">
                    <th className="p-2 text-sm font-semibold text-left">Code</th>
                    <th className="p-2 text-sm font-semibold text-left">Research Type</th>
                    <th className="p-2 text-sm font-semibold text-left">Examples</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 font-light text-gray-700 dark:text-dark-text">META</td>
                    <td className="p-2 font-light text-gray-700 dark:text-dark-text">Meta-study/Review</td>
                    <td className="p-2 font-light text-gray-700 dark:text-dark-text">Systematic reviews, methodology critiques</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-light text-gray-700 dark:text-dark-text">EXPR</td>
                    <td className="p-2 font-light text-gray-700 dark:text-dark-text">Experimental</td>
                    <td className="p-2 font-light text-gray-700 dark:text-dark-text">Lab experiments, field trials</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-light text-gray-700 dark:text-dark-text">THRY</td>
                    <td className="p-2 font-light text-gray-700 dark:text-dark-text">Theoretical</td>
                    <td className="p-2 font-light text-gray-700 dark:text-dark-text">Mathematical proofs, simulations</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-light text-gray-700 dark:text-dark-text">CASE</td>
                    <td className="p-2 font-light text-gray-700 dark:text-dark-text">Case Study</td>
                    <td className="p-2 font-light text-gray-700 dark:text-dark-text">Clinical cases, policy analyses</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-light text-gray-700 dark:text-dark-text">SURV</td>
                    <td className="p-2 font-light text-gray-700 dark:text-dark-text">Survey/Observational</td>
                    <td className="p-2 font-light text-gray-700 dark:text-dark-text">Population studies, questionnaires</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-light text-gray-700 dark:text-dark-text">DEVL</td>
                    <td className="p-2 font-light text-gray-700 dark:text-dark-text">Tool/Model Development</td>
                    <td className="p-2 font-light text-gray-700 dark:text-dark-text">New algorithms, software releases</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-light text-gray-700 dark:text-dark-text">HYBR</td>
                    <td className="p-2 font-light text-gray-700 dark:text-dark-text">Hybrid Methodology</td>
                    <td className="p-2 font-light text-gray-700 dark:text-dark-text">Combinations (e.g., EXPR+THRY in one paper)</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </section>
          </div>
        </div>

        {/* Page 6: Literature Review and Methodology */}
        <div className="bg-white dark:bg-dark-page-black shadow-md rounded-lg overflow-hidden w-a4 paper mb-8">
          <div className="px-10 py-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">2. Literature Review</h2>
              <p className="text-gray-600 dark:text-dark-text mb-4">
                Existing literature on SETI and first contact scenarios provides a diverse range of perspectives.  [Smith (2010)] discusses the historical context of SETI and the evolution of search methodologies. [Jones &amp; Doe (2015)] explore the linguistic challenges of interstellar communication.  [Chen et al. (2020)] analyze the potential societal impacts of confirming extraterrestrial life.
              </p>
              <p className="text-gray-600 dark:text-dark-text">
                Furthermore, theoretical frameworks in astrobiology and the philosophy of mind offer insights into the possible forms and motivations of extraterrestrial intelligence. This paper builds upon these foundations to specifically address the unique case of an AI signal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">3. Methodology</h2>
              <p className="text-gray-600 dark:text-dark-text mb-4">
                This research employs a multi-faceted approach, combining theoretical analysis with scenario planning.  We analyze the information content of hypothetical AI signals, drawing upon information theory and complexity science.  We also develop several potential first contact scenarios, considering different levels of AI sophistication and potential communication protocols.
              </p>
              <p className="text-gray-600 dark:text-dark-text">
                Agent-based modeling is used to simulate potential human responses to the detection of an AI signal, taking into account factors such as cultural background, technological readiness, and pre-existing beliefs about extraterrestrial life.
              </p>
            </section>
          </div>
        </div>

        {/* Page 7: Results and Discussion */}
        <div className="bg-white dark:bg-dark-page-black shadow-md rounded-lg overflow-hidden w-a4 paper mb-8">
          <div className="px-10 py-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">4. Results</h2>
              <p className="text-gray-600 dark:text-dark-text mb-4">
                Our analysis suggests that the detection of a complex, information-rich signal with characteristics indicative of artificial origin would be highly likely to be perceived as an AI signal.  Simulations indicate a wide range of potential human responses, with initial reactions varying from excitement and hope to fear and uncertainty.
              </p>
              <p className="text-gray-600 dark:text-dark-text">
                Scenario planning reveals that the nature of the AI signal, particularly its comprehensibility and apparent intent, would be crucial in shaping subsequent human actions and international collaborations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">5. Discussion</h2>
              <p className="text-gray-600 dark:text-dark-text mb-4">
                The findings of this research underscore the need for proactive and international dialogue regarding protocols for responding to potential extraterrestrial contact, particularly in the context of AI signals.  The ethical, philosophical, and practical implications are far-reaching and require careful consideration.
              </p>
              <p className="text-gray-600 dark:text-dark-text">
                Further research is needed to refine our understanding of potential AI signal characteristics and to develop robust communication strategies that can bridge interstellar distances and potential cognitive differences.
              </p>
            </section>
          </div>
        </div>

        {/* Page 8: Conclusion */}
        <div className="bg-white dark:bg-dark-page-black shadow-md rounded-lg overflow-hidden w-a4 paper mb-8">
          <div className="px-10 py-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">6. Conclusion</h2>
              <p className="text-gray-600 dark:text-dark-text">
                The detection of an AI signal from an extraterrestrial civilization would represent a pivotal moment in human history.  This research highlights the importance of preparing for such an eventuality, not only technologically but also socially and philosophically.  By engaging in thoughtful and interdisciplinary discussions, we can better navigate the challenges and opportunities that first contact with extraterrestrial AI might present.
              </p>
            </section>
          </div>
        </div>


        {/* Page 2: CV */}
        <div className="bg-white dark:bg-dark-page-black shadow-md rounded-lg overflow-hidden w-a4 paper mb-8">
          <header className="text-center px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white invisible">John Doe</h1>
            <p className="text-gray-600 dark:text-dark-text invisible">Software Engineer</p>
          </header>

          <div className="px-6 pb-8">
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-300">Education</h2>
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 dark:text-gray-300">Bachelor of Science in Computer Science</h3>
                <p className="text-gray-600 dark:text-dark-text">University of Example | 2016 - 2020</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 dark:text-gray-300">High School Diploma</h3>
                <p className="text-gray-600 dark:text-dark-text">Example High School | 2012 - 2016</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-300">Skills</h2>
              <ul className="list-none text-gray-600 dark:text-dark-text">
                <li className="mb-1">Programming Languages: JavaScript, Python, Java</li>
                <li className="mb-1">Frameworks/Libraries: React, Node.js, Tailwind CSS</li>
                <li className="mb-1">Tools: Git, Docker, VS Code</li>
                <li className="mb-1">Databases: SQL, NoSQL</li>
                <li className="mb-1">Cloud Technologies: AWS, Azure, GCP</li>
                <li className="mb-1">Operating Systems: macOS, Linux, Windows</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-300">Awards and Recognition</h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-dark-text">
                <li>Employee of the Month - Acme Corporation (July 2022)</li>
                <li>Innovation Award - Beta Company (2019)</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-300">Projects</h2>
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 dark:text-gray-300">Project Title 1</h3>
                <p className="text-gray-600 dark:text-dark-text">Description of project 1 and technologies used.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 dark:text-gray-300">Project Title 2</h3>
                <p className="text-gray-600 dark:text-dark-text">Description of project 2 and technologies used.</p>
              </div>
            </section>
          </div>
        </div>

        {/* Page 2: CV */}
        <div className="bg-white dark:bg-dark-page-black shadow-md rounded-lg overflow-hidden w-a4 paper mb-8">
          <header className="text-center px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white invisible">John Doe</h1>
            <p className="text-gray-600 dark:text-dark-text invisible">Software Engineer</p>
          </header>

          <div className="px-6 pb-8">
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-300">Education</h2>
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 dark:text-gray-300">Bachelor of Science in Computer Science</h3>
                <p className="text-gray-600 dark:text-dark-text">University of Example | 2016 - 2020</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 dark:text-gray-300">High School Diploma</h3>
                <p className="text-gray-600 dark:text-dark-text">Example High School | 2012 - 2016</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-300">Skills</h2>
              <ul className="list-none text-gray-600 dark:text-dark-text">
                <li className="mb-1">Programming Languages: JavaScript, Python, Java</li>
                <li className="mb-1">Frameworks/Libraries: React, Node.js, Tailwind CSS</li>
                <li className="mb-1">Tools: Git, Docker, VS Code</li>
                <li className="mb-1">Databases: SQL, NoSQL</li>
                <li className="mb-1">Cloud Technologies: AWS, Azure, GCP</li>
                <li className="mb-1">Operating Systems: macOS, Linux, Windows</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-300">Awards and Recognition</h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-dark-text">
                <li>Employee of the Month - Acme Corporation (July 2022)</li>
                <li>Innovation Award - Beta Company (2019)</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-300">Projects</h2>
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 dark:text-gray-300">Project Title 1</h3>
                <p className="text-gray-600 dark:text-dark-text">Description of project 1 and technologies used.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 dark:text-gray-300">Project Title 2</h3>
                <p className="text-gray-600 dark:text-dark-text">Description of project 2 and technologies used.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
