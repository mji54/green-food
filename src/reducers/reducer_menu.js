// import { SIGNED_IN } from '../constants';
import { UPDATE_SEARCH, FILTER_MENU } from '../constants';

import { Menu } from '../menu';

// let user = {
//   email: null
// }

// const menu = [
//   {
//     id: 1,
//     title: 'Green Salad',
//     price: 14.99,
//     keywords: ['organic', 'veggies', 'vegetables', 'green', 'salad', 'green salad']
//   },
//   {
//     id: 2,
//     title: 'Organic Fish',
//     price: 16.99,
//     keywords: ['organic', 'fish', 'organic fish', 'seafood']
//   },
//   {
//     id: 3,
//     title: 'Organic Meat',
//     price: 12.99,
//     keywords: ['organic', 'meat', 'organic meat']
//   },
//   {
//     id: 4,
//     title: 'Organic Combo',
//     price: 21.99,
//     keywords: ['organic', 'organic combo', 'combo', 'mix']
//   },
//   {
//     id: 5,
//     title: 'Non-organic Pasta',
//     price: 9.99,
//     keywords: ['non-organic', 'not organic', 'pasta', 'non-organic pasta']
//   },
// ]

function searchingFor(menu, term) {
  // console.log(menu);
  const results = menu.filter(category => {
    // console.log(term.toLowerCase());
    // console.log(x)



    category.hasOwnProperty("cheese") ?
    (
      category[Object.keys(category).filter( k => k !== 'cheese')[0]].map( dish =>
        return (dish.keywords.join().toLowerCase().split(',').indexOf(term.toLowerCase()) > -1) || !term
      )
    ):
    (
      category[Object.keys(category)[0]].map( dish =>
        return (dish.keywords.join().toLowerCase().split(',').indexOf(term.toLowerCase()) > -1) || !iterm
      )
    )

            // (dish.keywords.join().toLowerCase().split(',').indexOf(term.toLowerCase()) > -1) || !term


    // console.log(x.keywords.join().toLowerCase().split(',').indexOf(term.toLowerCase()));
    // return (x.keywords.join().toLowerCase().split(',').indexOf(term.toLowerCase()) > -1) || !term;
    }
  )

  console.log(results);
  return results;

}

export default (state = { menu: Menu }, action) => {
  let new_menu = [];
  switch (action.type) {
    case UPDATE_SEARCH:
      const { term } = action;
      new_menu = {
        menu: [...Menu],
        term: term
      };
      return new_menu;
      // return [...state, action.term];

    case FILTER_MENU:
      // console.log(state);
      new_menu = {
        menu: [...searchingFor(state.menu, action.term)],
        term: ''
      };
      // console.log(new_menu);
      return new_menu;
    // case SIGNED_IN:
    //   const { email } = action;
    //   user = {
    //     email
    //   }
    //   return user;

    default:
      return state;
  }
}
