let Enter = document.querySelectorAll(".patient_details_fill form input");
let Post = document.querySelectorAll(".part_2 .line input");

Enter.forEach((item) => {
  item.onkeyup = (e) => {
    let phoneOne = item.classList.contains("client_phone");
    let nameOne = item.classList.contains("client_name");
    let ageOne = item.classList.contains("client_age");
    let fatherOne = item.classList.contains("client_father");
    let fPhoneOne = item.classList.contains("client_f_phone");
    e.preventDefault();
    let val1 = e.target.value;

    Post.forEach((itemTwo) => {
      let phoneTwo = itemTwo.classList.contains("client_phone");
      let nameTwo = itemTwo.classList.contains("client_name");
      let ageTwo = itemTwo.classList.contains("client_age");
      let fatherTwo = itemTwo.classList.contains("client_father");
      let fPhoneTwo = itemTwo.classList.contains("client_f_phone");

      if (
        (phoneOne && phoneTwo) ||
        (nameOne && nameTwo) ||
        (ageOne && ageTwo) ||
        (fatherOne && fatherTwo) ||
        (fPhoneOne && fPhoneTwo)
      ) {
        itemTwo.value = val1;
        val1.value = "";
      }
    });
  };
});

let patentDetailsActive = document.querySelectorAll(".detail_fill");
let patentDetailsActiveTitle = document.querySelectorAll(".detail_fill_title");

patentDetailsActiveTitle.forEach((i) => {
  i.addEventListener("click", () => {
    i.parentElement.classList.toggle("active");
  });
});

let mLogo = document.getElementById("medical_logo");
let inputMLogo = document.querySelector(".input_medical_logo");

mLogo.addEventListener("click", () => {
  inputMLogo.click();
});

inputMLogo.addEventListener("change", function () {
  let file = this.files[0];
  if (file) {
    let reader = new FileReader();
    reader.onload = function () {
      let result = reader.result;
      mLogo.src = result;
    };

    reader.readAsDataURL(file);
  }
});

let itemAdd = document.querySelector(".tab_add_btn");
let capAdd = document.querySelector(".cap_add_btn");
// let sirupAdd = document.querySelector(".sirup_add_btn")
let othersAdd = document.querySelector(".others_add_btn");

// let tab_line = document.querySelector(".tab_line");
let tabAddTwp = document.querySelector("span.tablets");
// let sirupAddTwp = document.querySelector(".ext_add_btn.sirups")
let othersAddTwp = document.querySelector(".ext_add_btn.others");
let capAddBtnTwo = document.querySelector(".ext_add_btn.capsule");

let tabAddThree = document.querySelector(".title_btn.tab");
let tabAddFour = document.querySelector(".tab_line > div:nth-child(2) > div:nth-child(1) > span:nth-child(3)")
let capAddThree = document.querySelector(".title_btn.cap");
let capAddFour = document.querySelector(".cap_line > div:nth-child(2) > div:nth-child(1) > span:nth-child(3)");
// let sirupAddThree = document.querySelector(".title_btn.sirup")
let othersAddThree = document.querySelector(".title_btn.others");
let keyPressOther = document.querySelector(".others_line > h3:nth-child(1) > p:nth-child(1) > input:nth-child(1)")


// let itemRemove = document.querySelectorAll(".text div .remove_btn");

// itemRemove.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.parentElement.parentElement.remove();
//   });
// });

itemAdd.addEventListener("click", tabAddFunc);
tabAddTwp.addEventListener("click", tabAddFunc);
tabAddThree.addEventListener("click", tabAddFunc);
tabAddFour.addEventListener("click", tabAddFunc);

capAdd.addEventListener("click", capAddFunc);
capAddBtnTwo.addEventListener("click", capAddFunc);
capAddThree.addEventListener("click", capAddFunc);
capAddFour.addEventListener("click", capAddFunc);

