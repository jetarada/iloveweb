
import Chicken_Kaldereta from './images/beef.jpg';

function Chicken() {
    return (

<>
<article>
        <h1>Chicken Caldereta</h1>
        <img className='chicken' src={Chicken_Kaldereta} alt="Chicken Kaldereta" width="200px" />
        <p>How to make <strong>Chicken Caldereta</strong>...</p>
        <section>
            <h2>Ingredients:</h2>
            <ul>    
                <li>1K baboy</li>
                <li>1 sibuyas</li>
                <li>1 bawang</li>
                <li>toyo</li>
                <li>suka</li>
                <li>asin</li>
                <li>paminta</li>
            </ul>
        </section>
        <section>
            <h2>Steps:</h2>
            <ol type="I">
                <li>Igisa ang bawang, sibuyas.</li>
                <li>Ilagay ang baboy, iprito hanggang mamula ang pagkaluto.</li>
                <li>Maglagay ng isang tasang tubig.</li>
                <li>Ilagay ang suka, toyo, at paminta.</li>
                <li>Tikman, lagyan ng asin ayon sa panlasa. </li>
                <li>Pakuluin hanggang lumambot ang karne.</li>
                <li>Patayin ang apoy, ilagay sa bowl at ihain.</li>
            </ol>
        </section>
    </article>
    
    <footer>
        <small>Copyright 2023.</small>
    </footer>
</>
        
    );
} 

export default Chicken;