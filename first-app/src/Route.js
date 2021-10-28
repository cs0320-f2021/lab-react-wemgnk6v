import './App.css';
import TextBox from "./TextBox";
import React, {useState} from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import axios from 'axios';

function Route() {
    const [startLat, setStartLat] = useState(0);
    const [startLong, setStartLong] = useState(0);
    const [destLat, setDestLat] = useState(0);
    const [destLong, setDestLong] = useState(0);
    // const startLatHandler = (event) => {setStartLat(event.target.value)}
    // const startLongHandler = (event) => {setStartLong(event.target.value)}
    // const destLatHandler = (event) => {setDestLat(event.target.value)}
    // const destLongHandler = (event) => {setDestLong(event.target.value)}

    //TODO: Fill in the ? with appropriate names/values for a route.
//Hint: The defaults for latitudes and longitudes were 0s. What might the default useState value for a route be?
    const [route, setRoute] = useState("No route yet.");

    /**
     * Makes an axios request.
     */
    const requestRoute = () => {
        const toSend = {
                //TODO: Pass in the values for the data. Follow the format the route expects!
            srclat: startLat,
            srclong: startLong,
            destlat: destLat,
            destlong: destLong
    };

        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        //Install and import this!
        //TODO: Fill in 1) location for request 2) your data 3) configuration
        axios.post(
            "http://localhost:4567/route",
            toSend,
            config
        )
            .then(response => {
                console.log(response.data);
                //TODO: Go to the Main.java in the server from the stencil, and find what variable you should put here.
                //Note: It is very important that you understand how this is set up and why it works!
                setRoute(response.data["route"]);
            })

            .catch(function (error) {
                console.log(error);

            });
    }

    return (
        <div className="Route">
            <header className="App-header">
                <h1>Route Title</h1>
            </header>
            {/*<TextBox label={"Source Latitude"} change={startLatHandler}/>*/}
            {/*<TextBox label={"Source Longitude"} change={startLongHandler}/>*/}
            {/*<TextBox label={"Destination Latitude"} change={destLatHandler}/>*/}
            {/*<TextBox label={"Destination Longitude"} change={destLongHandler}/>*/}
            <TextBox label={"Source Latitude"} change={setStartLat}/>
            <TextBox label={"Source Longitude"} change={setStartLong}/>
            <TextBox label={"Destination Latitude"} change={setDestLat}/>
            <TextBox label={"Destination Longitude"} change={setDestLong}/>
            <AwesomeButton
                type="primary"
                onPress={requestRoute}
            >
                Submit
            </AwesomeButton>
            <h2>{route.toString()}</h2>
        </div>
    );
}

export default Route;
