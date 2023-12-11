import { useInView } from 'react-intersection-observer';
import css from './meetComponet.module.css'
import { useEffect, useRef } from 'react';
import './meet.css'


function MeetComponents() {

    const { ref: MyRocet, inView: ElIsVisible } = useInView({ threshold: 0.4 });

    const myRef = useRef();

    useEffect(() => {
        if (ElIsVisible) {
            myRef.current.classList.add("animation");
        }
    }, [ElIsVisible]);


    return (
        <section className={css.meetWrapper}>
            <div className={css.meetContainer} ref={MyRocet}>
                <div className={css.meetContainerInner}>
                    <div className={css.meetHeader}>
                        <div className={css.meetlogoContainer}>
                            <span>Our Ecosystem</span>
                            <div></div>
                        </div>
                        <div className={css.meetText}>
                            <p>
                            Our platform is trusted by millions worldwide, and features an unmatched portfolio of financial product offerings.

                            </p>
                        </div>
                    </div>
                    <div className={css.meetFooter} ref={myRef}>
                        <article >
                            <div className={css.footerLogo}></div>
                            <div className={css.info}>
                                <h3>Binance Labs</h3>
                                <p>Binance Labs is a venture capital and accelerator whose goal is to identify and support the most promising Web3 projects.</p>
                            </div>
                        </article>
                        <article>
                            <div className={css.footerLogo}></div>
                            <div className={css.info}>
                                <h3>Binance Academy</h3>
                                <p>Binance Academy is an open-access learning hub, providing free blockchain and crypto education in over 10 languages.</p>
                            </div>
                        </article>
                        <article>
                            <div className={css.footerLogo}></div>
                            <div className={css.info}>
                                <h3>Binance Charity</h3>
                                <p>Binance Charity is a non-profit organization dedicated to building a future where Web3 technology is used as a force of good.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MeetComponents;