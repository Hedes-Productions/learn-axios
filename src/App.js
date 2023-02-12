import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [deviceName, setDeviceName] = useState();
  const [deviceColor, setDeviceColor] = useState();
  const [deviceCapacity, setDeviceCapacity] = useState();

  const url = 'https://api.restful-api.dev/objects';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(url);
        console.log(result);
        console.log('working');
        const neededData = result.data[2];

        setDeviceName(neededData.name);
        setDeviceColor(neededData.data.color);
        setDeviceCapacity(neededData.data['capacity GB']);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="background">
      <div className="device">{deviceName}</div>
      <div className="device-color">{deviceColor}</div>
      <div className="device-capacity">{deviceCapacity}</div>
    </div>
  );
}

// axios
// rest api - get, post, put, delete
// update, patch

// ['a','b','c','d']

export default App;
