import axios from 'axios'
import React, { useState } from 'react'
import DashboardPage from '../../components/dashboard/dashboard-layout'
import SettingPage from '../../components/dashboard/settings-page/SettingPage'
import { ApiUrl } from '../../config/ApiConfig'

const settings = ({ heroData, seoData, socialLinkData, ctaData }) => {
    const [seo, setSeo] = useState(seoData);
    const [socialLink, setSocialLink] = useState(socialLinkData);
    const [heros, setHero] = useState(heroData);
    const [ctas, setCta] = useState(ctaData);
    return (
        <div>
            <DashboardPage>
                <SettingPage heroContent={heros} seoContent={seo} linkContents={socialLink} ctaContents={ctas} onslCreated={setSocialLink} onSeoCreated={setSeo} onHsCreated={setHero} onCtaCreated={setCta} />
            </DashboardPage>
        </div>
    )
}
export default settings

export async function getServerSideProps() {
    try {
        const hero = await axios.get(ApiUrl + 'admin/hero');
        const seo = await axios.get(ApiUrl + 'admin/seo');
        const link = await axios.get(ApiUrl + 'admin/social-link');
        const cta = await axios.get(ApiUrl + 'admin/cta');

        const heroData = hero.data;
        const seoData = seo.data;
        const socialLinkData = link.data;
        const ctaData = cta.data;
        return {
            props: {
                heroData,
                seoData,
                socialLinkData,
                ctaData,
            },
        }
    } catch (error) {
        return {
            props: {
                error: '',
            },
        };
    }
}
