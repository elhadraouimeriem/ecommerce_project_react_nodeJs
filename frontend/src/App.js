import logo from './logo.svg';
import './App.css';
import { ProductList } from './compenents/compenent.product.list';
import { ProductAddForm } from './compenents/compenent.product.add';
import { ContactForm } from './compenents/compenent.contacts';
import{Routes,Route}from 'react-router-dom';
import { AdminLayout } from './compenents/compenent.admin.layout';
import { Home } from './compenents/compenent.home';
import { ConnexionForm } from './compenents/compenent.connexion';
import { SignUpForm } from './compenents/compenent.sign-up';
import { ProductEditForm } from './compenents/compenent.product.edit';
function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout/>}>
      <Route path='products' element={<ProductList/>}/>
      <Route path='products/new' element={<ProductAddForm />}/>
      <Route path='contacts' element={<ContactForm/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='connexion' element={<ConnexionForm/>}/>
      
      <Route path='sign-up' element={<SignUpForm/>}/>
      <Route path='product/edit/:id' element={<ProductEditForm/>}/>


      </Route>
      

   </Routes>
    
  );
}

export default App;
