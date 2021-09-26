import React  from 'react';
import useGif from '../useGif';

const Random = () => {

    const { gif , fetchGif } = useGif();


    return (
        <div className="container">
            <h1>Random Gif</h1>
            <img width="500" height="300" src={gif} alt="Random Gif" />
            <button onClick={() => fetchGif()}>CLICK FOR NEW</button>
        </div>
    );
}

export default Random;