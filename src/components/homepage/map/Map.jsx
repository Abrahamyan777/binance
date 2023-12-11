import { useInView } from 'react-intersection-observer';
import css from './map.module.css'
import { useEffect, useRef } from 'react';
import "./map.css"

const Map = () => {

    const {ref: Rocket, inView: ElisVisible} = useInView({threshold: 0.3})

    console.log(ElisVisible);
    const myRef = useRef()
    useEffect(() => {
        if(ElisVisible){
            myRef.current.classList.add("animation1")
        }

    }, [ElisVisible])


    return (
        <section className={css.roadmapWrapper} ref={Rocket}>
            <div className={css.roadmapContainer}>
                <div className={css.radmapContainerInner}>
                <div className={css.roadmapHeader}>
                    <div></div>
                    <h4>Binance API</h4>
                </div>
                <div className={css.info} ref={myRef} >
                    <article className={css.article_1 + ' '+ css.full}>
                        <div className={css.leftInfo_1}>
                            <h5 className={css.title}>Portfolio Margin Programt</h5>
                            <p className={css.text}>Binance Portfolio Margin Program broadens margin scope to include balances on the Cross Margin, USDⓈ-M Futures, and COIN-M Futures Wallets
                             as part of one single joint collateral.</p>
                        </div>
                        <div className={css.rightInfo_1}></div>

                    </article>

                    <article className={css.article_2 + ' '+ css.full + ' '+ css.respons}>
                        <div className={css.rightInfo_2}></div>
                        <div className={css.leftInfo_2}>
                            <h5 className={css.title}>VIP & Institutional</h5>
                            <p className={css.text}>Binance VIP and Institutional offers access to professional services including better fees, higher trading limits, flexible account management function and OTC services. Our experienced team works closely with a wide range of market 
                            participants to provide bespoke trading solutions.</p>
                        </div>
                    </article>

                    <article className={css.article_3 + ' '+ css.full}>
                        <div className={css.leftInfo_3}>
                            <h5 className={css.title}>Made for Developers</h5>
                            <p className={css.text}>Facing a problem in development? Find help from the developer community. 
                            We would like to hear from you! Share your thoughts with us.Scanning the API chat we had noticed every now again these questions frequently pop up. So we decided to put some of them here for easy reference. How come I keep getting
                             this error “Timestamp for this request is outs</p>
                        </div>
                        <div className={css.rightInfo_3}></div>
                    </article>

                    <article className={css.article_4 + ' '+ css.full + ' '+ css.respons}>
                        <div className={css.rightInfo_4}></div>
                        <div className={css.leftInfo_4}>
                            <h5 className={css.title}>Governing law</h5>
                            <p className={css.text}>Aside from where Applicable Law requires or provides you with a choice otherwise, these Terms (including this arbitration agreement) shall be governed by, and construed in accordance with, the laws of Hong Kong.</p>
                        </div>
                    </article>
                </div>
                </div>
            </div>

        </section>
    )
}

export default Map;