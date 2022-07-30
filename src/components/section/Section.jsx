import "./Section.css"

import IMG from "../../img/section.png";


function Section(){
    return(
        <section className="section">
            <div className="container">
                <ul className="section__list">
                    <li>
                        <h2>wave NFT COLLECTION of 777</h2>
                        <img src={IMG} alt="" />
                    </li>
                    <li>
                        <p>META WAVE NFT is your pass to Meta Record Label ecosystem. It is your access to our industry experts, established artists, and partners.</p>
                        <p>Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet dictum sit amet justo. Tortor aliquam nulla facilisi cras.</p>
                        <p>Maecenas ultricies mi eget mauris pharetra. Sit amet consectetur adipiscing elit ut aliquam purus. Porta nibh venenatis cras sed felis. Aenean vel elit scelerisque mauris pellentesque pulvinar. Et malesuada fames ac turpis egestas sed tempus. Enim sit amet venenatis urna cursus eget.</p>
                        <p>Maecenas ultricies mi eget mauris pharetra et ultrices. A condimentum vitae sapien pellentesque habitant morbi.</p>
                        <button className="section__btn">Get one on OpenSea</button>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Section;