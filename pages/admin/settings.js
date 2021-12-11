import axios from 'axios'
import React, { useState } from 'react'
import DashboardPage from '../../components/dashboard/dashboard-layout'
import SettingPage from '../../components/dashboard/settings-page/SettingPage'
import { ApiUrl } from '../../config/ApiConfig'

const settings = ({ heroData, seoData, socialLinkData }) => {
    console.log(heroData);
    const [seo, setSeo] = useState(seoData);
    const [socialLink, setSocialLink] = useState(socialLinkData);
    const [heros, setHero] = useState(heroData);
    const onCreated = (seo) => {
        setSeo([
            seo
        ]);
    }
    const onslCreated = (links) => {
        setSocialLink([
            links
        ]);
    }
    const onHsCreated = (hero) => {
        setHero([
            hero
        ]);
    }
    return (
        <div>
            <DashboardPage>
                <SettingPage heroContent={heros} seoContent={seo} onslCreated={onslCreated} linkContents={socialLink} onCreated={onCreated} onHsCreated={onHsCreated} />
            </DashboardPage>
        </div>
    )
}
export default settings

export async function getStaticProps() {
    try {
        const hero = await axios.get(ApiUrl + 'hero');
        const seo = await axios.get(ApiUrl + 'seo');
        const link = await axios.get(ApiUrl + 'social-link');
        const heroData = hero.data;
        const seoData = seo.data;
        const socialLinkData = link.data;
        return {
            props: {
                heroData,
                seoData,
                socialLinkData,
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
