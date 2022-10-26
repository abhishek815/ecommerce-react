import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Highlight from './ui/Highlight';
import React from 'react';

function Highlights() {
    return (  
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className="purple">Library</span>
                    </h2>
                    <div className="highlight__wrapper">
                        <Highlight icon={<FontAwesomeIcon icon="bolt"/>} title="Easy and Quick" para="hi this is some test text for now!"/>
                        <Highlight icon={<FontAwesomeIcon icon="book-open"/>} title="10,000+ Books" para="hi this is some test text for now!"/>
                        <Highlight icon={<FontAwesomeIcon icon="tags"/>} title="Affordable" para="hi this is some test text for now!"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Highlights;