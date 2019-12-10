import { shallow } from "enzyme";

// Components
import ButtonShoppingCart from '../components/ButtonShoppingCart.js'
import ButtomArticle from '../components/ButtonArcticle.js';
import Card from '../components/Card.js';
import SearchBar from '../components/SearchBar.js';
import Articles from '../screen/Articles.js';
import ShoppingCart from '../screen/ShoppingCart.js';

// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("Simple test of Components ", () => {
    test("Should render ButtonShoppingCart Component", () => { 
    const wrapper = shallow(<ShoppingCart></ShoppingCart>);
        console.log(<ShoppingCart/>)
        // expect(wrapper).toBeTruthy();
     })

    // test("Should Render ButtomArticle Component", () => { 
    //     const wrapper = shallow(<ButtomArticle></ButtomArticle>);
        
    //     expect(wrapper).toBeTruthy();
    // })
    // test("Should Render to Card Component", () => { 
    //     const wrapper = shallow(<Card></Card>);
        
    //     expect(wrapper).toBeTruthy();
    // })
    // test("Should Render to SearchBar Component", () => { 
    //     const wrapper = shallow(<SearchBar></SearchBar>);
        
    //     expect(wrapper).toBeTruthy();
        
    // })
    // test("Should Render to Articles Component", () => { 
    //     const wrapper = shallow(<Articles></Articles>);
        
    //     expect(wrapper).toBeTruthy();
        
    // })
    // test("Should Render to ShoppingCart Component", () => { 
    //     const wrapper = shallow(<ShoppingCart></ShoppingCart>);
        
    //     expect(wrapper).toBeTruthy();

    //  })
})

// describe("testing behaviour of Articles page", () => {
//     test("Should upload the article from api", () => { 

//      })
//     test("Should search for x book", () => { 

//      })
//     test("Should add book in shoppingCart", () => { 

//      })
// })

// describe("testing behaviour of ShoppingCart page", () => {
//     test("Should lead to ShoppingCart page", () => { 

//      })
//     test("Should have to 2 added in cart", () => { 

//      })
//     test("Should suggest x offer", () => { 

//      })
//     test("Should have to 4 added in cart", () => { 

//      })
//     test("Should suggest x offer", () => { 

//      })
//     test("Should suggest x offer", () => { 

//      })
//     test("Should buy offer should send the user on ShoppingCart")
// })
