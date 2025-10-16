
import Chef from './images/chef.png';

function Home() {
    return (
        <>
        <article>
            <div className="clearfix">
                <img className="chef" src={Chef} width="300px" />
                <p className="aboutChef">
                    Hello, I am Chef Jet Arada, a culinary enthusiast dedicated to the art of creating delightful and memorable dining experiences. With a passion for exploring diverse flavors, textures, and culinary techniques, I bring a unique blend of creativity and expertise to the kitchen. Whether crafting innovative dishes or perfecting timeless classics, my goal is to elevate the culinary journey for every palate. Join me on a gastronomic adventure where each plate tells a story, celebrating the joy of food and the pleasure of shared moments around the table.
                </p>
            </div>
        </article>

        <footer>
            <small>Copyright 2024.</small>
        </footer>
        </>
    );
} 

export default Home;