import { shallow } from "enzyme";
import React from 'react'
import fetch from 'node-fetch'
// Components
import ButtonShoppingCart from '../components/ButtonShoppingCart.js'
import ButtonArticle from '../components/ButtonArcticle.js';
import Card from '../components/Card.js';
import SearchBar from '../components/SearchBar.js';
import Articles from '../screens/Articles.js';
import ShoppingCart from '../screens/ShoppingCart.js';
import Navbar from '../components/Navbar.js';

// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("Component : ", () => { 

    describe("when ButtonArticle is called", () => {
        test("it should be render", () => { 
            const wrapperButtonArticle = shallow(<ButtonArticle/>)
            expect(wrapperButtonArticle).toBeTruthy()
         })
    })
        
    describe("When Card is called", () => { 
        test("it should be render", () => { 
            const wrapperCard = shallow(<Card/>)
            expect(wrapperCard).toBeTruthy()
            })
        })
            
    describe("When SearchBar is called", () => { 
        test("it should be render", () => { 
            const wrappersearchBar = shallow(<SearchBar/>)
            expect(wrappersearchBar).toBeTruthy()
        })
            
    })
                
    describe("When Navbar is called", () => { 
        test("it should be render", () => { 
            const wrapperNavbar = shallow(<Navbar/>);
            expect(wrapperNavbar).toBeTruthy();
        })
    })

    // describe("When Footer is called", () => { 
    //     test("it should be render", () => { 
    //         const wrapperFooter = shallow(<Footer/>)
    //         expect(wrapperFooter).toBeThrusty()
    //     })
    // })
})

describe("Articles page", () => {
    let wrapperArticle = shallow(<Articles/>);

    console.log(wrapperArticles);
    describe("When is loaded ", () => {
        test("", () => { 

        })
    })
    
    describe("When user search for x filter to", () => { 
        test("", () => { 
            
        })
        
    })
    
    describe("When user click on 1 article ", () => { 
        test("", () => { 
            
        })
    })
    
    describe("When user click on 1 article ", () => { 
        test("", () => { 
            
        })  
    })
})

describe("Shopping cart page", () => { 
    describe("When is loaded ", () => { 
        test("should ", () => { 

         })
    })

    describe("When is loaded ", () => { 
        test("", () => { 

         })
    })

    describe("When is loaded ", () => { 
        test("", () => { 

         })
    })
    describe("When is loaded ", () => { 
        test("", () => { 

         })
    })
    describe("When is loaded ", () => { 
        test("", () => { 

         })
    })

    describe("When is loaded ", () => { 
        test("", () => { 

         })
    })
    // when no article is selectioned should render nothing
    // when no article is selectioned and we click to return 
    // when article is selectioned should a offers of render x
    // when return to should have nothng in is shoping cart
    // when article is selectioned should render x
})

