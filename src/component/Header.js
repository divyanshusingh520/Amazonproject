import '../App.css';
import htmlimg from '../images/unnamed.webp'
import htmimg from '../images/cart.jpg'
function Header( )
{
    
    return (
        <div className="header">
         
           <div className="top">
               <div className="first">
               <img src= {htmlimg} alt =''/>
               
               </div>
               <div className="search">
                
                   <div className="searchbar">
                     
                     <input type="text" placeholder="Search for products,brands and more"></input>
                       <div className="small">
                       

                       <i class="fa fa-search"></i>
                   </div>
                   </div>
               </div>
               <div className='cart'>
               <img src= {htmimg} alt =''/>
               </div>
               <div className='sign'>
                  <div className='signin' >
                      <div className='internal'>Sign In</div>
                  </div>
               </div>

           </div>
          
        </div>

    )  
}
export default Header;