// sirupAdd.addEventListener("click", sirupAddFunc );
// sirupAddTwp.addEventListener("click", sirupAddFunc );
// sirupAddThree.addEventListener("click", sirupAddFunc );

othersAdd.addEventListener("click", othersAddFunc);
othersAddTwp.addEventListener("click", othersAddFunc);
othersAddThree.addEventListener("click", othersAddFunc);





function capAddFunc() {
  let cap_line = document.querySelector(".capsules");
  let newEl = document.createElement("div");
  newEl.classList.add("cap_line");
  let capNameEnter = document.querySelector(".cap_name_enter").value;
  let capTimeEnter = document.querySelector(".cap_time_enter").value;
  let capHowEnter = document.querySelector(".cap_how_enter").value;
  let capDaysEnter = document.querySelector(".cap_days_to_eat").value;
  newEl.innerHTML = `
                                        <h3>
                                            <p > Cap.</p>
                                            <span class="title_btn cap">+</span>   </h3>
                                            <div class="text">
                                                <div>
                                                <div>
                                                    <input type="text" placeholder=" name" class="tab_name cap_name_post">
                                      
                                                    <div class="input_container">
                                                        <div class="input">
                                                    <input type="text" class="tab_time cap_time_post" placeholder="x + 0 + x">
                                                    <div class="input_options">
                                                         <ol>
                                                             <li>1 + 0 + 0</li>
                                                             <li>1 + 0 + 1</li>
                                                             <li>1 + 1 + 0</li>
                                                             <li>0 + 1 + 0</li>
                                                             <li>0 + 1 + 1</li>
                                                             <li>0 + 0 + 1</li>
                                                             <li>1 + 1 + 1</li>
                                                         </ol>
                                                    </div>
                                                </div>
                                            </div>
                                      
                                            <div class="input_container">
                                                <div class="input">
                                                    <input type="text" placeholder="how to eat" class="tab_how cap_how_post"> 
                                                    <div class="input_options">
                                                         <ol>
                                                            <li>After Meal</li>
                                                            <li>Before Meal</li>
                                                            
                                                            
                                                            
                                                         </ol>
                                                    </div>
                                                </div>
                                            </div>
                                      
                                            <div class="input_container">
                                                <div class="input">
                                                    <input type="text" placeholder="days to Eat" class="days_to_eat">
                                                    <div class="input_options">
                                                         <ol>
                                                            <li>7 Days</li>
                                                            <li>14 Days</li>
                                                            <li>21 Days</li>
                                                            <li>30 Days</li>
                                                            <li>Continue</li>
                                                         </ol>
                                                    </div>
                                                </div>
                                            </div>
                                            <!--  <div> 
                                                 <label for="cars">Days</label> 
                                             </div> -->
                                           </div> 
                                               <span class="btn remove_btn">x</span>
                                               <span class="btn add_new_btn">+</span>
                                            </div>
                                          </div>

  `
  cap_line.appendChild(newEl);

  newEl.querySelector(".cap_name_post").value = capNameEnter;
  newEl.querySelector(".cap_time_post").value = capTimeEnter;
  newEl.querySelector(".cap_how_post").value = capHowEnter;
  newEl.querySelector(".days_to_eat").value = capDaysEnter;

  newEl.querySelector(".title_btn.cap").addEventListener("click", capAddFunc)

  let nextAdd = newEl.querySelector(".btn.add_new_btn")
  nextAdd.addEventListener("click", capAddFunc)


  document.querySelector(".cap_name_enter").value = "";
  document.querySelector(".cap_time_enter").value = "";
  document.querySelector(".cap_how_enter").value = "";
  document.querySelector(".cap_days_to_eat").value = "";


  let itemRemove = newEl.querySelector(".text div .remove_btn");

  itemRemove.addEventListener("click", function(){
    newEl.remove()
  })

  const inpFile = document.querySelectorAll(".input_container .input input");
  inpFile.forEach((e) => {
    e.addEventListener("click", function () {
      // inpOptions.style.display = "inherit"
      this.parentElement.parentElement.classList.toggle("active");

      let fillInp =
        this.parentElement.parentElement.querySelector(".input input");

      let inpOption = this.parentElement.parentElement.querySelectorAll(
        ".input .input_options ol li"
      );

      inpOption.forEach((e) => {
        e.addEventListener("click", function () {
          fillInp.value = e.innerText;
          e.parentElement.parentElement.parentElement.parentElement.classList.remove(
            "active"
          );
        });
      });
    });
  });
}


