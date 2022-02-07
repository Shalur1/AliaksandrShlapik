let initialState = {
        posts: [{
            id: 1,
            link: '/content_id1',
            src: 'https://sun9-57.userapi.com/impg/kALQdbWK48yKlSa5L2SQiW-Q6ZTl_hyJpoOhPA/UEWOGDj36Zs.jpg?size=827x827&quality=95&sign=61124a804b2600af6f9c9a46ef21f397&type=album',
            p1: 'Southeast U.S. poised for a firestorm of omicron cases',
            p2: 'Florida, Georgia, Louisiana and Mississippi are among the states experiencing the sharpest increases in covid-19 hospitalizations.',
            p3: 'By Fenit Nirappil'
        }, {
            id: 2,
            link: '',
            src: '',
            p1: 'Southeast U.S. poised for a firestorm of omicron cases',
            p2: 'Florida, Georgia, Louisiana and Mississippi are among the states experiencing the sharpest increases in covid-19 hospitalizations.',
            p3: 'By Fenit Nirappil'
        }, {
            id: 3,
            link: '',
            src: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https%3A%2F%2Farc-anglerfish-washpost-prod-washpost%252Es3%252Eamazonaws%252Ecom%2Fpublic%2FAWLQ2YUBI5DHDFKPMCGWXMLFQA%252Ejpg&w=992&h=558',
            p1: 'Traffic still blocked on snowy I-95 in Va. after drivers were stranded overnight',
            p2: 'Officials have been struggling to get traffic moving again after it came to a standstill overnight, leaving motorists stranded for nearly 20 hours along a 48-mile stretch south of Washington.',
            p3: 'By Dana Hedgpeth, Hannah Natanson, Laura Vozzella, Meagan Flynn and Katherine Shaver'
        }]
}

const homePageReducer = function (state = initialState, action) {
    let copyState = {
        ...state,
        posts: [...state.posts]
    }
    return copyState;
}

export default homePageReducer;