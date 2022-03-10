let initialState = {
    postsFirstLine: [
        {
            id: 1,
            link: '/content_id1',
            src: 'https://sun9-57.userapi.com/impg/kALQdbWK48yKlSa5L2SQiW-Q6ZTl_hyJpoOhPA/UEWOGDj36Zs.jpg?size=827x827&quality=95&sign=61124a804b2600af6f9c9a46ef21f397&type=album',
            p1: 'Southeast U.S. poised for a firestorm of omicron cases',
            p2: 'Florida, Georgia, Louisiana and Mississippi are among the states experiencing the sharpest increases in covid-19 hospitalizations.',
            p3: 'By Fenit Nirappil'
        },
        {
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
        },
    ],
    postsSecondLine: [
        {
            id: 10,
            link: '',
            src:'https://www.washingtonpost.com/wp-apps/imrs.php?src=https%3A%2F%2Farc-anglerfish-washpost-prod-washpost%252Es3%252Eamazonaws%252Ecom%2Fpublic%2FPZ4YQDISWNBZXHGCUYBXRBUI4U%252Ejpg&w=464&h=260',
            p1:'Putin’s isolation leaves few world leaders to convince him to reach a peace deal',
            p2:'',
            p3:'By Adam Taylor'
        },
        {
            id: 5,
            link: '',
            src:'',
            p1:'Ukrainian teams hunt for evidence of possible war crimes',
            p2:'',
            p3:'By Sudarsan Raghavan'
        },
        {
            id: 6,
            link:'',
            src:'https://www.washingtonpost.com/wp-apps/imrs.php?src=https%3A%2F%2Farc-anglerfish-washpost-prod-washpost%252Es3%252Eamazonaws%252Ecom%2Fpublic%2FWVFWO6U5MQI6ZLVQHT3X7HHONU%252Ejpg&w=992&h=558',
            p1:'The bride wore fatigues. The wedding party carried rifles and RPGs.',
            p2: 'The couple showed that even in war, life and love must go on.',
            p3:'By Siobhán OGrady and Kostiantyn Khudov'
        },
        {
            id: 4,
            link: '',
            src: '',
            p1: 'Russian forces attack airfields as Zelensky pleads for fighter jets',
            p2:'',
            p3:'By David L. Stern, Joby Warrick, Kareem Fahim, Dan Lamothe and Missy Ryan'
        }
    ],
    postsThirdLine: [
        {
            id: 7,
            link:'',
            src:'',
            p1:'More than 4,500 antiwar protesters arrested in one day in Russia, group says',
            p2: '',
            p3:'By Brittany Shammas and Reis Thebault'
        },
        {
            id: 8,
            link:'',
            src:'https://www.washingtonpost.com/wp-apps/imrs.php?src=https%3A%2F%2Farc-anglerfish-washpost-prod-washpost%252Es3%252Eamazonaws%252Ecom%2Fpublic%2FYXENF3EFF4I6ZFI4DYGMG4R6KM%252Ejpg&w=992&h=558',
            p1: 'N.Va. officials fear grocery tax repeal will derail transportation funding',
            p2:'Virginia Gov. Glenn Youngkin (R) has made repealing the tax a key part of his agenda, and it is all but a certainty in the state budget.',
            p3:'By Brittany Shammas and Reis Thebault'
        },
        {
            id: 9,
            link:'',
            src:'https://www.washingtonpost.com/wp-apps/imrs.php?src=https%3A%2F%2Farc-anglerfish-washpost-prod-washpost%252Es3%252Eamazonaws%252Ecom%2Fpublic%2F7VRMA5HEFUI6RKZMWMO42U6KNM%252Ejpg&w=464&h=260',
            p1:'Prosecutors to argue Va. woman staged a murder-suicide to cover her $400K theft',
            p2: '',
            p3:'By Justin Jouvenal'
        },
        {
            id: 7,
            link:'',
            src:'https://www.washingtonpost.com/wp-apps/imrs.php?src=https%3A%2F%2Farc-anglerfish-washpost-prod-washpost%252Es3%252Eamazonaws%252Ecom%2Fpublic%2FL327E5YHVNFJXK6DKIFSAKB5U4%252Ejpeg&w=992&h=558',
            p1:'She found long-lost love letters hidden in her attic. Then the hunt began for their owner.',
            p2: '',
            p3:'By Sydney Page'
        }
    ]
}

const homePageReducer = function (state = initialState, action) {
    let copyState = {
        ...state,
        postsFirstLine: [...state.postsFirstLine],
        postsSecondLine: [...state.postsSecondLine],
        postsThirdLine: [...state.postsThirdLine]
    }
    return copyState;
}

export default homePageReducer;