// let removeCap = document.querySelector(" .capsules .text div .remove_btn");
// let capsule = document.querySelector(".capsules > .")  
//   removeCap.addEventListener("click", () => {
//     capsule.innerHTML = ""
// })

let removeCap = document.querySelector(".cap_line > div:nth-child(2) > div:nth-child(1) > span:nth-child(2)");

// console.log(removeTab);

// let tablets = document.querySelector(".tablets")  
// console.log(tablets);
  removeCap.addEventListener("click", () => {
    // console.log(removeTab.parentNode.parentElement.parentElement);

    removeCap.parentNode.parentElement.parentElement.remove()
})



function tabAddFunc() {
  let tablets = document.querySelector(".tablets");

  let newEl = document.createElement("div");
  newEl.classList.add("tab_line");

  //       // fillling names
  let tabNameEnter = document.querySelector(".tab_name_enter").value;
  let tabTimeEnter = document.querySelector(".tab_time_enter").value;
  let tabHowEnter = document.querySelector(".tab_how_enter").value;
  let tabDaysEnter = document.querySelector(".tab_days_to_eat").value;

  newEl.innerHTML = ` 
  <h3 >
      <p >Tab.</p>   
      <span class="title_btn tab">+</span>  </h3>
   <div class="text">
          <div>
              <div>
                  <input type="text" placeholder=" name" class="tab_name tab_name_post">
                  <!--  -->
                  <div class="input_container">
                      <div class="input">
                          <input type="text" class="tab_time tab_time_post" placeholder="x + 0 + x" >
                          <div class="input_options">
                              <ol>
                                  <li>1 + 0 + 0</li>
                                  <li>1 + 0 + 1</li>
                                  <li>1 + 1 + 0</li>
                                  <li>0 + 1 + 0</li>
                                  <li>0 + 1 + 1</li>
                                  <li>0 + 0 + 1</li>
                                  <li>1 + 1 + 1</li>
                              </ol>
                          </div>
                      </div>
                  </div>
          
                  <div class="input_container">
                      <div class="input">
                          <input type="text" placeholder="how to eat" class="tab_how tab_how_post"> 
                          <div class="input_options">
                              <ol>
                                  <li>After Meal</li>
                                  <li>Before Meal</li>
                                  
                                  
                                  
                              </ol>
                          </div>
                      </div>
                  </div>
          
                  <!-- -->
                  <div class="input_container">
                      <div class="input">
                          <input type= "text" placeholder="days to Eat" class="days_to_eat">
                          <div class="input_options">
                              <ol>
                                  <li>7 Days</li>
                                  <li>14 Days</li>
                                  <li>21 Days</li>
                                  <li>30 Days</li>
                                  <li>Continue</li>
                              </ol>
                          </div>
                      </div>
                  </div>
              </div> 
                  <span class="btn remove_btn">x</span>
                  <span class="btn add_new_btn">+</span>
          </div>
  </div>

`;

  tablets.appendChild(newEl);
  newEl.querySelector(".tab_name_post").value = tabNameEnter;
  newEl.querySelector(".tab_time_post").value = tabTimeEnter;
  newEl.querySelector(".tab_how_post").value = tabHowEnter;
  newEl.querySelector(".days_to_eat").value = tabDaysEnter;

  let nextAdd = newEl.querySelector(".btn.add_new_btn")
  nextAdd.addEventListener("click", tabAddFunc)
  newEl.querySelector(".title_btn").addEventListener("click", tabAddFunc)


  document.querySelector(".tab_name_enter").value = "";
  document.querySelector(".tab_time_enter").value = "";
  document.querySelector(".tab_how_enter").value = "";
  document.querySelector(".tab_days_to_eat").value = "";

  let itemRemove = newEl.querySelector(".text div .remove_btn");

  itemRemove.addEventListener("click", function(){
    newEl.remove()
  })

  const inpFile = document.querySelectorAll(".input_container .input input");
  inpFile.forEach((e) => {
    e.addEventListener("click", function () {
      // inpOptions.style.display = "inherit"
      this.parentElement.parentElement.classList.toggle("active");

      let fillInp =
        this.parentElement.parentElement.querySelector(".input input");

      let inpOption = this.parentElement.parentElement.querySelectorAll(
        ".input .input_options ol li"
      );

      inpOption.forEach((e) => {
        e.addEventListener("click", function () {
          fillInp.value = e.innerText;
          e.parentElement.parentElement.parentElement.parentElement.classList.remove(
            "active"
          );
        });
      });
    });
  });
}

