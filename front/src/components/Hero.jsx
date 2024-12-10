import React from "react";

const handleScrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
};


const HeroSection = ({contactRef}) => (
    <section className="hero-section w-[95%] self-center h-[70vh] flex flex-col md:justify-end">
        <div className="md:w-[60%]">
            <div className="h-[70vh] flex flex-col justify-between md:justify-end" style={{padding: "2rem", gap:"3vw"}}>
                <div style={{}}>
                    <h1 className="text-2xl md:text-4xl" >Najbolji kreditni uslovi i besplatne konsultacije za pametan izbor</h1>
                    <p className="py-5">U Viatec-u verujemo da svaka finansijska odluka treba biti jasna, sigurna i prilagođena vašim potrebama. Kao stručni tim za posredovanje u kreditima, posvećeni smo tome da vam omogućimo najbolju ponudu koja odgovara vašoj situaciji i ciljevima. Uz pažljivu analizu i besplatne konsultacije, pomažemo vam da nađete povoljne kreditne uslove koji vam omogućavaju pametan i održiv finansijski izbor.</p>
                </div>
            <button onClick={() => handleScrollTo(contactRef)} className="cta-button text-lg px-5 py-3 rounded-full">Kontaktirajte nas</button>
            </div>
        </div>
        
    </section>
);

export default HeroSection;
