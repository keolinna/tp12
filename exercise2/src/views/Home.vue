<template>
  <div class="container">

    <div class="sidenav" >
      <div class="hreader_sidebar text-center">SHOP</div>
      <div >
          <a href="#about" @click="category_click"> Category</a>
          <a href="#new"   @click="subcategory_click">Subcategory</a>
          <a href="#asd"   @click="product_click" >Product</a>
      </div>
     
    </div>
    
     
    <div class="category">
        <div class="title">
          <h1>WELCOME TO ADMIN DASH BOARD</h1>
        </div>
      
        <div class="data" v-show="display_category">

          <div class="button_add">
            <button type="button" class="btn btn-primary" @click="create_cat">CREATE CATEGORY</button>
          </div>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Category Title</th>
                <th scope="col"> </th>

              </tr>
            </thead>
            <tbody>
              
                <tr v-for="c in category" :key="c.name">
                  <th scope="row">{{c._id}}</th>
                  <td>{{c.name}}</td>
                  <td>Edit Delete</td>
                </tr>
            
  
            </tbody>
          </table>
        </div>


        <div class="data" v-show="display_subcategory">
          <div class="button_add">
            <button type="button" class="btn btn-primary" @click="create_sub">CREATE SUBCATEGORY</button>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Subcategory</th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="s in subcategory" :key="s.name">
                <th scope="row">{{s._id}}</th>
                <td>{{s.name}}</td>
                <td>Edit Delete</td>
              </tr>
             
            </tbody>
          </table>
        </div>


        <div class="data" v-show="display_product">
          <div class="button_add">
            <button type="button" class="btn btn-primary" @click="create_pro">CREATE PRODUCT</button>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Subcategory</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Normal Price</th>
                <th scope="col">InstocK</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="p in product" :key="p.name">
                <th scope="row">{{p._id}}</th>
                <td>{{p.name}}</td>
                <td>{{p.description}}</td>
                <td>{{p.price}}</td>
                <td>{{p.countInStock}}</td>
                <td>Edit Delete</td>
              </tr>
             
            </tbody>
          </table>
        </div>



    </div> 




        <div class="popup " v-show="popup_category==true">

          
          <div class="title text-center" style="width:100%; margin-bottom: 25px; color:white;">
            <h3>Create Category</h3>
          </div>
          
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label" style="color: white;" >Name</label>
            <input  v-model="category_name"  type="email" class="form-control" id="exampleFormControlInput1" placeholder="Phone, Computer ....">
          </div>
          <div style="width:100%" class="text-center  group_button">
              <button type="button" class="btn btn-outline-success text-center" style="color: white;border: solid white;" @click="submit_cat">SUBMIT</button>
               <button type="button" class="btn btn-outline-danger text-center" style="color: black;border: solid white;" @click="cancel_cat">CANCEL</button>
          </div>
          
        </div>

        <div class="popup" v-show="popup_subcategory==true">
          
          
          <div class="title text-center" style="width:100%; margin-bottom: 25px; color:white;">
            <h3>Create Subcategory</h3>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label" style="color: white;" >Subcategory Title</label>
            <input v-model="subcategory_name" type="email" class="form-control" id="exampleFormControlInput1" placeholder="Iphone,Samsung....">
          </div>
          
          <div class="mb-3">
           <label for="exampleFormControlInput1" class="form-label" style="color: white;" >Category</label>
            <select v-model="subcategory_category" class="form-select" aria-label="Default select example" >
              <option selected>Select Category</option>
              <option   v-for="c in category" :key="c.name" >{{c.name}}</option>

            </select>
          </div>
          <div style="width:100%" class="text-center group_button">
              <button type="button" class="btn btn-outline-success text-center" style="color: white;border: solid white;" @click="submit_sub">SUBMIT</button>
               <button type="button" class="btn btn-outline-danger text-center" style="color: black;border: solid white;" @click="cancel_sub">CANCEL</button>
          </div>
         
        </div>



        <div class="popup" v-show="popup_product==true">
          

          <div class="title text-center" style="width:100%; margin-bottom: 25px; color:white;">
            <h3>Create Product</h3>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label" style="color: white;" >Product Name</label>
            <input v-model="product_name"  type="email" class="form-control" id="exampleFormControlInput1" placeholder="Iphone11, Iphone12 ....">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label" style="color: white;" >Description</label>
            <input v-model="product_description" type="email" class="form-control" id="exampleFormControlInput1" placeholder="Memory 256g color red.......">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label" style="color: white;" >Price</label>
            <input v-model="product_price" type="email" class="form-control" id="exampleFormControlInput1" placeholder="560, 950, ...">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label" style="color: white;" >Count In Stock</label>
            <input v-model="product_countinstock" type="email" class="form-control" id="exampleFormControlInput1" placeholder="11, 15, ....">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label" style="color: white;" >Subcategory</label>
            <select v-model="product_subcategory" class="form-select" aria-label="Default select example">
              <option selected>Select Subcategory</option>
              <option v-for="s in subcategory" :key="s.name" >{{s.name}}</option>
            </select>
          </div>
 
          
          <div style="width:100%" class="text-center  group_button">
            <button type="button" class="btn btn-outline-success text-center" style="color: white;border: solid white;" @click="submit_pro">SUBMIT</button>
             <button type="button" class="btn btn-outline-danger text-center" style="color: black;border: solid white;" @click="cancel_pro">CANCEL</button>
          </div>
        </div> 






  </div> 
  