let removeTab = document.querySelector(" .tab_line > div:nth-child(2) > div:nth-child(1) > span:nth-child(2)");

// console.log(removeTab);

// let tablets = document.querySelector(".tablets")  
// console.log(tablets);
  removeTab.addEventListener("click", () => {
    // console.log(removeTab.parentNode.parentElement.parentElement);

    removeTab.parentNode.parentElement.parentElement.remove()
})








function othersAddFunc() {
  let others_line = document.querySelector(".others_line");
  let newEl = document.createElement("div");
  newEl.classList.add("text");
  let othersNameEnter = document.querySelector(".others_name").value;
  let othersTimeEnter = document.querySelector(".others_time").value;
  let othersHowEnter = document.querySelector(".others_how").value;
  let othersDaysEnter = document.querySelector(".others_days_to_eat").value;


  let eleTitle = document.querySelector(".others_line > h3:nth-child(1) > p:nth-child(1) > input:nth-child(1)");



  let titleGet = document.querySelector(
    "div.tab_box:nth-child(5) > h4:nth-child(1) > input:nth-child(1)"
  );




  newEl.innerHTML = `
  <div class="new_line">
  <h3>
      <p class="other_new_title" >${eleTitle.value || titleGet.value}</p>  
      <span class="title_btn new_line_btn_add">+</span></h3>
  <div class="text">
      <div>
          <div>
              <input type="text" placeholder=" name" class="tab_name cap_name_post">
              <!--  -->
              <div class="input_container">
                  <div class="input">
                      <input type="text" class="tab_time cap_time_post" placeholder="x + 0 + x" >
                      <div class="input_options">
                           <ol>
                               <li>1 + 0 + 0</li>
                               <li>1 + 0 + 1</li>
                               <li>1 + 1 + 0</li>
                               <li>0 + 1 + 0</li>
                               <li>0 + 1 + 1</li>
                               <li>0 + 0 + 1</li>
                               <li>1 + 1 + 1</li>
                           </ol>
                      </div>
                  </div>
              </div>
        
              <div class="input_container">
                  <div class="input">
                      <input type="text" placeholder="how to eat" class="tab_how cap_how_post"> 
                      <div class="input_options">
                           <ol>
                              <li>After Meal</li>
                              <li>Before Meal</li>
                           </ol>
                      </div>
                  </div>
              </div>
        
              <!-- -->
              <div class="input_container">
                  <div class="input">
                      <input type= "text" placeholder="days to Eat" class="others_days_to_eat_post">
                      <div class="input_options">
                           <ol>
                              <li>7 Days</li>
                              <li>14 Days</li>
                              <li>21 Days</li>
                              <li>30 Days</li>
                              <li>Continue</li>
                           </ol>
                      </div>
                  </div>
              </div>
      
             </div> 
                 <span class="btn remove_btn">x</span>
                 <span class="btn add_new_btn">+</span>
        </div>
 </div>

</div>
      `;

      let pos = document.querySelector(".part_one")
  pos.insertBefore(newEl, others_line);
  newEl.querySelector(".tab_name").value = othersNameEnter;
  newEl.querySelector(".tab_time").value = othersTimeEnter;
  newEl.querySelector(".tab_how").value = othersHowEnter;
  newEl.querySelector(".others_days_to_eat_post").value = othersDaysEnter;

  // titleGet.value = "";
  // eleTitle.value = ""


  
  let nextAdd = newEl.querySelector(".btn.add_new_btn")
  nextAdd.addEventListener("click", othersAddFunc)





  let newLineBtnAdd = newEl.querySelector(".new_line_btn_add")
  let OtherNewTitle = newEl.querySelector(".other_new_title").innerHTML


  // newLineBtnAdd.addEventListener("click", e=>{
  //   console.log(e.target.parentElement.querySelector("p").innerHTML);
  // })

  newLineBtnAdd.addEventListener("click", othersAddFunc)

// newLineBtnAdd.addEventListener("click", othersAddFunc(OtherNewTitle))


  document.querySelector(".others_name").value = "";
  document.querySelector(".others_time").value = "";
  document.querySelector(".others_how").value = "";
  document.querySelector(".others_days_to_eat").value = "";

  let itemRemove = newEl.querySelector(".text div .remove_btn");

  itemRemove.addEventListener("click", function(){
    newEl.remove()
  })

  const inpFile = document.querySelectorAll(".input_container .input input");
  inpFile.forEach((e) => {
    e.addEventListener("click", function () {
      // inpOptions.style.display = "inherit"
      this.parentElement.parentElement.classList.toggle("active");

      let fillInp =
        this.parentElement.parentElement.querySelector(".input input");

      let inpOption = this.parentElement.parentElement.querySelectorAll(
        ".input .input_options ol li"
      );

      inpOption.forEach((e) => {
        e.addEventListener("click", function () {
          fillInp.value = e.innerText;
          e.parentElement.parentElement.parentElement.parentElement.classList.remove(
            "active"
          );
        });
      });
    });
  });
}



