import React from "react";
import { MdCalendarToday, MdGroups } from "react-icons/md";

export default function EzamCaseStudy() {
  return (
    <div className="bg-white text-black pt-16">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-0 border-b border-gray-200">
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-left">
            Building Competitive Play Beyond Visual Dependence
          </h1>
          <h2 className="text-xl md:text-2xl font-normal mb-6 text-left text-gray-800">
            Ezam: Designing a fair, tactile game for Visually Impaired and Sighted Players
          </h2>
          <div className="w-full rounded-xl mb-4 overflow-hidden">
            <img
              src="/images/ezam/Hero-Ezam.png"
              alt="Tactile game board with flags and sphere"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
          {/* Contact info, Timeline, Awards */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              🏆 Winner: Titan's Design Impact Movement
            </span>
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <MdCalendarToday className="text-base align-middle" />
              March 2024
            </span>
          </div>
        </div>
      </section>

      {/* Overview & Problem Statement */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Overview Section */}
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row gap-4 items-end">
            <div className="flex-1">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-amber-700 mb-6">Overview</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  EZAM is an innovative game designed to <span className="font-semibold text-amber-800">foster inclusivity</span> by enabling visually impaired and sighted individuals to engage in a shared, enjoyable gaming experience. The game emphasises tactile interactions, <span className="font-semibold text-amber-800">removing visual biases and ensuring equal participation</span> for all players. With a focus on independence and social connection, EZAM <span className="font-semibold text-amber-800">bridges the gap</span> between diverse user abilities.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 w-full lg:w-80 rounded-xl overflow-hidden">
              <img
                src="/images/ezam/Overview-Ezam.png"
                alt="Two people walking together, one with cane"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Problem Statement Section */}
        <section className="mb-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h3 className="text-2xl font-bold text-amber-700 mb-6">Problem Statement</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              How might we enable the <span className="font-semibold text-amber-800">visually impaired and abled</span> to engage in an <span className="font-semibold text-amber-800">inclusive</span>, auditory and/or tactile focused <span className="font-semibold text-amber-800">game eliminating visual advantages</span> and ensuring a balanced experience for all?
            </p>
          </div>
        </section>
      </main>

      {/* Process & Methodology Section */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-amber-700 mb-6 text-left">Process & Methodology</h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              The process was spread over a period of 4 weeks and divided into 5 stages.
            </p>

            {/* Process stages in one row */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {/* Empathise */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <h4 className="text-lg font-bold text-amber-800 mb-3">Empathise</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>1. Literature Review</li>
                  <li>2. Market Analysis</li>
                  <li>3. Observation</li>
                  <li>4. Interviews</li>
                  <li>5. As-is Mapping</li>
                  <li>6. Clustering</li>
                </ul>
              </div>

              {/* Define */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <h4 className="text-lg font-bold text-amber-800 mb-3">Define</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>1. Problem Statement</li>
                  <li>2. Target User Groups</li>
                  <li>3. Scope of Project</li>
                </ul>
              </div>

              {/* Ideate */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <h4 className="text-lg font-bold text-amber-800 mb-3">Ideate</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>1. Rapid Ideations</li>
                  <li>2. Clustering</li>
                  <li>3. Shortlisting</li>
                  <li>4. Concept Ideations</li>
                  <li>5. Final Idea Cluster</li>
                  <li>6. Final Ideation</li>
                </ul>
              </div>

              {/* Prototype */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <h4 className="text-lg font-bold text-amber-800 mb-3">Prototype</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>1. Define Specifications</li>
                  <li>2. 3D Visualisation</li>
                  <li>3. Physical Prototype</li>
                </ul>
              </div>

              {/* Test */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <h4 className="text-lg font-bold text-amber-800 mb-3">Test</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>1. Multi-User Testing</li>
                  <li>2. SWOT Analysis</li>
                  <li>3. Product Refining</li>
                </ul>
              </div>
            </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Insights from Literature Review Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h3 className="text-2xl font-bold text-amber-700 mb-6">Insights from Literature Review</h3>
            
            {/* Key insights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed">
                  "Everything becomes <span className="font-semibold text-amber-800">mediated through adult behaviour</span>, which actually isn't what children should be experiencing."
                </p>
                <p className="text-sm text-gray-600 mt-3 italic underline">
                  Robots for Inclusive Play: Co-designing an Educational Game With Visually Impaired and sighted Children
                </p>
              </div>
              
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed">
                  "Visually disabled late adolescents have <span className="font-semibold text-amber-800">more self esteem</span> compared to their physically disabled peers."
                </p>
                <p className="text-sm text-gray-600 mt-3 italic underline">
                  Study on self-esteem levels among physically disabled and visually disabled late adolescents.
                </p>
              </div>
            </div>

            {/* Other relevant material */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-amber-800 mb-4">Other relevant material that aided our understanding:</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li className="underline">• How to Make Games for Visually Impaired Children</li>
                <li className="underline">• Design and evaluation of a tactile memory game for visually impaired children</li>
                <li className="underline">• Design and implementation of an educational game considering issues for visually impaired people inclusion (Em Busca do Santo Grau)</li>
                <li className="underline">• Development and Usability Evaluation of a Configurable Educational Game for the Visually Impaired</li>
                <li className="underline">• Inclusive game design facilitating shared gaming experience</li>
                <li className="underline">• Participating in a Visual Culture That You Cannot See</li>
                <li className="underline">• SOUNDS GOOD: AN INCLUSIVE GAME FOR VISUALLY IMPAIRED CHILDREN</li>
                <li className="underline">• NAB_ANNUAL REPORTS_2019-2020 (Activities, Case studies, and Initiatives)</li>
                <li className="underline">• Multiple existing games- Masters Traditional Games</li>
                <li className="underline">• Outdoor Play for Children who are Partially Sighted or Blind</li>
                <li className="underline">• Developments in assistive technologies through the years.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Market Analysis Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h3 className="text-2xl font-bold text-amber-700 mb-6">Market Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* LUDO */}
              <div className="space-y-4">
                <div className="mb-4">
                  <div className="w-full h-64 rounded-xl overflow-hidden mb-3">
                    <img
                      src="/images/ezam/Ludo-Ezam.png"
                      alt="Ludo game board"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-amber-800">Ludo</h4>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-green-700 text-sm mb-1">✓ Die doesn't tumble around & get lost</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <ul className="text-red-700 space-y-1 text-sm">
                    <li>• Counting is difficult for visually impaired</li>
                    <li>• Extra efforts are required by Visually Abled</li>
                    <li>• Sympathy factor triggered- users are actively conscious of the target at disability</li>
                    <li>• Entirely colour-based concept</li>
                  </ul>
                </div>
              </div>

              {/* OTHELLO */}
              <div className="space-y-4">
                <div className="mb-4">
                  <div className="w-full h-64 rounded-xl overflow-hidden mb-3">
                    <img
                      src="/images/ezam/Othello-Ezam.png"
                      alt="Othello game board"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-amber-800">Othello</h4>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-green-700 text-sm mb-1">✓ Tactile checks are easier to count</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <ul className="text-red-700 space-y-1 text-sm">
                    <li>• Pattern recognition is a big advantage for the visually abled</li>
                    <li>• Board is too small to feel the pattern</li>
                    <li>• Scale reduced to simplify the game</li>
                    <li>• Seems too easy to the visually abled.</li>
                  </ul>
                </div>
              </div>

              {/* Chess */}
              <div className="space-y-4">
                <div className="mb-4">
                  <div className="w-full h-64 rounded-xl overflow-hidden mb-3">
                    <img
                      src="/images/ezam/Chess-Ezam.png"
                      alt="Chess game board"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-amber-800">Chess</h4>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <ul className="text-red-700 space-y-1 text-sm">
                    <li>• Board's too small for movement as well as feeling.</li>
                    <li>• Precise fitting of pieces takes time.</li>
                    <li>• Extra efforts required by Visually Abled hence they do not enjoy the game</li>
                    <li>• Sympathy factor triggered</li>
                  </ul>
                </div>
              </div>

              {/* Masters Traditional Games */}
              <div className="space-y-4">
                <div className="mb-4">
                  <div className="w-full h-64 rounded-xl overflow-hidden mb-3">
                    <img
                      src="/images/ezam/Masters-Ezam.png"
                      alt="Masters Traditional Games board"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-amber-800">Masters Traditional Games</h4>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-green-700 text-sm mb-1">✓ Unique game-concepts trigger the interest of both parties.</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <ul className="text-red-700 space-y-1 text-sm">
                    <li>• Very rarely available</li>
                    <li>• Most people do not have access</li>
                    <li>• Very expensive- products of luxury</li>
                    <li>• Difficult to understand/comprehend</li>
                    <li>• Most gameplays are still aided by colour</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Target User Groups & Stakeholders Section */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-amber-700 mb-6 text-left">Target User Groups & Stakeholders</h3>

          <img
            src="/images/ezam/TargetUsers-Ezam.png"
            alt="Diagram showing two user groups for Ezam. Primary users (left, large circle) include visually abled and visually impaired individuals who play together. Stakeholders (right, three smaller circles) are educators, doctors, and family or caregivers who support visually impaired users."
            className="w-full max-w-4xl mx-auto block"
          />
          {/* Screen-reader summary */}
          <p className="sr-only">
            Primary users: Visually Abled and Visually Impaired. Stakeholders: Educators, Doctors, Family/Caregivers.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Observation & Interview Insights Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-amber-700 mb-10">Observation & Interview Insights</h2>

          {/* As-Is Process Mapping — subsection */}
          <div className="mb-12">
          <h3 className="text-xl font-bold text-amber-800 border-l-4 border-amber-400 pl-4 mb-6">As-Is Process Mapping</h3>
          
          {/* Horizontal process flow - no outer card, stretch to fit */}
          <div className="flex items-stretch gap-3">
            <div className="flex-1 bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-center">
              <p className="text-gray-700 font-medium text-xs">Visually impaired & visually abled meet. They want to play something together.</p>
            </div>

            <div className="text-amber-600 text-xl flex-shrink-0 flex items-center">→</div>

            <div className="flex-1 bg-red-50 border border-red-200 rounded-xl p-3 flex items-center">
              <p className="text-gray-700 font-medium text-xs">They try to <span className="font-bold text-red-700">find an accessible game</span>.</p>
            </div>

            <div className="text-amber-600 text-xl flex-shrink-0 flex items-center">→</div>

            <div className="flex-1 bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-center">
              <p className="text-gray-700 font-medium text-xs">They decide to play legos/ building blocks.</p>
            </div>

            <div className="text-amber-600 text-xl flex-shrink-0 flex items-center">→</div>

            <div className="flex-1 bg-red-50 border border-red-200 rounded-xl p-3 flex items-center">
              <p className="text-gray-700 font-medium text-xs">Visually abled finds it <span className="font-bold text-red-700">easier to play</span> than the visually impaired.</p>
            </div>

            <div className="text-amber-600 text-xl flex-shrink-0 flex items-center">→</div>

            <div className="flex-1 bg-red-50 border border-red-200 rounded-xl p-3 flex items-center">
              <p className="text-gray-700 font-medium text-xs"><span className="font-bold text-red-700">Insecurity triggered</span> in visually impaired and <span className="font-bold text-red-700">sympathy/anger</span> in visually abled.</p>
            </div>
          </div>
          </div>{/* end As-Is Process Mapping */}

          {/* User Verbatim — subsection */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-amber-800 border-l-4 border-amber-400 pl-4 mb-4">User Verbatim</h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed pl-5">
              We visited a blind school in Jabalpur, Madhya Pradesh and interviewed the students, teachers, and the principal of the school. Parents & caregivers of the visually impaired were also interviewed.
            </p>

            {/* Visually Impaired Students — sub-sub-section */}
            <div className="mb-10 pl-5">
            <h4 className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-6">Visually Impaired Students</h4>
            
            {/* Quote grid layout */}
            <div className="flex gap-8">
              {/* Left side - Quote cards */}
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Sample quotes - using placeholder text */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-gray-700 text-sm italic">"Mei pakdam pakdai khelti hun apne bhai ke saath"</p>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-gray-700 text-sm italic">"Mujhe chot lag jati hai deewaron se"</p>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-gray-700 text-sm italic">"Mei zyada bahar nahi jaati khelne"</p>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-gray-700 text-sm italic">"Mujhe ghar pe accha lagta hai"</p>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-gray-700 text-sm italic">"Andar hi khel lete hai"</p>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-gray-700 text-sm italic">"Gend khelna pasand hai"</p>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-gray-700 text-sm italic">"Mei dholak bajaungi"</p>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-gray-700 text-sm italic">"Hume bahar uncle aur aunty bolte hai ki andar khelo"</p>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-gray-700 text-sm italic">"Road pe bahut gadhe hote hai"</p>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-gray-700 text-sm italic">"Gadiyan aajati hai"</p>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-gray-700 text-sm italic">"Bahar dusre bachhe pareshan karte hai"</p>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-gray-700 text-sm italic">"Didi shayari sunao na"</p>
                  </div>
                  
                  {/* Highlighted quote */}
                  <div className="bg-amber-100 border-2 border-amber-400 rounded-xl p-4 md:col-span-2">
                    <p className="text-amber-900 text-lg font-semibold italic">"Hum kaise kam nahi hai"</p>
                    <p className="text-amber-700 text-sm mt-2">("We are not any less.")</p>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-gray-700 text-sm italic">"Mujhe pahelyan bahut pasand hai"</p>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-gray-700 text-sm italic">"Ham cricket bhi khelte hai aur batting, bowling sab karte hai"</p>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-gray-700 text-sm italic">"Ham ek din pad pe chad gaye the"</p>
                  </div>
                </div>
              </div>
              
              {/* Right side - Photos */}
              <div className="w-80 space-y-4">
                <div className="rounded-xl h-40 overflow-hidden">
                  <img
                    src="/images/ezam/Verbatim1-Ezam.png"
                    alt="School visit - exterior"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="rounded-xl h-40 overflow-hidden">
                  <img
                    src="/images/ezam/Verbatim2-Ezam.png"
                    alt="Group interview session"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="rounded-xl h-40 overflow-hidden">
                  <img
                    src="/images/ezam/Verbatim3-Ezam.png"
                    alt="Students in classroom"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="rounded-xl h-40 overflow-hidden">
                  <img
                    src="/images/ezam/Verbatim4-Ezam.png"
                    alt="Research team with students"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            </div>{/* end Visually Impaired Students */}

            {/* Family — sub-sub-section */}
            <div className="mb-10 pl-5">
              <h4 className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-6">Family</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"I want him to play volleyball"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Chup ke assistance se cricket khelte hai"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Usko cheezon ke liye jhoot bola jaata hai"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"He should be aware of surrounding"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Chote bachhe jinhe thi samjh nhi hai woh mis-behave karte hai"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"I insist him to play with sighted people"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Instructor needs to be there"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Agar dosto ka saath chhod jau, toh apke sab side bitha dete hai"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Visually impaired hai jagah milna is very difficult"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Kabaddi khelte waqt iska hatha hai kaise pata chalega"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Bar bar assist karna padta hai"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"He would feel like a burden to them."</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"He can play only with sound"</p>
                </div>
                
                {/* Highlighted quote for Family */}
                <div className="bg-amber-100 border-2 border-amber-400 rounded-xl p-4 md:col-span-2">
                  <p className="text-amber-900 text-lg font-semibold italic">"Sighted kids interested nhi hote assist karne me"</p>
                  <p className="text-amber-700 text-sm mt-2">("Sighted kids are not interested in helping them.")</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Woh forcefully jata hai khelne signted bachho ke saath"</p>
                </div>
              </div>
            </div>{/* end Family */}

            {/* Principal — sub-sub-section */}
            <div className="mb-10 pl-5">
              <h4 className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-6">Principal</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Yo kar chize krive se kar leti hai"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Jo chiz seekha jate hai"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Janma se aarakshit mehsoos karte hai"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Ye log apas mai sab kuch khet leti hai"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Braille education hai"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Hum log unki khushi ke liye khel lete hai"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Jo bhi game khelte hai voice se samjhte hai"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Blind hi braille padha sakte hai jaadi se"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Inki growth aur humare mai difference hai"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Blind sparsh ke kuch nhi kar sakte"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Jo bhi batayenge usme voice dalna hi padega"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Humare aur inco bich mai fair game nhi ho sakta"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Ye ghar mai alag rahte rehte hai"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Samanya insan inko saath khiladi ki bharwa se nhi chal sakta"</p>
                </div>
                
                {/* Highlighted quote for Principal */}
                <div className="bg-amber-100 border-2 border-amber-400 rounded-xl p-4 md:col-span-2">
                  <p className="text-amber-900 text-lg font-semibold italic">"Inka samanya logon ke sath khelna asambhav hai."</p>
                  <p className="text-amber-700 text-sm mt-2">("It's impossible for them to play with <span className="font-semibold">normal</span> people")</p>
                </div>
              </div>
            </div>{/* end Principal */}

            {/* Educators — sub-sub-section */}
            <div className="mb-10 pl-5">
              <h4 className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-6">Educators (Also Visually Impaired)</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Jin cheezon ki aadat hojaati woh aasaan hoti hai"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Hume suraksha ki sabse zyada dikkat hoti hai"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Koi humesha dekhne waala chahiye"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Aag ka kaam kam karte hai"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Bachchiyo ke sath rehne ka mann karta hai"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Ghar me toh zyada kaam nhi karwaate"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Aag ka kaam kam karte hai"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Raat ko ghar nhi jaati"</p>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm italic">"Log hume kam samjhte hai"</p>
                </div>
                
                {/* Highlighted quote for Educators */}
                <div className="bg-amber-100 border-2 border-amber-400 rounded-xl p-4 md:col-span-2">
                  <p className="text-amber-900 text-lg font-semibold italic">"Tum log apna kaam karo, hun apna karte hai."</p>
                  <p className="text-amber-700 text-sm mt-2">("You do your work, we'll do ours")</p>
                </div>
              </div>
            </div>{/* end Educators */}
          </div>{/* end User Verbatim */}

          {/* Clustering Common Insights — subsection */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-amber-800 border-l-4 border-amber-400 pl-4 mb-6">Clustering Common Insights</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Insight 1: Auditory Activity - 6 cards */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h4 className="text-lg font-bold text-amber-800 mb-4">1. They involve themselves in auditory activity.</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3 text-xs text-gray-700">
                    "Didi shayari sunao na"
                  </div>
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3 text-xs text-gray-700">
                    "Uska can play only with sound"
                  </div>
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3 text-xs text-gray-700">
                    "Ham sun ke sab pata karllete hai"
                  </div>
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3 text-xs text-gray-700">
                    "Jo bhi game khelte hai voice se samjhte hai"
                  </div>
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3 text-xs text-gray-700">
                    "Hume bahar uncle aur aunty bolti hai ki andar khelo"
                  </div>
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3 text-xs text-gray-700">
                    "Anar dootdi ko sath chhod pai toh isaaki sab side others hai"
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic">
                  Might be because they find it easier to navigate themselves when sound is concerned.
                </p>
              </div>

              {/* Insight 2: Feel Excluded - 6 cards */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h4 className="text-lg font-bold text-amber-800 mb-4">2. Visually Impaired people feel excluded.</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3 text-xs text-gray-700">
                    "Jo ghar mai alag baithe rehte hai"
                  </div>
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3 text-xs text-gray-700">
                    "Bahar dusre bachhe pareshan karte hai"
                  </div>
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3 text-xs text-gray-700">
                    "Samanya insan inko saath khiladi ki bharwa se nhi chal sakta"
                  </div>
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3 text-xs text-gray-700">
                    "Instructor needs to be there"
                  </div>
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3 text-xs text-gray-700">
                    "Sighted kids interested nhi hote assist karne me"
                  </div>
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3 text-xs text-gray-700">
                    "He would feel like a burden to them."
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic">
                  Might be because sighted people feel a sense of extra responsibility & hence, avoid the Visually Impaired people.
                </p>
              </div>

              {/* Insight 3: Struggle to Play Outside - 6 cards */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h4 className="text-lg font-bold text-amber-800 mb-4">3. They struggle to play outside.</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3 text-xs text-gray-700">
                    "Mujhe chot lag jati hai deewaron se"
                  </div>
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3 text-xs text-gray-700">
                    "Mei zyada bahar nahi jaati khelne"
                  </div>
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3 text-xs text-gray-700">
                    "Koi humesha dekhne wala chahiye"
                  </div>
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3 text-xs text-gray-700">
                    "He should be aware of surrounding"
                  </div>
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3 text-xs text-gray-700">
                    "Khehe waqt toh char-chdr ginte padte rehfte hai"
                  </div>
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3 text-xs text-gray-700">
                    "Gadiyan aajati hai"
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic">
                  Might be because the real world is not <span className="font-bold">yet</span> designed for them.
                </p>
              </div>

              {/* Insight 4: Love Solving Things - 2 cards */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h4 className="text-lg font-bold text-amber-800 mb-4">4. Visually Impaired people love solving things.</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3 text-xs text-gray-700">
                    "Didi! Paheli pucho na please?"
                  </div>
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3 text-xs text-gray-700">
                    "Mujhe pahelyan bahut pasand hai"
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic">
                  Might be because they feel that <span className="font-bold">nobody has an advantage</span> over them when purely intellect is concerned.
                </p>
              </div>

              {/* Insight 5: Try to be Self-Reliant - 5 cards */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h4 className="text-lg font-bold text-amber-800 mb-4">5. They try to be self-reliant.</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3 text-xs text-gray-700">
                    "Ham apne kaam kud karte hai"
                  </div>
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3 text-xs text-gray-700">
                    "Ye koi apas mai sab kuch khel leti hai"
                  </div>
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3 text-xs text-gray-700">
                    "Tum log apna kaam karo, hum apna karte hai"
                  </div>
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3 text-xs text-gray-700">
                    "Log hume kum samjhte hai"
                  </div>
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3 text-xs text-gray-700">
                    "Hum kisse kam nahi hai"
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic">
                  Might be because they've been empowered so much to boost confidence, they pity the idea of being dependent.
                </p>
              </div>
            </div>
            
          </div>{/* end Clustering Common Insights */}
        </section>{/* end Observation & Interview Insights */}
      </main>

      {/* Rapid Ideations Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-amber-700 mb-10">Rapid Ideations</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Column 1 - Set A (Orange) */}
            <div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-orange-100 border border-orange-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Getting inspired from blind animals</p>
                </div>
                <div className="bg-orange-100 border border-orange-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Improving volleyball gameplay</p>
                </div>
                <div className="bg-orange-100 border border-orange-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Improving the noise balls in the mainstream games</p>
                </div>
                <div className="bg-orange-100 border border-orange-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Physical maze in a mental puzzle</p>
                </div>
                <div className="bg-orange-100 border border-orange-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Adding concepts of a buzzer, a bell or rope in traditional games</p>
                </div>
                <div className="bg-orange-100 border border-orange-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Music maze</p>
                </div>
                <div className="bg-orange-100 border border-orange-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Tactile path on the ground - instructors/ guides.</p>
                </div>
                <div className="bg-orange-100 border border-orange-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Eliminating need of assistive instructors/ guides.</p>
                </div>
                <div className="bg-orange-100 border border-orange-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Accessible running tracks</p>
                </div>
                <div className="bg-orange-100 border border-orange-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Obstacle course using tactile and auditory senses.</p>
                </div>
                <div className="bg-orange-100 border border-orange-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Having textual contrast colours on the balls or count lines</p>
                </div>
                <div className="bg-orange-100 border border-orange-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Audio-Tactile based guessing game.</p>
                </div>
                <div className="bg-orange-100 border border-orange-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Task completion games</p>
                </div>
                <div className="bg-orange-100 border border-orange-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Inspiration from chinese whisper</p>
                </div>
                <div className="bg-orange-100 border border-orange-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Add texture instead of color</p>
                </div>
              </div>
            </div>

            {/* Column 2 - Set B (Amber) */}
            <div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-amber-100 border border-amber-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Game with very limited mobility.</p>
                </div>
                <div className="bg-amber-100 border border-amber-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Accessible assistants using voice, haptic vibrations, body parts, etc.</p>
                </div>
                <div className="bg-amber-100 border border-amber-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Snakes- very bad eyesight. Always have their tongue out.</p>
                </div>
                <div className="bg-amber-100 border border-amber-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">A trivia sort of game about random topics.</p>
                </div>
                <div className="bg-amber-100 border border-amber-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Basic everyday tasks like eating already inclusive.</p>
                </div>
                <div className="bg-amber-100 border border-amber-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Deers & other prey sense predators through noise of leaves, etc.</p>
                </div>
                <div className="bg-amber-100 border border-amber-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Ludo- purely colour based. Will it be a game with colour?</p>
                </div>
                <div className="bg-amber-100 border border-amber-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Replace visual cognitive factors with non-visual elements</p>
                </div>
                <div className="bg-amber-100 border border-amber-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Board games + Puzzles = ?</p>
                </div>
                <div className="bg-amber-100 border border-amber-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Parkour-esque game based on the basis of feel & sound</p>
                </div>
                <div className="bg-amber-100 border border-amber-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Is adding texture really a solution?</p>
                </div>
                <div className="bg-amber-100 border border-amber-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Accessible cricket ball and bowling pin</p>
                </div>
                <div className="bg-amber-100 border border-amber-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Can they play pakdam-pakdai with sighted kids?</p>
                </div>
                <div className="bg-amber-100 border border-amber-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Tactile elements are also visual elements.</p>
                </div>
                <div className="bg-amber-100 border border-amber-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Already using voice assistants with ease.</p>
                </div>
              </div>
            </div>

            {/* Column 3 - Set C (pink) */}
            <div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-pink-100 border border-pink-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Add voice narration to the game, similar to radio.</p>
                </div>
                <div className="bg-pink-100 border border-pink-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Substitute any visual element to tactile feel</p>
                </div>
                <div className="bg-pink-100 border border-pink-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Texture as a major element</p>
                </div>
                <div className="bg-pink-100 border border-pink-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Textures from natural elements</p>
                </div>
                <div className="bg-pink-100 border border-pink-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Kidrosult type games</p>
                </div>
                <div className="bg-pink-100 border border-pink-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Adding puzzles, songs or riddles</p>
                </div>
                <div className="bg-pink-100 border border-pink-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Audio inspired from nature</p>
                </div>
                <div className="bg-pink-100 border border-pink-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Increase or eliminate time restriction</p>
                </div>
                <div className="bg-pink-100 border border-pink-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Daily activity games</p>
                </div>
                <div className="bg-pink-100 border border-pink-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Inspiration from house game</p>
                </div>
                <div className="bg-pink-100 border border-pink-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Make maze</p>
                </div>
                <div className="bg-pink-100 border border-pink-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Remove visual advantage</p>
                </div>
                <div className="bg-pink-100 border border-pink-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">No one should have advantage</p>
                </div>
                <div className="bg-pink-100 border border-pink-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Board game with puzzles</p>
                </div>
                <div className="bg-pink-100 border border-pink-300 rounded-lg p-3">
                  <p className="text-gray-700 text-sm font-medium">Making volleyball accessible</p>
                </div>
              </div>
            </div>

          </div>

          {/* Image */}
          <div className="mt-10 rounded-lg overflow-hidden">
            <img
              src="/images/ezam/RapidIdeation-Ezam.png"
              alt="Grid layout of ideation sticky notes on board"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-16">

        {/* Idea Clusters Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h3 className="text-2xl font-bold text-amber-700 mb-8">Idea Clusters</h3>

            {/* 4 cluster images */}
            <div className="grid grid-cols-4 gap-3 mb-8">
              <div className="rounded-lg overflow-hidden h-40">
                <img src="/images/ezam/IdeaCluster1-Ezam.png" alt="Extra Accessible Elements cluster board" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden h-40">
                <img src="/images/ezam/IdeaCluster2-Ezam.png" alt="Voice-based Ideations cluster board" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden h-40">
                <img src="/images/ezam/IdeaCluster3-Ezam.png" alt="Nature-inspired Ideations cluster board" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden h-40">
                <img src="/images/ezam/IdeaCluster4-Ezam.png" alt="Redesign concepts cluster board" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Cluster 1: Extra Accessible Elements */}
              <div>
                <h4 className="text-xl font-bold text-amber-800 mb-4">1. Extra Accessible Elements</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-orange-100 border border-orange-300 rounded-lg p-3">
                    <p className="text-gray-700 text-sm font-medium">Tactile path on the grounds</p>
                  </div>
                  <div className="bg-rose-100 border border-rose-300 rounded-lg p-3">
                    <p className="text-gray-700 text-sm font-medium">Texture as a major element</p>
                  </div>
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3">
                    <p className="text-gray-700 text-sm font-medium">Replace visual cognitive factors with non-visual elements</p>
                  </div>
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3">
                    <p className="text-gray-700 text-sm font-medium">Game with very limited mobility.</p>
                  </div>
                  <div className="bg-orange-100 border border-orange-300 rounded-lg p-3">
                    <p className="text-gray-700 text-sm font-medium">Obstacle course using tactile and auditory senses.</p>
                  </div>
                  <div className="bg-rose-100 border border-rose-300 rounded-lg p-3">
                    <p className="text-gray-700 text-sm font-medium">Adding puzzles, songs or riddles</p>
                  </div>
                  <div className="bg-rose-100 border border-rose-300 rounded-lg p-3">
                    <p className="text-gray-700 text-sm font-medium">Substitute any visual element to tactile feel</p>
                  </div>
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3">
                    <p className="text-gray-700 text-sm font-medium">Can they play pakdam-pakdai with sighted kids?</p>
                  </div>
                </div>
              </div>

              {/* Cluster 2: Voice-based Ideations */}
              <div>
                <h4 className="text-xl font-bold text-amber-800 mb-4">2. Voice-based Ideations</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-orange-100 border border-orange-300 rounded-lg p-3">
                    <p className="text-gray-700 text-sm font-medium">Music maze</p>
                  </div>
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3">
                    <p className="text-gray-700 text-sm font-medium">Deers & other prey sense predators through noise of leaves, etc.</p>
                  </div>
                  <div className="bg-rose-100 border border-rose-300 rounded-lg p-3">
                    <p className="text-gray-700 text-sm font-medium">Audio inspired from nature</p>
                  </div>
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3">
                    <p className="text-gray-700 text-sm font-medium">Already using voice assistants with ease.</p>
                  </div>
                  <div className="bg-rose-100 border border-rose-300 rounded-lg p-3">
                    <p className="text-gray-700 text-sm font-medium">Add voice narration to the game, similar to radio.</p>
                  </div>
                  <div className="bg-orange-100 border border-orange-300 rounded-lg p-3">
                    <p className="text-gray-700 text-sm font-medium">Improving the noise balls in the mainstream games</p>
                  </div>
                </div>
              </div>

              {/* Cluster 3: Nature-inspired Ideations */}
              <div>
                <h4 className="text-xl font-bold text-amber-800 mb-4">3. Nature-inspired Ideations</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-orange-100 border border-orange-300 rounded-lg p-3">
                    <p className="text-gray-700 text-sm font-medium">Getting inspired from blind animals</p>
                  </div>
                  <div className="bg-rose-100 border border-rose-300 rounded-lg p-3">
                    <p className="text-gray-700 text-sm font-medium">Textures from natural elements</p>
                  </div>
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3">
                    <p className="text-gray-700 text-sm font-medium">Deers & other prey sense predators through noise of leaves, etc.</p>
                  </div>
                  <div className="bg-rose-100 border border-rose-300 rounded-lg p-3">
                    <p className="text-gray-700 text-sm font-medium">Audio inspired from nature</p>
                  </div>
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3">
                    <p className="text-gray-700 text-sm font-medium">Snakes- very bad eyesight. Always have their tongue out.</p>
                  </div>
                </div>
              </div>

              {/* Cluster 4: Redesign concepts */}
              <div>
                <h4 className="text-xl font-bold text-amber-800 mb-4">4. Redesign concepts</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-rose-100 border border-rose-300 rounded-lg p-3">
                    <p className="text-gray-700 text-sm font-medium">Substitute any visual element to tactile feel</p>
                  </div>
                  <div className="bg-orange-100 border border-orange-300 rounded-lg p-3">
                    <p className="text-gray-700 text-sm font-medium">Improving the noise balls in the mainstream games</p>
                  </div>
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3">
                    <p className="text-gray-700 text-sm font-medium">Accessible versions of existing games- ludo, chess, etc.</p>
                  </div>
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3">
                    <p className="text-gray-700 text-sm font-medium">Pakdam-pakdai, ice water on the basis of feel & sound</p>
                  </div>
                  <div className="bg-rose-100 border border-rose-300 rounded-lg p-3">
                    <p className="text-gray-700 text-sm font-medium">Making volleyball accessible</p>
                  </div>
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-3">
                    <p className="text-gray-700 text-sm font-medium">Accessible cricket ball and bowling pin</p>
                  </div>
                  <div className="bg-orange-100 border border-orange-300 rounded-lg p-3">
                    <p className="text-gray-700 text-sm font-medium">Inspiration from chinese whisper</p>
                  </div>
                  <div className="bg-rose-100 border border-rose-300 rounded-lg p-3">
                    <p className="text-gray-700 text-sm font-medium">Inspiration from house game</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ideations based on Insights Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h3 className="text-2xl font-bold text-amber-700 mb-8">Ideations based on Insights</h3>
            
            {/* 3x3 Grid of Concept Sketches */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Row 1 */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                <div className="h-48 overflow-hidden border-b border-gray-200">
                  <img
                    src="/images/ezam/Line&Dots-Ezam.png"
                    alt="Dot-it-in game with grid and pieces"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-amber-800 text-center">Line with the Dots</h4>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                <div className="h-48 overflow-hidden border-b border-gray-200">
                  <img
                    src="/images/ezam/AudioPatternPuzzle-Ezam.png"
                    alt="Audio patterns puzzle board layout"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-amber-800 text-center">Audio Patterns Puzzle</h4>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                <div className="h-48 overflow-hidden border-b border-gray-200">
                  <img
                    src="/images/ezam/3DLudo-Ezam.png"
                    alt="3D Ludo game board design"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-amber-800 text-center">3D Ludo</h4>
                </div>
              </div>

              {/* Row 2 */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                <div className="h-48 overflow-hidden border-b border-gray-200">
                  <img
                    src="/images/ezam/OutdoorMaze-Ezam.png"
                    alt="Outdoor maze concept with paths"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-amber-800 text-center">Outdoor Maze Concept</h4>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                <div className="h-48 overflow-hidden border-b border-gray-200">
                  <img
                    src="/images/ezam/GravityGround-Ezam.png"
                    alt="Gravity ground circular game concept"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-amber-800 text-center">Gravity Ground Concept</h4>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                <div className="h-48 overflow-hidden border-b border-gray-200">
                  <img
                    src="/images/ezam/TexturedStack-Ezam.png"
                    alt="Textured stack building game"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-amber-800 text-center">Textured Stack</h4>
                </div>
              </div>

              {/* Row 3 */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                <div className="h-48 overflow-hidden border-b border-gray-200">
                  <img
                    src="/images/ezam/RacingCourse-Ezam.png"
                    alt="Racing course track design"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-amber-800 text-center">Racing Course</h4>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                <div className="h-48 overflow-hidden border-b border-gray-200">
                  <img
                    src="/images/ezam/ReverseMaze-Ezam.png"
                    alt="Reverse maze with multiple levels"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-amber-800 text-center">Reverse Maze</h4>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                <div className="h-48 overflow-hidden border-b border-gray-200">
                  <img
                    src="/images/ezam/VocalRCCar-Ezam.png"
                    alt="Vocal remote car game concept"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-amber-800 text-center">Vocal Remote Car</h4>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed">
                Based on the insights gathered from user research, we developed 9 different game concepts that address the core challenges faced by visually impaired users. Each concept focuses on <span className="font-semibold text-amber-800">tactile interaction</span>, <span className="font-semibold text-amber-800">audio feedback</span>, and <span className="font-semibold text-amber-800">eliminating visual advantages</span> to create truly inclusive gaming experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Final Ideation Section */}
        <section className="mb-16">
          <div className="rounded-xl shadow-xl overflow-hidden">

            {/* Brown header band */}
            <div className="bg-amber-900 px-8 py-6">
              <h3 className="text-2xl font-bold text-amber-100 mb-1">Final Ideation</h3>
              <div className="w-12 h-0.5 bg-amber-500 rounded-full mt-2"></div>
            </div>

            {/* Light body */}
            <div className="bg-white px-8 py-8">
              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-8">
                A maze-inspired board game that focuses on competitive chasing and navigation, designed to eliminate any and all visual advantages.
                <span className="block mt-2 text-sm text-gray-500 italic">Combined product of three of our nine ideations; the Outdoor Maze, the Reverse Maze, and 3D Ludo.</span>
              </p>

              {/* Concept Images */}
              <div className="flex gap-4 mb-8">
                <div className="rounded-xl overflow-hidden h-80 bg-gray-100">
                  <img
                    src="/images/ezam/FinalIdeation1-Ezam.png"
                    alt="Initial concept sketches and game components"
                    className="w-auto h-full object-contain"
                  />
                </div>
                <div className="rounded-xl overflow-hidden h-80 bg-gray-100">
                  <img
                    src="/images/ezam/FinalIdeation2-Ezam.png"
                    alt="Game board with grid, flags, and spheres"
                    className="w-auto h-full object-contain"
                  />
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    <span className="font-bold text-amber-900">Removes</span> any and all sorts of <span className="font-bold text-amber-900">visual advantages</span> from the table.
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Can be <span className="font-bold text-amber-900">played & enjoyed by both</span>, visually impaired and visually abled.
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Does not <span className="font-bold text-amber-900">evoke sympathy</span> in sighted players or <span className="font-bold text-amber-900">dependence</span> in visually impaired players.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Psychological Effects of Maze Navigating Section */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
            <h3 className="text-lg font-semibold text-amber-700 mb-6">Psychological Effects of Maze Navigating</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              <p className="text-sm text-gray-600 leading-relaxed"><span className="font-semibold text-amber-700">Sense of Achievement:</span> Successfully navigating mazes evokes accomplishment and satisfaction, boosting self-esteem.</p>
              <p className="text-sm text-gray-600 leading-relaxed"><span className="font-semibold text-amber-700">Stress Reduction:</span> Maze activities serve as stress relief and relaxation from everyday routines.</p>
              <p className="text-sm text-gray-600 leading-relaxed"><span className="font-semibold text-amber-700">Spatial Confidence:</span> Mastery over spatial environments boosts confidence in mobility and orientation.</p>
              <p className="text-sm text-gray-600 leading-relaxed"><span className="font-semibold text-amber-700">Sensory Integration:</span> Fosters integration of tactile and auditory information for adaptive navigation.</p>
              <p className="text-sm text-gray-600 leading-relaxed"><span className="font-semibold text-amber-700">Empowerment:</span> Navigating unfamiliar environments independently promotes autonomy and self-reliance.</p>
              <p className="text-sm text-gray-600 leading-relaxed"><span className="font-semibold text-amber-700">Social Connection:</span> Encourages collaboration and camaraderie between visually impaired individuals and their peers.</p>
            </div>
          </div>
        </section>

        {/* 3D Visualisation Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h3 className="text-2xl font-bold text-amber-700 mb-8 text-center">3D Visualisation</h3>
            
            {/* 2x2 Grid of 3D Views */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Top Left - Isometric View */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/images/ezam/3D-1-Ezam.png"
                  alt="Isometric board with flags and sphere"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Top Right - Overhead Maze View */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/images/ezam/3D-2-Ezam.png"
                  alt="Overhead maze structure view"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Bottom Left - Side Profile */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/images/ezam/3D-3-Ezam.png"
                  alt="Side profile of game table"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Bottom Right - Front View */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/images/ezam/3D-4-Ezam.png"
                  alt="Front view with player positions"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Description */}
            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6 text-left">
              <p className="text-gray-700 text-md leading-relaxed max-w-4xl mx-auto">
                These 3D visualizations showcase the final EZAM game design from multiple angles, highlighting the <span className="font-semibold text-amber-800">tactile grid system</span>, <span className="font-semibold text-amber-800">removable maze walls</span>, and <span className="font-semibold text-amber-800">accessible game components</span> that enable inclusive gameplay.
              </p>
            </div>
          </div>
        </section>

        {/* Physical Prototyping Section */}
        <section className="mb-16">
          <div className="rounded-xl shadow-xl overflow-hidden">
            <div className="bg-amber-900 px-8 py-6">
              <h3 className="text-2xl font-bold text-amber-100 mb-1">Physical Prototyping</h3>
              <div className="w-12 h-0.5 bg-amber-500 rounded-full mt-2"></div>
            </div>
            <div className="bg-white px-8 py-8">
              <p className="text-gray-700 leading-relaxed mb-8">
                Moving from concept to reality, we built and tested physical prototypes to validate our design approach and gather real user feedback.
              </p>

              {/* Prototype Images Layout */}
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4 mb-8">
                <div className="space-y-4">
                  <div className="rounded-xl h-[9.5rem] overflow-hidden bg-gray-100">
                    <img src="/images/ezam/Prototype1-Ezam.png" alt="Game board construction - measuring and cutting" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-xl h-[9.5rem] overflow-hidden bg-gray-100">
                    <img src="/images/ezam/Prototype2-Ezam.png" alt="3D printed maze walls in box" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="rounded-xl h-[20rem] overflow-hidden bg-gray-100">
                  <img src="/images/ezam/Prototype3-Ezam.png" alt="Complete game setup for players testing" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl h-[20rem] overflow-hidden bg-gray-100">
                  <img src="/images/ezam/Prototype4-Ezam.png" alt="Tactile die that doesn't get lost" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Key Prototype Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <h4 className="text-sm font-bold text-amber-900 mb-2">Tactile Grid System</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Physical maze & grid lines that can be felt and counted, enabling precise navigation without visual reference.</p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <h4 className="text-sm font-bold text-amber-900 mb-2">Accessible Components</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Flag markers & pawns designed for easy identification through touch and smooth movement from under the board.</p>
                </div>                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <h4 className="text-sm font-bold text-amber-900 mb-2">Axis-Rolling Tactile Die</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">A die that rolls along its axis and remains contained within the board, making it much easier to locate during gameplay.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gameplay Section */}
        <section className="mb-16">
          <div className="rounded-xl shadow-xl overflow-hidden">
            <div className="bg-amber-900 px-8 py-6">
              <h3 className="text-2xl font-bold text-amber-100 mb-1">Gameplay</h3>
              <div className="w-12 h-0.5 bg-amber-500 rounded-full mt-2"></div>
            </div>
            <div className="bg-white px-8 py-8">
              {/* Rule card + video side by side */}
              <div className="grid grid-cols-[2fr_3fr] gap-4 mb-8">
                <div className="rounded-xl overflow-hidden bg-gray-100">
                  <img src="/images/ezam/RuleCard-Ezam.png" alt="Ezam rules card" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden bg-gray-900 h-full">
                  <iframe
                    src="https://www.youtube.com/embed/RWHu5d2Reis"
                    title="Ezam Gameplay"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Rules of the Chase */}
              <h4 className="text-lg font-bold text-amber-800 mb-4">Rules of the Chase</h4>
              <ol className="space-y-2">
                <li className="flex gap-3 text-md text-gray-700"><span className="font-bold text-amber-900 flex-shrink-0">1.</span>Two adjacent players start from one end of the maze and end on another.</li>
                <li className="flex gap-3 text-md text-gray-700"><span className="font-bold text-amber-900 flex-shrink-0">2.</span>A player can enter the maze only after getting a 1 or a 6 on the die.</li>
                <li className="flex gap-3 text-md text-gray-700"><span className="font-bold text-amber-900 flex-shrink-0">3.</span>If player 2 lands on the same block as player 1, player 1 gets killed.</li>
                <li className="flex gap-3 text-md text-gray-700"><span className="font-bold text-amber-900 flex-shrink-0">4.</span>If player 2 kills player 1, they get all the flags collected by player 1, and player 1 will have to restart the maze.</li>
                <li className="flex gap-3 text-md text-gray-700"><span className="font-bold text-amber-900 flex-shrink-0">5.</span>The pawns can be moved in one direction only. The direction can be changed only if a wall hinders the path and there's no way forward. </li>
                <li className="flex gap-3 text-md text-gray-700"><span className="font-bold text-amber-900 flex-shrink-0">6.</span>The players have to ensure that the upper pawn and the lower pawn are moving simultaneously . </li>
                <li className="flex gap-3 text-md text-gray-700"><span className="font-bold text-amber-900 flex-shrink-0">7.</span>A player needs to collect a minimum of 3 flags before they exit the maze. </li>
                <li className="flex gap-3 text-md text-gray-700"><span className="font-bold text-amber-900 flex-shrink-0">8.</span>The number of flags placed can be greater than or equal to 4 depending on the level of difficulty required.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Play-testing Section */}
        <section className="mb-16">
          <div className="rounded-xl shadow-xl overflow-hidden">
            <div className="bg-amber-900 px-8 py-6">
              <h3 className="text-2xl font-bold text-amber-100 mb-1">Play-testing</h3>
              <div className="w-12 h-0.5 bg-amber-500 rounded-full mt-2"></div>
            </div>
            <div className="bg-white px-8 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-4">
                <div className="space-y-4">
                  <div className="rounded-xl overflow-hidden bg-gray-100">
                    <img src="/images/ezam/Testing1-Ezam.png" alt="Students gathered around, feeling the board." className="w-full h-auto object-cover" />
                  </div>
                  <div className="rounded-xl overflow-hidden bg-gray-100">
                    <img src="/images/ezam/Testing2-Ezam.png" alt="Close-up of players understanding the gameplay & maze." className="w-full h-auto object-cover" />
                  </div>                  
                  <div className="rounded-xl overflow-hidden bg-gray-100">
                    <img src="/images/ezam/Testing3-Ezam.png" alt="Close-up of players testing the game and competing" className="w-full h-auto object-cover" />
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden bg-gray-900 h-full" style={{minHeight: '24rem'}}>
                  <iframe
                    src="https://www.youtube.com/embed/zPwNpsZ18f8"
                    title="Ezam Play-testing"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feedback & Analysis Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h3 className="text-2xl font-bold text-amber-700 mb-6">Feedback & Analysis</h3>
            {/* 2x2 Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Left - Positives */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h4 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                  <span className="text-green-600">＋</span> Positives
                </h4>
                <div className="space-y-2 text-gray-700">
                  <p className="text-md">1. Unique Game, players had played nothing of its kind.</p>
                  <p className="text-md">2. Perceived as a fair game by blind players.</p>
                  <p className="text-md">3. Learning time was not too high.</p>
                  <p className="text-md">4. The blind were able to navigate smoothly.</p>
                  <p className="text-md">5. <span className="font-bold">Brought out the spirit of positive competition.</span></p>
                </div>
              </div>

              {/* Top Right - Constructive Criticism */}
              <div className="bg-orange-100 border border-orange-300 rounded-xl p-6">
                <h4 className="text-xl font-bold text-orange-700 mb-4 flex items-center gap-2">
                  <span className="text-orange-600">⚠️</span> Constructive Criticism
                </h4>
                <div className="space-y-2 text-gray-700">
                  <p className="text-md">1. Board space was not fully accessible.</p>
                  <p className="text-md">2. It is difficult to count steps separately.</p>
                  <p className="text-md">3. No feedback of movement in ponds.</p>
                  <p className="text-md">4. Ponds can be made more easily accessible.</p>
                  <p className="text-md">5. Die was harder to count for visually impaired users.</p>
                </div>
              </div>

              {/* Bottom Left - Questions */}
              <div className="bg-amber-100 border border-amber-300 rounded-xl p-6">
                <h4 className="text-xl font-bold text-amber-800 mb-4 flex items-center gap-2">
                  <span className="text-amber-600">?</span> Questions
                </h4>
                <div className="space-y-2 text-gray-700">
                  <p className="text-md">1. "Can something tell me how many steps I'm moving?"</p>
                  <p className="text-md">2. "Where did my pond go?"</p>
                  <p className="text-md">3. "The die says five, right?"</p>
                  <p className="text-md">4. "Did she move?"</p>
                  <p className="text-md">5. <span className="font-bold">"Are you gonna leave this game for us?"</span></p>
                </div>
              </div>

              {/* Bottom Right - Ideas */}
              <div className="bg-yellow-100 border border-yellow-300 rounded-xl p-6">
                <h4 className="text-xl font-bold text-yellow-800 mb-4 flex items-center gap-2">
                  <span className="text-yellow-600">💡</span> Ideas
                </h4>
                <div className="space-y-2 text-gray-700">
                  <p className="text-md">1. Decrease excess space on sides of board, increase its height.</p>
                  <p className="text-md">2. Auditory feedback added on the movement of pawn.</p>
                  <p className="text-md">3. Make pawns taller as well as thinner.</p>
                  <p className="text-md">4. Steps can be added under the board.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Published Paper Section */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 flex flex-col sm:flex-row sm:items-center gap-8">
            {/* Text */}
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Published Research</p>
              <h3 className="text-lg font-bold text-amber-800 mb-2 leading-snug">
                Lessons Learned in Inclusive Game Design: Bridging the Gap Between Visually Impaired and Abled Players
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                <span className="font-semibold text-gray-700">Charvi Golechha</span>, Sneha Patni, Shanu Garg
              </p>
              <p className="text-sm text-gray-500">
                Treating the game as a service unlocked new perspectives on inclusive design- this paper reflects on how a service design lens shaped our process and outcomes from ideation through play-testing.
              </p>
            </div>

            {/* Logos + CTA */}
            <div className="flex-shrink-0 flex flex-col items-center gap-3">
              <div className="flex items-center gap-4">
                <img
                  src="/images/ezam/ServdesLogo-Ezam.png"
                  alt="ServDes 2025 logo"
                  className="h-10 w-auto object-contain"
                />
                <img
                  src="/images/ezam/DRSLogo-Ezam.png"
                  alt="Design Research Society logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <a
                href="https://dl.designresearchsociety.org/servdes/servdes2025/researchpapers/16/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-900 text-amber-100 text-base font-semibold px-5 py-2.5 rounded-full hover:bg-amber-800 transition-colors w-full justify-center"
              >
                Read Paper
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Closing Summary */}
        <section className="pt-4 pb-8 text-center">
          <div>
            <h2 className="text-2xl font-bold text-amber-800 mb-3">Closing Summary</h2>
            <div className="w-16 h-0.5 bg-amber-300 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-800 mb-4">
              Inclusive design isn't about making exceptions, it's about building something that never needed them. EZAM does exactly that: a game where the rules level the field by design, not by concession.
            </p>
            <p className="text-lg text-gray-800">
              Through research, rapid ideation, and physical prototyping, we validated that designing for <span className="font-semibold">equality</span> rather than <span className="font-semibold">accommodation</span> produces richer experiences for everyone at the table, sighted and visually impaired alike.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-8 text-center text-gray-400 text-sm font-medium">
          Last updated in March, 2026.
        </footer>
      </main>
    </div>
  );
}