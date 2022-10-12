
const cookieStorage = {
    getItem: (item) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[item];
    },
    setItem: (item, value,day) => {
        document.cookie = `${item}=${value};max-age=${day}`
    }
}

window.onmouseout=(event)=>{
    const storageType = cookieStorage;
    const consentPropertyName = '1';
    const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
    const saveToStorage = () => storageType.setItem(consentPropertyName, true);

    if(event.screenY<150){
        const value=shouldShowPopup()
        if(value){
               saveToStorage(storageType);

               let main= document.getElementById('root')
            
               const data=document.createElement('div')
               data.innerHTML=(`<body id="iapg" style="box-sizing: border-box; margin: 0; position:fixed">
               <div id="Template-One" class="coupon-popup-sec" style="box-sizing: border-box; margin-top: 30px; margin-right: auto; margin-bottom: 30px; margin-left: auto; color: rgb(255, 255, 255); padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; width: 550px; position: relative; font-family: Montserrat, sans-serif; text-transform: uppercase;"><div class="coupon-content" id="idec" style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 90px; padding-right: 0px; padding-bottom: 90px; padding-left: 0px; float: left; width: 100%; box-sizing: border-box; background: #000 url(images/freetrial_popup.jpg) no-repeat top left; background-size: cover;"><h4 style="box-sizing: border-box; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-size: 25px; font-weight: 600; padding-bottom: 30px;">start a free trial now</h4><div class="main_content" style="box-sizing: border-box; width: 100%; float: left; margin-bottom: 30px;"><div class="coupon-brdr-sec1" style="width: 38%; float: left; padding-top: 36.5px; padding-right: 0px; padding-bottom: 36.5px; padding-left: 0px; box-sizing: border-box; text-align: center; background-image: initial; background-position-x: initial; background-position-y: initial; background-size: initial; background-repeat-x: initial; background-repeat-y: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(255, 0, 0);"><h3 data-edit="text" style="box-sizing: border-box; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-size: 29px;">get 30%</h3><h2 data-edit="text" style="box-sizing: border-box; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-size: 68px; font-weight: 800;">off</h2><h5 data-edit="text" style="box-sizing: border-box; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-size: 18px;">on purchase</h5></div><div class="coupon-brdr-sec2" style="box-sizing: border-box; padding-top: 70px; padding-right: 0px; padding-bottom: 70px; padding-left: 0px; background-image: initial; background-position-x: initial; background-position-y: initial; background-size: initial; background-repeat-x: initial; background-repeat-y: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(0, 0, 0);"><button data-edit="button" class="code-now-btn" style="box-sizing: border-box; cursor: pointer; font-size: 27px; text-transform: uppercase; font-weight: 600; color: rgb(255, 255, 255); margin-top: 0px; margin-right: 0px; margin-bottom: 10px; margin-left: 0px; padding-top: 15px; padding-right: 25px; padding-bottom: 15px; padding-left: 25px; clear: both; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; background-image: initial; background-position-x: initial; background-position-y: initial; background-size: initial; background-repeat-x: initial; background-repeat-y: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(255, 0, 0); font-family: Montserrat, sans-serif;">get started</button></div></div><button class="coupon-cls-btn close-btn" style="box-sizing: border-box; font-size: 14px; line-height: 18px; width: 28px; height: 28px; border-top-left-radius: 50%; border-top-right-radius: 50%; border-bottom-right-radius: 50%; border-bottom-left-radius: 50%; background-image: initial; background-position-x: initial; background-position-y: initial; background-size: initial; background-repeat-x: initial; background-repeat-y: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(255, 255, 255); position: absolute; right: -14px; top: -14px; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; box-shadow: rgba(0, 0, 0, 0.27) 0px 0px 2px 0px; cursor: pointer;">X</button><p style="box-sizing: border-box; font-size: 17px; font-weight: 600; letter-spacing: 0.5px;">ready to start your 30 days free trial?</p></div></div>
           </body>`)
           main.appendChild(data)
           return main
               
              }
              }
        
    }

   document.onmouseenter=()=>{
    const storageType = cookieStorage;
    const consentPropertyName = '2';
    const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
    const saveToStorage = () => storageType.setItem(consentPropertyName, true);

    const value=shouldShowPopup()
    if(value){
           saveToStorage(storageType);
     setTimeout(()=>{
         let main= document.getElementById('root')
        
           const data=document.createElement('div')
           data.innerHTML=(`<body id="iapg" style="box-sizing: border-box; margin: 0;">
           <div id="Template-One" class="freedownloads-popup-sec"
           style="background-color: rgb(142, 142, 65); font-family: 'Roboto Slab', serif; width: 700px; margin-top: 30px; margin-right: auto; margin-bottom: 30px; margin-left: auto; padding-top: 45px; padding-right: 65px; padding-bottom: 65px; padding-left: 65px; box-sizing: border-box; position: relative; box-shadow: rgba(50, 50, 50, 0.52) 0px 10px 20px 0px; background: #8E8E41 url(images/freedownloads.jpg) no-repeat center center; background-size: cover;">
           <h2 data-edit="text"
           style="box-sizing: border-box; margin-top: 0px; margin-right: 0px; margin-bottom: 25px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; line-height: 88px; font-family: 'Roboto Slab', serif; font-size: 82px; color: rgb(255, 255, 0); font-weight: normal;">
           Wellcome Email popups</h2>
           <h4 data-edit="text"
           style="box-sizing: border-box; margin-top: 0px; margin-right: 0px; margin-bottom: 30px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; font-family: 'Roboto Slab', serif; font-size: 20px; color: rgb(255, 255, 255); font-weight: normal;">
           Unlimited Free Downloads Of Brochures<br style="box-sizing: border-box;">
           Flyers, Postcards and much more...</h4>
          <div class="freedownloads-email-sec"
          style="box-sizing: border-box; margin-top: 0px; margin-right: 0px; margin-bottom: 15px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; width: 100%; float: left; position: relative; box-shadow: rgba(0, 0, 0, 0.27) 5px 5px 5px 0px;">
          <input type="email" data-edit="placeholder" placeholder="Enter your email id"
          class="freedownloadsemail-input"
          style="width: 100%; background-image: initial; background-position-x: initial; background-position-y: initial; background-size: initial; background-repeat-x: initial; background-repeat-y: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(0, 0, 0); border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; height: 64px; float: left; padding-top: 16px; padding-right: 170px; padding-bottom: 16px; padding-left: 16px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; box-sizing: border-box; color: rgb(255, 255, 255);"><button
          type="submit" class="freedownloads-input-btn"
          style="outline-color: initial; outline-style: none; outline-width: initial; width: 160px; background-image: initial; background-position-x: initial; background-position-y: initial; background-size: initial; background-repeat-x: initial; background-repeat-y: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(255, 255, 21); height: 64px; cursor: pointer; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 17px; padding-right: 16px; padding-bottom: 17px; padding-left: 16px; float: right; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; font-family: 'Roboto Slab', serif; font-size: 22px; text-transform: uppercase; color: rgb(0, 0, 0); box-sizing: border-box; font-weight: bold; transition-duration: 0.4s; transition-timing-function: ease; transition-delay: 0s; transition-property: all; position: absolute; top: 0px; right: 0px;">signup</button>
          </div>
          <h6 data-edit="text"
          style="box-sizing: border-box; font-family: 'Roboto Slab', serif; font-size: 14px; letter-spacing: 0.4px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; color: rgba(255, 255, 255, 0.6); font-weight: normal;">
          * Terms and Conditions Apply</h6><button class="freedownloads-cls-btn close-btn"
           style="box-sizing: border-box; outline-color: initial; outline-style: none; outline-width: initial; font-size: 14px; line-height: 18px; width: 28px; height: 28px; border-top-left-radius: 50%; border-top-right-radius: 50%; border-bottom-right-radius: 50%; border-bottom-left-radius: 50%; background-image: initial; background-position-x: initial; background-position-y: initial; background-size: initial; background-repeat-x: initial; background-repeat-y: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(255, 255, 255); position: absolute; right: -14px; top: -14px; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; box-shadow: rgba(0, 0, 0, 0.27) 0px 0px 2px 0px; cursor: pointer;">X</button>
          </div>
          </body>`)
       main.appendChild(data)
       return main
           

     },2000)
           
          }

   }


   window.addEventListener("mousedown",()=>{
    const storageType = cookieStorage;
    const consentPropertyName = '3';
    const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
    const saveToStorage = () => storageType.setItem(consentPropertyName, true);

    const value=shouldShowPopup()
    if(value){
           saveToStorage(storageType);
     setTimeout(()=>{
         let main= document.getElementById('root')
        
           const data=document.createElement('div')
           data.innerHTML=(` <div id="Template-One" style="background-color: rgb(142, 142, 65); margin-left:10px font-family: 'Roboto Slab', serif; width: 200px; margin-top: 300px; margin-right: auto; margin-bottom:0px; padding-top: 45px; padding-right: 65px; padding-bottom: 65px; padding-left: 0px; box-sizing: border-box; position: relative; box-shadow: rgba(50, 50, 50, 0.52) 0px 10px 20px 0px; background: #8E8E41 url(images/freedownloads.jpg) no-repeat center center; background-size: cover;">
           <label>
           Coupon popups</label>
           <p>50% Diwali Offer</p></div>`)
       main.appendChild(data)
       return main
           

     },5000)
           
          }
  })


 setTimeout(() => {
 let Addtocart=document.getElementById('addcart')
 Addtocart.addEventListener("click",()=>{
    const storageType = cookieStorage;
    const consentPropertyName = '4';
    const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
    const saveToStorage = () => storageType.setItem(consentPropertyName, true);
    const value=shouldShowPopup()
    if(value){
        saveToStorage(storageType)

        let main= document.getElementById('root')
        
           const data=document.createElement('div')
           data.innerHTML=(`<div id="iapg" style="alignItem:center; top:0px; width:300px; height:100px; border:3px solid #00FF00; margin-left: 1200px;
           position: absolute">
           <h1 style="color:#30F;"align="center">AddtoCart popups</h1>
           <p style="font-family:Arial, Helvetica, sans-serif; align:left; color:#F00;">40% Diwali offer</p>
            </div>`)
       main.appendChild(data)
       return main

    }
    
 })
    
 }, 1000);


 setTimeout(()=>{
        let main = document.getElementById('root')
        const data = document.createElement('div')
        data.innerHTML = (`<div id="iapg" style="alignItem:center; top:0px; width:300px; height:100px; border:3px solid #03F; margin-left: 250px;
        position: absolute">
        <h1 style="color:#30F;"align="center">Banner popups</h1>
        <p style="font-family:Arial, Helvetica, sans-serif; align:left; color:#F00;">40% Diwali offer</p>
         </div>`)
        main.append(data)
     return main
    }

 ,1000)
    