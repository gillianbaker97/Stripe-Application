import { configureStore } from '@reduxjs/toolkit'
import CategoryMenu from '../components/CategoryMenu'
import DeleteBtn from '../components/DeleteBtn'
import Jumbotron from '../components/Jumbotron'
import Nav from '../components/Nav'
import ProductItem from '../components/ProductItem'
import ProductList from '../components/ProductList'

export default configureStore({
    reducer: {
        menu: CategoryMenu,
        delete: DeleteBtn,
        jumbo: Jumbotron,
        nav: Nav,
        item: ProductItem,
        list: ProductList,
    }
});