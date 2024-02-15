import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/Header/TabButton.jsx';

function App() {
  const [selectedTopic, setSelectedTopic] = useState()

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
    console.log(selectedTopic)
  }
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept {...CORE_CONCEPTS[0]}/>
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("Components")}>Components</TabButton>
            <TabButton onSelect={() => handleSelect("JSX")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("Props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("State")}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
