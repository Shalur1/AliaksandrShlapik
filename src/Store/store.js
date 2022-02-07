// import contentReducer from "./ContentReducer";
// import homePageReducer from "./homePageReducer";
// let typeEditCommInput = 'EDIT-COMM-INPUT';
// let typeAddPost = 'ADD-COMMENT';
//
// let store = {
//     _state: {
//         contentPage:{
//             newCommText: '',
//             comments: [{
//                 id: 1,
//                 src: 'https://sun9-57.userapi.com/impg/kALQdbWK48yKlSa5L2SQiW-Q6ZTl_hyJpoOhPA/UEWOGDj36Zs.jpg?size=827x827&quality=95&sign=61124a804b2600af6f9c9a46ef21f397&type=album',
//                 p: 'Чупапи Муняня',
//                 p1: "А у меня айфон в кредит"
//             }, {
//                 id: 2,
//                 src: 'https://sun9-36.userapi.com/impg/ojxAQ7xUJzp4kkHJYAGuiAqTTmjLmOr1RNP4uQ/TSc8CcFPkPA.jpg?size=720x745&quality=95&sign=bd7406d1f17a7d5ae58de2bf3fe503d4&type=album',
//                 p: 'Daniel',
//                 p1: "а у меня мак"
//             },],
//         },
//         homePage:{
//             posts: [{
//                 id: 1,
//                 link: '/content_id1',
//                 src: 'https://sun9-57.userapi.com/impg/kALQdbWK48yKlSa5L2SQiW-Q6ZTl_hyJpoOhPA/UEWOGDj36Zs.jpg?size=827x827&quality=95&sign=61124a804b2600af6f9c9a46ef21f397&type=album',
//                 p1: 'Southeast U.S. poised for a firestorm of omicron cases',
//                 p2: 'Florida, Georgia, Louisiana and Mississippi are among the states experiencing the sharpest increases in covid-19 hospitalizations.',
//                 p3: 'By Fenit Nirappil'
//             }, {
//                 id: 2,
//                 link: '',
//                 src: '',
//                 p1: 'Southeast U.S. poised for a firestorm of omicron cases',
//                 p2: 'Florida, Georgia, Louisiana and Mississippi are among the states experiencing the sharpest increases in covid-19 hospitalizations.',
//                 p3: 'By Fenit Nirappil'
//             }, {
//                 id: 3,
//                 link: '',
//                 src: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https%3A%2F%2Farc-anglerfish-washpost-prod-washpost%252Es3%252Eamazonaws%252Ecom%2Fpublic%2FAWLQ2YUBI5DHDFKPMCGWXMLFQA%252Ejpg&w=992&h=558',
//                 p1: 'Traffic still blocked on snowy I-95 in Va. after drivers were stranded overnight',
//                 p2: 'Officials have been struggling to get traffic moving again after it came to a standstill overnight, leaving motorists stranded for nearly 20 hours along a 48-mile stretch south of Washington.',
//                 p3: 'By Dana Hedgpeth, Hannah Natanson, Laura Vozzella, Meagan Flynn and Katherine Shaver'
//             }]
//         }
//     },
//     _reRender() {
//
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this._reRender = observer;
//     },
//     dispatch(action) {
//         this._state.contentPage = contentReducer(this._state.contentPage, action)
//         this._state.homePage = homePageReducer(this._state.homePage, action)
//         this._reRender(this._state);
//     }
// }
//
//
// export default store