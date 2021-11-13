import React from 'react';
import './App.css';
import Sidebar from './navbar/Sidebar'
import { navLinks } from "./data";
import './navbar/Navbar.css'


function App() {
  return (
    <div className="">
      <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4 col-md-3 nav">
          <div className="navbar d-block">
            {navLinks.map((link)=>{
              const {links} = link;
              return (
              <div>       
                {links.map((link_id)=>{
                const {id, link, icon} = link_id;
                return (
                  <div key={id} className='navbar-link w-100'>
                  <div className="icon">{icon}</div>
                  <span>{link}</span>
                  </div>
                )
                })}
                <hr/>
              </div>
              )
            })}
          </div>
        </div>
        <div className="col-sm-8 col-md-9 big w-100">
          <Sidebar/>
          <hr/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illo cumque quasi quas odit eligendi doloremque voluptate veritatis ipsam, laudantium modi delectus eos dignissimos esse facilis atque dolores cum ipsum dolorum incidunt nisi dolore magni veniam! Sit consequuntur vero nesciunt incidunt eum alias expedita sequi quo? Nisi minus aut tempore eum fugiat vel perspiciatis ipsam numquam, obcaecati, architecto, consequatur atque minima eveniet nihil labore asperiores voluptate mollitia! Asperiores qui repudiandae quibusdam corporis provident corrupti quaerat officia eaque sint in ab exercitationem veniam doloribus, ipsam amet vel magni, esse dolor quod nihil tempore suscipit ipsa excepturi. Quo natus, nulla quibusdam numquam voluptatibus voluptatem! Amet architecto officia ex minima aut libero quibusdam officiis numquam magnam! Error quas deserunt magni laboriosam vitae repudiandae nisi eius, unde expedita eaque, debitis est illum voluptatem tempora blanditiis recusandae veritatis, adipisci natus sit sapiente perspiciatis iusto. Inventore quasi fugit, odio similique recusandae ipsam nostrum totam, ducimus laboriosam numquam nemo tenetur! Nam dicta libero, laudantium consectetur laboriosam recusandae repellat modi similique repellendus! Qui commodi alias debitis fugit quisquam autem enim ab beatae cupiditate soluta. Dignissimos officia suscipit voluptatum nobis. Reiciendis qui voluptas quibusdam maxime delectus id consectetur fugiat vel aliquid repellat. Accusantium praesentium ratione, eveniet atque autem veritatis adipisci eligendi. Esse expedita provident molestias earum ipsam molestiae quas ex beatae magni pariatur ea porro possimus nostrum repellendus vel dolorum, cumque, dolorem eum explicabo facilis numquam a. Explicabo ipsum optio accusantium, nam minima molestias aliquid delectus quaerat? Eos ex quia unde, minima dolores nulla vel placeat? Cum id, provident nobis eveniet dolorum facilis nulla soluta aperiam eligendi dolorem doloremque. Ipsum harum fuga animi sed delectus officia ut aspernatur possimus exercitationem enim obcaecati assumenda consectetur, eum ducimus, at, dicta aperiam. Cupiditate consequuntur possimus esse perspiciatis animi voluptatum veritatis. Ipsum similique aliquam atque at commodi aspernatur hic sint possimus perferendis voluptatum! Ipsam nobis cum eius ad sed ut consectetur cumque esse nisi sunt, culpa magnam voluptates deserunt suscipit modi numquam labore molestias soluta tempore alias corporis? Modi et minima odit sit laudantium. Cum nemo cupiditate rerum labore impedit et tenetur pariatur ducimus, maiores inventore nulla dolores provident alias in, consectetur voluptas blanditiis sint numquam enim! Quis maxime tempora minima suscipit assumenda, unde voluptatem molestias dignissimos totam fuga quos quasi incidunt esse facilis modi! Aliquid quo iusto magnam perspiciatis commodi. Unde minima, a totam quisquam, eveniet esse placeat ipsam, non mollitia corrupti laborum labore beatae quo qui. Doloribus ut nisi modi debitis consectetur dolor quia. Soluta perferendis non id. Cumque alias esse voluptate voluptatum nulla numquam perspiciatis minus nobis quia, adipisci quidem. Deserunt maiores quia laborum voluptas repellendus accusamus reprehenderit possimus recusandae neque aut praesentium provident error esse accusantium quasi, ab ipsa quidem labore quis exercitationem? Suscipit veritatis, provident harum nemo in dolorum incidunt. Reprehenderit provident, beatae eos aspernatur incidunt, possimus voluptatibus ducimus velit harum et eius maiores numquam officiis deserunt soluta labore veniam, dolore quaerat consequatur temporibus cupiditate nulla in. Ducimus, distinctio ex. Similique consequatur rem velit, at vero possimus amet repellendus maiores dignissimos quo nisi esse maxime officia, aliquam ducimus. Debitis eaque aliquam veniam molestias sed voluptatibus! Fugit, provident. Veniam ea deserunt sapiente explicabo atque molestias nesciunt enim odit est nisi fuga accusantium quidem consequuntur totam suscipit cumque soluta, quae illum eaque ipsa consectetur! Facilis, esse excepturi beatae eos in non molestias? Nulla ipsum eveniet laudantium fugiat saepe sit iure neque officiis fuga esse illo nobis, libero, laboriosam doloribus reprehenderit temporibus ab sunt quo molestias cumque eos id. Optio quis beatae rem velit itaque possimus nostrum obcaecati, et nihil placeat, voluptatum accusamus sunt? Incidunt voluptas possimus asperiores laboriosam architecto aliquam explicabo quibusdam adipisci voluptatem maxime vero facere, hic nisi deleniti maiores commodi corrupti fuga repellendus velit alias? Perferendis corporis magni, eveniet porro iusto quisquam quibusdam. Optio laudantium sequi ex ad ullam omnis soluta eligendi velit! Iste sapiente, odit cupiditate corporis quas cum earum eligendi iusto temporibus in aspernatur placeat inventore ullam vero assumenda magnam deserunt pariatur ipsa alias, natus nam blanditiis laborum sint. Deserunt ipsa voluptatum tenetur nulla libero aliquid nihil ea, saepe laudantium sapiente repellat officiis! Molestiae ratione suscipit, magnam in laboriosam nihil nobis enim repudiandae omnis hic nostrum rem consectetur aliquam, assumenda quo atque ducimus cum a dolorem pariatur harum. Placeat natus cupiditate aliquid tempora at voluptatem quaerat pariatur repudiandae unde nesciunt sint omnis odio blanditiis optio dignissimos, consectetur dolorum illum praesentium corporis aspernatur. Commodi quam deserunt sit. Pariatur officia molestias obcaecati qui libero repellendus natus sapiente quae sed maiores ipsa eos error, earum eaque. Perferendis adipisci repellendus nobis quae veritatis ducimus fugit, in, voluptatum, ex vero labore dolores excepturi incidunt facere aspernatur eligendi iste reprehenderit beatae officia quibusdam provident? Nesciunt magni deserunt repudiandae totam rem dolorem amet iure tenetur doloremque error illum nobis, quibusdam ipsam odio. Adipisci ut mollitia voluptatibus deleniti saepe molestias possimus, voluptatum eveniet quidem aperiam, atque magnam nihil fugiat odio voluptas omnis iste nostrum ipsum impedit. Commodi incidunt vero sit excepturi soluta. Animi, eligendi molestias facilis labore magni odio nesciunt mollitia. Ipsum, vel minima ea et expedita illum accusamus nisi nesciunt quae ullam porro laboriosam asperiores sequi quasi delectus facere saepe accusantium tenetur non nemo in enim, ipsam reprehenderit iusto. Nisi repudiandae dolorum a, corporis possimus deserunt sunt asperiores, magni accusantium temporibus impedit est. Nam laborum, sunt natus, magni reiciendis modi tempore sint temporibus blanditiis asperiores, soluta error atque! Distinctio laudantium doloribus est eaque accusamus illum asperiores ipsum incidunt? Voluptatibus repudiandae aspernatur voluptate aliquid praesentium. Deserunt, veritatis qui nostrum possimus facilis quas mollitia soluta eos officiis laudantium doloremque illo aperiam exercitationem harum dolor, quos sint dolorum odio. Laborum modi eos tempore, voluptate praesentium sint excepturi dolores et quod non nam asperiores ipsam corrupti consequatur ratione neque impedit eaque. Deserunt possimus atque placeat vero sit dicta in aut, voluptates libero perferendis error rem rerum dolorem nostrum eaque consectetur laudantium at harum eos eum quisquam iste! Enim dolore quia expedita, quos, voluptatem facere repellat optio hic consectetur sapiente dignissimos, iste deleniti quo. Odio, dolore asperiores hic consectetur, tempora perferendis ea dignissimos ducimus impedit maiores adipisci. Quaerat porro magni consectetur maiores, impedit incidunt et aperiam perferendis ipsa?
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
