import './index.css'

const About = () => (
    <div className='about-page'>
        <div className="description">        
            <h1>Mattia Fiorio</h1>
            <h3>Software developer</h3>
            <h2>Work in progress!</h2>
        </div>
        <img src={process.env.PUBLIC_URL + '/img/singapore.jpg'} alt="picture of me"/>
    </div>
);

export default About;
