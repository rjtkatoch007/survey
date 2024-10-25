import React from 'react'
import PageComponent from '../components/PageComponent'

function SurveyView() {
    const [survey, setSurvey] = useState({
        title: "",
        slug: "",
        status: false,
        description: "",
        image: null,
        image_url: null,
        expire_date: "",
        questions: [],
    });
    return (
        <PageComponent title={'Create New Survey'}>
            Survey Form
        </PageComponent>
    )
}

export default SurveyView