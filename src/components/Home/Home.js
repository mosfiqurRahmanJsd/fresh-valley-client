import React, { useEffect } from 'react';
import Event from '../Event/Event';
import Header from '../Header/Header';

const Home = (props) => {
    // const [events, setEvents] = useState([]); 
    const { events, setEvents } = props; 
    useEffect(() => {
        fetch('https://fast-lowlands-21209.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [setEvents])

    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row">
                    {
                        events.map(event => <Event event={event} key={event.name}></Event>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;