const inpFile = document.querySelectorAll(".input_container .input input");
inpFile.forEach((e) => {
  e.addEventListener("click", function () {
    this.parentElement.parentElement.classList.toggle("active");

    let fillInp =
      this.parentElement.parentElement.querySelector(".input input");

    let inpOption = this.parentElement.parentElement.querySelectorAll(
      ".input .input_options ol li"
    );

    inpOption.forEach((e) => {
      e.addEventListener("click", function () {
        fillInp.value = e.innerText;
        e.parentElement.parentElement.parentElement.parentElement.classList.remove(
          "active"
        );
      });
    });
  });
});

CKEDITOR.replace("blog_edit_textarea");

const freeBtn = document.querySelector("span.free_btn.btn");
const backBtn = document.querySelector("span.back_btn.btn");
freeBtn.addEventListener("click", function () {
  let PrtOne =
    this.parentElement.parentElement.querySelector(".content .part_one");
  let textArea = this.parentElement.parentElement.querySelector(".textarea_rx");
  PrtOne.style.display = "none";
  textArea.style.display = "block";

  this.style.visibility = "hidden";
  backBtn.style.visibility = "visible";
});

backBtn.addEventListener("click", function () {
  let PrtOne =
    this.parentElement.parentElement.querySelector(".content .part_one");
  let textArea = this.parentElement.parentElement.querySelector(".textarea_rx");
  PrtOne.style.display = "block";
  textArea.style.display = "none";

  this.style.visibility = "hidden";
  freeBtn.style.visibility = "visible";
});
