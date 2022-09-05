import Map from "../Map";
import CSVReader from "../CSVReader";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [flyered, setFlyered] = useState<string[]>([]);
  const [csvFile, setCsvFile] = useState();
  useEffect(() => {
    setFlyered([]);
  }, [csvFile])

  const onUploadAccepted = (results: any) => {
    console.log('------UPLOAD ACCEPTED------');
    console.log(results);
    console.log('---------------------------');
    const newFlyered: string[] = [];
    for (const result of results?.data) {
      const { prec_2012, flyered: is_flyered } = result;
      if (is_flyered === 'TRUE') newFlyered.push(prec_2012)
    }
    setFlyered(newFlyered);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>SF Precinct Vis</p>
      </header>
      <CSVReader onUploadAccepted={onUploadAccepted} setCsvFile={setCsvFile} />
      <Map flyered={flyered} />

    </div>
  );
}

export default App;
