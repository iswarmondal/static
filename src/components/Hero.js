import heroImg from "../assets/hero_image.svg"

function Hero()
{
    return (
        <section>
            <div className="hero-section">
                <img src={heroImg} className="hero-img" alt="..." />
                <div className="hero-text">
                    <h2>
                        A paragraph of placeholder text. We're using it here to show the use of the clearfix class.
                    </h2>
                    <br />
                    <div className="btn btn-dark p-3">Click</div>
                </div>
            </div>
        </section>
    )
}

export default Hero
