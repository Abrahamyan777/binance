import css from './homeBlok1.module.css'


const HomeBlok1 = () => {


    return (
        <section className={css.homeBlok1Wrapper}>
            <div className={css.homeBlok1Container}>
                <div className={css.homeBlok1WrapperInner}>
                    <div className={css.homeLeft}>
                        <div className={css.homeLogo}></div>
                        <div className={css.homeCrypto}>
                            <h4>Welcome to Binance</h4>
                        </div>
                        <div className={css.homeJoin}>
                            <button className={css.homeButton}>Join us</button>
                        </div>
                    </div>
                    <div className={css.homeRight}></div>
                </div>
            </div>
        </section>
    )
}

export default HomeBlok1;