</template>


<script>

import axios from 'axios';

export default {

  data(){
    return{
      //status for show
     display_category:true,
     display_subcategory:false,
     display_product:false,
     popup_category:false,
     popup_subcategory:false,
     popup_product:false,
     //data
     category:null,
     subcategory:null,
     product:null,
     price:null,
     //Data input
     subcategory_name:null,
     subcategory_category:null,
     
     category_name:null,
    
    //product 
     product_name:null,
     product_description:null,
     product_price:null,
     product_subcategory:null,
     product_countinstock:null,
     product_image:'',


    }
  },
  methods:{
    category_click(){

      //show 
        this.display_category=true;
      //close data table 
        this.display_subcategory=false;
        this.display_product=false;
      //Close popup from another
        this.popup_subcategory=false;
        this.popup_product=false;
       
    },
    subcategory_click(){
         
        this.display_subcategory=true;
      //close data table 
        this.display_category=false;
        this.display_product=false;
      //Close popup from another
        this.popup_category=false;
         this.popup_product=false;

       
    },
    product_click(){
         
        this.display_product=true;

        this.display_category=false;
        this.display_subcategory=false;

        //Close popup from another
        this.popup_category=false;
         this.popup_subcategory=false;
        
    },
    create_cat(){
      
        this.popup_category=true;
        
    },
    submit_cat(){
 
      const article = {cat_name:this.category_name}
      axios.post(`http://localhost:3001/api/category/create`,article)
      .then(response => (
        this.info = response
      ))
      .then(()=>{
        if(this.info){
          if(this.info.data.msg=='success'){
            alert("Create Success");

          }else{
            alert("Create False");
          }
        }
      })


        this.popup_category=false;
    },
    cancel_cat(){
      this.popup_category=false;
    },
    create_sub(){
        this.popup_subcategory=true;
    },
    submit_sub(){

      if(this.subcategory_category==null){
        alert("Cannot Create Because You donot select Category Name");
      }else{
         const article = {cat_name:this.subcategory_category,sub_name:this.subcategory_name};
          axios.post(`http://localhost:3001/api/subcategory/create`,article)
          .then(response => (
            this.info = response
          ))
          .then(()=>{
            if(this.info){
              if(this.info.data.msg=='success'){
                alert("Create Success");
              }else{
                alert("Create False");
              }
            }
          })
      }
     


        this.popup_subcategory=false;
    },
    cancel_sub(){
      this.popup_subcategory=false;
    },
    
    create_pro(){
        this.popup_product=true;
    },
    submit_pro(){

      if(this.product_subcategory==null){
        alert("Create Product False");
      }else{
        
          const article = {
              name:this.product_name,
              description:this.product_description,
              price:this.product_price,
              SubCategory:this.product_subcategory,
              countInStock:this.product_countinstock,
              image:this.product_image
          }

            axios.post(`http://localhost:3001/api/product/create`,article)
                  .then(response => (
                    this.info = response
                  ))
                  .then(()=>{
                    if(this.info){
                      if(this.info.data.msg=='success'){
                        alert("Create Success");

                      }else{
                        alert("Create False");
                      }
                    }
                  })
      }
      

        this.popup_product=false;
    },
    cancel_pro(){
      this.popup_product=false;
    },
      
  },
  mounted () {
   
    axios.get(`http://localhost:3001/api/category`)
        .then(response => (
          this.info = response
        ))
        .then(()=>{
          if(this.info){
            if(this.info.data.msg=='success'){
              this.category = this.info.data.datas;
            }else{
              alert("Error1");
            }
          }
    })
    axios.get(`http://localhost:3001/api/subcategory`)
        .then(response => (
          this.info = response
        ))
        .then(()=>{
          if(this.info){
            
            if(this.info.data.msg=='success'){
              this.subcategory = this.info.data.datas;
            }else{
              alert("Error2");
            }
          }
        })
   
     axios.get(`http://localhost:3001/api/product`)
        .then(response => (
          this.info = response
        ))
        .then(()=>{
          if(this.info){
          
            if(this.info.data.msg=='success'){
              this.product = this.info.data.datas;
            }else{
              alert("Error3");
            }
          }
        })
      
  },
  watch: {
    category: function () {
       console.log('Change Category');
    },
    subcategory: function () {
       console.log('Change Subcategory');
    },
    product: function () {
       console.log('Change Product');
    },
  },

}
</script>




<style scoped>
     .container{
       
      width: 100vw;
      margin-top: 1vh;
      padding: 1vh;
      display: flex;
      /* background-color: aqua; */
      font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif ;
    }
    .hreader_sidebar{
      margin-bottom: 15px ;
      font-size: 25px;
      font-weight: bold;
      color:chocolate;
      background-color: antiquewhite;
    }

   .sidenav {
    text-align: left;
    height: 100%;
    width: 180px;
    /* background-color: ; */
    overflow-x: hidden;
    padding-top: 10px;
    border: 2px solid;
    margin-right: 15px ;
    
  }

    .sidenav a {
      padding: 6px 8px 6px 16px;
      text-decoration: none;
      font-size: 18px;
      color: black;
      display: block;
      font-weight: bold;
      color:coral;
      margin-top: 10px ;
    }


    .sidenav .subnav{
 
      width: 100%;
      padding-left: 35px ;
      
    }

    .sidenav a:hover {
      color: #f1f1f1;
    }

    .subnav {
      height: 100%;
      width: 140px;
      /* background-color: ; */
      text-align: left;
      overflow-x: hidden;
      padding-top: 5px;
   
    }

    .subnav a {
      padding: 6px 8px 6px 16px;
      text-decoration: none;
      font-size: 15px;
      color: black;
      display: block;
    }

    .subnav a:hover {
      color: #f1f1f1;
      background-color:cadetblue;
      border-radius:10px;
      
    }

    .subnav a:active {
      color: #f1f1f1;
      background-color:rgb(194, 12, 200);
      border-radius:10px; 
    }

    .category{
      width: 80vw;
      padding: 2vw;
      height: auto;
      border-radius: 5px;
      border: solid 1px;
    }

    .category .title{
      display: flex;
      margin-bottom: 2vh;
    }
    .category h1{
      background-color: coral;
      width: 40vw;
      font: 1.8em sans-serif;
      text-align: center;
      color: white;
      border-radius: 15px 0px 15px 0px;
  
    }
    .category .button_add{
      width: 15vw;
      margin-bottom: 15px;
    }

    .popup{
     
      position: absolute;
      top: 25%;
      left: 25%;
      border: solid 2px white;
      border-radius: 20px;
      background-color:  coral;
      width: 50vw;
      padding: 40px;
      text-align: left;
      
    }

    .popup  .group_button{
      margin-top: 50px ;
    }


</style>